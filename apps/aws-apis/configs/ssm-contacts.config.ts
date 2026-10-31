import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ssm-contacts/2021-05-03/openapi.yaml',
  output: './src/ssm-contacts/routes.ts',
  docs: {
    output: './src/ssm-contacts/api.md',
    curl: true,
    baseUrl: 'https://ssm-contacts.us-east-1.amazonaws.com',
  },
})
