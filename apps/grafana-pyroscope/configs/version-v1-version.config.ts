import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/version/v1/version.openapi.yaml',
  output: './src/version-v1-version/routes.ts',
  template: {},
  type: { output: './src/version-v1-version/types.ts' },
  client: { output: './src/version-v1-version/client.ts', baseUrl: '/' },
  rpc: { output: './src/version-v1-version/rpc.ts', parseResponse: true },
  swr: { output: './src/version-v1-version/hooks/swr.ts' },
  'tanstack-query': { output: './src/version-v1-version/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/version-v1-version/hooks/preact-query.ts' },
  'solid-query': { output: './src/version-v1-version/hooks/solid-query.ts' },
  'vue-query': { output: './src/version-v1-version/hooks/vue-query.ts' },
  'svelte-query': { output: './src/version-v1-version/hooks/svelte-query.ts' },
  'angular-query': { output: './src/version-v1-version/hooks/angular-query.ts' },
  docs: {
    output: './src/version-v1-version/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
