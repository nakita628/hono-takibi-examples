import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Telnyx API v2, OpenAPI 3 published by Telnyx:
  // https://github.com/team-telnyx/openapi/blob/master/openapi/spec3.json
  input:
    'https://raw.githubusercontent.com/team-telnyx/openapi/master/openapi/spec3.json',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.telnyx.com/v2',
  },
})
