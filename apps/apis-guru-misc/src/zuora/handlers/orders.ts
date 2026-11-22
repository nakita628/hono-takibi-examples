import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrdersOrderNumberRoute,
  getV1AsyncJobsJobIdRoute,
  getV1OrdersInvoiceOwnerAccountNumberRoute,
  getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberRoute,
  getV1OrdersOrderNumberRoute,
  getV1OrdersRoute,
  getV1OrdersSubscriptionOwnerAccountNumberRoute,
  getV1OrdersSubscriptionSubscriptionNumberRoute,
  getV1OrdersTermSubscriptionNumberRoute,
  postV1AsyncOrdersPreviewRoute,
  postV1AsyncOrdersRoute,
  postV1OrdersPreviewRoute,
  postV1OrdersRoute,
  putV1OrdersOrderNumberCustomFieldsRoute,
  putV1OrdersOrderNumberTriggerDatesRoute,
  putV1SubscriptionsSubscriptionNumberCustomFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getV1AsyncJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AsyncOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AsyncOrdersPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersInvoiceOwnerAccountNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersSubscriptionSubscriptionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersSubscriptionOwnerAccountNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersTermSubscriptionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrdersOrderNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersOrderNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrdersOrderNumberCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrdersOrderNumberTriggerDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsSubscriptionNumberCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
