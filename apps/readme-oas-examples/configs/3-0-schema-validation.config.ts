import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/schema-validation.yaml',
  output: './src/3-0-schema-validation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-schema-validation/types.ts' },
  client: { output: './src/3-0-schema-validation/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-schema-validation/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-schema-validation/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-schema-validation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-schema-validation/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-schema-validation/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-schema-validation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-schema-validation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-schema-validation/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-schema-validation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
