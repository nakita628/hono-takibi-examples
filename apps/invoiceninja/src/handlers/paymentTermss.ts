import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV1PaymentTermsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentTermssHandler = app.openapi(deleteApiV1PaymentTermsIdRoute, (c) => {
  throw new Error('Not implemented')
})
