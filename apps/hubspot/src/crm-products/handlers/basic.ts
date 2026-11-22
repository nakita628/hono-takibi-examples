import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609ProductsProductIdRoute,
  getCrmObjects202609ProductsProductIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ProductsProductIdRoute,
  getCrmObjects202609ProductsRoute,
  patchCrmObjects202609ProductsProductIdRoute,
  postCrmObjects202609ProductsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609ProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ProductsProductIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
