import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/auditmanager/2017-07-25/openapi.yaml',
  output: './src/auditmanager/routes.ts',
  docs: {
    output: './src/auditmanager/api.md',
    curl: true,
    baseUrl: 'https://auditmanager.us-east-1.amazonaws.com',
  },
})
