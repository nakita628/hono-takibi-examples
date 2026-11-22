import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBillingCustomersIdClientTokenIndexRoute,
  getBillingCustomersIdIndexRoute,
  getBillingCustomersIndexRoute,
  getBillingInvoicesIdIndexRoute,
  getBillingInvoicesIndexRoute,
  getBillingStripePaymentsIdIndexRoute,
  getBillingStripePaymentsIndexRoute,
  getBillingTransactionsIdIndexRoute,
  getBillingTransactionsIndexRoute,
  patchBillingCustomersIdIndexRoute,
  patchBillingInvoicesIdIndexRoute,
  postBillingCustomersIndexRoute,
  postBillingInvoicesIdMarkAsPaidIndexRoute,
  putBillingCustomersIdIndexRoute,
  putBillingInvoicesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getBillingCustomersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingCustomersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingCustomersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBillingCustomersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBillingCustomersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingCustomersIdClientTokenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingInvoicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingInvoicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBillingInvoicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBillingInvoicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingInvoicesIdMarkAsPaidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingStripePaymentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingStripePaymentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingTransactionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingTransactionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
