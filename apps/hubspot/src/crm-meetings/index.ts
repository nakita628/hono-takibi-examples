import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609MeetingsMeetingIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609MeetingsMeetingIdAssociationsToObjectTypeRoute,
  getCrmObjects202609MeetingsMeetingIdRoute,
  getCrmObjects202609MeetingsRoute,
  patchCrmObjects202609MeetingsMeetingIdRoute,
  postCrmObjects202609MeetingsBatchArchiveRoute,
  postCrmObjects202609MeetingsBatchCreateRoute,
  postCrmObjects202609MeetingsBatchReadRoute,
  postCrmObjects202609MeetingsBatchUpdateRoute,
  postCrmObjects202609MeetingsBatchUpsertRoute,
  postCrmObjects202609MeetingsGdprDeleteRoute,
  postCrmObjects202609MeetingsMergeRoute,
  postCrmObjects202609MeetingsRoute,
  postCrmObjects202609MeetingsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609MeetingsMeetingIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609MeetingsMeetingIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609MeetingsMeetingIdRouteHandler,
  getCrmObjects202609MeetingsRouteHandler,
  patchCrmObjects202609MeetingsMeetingIdRouteHandler,
  postCrmObjects202609MeetingsBatchArchiveRouteHandler,
  postCrmObjects202609MeetingsBatchCreateRouteHandler,
  postCrmObjects202609MeetingsBatchReadRouteHandler,
  postCrmObjects202609MeetingsBatchUpdateRouteHandler,
  postCrmObjects202609MeetingsBatchUpsertRouteHandler,
  postCrmObjects202609MeetingsGdprDeleteRouteHandler,
  postCrmObjects202609MeetingsMergeRouteHandler,
  postCrmObjects202609MeetingsRouteHandler,
  postCrmObjects202609MeetingsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609MeetingsRoute, getCrmObjects202609MeetingsRouteHandler)
  .openapi(postCrmObjects202609MeetingsRoute, postCrmObjects202609MeetingsRouteHandler)
  .openapi(
    postCrmObjects202609MeetingsBatchArchiveRoute,
    postCrmObjects202609MeetingsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609MeetingsBatchCreateRoute,
    postCrmObjects202609MeetingsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609MeetingsBatchReadRoute,
    postCrmObjects202609MeetingsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609MeetingsBatchUpdateRoute,
    postCrmObjects202609MeetingsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609MeetingsBatchUpsertRoute,
    postCrmObjects202609MeetingsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609MeetingsGdprDeleteRoute,
    postCrmObjects202609MeetingsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609MeetingsMergeRoute, postCrmObjects202609MeetingsMergeRouteHandler)
  .openapi(postCrmObjects202609MeetingsSearchRoute, postCrmObjects202609MeetingsSearchRouteHandler)
  .openapi(
    getCrmObjects202609MeetingsMeetingIdRoute,
    getCrmObjects202609MeetingsMeetingIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609MeetingsMeetingIdRoute,
    deleteCrmObjects202609MeetingsMeetingIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609MeetingsMeetingIdRoute,
    patchCrmObjects202609MeetingsMeetingIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609MeetingsMeetingIdAssociationsToObjectTypeRoute,
    getCrmObjects202609MeetingsMeetingIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )

export default app
