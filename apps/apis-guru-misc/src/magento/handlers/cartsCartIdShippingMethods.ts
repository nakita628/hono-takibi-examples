import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsCartIdShippingMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdShippingMethodsHandler = app.openapi(
  getV1CartsCartIdShippingMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
