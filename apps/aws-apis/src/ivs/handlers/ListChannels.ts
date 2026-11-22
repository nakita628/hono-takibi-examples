import { OpenAPIHono } from '@hono/zod-openapi'
import { postListChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListChannelsHandler = app.openapi(postListChannelsRoute, (c) => {
  throw new Error('Not implemented')
})
