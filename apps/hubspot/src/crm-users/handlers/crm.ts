import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609UsersUserIdRoute,
  getCrmObjects202609UsersRoute,
  getCrmObjects202609UsersUserIdAssociationsToObjectTypeRoute,
  getCrmObjects202609UsersUserIdRoute,
  patchCrmObjects202609UsersUserIdRoute,
  postCrmObjects202609UsersBatchArchiveRoute,
  postCrmObjects202609UsersBatchCreateRoute,
  postCrmObjects202609UsersBatchReadRoute,
  postCrmObjects202609UsersBatchUpdateRoute,
  postCrmObjects202609UsersBatchUpsertRoute,
  postCrmObjects202609UsersGdprDeleteRoute,
  postCrmObjects202609UsersMergeRoute,
  postCrmObjects202609UsersRoute,
  postCrmObjects202609UsersSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609UsersUserIdAssociationsToObjectTypeRoute, (c) => {
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
