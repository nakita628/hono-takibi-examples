import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/impala.travel/hotels/1.003/openapi.yaml',
  output: './src/impala-travel-hotels/routes.ts',
  docs: {
    output: './src/impala-travel-hotels/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
