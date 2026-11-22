import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/baremetalsolution/v2/openapi.yaml',
  output: './src/baremetalsolution/routes.ts',
  template: {},
  type: { output: './src/baremetalsolution/types.ts' },
  client: { output: './src/baremetalsolution/client.ts', baseUrl: '/' },
  rpc: { output: './src/baremetalsolution/rpc.ts', parseResponse: true },
  swr: { output: './src/baremetalsolution/hooks/swr.ts' },
  'tanstack-query': { output: './src/baremetalsolution/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/baremetalsolution/hooks/preact-query.ts' },
  'solid-query': { output: './src/baremetalsolution/hooks/solid-query.ts' },
  'vue-query': { output: './src/baremetalsolution/hooks/vue-query.ts' },
  'svelte-query': { output: './src/baremetalsolution/hooks/svelte-query.ts' },
  'angular-query': { output: './src/baremetalsolution/hooks/angular-query.ts' },
  docs: {
    output: './src/baremetalsolution/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
