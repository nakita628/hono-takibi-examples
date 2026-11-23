import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransactionsIdRoute, getTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
