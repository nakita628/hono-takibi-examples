import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Equinix Metal API, official OpenAPI spec at v0.30.0:
  // https://github.com/equinix-labs/metal-go/blob/c497ae5e8a10e39ce251d7b446c7bdf983695af9/api/openapi.yaml
  input:
    'https://raw.githubusercontent.com/equinix-labs/metal-go/v0.30.0/api/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.equinix.com/metal/v1',
  },
})
