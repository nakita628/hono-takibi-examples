import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/peoplefinderspro.com/1.0.0/openapi.yaml',
  output: './src/peoplefinderspro/routes.ts',
  docs: {
    output: './src/peoplefinderspro/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
