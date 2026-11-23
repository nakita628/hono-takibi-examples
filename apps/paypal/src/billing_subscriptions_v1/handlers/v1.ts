import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BillingPlansIdRoute,
  getV1BillingPlansRoute,
  getV1BillingSubscriptionsIdRoute,
  getV1BillingSubscriptionsIdTransactionsRoute,
  patchV1BillingPlansIdRoute,
  patchV1BillingSubscriptionsIdRoute,
  postV1BillingPlansIdActivateRoute,
  postV1BillingPlansIdDeactivateRoute,
  postV1BillingPlansIdUpdatePricingSchemesRoute,
  postV1BillingPlansRoute,
  postV1BillingSubscriptionsIdActivateRoute,
  postV1BillingSubscriptionsIdCancelRoute,
  postV1BillingSubscriptionsIdCaptureRoute,
  postV1BillingSubscriptionsIdReviseRoute,
  postV1BillingSubscriptionsIdSuspendRoute,
  postV1BillingSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1BillingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingPlansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BillingPlansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPlansIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPlansIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPlansIdUpdatePricingSchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
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
