import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderCountJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderCountJsonHandler = app.openapi(getOrderCountJsonRoute, (c) => {
  throw new Error('Not implemented')
})
