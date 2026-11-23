import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/vault_payment_tokens_v3.json',
  output: './src/vault_payment_tokens_v3/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/vault_payment_tokens_v3/types.ts' },
  client: { output: './src/vault_payment_tokens_v3/client.ts', baseUrl: '/' },
  rpc: { output: './src/vault_payment_tokens_v3/rpc.ts', parseResponse: true },
  swr: { output: './src/vault_payment_tokens_v3/hooks/swr.ts' },
  'tanstack-query': { output: './src/vault_payment_tokens_v3/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vault_payment_tokens_v3/hooks/preact-query.ts' },
  'solid-query': { output: './src/vault_payment_tokens_v3/hooks/solid-query.ts' },
  'vue-query': { output: './src/vault_payment_tokens_v3/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vault_payment_tokens_v3/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vault_payment_tokens_v3/hooks/angular-query.ts' },
  docs: {
    output: './src/vault_payment_tokens_v3/api.md',
    curl: true,
    baseUrl: 'https://api-m.paypal.com',
  },
})
