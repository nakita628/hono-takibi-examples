import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdBillingPaymentsPaymentIdRoute,
  getV21AccountsAccountIdBillingPaymentsRoute,
  postV21AccountsAccountIdBillingPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getV21AccountsAccountIdBillingPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdBillingPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
