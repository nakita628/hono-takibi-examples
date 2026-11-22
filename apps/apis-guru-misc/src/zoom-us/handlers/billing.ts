import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBillingInvoicesInvoiceIdRoute,
  getAccountsAccountIdBillingInvoicesRoute,
  getAccountsAccountIdBillingRoute,
  getAccountsAccountIdPlansRoute,
  getAccountsAccountIdPlansUsageRoute,
  getApiDownloadBillingInvoicesInvoiceIdRoute,
  patchAccountsAccountIdBillingRoute,
  patchAccountsAccountIdPlansAddonsStatusRoute,
  patchAccountsAccountIdPlansBaseStatusRoute,
  postAccountsAccountIdPlansAddonsRoute,
  postAccountsAccountIdPlansRoute,
  putAccountsAccountIdPlansAddonsRoute,
  putAccountsAccountIdPlansBaseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getAccountsAccountIdBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPlansAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdPlansAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPlansAddonsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdPlansBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPlansBaseStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPlansUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadBillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
