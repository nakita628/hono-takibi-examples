import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/schema-types.yaml',
  output: './src/3-0-schema-types/routes.ts',
  template: {},
  type: { output: './src/3-0-schema-types/types.ts' },
  client: { output: './src/3-0-schema-types/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-schema-types/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-schema-types/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-schema-types/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-schema-types/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-schema-types/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-schema-types/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-schema-types/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-schema-types/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-schema-types/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
