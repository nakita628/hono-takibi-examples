import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Daytona API, official OpenAPI spec at v0.190.0:
  // https://github.com/daytonaio/daytona/blob/01c502bb1f1ff8f2885d0cd490e043736083dca8/libs/api-client-go/api/openapi.yaml
  input:
    'https://raw.githubusercontent.com/daytonaio/daytona/v0.190.0/libs/api-client-go/api/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:3000',
  },
})
