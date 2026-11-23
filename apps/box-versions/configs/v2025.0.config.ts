import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/box/box-openapi/main/openapi/openapi-v2025.0.json',
  output: './src/v2025.0/routes.ts',
  template: {},
  type: { output: './src/v2025.0/types.ts' },
  client: { output: './src/v2025.0/client.ts', baseUrl: '/' },
  rpc: { output: './src/v2025.0/rpc.ts', parseResponse: true },
  swr: { output: './src/v2025.0/hooks/swr.ts' },
  'tanstack-query': { output: './src/v2025.0/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/v2025.0/hooks/preact-query.ts' },
  'solid-query': { output: './src/v2025.0/hooks/solid-query.ts' },
  'vue-query': { output: './src/v2025.0/hooks/vue-query.ts' },
  'svelte-query': { output: './src/v2025.0/hooks/svelte-query.ts' },
  'angular-query': { output: './src/v2025.0/hooks/angular-query.ts' },
  docs: {
    output: './src/v2025.0/api.md',
    curl: true,
    baseUrl: 'https://api.box.com/2.0',
  },
})
