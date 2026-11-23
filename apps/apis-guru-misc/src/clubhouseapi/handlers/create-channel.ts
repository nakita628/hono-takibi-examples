import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const createChannelHandler = app.openapi(postCreateChannelRoute, (c) => {
  throw new Error('Not implemented')
})
