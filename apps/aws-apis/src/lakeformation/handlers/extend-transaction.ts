import { OpenAPIHono } from '@hono/zod-openapi'
import { postExtendTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const extendTransactionHandler = app.openapi(postExtendTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
