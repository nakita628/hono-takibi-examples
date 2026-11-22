import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteYoutubeV3LiveChatBansRoute, postYoutubeV3LiveChatBansRoute } from '../routes'

const app = new OpenAPIHono()

export const liveChatBansHandler = app
  .openapi(deleteYoutubeV3LiveChatBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveChatBansRoute, (c) => {
    throw new Error('Not implemented')
  })
