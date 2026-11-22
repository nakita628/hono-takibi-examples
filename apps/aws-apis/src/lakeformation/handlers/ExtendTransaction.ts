import { OpenAPIHono } from '@hono/zod-openapi'
import { postExtendTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const ExtendTransactionHandler = app.openapi(postExtendTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
