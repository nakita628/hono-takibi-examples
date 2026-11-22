import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountPaymentsPaymentIdRoute,
  getApiVersionAccountPaymentsRoute,
  postApiVersionAccountCreditCardRoute,
  postApiVersionAccountPaymentsPaypalExecuteRoute,
  postApiVersionAccountPaymentsPaypalRoute,
  postApiVersionAccountPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(postApiVersionAccountCreditCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountPaymentsPaypalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountPaymentsPaypalExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
