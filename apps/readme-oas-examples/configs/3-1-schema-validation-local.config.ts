import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/schema-validation-local.yaml',
  output: './src/3-1-schema-validation-local/routes.ts',
  template: {},
  type: { output: './src/3-1-schema-validation-local/types.ts' },
  client: { output: './src/3-1-schema-validation-local/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-schema-validation-local/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-schema-validation-local/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-schema-validation-local/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-schema-validation-local/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-schema-validation-local/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-schema-validation-local/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-schema-validation-local/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-schema-validation-local/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-schema-validation-local/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
