/* Parse free-form passage references like:
   "1 Samuel 28", "1 sam 28:3-25", "John 3:16", "Acts 27", "Ps 23"
   Returns { book, chapter, v1, v2, display } or null. */
window.BVV = window.BVV || {};

BVV.parseRef = function (input) {
  if (!input) return null;
  let s = input.trim().replace(/\s+/g, " ");

  // Split the trailing chapter[:verse[-verse]] part from the book name.
  // Book names can start with digits ("1 Samuel"), so anchor on the LAST
  // number group in the string.
  const m = s.match(/^(.*?)[\s.]*(\d+)(?:\s*[:.]\s*(\d+)(?:\s*[-–]\s*(\d+))?)?$/);
  if (!m) {
    // maybe just a book name — default to chapter 1
    const bookOnly = BVV.findBook(s);
    if (bookOnly) return BVV._mkRef(bookOnly, 1, null, null);
    return null;
  }

  let bookStr = m[1].trim();
  let chapter = parseInt(m[2], 10);
  let v1 = m[3] ? parseInt(m[3], 10) : null;
  let v2 = m[4] ? parseInt(m[4], 10) : null;

  let book = BVV.findBook(bookStr);

  // Handle single-chapter books referenced as "Jude 4" (verse, not chapter)
  if (book && book.ch === 1 && !v1) { v1 = chapter; v2 = chapter; chapter = 1; }

  // If book lookup failed, maybe the "chapter" digits belong to the book
  // name ("2 Timothy" typed as "2 Timothy" parses fine, but "Song of
  // Solomon 2" etc. are covered; try appending).
  if (!book) {
    book = BVV.findBook(bookStr + " " + chapter);
    if (book) { chapter = 1; v1 = null; v2 = null; }
  }
  if (!book) return null;

  if (chapter < 1) chapter = 1;
  if (chapter > book.ch) chapter = book.ch;
  if (v1 && v2 && v2 < v1) { const t = v1; v1 = v2; v2 = t; }
  if (v1 && !v2) v2 = v1;

  return BVV._mkRef(book, chapter, v1, v2);
};

BVV._mkRef = function (book, chapter, v1, v2) {
  let display = book.name + " " + chapter;
  if (v1) display += ":" + v1 + (v2 && v2 !== v1 ? "-" + v2 : "");
  return { book, chapter, v1, v2, display };
};
