import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sms77.io/1.0.0/openapi.yaml',
  output: './src/sms77-io/routes.ts',
  template: {},
  type: { output: './src/sms77-io/types.ts' },
  client: { output: './src/sms77-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/sms77-io/rpc.ts', parseResponse: true },
  swr: { output: './src/sms77-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/sms77-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sms77-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/sms77-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/sms77-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sms77-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sms77-io/hooks/angular-query.ts' },
  docs: {
    output: './src/sms77-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
