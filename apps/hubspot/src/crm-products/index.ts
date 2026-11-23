import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609ProductsProductIdRoute,
  getCrmObjects202609ProductsProductIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ProductsProductIdRoute,
  getCrmObjects202609ProductsRoute,
  patchCrmObjects202609ProductsProductIdRoute,
  postCrmObjects202609ProductsBatchArchiveRoute,
  postCrmObjects202609ProductsBatchCreateRoute,
  postCrmObjects202609ProductsBatchReadRoute,
  postCrmObjects202609ProductsBatchUpdateRoute,
  postCrmObjects202609ProductsBatchUpsertRoute,
  postCrmObjects202609ProductsGdprDeleteRoute,
  postCrmObjects202609ProductsMergeRoute,
  postCrmObjects202609ProductsRoute,
  postCrmObjects202609ProductsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609ProductsProductIdRouteHandler,
  getCrmObjects202609ProductsProductIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609ProductsProductIdRouteHandler,
  getCrmObjects202609ProductsRouteHandler,
  patchCrmObjects202609ProductsProductIdRouteHandler,
  postCrmObjects202609ProductsBatchArchiveRouteHandler,
  postCrmObjects202609ProductsBatchCreateRouteHandler,
  postCrmObjects202609ProductsBatchReadRouteHandler,
  postCrmObjects202609ProductsBatchUpdateRouteHandler,
  postCrmObjects202609ProductsBatchUpsertRouteHandler,
  postCrmObjects202609ProductsGdprDeleteRouteHandler,
  postCrmObjects202609ProductsMergeRouteHandler,
  postCrmObjects202609ProductsRouteHandler,
  postCrmObjects202609ProductsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609ProductsRoute, getCrmObjects202609ProductsRouteHandler)
  .openapi(postCrmObjects202609ProductsRoute, postCrmObjects202609ProductsRouteHandler)
  .openapi(
    postCrmObjects202609ProductsBatchArchiveRoute,
    postCrmObjects202609ProductsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609ProductsBatchCreateRoute,
    postCrmObjects202609ProductsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ProductsBatchReadRoute,
    postCrmObjects202609ProductsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609ProductsBatchUpdateRoute,
    postCrmObjects202609ProductsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609ProductsBatchUpsertRoute,
    postCrmObjects202609ProductsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609ProductsGdprDeleteRoute,
    postCrmObjects202609ProductsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609ProductsMergeRoute, postCrmObjects202609ProductsMergeRouteHandler)
  .openapi(postCrmObjects202609ProductsSearchRoute, postCrmObjects202609ProductsSearchRouteHandler)
  .openapi(
    getCrmObjects202609ProductsProductIdRoute,
    getCrmObjects202609ProductsProductIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ProductsProductIdRoute,
    deleteCrmObjects202609ProductsProductIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609ProductsProductIdRoute,
    patchCrmObjects202609ProductsProductIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609ProductsProductIdAssociationsToObjectTypeRoute,
    getCrmObjects202609ProductsProductIdAssociationsToObjectTypeRouteHandler,
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
