import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vmware.local/vrni/1.0.0/openapi.yaml',
  output: './src/vmware-vrni/routes.ts',
  template: {},
  type: { output: './src/vmware-vrni/types.ts' },
  client: { output: './src/vmware-vrni/client.ts', baseUrl: '/' },
  rpc: { output: './src/vmware-vrni/rpc.ts', parseResponse: true },
  swr: { output: './src/vmware-vrni/hooks/swr.ts' },
  'tanstack-query': { output: './src/vmware-vrni/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vmware-vrni/hooks/preact-query.ts' },
  'solid-query': { output: './src/vmware-vrni/hooks/solid-query.ts' },
  'vue-query': { output: './src/vmware-vrni/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vmware-vrni/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vmware-vrni/hooks/angular-query.ts' },
  docs: {
    output: './src/vmware-vrni/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
