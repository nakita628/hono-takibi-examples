import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/OAI/api-with-examples.yaml',
  output: './src/3-0-oai-api-with-examples/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-oai-api-with-examples/types.ts' },
  client: { output: './src/3-0-oai-api-with-examples/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-oai-api-with-examples/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-oai-api-with-examples/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-oai-api-with-examples/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-oai-api-with-examples/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-oai-api-with-examples/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-oai-api-with-examples/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-oai-api-with-examples/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-oai-api-with-examples/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-oai-api-with-examples/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
