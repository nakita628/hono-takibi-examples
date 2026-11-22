import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app.openapi(getV3ProductsRoute, (c) => {
  throw new Error('Not implemented')
})
