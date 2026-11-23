import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/va.gov/forms/0.0.0/openapi.yaml',
  output: './src/va-gov-forms/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/va-gov-forms/types.ts' },
  client: { output: './src/va-gov-forms/client.ts', baseUrl: '/' },
  rpc: { output: './src/va-gov-forms/rpc.ts', parseResponse: true },
  swr: { output: './src/va-gov-forms/hooks/swr.ts' },
  'tanstack-query': { output: './src/va-gov-forms/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/va-gov-forms/hooks/preact-query.ts' },
  'solid-query': { output: './src/va-gov-forms/hooks/solid-query.ts' },
  'vue-query': { output: './src/va-gov-forms/hooks/vue-query.ts' },
  'svelte-query': { output: './src/va-gov-forms/hooks/svelte-query.ts' },
  'angular-query': { output: './src/va-gov-forms/hooks/angular-query.ts' },
  docs: {
    output: './src/va-gov-forms/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
