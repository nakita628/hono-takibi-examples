import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Marketing/Marketing%20Emails/Rollouts/145892/2026-09/marketingEmails.json',
  output: './src/marketing-marketing-emails/routes.ts',
  template: {},
  type: { output: './src/marketing-marketing-emails/types.ts' },
  client: { output: './src/marketing-marketing-emails/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketing-marketing-emails/rpc.ts', parseResponse: true },
  swr: { output: './src/marketing-marketing-emails/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketing-marketing-emails/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketing-marketing-emails/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketing-marketing-emails/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketing-marketing-emails/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketing-marketing-emails/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketing-marketing-emails/hooks/angular-query.ts' },
  docs: {
    output: './src/marketing-marketing-emails/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
