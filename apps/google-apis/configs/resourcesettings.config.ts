import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/resourcesettings/v1/openapi.yaml',
  output: './src/resourcesettings/routes.ts',
  template: {},
  type: { output: './src/resourcesettings/types.ts' },
  client: { output: './src/resourcesettings/client.ts', baseUrl: '/' },
  rpc: { output: './src/resourcesettings/rpc.ts', parseResponse: true },
  swr: { output: './src/resourcesettings/hooks/swr.ts' },
  'tanstack-query': { output: './src/resourcesettings/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/resourcesettings/hooks/preact-query.ts' },
  'solid-query': { output: './src/resourcesettings/hooks/solid-query.ts' },
  'vue-query': { output: './src/resourcesettings/hooks/vue-query.ts' },
  'svelte-query': { output: './src/resourcesettings/hooks/svelte-query.ts' },
  'angular-query': { output: './src/resourcesettings/hooks/angular-query.ts' },
  docs: {
    output: './src/resourcesettings/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
