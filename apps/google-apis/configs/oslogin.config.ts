import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/oslogin/v1beta/openapi.yaml',
  output: './src/oslogin/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/oslogin/types.ts' },
  client: { output: './src/oslogin/client.ts', baseUrl: '/' },
  rpc: { output: './src/oslogin/rpc.ts', parseResponse: true },
  swr: { output: './src/oslogin/hooks/swr.ts' },
  'tanstack-query': { output: './src/oslogin/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/oslogin/hooks/preact-query.ts' },
  'solid-query': { output: './src/oslogin/hooks/solid-query.ts' },
  'vue-query': { output: './src/oslogin/hooks/vue-query.ts' },
  'svelte-query': { output: './src/oslogin/hooks/svelte-query.ts' },
  'angular-query': { output: './src/oslogin/hooks/angular-query.ts' },
  docs: {
    output: './src/oslogin/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
