import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountHolderTransactionListRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHolderTransactionListHandler = app.openapi(
  postAccountHolderTransactionListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
