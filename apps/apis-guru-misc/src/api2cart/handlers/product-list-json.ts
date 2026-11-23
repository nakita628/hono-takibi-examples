import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productListJsonHandler = app.openapi(getProductListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
