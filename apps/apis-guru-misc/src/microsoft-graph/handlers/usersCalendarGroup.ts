import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarGroupsCalendarGroupIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdCalendarRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1CalendarRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1Route,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdCalendarRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1CalendarRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1Route,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsRoute,
  getUsersUserIdCalendarGroupsCalendarGroupIdRoute,
  getUsersUserIdCalendarGroupsRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarGroupsCalendarGroupIdRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
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
  .openapi(deleteUsersUserIdCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
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
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
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
  .openapi(getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdCalendarRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1CalendarRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
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
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
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
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
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
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1CalendarRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
