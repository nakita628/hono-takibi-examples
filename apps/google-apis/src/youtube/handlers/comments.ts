import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3CommentsRoute,
  getYoutubeV3CommentsRoute,
  postYoutubeV3CommentsMarkAsSpamRoute,
  postYoutubeV3CommentsRoute,
  postYoutubeV3CommentsSetModerationStatusRoute,
  putYoutubeV3CommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(deleteYoutubeV3CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3CommentsMarkAsSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3CommentsSetModerationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
