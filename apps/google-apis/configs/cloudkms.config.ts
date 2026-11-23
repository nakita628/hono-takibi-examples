import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudkms/v1/openapi.yaml',
  output: './src/cloudkms/routes.ts',
  template: {},
  type: { output: './src/cloudkms/types.ts' },
  client: { output: './src/cloudkms/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudkms/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudkms/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudkms/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudkms/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudkms/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudkms/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudkms/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudkms/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudkms/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
