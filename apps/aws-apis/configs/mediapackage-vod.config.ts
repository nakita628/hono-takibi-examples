import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediapackage-vod/2018-11-07/openapi.yaml',
  output: './src/mediapackage-vod/routes.ts',
  docs: {
    output: './src/mediapackage-vod/api.md',
    curl: true,
    baseUrl: 'https://mediapackage-vod.us-east-1.amazonaws.com',
  },
})
