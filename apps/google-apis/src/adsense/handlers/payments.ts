import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app.openapi(getPaymentsRoute, (c) => {
  throw new Error('Not implemented')
})
