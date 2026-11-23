import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Scheduler/Meetings/Rollouts/177892/2026-09/meetings.json',
  output: './src/scheduler-meetings/routes.ts',
  template: {},
  type: { output: './src/scheduler-meetings/types.ts' },
  client: { output: './src/scheduler-meetings/client.ts', baseUrl: '/' },
  rpc: { output: './src/scheduler-meetings/rpc.ts', parseResponse: true },
  swr: { output: './src/scheduler-meetings/hooks/swr.ts' },
  'tanstack-query': { output: './src/scheduler-meetings/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/scheduler-meetings/hooks/preact-query.ts' },
  'solid-query': { output: './src/scheduler-meetings/hooks/solid-query.ts' },
  'vue-query': { output: './src/scheduler-meetings/hooks/vue-query.ts' },
  'svelte-query': { output: './src/scheduler-meetings/hooks/svelte-query.ts' },
  'angular-query': { output: './src/scheduler-meetings/hooks/angular-query.ts' },
  docs: {
    output: './src/scheduler-meetings/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
