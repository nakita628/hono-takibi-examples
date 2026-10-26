import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/payment-experience_web_experience_profiles_v1.json',
  output: './src/payment-experience_web_experience_profiles_v1/routes.ts',
  docs: {
    output: './src/payment-experience_web_experience_profiles_v1/api.md',
    curl: true,
    baseUrl: 'https://api-m.paypal.com',
  },
})
