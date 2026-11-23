import { OpenAPIHono } from '@hono/zod-openapi'
import { postTransactionstatusRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionstatusHandler = app.openapi(postTransactionstatusRoute, (c) => {
  throw new Error('Not implemented')
})
