import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBillingBadDebtRoute,
  getAccountsAccountIdBillingCreditsRoute,
  getAccountsAccountIdBillingUnpaidInvoiceRoute,
  getAccountsAccountIdReceiptsReceiptIdPdfRoute,
  patchAccountsAccountIdInvoicesRoute,
  postAccountsAccountIdBillingProfilePaymentMethodRoute,
  postAccountsAccountIdClientSecretRoute,
  postAccountsAccountIdPayInvoiceRoute,
  postBillingAddressValidationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountBillingHandler = app
  .openapi(getAccountsAccountIdBillingBadDebtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBillingProfilePaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingUnpaidInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdClientSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPayInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReceiptsReceiptIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingAddressValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
