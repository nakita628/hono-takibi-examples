import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/personio.de/personnel/1.0/openapi.yaml',
  output: './src/personio-de-personnel/routes.ts',
  template: {},
  type: { output: './src/personio-de-personnel/types.ts' },
  client: { output: './src/personio-de-personnel/client.ts', baseUrl: '/' },
  rpc: { output: './src/personio-de-personnel/rpc.ts', parseResponse: true },
  swr: { output: './src/personio-de-personnel/hooks/swr.ts' },
  'tanstack-query': { output: './src/personio-de-personnel/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/personio-de-personnel/hooks/preact-query.ts' },
  'solid-query': { output: './src/personio-de-personnel/hooks/solid-query.ts' },
  'vue-query': { output: './src/personio-de-personnel/hooks/vue-query.ts' },
  'svelte-query': { output: './src/personio-de-personnel/hooks/svelte-query.ts' },
  'angular-query': { output: './src/personio-de-personnel/hooks/angular-query.ts' },
  docs: {
    output: './src/personio-de-personnel/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
