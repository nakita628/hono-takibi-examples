import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1PaymentRequestsIdRoute,
  getApi1PaymentRequestsIdRoute,
  getApi1PaymentRequestsRoute,
  postApi1PaymentRequestsIdActionsRoute,
  postApi1PaymentRequestsRoute,
  putApi1PaymentRequestsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentRequestsHandler = app
  .openapi(getApi1PaymentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1PaymentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PaymentRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1PaymentRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1PaymentRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1PaymentRequestsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
