import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdCommentsCommentIdRoute,
  getChannelsChannelIdVideosVideoIdCommentsRoute,
  getVideosVideoIdCommentsCommentIdRepliesRoute,
  getVideosVideoIdCommentsCommentIdRoute,
  getVideosVideoIdCommentsRoute,
  patchVideosVideoIdCommentsCommentIdRoute,
  postChannelsChannelIdVideosVideoIdCommentsRoute,
  postVideosVideoIdCommentsCommentIdRepliesRoute,
  postVideosVideoIdCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosCommentsHandler = app
  .openapi(getChannelsChannelIdVideosVideoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdVideosVideoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
