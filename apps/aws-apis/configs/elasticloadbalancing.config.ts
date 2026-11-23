import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elasticloadbalancing/2012-06-01/openapi.yaml',
  output: './src/elasticloadbalancing/routes.ts',
  template: {},
  type: { output: './src/elasticloadbalancing/types.ts' },
  client: { output: './src/elasticloadbalancing/client.ts', baseUrl: '/' },
  rpc: { output: './src/elasticloadbalancing/rpc.ts', parseResponse: true },
  swr: { output: './src/elasticloadbalancing/hooks/swr.ts' },
  'tanstack-query': { output: './src/elasticloadbalancing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/elasticloadbalancing/hooks/preact-query.ts' },
  'solid-query': { output: './src/elasticloadbalancing/hooks/solid-query.ts' },
  'vue-query': { output: './src/elasticloadbalancing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/elasticloadbalancing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/elasticloadbalancing/hooks/angular-query.ts' },
  docs: {
    output: './src/elasticloadbalancing/api.md',
    curl: true,
    baseUrl: 'https://elasticloadbalancing.us-east-1.amazonaws.com',
  },
})
