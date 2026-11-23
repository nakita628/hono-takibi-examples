import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeRoute,
  patchCrmObjects202609ObjectTypeObjectIdRoute,
  postCrmObjects202609ObjectTypeBatchArchiveRoute,
  postCrmObjects202609ObjectTypeBatchCreateRoute,
  postCrmObjects202609ObjectTypeBatchReadRoute,
  postCrmObjects202609ObjectTypeBatchUpdateRoute,
  postCrmObjects202609ObjectTypeBatchUpsertRoute,
  postCrmObjects202609ObjectTypeMergeRoute,
  postCrmObjects202609ObjectTypeRoute,
  postCrmObjects202609ObjectTypeSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdRouteHandler,
  getCrmObjects202609ObjectTypeObjectIdRouteHandler,
  getCrmObjects202609ObjectTypeRouteHandler,
  patchCrmObjects202609ObjectTypeObjectIdRouteHandler,
  postCrmObjects202609ObjectTypeBatchArchiveRouteHandler,
  postCrmObjects202609ObjectTypeBatchCreateRouteHandler,
  postCrmObjects202609ObjectTypeBatchReadRouteHandler,
  postCrmObjects202609ObjectTypeBatchUpdateRouteHandler,
  postCrmObjects202609ObjectTypeBatchUpsertRouteHandler,
  postCrmObjects202609ObjectTypeMergeRouteHandler,
  postCrmObjects202609ObjectTypeRouteHandler,
  postCrmObjects202609ObjectTypeSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(getCrmObjects202609ObjectTypeRoute, getCrmObjects202609ObjectTypeRouteHandler)
  .openapi(postCrmObjects202609ObjectTypeRoute, postCrmObjects202609ObjectTypeRouteHandler)
  .openapi(
    postCrmObjects202609ObjectTypeBatchArchiveRoute,
    postCrmObjects202609ObjectTypeBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeBatchCreateRoute,
    postCrmObjects202609ObjectTypeBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeBatchReadRoute,
    postCrmObjects202609ObjectTypeBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeBatchUpdateRoute,
    postCrmObjects202609ObjectTypeBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeBatchUpsertRoute,
    postCrmObjects202609ObjectTypeBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeMergeRoute,
    postCrmObjects202609ObjectTypeMergeRouteHandler,
  )
  .openapi(
    postCrmObjects202609ObjectTypeSearchRoute,
    postCrmObjects202609ObjectTypeSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609ObjectTypeObjectIdRoute,
    getCrmObjects202609ObjectTypeObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609ObjectTypeObjectIdRoute,
    patchCrmObjects202609ObjectTypeObjectIdRouteHandler,
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
