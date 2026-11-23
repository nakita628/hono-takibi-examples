import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderTransactionListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderTransactionListJsonHandler = app.openapi(
  getOrderTransactionListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
