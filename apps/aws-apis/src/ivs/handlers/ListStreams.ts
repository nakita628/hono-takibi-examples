import { OpenAPIHono } from '@hono/zod-openapi'
import { postListStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListStreamsHandler = app.openapi(postListStreamsRoute, (c) => {
  throw new Error('Not implemented')
})
