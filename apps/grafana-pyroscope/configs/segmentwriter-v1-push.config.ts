import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/segmentwriter/v1/push.openapi.yaml',
  output: './src/segmentwriter-v1-push/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/segmentwriter-v1-push/types.ts' },
  client: { output: './src/segmentwriter-v1-push/client.ts', baseUrl: '/' },
  rpc: { output: './src/segmentwriter-v1-push/rpc.ts', parseResponse: true },
  swr: { output: './src/segmentwriter-v1-push/hooks/swr.ts' },
  'tanstack-query': { output: './src/segmentwriter-v1-push/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/segmentwriter-v1-push/hooks/preact-query.ts' },
  'solid-query': { output: './src/segmentwriter-v1-push/hooks/solid-query.ts' },
  'vue-query': { output: './src/segmentwriter-v1-push/hooks/vue-query.ts' },
  'svelte-query': { output: './src/segmentwriter-v1-push/hooks/svelte-query.ts' },
  'angular-query': { output: './src/segmentwriter-v1-push/hooks/angular-query.ts' },
  docs: {
    output: './src/segmentwriter-v1-push/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
