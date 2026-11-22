import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommentsCommentIdIndexRoute,
  getCommentsCommentIdIndexRoute,
  putCommentsCommentIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(deleteCommentsCommentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsCommentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCommentsCommentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
