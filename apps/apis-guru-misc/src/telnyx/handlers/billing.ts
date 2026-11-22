import { OpenAPIHono } from '@hono/zod-openapi'
import { getBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app.openapi(getBalanceRoute, (c) => {
  throw new Error('Not implemented')
})
