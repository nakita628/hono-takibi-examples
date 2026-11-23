import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/redhat.local/patchman-engine/v1.15.3/openapi.yaml',
  output: './src/redhat-patchman-engine/routes.ts',
  template: {},
  type: { output: './src/redhat-patchman-engine/types.ts' },
  client: { output: './src/redhat-patchman-engine/client.ts', baseUrl: '/' },
  rpc: { output: './src/redhat-patchman-engine/rpc.ts', parseResponse: true },
  swr: { output: './src/redhat-patchman-engine/hooks/swr.ts' },
  'tanstack-query': { output: './src/redhat-patchman-engine/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/redhat-patchman-engine/hooks/preact-query.ts' },
  'solid-query': { output: './src/redhat-patchman-engine/hooks/solid-query.ts' },
  'vue-query': { output: './src/redhat-patchman-engine/hooks/vue-query.ts' },
  'svelte-query': { output: './src/redhat-patchman-engine/hooks/svelte-query.ts' },
  'angular-query': { output: './src/redhat-patchman-engine/hooks/angular-query.ts' },
  docs: {
    output: './src/redhat-patchman-engine/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
