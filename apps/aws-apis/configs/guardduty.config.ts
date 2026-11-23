import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/guardduty/2017-11-28/openapi.yaml',
  output: './src/guardduty/routes.ts',
  template: {},
  type: { output: './src/guardduty/types.ts' },
  client: { output: './src/guardduty/client.ts', baseUrl: '/' },
  rpc: { output: './src/guardduty/rpc.ts', parseResponse: true },
  swr: { output: './src/guardduty/hooks/swr.ts' },
  'tanstack-query': { output: './src/guardduty/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/guardduty/hooks/preact-query.ts' },
  'solid-query': { output: './src/guardduty/hooks/solid-query.ts' },
  'vue-query': { output: './src/guardduty/hooks/vue-query.ts' },
  'svelte-query': { output: './src/guardduty/hooks/svelte-query.ts' },
  'angular-query': { output: './src/guardduty/hooks/angular-query.ts' },
  docs: {
    output: './src/guardduty/api.md',
    curl: true,
    baseUrl: 'https://guardduty.us-east-1.amazonaws.com',
  },
})
