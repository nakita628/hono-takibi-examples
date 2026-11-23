import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const updateChannelHandler = app.openapi(postUpdateChannelRoute, (c) => {
  throw new Error('Not implemented')
})
