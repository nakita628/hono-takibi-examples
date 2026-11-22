import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdMessagesMessageIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute,
  deleteUsersUserIdMessagesMessageIdRoute,
  deleteUsersUserIdMessagesMessageIdValueRoute,
  getUsersUserIdMessagesCountRoute,
  getUsersUserIdMessagesDeltaRoute,
  getUsersUserIdMessagesMessageIdAttachmentsAttachmentIdRoute,
  getUsersUserIdMessagesMessageIdAttachmentsCountRoute,
  getUsersUserIdMessagesMessageIdAttachmentsRoute,
  getUsersUserIdMessagesMessageIdExtensionsCountRoute,
  getUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute,
  getUsersUserIdMessagesMessageIdExtensionsRoute,
  getUsersUserIdMessagesMessageIdRoute,
  getUsersUserIdMessagesMessageIdValueRoute,
  getUsersUserIdMessagesRoute,
  patchUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute,
  patchUsersUserIdMessagesMessageIdRoute,
  postUsersUserIdMessagesMessageIdAttachmentsCreateUploadSessionRoute,
  postUsersUserIdMessagesMessageIdAttachmentsRoute,
  postUsersUserIdMessagesMessageIdCopyRoute,
  postUsersUserIdMessagesMessageIdCreateForwardRoute,
  postUsersUserIdMessagesMessageIdCreateReplyAllRoute,
  postUsersUserIdMessagesMessageIdCreateReplyRoute,
  postUsersUserIdMessagesMessageIdExtensionsRoute,
  postUsersUserIdMessagesMessageIdForwardRoute,
  postUsersUserIdMessagesMessageIdMoveRoute,
  postUsersUserIdMessagesMessageIdPermanentDeleteRoute,
  postUsersUserIdMessagesMessageIdReplyAllRoute,
  postUsersUserIdMessagesMessageIdReplyRoute,
  postUsersUserIdMessagesMessageIdSendRoute,
  postUsersUserIdMessagesRoute,
  putUsersUserIdMessagesMessageIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersMessageHandler = app
  .openapi(getUsersUserIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMessagesMessageIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesMessageIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdCreateForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdCreateReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdCreateReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMessagesMessageIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
