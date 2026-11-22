import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Vimeo API 3.4, official OpenAPI spec:
  // https://github.com/vimeo/openapi/blob/febb90093551f9e00571c5c25230df08e9af78dd/api.yaml
  input: 'https://raw.githubusercontent.com/vimeo/openapi/master/api.yaml',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.vimeo.com',
  },
})
