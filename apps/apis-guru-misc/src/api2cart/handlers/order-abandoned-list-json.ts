import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderAbandonedListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderAbandonedListJsonHandler = app.openapi(getOrderAbandonedListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
