import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CashPaymentsIdRoute,
  getV1CashPaymentsIdRoute,
  getV1CashPaymentsRoute,
  postV1CashPaymentsRoute,
  putV1CashPaymentsBatchRoute,
  putV1CashPaymentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cashPaymentsHandler = app
  .openapi(getV1CashPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CashPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CashPaymentsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CashPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CashPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CashPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
