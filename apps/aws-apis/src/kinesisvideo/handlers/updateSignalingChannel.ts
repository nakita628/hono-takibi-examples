import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateSignalingChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const updateSignalingChannelHandler = app.openapi(postUpdateSignalingChannelRoute, (c) => {
  throw new Error('Not implemented')
})
