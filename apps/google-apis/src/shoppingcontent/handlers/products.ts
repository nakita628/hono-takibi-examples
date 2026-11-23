import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductsBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app.openapi(postProductsBatchRoute, (c) => {
  throw new Error('Not implemented')
})
