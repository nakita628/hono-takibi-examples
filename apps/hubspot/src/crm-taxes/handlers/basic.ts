import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609TaxesTaxIdRoute,
  getCrmObjects202609TaxesRoute,
  getCrmObjects202609TaxesTaxIdAssociationsToObjectTypeRoute,
  getCrmObjects202609TaxesTaxIdRoute,
  patchCrmObjects202609TaxesTaxIdRoute,
  postCrmObjects202609TaxesRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609TaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609TaxesTaxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609TaxesTaxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609TaxesTaxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609TaxesTaxIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
