import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elasticbeanstalk/2010-12-01/openapi.yaml',
  output: './src/elasticbeanstalk/routes.ts',
  template: {},
  type: { output: './src/elasticbeanstalk/types.ts' },
  client: { output: './src/elasticbeanstalk/client.ts', baseUrl: '/' },
  rpc: { output: './src/elasticbeanstalk/rpc.ts', parseResponse: true },
  swr: { output: './src/elasticbeanstalk/hooks/swr.ts' },
  'tanstack-query': { output: './src/elasticbeanstalk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/elasticbeanstalk/hooks/preact-query.ts' },
  'solid-query': { output: './src/elasticbeanstalk/hooks/solid-query.ts' },
  'vue-query': { output: './src/elasticbeanstalk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/elasticbeanstalk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/elasticbeanstalk/hooks/angular-query.ts' },
  docs: {
    output: './src/elasticbeanstalk/api.md',
    curl: true,
    baseUrl: 'https://elasticbeanstalk.us-east-1.amazonaws.com',
  },
})
