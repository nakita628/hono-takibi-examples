import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/path_no_response.yaml',
  output: './src/3-1-path-no-response/routes.ts',
  template: {},
  type: { output: './src/3-1-path-no-response/types.ts' },
  client: { output: './src/3-1-path-no-response/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-path-no-response/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-path-no-response/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-path-no-response/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-path-no-response/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-path-no-response/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-path-no-response/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-path-no-response/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-path-no-response/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-path-no-response/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
