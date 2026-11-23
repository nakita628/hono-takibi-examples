import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/securityhub/2018-10-26/openapi.yaml',
  output: './src/securityhub/routes.ts',
  template: {},
  type: { output: './src/securityhub/types.ts' },
  client: { output: './src/securityhub/client.ts', baseUrl: '/' },
  rpc: { output: './src/securityhub/rpc.ts', parseResponse: true },
  swr: { output: './src/securityhub/hooks/swr.ts' },
  'tanstack-query': { output: './src/securityhub/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/securityhub/hooks/preact-query.ts' },
  'solid-query': { output: './src/securityhub/hooks/solid-query.ts' },
  'vue-query': { output: './src/securityhub/hooks/vue-query.ts' },
  'svelte-query': { output: './src/securityhub/hooks/svelte-query.ts' },
  'angular-query': { output: './src/securityhub/hooks/angular-query.ts' },
  docs: {
    output: './src/securityhub/api.md',
    curl: true,
    baseUrl: 'https://securityhub.us-east-1.amazonaws.com',
  },
})
