import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/schema.yaml',
  output: './src/3-1-schema/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-1-schema/types.ts' },
  client: { output: './src/3-1-schema/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-schema/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-schema/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-schema/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-schema/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-schema/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-schema/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-schema/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-schema/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-schema/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
