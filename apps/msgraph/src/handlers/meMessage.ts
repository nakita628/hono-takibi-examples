import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeMessagesMessageIdAttachmentsAttachmentIdRoute,
  deleteMeMessagesMessageIdExtensionsExtensionIdRoute,
  deleteMeMessagesMessageIdRoute,
  deleteMeMessagesMessageIdValueRoute,
  getMeMessagesCountRoute,
  getMeMessagesDeltaRoute,
  getMeMessagesMessageIdAttachmentsAttachmentIdRoute,
  getMeMessagesMessageIdAttachmentsCountRoute,
  getMeMessagesMessageIdAttachmentsRoute,
  getMeMessagesMessageIdExtensionsCountRoute,
  getMeMessagesMessageIdExtensionsExtensionIdRoute,
  getMeMessagesMessageIdExtensionsRoute,
  getMeMessagesMessageIdRoute,
  getMeMessagesMessageIdValueRoute,
  getMeMessagesRoute,
  patchMeMessagesMessageIdExtensionsExtensionIdRoute,
  patchMeMessagesMessageIdRoute,
  postMeMessagesMessageIdAttachmentsCreateUploadSessionRoute,
  postMeMessagesMessageIdAttachmentsRoute,
  postMeMessagesMessageIdCopyRoute,
  postMeMessagesMessageIdCreateForwardRoute,
  postMeMessagesMessageIdCreateReplyAllRoute,
  postMeMessagesMessageIdCreateReplyRoute,
  postMeMessagesMessageIdExtensionsRoute,
  postMeMessagesMessageIdForwardRoute,
  postMeMessagesMessageIdMoveRoute,
  postMeMessagesMessageIdPermanentDeleteRoute,
  postMeMessagesMessageIdReplyAllRoute,
  postMeMessagesMessageIdReplyRoute,
  postMeMessagesMessageIdSendRoute,
  postMeMessagesRoute,
  putMeMessagesMessageIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meMessageHandler = app
  .openapi(getMeMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMessagesMessageIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMessagesMessageIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeMessagesMessageIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesMessageIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdCreateForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdCreateReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdCreateReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdReplyAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeMessagesMessageIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMessagesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
