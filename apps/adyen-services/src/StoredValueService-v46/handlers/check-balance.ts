import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const checkBalanceHandler = app.openapi(postCheckBalanceRoute, (c) => {
  throw new Error('Not implemented')
})
