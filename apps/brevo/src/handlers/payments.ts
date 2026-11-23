import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentsRequestsIdRoute,
  getPaymentsRequestsIdRoute,
  postPaymentsRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(postPaymentsRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePaymentsRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
