import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/path_var_empty_pathitem.yaml',
  output: './src/3-1-path-var-empty-pathitem/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-1-path-var-empty-pathitem/types.ts' },
  client: { output: './src/3-1-path-var-empty-pathitem/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-path-var-empty-pathitem/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-path-var-empty-pathitem/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-path-var-empty-pathitem/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-path-var-empty-pathitem/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-path-var-empty-pathitem/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-path-var-empty-pathitem/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-path-var-empty-pathitem/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-path-var-empty-pathitem/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-path-var-empty-pathitem/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
