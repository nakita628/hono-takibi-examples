import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const orderAPIHandler = app.openapi(postOrdersRoute, (c) => {
  throw new Error('Not implemented')
})
