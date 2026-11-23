import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const getTransactionsHandler = app.openapi(postGetTransactionsRoute, (c) => {
  throw new Error('Not implemented')
})
