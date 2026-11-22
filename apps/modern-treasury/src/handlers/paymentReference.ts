import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPaymentReferencesIdRoute, getApiPaymentReferencesRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentReferenceHandler = app
  .openapi(getApiPaymentReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentReferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
