import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Cisco Meraki Dashboard API v1.76.0, official OpenAPI 3 spec
  // (openapi/spec2.json in the same repo is the Swagger 2.0 form):
  // https://github.com/meraki/openapi/blob/666b3fa9231c31930d6eda59598267024ea92fac/openapi/spec3.json
  input:
    'https://raw.githubusercontent.com/meraki/openapi/master/openapi/spec3.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.meraki.com/api/v1',
  },
})
