import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeEventsEventIdAttachmentsAttachmentIdRoute,
  deleteMeEventsEventIdExtensionsExtensionIdRoute,
  deleteMeEventsEventIdRoute,
  getMeCalendarViewDeltaRoute,
  getMeCalendarViewRoute,
  getMeEventsCountRoute,
  getMeEventsDeltaRoute,
  getMeEventsEventIdAttachmentsAttachmentIdRoute,
  getMeEventsEventIdAttachmentsCountRoute,
  getMeEventsEventIdAttachmentsRoute,
  getMeEventsEventIdCalendarRoute,
  getMeEventsEventIdExtensionsCountRoute,
  getMeEventsEventIdExtensionsExtensionIdRoute,
  getMeEventsEventIdExtensionsRoute,
  getMeEventsEventIdInstancesDeltaRoute,
  getMeEventsEventIdInstancesRoute,
  getMeEventsEventIdRoute,
  getMeEventsRoute,
  patchMeEventsEventIdExtensionsExtensionIdRoute,
  patchMeEventsEventIdRoute,
  postMeEventsEventIdAcceptRoute,
  postMeEventsEventIdAttachmentsCreateUploadSessionRoute,
  postMeEventsEventIdAttachmentsRoute,
  postMeEventsEventIdCancelRoute,
  postMeEventsEventIdDeclineRoute,
  postMeEventsEventIdDismissReminderRoute,
  postMeEventsEventIdExtensionsRoute,
  postMeEventsEventIdForwardRoute,
  postMeEventsEventIdPermanentDeleteRoute,
  postMeEventsEventIdSnoozeReminderRoute,
  postMeEventsEventIdTentativelyAcceptRoute,
  postMeEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meEventHandler = app
  .openapi(getMeCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
