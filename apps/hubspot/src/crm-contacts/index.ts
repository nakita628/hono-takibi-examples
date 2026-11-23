import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ContactsContactIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609ContactsContactIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ContactsContactIdRoute,
  getCrmObjects202609ContactsRoute,
  patchCrmObjects202609ContactsContactIdRoute,
  postCrmObjects202609ContactsBatchArchiveRoute,
  postCrmObjects202609ContactsBatchCreateRoute,
  postCrmObjects202609ContactsBatchReadRoute,
  postCrmObjects202609ContactsBatchUpdateRoute,
  postCrmObjects202609ContactsBatchUpsertRoute,
  postCrmObjects202609ContactsGdprDeleteRoute,
  postCrmObjects202609ContactsMergeRoute,
  postCrmObjects202609ContactsRoute,
  postCrmObjects202609ContactsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ContactsContactIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609ContactsContactIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609ContactsContactIdRouteHandler,
  getCrmObjects202609ContactsRouteHandler,
  patchCrmObjects202609ContactsContactIdRouteHandler,
  postCrmObjects202609ContactsBatchArchiveRouteHandler,
  postCrmObjects202609ContactsBatchCreateRouteHandler,
  postCrmObjects202609ContactsBatchReadRouteHandler,
  postCrmObjects202609ContactsBatchUpdateRouteHandler,
  postCrmObjects202609ContactsBatchUpsertRouteHandler,
  postCrmObjects202609ContactsGdprDeleteRouteHandler,
  postCrmObjects202609ContactsMergeRouteHandler,
  postCrmObjects202609ContactsRouteHandler,
  postCrmObjects202609ContactsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609ContactsRoute, getCrmObjects202609ContactsRouteHandler)
  .openapi(postCrmObjects202609ContactsRoute, postCrmObjects202609ContactsRouteHandler)
  .openapi(
    postCrmObjects202609ContactsBatchArchiveRoute,
    postCrmObjects202609ContactsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609ContactsBatchCreateRoute,
    postCrmObjects202609ContactsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ContactsBatchReadRoute,
    postCrmObjects202609ContactsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609ContactsBatchUpdateRoute,
    postCrmObjects202609ContactsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ContactsBatchUpsertRoute,
    postCrmObjects202609ContactsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609ContactsGdprDeleteRoute,
    postCrmObjects202609ContactsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609ContactsMergeRoute, postCrmObjects202609ContactsMergeRouteHandler)
  .openapi(postCrmObjects202609ContactsSearchRoute, postCrmObjects202609ContactsSearchRouteHandler)
  .openapi(
    getCrmObjects202609ContactsContactIdRoute,
    getCrmObjects202609ContactsContactIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ContactsContactIdRoute,
    deleteCrmObjects202609ContactsContactIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609ContactsContactIdRoute,
    patchCrmObjects202609ContactsContactIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609ContactsContactIdAssociationsToObjectTypeRoute,
    getCrmObjects202609ContactsContactIdAssociationsToObjectTypeRouteHandler,
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
