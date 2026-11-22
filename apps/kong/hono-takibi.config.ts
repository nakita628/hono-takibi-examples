import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Kong Gateway open-source Admin API 3.9, official OpenAPI spec:
  // https://github.com/Kong/developer.konghq.com/blob/7aacb8e9dd6049edbed26756ce0b84546b5a974c/api-specs/gateway/admin-oss/3.9/openapi.yaml
  input:
    'https://raw.githubusercontent.com/Kong/developer.konghq.com/main/api-specs/gateway/admin-oss/3.9/openapi.yaml',
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
    baseUrl: 'http://localhost:8001',
  },
})
