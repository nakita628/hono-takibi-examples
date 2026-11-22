import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsCartIdItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdItemsHandler = app.openapi(getV1CartsCartIdItemsRoute, (c) => {
  throw new Error('Not implemented')
})
