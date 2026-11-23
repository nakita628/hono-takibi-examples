import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommitTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const commitTransactionHandler = app.openapi(postCommitTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
