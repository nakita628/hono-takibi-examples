import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOrdersOrderIdPaymentsRoute,
  getApiOrdersOrderIdRoute,
  getApiOrdersRoute,
  patchApiOrdersOrderIdRoute,
  postApiOrdersOrderIdCancelRoute,
  postApiOrdersOrderIdCaptureRoute,
  postApiOrdersOrderIdIncrementAuthorisationRoute,
  postApiOrdersOrderIdPaymentsRoute,
  postApiOrdersOrderIdRefundRoute,
  postApiOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(postApiOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdIncrementAuthorisationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersOrderIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
