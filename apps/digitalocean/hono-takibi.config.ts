import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // DigitalOcean API: https://github.com/digitalocean/openapi
  // The source is split into ~700 files joined by external $refs; this is the bundled
  // single-file build DigitalOcean publishes from that repository.
  input: 'https://api-engineering.nyc3.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.digitalocean.com',
  },
})
