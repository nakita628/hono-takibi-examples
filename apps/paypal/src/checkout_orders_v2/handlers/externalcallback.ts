import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2CheckoutOrdersOrderUpdateCallbackRoute } from '../routes'

const app = new OpenAPIHono()

export const externalcallbackHandler = app.openapi(
  postV2CheckoutOrdersOrderUpdateCallbackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
