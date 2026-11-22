import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminOrdersIdChangesRoute,
  getAdminOrdersIdLineItemsRoute,
  getAdminOrdersIdPreviewRoute,
  getAdminOrdersIdRoute,
  getAdminOrdersIdShippingOptionsRoute,
  getAdminOrdersRoute,
  postAdminOrdersExportRoute,
  postAdminOrdersIdArchiveRoute,
  postAdminOrdersIdCancelRoute,
  postAdminOrdersIdCompleteRoute,
  postAdminOrdersIdCreditLinesRoute,
  postAdminOrdersIdFulfillmentsFulfillmentIdCancelRoute,
  postAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredRoute,
  postAdminOrdersIdFulfillmentsFulfillmentIdShipmentsRoute,
  postAdminOrdersIdFulfillmentsRoute,
  postAdminOrdersIdPaymentSessionsAuthorizeRoute,
  postAdminOrdersIdRoute,
  postAdminOrdersIdTransferCancelRoute,
  postAdminOrdersIdTransferGuestRoute,
  postAdminOrdersIdTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getAdminOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdCreditLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdFulfillmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdFulfillmentsFulfillmentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdFulfillmentsFulfillmentIdShipmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersIdLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdPaymentSessionsAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersIdShippingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdTransferGuestRoute, (c) => {
    throw new Error('Not implemented')
  })
