import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FilesFileKeyCommentsCommentIdRoute,
  getV1FilesFileKeyCommentsRoute,
  postV1FilesFileKeyCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(getV1FilesFileKeyCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FilesFileKeyCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FilesFileKeyCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
