import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderInfoJsonHandler = app.openapi(getOrderInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})
