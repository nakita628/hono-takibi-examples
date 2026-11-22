import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/sms/9.3.0/openapi.yaml',
  output: './src/sms/routes.ts',
  template: {},
  type: { output: './src/sms/types.ts' },
  client: { output: './src/sms/client.ts', baseUrl: '/' },
  rpc: { output: './src/sms/rpc.ts', parseResponse: true },
  swr: { output: './src/sms/hooks/swr.ts' },
  'tanstack-query': { output: './src/sms/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sms/hooks/preact-query.ts' },
  'solid-query': { output: './src/sms/hooks/solid-query.ts' },
  'vue-query': { output: './src/sms/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sms/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sms/hooks/angular-query.ts' },
  docs: {
    output: './src/sms/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
