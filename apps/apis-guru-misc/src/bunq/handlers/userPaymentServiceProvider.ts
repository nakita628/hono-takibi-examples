import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserPaymentServiceProviderItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userPaymentServiceProviderHandler = app.openapi(
  getUserPaymentServiceProviderItemIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
