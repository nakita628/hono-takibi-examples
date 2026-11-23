import { OpenAPIHono } from '@hono/zod-openapi'
import { getListOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const listOrdersHandler = app.openapi(getListOrdersRoute, (c) => {
  throw new Error('Not implemented')
})
