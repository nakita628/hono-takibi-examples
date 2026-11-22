import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609PartnerServicesPartnerServiceIdRoute,
  getCrmObjects202609PartnerServicesPartnerServiceIdAssociationsToObjectTypeRoute,
  getCrmObjects202609PartnerServicesPartnerServiceIdRoute,
  getCrmObjects202609PartnerServicesRoute,
  patchCrmObjects202609PartnerServicesPartnerServiceIdRoute,
  postCrmObjects202609PartnerServicesRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609PartnerServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PartnerServicesPartnerServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609PartnerServicesPartnerServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609PartnerServicesPartnerServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCrmObjects202609PartnerServicesPartnerServiceIdAssociationsToObjectTypeRoute,
    (c) => {},
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
