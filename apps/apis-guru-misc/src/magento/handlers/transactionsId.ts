import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TransactionsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionsIdHandler = app.openapi(getV1TransactionsIdRoute, (c) => {
  throw new Error('Not implemented')
})
