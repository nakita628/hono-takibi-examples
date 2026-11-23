import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteSignalingChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteSignalingChannelHandler = app.openapi(postDeleteSignalingChannelRoute, (c) => {
  throw new Error('Not implemented')
})
