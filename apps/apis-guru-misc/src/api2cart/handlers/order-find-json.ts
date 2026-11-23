import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderFindJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderFindJsonHandler = app.openapi(getOrderFindJsonRoute, (c) => {
  throw new Error('Not implemented')
})
