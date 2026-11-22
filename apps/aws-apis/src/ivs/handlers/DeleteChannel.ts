import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteChannelHandler = app.openapi(postDeleteChannelRoute, (c) => {
  throw new Error('Not implemented')
})
