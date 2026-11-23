import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609PartnerServicesPartnerServiceIdRoute,
  getCrmObjects202609PartnerServicesPartnerServiceIdAssociationsToObjectTypeRoute,
  getCrmObjects202609PartnerServicesPartnerServiceIdRoute,
  getCrmObjects202609PartnerServicesRoute,
  patchCrmObjects202609PartnerServicesPartnerServiceIdRoute,
  postCrmObjects202609PartnerServicesBatchArchiveRoute,
  postCrmObjects202609PartnerServicesBatchCreateRoute,
  postCrmObjects202609PartnerServicesBatchReadRoute,
  postCrmObjects202609PartnerServicesBatchUpdateRoute,
  postCrmObjects202609PartnerServicesBatchUpsertRoute,
  postCrmObjects202609PartnerServicesGdprDeleteRoute,
  postCrmObjects202609PartnerServicesMergeRoute,
  postCrmObjects202609PartnerServicesRoute,
  postCrmObjects202609PartnerServicesSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609PartnerServicesPartnerServiceIdRouteHandler,
  getCrmObjects202609PartnerServicesPartnerServiceIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609PartnerServicesPartnerServiceIdRouteHandler,
  getCrmObjects202609PartnerServicesRouteHandler,
  patchCrmObjects202609PartnerServicesPartnerServiceIdRouteHandler,
  postCrmObjects202609PartnerServicesBatchArchiveRouteHandler,
  postCrmObjects202609PartnerServicesBatchCreateRouteHandler,
  postCrmObjects202609PartnerServicesBatchReadRouteHandler,
  postCrmObjects202609PartnerServicesBatchUpdateRouteHandler,
  postCrmObjects202609PartnerServicesBatchUpsertRouteHandler,
  postCrmObjects202609PartnerServicesGdprDeleteRouteHandler,
  postCrmObjects202609PartnerServicesMergeRouteHandler,
  postCrmObjects202609PartnerServicesRouteHandler,
  postCrmObjects202609PartnerServicesSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609PartnerServicesRoute, getCrmObjects202609PartnerServicesRouteHandler)
  .openapi(
    postCrmObjects202609PartnerServicesRoute,
    postCrmObjects202609PartnerServicesRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerServicesBatchArchiveRoute,
    postCrmObjects202609PartnerServicesBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerServicesBatchCreateRoute,
    postCrmObjects202609PartnerServicesBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerServicesBatchReadRoute,
    postCrmObjects202609PartnerServicesBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerServicesBatchUpdateRoute,
    postCrmObjects202609PartnerServicesBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerServicesBatchUpsertRoute,
    postCrmObjects202609PartnerServicesBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerServicesGdprDeleteRoute,
    postCrmObjects202609PartnerServicesGdprDeleteRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerServicesMergeRoute,
    postCrmObjects202609PartnerServicesMergeRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerServicesSearchRoute,
    postCrmObjects202609PartnerServicesSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609PartnerServicesPartnerServiceIdRoute,
    getCrmObjects202609PartnerServicesPartnerServiceIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609PartnerServicesPartnerServiceIdRoute,
    deleteCrmObjects202609PartnerServicesPartnerServiceIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609PartnerServicesPartnerServiceIdRoute,
    patchCrmObjects202609PartnerServicesPartnerServiceIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609PartnerServicesPartnerServiceIdAssociationsToObjectTypeRoute,
    getCrmObjects202609PartnerServicesPartnerServiceIdAssociationsToObjectTypeRouteHandler,
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
