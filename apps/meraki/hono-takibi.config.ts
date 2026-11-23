import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Cisco Meraki Dashboard API v1.76.0, official OpenAPI 3 spec
  // (openapi/spec2.json in the same repo is the Swagger 2.0 form):
  // https://github.com/meraki/openapi/blob/666b3fa9231c31930d6eda59598267024ea92fac/openapi/spec3.json
  input:
    'https://raw.githubusercontent.com/meraki/openapi/master/openapi/spec3.json',
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
    baseUrl: 'https://api.meraki.com/api/v1',
  },
})
