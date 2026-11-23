import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/settings/v1/setting.openapi.yaml',
  output: './src/settings-v1-setting/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/settings-v1-setting/types.ts' },
  client: { output: './src/settings-v1-setting/client.ts', baseUrl: '/' },
  rpc: { output: './src/settings-v1-setting/rpc.ts', parseResponse: true },
  swr: { output: './src/settings-v1-setting/hooks/swr.ts' },
  'tanstack-query': { output: './src/settings-v1-setting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/settings-v1-setting/hooks/preact-query.ts' },
  'solid-query': { output: './src/settings-v1-setting/hooks/solid-query.ts' },
  'vue-query': { output: './src/settings-v1-setting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/settings-v1-setting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/settings-v1-setting/hooks/angular-query.ts' },
  docs: {
    output: './src/settings-v1-setting/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
