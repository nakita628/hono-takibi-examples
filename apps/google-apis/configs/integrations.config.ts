import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/integrations/v1/openapi.yaml',
  output: './src/integrations/routes.ts',
  template: {},
  type: { output: './src/integrations/types.ts' },
  client: { output: './src/integrations/client.ts', baseUrl: '/' },
  rpc: { output: './src/integrations/rpc.ts', parseResponse: true },
  swr: { output: './src/integrations/hooks/swr.ts' },
  'tanstack-query': { output: './src/integrations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/integrations/hooks/preact-query.ts' },
  'solid-query': { output: './src/integrations/hooks/solid-query.ts' },
  'vue-query': { output: './src/integrations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/integrations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/integrations/hooks/angular-query.ts' },
  docs: {
    output: './src/integrations/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
