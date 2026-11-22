import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsCartIdTotalsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdTotalsHandler = app.openapi(getV1CartsCartIdTotalsRoute, (c) => {
  throw new Error('Not implemented')
})
