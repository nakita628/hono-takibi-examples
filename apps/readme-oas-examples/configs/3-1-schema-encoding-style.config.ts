import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/schema-encoding-style.yaml',
  output: './src/3-1-schema-encoding-style/routes.ts',
  template: {},
  type: { output: './src/3-1-schema-encoding-style/types.ts' },
  client: { output: './src/3-1-schema-encoding-style/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-schema-encoding-style/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-schema-encoding-style/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-schema-encoding-style/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-schema-encoding-style/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-schema-encoding-style/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-schema-encoding-style/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-schema-encoding-style/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-schema-encoding-style/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-schema-encoding-style/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
