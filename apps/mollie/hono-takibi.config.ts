import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Mollie API, official OpenAPI spec:
  // https://github.com/mollie/openapi/blob/eae37cfdc102ed8ebc48e6a18a54e463ac7382ee/specs.yaml
  input: 'https://raw.githubusercontent.com/mollie/openapi/main/specs.yaml',
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
    baseUrl: 'https://api.mollie.com',
  },
})
