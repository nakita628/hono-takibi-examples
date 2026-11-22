import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CommunicationsCommunicationIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CommunicationsCommunicationIdRoute,
  getCrmObjects202609CommunicationsRoute,
  patchCrmObjects202609CommunicationsCommunicationIdRoute,
  postCrmObjects202609CommunicationsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609CommunicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CommunicationsCommunicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609CommunicationsCommunicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609CommunicationsCommunicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
