import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3LiveChatMessagesRoute,
  getYoutubeV3LiveChatMessagesRoute,
  postYoutubeV3LiveChatMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveChatMessagesHandler = app
  .openapi(deleteYoutubeV3LiveChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3LiveChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
