import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/pagespeedonline/v5/openapi.yaml',
  output: './src/pagespeedonline/routes.ts',
  template: {},
  type: { output: './src/pagespeedonline/types.ts' },
  client: { output: './src/pagespeedonline/client.ts', baseUrl: '/' },
  rpc: { output: './src/pagespeedonline/rpc.ts', parseResponse: true },
  swr: { output: './src/pagespeedonline/hooks/swr.ts' },
  'tanstack-query': { output: './src/pagespeedonline/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pagespeedonline/hooks/preact-query.ts' },
  'solid-query': { output: './src/pagespeedonline/hooks/solid-query.ts' },
  'vue-query': { output: './src/pagespeedonline/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pagespeedonline/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pagespeedonline/hooks/angular-query.ts' },
  docs: {
    output: './src/pagespeedonline/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
