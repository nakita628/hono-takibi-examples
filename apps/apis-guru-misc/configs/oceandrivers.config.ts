import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/oceandrivers.com/1.0/openapi.yaml',
  output: './src/oceandrivers/routes.ts',
  template: {},
  type: { output: './src/oceandrivers/types.ts' },
  client: { output: './src/oceandrivers/client.ts', baseUrl: '/' },
  rpc: { output: './src/oceandrivers/rpc.ts', parseResponse: true },
  swr: { output: './src/oceandrivers/hooks/swr.ts' },
  'tanstack-query': { output: './src/oceandrivers/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/oceandrivers/hooks/preact-query.ts' },
  'solid-query': { output: './src/oceandrivers/hooks/solid-query.ts' },
  'vue-query': { output: './src/oceandrivers/hooks/vue-query.ts' },
  'svelte-query': { output: './src/oceandrivers/hooks/svelte-query.ts' },
  'angular-query': { output: './src/oceandrivers/hooks/angular-query.ts' },
  docs: {
    output: './src/oceandrivers/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
