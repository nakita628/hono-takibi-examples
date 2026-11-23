import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609EmailsEmailIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609EmailsEmailIdAssociationsToObjectTypeRoute,
  getCrmObjects202609EmailsEmailIdRoute,
  getCrmObjects202609EmailsRoute,
  patchCrmObjects202609EmailsEmailIdRoute,
  postCrmObjects202609EmailsBatchArchiveRoute,
  postCrmObjects202609EmailsBatchCreateRoute,
  postCrmObjects202609EmailsBatchReadRoute,
  postCrmObjects202609EmailsBatchUpdateRoute,
  postCrmObjects202609EmailsBatchUpsertRoute,
  postCrmObjects202609EmailsGdprDeleteRoute,
  postCrmObjects202609EmailsMergeRoute,
  postCrmObjects202609EmailsRoute,
  postCrmObjects202609EmailsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609EmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609EmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609EmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609EmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609EmailsEmailIdAssociationsToObjectTypeRoute, (c) => {
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
