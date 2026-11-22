import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountGetBalanceRoute, postAccountTopUpRoute } from '../routes'

const app = new OpenAPIHono()

export const balanceHandler = app
  .openapi(getAccountGetBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountTopUpRoute, (c) => {
    throw new Error('Not implemented')
  })
