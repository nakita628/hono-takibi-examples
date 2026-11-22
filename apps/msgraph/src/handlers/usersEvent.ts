import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdEventsEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdEventsEventIdRoute,
  getUsersUserIdCalendarViewDeltaRoute,
  getUsersUserIdCalendarViewRoute,
  getUsersUserIdEventsCountRoute,
  getUsersUserIdEventsDeltaRoute,
  getUsersUserIdEventsEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdEventsEventIdAttachmentsCountRoute,
  getUsersUserIdEventsEventIdAttachmentsRoute,
  getUsersUserIdEventsEventIdCalendarRoute,
  getUsersUserIdEventsEventIdExtensionsCountRoute,
  getUsersUserIdEventsEventIdExtensionsExtensionIdRoute,
  getUsersUserIdEventsEventIdExtensionsRoute,
  getUsersUserIdEventsEventIdInstancesDeltaRoute,
  getUsersUserIdEventsEventIdInstancesRoute,
  getUsersUserIdEventsEventIdRoute,
  getUsersUserIdEventsRoute,
  patchUsersUserIdEventsEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdEventsEventIdRoute,
  postUsersUserIdEventsEventIdAcceptRoute,
  postUsersUserIdEventsEventIdAttachmentsCreateUploadSessionRoute,
  postUsersUserIdEventsEventIdAttachmentsRoute,
  postUsersUserIdEventsEventIdCancelRoute,
  postUsersUserIdEventsEventIdDeclineRoute,
  postUsersUserIdEventsEventIdDismissReminderRoute,
  postUsersUserIdEventsEventIdExtensionsRoute,
  postUsersUserIdEventsEventIdForwardRoute,
  postUsersUserIdEventsEventIdPermanentDeleteRoute,
  postUsersUserIdEventsEventIdSnoozeReminderRoute,
  postUsersUserIdEventsEventIdTentativelyAcceptRoute,
  postUsersUserIdEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersEventHandler = app
  .openapi(getUsersUserIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
