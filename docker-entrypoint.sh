#!/bin/sh
set -e

echo "Iniciando zn98-api…"

echo "Ejecutando prisma generate…"
npx prisma generate

echo "Aplicando migraciones (deploy)…"
# Si no hay migraciones o la DB ya está migrada, no queremos que falle el arranque
npx prisma migrate deploy || true

echo "Levantando API en PORT=${PORT:-3000}…"
exec node src/index.js
