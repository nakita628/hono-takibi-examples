import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdCommentsCommentIdRoute,
  getFilesFileIdCommentsCommentIdRoute,
  getFilesFileIdCommentsRoute,
  patchFilesFileIdCommentsCommentIdRoute,
  postFilesFileIdCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(getFilesFileIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
