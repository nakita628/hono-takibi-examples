import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/lufthansa.com/public/1.0/openapi.yaml',
  output: './src/lufthansa-public/routes.ts',
  template: {},
  type: { output: './src/lufthansa-public/types.ts' },
  client: { output: './src/lufthansa-public/client.ts', baseUrl: '/' },
  rpc: { output: './src/lufthansa-public/rpc.ts', parseResponse: true },
  swr: { output: './src/lufthansa-public/hooks/swr.ts' },
  'tanstack-query': { output: './src/lufthansa-public/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lufthansa-public/hooks/preact-query.ts' },
  'solid-query': { output: './src/lufthansa-public/hooks/solid-query.ts' },
  'vue-query': { output: './src/lufthansa-public/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lufthansa-public/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lufthansa-public/hooks/angular-query.ts' },
  docs: {
    output: './src/lufthansa-public/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
