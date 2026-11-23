import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/klarna.com/openai/v0/openapi.yaml',
  output: './src/klarna-openai/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/klarna-openai/types.ts' },
  client: { output: './src/klarna-openai/client.ts', baseUrl: '/' },
  rpc: { output: './src/klarna-openai/rpc.ts', parseResponse: true },
  swr: { output: './src/klarna-openai/hooks/swr.ts' },
  'tanstack-query': { output: './src/klarna-openai/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/klarna-openai/hooks/preact-query.ts' },
  'solid-query': { output: './src/klarna-openai/hooks/solid-query.ts' },
  'vue-query': { output: './src/klarna-openai/hooks/vue-query.ts' },
  'svelte-query': { output: './src/klarna-openai/hooks/svelte-query.ts' },
  'angular-query': { output: './src/klarna-openai/hooks/angular-query.ts' },
  docs: {
    output: './src/klarna-openai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
