import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/resourcesettings/v1/openapi.yaml',
  output: './src/resourcesettings/routes.ts',
  docs: {
    output: './src/resourcesettings/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
