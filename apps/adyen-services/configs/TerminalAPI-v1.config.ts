import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/TerminalAPI-v1.json',
  output: './src/TerminalAPI-v1/routes.ts',
  docs: {
    output: './src/TerminalAPI-v1/api.md',
    curl: true,
    baseUrl: '<local-terminal-IP-address>',
  },
})
