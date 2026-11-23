import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CartsCartIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CartsCartIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CartsCartIdRoute,
  getCrmObjects202609CartsRoute,
  patchCrmObjects202609CartsCartIdRoute,
  postCrmObjects202609CartsBatchArchiveRoute,
  postCrmObjects202609CartsBatchCreateRoute,
  postCrmObjects202609CartsBatchReadRoute,
  postCrmObjects202609CartsBatchUpdateRoute,
  postCrmObjects202609CartsBatchUpsertRoute,
  postCrmObjects202609CartsGdprDeleteRoute,
  postCrmObjects202609CartsMergeRoute,
  postCrmObjects202609CartsRoute,
  postCrmObjects202609CartsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609CartsCartIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609CartsCartIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609CartsCartIdRouteHandler,
  getCrmObjects202609CartsRouteHandler,
  patchCrmObjects202609CartsCartIdRouteHandler,
  postCrmObjects202609CartsBatchArchiveRouteHandler,
  postCrmObjects202609CartsBatchCreateRouteHandler,
  postCrmObjects202609CartsBatchReadRouteHandler,
  postCrmObjects202609CartsBatchUpdateRouteHandler,
  postCrmObjects202609CartsBatchUpsertRouteHandler,
  postCrmObjects202609CartsGdprDeleteRouteHandler,
  postCrmObjects202609CartsMergeRouteHandler,
  postCrmObjects202609CartsRouteHandler,
  postCrmObjects202609CartsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609CartsRoute, getCrmObjects202609CartsRouteHandler)
  .openapi(postCrmObjects202609CartsRoute, postCrmObjects202609CartsRouteHandler)
  .openapi(
    postCrmObjects202609CartsBatchArchiveRoute,
    postCrmObjects202609CartsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609CartsBatchCreateRoute,
    postCrmObjects202609CartsBatchCreateRouteHandler,
  )
  .openapi(postCrmObjects202609CartsBatchReadRoute, postCrmObjects202609CartsBatchReadRouteHandler)
  .openapi(
    postCrmObjects202609CartsBatchUpdateRoute,
    postCrmObjects202609CartsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609CartsBatchUpsertRoute,
    postCrmObjects202609CartsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609CartsGdprDeleteRoute,
    postCrmObjects202609CartsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609CartsMergeRoute, postCrmObjects202609CartsMergeRouteHandler)
  .openapi(postCrmObjects202609CartsSearchRoute, postCrmObjects202609CartsSearchRouteHandler)
  .openapi(getCrmObjects202609CartsCartIdRoute, getCrmObjects202609CartsCartIdRouteHandler)
  .openapi(deleteCrmObjects202609CartsCartIdRoute, deleteCrmObjects202609CartsCartIdRouteHandler)
  .openapi(patchCrmObjects202609CartsCartIdRoute, patchCrmObjects202609CartsCartIdRouteHandler)
  .openapi(
    getCrmObjects202609CartsCartIdAssociationsToObjectTypeRoute,
    getCrmObjects202609CartsCartIdAssociationsToObjectTypeRouteHandler,
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
