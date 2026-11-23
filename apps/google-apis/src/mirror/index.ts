import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactsIdRoute,
  deleteSubscriptionsIdRoute,
  deleteTimelineIdRoute,
  deleteTimelineItemIdAttachmentsAttachmentIdRoute,
  getContactsIdRoute,
  getContactsRoute,
  getLocationsIdRoute,
  getLocationsRoute,
  getSettingsIdRoute,
  getSubscriptionsRoute,
  getTimelineIdRoute,
  getTimelineItemIdAttachmentsAttachmentIdRoute,
  getTimelineItemIdAttachmentsRoute,
  getTimelineRoute,
  patchContactsIdRoute,
  patchTimelineIdRoute,
  postAccountsUserTokenAccountTypeAccountNameRoute,
  postContactsRoute,
  postSubscriptionsRoute,
  postTimelineItemIdAttachmentsRoute,
  postTimelineRoute,
  putContactsIdRoute,
  putSubscriptionsIdRoute,
  putTimelineIdRoute,
} from './routes'
import {
  deleteContactsIdRouteHandler,
  deleteSubscriptionsIdRouteHandler,
  deleteTimelineIdRouteHandler,
  deleteTimelineItemIdAttachmentsAttachmentIdRouteHandler,
  getContactsIdRouteHandler,
  getContactsRouteHandler,
  getLocationsIdRouteHandler,
  getLocationsRouteHandler,
  getSettingsIdRouteHandler,
  getSubscriptionsRouteHandler,
  getTimelineIdRouteHandler,
  getTimelineItemIdAttachmentsAttachmentIdRouteHandler,
  getTimelineItemIdAttachmentsRouteHandler,
  getTimelineRouteHandler,
  patchContactsIdRouteHandler,
  patchTimelineIdRouteHandler,
  postAccountsUserTokenAccountTypeAccountNameRouteHandler,
  postContactsRouteHandler,
  postSubscriptionsRouteHandler,
  postTimelineItemIdAttachmentsRouteHandler,
  postTimelineRouteHandler,
  putContactsIdRouteHandler,
  putSubscriptionsIdRouteHandler,
  putTimelineIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postAccountsUserTokenAccountTypeAccountNameRoute,
    postAccountsUserTokenAccountTypeAccountNameRouteHandler,
  )
  .openapi(getContactsRoute, getContactsRouteHandler)
  .openapi(postContactsRoute, postContactsRouteHandler)
  .openapi(deleteContactsIdRoute, deleteContactsIdRouteHandler)
  .openapi(getContactsIdRoute, getContactsIdRouteHandler)
  .openapi(patchContactsIdRoute, patchContactsIdRouteHandler)
  .openapi(putContactsIdRoute, putContactsIdRouteHandler)
  .openapi(getLocationsRoute, getLocationsRouteHandler)
  .openapi(getLocationsIdRoute, getLocationsIdRouteHandler)
  .openapi(getSettingsIdRoute, getSettingsIdRouteHandler)
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(postSubscriptionsRoute, postSubscriptionsRouteHandler)
  .openapi(deleteSubscriptionsIdRoute, deleteSubscriptionsIdRouteHandler)
  .openapi(putSubscriptionsIdRoute, putSubscriptionsIdRouteHandler)
  .openapi(getTimelineRoute, getTimelineRouteHandler)
  .openapi(postTimelineRoute, postTimelineRouteHandler)
  .openapi(deleteTimelineIdRoute, deleteTimelineIdRouteHandler)
  .openapi(getTimelineIdRoute, getTimelineIdRouteHandler)
  .openapi(patchTimelineIdRoute, patchTimelineIdRouteHandler)
  .openapi(putTimelineIdRoute, putTimelineIdRouteHandler)
  .openapi(getTimelineItemIdAttachmentsRoute, getTimelineItemIdAttachmentsRouteHandler)
  .openapi(postTimelineItemIdAttachmentsRoute, postTimelineItemIdAttachmentsRouteHandler)
  .openapi(
    deleteTimelineItemIdAttachmentsAttachmentIdRoute,
    deleteTimelineItemIdAttachmentsAttachmentIdRouteHandler,
  )
  .openapi(
    getTimelineItemIdAttachmentsAttachmentIdRoute,
    getTimelineItemIdAttachmentsAttachmentIdRouteHandler,
  )

export default app
