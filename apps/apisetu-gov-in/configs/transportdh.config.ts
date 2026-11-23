import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportdh/3.0.0/openapi.yaml',
  output: './src/transportdh/routes.ts',
  template: {},
  type: { output: './src/transportdh/types.ts' },
  client: { output: './src/transportdh/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportdh/rpc.ts', parseResponse: true },
  swr: { output: './src/transportdh/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportdh/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportdh/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportdh/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportdh/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportdh/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportdh/hooks/angular-query.ts' },
  docs: {
    output: './src/transportdh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
