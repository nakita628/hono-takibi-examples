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
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609CommercePaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CommercePaymentsCommercePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609CommercePaymentsCommercePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609CommercePaymentsCommercePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCrmObjects202609CommercePaymentsCommercePaymentIdAssociationsToObjectTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
