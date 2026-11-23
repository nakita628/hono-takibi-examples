import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommentsIdLikeRoute,
  deleteCommentsIdRoute,
  getCommentsIdItemRoute,
  getCommentsIdLikesRoute,
  getCommentsIdRepliesRoute,
  getCommentsIdRoute,
  getCommentsRecentCommentTypeTypeRoute,
  getCommentsTrendingCommentTypeTypeRoute,
  getCommentsUpdatesCommentTypeTypeRoute,
  postCommentsIdLikeRoute,
  postCommentsIdRepliesRoute,
  postCommentsRoute,
  putCommentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(postCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsRecentCommentTypeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsTrendingCommentTypeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsUpdatesCommentTypeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsIdItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommentsIdLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsIdLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
