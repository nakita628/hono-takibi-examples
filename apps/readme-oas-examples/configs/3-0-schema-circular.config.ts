import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/schema-circular.yaml',
  output: './src/3-0-schema-circular/routes.ts',
  template: {},
  type: { output: './src/3-0-schema-circular/types.ts' },
  client: { output: './src/3-0-schema-circular/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-schema-circular/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-schema-circular/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-schema-circular/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-schema-circular/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-schema-circular/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-schema-circular/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-schema-circular/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-schema-circular/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-schema-circular/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
