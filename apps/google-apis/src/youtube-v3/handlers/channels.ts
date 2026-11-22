import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3ChannelsRoute, putYoutubeV3ChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getYoutubeV3ChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3ChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
