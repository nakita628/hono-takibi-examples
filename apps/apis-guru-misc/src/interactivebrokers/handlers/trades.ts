import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountTradesRoute } from '../routes'

const app = new OpenAPIHono()

export const tradesHandler = app.openapi(getAccountsAccountTradesRoute, (c) => {
  throw new Error('Not implemented')
})
