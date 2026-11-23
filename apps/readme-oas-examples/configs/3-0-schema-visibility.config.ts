import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/schema-visibility.yaml',
  output: './src/3-0-schema-visibility/routes.ts',
  template: {},
  type: { output: './src/3-0-schema-visibility/types.ts' },
  client: { output: './src/3-0-schema-visibility/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-schema-visibility/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-schema-visibility/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-schema-visibility/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-schema-visibility/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-schema-visibility/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-schema-visibility/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-schema-visibility/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-schema-visibility/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-schema-visibility/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
