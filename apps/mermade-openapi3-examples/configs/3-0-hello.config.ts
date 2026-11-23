import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/hello.yaml',
  output: './src/3-0-hello/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-hello/types.ts' },
  client: { output: './src/3-0-hello/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-hello/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-hello/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-hello/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-hello/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-hello/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-hello/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-hello/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-hello/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-hello/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
