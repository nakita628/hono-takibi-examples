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
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609TicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609TicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609TicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609TicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
