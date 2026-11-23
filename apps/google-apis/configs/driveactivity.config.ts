import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/driveactivity/v2/openapi.yaml',
  output: './src/driveactivity/routes.ts',
  template: {},
  type: { output: './src/driveactivity/types.ts' },
  client: { output: './src/driveactivity/client.ts', baseUrl: '/' },
  rpc: { output: './src/driveactivity/rpc.ts', parseResponse: true },
  swr: { output: './src/driveactivity/hooks/swr.ts' },
  'tanstack-query': { output: './src/driveactivity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/driveactivity/hooks/preact-query.ts' },
  'solid-query': { output: './src/driveactivity/hooks/solid-query.ts' },
  'vue-query': { output: './src/driveactivity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/driveactivity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/driveactivity/hooks/angular-query.ts' },
  docs: {
    output: './src/driveactivity/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
