import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aiimsmangalagiri/3.0.0/openapi.yaml',
  output: './src/aiimsmangalagiri/routes.ts',
  template: {},
  type: { output: './src/aiimsmangalagiri/types.ts' },
  client: { output: './src/aiimsmangalagiri/client.ts', baseUrl: '/' },
  rpc: { output: './src/aiimsmangalagiri/rpc.ts', parseResponse: true },
  swr: { output: './src/aiimsmangalagiri/hooks/swr.ts' },
  'tanstack-query': { output: './src/aiimsmangalagiri/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/aiimsmangalagiri/hooks/preact-query.ts' },
  'solid-query': { output: './src/aiimsmangalagiri/hooks/solid-query.ts' },
  'vue-query': { output: './src/aiimsmangalagiri/hooks/vue-query.ts' },
  'svelte-query': { output: './src/aiimsmangalagiri/hooks/svelte-query.ts' },
  'angular-query': { output: './src/aiimsmangalagiri/hooks/angular-query.ts' },
  docs: {
    output: './src/aiimsmangalagiri/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
