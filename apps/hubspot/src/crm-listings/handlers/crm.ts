import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects2026090420ListingIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects2026090420ListingIdRoute,
  getCrmObjects2026090420Route,
  getCrmObjects202609ListingsListingIdAssociationsToObjectTypeRoute,
  patchCrmObjects2026090420ListingIdRoute,
  postCrmObjects2026090420BatchArchiveRoute,
  postCrmObjects2026090420BatchCreateRoute,
  postCrmObjects2026090420BatchReadRoute,
  postCrmObjects2026090420BatchUpdateRoute,
  postCrmObjects2026090420BatchUpsertRoute,
  postCrmObjects2026090420Route,
  postCrmObjects2026090420SearchRoute,
  postCrmObjects202609ListingsGdprDeleteRoute,
  postCrmObjects202609ListingsMergeRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects2026090420Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420BatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420BatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420BatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420BatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420BatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090420SearchRoute, (c) => {
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
  .openapi(postCrmObjects202609ListingsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ListingsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ListingsListingIdAssociationsToObjectTypeRoute, (c) => {
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
