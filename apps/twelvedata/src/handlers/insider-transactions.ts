import { OpenAPIHono } from '@hono/zod-openapi'
import { getInsiderTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const insiderTransactionsHandler = app.openapi(getInsiderTransactionsRoute, (c) => {
  throw new Error('Not implemented')
})
