import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/extendsclass.com/json-storage/0.1/openapi.yaml',
  output: './src/extendsclass-json-storage/routes.ts',
  template: {},
  type: { output: './src/extendsclass-json-storage/types.ts' },
  client: { output: './src/extendsclass-json-storage/client.ts', baseUrl: '/' },
  rpc: { output: './src/extendsclass-json-storage/rpc.ts', parseResponse: true },
  swr: { output: './src/extendsclass-json-storage/hooks/swr.ts' },
  'tanstack-query': { output: './src/extendsclass-json-storage/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/extendsclass-json-storage/hooks/preact-query.ts' },
  'solid-query': { output: './src/extendsclass-json-storage/hooks/solid-query.ts' },
  'vue-query': { output: './src/extendsclass-json-storage/hooks/vue-query.ts' },
  'svelte-query': { output: './src/extendsclass-json-storage/hooks/svelte-query.ts' },
  'angular-query': { output: './src/extendsclass-json-storage/hooks/angular-query.ts' },
  docs: {
    output: './src/extendsclass-json-storage/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
