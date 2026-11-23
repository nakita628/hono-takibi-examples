import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/telnyx.com/2.0.0/openapi.yaml',
  output: './src/telnyx/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/telnyx/types.ts' },
  client: { output: './src/telnyx/client.ts', baseUrl: '/' },
  rpc: { output: './src/telnyx/rpc.ts', parseResponse: true },
  swr: { output: './src/telnyx/hooks/swr.ts' },
  'tanstack-query': { output: './src/telnyx/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/telnyx/hooks/preact-query.ts' },
  'solid-query': { output: './src/telnyx/hooks/solid-query.ts' },
  'vue-query': { output: './src/telnyx/hooks/vue-query.ts' },
  'svelte-query': { output: './src/telnyx/hooks/svelte-query.ts' },
  'angular-query': { output: './src/telnyx/hooks/angular-query.ts' },
  docs: {
    output: './src/telnyx/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
