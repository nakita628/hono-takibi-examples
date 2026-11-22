import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideosIdCommentsCommentIdRoute,
  getApiV1VideosIdCommentThreadsRoute,
  getApiV1VideosIdCommentThreadsThreadIdRoute,
  postApiV1VideosIdCommentsCommentIdRoute,
  postApiV1VideosIdCommentThreadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoCommentsHandler = app
  .openapi(getApiV1VideosIdCommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdCommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdCommentThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
