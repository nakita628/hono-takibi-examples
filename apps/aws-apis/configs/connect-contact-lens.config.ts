import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/connect-contact-lens/2020-08-21/openapi.yaml',
  output: './src/connect-contact-lens/routes.ts',
  docs: {
    output: './src/connect-contact-lens/api.md',
    curl: true,
    baseUrl: 'https://connect-contact-lens.us-east-1.amazonaws.com',
  },
})
