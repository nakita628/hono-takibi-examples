import { OpenAPIHono } from '@hono/zod-openapi'
import { postYoutubeV3ChannelBannersInsertRoute } from '../routes'

const app = new OpenAPIHono()

export const channelBannersHandler = app.openapi(postYoutubeV3ChannelBannersInsertRoute, (c) => {
  throw new Error('Not implemented')
})
