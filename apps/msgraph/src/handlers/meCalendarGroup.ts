import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdAllowedCalendarSharingRolesUserUserRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewDeltaRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsDeltaRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdCalendarRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesDeltaRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCountRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsDeltaRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsRoute,
  getMeCalendarGroupsCalendarGroupIdRoute,
  getMeCalendarGroupsCountRoute,
  getMeCalendarGroupsRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  patchMeCalendarGroupsCalendarGroupIdRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCreateUploadSessionRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdCancelRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdDeclineRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdDismissReminderRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdForwardRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdPermanentDeleteRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSnoozeReminderRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdTentativelyAcceptRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdGetScheduleRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdPermanentDeleteRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsRoute,
  postMeCalendarGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meCalendarGroupHandler = app
  .openapi(getMeCalendarGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdDismissReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdPermanentDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSnoozeReminderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdTentativelyAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdAllowedCalendarSharingRolesUserUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdGetScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
