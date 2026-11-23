import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentsLagoIdRoute, getPaymentsRoute, postPaymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(postPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
