import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Marketing/Transactional%20Single%20Send/Rollouts/140892/2026-09/transactionalSingleSend.json',
  output: './src/marketing-transactional-single-send/routes.ts',
  template: {},
  type: { output: './src/marketing-transactional-single-send/types.ts' },
  client: { output: './src/marketing-transactional-single-send/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketing-transactional-single-send/rpc.ts', parseResponse: true },
  swr: { output: './src/marketing-transactional-single-send/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketing-transactional-single-send/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketing-transactional-single-send/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketing-transactional-single-send/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketing-transactional-single-send/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketing-transactional-single-send/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketing-transactional-single-send/hooks/angular-query.ts' },
  docs: {
    output: './src/marketing-transactional-single-send/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
