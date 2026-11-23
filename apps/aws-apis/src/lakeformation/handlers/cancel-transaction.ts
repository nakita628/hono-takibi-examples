import { OpenAPIHono } from '@hono/zod-openapi'
import { postCancelTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelTransactionHandler = app.openapi(postCancelTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
