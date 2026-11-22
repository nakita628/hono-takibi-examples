import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app.openapi(getV1TransactionsRoute, (c) => {
  throw new Error('Not implemented')
})
