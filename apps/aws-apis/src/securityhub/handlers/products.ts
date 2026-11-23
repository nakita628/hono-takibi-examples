import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app.openapi(getProductsRoute, (c) => {
  throw new Error('Not implemented')
})
