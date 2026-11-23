import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/settings/v1/recording_rules.openapi.yaml',
  output: './src/settings-v1-recording-rules/routes.ts',
  template: {},
  type: { output: './src/settings-v1-recording-rules/types.ts' },
  client: { output: './src/settings-v1-recording-rules/client.ts', baseUrl: '/' },
  rpc: { output: './src/settings-v1-recording-rules/rpc.ts', parseResponse: true },
  swr: { output: './src/settings-v1-recording-rules/hooks/swr.ts' },
  'tanstack-query': { output: './src/settings-v1-recording-rules/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/settings-v1-recording-rules/hooks/preact-query.ts' },
  'solid-query': { output: './src/settings-v1-recording-rules/hooks/solid-query.ts' },
  'vue-query': { output: './src/settings-v1-recording-rules/hooks/vue-query.ts' },
  'svelte-query': { output: './src/settings-v1-recording-rules/hooks/svelte-query.ts' },
  'angular-query': { output: './src/settings-v1-recording-rules/hooks/angular-query.ts' },
  docs: {
    output: './src/settings-v1-recording-rules/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
