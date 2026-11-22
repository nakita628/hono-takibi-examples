import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1MessagesMessageIdArchivedRoute,
  deleteV1MessagesMessageIdReadRoute,
  deleteV1MessagesMessageIdSeenRoute,
  deleteV1MessagesMessageIdUnarchivedRoute,
  deleteV1MessagesMessageIdUnreadRoute,
  deleteV1MessagesMessageIdUnseenRoute,
  getV1MessagesBatchContentRoute,
  getV1MessagesMessageIdActivitiesRoute,
  getV1MessagesMessageIdContentRoute,
  getV1MessagesMessageIdDeliveryLogsRoute,
  getV1MessagesMessageIdEventsRoute,
  getV1MessagesMessageIdRoute,
  getV1MessagesRoute,
  getV1ObjectsCollectionIdMessagesRoute,
  getV1UsersUserIdMessagesRoute,
  postV1ChannelsChannelIdMessagesBulkActionRoute,
  postV1MessagesBatchArchivedRoute,
  postV1MessagesBatchInteractedRoute,
  postV1MessagesBatchReadRoute,
  postV1MessagesBatchSeenRoute,
  postV1MessagesBatchUnarchivedRoute,
  postV1MessagesBatchUnreadRoute,
  postV1MessagesBatchUnseenRoute,
  putV1MessagesMessageIdArchivedRoute,
  putV1MessagesMessageIdInteractedRoute,
  putV1MessagesMessageIdReadRoute,
  putV1MessagesMessageIdSeenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getV1MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessagesMessageIdInteractedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesMessageIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesMessageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesMessageIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchUnarchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessagesMessageIdSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessagesMessageIdArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchInteractedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdUnseenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessagesMessageIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchUnseenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesBatchContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesMessageIdDeliveryLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChannelsChannelIdMessagesBulkActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdUnarchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
