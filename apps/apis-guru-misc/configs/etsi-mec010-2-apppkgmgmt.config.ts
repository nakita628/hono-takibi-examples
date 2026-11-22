import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/etsi.local/MEC010-2_AppPkgMgmt/2.1.1/openapi.yaml',
  output: './src/etsi-mec010-2-apppkgmgmt/routes.ts',
  template: {},
  type: { output: './src/etsi-mec010-2-apppkgmgmt/types.ts' },
  client: { output: './src/etsi-mec010-2-apppkgmgmt/client.ts', baseUrl: '/' },
  rpc: { output: './src/etsi-mec010-2-apppkgmgmt/rpc.ts', parseResponse: true },
  swr: { output: './src/etsi-mec010-2-apppkgmgmt/hooks/swr.ts' },
  'tanstack-query': { output: './src/etsi-mec010-2-apppkgmgmt/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/etsi-mec010-2-apppkgmgmt/hooks/preact-query.ts' },
  'solid-query': { output: './src/etsi-mec010-2-apppkgmgmt/hooks/solid-query.ts' },
  'vue-query': { output: './src/etsi-mec010-2-apppkgmgmt/hooks/vue-query.ts' },
  'svelte-query': { output: './src/etsi-mec010-2-apppkgmgmt/hooks/svelte-query.ts' },
  'angular-query': { output: './src/etsi-mec010-2-apppkgmgmt/hooks/angular-query.ts' },
  docs: {
    output: './src/etsi-mec010-2-apppkgmgmt/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
