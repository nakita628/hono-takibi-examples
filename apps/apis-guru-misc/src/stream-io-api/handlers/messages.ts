import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsTypeIdFileRoute,
  deleteChannelsTypeIdImageRoute,
  deleteMessagesIdReactionTypeRoute,
  deleteMessagesIdRoute,
  getChannelsTypeIdMessagesRoute,
  getMessagesIdReactionsRoute,
  getMessagesIdRoute,
  getMessagesParentIdRepliesRoute,
  getModerationFlagsMessageRoute,
  getOgRoute,
  postChannelsTypeIdFileRoute,
  postChannelsTypeIdImageRoute,
  postChannelsTypeIdMessageRoute,
  postMessagesIdActionRoute,
  postMessagesIdCommitRoute,
  postMessagesIdReactionRoute,
  postMessagesIdRoute,
  postMessagesIdTranslateRoute,
  putMessagesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(deleteChannelsTypeIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsTypeIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsTypeIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getModerationFlagsMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgRoute, (c) => {
    throw new Error('Not implemented')
  })
