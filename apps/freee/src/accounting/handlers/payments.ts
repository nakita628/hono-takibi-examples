import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1DealsIdPaymentsPaymentIdRoute,
  postApi1DealsIdPaymentsRoute,
  putApi1DealsIdPaymentsPaymentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(postApi1DealsIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1DealsIdPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1DealsIdPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
