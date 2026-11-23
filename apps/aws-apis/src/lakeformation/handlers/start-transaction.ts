import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const startTransactionHandler = app.openapi(postStartTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
