import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.supabase.com/api/v1-json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.supabase.com',
  },
})
