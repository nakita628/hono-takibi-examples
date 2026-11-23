import { OpenAPIHono } from '@hono/zod-openapi'
import { postJoinChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const joinChannelHandler = app.openapi(postJoinChannelRoute, (c) => {
  throw new Error('Not implemented')
})
