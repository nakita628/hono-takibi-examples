import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609PostalMailPostalMailIdRoute,
  getCrmObjects202609PostalMailPostalMailIdAssociationsToObjectTypeRoute,
  getCrmObjects202609PostalMailPostalMailIdRoute,
  getCrmObjects202609PostalMailRoute,
  patchCrmObjects202609PostalMailPostalMailIdRoute,
  postCrmObjects202609PostalMailBatchArchiveRoute,
  postCrmObjects202609PostalMailBatchCreateRoute,
  postCrmObjects202609PostalMailBatchReadRoute,
  postCrmObjects202609PostalMailBatchUpdateRoute,
  postCrmObjects202609PostalMailBatchUpsertRoute,
  postCrmObjects202609PostalMailGdprDeleteRoute,
  postCrmObjects202609PostalMailMergeRoute,
  postCrmObjects202609PostalMailRoute,
  postCrmObjects202609PostalMailSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609PostalMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PostalMailSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PostalMailPostalMailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609PostalMailPostalMailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609PostalMailPostalMailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609PostalMailPostalMailIdAssociationsToObjectTypeRoute, (c) => {
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
