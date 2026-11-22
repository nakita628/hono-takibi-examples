import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeCalendarViewEventIdAttachmentsAttachmentIdRoute,
  deleteMeCalendarViewEventIdExtensionsExtensionIdRoute,
  deleteMeCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteMeCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeEventsEventIdAttachmentsAttachmentIdRoute,
  deleteMeEventsEventIdExtensionsExtensionIdRoute,
  deleteMeEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  deleteMeEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  deleteMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  deleteMeEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  deleteMeEventsEventIdRoute,
  deleteMeEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarViewEventIdAttachmentsAttachmentIdRoute,
  getMeCalendarViewEventIdAttachmentsRoute,
  getMeCalendarViewEventIdCalendarRoute,
  getMeCalendarViewEventIdExtensionsExtensionIdRoute,
  getMeCalendarViewEventIdExtensionsRoute,
  getMeCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getMeCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  getMeCalendarViewEventIdInstancesEventId1CalendarRoute,
  getMeCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getMeCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  getMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getMeCalendarViewEventIdInstancesEventId1Route,
  getMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarViewEventIdInstancesRoute,
  getMeCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  getMeCalendarViewEventIdRoute,
  getMeCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  getMeCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeCalendarViewRoute,
  getMeEventsEventIdAttachmentsAttachmentIdRoute,
  getMeEventsEventIdAttachmentsRoute,
  getMeEventsEventIdCalendarRoute,
  getMeEventsEventIdExtensionsExtensionIdRoute,
  getMeEventsEventIdExtensionsRoute,
  getMeEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute,
  getMeEventsEventIdInstancesEventId1AttachmentsRoute,
  getMeEventsEventIdInstancesEventId1CalendarRoute,
  getMeEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  getMeEventsEventIdInstancesEventId1ExtensionsRoute,
  getMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  getMeEventsEventIdInstancesEventId1Route,
  getMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  getMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeEventsEventIdInstancesRoute,
  getMeEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  getMeEventsEventIdMultiValueExtendedPropertiesRoute,
  getMeEventsEventIdRoute,
  getMeEventsEventIdSingleValueExtendedPropertiesRoute,
  getMeEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  getMeEventsRoute,
  patchMeCalendarViewEventIdExtensionsExtensionIdRoute,
  patchMeCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeEventsEventIdExtensionsExtensionIdRoute,
  patchMeEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute,
  patchMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  patchMeEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
  patchMeEventsEventIdRoute,
  patchMeEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
  postMeCalendarViewEventIdAttachmentsRoute,
  postMeCalendarViewEventIdExtensionsRoute,
  postMeCalendarViewEventIdInstancesEventId1AttachmentsRoute,
  postMeCalendarViewEventIdInstancesEventId1ExtensionsRoute,
  postMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postMeCalendarViewEventIdMultiValueExtendedPropertiesRoute,
  postMeCalendarViewEventIdSingleValueExtendedPropertiesRoute,
  postMeEventsEventIdAttachmentsRoute,
  postMeEventsEventIdExtensionsRoute,
  postMeEventsEventIdInstancesEventId1AttachmentsRoute,
  postMeEventsEventIdInstancesEventId1ExtensionsRoute,
  postMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute,
  postMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute,
  postMeEventsEventIdMultiValueExtendedPropertiesRoute,
  postMeEventsEventIdSingleValueExtendedPropertiesRoute,
  postMeEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meEventHandler = app
  .openapi(getMeCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarViewEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesEventId1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCalendarViewEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarViewEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarViewEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarViewEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCalendarViewEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeCalendarViewEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeEventsEventIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdInstancesEventId1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdInstancesEventId1ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeEventsEventIdInstancesEventId1ExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeEventsEventIdInstancesEventId1MultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeEventsEventIdInstancesEventId1SingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdMultiValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeEventsEventIdMultiValueExtendedPropertiesMultiValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeEventsEventIdSingleValueExtendedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeEventsEventIdSingleValueExtendedPropertiesSingleValueLegacyExtendedPropertyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
