import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/OAI/uber.yaml',
  output: './src/3-0-oai-uber/routes.ts',
  template: {},
  type: { output: './src/3-0-oai-uber/types.ts' },
  client: { output: './src/3-0-oai-uber/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-oai-uber/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-oai-uber/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-oai-uber/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-oai-uber/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-oai-uber/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-oai-uber/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-oai-uber/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-oai-uber/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-oai-uber/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
