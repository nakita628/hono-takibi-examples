import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotsitewise/2019-12-02/openapi.yaml',
  output: './src/iotsitewise/routes.ts',
  docs: {
    output: './src/iotsitewise/api.md',
    curl: true,
    baseUrl: 'https://iotsitewise.us-east-1.amazonaws.com',
  },
})
