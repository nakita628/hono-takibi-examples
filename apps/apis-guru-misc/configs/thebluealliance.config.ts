import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/thebluealliance.com/3.8.2/openapi.yaml',
  output: './src/thebluealliance/routes.ts',
  template: {},
  type: { output: './src/thebluealliance/types.ts' },
  client: { output: './src/thebluealliance/client.ts', baseUrl: '/' },
  rpc: { output: './src/thebluealliance/rpc.ts', parseResponse: true },
  swr: { output: './src/thebluealliance/hooks/swr.ts' },
  'tanstack-query': { output: './src/thebluealliance/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/thebluealliance/hooks/preact-query.ts' },
  'solid-query': { output: './src/thebluealliance/hooks/solid-query.ts' },
  'vue-query': { output: './src/thebluealliance/hooks/vue-query.ts' },
  'svelte-query': { output: './src/thebluealliance/hooks/svelte-query.ts' },
  'angular-query': { output: './src/thebluealliance/hooks/angular-query.ts' },
  docs: {
    output: './src/thebluealliance/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
