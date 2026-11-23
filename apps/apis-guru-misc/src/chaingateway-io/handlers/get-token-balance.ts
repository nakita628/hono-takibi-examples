import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetTokenBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const getTokenBalanceHandler = app.openapi(postGetTokenBalanceRoute, (c) => {
  throw new Error('Not implemented')
})
