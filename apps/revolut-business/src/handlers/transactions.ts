import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app.openapi(getTransactionsRoute, (c) => {
  throw new Error('Not implemented')
})
