import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ContactsContactIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609ContactsContactIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ContactsContactIdRoute,
  getCrmObjects202609ContactsRoute,
  patchCrmObjects202609ContactsContactIdRoute,
  postCrmObjects202609ContactsBatchArchiveRoute,
  postCrmObjects202609ContactsBatchCreateRoute,
  postCrmObjects202609ContactsBatchReadRoute,
  postCrmObjects202609ContactsBatchUpdateRoute,
  postCrmObjects202609ContactsBatchUpsertRoute,
  postCrmObjects202609ContactsGdprDeleteRoute,
  postCrmObjects202609ContactsMergeRoute,
  postCrmObjects202609ContactsRoute,
  postCrmObjects202609ContactsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609ContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609ContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ContactsContactIdAssociationsToObjectTypeRoute, (c) => {
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
