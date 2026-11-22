import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NegotiableCartsCartIdShippingInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdShippingInformationHandler = app.openapi(
  postV1NegotiableCartsCartIdShippingInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
