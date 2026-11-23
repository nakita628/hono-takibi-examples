import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elastictranscoder/2012-09-25/openapi.yaml',
  output: './src/elastictranscoder/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/elastictranscoder/types.ts' },
  client: { output: './src/elastictranscoder/client.ts', baseUrl: '/' },
  rpc: { output: './src/elastictranscoder/rpc.ts', parseResponse: true },
  swr: { output: './src/elastictranscoder/hooks/swr.ts' },
  'tanstack-query': { output: './src/elastictranscoder/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/elastictranscoder/hooks/preact-query.ts' },
  'solid-query': { output: './src/elastictranscoder/hooks/solid-query.ts' },
  'vue-query': { output: './src/elastictranscoder/hooks/vue-query.ts' },
  'svelte-query': { output: './src/elastictranscoder/hooks/svelte-query.ts' },
  'angular-query': { output: './src/elastictranscoder/hooks/angular-query.ts' },
  docs: {
    output: './src/elastictranscoder/api.md',
    curl: true,
    baseUrl: 'https://elastictranscoder.us-east-1.amazonaws.com',
  },
})
