import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mailboxvalidator.com/disposable/1.0.0/openapi.yaml',
  output: './src/mailboxvalidator-disposable/routes.ts',
  template: {},
  type: { output: './src/mailboxvalidator-disposable/types.ts' },
  client: { output: './src/mailboxvalidator-disposable/client.ts', baseUrl: '/' },
  rpc: { output: './src/mailboxvalidator-disposable/rpc.ts', parseResponse: true },
  swr: { output: './src/mailboxvalidator-disposable/hooks/swr.ts' },
  'tanstack-query': { output: './src/mailboxvalidator-disposable/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mailboxvalidator-disposable/hooks/preact-query.ts' },
  'solid-query': { output: './src/mailboxvalidator-disposable/hooks/solid-query.ts' },
  'vue-query': { output: './src/mailboxvalidator-disposable/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mailboxvalidator-disposable/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mailboxvalidator-disposable/hooks/angular-query.ts' },
  docs: {
    output: './src/mailboxvalidator-disposable/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
