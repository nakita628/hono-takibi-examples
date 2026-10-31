import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/settings/v1/setting.openapi.yaml',
  output: './src/settings-v1-setting/routes.ts',
  docs: {
    output: './src/settings-v1-setting/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
