import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPvtRulesRuleIdRoute,
  getApiPvtAffiliationsAffiliationIdRoute,
  getApiPvtAffiliationsRoute,
  getApiPvtInstallmentsRoute,
  getApiPvtMerchantsPaymentSystemsRoute,
  getApiPvtRulesRoute,
  getApiPvtRulesRuleIdRoute,
  getApiPvtTransactionsTransactionIdPaymentsPaymentIdRoute,
  getApiPvtTransactionsTransactionIdRoute,
  getApiPvtTransactionsTransactionIdSettlementsRoute,
  postApiPubTransactionsTransactionIdPaymentsRoute,
  postApiPvtAffiliationsRoute,
  postApiPvtRulesRoute,
  postApiPvtTransactionsRoute,
  postApiPvtTransactionsTransactionIdAdditionalDataRoute,
  postApiPvtTransactionsTransactionIdAuthorizationRequestRoute,
  postApiPvtTransactionsTransactionIdCancellationRequestRoute,
  postApiPvtTransactionsTransactionIdPaymentsRoute,
  postApiPvtTransactionsTransactionIdRefundingRequestRoute,
  postApiPvtTransactionsTransactionIdSettlementRequestRoute,
  putApiPvtAffiliationsAffiliationIdRoute,
  putApiPvtRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiPubTransactionsTransactionIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtAffiliationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtAffiliationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtAffiliationsAffiliationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPvtAffiliationsAffiliationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtInstallmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtMerchantsPaymentSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPvtRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPvtRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdAdditionalDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdAuthorizationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdCancellationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtTransactionsTransactionIdPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdRefundingRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdSettlementRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtTransactionsTransactionIdSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
