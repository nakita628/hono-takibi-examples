import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
  getFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
  getFilesFileIdCommentsCommentIdRepliesRoute,
  patchFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
  postFilesFileIdCommentsCommentIdRepliesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repliesHandler = app
  .openapi(getFilesFileIdCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdCommentsCommentIdRepliesReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdCommentsCommentIdRepliesReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdCommentsCommentIdRepliesReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
