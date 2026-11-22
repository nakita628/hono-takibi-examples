import { OpenAPIHono } from '@hono/zod-openapi'
import { postStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const streamsHandler = app.openapi(postStreamsRoute, (c) => {
  throw new Error('Not implemented')
})
