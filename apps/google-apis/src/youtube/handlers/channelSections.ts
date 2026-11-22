import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3ChannelSectionsRoute,
  getYoutubeV3ChannelSectionsRoute,
  postYoutubeV3ChannelSectionsRoute,
  putYoutubeV3ChannelSectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelSectionsHandler = app
  .openapi(deleteYoutubeV3ChannelSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3ChannelSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3ChannelSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3ChannelSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
