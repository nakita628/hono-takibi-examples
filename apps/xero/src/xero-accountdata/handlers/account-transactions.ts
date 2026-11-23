import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountTransactionsHandler = app.openapi(getAccountTransactionsRoute, (c) => {
  throw new Error('Not implemented')
})
