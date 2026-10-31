import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/remotebuildexecution/v1alpha/openapi.yaml',
  output: './src/remotebuildexecution/routes.ts',
  docs: {
    output: './src/remotebuildexecution/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
