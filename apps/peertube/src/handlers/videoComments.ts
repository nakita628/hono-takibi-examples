import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideosIdCommentsCommentIdRoute,
  getApiV1UsersMeVideosCommentsRoute,
  getApiV1VideosCommentsRoute,
  getApiV1VideosIdCommentsCommentIdRepliesRoute,
  getApiV1VideosIdCommentThreadsRoute,
  getApiV1VideosIdCommentThreadsThreadIdRoute,
  postApiV1VideosIdCommentsCommentIdApproveRoute,
  postApiV1VideosIdCommentsCommentIdRoute,
  postApiV1VideosIdCommentThreadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoCommentsHandler = app
  .openapi(getApiV1UsersMeVideosCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdCommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdCommentThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdCommentThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdCommentsCommentIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
