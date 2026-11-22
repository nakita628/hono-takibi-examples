import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/analyticsadmin/v1beta/openapi.yaml',
  output: './src/analyticsadmin/routes.ts',
  template: {},
  type: { output: './src/analyticsadmin/types.ts' },
  client: { output: './src/analyticsadmin/client.ts', baseUrl: '/' },
  rpc: { output: './src/analyticsadmin/rpc.ts', parseResponse: true },
  swr: { output: './src/analyticsadmin/hooks/swr.ts' },
  'tanstack-query': { output: './src/analyticsadmin/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/analyticsadmin/hooks/preact-query.ts' },
  'solid-query': { output: './src/analyticsadmin/hooks/solid-query.ts' },
  'vue-query': { output: './src/analyticsadmin/hooks/vue-query.ts' },
  'svelte-query': { output: './src/analyticsadmin/hooks/svelte-query.ts' },
  'angular-query': { output: './src/analyticsadmin/hooks/angular-query.ts' },
  docs: {
    output: './src/analyticsadmin/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
