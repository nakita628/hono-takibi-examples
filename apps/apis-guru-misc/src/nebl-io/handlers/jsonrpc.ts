import { OpenAPIHono } from '@hono/zod-openapi'
import { postRoute } from '../routes'

const app = new OpenAPIHono()

export const jsonrpcHandler = app.openapi(postRoute, (c) => {
  throw new Error('Not implemented')
})
