import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609TicketsTicketIdRoute,
  getCrmObjects202609TicketsRoute,
  getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeRoute,
  getCrmObjects202609TicketsTicketIdRoute,
  patchCrmObjects202609TicketsTicketIdRoute,
  postCrmObjects202609TicketsBatchArchiveRoute,
  postCrmObjects202609TicketsBatchCreateRoute,
  postCrmObjects202609TicketsBatchReadRoute,
  postCrmObjects202609TicketsBatchUpdateRoute,
  postCrmObjects202609TicketsBatchUpsertRoute,
  postCrmObjects202609TicketsGdprDeleteRoute,
  postCrmObjects202609TicketsMergeRoute,
  postCrmObjects202609TicketsRoute,
  postCrmObjects202609TicketsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  deleteCrmObjects202609TicketsTicketIdRouteHandler,
  getCrmObjects202609TicketsRouteHandler,
  getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609TicketsTicketIdRouteHandler,
  patchCrmObjects202609TicketsTicketIdRouteHandler,
  postCrmObjects202609TicketsBatchArchiveRouteHandler,
  postCrmObjects202609TicketsBatchCreateRouteHandler,
  postCrmObjects202609TicketsBatchReadRouteHandler,
  postCrmObjects202609TicketsBatchUpdateRouteHandler,
  postCrmObjects202609TicketsBatchUpsertRouteHandler,
  postCrmObjects202609TicketsGdprDeleteRouteHandler,
  postCrmObjects202609TicketsMergeRouteHandler,
  postCrmObjects202609TicketsRouteHandler,
  postCrmObjects202609TicketsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609TicketsRoute, getCrmObjects202609TicketsRouteHandler)
  .openapi(postCrmObjects202609TicketsRoute, postCrmObjects202609TicketsRouteHandler)
  .openapi(
    postCrmObjects202609TicketsBatchArchiveRoute,
    postCrmObjects202609TicketsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609TicketsBatchCreateRoute,
    postCrmObjects202609TicketsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609TicketsBatchReadRoute,
    postCrmObjects202609TicketsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609TicketsBatchUpdateRoute,
    postCrmObjects202609TicketsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609TicketsBatchUpsertRoute,
    postCrmObjects202609TicketsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609TicketsGdprDeleteRoute,
    postCrmObjects202609TicketsGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609TicketsMergeRoute, postCrmObjects202609TicketsMergeRouteHandler)
  .openapi(postCrmObjects202609TicketsSearchRoute, postCrmObjects202609TicketsSearchRouteHandler)
  .openapi(getCrmObjects202609TicketsTicketIdRoute, getCrmObjects202609TicketsTicketIdRouteHandler)
  .openapi(
    deleteCrmObjects202609TicketsTicketIdRoute,
    deleteCrmObjects202609TicketsTicketIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609TicketsTicketIdRoute,
    patchCrmObjects202609TicketsTicketIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeRoute,
    getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeRouteHandler,
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
