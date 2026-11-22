import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/lgtm.com/v1.0/openapi.yaml',
  output: './src/lgtm/routes.ts',
  template: {},
  type: { output: './src/lgtm/types.ts' },
  client: { output: './src/lgtm/client.ts', baseUrl: '/' },
  rpc: { output: './src/lgtm/rpc.ts', parseResponse: true },
  swr: { output: './src/lgtm/hooks/swr.ts' },
  'tanstack-query': { output: './src/lgtm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lgtm/hooks/preact-query.ts' },
  'solid-query': { output: './src/lgtm/hooks/solid-query.ts' },
  'vue-query': { output: './src/lgtm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lgtm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lgtm/hooks/angular-query.ts' },
  docs: {
    output: './src/lgtm/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
