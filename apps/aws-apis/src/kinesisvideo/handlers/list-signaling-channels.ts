import { OpenAPIHono } from '@hono/zod-openapi'
import { postListSignalingChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const listSignalingChannelsHandler = app.openapi(postListSignalingChannelsRoute, (c) => {
  throw new Error('Not implemented')
})
