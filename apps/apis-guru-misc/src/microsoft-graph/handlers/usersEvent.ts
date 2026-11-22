import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarViewEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdEventsEventIdExtensionsExtensionIdRoute,
  deleteUsersUserIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteUsersUserIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteUsersUserIdEventsEventIdRoute,
  deleteUsersUserIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarViewEventIdAttachmentsRoute,
  getUsersUserIdCalendarViewEventIdCalendarRoute,
  getUsersUserIdCalendarViewEventIdExtensionsExtensionIdRoute,
  getUsersUserIdCalendarViewEventIdExtensionsRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1CalendarRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1Route,
  getUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarViewEventIdInstancesRoute,
  getUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdCalendarViewEventIdRoute,
  getUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdCalendarViewRoute,
  getUsersUserIdEventsEventIdAttachmentsAttachmentIdRoute,
  getUsersUserIdEventsEventIdAttachmentsRoute,
  getUsersUserIdEventsEventIdCalendarRoute,
  getUsersUserIdEventsEventIdExtensionsExtensionIdRoute,
  getUsersUserIdEventsEventIdExtensionsRoute,
  getUsersUserIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getUsersUserIdEventsEventIdInstancesEventId1AttachmentsRoute,
  getUsersUserIdEventsEventIdInstancesEventId1CalendarRoute,
  getUsersUserIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getUsersUserIdEventsEventIdInstancesEventId1ExtensionsRoute,
  getUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getUsersUserIdEventsEventIdInstancesEventId1Route,
  getUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdEventsEventIdInstancesRoute,
  getUsersUserIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdEventsEventIdMultiValueExtendedPropertiesRoute,
  getUsersUserIdEventsEventIdRoute,
  getUsersUserIdEventsEventIdSingleValueExtendedPropertiesRoute,
  getUsersUserIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getUsersUserIdEventsRoute,
  patchUsersUserIdCalendarViewEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdEventsEventIdExtensionsExtensionIdRoute,
  patchUsersUserIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchUsersUserIdEventsEventIdRoute,
  patchUsersUserIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  postUsersUserIdCalendarViewEventIdAttachmentsRoute,
  postUsersUserIdCalendarViewEventIdExtensionsRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdEventsEventIdAttachmentsRoute,
  postUsersUserIdEventsEventIdExtensionsRoute,
  postUsersUserIdEventsEventIdInstancesEventId1AttachmentsRoute,
  postUsersUserIdEventsEventIdInstancesEventId1ExtensionsRoute,
  postUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postUsersUserIdEventsEventIdMultiValueExtendedPropertiesRoute,
  postUsersUserIdEventsEventIdSingleValueExtendedPropertiesRoute,
  postUsersUserIdEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersEventHandler = app
  .openapi(getUsersUserIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
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
  .openapi(deleteUsersUserIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
