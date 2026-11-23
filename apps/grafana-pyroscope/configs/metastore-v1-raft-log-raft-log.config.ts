import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/metastore/v1/raft_log/raft_log.openapi.yaml',
  output: './src/metastore-v1-raft-log-raft-log/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/metastore-v1-raft-log-raft-log/types.ts' },
  client: { output: './src/metastore-v1-raft-log-raft-log/client.ts', baseUrl: '/' },
  rpc: { output: './src/metastore-v1-raft-log-raft-log/rpc.ts', parseResponse: true },
  swr: { output: './src/metastore-v1-raft-log-raft-log/hooks/swr.ts' },
  'tanstack-query': { output: './src/metastore-v1-raft-log-raft-log/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/metastore-v1-raft-log-raft-log/hooks/preact-query.ts' },
  'solid-query': { output: './src/metastore-v1-raft-log-raft-log/hooks/solid-query.ts' },
  'vue-query': { output: './src/metastore-v1-raft-log-raft-log/hooks/vue-query.ts' },
  'svelte-query': { output: './src/metastore-v1-raft-log-raft-log/hooks/svelte-query.ts' },
  'angular-query': { output: './src/metastore-v1-raft-log-raft-log/hooks/angular-query.ts' },
  docs: {
    output: './src/metastore-v1-raft-log-raft-log/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
