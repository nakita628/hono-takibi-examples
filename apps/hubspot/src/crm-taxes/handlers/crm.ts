import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609TaxesTaxIdRoute,
  getCrmObjects202609TaxesRoute,
  getCrmObjects202609TaxesTaxIdAssociationsToObjectTypeRoute,
  getCrmObjects202609TaxesTaxIdRoute,
  patchCrmObjects202609TaxesTaxIdRoute,
  postCrmObjects202609TaxesBatchArchiveRoute,
  postCrmObjects202609TaxesBatchCreateRoute,
  postCrmObjects202609TaxesBatchReadRoute,
  postCrmObjects202609TaxesBatchUpdateRoute,
  postCrmObjects202609TaxesBatchUpsertRoute,
  postCrmObjects202609TaxesGdprDeleteRoute,
  postCrmObjects202609TaxesMergeRoute,
  postCrmObjects202609TaxesRoute,
  postCrmObjects202609TaxesSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609TaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609TaxesTaxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609TaxesTaxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609TaxesTaxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609TaxesTaxIdAssociationsToObjectTypeRoute, (c) => {
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
