import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/schema-additional-properties.yaml',
  output: './src/3-0-schema-additional-properties/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-schema-additional-properties/types.ts' },
  client: { output: './src/3-0-schema-additional-properties/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-schema-additional-properties/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-schema-additional-properties/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-schema-additional-properties/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-schema-additional-properties/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-schema-additional-properties/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-schema-additional-properties/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-schema-additional-properties/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-schema-additional-properties/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-schema-additional-properties/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
