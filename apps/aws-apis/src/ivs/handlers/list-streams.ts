import { OpenAPIHono } from '@hono/zod-openapi'
import { postListStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const listStreamsHandler = app.openapi(postListStreamsRoute, (c) => {
  throw new Error('Not implemented')
})
