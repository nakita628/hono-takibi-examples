import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/kabucom/kabusapi/master/reference/kabu_STATION_API.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:18080/kabusapi',
  },
})
