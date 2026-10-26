import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformRelayedAuthorisationNotification-v4.json',
  output: './src/BalancePlatformRelayedAuthorisationNotification-v4/routes.ts',
  docs: {
    output: './src/BalancePlatformRelayedAuthorisationNotification-v4/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
