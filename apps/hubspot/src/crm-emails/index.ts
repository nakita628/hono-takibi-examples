import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609EmailsEmailIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609EmailsEmailIdAssociationsToObjectTypeRoute,
  getCrmObjects202609EmailsEmailIdRoute,
  getCrmObjects202609EmailsRoute,
  patchCrmObjects202609EmailsEmailIdRoute,
  postCrmObjects202609EmailsBatchArchiveRoute,
  postCrmObjects202609EmailsBatchCreateRoute,
  postCrmObjects202609EmailsBatchReadRoute,
  postCrmObjects202609EmailsBatchUpdateRoute,
  postCrmObjects202609EmailsBatchUpsertRoute,
  postCrmObjects202609EmailsGdprDeleteRoute,
  postCrmObjects202609EmailsMergeRoute,
  postCrmObjects202609EmailsRoute,
  postCrmObjects202609EmailsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609EmailsEmailIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609EmailsEmailIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609EmailsEmailIdRouteHandler,
  getCrmObjects202609EmailsRouteHandler,
  patchCrmObjects202609EmailsEmailIdRouteHandler,
  postCrmObjects202609EmailsBatchArchiveRouteHandler,
  postCrmObjects202609EmailsBatchCreateRouteHandler,
  postCrmObjects202609EmailsBatchReadRouteHandler,
  postCrmObjects202609EmailsBatchUpdateRouteHandler,
  postCrmObjects202609EmailsBatchUpsertRouteHandler,
  postCrmObjects202609EmailsGdprDeleteRouteHandler,
  postCrmObjects202609EmailsMergeRouteHandler,
  postCrmObjects202609EmailsRouteHandler,
  postCrmObjects202609EmailsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609EmailsRoute, getCrmObjects202609EmailsRouteHandler)
  .openapi(postCrmObjects202609EmailsRoute, postCrmObjects202609EmailsRouteHandler)
  .openapi(
    postCrmObjects202609EmailsBatchArchiveRoute,
    postCrmObjects202609EmailsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609EmailsBatchCreateRoute,
    postCrmObjects202609EmailsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609EmailsBatchReadRoute,
    postCrmObjects202609EmailsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609EmailsBatchUpdateRoute,
    postCrmObjects202609EmailsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609EmailsBatchUpsertRoute,
    postCrmObjects202609EmailsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609EmailsGdprDeleteRoute,
    postCrmObjects202609EmailsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609EmailsMergeRoute, postCrmObjects202609EmailsMergeRouteHandler)
  .openapi(postCrmObjects202609EmailsSearchRoute, postCrmObjects202609EmailsSearchRouteHandler)
  .openapi(getCrmObjects202609EmailsEmailIdRoute, getCrmObjects202609EmailsEmailIdRouteHandler)
  .openapi(
    deleteCrmObjects202609EmailsEmailIdRoute,
    deleteCrmObjects202609EmailsEmailIdRouteHandler,
  )
  .openapi(patchCrmObjects202609EmailsEmailIdRoute, patchCrmObjects202609EmailsEmailIdRouteHandler)
  .openapi(
    getCrmObjects202609EmailsEmailIdAssociationsToObjectTypeRoute,
    getCrmObjects202609EmailsEmailIdAssociationsToObjectTypeRouteHandler,
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
