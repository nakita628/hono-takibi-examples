import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/cloudbuild/v1alpha2/openapi.yaml',
  output: './src/cloudbuild/routes.ts',
  template: {},
  type: { output: './src/cloudbuild/types.ts' },
  client: { output: './src/cloudbuild/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudbuild/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudbuild/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudbuild/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudbuild/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudbuild/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudbuild/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudbuild/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudbuild/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudbuild/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
