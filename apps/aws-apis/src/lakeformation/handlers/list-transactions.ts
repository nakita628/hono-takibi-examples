import { OpenAPIHono } from '@hono/zod-openapi'
import { postListTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const listTransactionsHandler = app.openapi(postListTransactionsRoute, (c) => {
  throw new Error('Not implemented')
})
