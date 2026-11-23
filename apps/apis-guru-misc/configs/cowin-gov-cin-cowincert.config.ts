import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/cowin.gov.cin/cowincert/1.0.0/openapi.yaml',
  output: './src/cowin-gov-cin-cowincert/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cowin-gov-cin-cowincert/types.ts' },
  client: { output: './src/cowin-gov-cin-cowincert/client.ts', baseUrl: '/' },
  rpc: { output: './src/cowin-gov-cin-cowincert/rpc.ts', parseResponse: true },
  swr: { output: './src/cowin-gov-cin-cowincert/hooks/swr.ts' },
  'tanstack-query': { output: './src/cowin-gov-cin-cowincert/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cowin-gov-cin-cowincert/hooks/preact-query.ts' },
  'solid-query': { output: './src/cowin-gov-cin-cowincert/hooks/solid-query.ts' },
  'vue-query': { output: './src/cowin-gov-cin-cowincert/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cowin-gov-cin-cowincert/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cowin-gov-cin-cowincert/hooks/angular-query.ts' },
  docs: {
    output: './src/cowin-gov-cin-cowincert/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
