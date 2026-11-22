import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdOrdersbymerchantidMerchantOrderIdRoute,
  getMerchantIdOrdersOrderIdRoute,
  getMerchantIdOrdersRoute,
  getMerchantIdTestordertemplatesTemplateNameRoute,
  postMerchantIdOrdersOrderIdAcknowledgeRoute,
  postMerchantIdOrdersOrderIdCancelLineItemRoute,
  postMerchantIdOrdersOrderIdCancelRoute,
  postMerchantIdOrdersOrderIdCaptureOrderRoute,
  postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute,
  postMerchantIdOrdersOrderIdRefunditemRoute,
  postMerchantIdOrdersOrderIdRefundorderRoute,
  postMerchantIdOrdersOrderIdRejectReturnLineItemRoute,
  postMerchantIdOrdersOrderIdReturnRefundLineItemRoute,
  postMerchantIdOrdersOrderIdSetLineItemMetadataRoute,
  postMerchantIdOrdersOrderIdShipLineItemsRoute,
  postMerchantIdOrdersOrderIdTestreturnRoute,
  postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRoute,
  postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRoute,
  postMerchantIdOrdersOrderIdUpdateShipmentRoute,
  postMerchantIdTestordersOrderIdAdvanceRoute,
  postMerchantIdTestordersOrderIdCancelByCustomerRoute,
  postMerchantIdTestordersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getMerchantIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdCancelLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdCaptureOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdRefunditemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdRefundorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdRejectReturnLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdReturnRefundLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdSetLineItemMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdShipLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdTestreturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdUpdateShipmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrdersbymerchantidMerchantOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdTestordersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdTestordersOrderIdAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdTestordersOrderIdCancelByCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdTestordertemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
