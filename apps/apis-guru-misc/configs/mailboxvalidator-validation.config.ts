import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mailboxvalidator.com/validation/0.1/openapi.yaml',
  output: './src/mailboxvalidator-validation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mailboxvalidator-validation/types.ts' },
  client: { output: './src/mailboxvalidator-validation/client.ts', baseUrl: '/' },
  rpc: { output: './src/mailboxvalidator-validation/rpc.ts', parseResponse: true },
  swr: { output: './src/mailboxvalidator-validation/hooks/swr.ts' },
  'tanstack-query': { output: './src/mailboxvalidator-validation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mailboxvalidator-validation/hooks/preact-query.ts' },
  'solid-query': { output: './src/mailboxvalidator-validation/hooks/solid-query.ts' },
  'vue-query': { output: './src/mailboxvalidator-validation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mailboxvalidator-validation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mailboxvalidator-validation/hooks/angular-query.ts' },
  docs: {
    output: './src/mailboxvalidator-validation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
