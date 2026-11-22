import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const StartTransactionHandler = app.openapi(postStartTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
