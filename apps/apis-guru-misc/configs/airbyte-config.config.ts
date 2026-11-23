import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/airbyte.local/config/1.0.0/openapi.yaml',
  output: './src/airbyte-config/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/airbyte-config/types.ts' },
  client: { output: './src/airbyte-config/client.ts', baseUrl: '/' },
  rpc: { output: './src/airbyte-config/rpc.ts', parseResponse: true },
  swr: { output: './src/airbyte-config/hooks/swr.ts' },
  'tanstack-query': { output: './src/airbyte-config/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/airbyte-config/hooks/preact-query.ts' },
  'solid-query': { output: './src/airbyte-config/hooks/solid-query.ts' },
  'vue-query': { output: './src/airbyte-config/hooks/vue-query.ts' },
  'svelte-query': { output: './src/airbyte-config/hooks/svelte-query.ts' },
  'angular-query': { output: './src/airbyte-config/hooks/angular-query.ts' },
  docs: {
    output: './src/airbyte-config/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
