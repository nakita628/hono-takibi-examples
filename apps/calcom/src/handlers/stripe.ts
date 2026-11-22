import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2StripeCheckRoute, getV2StripeConnectRoute, getV2StripeSaveRoute } from '../routes'

const app = new OpenAPIHono()

export const stripeHandler = app
  .openapi(getV2StripeConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StripeSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StripeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
