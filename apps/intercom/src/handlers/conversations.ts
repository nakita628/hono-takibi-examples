import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsAttributesIdOptionsOptionIdRoute,
  deleteConversationsAttributesIdRoute,
  deleteConversationsConversationIdCustomersContactIdRoute,
  deleteConversationsConversationIdRoute,
  deleteConversationsConversationIdTagsTagIdRoute,
  deleteConversationsStreamTokenRoute,
  getConversationsAttributesIdRoute,
  getConversationsAttributesRoute,
  getConversationsConversationIdRoute,
  getConversationsDeletedRoute,
  getConversationsIdHandlingEventsRoute,
  getConversationsIdHitlEventsRoute,
  getConversationsIdSideConversationsRoute,
  getConversationsRoute,
  postConversationsAttributesIdOptionsRoute,
  postConversationsAttributesRoute,
  postConversationsConversationIdConvertRoute,
  postConversationsConversationIdCustomersRoute,
  postConversationsConversationIdPartsRoute,
  postConversationsConversationIdRatingRoute,
  postConversationsConversationIdReplyRoute,
  postConversationsConversationIdTagsRoute,
  postConversationsIdMergeRoute,
  postConversationsRedactRoute,
  postConversationsRoute,
  postConversationsSearchRoute,
  postConversationsStreamTokenRoute,
  putConversationsAttributesIdOptionsOptionIdRoute,
  putConversationsAttributesIdRoute,
  putConversationsConversationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(postConversationsConversationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getConversationsAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsAttributesIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsAttributesIdOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsAttributesIdOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
