import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPaymentFlowsIdRoute,
  getApiPaymentFlowsRoute,
  patchApiPaymentFlowsIdRoute,
  postApiPaymentFlowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentFlowHandler = app
  .openapi(getApiPaymentFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPaymentFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
