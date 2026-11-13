import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Stytch API, official OpenAPI spec:
  // https://github.com/stytchauth/stytch-openapi/blob/ec16a0c52c21e2be8e28c1e75df7afd9d227fc55/openapi.yml
  input: 'https://raw.githubusercontent.com/stytchauth/stytch-openapi/main/openapi.yml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.stytch.com',
  },
})
