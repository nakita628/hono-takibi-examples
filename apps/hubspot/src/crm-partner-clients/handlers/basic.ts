import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609PartnerClientsPartnerClientIdRoute,
  getCrmObjects202609PartnerClientsPartnerClientIdAssociationsToObjectTypeRoute,
  getCrmObjects202609PartnerClientsPartnerClientIdRoute,
  getCrmObjects202609PartnerClientsRoute,
  patchCrmObjects202609PartnerClientsPartnerClientIdRoute,
  postCrmObjects202609PartnerClientsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609PartnerClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PartnerClientsPartnerClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609PartnerClientsPartnerClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609PartnerClientsPartnerClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PartnerClientsPartnerClientIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
