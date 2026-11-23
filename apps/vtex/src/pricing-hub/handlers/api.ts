import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiPricingHubPricesRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(postApiPricingHubPricesRoute, (c) => {
  throw new Error('Not implemented')
})
