import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/netlicensing.io/2.x/openapi.yaml',
  output: './src/netlicensing-io/routes.ts',
  template: {},
  type: { output: './src/netlicensing-io/types.ts' },
  client: { output: './src/netlicensing-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/netlicensing-io/rpc.ts', parseResponse: true },
  swr: { output: './src/netlicensing-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/netlicensing-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/netlicensing-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/netlicensing-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/netlicensing-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/netlicensing-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/netlicensing-io/hooks/angular-query.ts' },
  docs: {
    output: './src/netlicensing-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
