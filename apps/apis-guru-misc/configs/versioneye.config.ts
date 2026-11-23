import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/versioneye.com/v1/openapi.yaml',
  output: './src/versioneye/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/versioneye/types.ts' },
  client: { output: './src/versioneye/client.ts', baseUrl: '/' },
  rpc: { output: './src/versioneye/rpc.ts', parseResponse: true },
  swr: { output: './src/versioneye/hooks/swr.ts' },
  'tanstack-query': { output: './src/versioneye/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/versioneye/hooks/preact-query.ts' },
  'solid-query': { output: './src/versioneye/hooks/solid-query.ts' },
  'vue-query': { output: './src/versioneye/hooks/vue-query.ts' },
  'svelte-query': { output: './src/versioneye/hooks/svelte-query.ts' },
  'angular-query': { output: './src/versioneye/hooks/angular-query.ts' },
  docs: {
    output: './src/versioneye/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
