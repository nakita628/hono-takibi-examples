import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrdersIdCommentsRoute, postV1OrdersIdCommentsRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersIdCommentsHandler = app
  .openapi(getV1OrdersIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
