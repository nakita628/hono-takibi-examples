import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdAdsCreditDiscountsRoute,
  getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadRoute,
  getAdAccountsAdAccountIdBillingInvoicesRoute,
  getAdAccountsAdAccountIdBillingProfilesRoute,
  getAdAccountsAdAccountIdSsioAccountsRoute,
  getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusRoute,
  getAdAccountsAdAccountIdSsioInsertionOrdersStatusRoute,
  getAdAccountsAdAccountIdSsioOrderLinesRoute,
  patchAdAccountsAdAccountIdSsioInsertionOrdersRoute,
  postAdAccountsAdAccountIdAdsCreditRedeemRoute,
  postAdAccountsAdAccountIdSsioInsertionOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getAdAccountsAdAccountIdAdsCreditDiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdsCreditRedeemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdBillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdBillingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdSsioAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdSsioInsertionOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdSsioInsertionOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdSsioInsertionOrdersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdSsioOrderLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
