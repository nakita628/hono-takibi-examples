import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Fly.io Machines API, official OpenAPI spec:
  // https://github.com/superfly/fly-openapi-sdk/blob/6986a440d86aa973e4213cc1b5d6e14dbbb06759/go/api/openapi.yaml
  input:
    'https://raw.githubusercontent.com/superfly/fly-openapi-sdk/main/go/api/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.machines.dev/v1',
  },
})
