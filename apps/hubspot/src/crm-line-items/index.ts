import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609LineItemsLineItemIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609LineItemsLineItemIdAssociationsToObjectTypeRoute,
  getCrmObjects202609LineItemsLineItemIdRoute,
  getCrmObjects202609LineItemsRoute,
  patchCrmObjects202609LineItemsLineItemIdRoute,
  postCrmObjects202609LineItemsBatchArchiveRoute,
  postCrmObjects202609LineItemsBatchCreateRoute,
  postCrmObjects202609LineItemsBatchReadRoute,
  postCrmObjects202609LineItemsBatchUpdateRoute,
  postCrmObjects202609LineItemsBatchUpsertRoute,
  postCrmObjects202609LineItemsGdprDeleteRoute,
  postCrmObjects202609LineItemsMergeRoute,
  postCrmObjects202609LineItemsRoute,
  postCrmObjects202609LineItemsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609LineItemsLineItemIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609LineItemsLineItemIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609LineItemsLineItemIdRouteHandler,
  getCrmObjects202609LineItemsRouteHandler,
  patchCrmObjects202609LineItemsLineItemIdRouteHandler,
  postCrmObjects202609LineItemsBatchArchiveRouteHandler,
  postCrmObjects202609LineItemsBatchCreateRouteHandler,
  postCrmObjects202609LineItemsBatchReadRouteHandler,
  postCrmObjects202609LineItemsBatchUpdateRouteHandler,
  postCrmObjects202609LineItemsBatchUpsertRouteHandler,
  postCrmObjects202609LineItemsGdprDeleteRouteHandler,
  postCrmObjects202609LineItemsMergeRouteHandler,
  postCrmObjects202609LineItemsRouteHandler,
  postCrmObjects202609LineItemsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609LineItemsRoute, getCrmObjects202609LineItemsRouteHandler)
  .openapi(postCrmObjects202609LineItemsRoute, postCrmObjects202609LineItemsRouteHandler)
  .openapi(
    postCrmObjects202609LineItemsBatchArchiveRoute,
    postCrmObjects202609LineItemsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609LineItemsBatchCreateRoute,
    postCrmObjects202609LineItemsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609LineItemsBatchReadRoute,
    postCrmObjects202609LineItemsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609LineItemsBatchUpdateRoute,
    postCrmObjects202609LineItemsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609LineItemsBatchUpsertRoute,
    postCrmObjects202609LineItemsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609LineItemsGdprDeleteRoute,
    postCrmObjects202609LineItemsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609LineItemsMergeRoute, postCrmObjects202609LineItemsMergeRouteHandler)
  .openapi(
    postCrmObjects202609LineItemsSearchRoute,
    postCrmObjects202609LineItemsSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609LineItemsLineItemIdRoute,
    getCrmObjects202609LineItemsLineItemIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609LineItemsLineItemIdRoute,
    deleteCrmObjects202609LineItemsLineItemIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609LineItemsLineItemIdRoute,
    patchCrmObjects202609LineItemsLineItemIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609LineItemsLineItemIdAssociationsToObjectTypeRoute,
    getCrmObjects202609LineItemsLineItemIdAssociationsToObjectTypeRouteHandler,
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
