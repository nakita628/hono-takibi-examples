import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsOptionsHandler = app.openapi(postV1ProductsOptionsRoute, (c) => {
  throw new Error('Not implemented')
})
