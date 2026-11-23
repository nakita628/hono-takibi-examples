import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postProcessorAccountGetRoute,
  postProcessorApexProcessorTokenCreateRoute,
  postProcessorAuthGetRoute,
  postProcessorBalanceGetRoute,
  postProcessorBankTransferCreateRoute,
  postProcessorIdentityGetRoute,
  postProcessorIdentityMatchRoute,
  postProcessorInvestmentsAuthGetRoute,
  postProcessorInvestmentsHoldingsGetRoute,
  postProcessorInvestmentsTransactionsGetRoute,
  postProcessorLiabilitiesGetRoute,
  postProcessorSignalDecisionReportRoute,
  postProcessorSignalEvaluateRoute,
  postProcessorSignalPrepareRoute,
  postProcessorSignalReturnReportRoute,
  postProcessorStripeBankAccountTokenCreateRoute,
  postProcessorTokenCreateRoute,
  postProcessorTokenPermissionsGetRoute,
  postProcessorTokenPermissionsSetRoute,
  postProcessorTokenWebhookUpdateRoute,
  postProcessorTransactionsGetRoute,
  postProcessorTransactionsRecurringGetRoute,
  postProcessorTransactionsRefreshRoute,
  postProcessorTransactionsSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const processorHandler = app
  .openapi(postProcessorAuthGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorAccountGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorInvestmentsHoldingsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorInvestmentsAuthGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorInvestmentsTransactionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorTransactionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorTransactionsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorTransactionsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorTransactionsRecurringGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorSignalEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorSignalDecisionReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorSignalReturnReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorSignalPrepareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorBankTransferCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorLiabilitiesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorIdentityGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorIdentityMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorBalanceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorTokenPermissionsSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorTokenPermissionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorTokenWebhookUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorStripeBankAccountTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorApexProcessorTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
