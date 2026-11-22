import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fraudlabspro.com/sms-verification/1.0/openapi.yaml',
  output: './src/fraudlabspro-sms-verification/routes.ts',
  template: {},
  type: { output: './src/fraudlabspro-sms-verification/types.ts' },
  client: { output: './src/fraudlabspro-sms-verification/client.ts', baseUrl: '/' },
  rpc: { output: './src/fraudlabspro-sms-verification/rpc.ts', parseResponse: true },
  swr: { output: './src/fraudlabspro-sms-verification/hooks/swr.ts' },
  'tanstack-query': { output: './src/fraudlabspro-sms-verification/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fraudlabspro-sms-verification/hooks/preact-query.ts' },
  'solid-query': { output: './src/fraudlabspro-sms-verification/hooks/solid-query.ts' },
  'vue-query': { output: './src/fraudlabspro-sms-verification/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fraudlabspro-sms-verification/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fraudlabspro-sms-verification/hooks/angular-query.ts' },
  docs: {
    output: './src/fraudlabspro-sms-verification/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
