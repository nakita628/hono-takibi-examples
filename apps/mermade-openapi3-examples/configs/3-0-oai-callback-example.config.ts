import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/OAI/callback-example.yaml',
  output: './src/3-0-oai-callback-example/routes.ts',
  template: {},
  type: { output: './src/3-0-oai-callback-example/types.ts' },
  client: { output: './src/3-0-oai-callback-example/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-oai-callback-example/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-oai-callback-example/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-oai-callback-example/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-oai-callback-example/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-oai-callback-example/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-oai-callback-example/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-oai-callback-example/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-oai-callback-example/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-oai-callback-example/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
