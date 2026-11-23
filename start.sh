#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if ! command -v orb >/dev/null 2>&1; then
  echo "Error: OrbStack CLI (orb) not found." >&2
  exit 1
fi

if [[ "$(orb status 2>/dev/null || true)" != "Running" ]]; then
  echo "Starting OrbStack..."
  orb start
fi

if [[ ! -f .env ]]; then
  echo "Generating .env with secure TokenHub secrets..."
  cat > .env <<EOF
COMPOSE_PROJECT_NAME=tokenhub
TOKENHUB_PORT=3000
POSTGRES_PASSWORD=$(openssl rand -hex 20)
REDIS_PASSWORD=$(openssl rand -hex 20)
SESSION_SECRET=$(openssl rand -hex 32)
CRYPTO_SECRET=$(openssl rand -hex 32)
EOF
  chmod 600 .env
fi

mkdir -p data logs

echo "Building and starting TokenHub via OrbStack Docker Compose..."
docker compose up -d --build

echo ""
echo "TokenHub status:"
docker compose ps
echo ""
echo "OrbStack URL : https://tokenhub.orb.local"
echo "Local URL    : http://localhost:${TOKENHUB_PORT:-3000}"
