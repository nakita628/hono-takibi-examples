import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/adhocprofiles/v1/adhocprofiles.openapi.yaml',
  output: './src/adhocprofiles-v1-adhocprofiles/routes.ts',
  docs: {
    output: './src/adhocprofiles-v1-adhocprofiles/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
