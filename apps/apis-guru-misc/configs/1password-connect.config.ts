import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/1password.local/connect/1.5.7/openapi.yaml',
  output: './src/1password-connect/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/1password-connect/types.ts' },
  client: { output: './src/1password-connect/client.ts', baseUrl: '/' },
  rpc: { output: './src/1password-connect/rpc.ts', parseResponse: true },
  swr: { output: './src/1password-connect/hooks/swr.ts' },
  'tanstack-query': { output: './src/1password-connect/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/1password-connect/hooks/preact-query.ts' },
  'solid-query': { output: './src/1password-connect/hooks/solid-query.ts' },
  'vue-query': { output: './src/1password-connect/hooks/vue-query.ts' },
  'svelte-query': { output: './src/1password-connect/hooks/svelte-query.ts' },
  'angular-query': { output: './src/1password-connect/hooks/angular-query.ts' },
  docs: {
    output: './src/1password-connect/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
