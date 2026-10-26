import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Asana App Components API: https://github.com/Asana/openapi (defs/app_components_oas.yaml)
  input: 'https://raw.githubusercontent.com/Asana/openapi/master/defs/app_components_oas.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
