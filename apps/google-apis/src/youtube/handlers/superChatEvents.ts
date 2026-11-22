import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3SuperChatEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const superChatEventsHandler = app.openapi(getYoutubeV3SuperChatEventsRoute, (c) => {
  throw new Error('Not implemented')
})
