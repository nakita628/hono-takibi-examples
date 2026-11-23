import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrdersBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app.openapi(postOrdersBatchRoute, (c) => {
  throw new Error('Not implemented')
})
