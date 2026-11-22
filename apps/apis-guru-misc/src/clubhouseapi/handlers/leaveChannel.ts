import { OpenAPIHono } from '@hono/zod-openapi'
import { postLeaveChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const leaveChannelHandler = app.openapi(postLeaveChannelRoute, (c) => {
  throw new Error('Not implemented')
})
