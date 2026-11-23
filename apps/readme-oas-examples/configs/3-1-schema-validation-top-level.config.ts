import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/schema-validation-top-level.yaml',
  output: './src/3-1-schema-validation-top-level/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-1-schema-validation-top-level/types.ts' },
  client: { output: './src/3-1-schema-validation-top-level/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-schema-validation-top-level/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-schema-validation-top-level/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-schema-validation-top-level/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-schema-validation-top-level/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-schema-validation-top-level/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-schema-validation-top-level/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-schema-validation-top-level/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-schema-validation-top-level/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-schema-validation-top-level/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
