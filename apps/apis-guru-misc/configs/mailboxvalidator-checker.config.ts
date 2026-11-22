import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mailboxvalidator.com/checker/1.0.0/openapi.yaml',
  output: './src/mailboxvalidator-checker/routes.ts',
  template: {},
  type: { output: './src/mailboxvalidator-checker/types.ts' },
  client: { output: './src/mailboxvalidator-checker/client.ts', baseUrl: '/' },
  rpc: { output: './src/mailboxvalidator-checker/rpc.ts', parseResponse: true },
  swr: { output: './src/mailboxvalidator-checker/hooks/swr.ts' },
  'tanstack-query': { output: './src/mailboxvalidator-checker/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mailboxvalidator-checker/hooks/preact-query.ts' },
  'solid-query': { output: './src/mailboxvalidator-checker/hooks/solid-query.ts' },
  'vue-query': { output: './src/mailboxvalidator-checker/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mailboxvalidator-checker/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mailboxvalidator-checker/hooks/angular-query.ts' },
  docs: {
    output: './src/mailboxvalidator-checker/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
