import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CartsCartIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CartsCartIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CartsCartIdRoute,
  getCrmObjects202609CartsRoute,
  patchCrmObjects202609CartsCartIdRoute,
  postCrmObjects202609CartsBatchArchiveRoute,
  postCrmObjects202609CartsBatchCreateRoute,
  postCrmObjects202609CartsBatchReadRoute,
  postCrmObjects202609CartsBatchUpdateRoute,
  postCrmObjects202609CartsBatchUpsertRoute,
  postCrmObjects202609CartsGdprDeleteRoute,
  postCrmObjects202609CartsMergeRoute,
  postCrmObjects202609CartsRoute,
  postCrmObjects202609CartsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609CartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609CartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609CartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CartsCartIdAssociationsToObjectTypeRoute, (c) => {
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
