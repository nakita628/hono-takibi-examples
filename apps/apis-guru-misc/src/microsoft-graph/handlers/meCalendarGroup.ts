import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarGroupsCalendarGroupIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdCalendarRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1CalendarRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1Route,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdCalendarRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1CalendarRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1Route,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarGroupsCalendarGroupIdCalendarsRoute,
  getMeCalendarGroupsCalendarGroupIdRoute,
  getMeCalendarGroupsRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute,
  patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarGroupsCalendarGroupIdRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
  postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
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
  .openapi(deleteMeCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarGroupsCalendarGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdCalendarRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1CalendarRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdRoute, (c) => {
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
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
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
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
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
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1CalendarRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarGroupsCalendarGroupIdCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
