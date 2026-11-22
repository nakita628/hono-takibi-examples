import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeCalendarCalendarPermissionsCalendarPermissionIdRoute,
  deleteMeCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute,
  deleteMeCalendarCalendarViewEventIdExtensionsExtensionIdRoute,
  deleteMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarEventsEventIdAttachmentsAttachmentIdRoute,
  deleteMeCalendarEventsEventIdExtensionsExtensionIdRoute,
  deleteMeCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteMeCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarEventsEventIdRoute,
  deleteMeCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  deleteMeCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
  deleteMeCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  deleteMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdRoute,
  deleteMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarsCalendarIdRoute,
  deleteMeCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarCalendarPermissionsCalendarPermissionIdRoute,
  getMeCalendarCalendarPermissionsRoute,
  getMeCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute,
  getMeCalendarCalendarViewEventIdAttachmentsRoute,
  getMeCalendarCalendarViewEventIdCalendarRoute,
  getMeCalendarCalendarViewEventIdExtensionsExtensionIdRoute,
  getMeCalendarCalendarViewEventIdExtensionsRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1CalendarRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1Route,
  getMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarCalendarViewEventIdInstancesRoute,
  getMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  getMeCalendarCalendarViewEventIdRoute,
  getMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  getMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarCalendarViewRoute,
  getMeCalendarEventsEventIdAttachmentsAttachmentIdRoute,
  getMeCalendarEventsEventIdAttachmentsRoute,
  getMeCalendarEventsEventIdCalendarRoute,
  getMeCalendarEventsEventIdExtensionsExtensionIdRoute,
  getMeCalendarEventsEventIdExtensionsRoute,
  getMeCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getMeCalendarEventsEventIdInstancesEventId1AttachmentsRoute,
  getMeCalendarEventsEventIdInstancesEventId1CalendarRoute,
  getMeCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getMeCalendarEventsEventIdInstancesEventId1ExtensionsRoute,
  getMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getMeCalendarEventsEventIdInstancesEventId1Route,
  getMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarEventsEventIdInstancesRoute,
  getMeCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarEventsEventIdMultiValueExtendedPropertiesRoute,
  getMeCalendarEventsEventIdRoute,
  getMeCalendarEventsEventIdSingleValueExtendedPropertiesRoute,
  getMeCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarEventsRoute,
  getMeCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarMultiValueExtendedPropertiesRoute,
  getMeCalendarRoute,
  getMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  getMeCalendarsCalendarIdCalendarPermissionsRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdCalendarRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1CalendarRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1Route,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdInstancesRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  getMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarsCalendarIdCalendarViewRoute,
  getMeCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute,
  getMeCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  getMeCalendarsCalendarIdEventsEventIdCalendarRoute,
  getMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  getMeCalendarsCalendarIdEventsEventIdExtensionsRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1CalendarRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1Route,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarsCalendarIdEventsEventIdInstancesRoute,
  getMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
  getMeCalendarsCalendarIdEventsEventIdRoute,
  getMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
  getMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarsCalendarIdEventsRoute,
  getMeCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
  getMeCalendarsCalendarIdRoute,
  getMeCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
  getMeCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarSingleValueExtendedPropertiesRoute,
  getMeCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarsRoute,
  patchMeCalendarCalendarPermissionsCalendarPermissionIdRoute,
  patchMeCalendarCalendarViewEventIdExtensionsExtensionIdRoute,
  patchMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarEventsEventIdExtensionsExtensionIdRoute,
  patchMeCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarEventsEventIdRoute,
  patchMeCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarRoute,
  patchMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute,
  patchMeCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute,
  patchMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute,
  patchMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarsCalendarIdEventsEventIdRoute,
  patchMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarsCalendarIdRoute,
  patchMeCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  postMeCalendarCalendarPermissionsRoute,
  postMeCalendarCalendarViewEventIdAttachmentsRoute,
  postMeCalendarCalendarViewEventIdExtensionsRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  postMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  postMeCalendarEventsEventIdAttachmentsRoute,
  postMeCalendarEventsEventIdExtensionsRoute,
  postMeCalendarEventsEventIdInstancesEventId1AttachmentsRoute,
  postMeCalendarEventsEventIdInstancesEventId1ExtensionsRoute,
  postMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postMeCalendarEventsEventIdMultiValueExtendedPropertiesRoute,
  postMeCalendarEventsEventIdSingleValueExtendedPropertiesRoute,
  postMeCalendarEventsRoute,
  postMeCalendarMultiValueExtendedPropertiesRoute,
  postMeCalendarsCalendarIdCalendarPermissionsRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdExtensionsRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  postMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  postMeCalendarsCalendarIdEventsEventIdAttachmentsRoute,
  postMeCalendarsCalendarIdEventsEventIdExtensionsRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute,
  postMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute,
  postMeCalendarsCalendarIdEventsRoute,
  postMeCalendarsCalendarIdMultiValueExtendedPropertiesRoute,
  postMeCalendarsCalendarIdSingleValueExtendedPropertiesRoute,
  postMeCalendarSingleValueExtendedPropertiesRoute,
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
  .openapi(deleteMeCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
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
  .openapi(deleteMeCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarsCalendarIdCalendarPermissionsCalendarPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarsCalendarIdCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
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
  .openapi(deleteMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarsCalendarIdEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarsCalendarIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarsCalendarIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarsCalendarIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
