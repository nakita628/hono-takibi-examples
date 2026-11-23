import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/openapi.yaml',
  output: './src/3-0-openapi/routes.ts',
  template: {},
  type: { output: './src/3-0-openapi/types.ts' },
  client: { output: './src/3-0-openapi/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-openapi/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-openapi/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-openapi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-openapi/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-openapi/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-openapi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-openapi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-openapi/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-openapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
