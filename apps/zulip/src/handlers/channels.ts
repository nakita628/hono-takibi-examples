import { OpenAPIHono } from '@hono/zod-openapi'
import { postChannelsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app.openapi(postChannelsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
