import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609LeadsLeadsIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeRoute,
  getCrmObjects202609LeadsLeadsIdRoute,
  getCrmObjects202609LeadsRoute,
  patchCrmObjects202609LeadsLeadsIdRoute,
  postCrmObjects202609LeadsBatchArchiveRoute,
  postCrmObjects202609LeadsBatchCreateRoute,
  postCrmObjects202609LeadsBatchReadRoute,
  postCrmObjects202609LeadsBatchUpdateRoute,
  postCrmObjects202609LeadsBatchUpsertRoute,
  postCrmObjects202609LeadsGdprDeleteRoute,
  postCrmObjects202609LeadsMergeRoute,
  postCrmObjects202609LeadsRoute,
  postCrmObjects202609LeadsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609LeadsLeadsIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609LeadsLeadsIdRouteHandler,
  getCrmObjects202609LeadsRouteHandler,
  patchCrmObjects202609LeadsLeadsIdRouteHandler,
  postCrmObjects202609LeadsBatchArchiveRouteHandler,
  postCrmObjects202609LeadsBatchCreateRouteHandler,
  postCrmObjects202609LeadsBatchReadRouteHandler,
  postCrmObjects202609LeadsBatchUpdateRouteHandler,
  postCrmObjects202609LeadsBatchUpsertRouteHandler,
  postCrmObjects202609LeadsGdprDeleteRouteHandler,
  postCrmObjects202609LeadsMergeRouteHandler,
  postCrmObjects202609LeadsRouteHandler,
  postCrmObjects202609LeadsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609LeadsRoute, getCrmObjects202609LeadsRouteHandler)
  .openapi(postCrmObjects202609LeadsRoute, postCrmObjects202609LeadsRouteHandler)
  .openapi(
    postCrmObjects202609LeadsBatchArchiveRoute,
    postCrmObjects202609LeadsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609LeadsBatchCreateRoute,
    postCrmObjects202609LeadsBatchCreateRouteHandler,
  )
  .openapi(postCrmObjects202609LeadsBatchReadRoute, postCrmObjects202609LeadsBatchReadRouteHandler)
  .openapi(
    postCrmObjects202609LeadsBatchUpdateRoute,
    postCrmObjects202609LeadsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609LeadsBatchUpsertRoute,
    postCrmObjects202609LeadsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609LeadsGdprDeleteRoute,
    postCrmObjects202609LeadsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609LeadsMergeRoute, postCrmObjects202609LeadsMergeRouteHandler)
  .openapi(postCrmObjects202609LeadsSearchRoute, postCrmObjects202609LeadsSearchRouteHandler)
  .openapi(getCrmObjects202609LeadsLeadsIdRoute, getCrmObjects202609LeadsLeadsIdRouteHandler)
  .openapi(deleteCrmObjects202609LeadsLeadsIdRoute, deleteCrmObjects202609LeadsLeadsIdRouteHandler)
  .openapi(patchCrmObjects202609LeadsLeadsIdRoute, patchCrmObjects202609LeadsLeadsIdRouteHandler)
  .openapi(
    getCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeRoute,
    getCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeRouteHandler,
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
