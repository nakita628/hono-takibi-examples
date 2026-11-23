import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609InvoicesInvoiceIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609InvoicesInvoiceIdAssociationsToObjectTypeRoute,
  getCrmObjects202609InvoicesInvoiceIdRoute,
  getCrmObjects202609InvoicesRoute,
  patchCrmObjects202609InvoicesInvoiceIdRoute,
  postCrmObjects202609InvoicesBatchArchiveRoute,
  postCrmObjects202609InvoicesBatchCreateRoute,
  postCrmObjects202609InvoicesBatchReadRoute,
  postCrmObjects202609InvoicesBatchUpdateRoute,
  postCrmObjects202609InvoicesBatchUpsertRoute,
  postCrmObjects202609InvoicesGdprDeleteRoute,
  postCrmObjects202609InvoicesMergeRoute,
  postCrmObjects202609InvoicesRoute,
  postCrmObjects202609InvoicesSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609InvoicesInvoiceIdAssociationsToObjectTypeRoute, (c) => {
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
