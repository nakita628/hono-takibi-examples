import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/schema-enums.yaml',
  output: './src/3-0-schema-enums/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-schema-enums/types.ts' },
  client: { output: './src/3-0-schema-enums/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-schema-enums/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-schema-enums/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-schema-enums/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-schema-enums/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-schema-enums/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-schema-enums/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-schema-enums/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-schema-enums/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-schema-enums/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
