import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminDirectoryV1ChannelsStopRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app.openapi(postAdminDirectoryV1ChannelsStopRoute, (c) => {
  throw new Error('Not implemented')
})
