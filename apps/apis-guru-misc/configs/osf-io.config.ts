import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/osf.io/2.0/openapi.yaml',
  output: './src/osf-io/routes.ts',
  template: {},
  type: { output: './src/osf-io/types.ts' },
  client: { output: './src/osf-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/osf-io/rpc.ts', parseResponse: true },
  swr: { output: './src/osf-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/osf-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/osf-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/osf-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/osf-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/osf-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/osf-io/hooks/angular-query.ts' },
  docs: {
    output: './src/osf-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
