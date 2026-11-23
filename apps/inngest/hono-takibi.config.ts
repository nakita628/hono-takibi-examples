import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Inngest API v1, official OpenAPI spec:
  // https://github.com/inngest/inngest/blob/ff6ab644729a23bb32ed1858e36539533478e09c/docs/openapi/v3/api/v1/spec.yaml
  input:
    'https://raw.githubusercontent.com/inngest/inngest/main/docs/openapi/v3/api/v1/spec.yaml',
  output: './src/routes.ts',
  template: { routeHandler: true },
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
    baseUrl: 'https://api.inngest.com',
  },
})
