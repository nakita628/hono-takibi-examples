import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsBasePricesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsBasePricesHandler = app.openapi(postV1ProductsBasePricesRoute, (c) => {
  throw new Error('Not implemented')
})
