import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/pinpoint-email/2018-07-26/openapi.yaml',
  output: './src/pinpoint-email/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pinpoint-email/types.ts' },
  client: { output: './src/pinpoint-email/client.ts', baseUrl: '/' },
  rpc: { output: './src/pinpoint-email/rpc.ts', parseResponse: true },
  swr: { output: './src/pinpoint-email/hooks/swr.ts' },
  'tanstack-query': { output: './src/pinpoint-email/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pinpoint-email/hooks/preact-query.ts' },
  'solid-query': { output: './src/pinpoint-email/hooks/solid-query.ts' },
  'vue-query': { output: './src/pinpoint-email/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pinpoint-email/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pinpoint-email/hooks/angular-query.ts' },
  docs: {
    output: './src/pinpoint-email/api.md',
    curl: true,
    baseUrl: 'https://pinpoint-email.us-east-1.amazonaws.com',
  },
})
