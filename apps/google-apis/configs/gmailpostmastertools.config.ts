import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gmailpostmastertools/v1beta1/openapi.yaml',
  output: './src/gmailpostmastertools/routes.ts',
  template: {},
  type: { output: './src/gmailpostmastertools/types.ts' },
  client: { output: './src/gmailpostmastertools/client.ts', baseUrl: '/' },
  rpc: { output: './src/gmailpostmastertools/rpc.ts', parseResponse: true },
  swr: { output: './src/gmailpostmastertools/hooks/swr.ts' },
  'tanstack-query': { output: './src/gmailpostmastertools/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gmailpostmastertools/hooks/preact-query.ts' },
  'solid-query': { output: './src/gmailpostmastertools/hooks/solid-query.ts' },
  'vue-query': { output: './src/gmailpostmastertools/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gmailpostmastertools/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gmailpostmastertools/hooks/angular-query.ts' },
  docs: {
    output: './src/gmailpostmastertools/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
