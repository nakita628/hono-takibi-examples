import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609TaxesTaxIdRoute,
  getCrmObjects202609TaxesRoute,
  getCrmObjects202609TaxesTaxIdAssociationsToObjectTypeRoute,
  getCrmObjects202609TaxesTaxIdRoute,
  patchCrmObjects202609TaxesTaxIdRoute,
  postCrmObjects202609TaxesBatchArchiveRoute,
  postCrmObjects202609TaxesBatchCreateRoute,
  postCrmObjects202609TaxesBatchReadRoute,
  postCrmObjects202609TaxesBatchUpdateRoute,
  postCrmObjects202609TaxesBatchUpsertRoute,
  postCrmObjects202609TaxesGdprDeleteRoute,
  postCrmObjects202609TaxesMergeRoute,
  postCrmObjects202609TaxesRoute,
  postCrmObjects202609TaxesSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609TaxesTaxIdRouteHandler,
  getCrmObjects202609TaxesRouteHandler,
  getCrmObjects202609TaxesTaxIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609TaxesTaxIdRouteHandler,
  patchCrmObjects202609TaxesTaxIdRouteHandler,
  postCrmObjects202609TaxesBatchArchiveRouteHandler,
  postCrmObjects202609TaxesBatchCreateRouteHandler,
  postCrmObjects202609TaxesBatchReadRouteHandler,
  postCrmObjects202609TaxesBatchUpdateRouteHandler,
  postCrmObjects202609TaxesBatchUpsertRouteHandler,
  postCrmObjects202609TaxesGdprDeleteRouteHandler,
  postCrmObjects202609TaxesMergeRouteHandler,
  postCrmObjects202609TaxesRouteHandler,
  postCrmObjects202609TaxesSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609TaxesRoute, getCrmObjects202609TaxesRouteHandler)
  .openapi(postCrmObjects202609TaxesRoute, postCrmObjects202609TaxesRouteHandler)
  .openapi(
    postCrmObjects202609TaxesBatchArchiveRoute,
    postCrmObjects202609TaxesBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609TaxesBatchCreateRoute,
    postCrmObjects202609TaxesBatchCreateRouteHandler,
  )
  .openapi(postCrmObjects202609TaxesBatchReadRoute, postCrmObjects202609TaxesBatchReadRouteHandler)
  .openapi(
    postCrmObjects202609TaxesBatchUpdateRoute,
    postCrmObjects202609TaxesBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609TaxesBatchUpsertRoute,
    postCrmObjects202609TaxesBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609TaxesGdprDeleteRoute,
    postCrmObjects202609TaxesGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609TaxesMergeRoute, postCrmObjects202609TaxesMergeRouteHandler)
  .openapi(postCrmObjects202609TaxesSearchRoute, postCrmObjects202609TaxesSearchRouteHandler)
  .openapi(getCrmObjects202609TaxesTaxIdRoute, getCrmObjects202609TaxesTaxIdRouteHandler)
  .openapi(deleteCrmObjects202609TaxesTaxIdRoute, deleteCrmObjects202609TaxesTaxIdRouteHandler)
  .openapi(patchCrmObjects202609TaxesTaxIdRoute, patchCrmObjects202609TaxesTaxIdRouteHandler)
  .openapi(
    getCrmObjects202609TaxesTaxIdAssociationsToObjectTypeRoute,
    getCrmObjects202609TaxesTaxIdAssociationsToObjectTypeRouteHandler,
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
