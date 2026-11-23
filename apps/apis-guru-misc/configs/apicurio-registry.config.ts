import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apicurio.local/registry/2.4.x/openapi.yaml',
  output: './src/apicurio-registry/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apicurio-registry/types.ts' },
  client: { output: './src/apicurio-registry/client.ts', baseUrl: '/' },
  rpc: { output: './src/apicurio-registry/rpc.ts', parseResponse: true },
  swr: { output: './src/apicurio-registry/hooks/swr.ts' },
  'tanstack-query': { output: './src/apicurio-registry/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apicurio-registry/hooks/preact-query.ts' },
  'solid-query': { output: './src/apicurio-registry/hooks/solid-query.ts' },
  'vue-query': { output: './src/apicurio-registry/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apicurio-registry/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apicurio-registry/hooks/angular-query.ts' },
  docs: {
    output: './src/apicurio-registry/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
