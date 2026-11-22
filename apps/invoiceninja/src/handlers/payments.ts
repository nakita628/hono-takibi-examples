import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1PaymentsIdRoute,
  getApiV1PaymentsCreateRoute,
  getApiV1PaymentsIdActionRoute,
  getApiV1PaymentsIdEditRoute,
  getApiV1PaymentsIdRoute,
  getApiV1PaymentsRoute,
  postApiV1PaymentsBulkRoute,
  postApiV1PaymentsIdUploadRoute,
  postApiV1PaymentsRefundRoute,
  postApiV1PaymentsRoute,
  putApiV1PaymentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getApiV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentsRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PaymentsIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PaymentsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
