import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const GetChannelHandler = app.openapi(postGetChannelRoute, (c) => {
  throw new Error('Not implemented')
})
