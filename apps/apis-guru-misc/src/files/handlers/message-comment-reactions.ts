import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessageCommentReactionsIdRoute,
  getMessageCommentReactionsIdRoute,
  getMessageCommentReactionsRoute,
  postMessageCommentReactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messageCommentReactionsHandler = app
  .openapi(getMessageCommentReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessageCommentReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessageCommentReactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessageCommentReactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
