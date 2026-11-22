import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NegotiableCartsCartIdSetPaymentInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdSetPaymentInformationHandler = app.openapi(
  postV1NegotiableCartsCartIdSetPaymentInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
