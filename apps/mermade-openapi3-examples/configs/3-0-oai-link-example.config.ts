import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/OAI/link-example.yaml',
  output: './src/3-0-oai-link-example/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-oai-link-example/types.ts' },
  client: { output: './src/3-0-oai-link-example/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-oai-link-example/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-oai-link-example/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-oai-link-example/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-oai-link-example/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-oai-link-example/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-oai-link-example/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-oai-link-example/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-oai-link-example/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-oai-link-example/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
