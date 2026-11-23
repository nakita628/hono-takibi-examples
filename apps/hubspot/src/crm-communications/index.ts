import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CommunicationsCommunicationIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CommunicationsCommunicationIdRoute,
  getCrmObjects202609CommunicationsRoute,
  patchCrmObjects202609CommunicationsCommunicationIdRoute,
  postCrmObjects202609CommunicationsBatchArchiveRoute,
  postCrmObjects202609CommunicationsBatchCreateRoute,
  postCrmObjects202609CommunicationsBatchReadRoute,
  postCrmObjects202609CommunicationsBatchUpdateRoute,
  postCrmObjects202609CommunicationsBatchUpsertRoute,
  postCrmObjects202609CommunicationsGdprDeleteRoute,
  postCrmObjects202609CommunicationsMergeRoute,
  postCrmObjects202609CommunicationsRoute,
  postCrmObjects202609CommunicationsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609CommunicationsCommunicationIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609CommunicationsCommunicationIdRouteHandler,
  getCrmObjects202609CommunicationsRouteHandler,
  patchCrmObjects202609CommunicationsCommunicationIdRouteHandler,
  postCrmObjects202609CommunicationsBatchArchiveRouteHandler,
  postCrmObjects202609CommunicationsBatchCreateRouteHandler,
  postCrmObjects202609CommunicationsBatchReadRouteHandler,
  postCrmObjects202609CommunicationsBatchUpdateRouteHandler,
  postCrmObjects202609CommunicationsBatchUpsertRouteHandler,
  postCrmObjects202609CommunicationsGdprDeleteRouteHandler,
  postCrmObjects202609CommunicationsMergeRouteHandler,
  postCrmObjects202609CommunicationsRouteHandler,
  postCrmObjects202609CommunicationsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609CommunicationsRoute, getCrmObjects202609CommunicationsRouteHandler)
  .openapi(postCrmObjects202609CommunicationsRoute, postCrmObjects202609CommunicationsRouteHandler)
  .openapi(
    postCrmObjects202609CommunicationsBatchArchiveRoute,
    postCrmObjects202609CommunicationsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommunicationsBatchCreateRoute,
    postCrmObjects202609CommunicationsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommunicationsBatchReadRoute,
    postCrmObjects202609CommunicationsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommunicationsBatchUpdateRoute,
    postCrmObjects202609CommunicationsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommunicationsBatchUpsertRoute,
    postCrmObjects202609CommunicationsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommunicationsGdprDeleteRoute,
    postCrmObjects202609CommunicationsGdprDeleteRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommunicationsMergeRoute,
    postCrmObjects202609CommunicationsMergeRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommunicationsSearchRoute,
    postCrmObjects202609CommunicationsSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609CommunicationsCommunicationIdRoute,
    getCrmObjects202609CommunicationsCommunicationIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609CommunicationsCommunicationIdRoute,
    deleteCrmObjects202609CommunicationsCommunicationIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609CommunicationsCommunicationIdRoute,
    patchCrmObjects202609CommunicationsCommunicationIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeRoute,
    getCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeRouteHandler,
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
