import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609TicketsTicketIdRoute,
  getCrmObjects202609TicketsRoute,
  getCrmObjects202609TicketsTicketIdAssociationsToObjectTypeRoute,
  getCrmObjects202609TicketsTicketIdRoute,
  patchCrmObjects202609TicketsTicketIdRoute,
  postCrmObjects202609TicketsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609TicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsRoute, (c) => {
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
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
