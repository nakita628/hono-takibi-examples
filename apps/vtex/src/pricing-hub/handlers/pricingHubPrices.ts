import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiPricingHubPricesRoute, putConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const pricingHubPricesHandler = app
  .openapi(postApiPricingHubPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
