import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Mailchimp Transactional API, official OpenAPI spec:
  // https://github.com/mailchimp/mailchimp-client-lib-codegen/blob/93f2cc719a314605947bd0642716f5e0a060cd55/spec/transactional.openapi.json
  input: 'https://raw.githubusercontent.com/mailchimp/mailchimp-client-lib-codegen/main/spec/transactional.openapi.json',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://mandrillapp.com/api/1.4',
  },
})
