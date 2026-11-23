import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/adhocprofiles/v1/adhocprofiles.openapi.yaml',
  output: './src/adhocprofiles-v1-adhocprofiles/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/adhocprofiles-v1-adhocprofiles/types.ts' },
  client: { output: './src/adhocprofiles-v1-adhocprofiles/client.ts', baseUrl: '/' },
  rpc: { output: './src/adhocprofiles-v1-adhocprofiles/rpc.ts', parseResponse: true },
  swr: { output: './src/adhocprofiles-v1-adhocprofiles/hooks/swr.ts' },
  'tanstack-query': { output: './src/adhocprofiles-v1-adhocprofiles/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/adhocprofiles-v1-adhocprofiles/hooks/preact-query.ts' },
  'solid-query': { output: './src/adhocprofiles-v1-adhocprofiles/hooks/solid-query.ts' },
  'vue-query': { output: './src/adhocprofiles-v1-adhocprofiles/hooks/vue-query.ts' },
  'svelte-query': { output: './src/adhocprofiles-v1-adhocprofiles/hooks/svelte-query.ts' },
  'angular-query': { output: './src/adhocprofiles-v1-adhocprofiles/hooks/angular-query.ts' },
  docs: {
    output: './src/adhocprofiles-v1-adhocprofiles/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
