import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdCalendarCalendarPermissionsCalendarPermissionIdRoute,
  deleteGroupsGroupIdCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute,
  deleteGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdCalendarEventsEventIdAttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdCalendarEventsEventIdExtensionsExtensionIdRoute,
  deleteGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdCalendarEventsEventIdRoute,
  deleteGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteGroupsGroupIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdCalendarCalendarPermissionsCalendarPermissionIdRoute,
  getGroupsGroupIdCalendarCalendarPermissionsRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdAttachmentsRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdCalendarRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdExtensionsRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1CalendarRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1Route,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdInstancesRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  getGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdCalendarCalendarViewRoute,
  getGroupsGroupIdCalendarEventsEventIdAttachmentsAttachmentIdRoute,
  getGroupsGroupIdCalendarEventsEventIdAttachmentsRoute,
  getGroupsGroupIdCalendarEventsEventIdCalendarRoute,
  getGroupsGroupIdCalendarEventsEventIdExtensionsExtensionIdRoute,
  getGroupsGroupIdCalendarEventsEventIdExtensionsRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1CalendarRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1Route,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdCalendarEventsEventIdInstancesRoute,
  getGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesRoute,
  getGroupsGroupIdCalendarEventsEventIdRoute,
  getGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesRoute,
  getGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdCalendarEventsRoute,
  getGroupsGroupIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getGroupsGroupIdCalendarMultiValueExtendedPropertiesRoute,
  getGroupsGroupIdCalendarRoute,
  getGroupsGroupIdCalendarSingleValueExtendedPropertiesRoute,
  getGroupsGroupIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdCalendarCalendarPermissionsCalendarPermissionIdRoute,
  patchGroupsGroupIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute,
  patchGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdCalendarEventsEventIdExtensionsExtensionIdRoute,
  patchGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdCalendarEventsEventIdRoute,
  patchGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchGroupsGroupIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  postGroupsGroupIdCalendarCalendarPermissionsRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdAttachmentsRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdExtensionsRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  postGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  postGroupsGroupIdCalendarEventsEventIdAttachmentsRoute,
  postGroupsGroupIdCalendarEventsEventIdExtensionsRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesRoute,
  postGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesRoute,
  postGroupsGroupIdCalendarEventsRoute,
  postGroupsGroupIdCalendarMultiValueExtendedPropertiesRoute,
  postGroupsGroupIdCalendarSingleValueExtendedPropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsCalendarHandler = app
  .openapi(getGroupsGroupIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdCalendarCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdCalendarEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarEventsEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdCalendarSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCalendarSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
