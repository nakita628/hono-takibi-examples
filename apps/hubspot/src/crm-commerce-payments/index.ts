import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CommercePaymentsCommercePaymentIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CommercePaymentsCommercePaymentIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CommercePaymentsCommercePaymentIdRoute,
  getCrmObjects202609CommercePaymentsRoute,
  patchCrmObjects202609CommercePaymentsCommercePaymentIdRoute,
  postCrmObjects202609CommercePaymentsBatchArchiveRoute,
  postCrmObjects202609CommercePaymentsBatchCreateRoute,
  postCrmObjects202609CommercePaymentsBatchReadRoute,
  postCrmObjects202609CommercePaymentsBatchUpdateRoute,
  postCrmObjects202609CommercePaymentsBatchUpsertRoute,
  postCrmObjects202609CommercePaymentsGdprDeleteRoute,
  postCrmObjects202609CommercePaymentsMergeRoute,
  postCrmObjects202609CommercePaymentsRoute,
  postCrmObjects202609CommercePaymentsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from './routes'
import {
  deleteCrmObjects202609CommercePaymentsCommercePaymentIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609CommercePaymentsCommercePaymentIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609CommercePaymentsCommercePaymentIdRouteHandler,
  getCrmObjects202609CommercePaymentsRouteHandler,
  patchCrmObjects202609CommercePaymentsCommercePaymentIdRouteHandler,
  postCrmObjects202609CommercePaymentsBatchArchiveRouteHandler,
  postCrmObjects202609CommercePaymentsBatchCreateRouteHandler,
  postCrmObjects202609CommercePaymentsBatchReadRouteHandler,
  postCrmObjects202609CommercePaymentsBatchUpdateRouteHandler,
  postCrmObjects202609CommercePaymentsBatchUpsertRouteHandler,
  postCrmObjects202609CommercePaymentsGdprDeleteRouteHandler,
  postCrmObjects202609CommercePaymentsMergeRouteHandler,
  postCrmObjects202609CommercePaymentsRouteHandler,
  postCrmObjects202609CommercePaymentsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCrmObjects202609CommercePaymentsRoute,
    getCrmObjects202609CommercePaymentsRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommercePaymentsRoute,
    postCrmObjects202609CommercePaymentsRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommercePaymentsBatchArchiveRoute,
    postCrmObjects202609CommercePaymentsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommercePaymentsBatchCreateRoute,
    postCrmObjects202609CommercePaymentsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommercePaymentsBatchReadRoute,
    postCrmObjects202609CommercePaymentsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommercePaymentsBatchUpdateRoute,
    postCrmObjects202609CommercePaymentsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommercePaymentsBatchUpsertRoute,
    postCrmObjects202609CommercePaymentsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommercePaymentsGdprDeleteRoute,
    postCrmObjects202609CommercePaymentsGdprDeleteRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommercePaymentsMergeRoute,
    postCrmObjects202609CommercePaymentsMergeRouteHandler,
  )
  .openapi(
    postCrmObjects202609CommercePaymentsSearchRoute,
    postCrmObjects202609CommercePaymentsSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609CommercePaymentsCommercePaymentIdRoute,
    getCrmObjects202609CommercePaymentsCommercePaymentIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609CommercePaymentsCommercePaymentIdRoute,
    deleteCrmObjects202609CommercePaymentsCommercePaymentIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609CommercePaymentsCommercePaymentIdRoute,
    patchCrmObjects202609CommercePaymentsCommercePaymentIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609CommercePaymentsCommercePaymentIdAssociationsToObjectTypeRoute,
    getCrmObjects202609CommercePaymentsCommercePaymentIdAssociationsToObjectTypeRouteHandler,
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
