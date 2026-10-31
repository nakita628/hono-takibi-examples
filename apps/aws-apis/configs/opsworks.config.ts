import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/opsworks/2013-02-18/openapi.yaml',
  output: './src/opsworks/routes.ts',
  docs: {
    output: './src/opsworks/api.md',
    curl: true,
    baseUrl: 'https://opsworks.us-east-1.amazonaws.com',
  },
})
