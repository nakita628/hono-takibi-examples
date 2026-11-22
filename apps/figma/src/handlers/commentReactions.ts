import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FilesFileKeyCommentsCommentIdReactionsRoute,
  getV1FilesFileKeyCommentsCommentIdReactionsRoute,
  postV1FilesFileKeyCommentsCommentIdReactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentReactionsHandler = app
  .openapi(getV1FilesFileKeyCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FilesFileKeyCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FilesFileKeyCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
