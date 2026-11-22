import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebaserules/v1/openapi.yaml',
  output: './src/firebaserules/routes.ts',
  template: {},
  type: { output: './src/firebaserules/types.ts' },
  client: { output: './src/firebaserules/client.ts', baseUrl: '/' },
  rpc: { output: './src/firebaserules/rpc.ts', parseResponse: true },
  swr: { output: './src/firebaserules/hooks/swr.ts' },
  'tanstack-query': { output: './src/firebaserules/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firebaserules/hooks/preact-query.ts' },
  'solid-query': { output: './src/firebaserules/hooks/solid-query.ts' },
  'vue-query': { output: './src/firebaserules/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firebaserules/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firebaserules/hooks/angular-query.ts' },
  docs: {
    output: './src/firebaserules/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
