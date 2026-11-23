import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/google/v1/profile.openapi.yaml',
  output: './src/google-v1-profile/routes.ts',
  template: {},
  type: { output: './src/google-v1-profile/types.ts' },
  client: { output: './src/google-v1-profile/client.ts', baseUrl: '/' },
  rpc: { output: './src/google-v1-profile/rpc.ts', parseResponse: true },
  swr: { output: './src/google-v1-profile/hooks/swr.ts' },
  'tanstack-query': { output: './src/google-v1-profile/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/google-v1-profile/hooks/preact-query.ts' },
  'solid-query': { output: './src/google-v1-profile/hooks/solid-query.ts' },
  'vue-query': { output: './src/google-v1-profile/hooks/vue-query.ts' },
  'svelte-query': { output: './src/google-v1-profile/hooks/svelte-query.ts' },
  'angular-query': { output: './src/google-v1-profile/hooks/angular-query.ts' },
  docs: {
    output: './src/google-v1-profile/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
