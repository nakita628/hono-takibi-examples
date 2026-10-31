import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediatailor/2018-04-23/openapi.yaml',
  output: './src/mediatailor/routes.ts',
  docs: {
    output: './src/mediatailor/api.md',
    curl: true,
    baseUrl: 'https://mediatailor.us-east-1.amazonaws.com',
  },
})
