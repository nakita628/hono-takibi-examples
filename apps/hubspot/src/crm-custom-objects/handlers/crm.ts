import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeRoute,
  patchCrmObjects202609ObjectTypeObjectIdRoute,
  postCrmObjects202609ObjectTypeBatchArchiveRoute,
  postCrmObjects202609ObjectTypeBatchCreateRoute,
  postCrmObjects202609ObjectTypeBatchReadRoute,
  postCrmObjects202609ObjectTypeBatchUpdateRoute,
  postCrmObjects202609ObjectTypeBatchUpsertRoute,
  postCrmObjects202609ObjectTypeMergeRoute,
  postCrmObjects202609ObjectTypeRoute,
  postCrmObjects202609ObjectTypeSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCrmObjects202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
