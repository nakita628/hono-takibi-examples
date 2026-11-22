import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Upstash Workflow REST API, official OpenAPI spec:
  // https://github.com/upstash/docs/blob/ed6e86df2b81f57fcf32ed6a10b3544db19d0c89/workflow/openapi.yaml
  input: 'https://raw.githubusercontent.com/upstash/docs/main/workflow/openapi.yaml',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://qstash-eu-central-1.upstash.io',
  },
})
