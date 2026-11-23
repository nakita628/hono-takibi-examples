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
} from './routes'
import {
  deleteCrmObjects202609InvoicesInvoiceIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609InvoicesInvoiceIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609InvoicesInvoiceIdRouteHandler,
  getCrmObjects202609InvoicesRouteHandler,
  patchCrmObjects202609InvoicesInvoiceIdRouteHandler,
  postCrmObjects202609InvoicesBatchArchiveRouteHandler,
  postCrmObjects202609InvoicesBatchCreateRouteHandler,
  postCrmObjects202609InvoicesBatchReadRouteHandler,
  postCrmObjects202609InvoicesBatchUpdateRouteHandler,
  postCrmObjects202609InvoicesBatchUpsertRouteHandler,
  postCrmObjects202609InvoicesGdprDeleteRouteHandler,
  postCrmObjects202609InvoicesMergeRouteHandler,
  postCrmObjects202609InvoicesRouteHandler,
  postCrmObjects202609InvoicesSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609InvoicesRoute, getCrmObjects202609InvoicesRouteHandler)
  .openapi(postCrmObjects202609InvoicesRoute, postCrmObjects202609InvoicesRouteHandler)
  .openapi(
    postCrmObjects202609InvoicesBatchArchiveRoute,
    postCrmObjects202609InvoicesBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609InvoicesBatchCreateRoute,
    postCrmObjects202609InvoicesBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609InvoicesBatchReadRoute,
    postCrmObjects202609InvoicesBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609InvoicesBatchUpdateRoute,
    postCrmObjects202609InvoicesBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609InvoicesBatchUpsertRoute,
    postCrmObjects202609InvoicesBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609InvoicesGdprDeleteRoute,
    postCrmObjects202609InvoicesGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609InvoicesMergeRoute, postCrmObjects202609InvoicesMergeRouteHandler)
  .openapi(postCrmObjects202609InvoicesSearchRoute, postCrmObjects202609InvoicesSearchRouteHandler)
  .openapi(
    getCrmObjects202609InvoicesInvoiceIdRoute,
    getCrmObjects202609InvoicesInvoiceIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609InvoicesInvoiceIdRoute,
    deleteCrmObjects202609InvoicesInvoiceIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609InvoicesInvoiceIdRoute,
    patchCrmObjects202609InvoicesInvoiceIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609InvoicesInvoiceIdAssociationsToObjectTypeRoute,
    getCrmObjects202609InvoicesInvoiceIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )

export default app
