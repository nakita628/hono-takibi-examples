import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609PostalMailPostalMailIdRoute,
  getCrmObjects202609PostalMailPostalMailIdAssociationsToObjectTypeRoute,
  getCrmObjects202609PostalMailPostalMailIdRoute,
  getCrmObjects202609PostalMailRoute,
  patchCrmObjects202609PostalMailPostalMailIdRoute,
  postCrmObjects202609PostalMailRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609PostalMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PostalMailPostalMailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609PostalMailPostalMailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609PostalMailPostalMailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PostalMailPostalMailIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
