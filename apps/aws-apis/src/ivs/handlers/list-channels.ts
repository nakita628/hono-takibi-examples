import { OpenAPIHono } from '@hono/zod-openapi'
import { postListChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const listChannelsHandler = app.openapi(postListChannelsRoute, (c) => {
  throw new Error('Not implemented')
})
