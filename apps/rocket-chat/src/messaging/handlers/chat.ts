import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ChatGetDeletedMessagesRoute,
  getApiV1ChatGetDiscussionsRoute,
  getApiV1ChatGetMentionedMessagesRoute,
  getApiV1ChatGetMessageReadReceiptsRoute,
  getApiV1ChatGetMessageRoute,
  getApiV1ChatGetPinnedMessagesRoute,
  getApiV1ChatGetStarredMessagesRoute,
  getApiV1ChatGetThreadMessagesRoute,
  getApiV1ChatGetThreadsListRoute,
  getApiV1ChatGetURLPreviewRoute,
  getApiV1ChatIgnoreUserRoute,
  getApiV1ChatSearchRoute,
  getApiV1ChatSyncMessagesRoute,
  getApiV1ChatSyncThreadMessagesRoute,
  getApiV1ChatSyncThreadsListRoute,
  postApiV1ChatDeleteRoute,
  postApiV1ChatFollowMessageRoute,
  postApiV1ChatGetMessagesRoute,
  postApiV1ChatPinMessageRoute,
  postApiV1ChatPostMessageRoute,
  postApiV1ChatReactRoute,
  postApiV1ChatReadThreadRoute,
  postApiV1ChatReportMessageRoute,
  postApiV1ChatSendMessageRoute,
  postApiV1ChatStarMessageRoute,
  postApiV1ChatUnfollowMessageRoute,
  postApiV1ChatUnPinMessageRoute,
  postApiV1ChatUnStarMessageRoute,
  postApiV1ChatUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(postApiV1ChatDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatReactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatReportMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatFollowMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatUnfollowMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetThreadsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetDeletedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetDiscussionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetMentionedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetMessageReadReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatGetMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetStarredMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetThreadMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatReadThreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatIgnoreUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatPinMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatUnPinMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatPostMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatSendMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatStarMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChatUnStarMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatSyncThreadsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatSyncThreadMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatSyncMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChatGetURLPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
