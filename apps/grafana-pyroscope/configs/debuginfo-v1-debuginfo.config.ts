import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/debuginfo/v1/debuginfo.openapi.yaml',
  output: './src/debuginfo-v1-debuginfo/routes.ts',
  template: {},
  type: { output: './src/debuginfo-v1-debuginfo/types.ts' },
  client: { output: './src/debuginfo-v1-debuginfo/client.ts', baseUrl: '/' },
  rpc: { output: './src/debuginfo-v1-debuginfo/rpc.ts', parseResponse: true },
  swr: { output: './src/debuginfo-v1-debuginfo/hooks/swr.ts' },
  'tanstack-query': { output: './src/debuginfo-v1-debuginfo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/debuginfo-v1-debuginfo/hooks/preact-query.ts' },
  'solid-query': { output: './src/debuginfo-v1-debuginfo/hooks/solid-query.ts' },
  'vue-query': { output: './src/debuginfo-v1-debuginfo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/debuginfo-v1-debuginfo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/debuginfo-v1-debuginfo/hooks/angular-query.ts' },
  docs: {
    output: './src/debuginfo-v1-debuginfo/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
