import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudprofiler/v2/openapi.yaml',
  output: './src/cloudprofiler/routes.ts',
  docs: {
    output: './src/cloudprofiler/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
