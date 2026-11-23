import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openai.com/1.2.0/openapi.yaml',
  output: './src/openai/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/openai/types.ts' },
  client: { output: './src/openai/client.ts', baseUrl: '/' },
  rpc: { output: './src/openai/rpc.ts', parseResponse: true },
  swr: { output: './src/openai/hooks/swr.ts' },
  'tanstack-query': { output: './src/openai/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openai/hooks/preact-query.ts' },
  'solid-query': { output: './src/openai/hooks/solid-query.ts' },
  'vue-query': { output: './src/openai/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openai/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openai/hooks/angular-query.ts' },
  docs: {
    output: './src/openai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
