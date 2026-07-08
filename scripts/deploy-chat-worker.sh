#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${GEMINI_API_KEY:-}" ]]; then
  echo "Set GEMINI_API_KEY in this cloud shell before running." >&2
  exit 1
fi
if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "Set CLOUDFLARE_API_TOKEN in this cloud shell before running." >&2
  exit 1
fi
if [[ -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]]; then
  echo "Set CLOUDFLARE_ACCOUNT_ID in this cloud shell before running." >&2
  exit 1
fi

printf '%s' "$GEMINI_API_KEY" | npx wrangler@latest secret put GEMINI_API_KEY
npx wrangler@latest deploy --no-interactive
