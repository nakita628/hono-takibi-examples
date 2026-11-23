import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/va.gov/confirmation/0.0.1/openapi.yaml',
  output: './src/va-gov-confirmation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/va-gov-confirmation/types.ts' },
  client: { output: './src/va-gov-confirmation/client.ts', baseUrl: '/' },
  rpc: { output: './src/va-gov-confirmation/rpc.ts', parseResponse: true },
  swr: { output: './src/va-gov-confirmation/hooks/swr.ts' },
  'tanstack-query': { output: './src/va-gov-confirmation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/va-gov-confirmation/hooks/preact-query.ts' },
  'solid-query': { output: './src/va-gov-confirmation/hooks/solid-query.ts' },
  'vue-query': { output: './src/va-gov-confirmation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/va-gov-confirmation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/va-gov-confirmation/hooks/angular-query.ts' },
  docs: {
    output: './src/va-gov-confirmation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
