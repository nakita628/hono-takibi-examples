import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/clouddebugger/v2/openapi.yaml',
  output: './src/clouddebugger/routes.ts',
  docs: {
    output: './src/clouddebugger/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
