import { OpenAPIHono } from '@hono/zod-openapi'
import { putYoutubeV3CommentThreadsRoute } from '../routes'

const app = new OpenAPIHono()

export const youtubeHandler = app.openapi(putYoutubeV3CommentThreadsRoute, (c) => {
  throw new Error('Not implemented')
})
