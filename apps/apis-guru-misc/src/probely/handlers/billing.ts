import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBillingIndexRoute,
  patchBillingIndexRoute,
  postBillingActionsIndexRoute,
  postBillingEstimateIndexRoute,
  postBillingSubscribeIndexRoute,
  putBillingIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getBillingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBillingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBillingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingEstimateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingSubscribeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
