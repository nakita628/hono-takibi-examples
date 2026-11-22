import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeCalendarCalendarPermissionsCalendarPermissionIdRoute,
  deleteMeCalendarEventsEventIdAttachmentsAttachmentIdRoute,
  deleteMeCalendarEventsEventIdExtensionsExtensionIdRoute,
  deleteMeCalendarEventsEventIdRoute,
  deleteMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdRoute,
  deleteMeCalendarsCalendarIdRoute,
  getMeCalendarAllowedCalendarSharingRolesUserUserRoute,
  getMeCalendarCalendarPermissionsCalendarPermissionIdRoute,
  getMeCalendarCalendarPermissionsCountRoute,
  getMeCalendarCalendarPermissionsRoute,
  getMeCalendarCalendarViewDeltaRoute,
  getMeCalendarCalendarViewRoute,
  getMeCalendarEventsCountRoute,
  getMeCalendarEventsDeltaRoute,
  getMeCalendarEventsEventIdAttachmentsAttachmentIdRoute,
  getMeCalendarEventsEventIdAttachmentsCountRoute,
  getMeCalendarEventsEventIdAttachmentsRoute,
  getMeCalendarEventsEventIdCalendarRoute,
  getMeCalendarEventsEventIdExtensionsCountRoute,
  getMeCalendarEventsEventIdExtensionsExtensionIdRoute,
  getMeCalendarEventsEventIdExtensionsRoute,
  getMeCalendarEventsEventIdInstancesDeltaRoute,
  getMeCalendarEventsEventIdInstancesRoute,
  getMeCalendarEventsEventIdRoute,
  getMeCalendarEventsRoute,
  getMeCalendarRoute,
  getMeCalendarsCalendarIdAllowedCalendarSharingRolesUserUserRoute,
  getMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  getMeCalendarsCalendarIdCalendarPermissionsCountRoute,
  getMeCalendarsCalendarIdCalendarPermissionsRoute,
  getMeCalendarsCalendarIdCalendarViewDeltaRoute,
  getMeCalendarsCalendarIdCalendarViewRoute,
  getMeCalendarsCalendarIdEventsCountRoute,
  getMeCalendarsCalendarIdEventsDeltaRoute,
  getMeCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  getMeCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
  getMeCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  getMeCalendarsCalendarIdEventsEventIdCalendarRoute,
  getMeCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
  getMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  getMeCalendarsCalendarIdEventsEventIdExtensionsRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesDeltaRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesRoute,
  getMeCalendarsCalendarIdEventsEventIdRoute,
  getMeCalendarsCalendarIdEventsRoute,
  getMeCalendarsCalendarIdRoute,
  getMeCalendarsCountRoute,
  getMeCalendarsDeltaRoute,
  getMeCalendarsRoute,
  patchMeCalendarCalendarPermissionsCalendarPermissionIdRoute,
  patchMeCalendarEventsEventIdExtensionsExtensionIdRoute,
  patchMeCalendarEventsEventIdRoute,
  patchMeCalendarRoute,
  patchMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  patchMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  patchMeCalendarsCalendarIdEventsEventIdRoute,
  patchMeCalendarsCalendarIdRoute,
  postMeCalendarCalendarPermissionsRoute,
  postMeCalendarEventsEventIdAcceptRoute,
  postMeCalendarEventsEventIdAttachmentsCreateUploadSessionRoute,
  postMeCalendarEventsEventIdAttachmentsRoute,
  postMeCalendarEventsEventIdCancelRoute,
  postMeCalendarEventsEventIdDeclineRoute,
  postMeCalendarEventsEventIdDismissReminderRoute,
  postMeCalendarEventsEventIdExtensionsRoute,
  postMeCalendarEventsEventIdForwardRoute,
  postMeCalendarEventsEventIdPermanentDeleteRoute,
  postMeCalendarEventsEventIdSnoozeReminderRoute,
  postMeCalendarEventsEventIdTentativelyAcceptRoute,
  postMeCalendarEventsRoute,
  postMeCalendarGetScheduleRoute,
  postMeCalendarPermanentDeleteRoute,
  postMeCalendarsCalendarIdCalendarPermissionsRoute,
  postMeCalendarsCalendarIdEventsEventIdAcceptRoute,
  postMeCalendarsCalendarIdEventsEventIdAttachmentsCreateUploadSessionRoute,
  postMeCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  postMeCalendarsCalendarIdEventsEventIdCancelRoute,
  postMeCalendarsCalendarIdEventsEventIdDeclineRoute,
  postMeCalendarsCalendarIdEventsEventIdDismissReminderRoute,
  postMeCalendarsCalendarIdEventsEventIdExtensionsRoute,
  postMeCalendarsCalendarIdEventsEventIdForwardRoute,
  postMeCalendarsCalendarIdEventsEventIdPermanentDeleteRoute,
  postMeCalendarsCalendarIdEventsEventIdSnoozeReminderRoute,
  postMeCalendarsCalendarIdEventsEventIdTentativelyAcceptRoute,
  postMeCalendarsCalendarIdEventsRoute,
  postMeCalendarsCalendarIdGetScheduleRoute,
  postMeCalendarsCalendarIdPermanentDeleteRoute,
  postMeCalendarsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meCalendarHandler = app
  .openapi(getMeCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarAllowedCalendarSharingRolesUserUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdAllowedCalendarSharingRolesUserUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
