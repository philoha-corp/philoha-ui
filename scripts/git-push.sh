#!/usr/bin/env bash
set -euo pipefail

TOKEN=$(gh auth token -u phidn)
ENCODED=$(echo -n "x-access-token:${TOKEN}" | base64)

git -c "http.https://github.com/.extraheader=Authorization: basic ${ENCODED}" push origin master
