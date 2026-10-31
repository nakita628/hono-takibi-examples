import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ecr-public/2020-10-30/openapi.yaml',
  output: './src/ecr-public/routes.ts',
  docs: {
    output: './src/ecr-public/api.md',
    curl: true,
    baseUrl: 'https://ecr-public.us-east-1.amazonaws.com',
  },
})
