import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderStatusListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderStatusListJsonHandler = app.openapi(getOrderStatusListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
