import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BillingSubscriptionsIdRoute,
  getV1BillingSubscriptionsIdTransactionsRoute,
  patchV1BillingSubscriptionsIdRoute,
  postV1BillingSubscriptionsIdActivateRoute,
  postV1BillingSubscriptionsIdCancelRoute,
  postV1BillingSubscriptionsIdCaptureRoute,
  postV1BillingSubscriptionsIdReviseRoute,
  postV1BillingSubscriptionsIdSuspendRoute,
  postV1BillingSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postV1BillingSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BillingSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingSubscriptionsIdReviseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingSubscriptionsIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingSubscriptionsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingSubscriptionsIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingSubscriptionsIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingSubscriptionsIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
