import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NegotiableQuoteSubmitToCustomerRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableQuoteSubmitToCustomerHandler = app.openapi(
  postV1NegotiableQuoteSubmitToCustomerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
