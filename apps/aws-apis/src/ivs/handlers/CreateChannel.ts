import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const CreateChannelHandler = app.openapi(postCreateChannelRoute, (c) => {
  throw new Error('Not implemented')
})
