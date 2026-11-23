import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/vcs/v1/vcs.openapi.yaml',
  output: './src/vcs-v1-vcs/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/vcs-v1-vcs/types.ts' },
  client: { output: './src/vcs-v1-vcs/client.ts', baseUrl: '/' },
  rpc: { output: './src/vcs-v1-vcs/rpc.ts', parseResponse: true },
  swr: { output: './src/vcs-v1-vcs/hooks/swr.ts' },
  'tanstack-query': { output: './src/vcs-v1-vcs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vcs-v1-vcs/hooks/preact-query.ts' },
  'solid-query': { output: './src/vcs-v1-vcs/hooks/solid-query.ts' },
  'vue-query': { output: './src/vcs-v1-vcs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vcs-v1-vcs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vcs-v1-vcs/hooks/angular-query.ts' },
  docs: {
    output: './src/vcs-v1-vcs/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
