import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountHolderBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHolderBalanceHandler = app.openapi(postAccountHolderBalanceRoute, (c) => {
  throw new Error('Not implemented')
})
