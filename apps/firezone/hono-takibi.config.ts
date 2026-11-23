import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Firezone API, official OpenAPI spec:
  // https://github.com/firezone/firezone/blob/c83584836ab8be284f124e0d230f38340910c20d/elixir/priv/static/openapi.json
  input:
    'https://raw.githubusercontent.com/firezone/firezone/main/elixir/priv/static/openapi.json',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.firezone.dev',
  },
})
