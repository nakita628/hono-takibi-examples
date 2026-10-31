import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/oslogin/v1beta/openapi.yaml',
  output: './src/oslogin/routes.ts',
  docs: {
    output: './src/oslogin/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
