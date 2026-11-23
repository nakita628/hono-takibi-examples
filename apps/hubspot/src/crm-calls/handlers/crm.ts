import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CallsCallIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CallsCallIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CallsCallIdRoute,
  getCrmObjects202609CallsRoute,
  patchCrmObjects202609CallsCallIdRoute,
  postCrmObjects202609CallsBatchArchiveRoute,
  postCrmObjects202609CallsBatchCreateRoute,
  postCrmObjects202609CallsBatchReadRoute,
  postCrmObjects202609CallsBatchUpdateRoute,
  postCrmObjects202609CallsBatchUpsertRoute,
  postCrmObjects202609CallsGdprDeleteRoute,
  postCrmObjects202609CallsMergeRoute,
  postCrmObjects202609CallsRoute,
  postCrmObjects202609CallsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609CallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609CallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609CallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CallsCallIdAssociationsToObjectTypeRoute, (c) => {
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
