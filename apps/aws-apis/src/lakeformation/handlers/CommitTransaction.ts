import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommitTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const CommitTransactionHandler = app.openapi(postCommitTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
