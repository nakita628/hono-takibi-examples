import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/metastore/v1/raft_log/raft_log.openapi.yaml',
  output: './src/metastore-v1-raft-log-raft-log/routes.ts',
  docs: {
    output: './src/metastore-v1-raft-log-raft-log/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
