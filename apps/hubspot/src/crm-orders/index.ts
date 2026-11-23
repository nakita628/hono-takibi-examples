import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609OrdersOrderIdRoute,
  getCrmObjects202609OrdersOrderIdAssociationsToObjectTypeRoute,
  getCrmObjects202609OrdersOrderIdRoute,
  getCrmObjects202609OrdersRoute,
  patchCrmObjects202609OrdersOrderIdRoute,
  postCrmObjects202609OrdersBatchArchiveRoute,
  postCrmObjects202609OrdersBatchCreateRoute,
  postCrmObjects202609OrdersBatchReadRoute,
  postCrmObjects202609OrdersBatchUpdateRoute,
  postCrmObjects202609OrdersBatchUpsertRoute,
  postCrmObjects202609OrdersGdprDeleteRoute,
  postCrmObjects202609OrdersMergeRoute,
  postCrmObjects202609OrdersRoute,
  postCrmObjects202609OrdersSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609OrdersOrderIdRouteHandler,
  getCrmObjects202609OrdersOrderIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609OrdersOrderIdRouteHandler,
  getCrmObjects202609OrdersRouteHandler,
  patchCrmObjects202609OrdersOrderIdRouteHandler,
  postCrmObjects202609OrdersBatchArchiveRouteHandler,
  postCrmObjects202609OrdersBatchCreateRouteHandler,
  postCrmObjects202609OrdersBatchReadRouteHandler,
  postCrmObjects202609OrdersBatchUpdateRouteHandler,
  postCrmObjects202609OrdersBatchUpsertRouteHandler,
  postCrmObjects202609OrdersGdprDeleteRouteHandler,
  postCrmObjects202609OrdersMergeRouteHandler,
  postCrmObjects202609OrdersRouteHandler,
  postCrmObjects202609OrdersSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609OrdersRoute, getCrmObjects202609OrdersRouteHandler)
  .openapi(postCrmObjects202609OrdersRoute, postCrmObjects202609OrdersRouteHandler)
  .openapi(
    postCrmObjects202609OrdersBatchArchiveRoute,
    postCrmObjects202609OrdersBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609OrdersBatchCreateRoute,
    postCrmObjects202609OrdersBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609OrdersBatchReadRoute,
    postCrmObjects202609OrdersBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609OrdersBatchUpdateRoute,
    postCrmObjects202609OrdersBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609OrdersBatchUpsertRoute,
    postCrmObjects202609OrdersBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609OrdersGdprDeleteRoute,
    postCrmObjects202609OrdersGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609OrdersMergeRoute, postCrmObjects202609OrdersMergeRouteHandler)
  .openapi(postCrmObjects202609OrdersSearchRoute, postCrmObjects202609OrdersSearchRouteHandler)
  .openapi(getCrmObjects202609OrdersOrderIdRoute, getCrmObjects202609OrdersOrderIdRouteHandler)
  .openapi(
    deleteCrmObjects202609OrdersOrderIdRoute,
    deleteCrmObjects202609OrdersOrderIdRouteHandler,
  )
  .openapi(patchCrmObjects202609OrdersOrderIdRoute, patchCrmObjects202609OrdersOrderIdRouteHandler)
  .openapi(
    getCrmObjects202609OrdersOrderIdAssociationsToObjectTypeRoute,
    getCrmObjects202609OrdersOrderIdAssociationsToObjectTypeRouteHandler,
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
