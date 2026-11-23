import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getfullnameparsedmatch/1.0.0/openapi.yaml',
  output: './src/getfullnameparsedmatch/routes.ts',
  template: {},
  type: { output: './src/getfullnameparsedmatch/types.ts' },
  client: { output: './src/getfullnameparsedmatch/client.ts', baseUrl: '/' },
  rpc: { output: './src/getfullnameparsedmatch/rpc.ts', parseResponse: true },
  swr: { output: './src/getfullnameparsedmatch/hooks/swr.ts' },
  'tanstack-query': { output: './src/getfullnameparsedmatch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getfullnameparsedmatch/hooks/preact-query.ts' },
  'solid-query': { output: './src/getfullnameparsedmatch/hooks/solid-query.ts' },
  'vue-query': { output: './src/getfullnameparsedmatch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getfullnameparsedmatch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getfullnameparsedmatch/hooks/angular-query.ts' },
  docs: {
    output: './src/getfullnameparsedmatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
