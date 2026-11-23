import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/connect-contact-lens/2020-08-21/openapi.yaml',
  output: './src/connect-contact-lens/routes.ts',
  template: {},
  type: { output: './src/connect-contact-lens/types.ts' },
  client: { output: './src/connect-contact-lens/client.ts', baseUrl: '/' },
  rpc: { output: './src/connect-contact-lens/rpc.ts', parseResponse: true },
  swr: { output: './src/connect-contact-lens/hooks/swr.ts' },
  'tanstack-query': { output: './src/connect-contact-lens/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/connect-contact-lens/hooks/preact-query.ts' },
  'solid-query': { output: './src/connect-contact-lens/hooks/solid-query.ts' },
  'vue-query': { output: './src/connect-contact-lens/hooks/vue-query.ts' },
  'svelte-query': { output: './src/connect-contact-lens/hooks/svelte-query.ts' },
  'angular-query': { output: './src/connect-contact-lens/hooks/angular-query.ts' },
  docs: {
    output: './src/connect-contact-lens/api.md',
    curl: true,
    baseUrl: 'https://connect-contact-lens.us-east-1.amazonaws.com',
  },
})
