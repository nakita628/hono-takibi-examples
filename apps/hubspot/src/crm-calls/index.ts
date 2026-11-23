import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CallsCallIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CallsCallIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CallsCallIdRoute,
  getCrmObjects202609CallsRoute,
  patchCrmObjects202609CallsCallIdRoute,
  postCrmObjects202609CallsBatchArchiveRoute,
  postCrmObjects202609CallsBatchCreateRoute,
  postCrmObjects202609CallsBatchReadRoute,
  postCrmObjects202609CallsBatchUpdateRoute,
  postCrmObjects202609CallsBatchUpsertRoute,
  postCrmObjects202609CallsGdprDeleteRoute,
  postCrmObjects202609CallsMergeRoute,
  postCrmObjects202609CallsRoute,
  postCrmObjects202609CallsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609CallsCallIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609CallsCallIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609CallsCallIdRouteHandler,
  getCrmObjects202609CallsRouteHandler,
  patchCrmObjects202609CallsCallIdRouteHandler,
  postCrmObjects202609CallsBatchArchiveRouteHandler,
  postCrmObjects202609CallsBatchCreateRouteHandler,
  postCrmObjects202609CallsBatchReadRouteHandler,
  postCrmObjects202609CallsBatchUpdateRouteHandler,
  postCrmObjects202609CallsBatchUpsertRouteHandler,
  postCrmObjects202609CallsGdprDeleteRouteHandler,
  postCrmObjects202609CallsMergeRouteHandler,
  postCrmObjects202609CallsRouteHandler,
  postCrmObjects202609CallsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609CallsRoute, getCrmObjects202609CallsRouteHandler)
  .openapi(postCrmObjects202609CallsRoute, postCrmObjects202609CallsRouteHandler)
  .openapi(
    postCrmObjects202609CallsBatchArchiveRoute,
    postCrmObjects202609CallsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609CallsBatchCreateRoute,
    postCrmObjects202609CallsBatchCreateRouteHandler,
  )
  .openapi(postCrmObjects202609CallsBatchReadRoute, postCrmObjects202609CallsBatchReadRouteHandler)
  .openapi(
    postCrmObjects202609CallsBatchUpdateRoute,
    postCrmObjects202609CallsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609CallsBatchUpsertRoute,
    postCrmObjects202609CallsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609CallsGdprDeleteRoute,
    postCrmObjects202609CallsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609CallsMergeRoute, postCrmObjects202609CallsMergeRouteHandler)
  .openapi(postCrmObjects202609CallsSearchRoute, postCrmObjects202609CallsSearchRouteHandler)
  .openapi(getCrmObjects202609CallsCallIdRoute, getCrmObjects202609CallsCallIdRouteHandler)
  .openapi(deleteCrmObjects202609CallsCallIdRoute, deleteCrmObjects202609CallsCallIdRouteHandler)
  .openapi(patchCrmObjects202609CallsCallIdRoute, patchCrmObjects202609CallsCallIdRouteHandler)
  .openapi(
    getCrmObjects202609CallsCallIdAssociationsToObjectTypeRoute,
    getCrmObjects202609CallsCallIdAssociationsToObjectTypeRouteHandler,
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
