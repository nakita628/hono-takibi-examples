import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdEventsEventIdExtensionsExtensionIdRoute,
  deleteGroupsGroupIdEventsEventIdRoute,
  getGroupsGroupIdCalendarViewDeltaRoute,
  getGroupsGroupIdCalendarViewRoute,
  getGroupsGroupIdEventsCountRoute,
  getGroupsGroupIdEventsDeltaRoute,
  getGroupsGroupIdEventsEventIdAttachmentsAttachmentIdRoute,
  getGroupsGroupIdEventsEventIdAttachmentsCountRoute,
  getGroupsGroupIdEventsEventIdAttachmentsRoute,
  getGroupsGroupIdEventsEventIdCalendarRoute,
  getGroupsGroupIdEventsEventIdExtensionsCountRoute,
  getGroupsGroupIdEventsEventIdExtensionsExtensionIdRoute,
  getGroupsGroupIdEventsEventIdExtensionsRoute,
  getGroupsGroupIdEventsEventIdInstancesDeltaRoute,
  getGroupsGroupIdEventsEventIdInstancesRoute,
  getGroupsGroupIdEventsEventIdRoute,
  getGroupsGroupIdEventsRoute,
  patchGroupsGroupIdEventsEventIdExtensionsExtensionIdRoute,
  patchGroupsGroupIdEventsEventIdRoute,
  postGroupsGroupIdEventsEventIdAcceptRoute,
  postGroupsGroupIdEventsEventIdAttachmentsCreateUploadSessionRoute,
  postGroupsGroupIdEventsEventIdAttachmentsRoute,
  postGroupsGroupIdEventsEventIdCancelRoute,
  postGroupsGroupIdEventsEventIdDeclineRoute,
  postGroupsGroupIdEventsEventIdDismissReminderRoute,
  postGroupsGroupIdEventsEventIdExtensionsRoute,
  postGroupsGroupIdEventsEventIdForwardRoute,
  postGroupsGroupIdEventsEventIdPermanentDeleteRoute,
  postGroupsGroupIdEventsEventIdSnoozeReminderRoute,
  postGroupsGroupIdEventsEventIdTentativelyAcceptRoute,
  postGroupsGroupIdEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsEventHandler = app
  .openapi(getGroupsGroupIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarViewDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsEventIdInstancesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdEventsEventIdTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdEventsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
