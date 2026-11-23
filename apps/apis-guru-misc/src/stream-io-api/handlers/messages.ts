import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessagesIdReactionTypeRoute,
  deleteMessagesIdRoute,
  getMessagesIdReactionsRoute,
  getMessagesIdRoute,
  getMessagesParentIdRepliesRoute,
  postMessagesIdActionRoute,
  postMessagesIdCommitRoute,
  postMessagesIdReactionRoute,
  postMessagesIdRoute,
  postMessagesIdTranslateRoute,
  putMessagesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(deleteMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesIdCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesIdReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagesIdReactionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesIdTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesParentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
