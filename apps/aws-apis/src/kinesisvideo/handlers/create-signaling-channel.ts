import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateSignalingChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const createSignalingChannelHandler = app.openapi(postCreateSignalingChannelRoute, (c) => {
  throw new Error('Not implemented')
})
