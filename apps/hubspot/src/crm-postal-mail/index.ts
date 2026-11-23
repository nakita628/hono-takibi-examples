import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609PostalMailPostalMailIdRoute,
  getCrmObjects202609PostalMailPostalMailIdAssociationsToObjectTypeRoute,
  getCrmObjects202609PostalMailPostalMailIdRoute,
  getCrmObjects202609PostalMailRoute,
  patchCrmObjects202609PostalMailPostalMailIdRoute,
  postCrmObjects202609PostalMailBatchArchiveRoute,
  postCrmObjects202609PostalMailBatchCreateRoute,
  postCrmObjects202609PostalMailBatchReadRoute,
  postCrmObjects202609PostalMailBatchUpdateRoute,
  postCrmObjects202609PostalMailBatchUpsertRoute,
  postCrmObjects202609PostalMailGdprDeleteRoute,
  postCrmObjects202609PostalMailMergeRoute,
  postCrmObjects202609PostalMailRoute,
  postCrmObjects202609PostalMailSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609PostalMailPostalMailIdRouteHandler,
  getCrmObjects202609PostalMailPostalMailIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609PostalMailPostalMailIdRouteHandler,
  getCrmObjects202609PostalMailRouteHandler,
  patchCrmObjects202609PostalMailPostalMailIdRouteHandler,
  postCrmObjects202609PostalMailBatchArchiveRouteHandler,
  postCrmObjects202609PostalMailBatchCreateRouteHandler,
  postCrmObjects202609PostalMailBatchReadRouteHandler,
  postCrmObjects202609PostalMailBatchUpdateRouteHandler,
  postCrmObjects202609PostalMailBatchUpsertRouteHandler,
  postCrmObjects202609PostalMailGdprDeleteRouteHandler,
  postCrmObjects202609PostalMailMergeRouteHandler,
  postCrmObjects202609PostalMailRouteHandler,
  postCrmObjects202609PostalMailSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609PostalMailRoute, getCrmObjects202609PostalMailRouteHandler)
  .openapi(postCrmObjects202609PostalMailRoute, postCrmObjects202609PostalMailRouteHandler)
  .openapi(
    postCrmObjects202609PostalMailBatchArchiveRoute,
    postCrmObjects202609PostalMailBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609PostalMailBatchCreateRoute,
    postCrmObjects202609PostalMailBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609PostalMailBatchReadRoute,
    postCrmObjects202609PostalMailBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609PostalMailBatchUpdateRoute,
    postCrmObjects202609PostalMailBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609PostalMailBatchUpsertRoute,
    postCrmObjects202609PostalMailBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609PostalMailGdprDeleteRoute,
    postCrmObjects202609PostalMailGdprDeleteRouteHandler,
  )
  .openapi(
    postCrmObjects202609PostalMailMergeRoute,
    postCrmObjects202609PostalMailMergeRouteHandler,
  )
  .openapi(
    postCrmObjects202609PostalMailSearchRoute,
    postCrmObjects202609PostalMailSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609PostalMailPostalMailIdRoute,
    getCrmObjects202609PostalMailPostalMailIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609PostalMailPostalMailIdRoute,
    deleteCrmObjects202609PostalMailPostalMailIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609PostalMailPostalMailIdRoute,
    patchCrmObjects202609PostalMailPostalMailIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609PostalMailPostalMailIdAssociationsToObjectTypeRoute,
    getCrmObjects202609PostalMailPostalMailIdAssociationsToObjectTypeRouteHandler,
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
