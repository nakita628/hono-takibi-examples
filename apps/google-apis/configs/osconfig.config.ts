import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/osconfig/v1beta/openapi.yaml',
  output: './src/osconfig/routes.ts',
  docs: {
    output: './src/osconfig/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
