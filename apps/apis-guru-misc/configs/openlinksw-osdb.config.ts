import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openlinksw.com/osdb/1.0.0/openapi.yaml',
  output: './src/openlinksw-osdb/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/openlinksw-osdb/types.ts' },
  client: { output: './src/openlinksw-osdb/client.ts', baseUrl: '/' },
  rpc: { output: './src/openlinksw-osdb/rpc.ts', parseResponse: true },
  swr: { output: './src/openlinksw-osdb/hooks/swr.ts' },
  'tanstack-query': { output: './src/openlinksw-osdb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openlinksw-osdb/hooks/preact-query.ts' },
  'solid-query': { output: './src/openlinksw-osdb/hooks/solid-query.ts' },
  'vue-query': { output: './src/openlinksw-osdb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openlinksw-osdb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openlinksw-osdb/hooks/angular-query.ts' },
  docs: {
    output: './src/openlinksw-osdb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
