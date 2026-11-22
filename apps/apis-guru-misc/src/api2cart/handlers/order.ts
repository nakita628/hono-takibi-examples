import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrderShipmentDeleteJsonRoute,
  getOrderAbandonedListJsonRoute,
  getOrderCountJsonRoute,
  getOrderFinancialStatusListJsonRoute,
  getOrderFindJsonRoute,
  getOrderFulfillmentStatusListJsonRoute,
  getOrderInfoJsonRoute,
  getOrderListJsonRoute,
  getOrderShipmentInfoJsonRoute,
  getOrderShipmentListJsonRoute,
  getOrderStatusListJsonRoute,
  getOrderTransactionListJsonRoute,
  postOrderAddJsonRoute,
  postOrderPreestimateShippingListJsonRoute,
  postOrderRefundAddJsonRoute,
  postOrderShipmentAddJsonRoute,
  postOrderShipmentTrackingAddJsonRoute,
  putOrderShipmentUpdateJsonRoute,
  putOrderUpdateJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderHandler = app
  .openapi(getOrderAbandonedListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderFinancialStatusListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderFindJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderFulfillmentStatusListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderPreestimateShippingListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderRefundAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderShipmentAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrderShipmentDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderShipmentInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderShipmentListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderShipmentTrackingAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrderShipmentUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderStatusListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderTransactionListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrderUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
