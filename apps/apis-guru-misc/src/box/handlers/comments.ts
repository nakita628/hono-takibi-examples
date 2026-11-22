import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommentsCommentIdRoute,
  getCommentsCommentIdRoute,
  getFilesFileIdCommentsRoute,
  postCommentsRoute,
  putCommentsCommentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(postCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
