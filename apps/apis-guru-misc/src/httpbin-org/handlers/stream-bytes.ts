import { OpenAPIHono } from '@hono/zod-openapi'
import { getStreamBytesNRoute } from '../routes'

const app = new OpenAPIHono()

export const streamBytesHandler = app.openapi(getStreamBytesNRoute, (c) => {
  throw new Error('Not implemented')
})
