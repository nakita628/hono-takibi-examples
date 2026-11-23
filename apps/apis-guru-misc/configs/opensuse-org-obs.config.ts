import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/opensuse.org/obs/2.10.50/openapi.yaml',
  output: './src/opensuse-org-obs/routes.ts',
  template: {},
  type: { output: './src/opensuse-org-obs/types.ts' },
  client: { output: './src/opensuse-org-obs/client.ts', baseUrl: '/' },
  rpc: { output: './src/opensuse-org-obs/rpc.ts', parseResponse: true },
  swr: { output: './src/opensuse-org-obs/hooks/swr.ts' },
  'tanstack-query': { output: './src/opensuse-org-obs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/opensuse-org-obs/hooks/preact-query.ts' },
  'solid-query': { output: './src/opensuse-org-obs/hooks/solid-query.ts' },
  'vue-query': { output: './src/opensuse-org-obs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/opensuse-org-obs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/opensuse-org-obs/hooks/angular-query.ts' },
  docs: {
    output: './src/opensuse-org-obs/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
