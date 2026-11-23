import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609PartnerClientsPartnerClientIdRoute,
  getCrmObjects202609PartnerClientsPartnerClientIdAssociationsToObjectTypeRoute,
  getCrmObjects202609PartnerClientsPartnerClientIdRoute,
  getCrmObjects202609PartnerClientsRoute,
  patchCrmObjects202609PartnerClientsPartnerClientIdRoute,
  postCrmObjects202609PartnerClientsBatchArchiveRoute,
  postCrmObjects202609PartnerClientsBatchCreateRoute,
  postCrmObjects202609PartnerClientsBatchReadRoute,
  postCrmObjects202609PartnerClientsBatchUpdateRoute,
  postCrmObjects202609PartnerClientsBatchUpsertRoute,
  postCrmObjects202609PartnerClientsGdprDeleteRoute,
  postCrmObjects202609PartnerClientsMergeRoute,
  postCrmObjects202609PartnerClientsRoute,
  postCrmObjects202609PartnerClientsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609PartnerClientsPartnerClientIdRouteHandler,
  getCrmObjects202609PartnerClientsPartnerClientIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609PartnerClientsPartnerClientIdRouteHandler,
  getCrmObjects202609PartnerClientsRouteHandler,
  patchCrmObjects202609PartnerClientsPartnerClientIdRouteHandler,
  postCrmObjects202609PartnerClientsBatchArchiveRouteHandler,
  postCrmObjects202609PartnerClientsBatchCreateRouteHandler,
  postCrmObjects202609PartnerClientsBatchReadRouteHandler,
  postCrmObjects202609PartnerClientsBatchUpdateRouteHandler,
  postCrmObjects202609PartnerClientsBatchUpsertRouteHandler,
  postCrmObjects202609PartnerClientsGdprDeleteRouteHandler,
  postCrmObjects202609PartnerClientsMergeRouteHandler,
  postCrmObjects202609PartnerClientsRouteHandler,
  postCrmObjects202609PartnerClientsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609PartnerClientsRoute, getCrmObjects202609PartnerClientsRouteHandler)
  .openapi(postCrmObjects202609PartnerClientsRoute, postCrmObjects202609PartnerClientsRouteHandler)
  .openapi(
    postCrmObjects202609PartnerClientsBatchArchiveRoute,
    postCrmObjects202609PartnerClientsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerClientsBatchCreateRoute,
    postCrmObjects202609PartnerClientsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerClientsBatchReadRoute,
    postCrmObjects202609PartnerClientsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerClientsBatchUpdateRoute,
    postCrmObjects202609PartnerClientsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerClientsBatchUpsertRoute,
    postCrmObjects202609PartnerClientsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerClientsGdprDeleteRoute,
    postCrmObjects202609PartnerClientsGdprDeleteRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerClientsMergeRoute,
    postCrmObjects202609PartnerClientsMergeRouteHandler,
  )
  .openapi(
    postCrmObjects202609PartnerClientsSearchRoute,
    postCrmObjects202609PartnerClientsSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609PartnerClientsPartnerClientIdRoute,
    getCrmObjects202609PartnerClientsPartnerClientIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609PartnerClientsPartnerClientIdRoute,
    deleteCrmObjects202609PartnerClientsPartnerClientIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609PartnerClientsPartnerClientIdRoute,
    patchCrmObjects202609PartnerClientsPartnerClientIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609PartnerClientsPartnerClientIdAssociationsToObjectTypeRoute,
    getCrmObjects202609PartnerClientsPartnerClientIdAssociationsToObjectTypeRouteHandler,
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
