import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gambitcomm.local/mimic/21.00/openapi.yaml',
  output: './src/gambitcomm-mimic/routes.ts',
  template: {},
  type: { output: './src/gambitcomm-mimic/types.ts' },
  client: { output: './src/gambitcomm-mimic/client.ts', baseUrl: '/' },
  rpc: { output: './src/gambitcomm-mimic/rpc.ts', parseResponse: true },
  swr: { output: './src/gambitcomm-mimic/hooks/swr.ts' },
  'tanstack-query': { output: './src/gambitcomm-mimic/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gambitcomm-mimic/hooks/preact-query.ts' },
  'solid-query': { output: './src/gambitcomm-mimic/hooks/solid-query.ts' },
  'vue-query': { output: './src/gambitcomm-mimic/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gambitcomm-mimic/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gambitcomm-mimic/hooks/angular-query.ts' },
  docs: {
    output: './src/gambitcomm-mimic/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
