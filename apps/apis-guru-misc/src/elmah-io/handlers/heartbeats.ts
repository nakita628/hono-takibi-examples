import { OpenAPIHono } from '@hono/zod-openapi'
import { postV3HeartbeatsLogIdIdRoute } from '../routes'

const app = new OpenAPIHono()

export const heartbeatsHandler = app.openapi(postV3HeartbeatsLogIdIdRoute, (c) => {
  throw new Error('Not implemented')
})
