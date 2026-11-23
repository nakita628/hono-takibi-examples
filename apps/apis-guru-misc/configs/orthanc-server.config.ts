import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/orthanc-server.com/1.11.3/openapi.yaml',
  output: './src/orthanc-server/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/orthanc-server/types.ts' },
  client: { output: './src/orthanc-server/client.ts', baseUrl: '/' },
  rpc: { output: './src/orthanc-server/rpc.ts', parseResponse: true },
  swr: { output: './src/orthanc-server/hooks/swr.ts' },
  'tanstack-query': { output: './src/orthanc-server/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/orthanc-server/hooks/preact-query.ts' },
  'solid-query': { output: './src/orthanc-server/hooks/solid-query.ts' },
  'vue-query': { output: './src/orthanc-server/hooks/vue-query.ts' },
  'svelte-query': { output: './src/orthanc-server/hooks/svelte-query.ts' },
  'angular-query': { output: './src/orthanc-server/hooks/angular-query.ts' },
  docs: {
    output: './src/orthanc-server/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
