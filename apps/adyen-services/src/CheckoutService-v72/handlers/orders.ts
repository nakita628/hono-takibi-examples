import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrdersCancelRoute, postOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(postOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
