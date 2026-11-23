import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteFileCommentReactionsIdRoute, postFileCommentReactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const fileCommentReactionsHandler = app
  .openapi(postFileCommentReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileCommentReactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
