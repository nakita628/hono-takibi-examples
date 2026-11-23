import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/OAI/petstore.yaml',
  output: './src/3-0-oai-petstore/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-oai-petstore/types.ts' },
  client: { output: './src/3-0-oai-petstore/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-oai-petstore/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-oai-petstore/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-oai-petstore/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-oai-petstore/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-oai-petstore/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-oai-petstore/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-oai-petstore/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-oai-petstore/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-oai-petstore/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
