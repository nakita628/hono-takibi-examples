import { OpenAPIHono } from '@hono/zod-openapi'
import { getPricingProductsRoute, getPricingProductsSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const pricingHandler = app
  .openapi(getPricingProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingProductsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
