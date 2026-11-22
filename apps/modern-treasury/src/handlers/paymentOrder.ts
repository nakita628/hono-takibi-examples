import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPaymentOrdersIdRoute,
  getApiPaymentOrdersRoute,
  patchApiPaymentOrdersIdRoute,
  postApiPaymentOrdersCreateAsyncRoute,
  postApiPaymentOrdersRoute,
  putApiInvoicesIdPaymentOrdersPaymentOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentOrderHandler = app
  .openapi(putApiInvoicesIdPaymentOrdersPaymentOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentOrdersCreateAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPaymentOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
