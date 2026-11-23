import { OpenAPIHono } from '@hono/zod-openapi'
import { postChannelsStopRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app.openapi(postChannelsStopRoute, (c) => {
  throw new Error('Not implemented')
})
