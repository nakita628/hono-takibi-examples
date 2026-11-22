import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversationIdCustomersContactIdRoute,
  deleteConversationsConversationIdRoute,
  deleteConversationsStreamTokenRoute,
  getConversationsConversationIdRoute,
  getConversationsDeletedRoute,
  getConversationsIdHandlingEventsRoute,
  getConversationsIdHitlEventsRoute,
  getConversationsIdSideConversationsRoute,
  getConversationsRoute,
  postConversationsConversationIdConvertRoute,
  postConversationsConversationIdCustomersRoute,
  postConversationsConversationIdPartsRoute,
  postConversationsConversationIdRatingRoute,
  postConversationsConversationIdReplyRoute,
  postConversationsIdMergeRoute,
  postConversationsRedactRoute,
  postConversationsRoute,
  postConversationsSearchRoute,
  postConversationsStreamTokenRoute,
  putConversationsConversationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(getConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdCustomersContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsIdHandlingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsIdHitlEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsIdSideConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsRedactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsDeletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsStreamTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsStreamTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
