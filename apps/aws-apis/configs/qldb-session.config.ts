import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/qldb-session/2019-07-11/openapi.yaml',
  output: './src/qldb-session/routes.ts',
  docs: {
    output: './src/qldb-session/api.md',
    curl: true,
    baseUrl: 'https://qldb-session.us-east-1.amazonaws.com',
  },
})
