import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ssm-contacts/2021-05-03/openapi.yaml',
  output: './src/ssm-contacts/routes.ts',
  template: {},
  type: { output: './src/ssm-contacts/types.ts' },
  client: { output: './src/ssm-contacts/client.ts', baseUrl: '/' },
  rpc: { output: './src/ssm-contacts/rpc.ts', parseResponse: true },
  swr: { output: './src/ssm-contacts/hooks/swr.ts' },
  'tanstack-query': { output: './src/ssm-contacts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ssm-contacts/hooks/preact-query.ts' },
  'solid-query': { output: './src/ssm-contacts/hooks/solid-query.ts' },
  'vue-query': { output: './src/ssm-contacts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ssm-contacts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ssm-contacts/hooks/angular-query.ts' },
  docs: {
    output: './src/ssm-contacts/api.md',
    curl: true,
    baseUrl: 'https://ssm-contacts.us-east-1.amazonaws.com',
  },
})
