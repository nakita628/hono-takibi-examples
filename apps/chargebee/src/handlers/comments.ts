import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommentsCommentIdRoute,
  getCommentsRoute,
  postCommentsCommentIdDeleteRoute,
  postCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(postCommentsCommentIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
