import { OpenAPIHono } from '@hono/zod-openapi'
import { postRollbackTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const rollbackTransactionHandler = app.openapi(postRollbackTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
