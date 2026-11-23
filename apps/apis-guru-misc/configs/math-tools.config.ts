import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/math.tools/1.5/openapi.yaml',
  output: './src/math-tools/routes.ts',
  template: {},
  type: { output: './src/math-tools/types.ts' },
  client: { output: './src/math-tools/client.ts', baseUrl: '/' },
  rpc: { output: './src/math-tools/rpc.ts', parseResponse: true },
  swr: { output: './src/math-tools/hooks/swr.ts' },
  'tanstack-query': { output: './src/math-tools/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/math-tools/hooks/preact-query.ts' },
  'solid-query': { output: './src/math-tools/hooks/solid-query.ts' },
  'vue-query': { output: './src/math-tools/hooks/vue-query.ts' },
  'svelte-query': { output: './src/math-tools/hooks/svelte-query.ts' },
  'angular-query': { output: './src/math-tools/hooks/angular-query.ts' },
  docs: {
    output: './src/math-tools/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
