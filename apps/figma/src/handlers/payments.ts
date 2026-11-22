import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PaymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app.openapi(getV1PaymentsRoute, (c) => {
  throw new Error('Not implemented')
})
