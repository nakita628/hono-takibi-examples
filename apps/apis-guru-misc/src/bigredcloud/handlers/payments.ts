import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PaymentsIdRoute,
  getV1PaymentsIdRoute,
  getV1PaymentsRoute,
  postV1PaymentsRoute,
  putV1PaymentsBatchRoute,
  putV1PaymentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
