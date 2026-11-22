import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdOrdersbymerchantidMerchantOrderIdRoute,
  getMerchantIdOrdersOrderIdRoute,
  getMerchantIdOrdersRoute,
  getMerchantIdTestordertemplatesTemplateNameRoute,
  postMerchantIdOrdersOrderIdAcknowledgeRoute,
  postMerchantIdOrdersOrderIdCancelLineItemRoute,
  postMerchantIdOrdersOrderIdCancelRoute,
  postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute,
  postMerchantIdOrdersOrderIdRefundRoute,
  postMerchantIdOrdersOrderIdRejectReturnLineItemRoute,
  postMerchantIdOrdersOrderIdReturnLineItemRoute,
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
  postOrdersBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(postOrdersBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdRejectReturnLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdReturnLineItemRoute, (c) => {
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
