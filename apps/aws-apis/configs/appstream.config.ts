import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/appstream/2016-12-01/openapi.yaml',
  output: './src/appstream/routes.ts',
  docs: {
    output: './src/appstream/api.md',
    curl: true,
    baseUrl: 'https://appstream.us-east-1.amazonaws.com',
  },
})
