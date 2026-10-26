import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Discord API specification: https://github.com/discord/discord-api-spec
  input: 'https://raw.githubusercontent.com/discord/discord-api-spec/main/specs/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://discord.com/api/v10',
  },
})
