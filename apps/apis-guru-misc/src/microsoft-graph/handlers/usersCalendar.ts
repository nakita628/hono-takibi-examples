import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute,
  deleteUsersUserIdCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarEventsEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarEventsEventIdRoute,
  deleteUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdRoute,
  deleteUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarsCalendarIdRoute,
  deleteUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute,
  getUsersUserIdCalendarCalendarPermissionsRoute,
  getUsersUserIdCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarCalendarViewEventIdAttachmentsRoute,
  getUsersUserIdCalendarCalendarViewEventIdCalendarRoute,
  getUsersUserIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute,
  getUsersUserIdCalendarCalendarViewEventIdExtensionsRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1CalendarRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1Route,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarCalendarViewEventIdInstancesRoute,
  getUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarCalendarViewEventIdRoute,
  getUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarCalendarViewRoute,
  getUsersUserIdCalendarEventsEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarEventsEventIdAttachmentsRoute,
  getUsersUserIdCalendarEventsEventIdCalendarRoute,
  getUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute,
  getUsersUserIdCalendarEventsEventIdExtensionsRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1CalendarRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1Route,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarEventsEventIdInstancesRoute,
  getUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarEventsEventIdRoute,
  getUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarEventsRoute,
  getUsersUserIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarMultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarRoute,
  getUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarPermissionsRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdCalendarRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1CalendarRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1Route,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarsCalendarIdCalendarViewRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdCalendarRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1CalendarRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1Route,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarsCalendarIdEventsRoute,
  getUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarsCalendarIdRoute,
  getUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarSingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarsRoute,
  patchUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute,
  patchUsersUserIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarEventsEventIdRoute,
  patchUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarRoute,
  patchUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarsCalendarIdEventsEventIdRoute,
  patchUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarsCalendarIdRoute,
  patchUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  postUsersUserIdCalendarCalendarPermissionsRoute,
  postUsersUserIdCalendarCalendarViewEventIdAttachmentsRoute,
  postUsersUserIdCalendarCalendarViewEventIdExtensionsRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarEventsEventIdAttachmentsRoute,
  postUsersUserIdCalendarEventsEventIdExtensionsRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarEventsRoute,
  postUsersUserIdCalendarMultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarsCalendarIdCalendarPermissionsRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarsCalendarIdEventsRoute,
  postUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarSingleValueExtendedPropertiesRoute,
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
  .openapi(deleteUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
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
  .openapi(deleteUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchUsersUserIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1CalendarRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
