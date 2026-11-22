import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects2026090420ListingIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects2026090420ListingIdRoute,
  getCrmObjects2026090420Route,
  getCrmObjects202609ListingsListingIdAssociationsToObjectTypeRoute,
  patchCrmObjects2026090420ListingIdRoute,
  postCrmObjects2026090420Route,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects2026090420Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects2026090420ListingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects2026090420ListingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects2026090420ListingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ListingsListingIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
