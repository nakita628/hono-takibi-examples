import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3LiveChatModeratorsRoute,
  getYoutubeV3LiveChatModeratorsRoute,
  postYoutubeV3LiveChatModeratorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveChatModeratorsHandler = app
  .openapi(deleteYoutubeV3LiveChatModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3LiveChatModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveChatModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
