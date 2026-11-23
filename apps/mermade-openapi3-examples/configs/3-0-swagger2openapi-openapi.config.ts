import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/swagger2openapi/openapi.yaml',
  output: './src/3-0-swagger2openapi-openapi/routes.ts',
  template: {},
  type: { output: './src/3-0-swagger2openapi-openapi/types.ts' },
  client: { output: './src/3-0-swagger2openapi-openapi/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-swagger2openapi-openapi/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-swagger2openapi-openapi/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-swagger2openapi-openapi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-swagger2openapi-openapi/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-swagger2openapi-openapi/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-swagger2openapi-openapi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-swagger2openapi-openapi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-swagger2openapi-openapi/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-swagger2openapi-openapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
