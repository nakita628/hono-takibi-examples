import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdAllowedCalendarSharingRolesUserUserRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewDeltaRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsDeltaRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdCalendarRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesDeltaRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCountRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsDeltaRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdRoute,
  getUsersUserIdCalendarGroupsCountRoute,
  getUsersUserIdCalendarGroupsRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCreateUploadSessionRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdCancelRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdDeclineRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdDismissReminderRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdForwardRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdPermanentDeleteRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSnoozeReminderRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdTentativelyAcceptRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdGetScheduleRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdPermanentDeleteRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsRoute,
  postUsersUserIdCalendarGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersCalendarGroupHandler = app
  .openapi(getUsersUserIdCalendarGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdCalendarRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdDeclineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdForwardRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdPermanentDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdAllowedCalendarSharingRolesUserUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdPermanentDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
