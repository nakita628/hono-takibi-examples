import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/file-uploads.yaml',
  output: './src/3-0-file-uploads/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-file-uploads/types.ts' },
  client: { output: './src/3-0-file-uploads/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-file-uploads/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-file-uploads/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-file-uploads/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-file-uploads/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-file-uploads/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-file-uploads/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-file-uploads/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-file-uploads/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-file-uploads/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
