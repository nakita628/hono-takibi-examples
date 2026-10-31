import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/applicationcostprofiler/2020-09-10/openapi.yaml',
  output: './src/applicationcostprofiler/routes.ts',
  docs: {
    output: './src/applicationcostprofiler/api.md',
    curl: true,
    baseUrl: 'https://applicationcostprofiler.us-east-1.amazonaws.com',
  },
})
