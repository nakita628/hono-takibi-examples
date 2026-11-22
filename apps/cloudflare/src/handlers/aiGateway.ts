import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayBillingSpendingLimitRoute,
  deleteAccountsAccountIdAiGatewayBillingTopupConfigRoute,
  getAccountsAccountIdAiGatewayBillingCreditBalanceRoute,
  getAccountsAccountIdAiGatewayBillingInvoiceHistoryRoute,
  getAccountsAccountIdAiGatewayBillingInvoicePreviewRoute,
  getAccountsAccountIdAiGatewayBillingSpendingLimitRoute,
  getAccountsAccountIdAiGatewayBillingTopupConfigRoute,
  getAccountsAccountIdAiGatewayBillingTopupEligibilityRoute,
  getAccountsAccountIdAiGatewayBillingTopupLimitsRoute,
  getAccountsAccountIdAiGatewayBillingUsageHistoryRoute,
  postAccountsAccountIdAiGatewayBillingSpendingLimitRoute,
  postAccountsAccountIdAiGatewayBillingTopupConfigRoute,
  postAccountsAccountIdAiGatewayBillingTopupEligibilityRoute,
  postAccountsAccountIdAiGatewayBillingTopupRoute,
  postAccountsAccountIdAiGatewayBillingTopupStatusRoute,
  postAccountsAccountIdAiWebsearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayHandler = app
  .openapi(getAccountsAccountIdAiGatewayBillingCreditBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayBillingInvoiceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayBillingInvoicePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayBillingSpendingLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayBillingSpendingLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayBillingSpendingLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayBillingTopupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayBillingTopupConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayBillingTopupConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayBillingTopupConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayBillingTopupEligibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayBillingTopupEligibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayBillingTopupLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayBillingTopupStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayBillingUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiWebsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
