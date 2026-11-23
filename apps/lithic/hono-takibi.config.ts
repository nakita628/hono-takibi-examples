import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Lithic Developer API, official OpenAPI spec:
  // https://github.com/lithic-com/lithic-openapi/blob/8e799c885838b51938491915955488b3a907afb1/lithic-openapi.yml
  input:
    'https://raw.githubusercontent.com/lithic-com/lithic-openapi/main/lithic-openapi.yml',
  output: './src/routes.ts',
  template: { routeHandler: true },
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
    baseUrl: 'https://sandbox.lithic.com',
  },
})
