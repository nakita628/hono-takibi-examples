import { OpenAPIHono } from '@hono/zod-openapi'
import { postBeginTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const BeginTransactionHandler = app.openapi(postBeginTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
