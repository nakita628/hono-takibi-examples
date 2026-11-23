import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingRoute,
  getPaymentsProgramMarketplaceIdPaymentsProgramTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsProgramHandler = app
  .openapi(getPaymentsProgramMarketplaceIdPaymentsProgramTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
