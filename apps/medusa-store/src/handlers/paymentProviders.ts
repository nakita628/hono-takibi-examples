import { OpenAPIHono } from '@hono/zod-openapi'
import { getStorePaymentProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentProvidersHandler = app.openapi(getStorePaymentProvidersRoute, (c) => {
  throw new Error('Not implemented')
})
