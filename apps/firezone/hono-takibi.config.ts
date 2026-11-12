import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Firezone API, official OpenAPI spec:
  // https://github.com/firezone/firezone/blob/c83584836ab8be284f124e0d230f38340910c20d/elixir/priv/static/openapi.json
  input:
    'https://raw.githubusercontent.com/firezone/firezone/main/elixir/priv/static/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.firezone.dev',
  },
})
