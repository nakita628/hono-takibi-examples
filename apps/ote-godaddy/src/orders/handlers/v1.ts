import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrdersOrderIdRoute, getV1OrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
