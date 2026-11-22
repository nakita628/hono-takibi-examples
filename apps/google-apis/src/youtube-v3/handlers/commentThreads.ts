import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3CommentThreadsRoute, postYoutubeV3CommentThreadsRoute } from '../routes'

const app = new OpenAPIHono()

export const commentThreadsHandler = app
  .openapi(getYoutubeV3CommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3CommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
