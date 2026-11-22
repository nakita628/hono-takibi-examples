import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute,
  deleteUsersUserIdCalendarEventsEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarEventsEventIdRoute,
  deleteUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdRoute,
  deleteUsersUserIdCalendarsCalendarIdRoute,
  getUsersUserIdCalendarAllowedCalendarSharingRolesUserUserRoute,
  getUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute,
  getUsersUserIdCalendarCalendarPermissionsCountRoute,
  getUsersUserIdCalendarCalendarPermissionsRoute,
  getUsersUserIdCalendarCalendarViewDeltaRoute,
  getUsersUserIdCalendarCalendarViewRoute,
  getUsersUserIdCalendarEventsCountRoute,
  getUsersUserIdCalendarEventsDeltaRoute,
  getUsersUserIdCalendarEventsEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarEventsEventIdAttachmentsCountRoute,
  getUsersUserIdCalendarEventsEventIdAttachmentsRoute,
  getUsersUserIdCalendarEventsEventIdCalendarRoute,
  getUsersUserIdCalendarEventsEventIdExtensionsCountRoute,
  getUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute,
  getUsersUserIdCalendarEventsEventIdExtensionsRoute,
  getUsersUserIdCalendarEventsEventIdInstancesDeltaRoute,
  getUsersUserIdCalendarEventsEventIdInstancesRoute,
  getUsersUserIdCalendarEventsEventIdRoute,
  getUsersUserIdCalendarEventsRoute,
  getUsersUserIdCalendarRoute,
  getUsersUserIdCalendarsCalendarIdAllowedCalendarSharingRolesUserUserRoute,
  getUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarPermissionsCountRoute,
  getUsersUserIdCalendarsCalendarIdCalendarPermissionsRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewDeltaRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewRoute,
  getUsersUserIdCalendarsCalendarIdEventsCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsDeltaRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdCalendarRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesDeltaRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsRoute,
  getUsersUserIdCalendarsCalendarIdRoute,
  getUsersUserIdCalendarsCountRoute,
  getUsersUserIdCalendarsDeltaRoute,
  getUsersUserIdCalendarsRoute,
  patchUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute,
  patchUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarEventsEventIdRoute,
  patchUsersUserIdCalendarRoute,
  patchUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  patchUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarsCalendarIdEventsEventIdRoute,
  patchUsersUserIdCalendarsCalendarIdRoute,
  postUsersUserIdCalendarCalendarPermissionsRoute,
  postUsersUserIdCalendarEventsEventIdAcceptRoute,
  postUsersUserIdCalendarEventsEventIdAttachmentsCreateUploadSessionRoute,
  postUsersUserIdCalendarEventsEventIdAttachmentsRoute,
  postUsersUserIdCalendarEventsEventIdCancelRoute,
  postUsersUserIdCalendarEventsEventIdDeclineRoute,
  postUsersUserIdCalendarEventsEventIdDismissReminderRoute,
  postUsersUserIdCalendarEventsEventIdExtensionsRoute,
  postUsersUserIdCalendarEventsEventIdForwardRoute,
  postUsersUserIdCalendarEventsEventIdPermanentDeleteRoute,
  postUsersUserIdCalendarEventsEventIdSnoozeReminderRoute,
  postUsersUserIdCalendarEventsEventIdTentativelyAcceptRoute,
  postUsersUserIdCalendarEventsRoute,
  postUsersUserIdCalendarGetScheduleRoute,
  postUsersUserIdCalendarPermanentDeleteRoute,
  postUsersUserIdCalendarsCalendarIdCalendarPermissionsRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdAcceptRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsCreateUploadSessionRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdCancelRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdDeclineRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdDismissReminderRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdForwardRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdPermanentDeleteRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdSnoozeReminderRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdTentativelyAcceptRoute,
  postUsersUserIdCalendarsCalendarIdEventsRoute,
  postUsersUserIdCalendarsCalendarIdGetScheduleRoute,
  postUsersUserIdCalendarsCalendarIdPermanentDeleteRoute,
  postUsersUserIdCalendarsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersCalendarHandler = app
  .openapi(getUsersUserIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarAllowedCalendarSharingRolesUserUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdDismissReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdSnoozeReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdTentativelyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdAllowedCalendarSharingRolesUserUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
