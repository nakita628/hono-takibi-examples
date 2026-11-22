import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountIndexRoute,
  getBillingIndexRoute,
  patchBillingIndexRoute,
  postBillingActionsIndexRoute,
  postBillingEstimateIndexRoute,
  postBillingSubscribeIndexRoute,
  postTargetActionsIndexRoute,
  putBillingIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postTargetActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
