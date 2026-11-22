import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingRoute } from '../routes'

const app = new OpenAPIHono()

export const onboardingHandler = app.openapi(
  getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
