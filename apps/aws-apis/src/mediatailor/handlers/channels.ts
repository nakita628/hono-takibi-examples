import { OpenAPIHono } from '@hono/zod-openapi'
import { getChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app.openapi(getChannelsRoute, (c) => {
  throw new Error('Not implemented')
})
