import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/response-schemas.yaml',
  output: './src/3-0-response-schemas/routes.ts',
  template: {},
  type: { output: './src/3-0-response-schemas/types.ts' },
  client: { output: './src/3-0-response-schemas/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-response-schemas/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-response-schemas/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-response-schemas/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-response-schemas/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-response-schemas/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-response-schemas/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-response-schemas/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-response-schemas/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-response-schemas/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
