import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiOmsUserOrdersOrderIdRoute, getApiOmsUserOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const userOrdersHandler = app
  .openapi(getApiOmsUserOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsUserOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
