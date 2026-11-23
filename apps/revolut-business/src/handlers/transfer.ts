import { OpenAPIHono } from '@hono/zod-openapi'
import { postTransferRoute } from '../routes'

const app = new OpenAPIHono()

export const transferHandler = app.openapi(postTransferRoute, (c) => {
  throw new Error('Not implemented')
})
