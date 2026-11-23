import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/schema-deprecated.yaml',
  output: './src/3-0-schema-deprecated/routes.ts',
  template: {},
  type: { output: './src/3-0-schema-deprecated/types.ts' },
  client: { output: './src/3-0-schema-deprecated/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-schema-deprecated/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-schema-deprecated/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-schema-deprecated/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-schema-deprecated/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-schema-deprecated/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-schema-deprecated/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-schema-deprecated/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-schema-deprecated/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-schema-deprecated/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
