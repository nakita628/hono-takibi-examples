import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CartsCartIdOrderRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdOrderHandler = app.openapi(putV1CartsCartIdOrderRoute, (c) => {
  throw new Error('Not implemented')
})
