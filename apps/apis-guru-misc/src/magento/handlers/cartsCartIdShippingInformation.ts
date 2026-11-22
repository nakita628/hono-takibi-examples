import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsCartIdShippingInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdShippingInformationHandler = app.openapi(
  postV1CartsCartIdShippingInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
