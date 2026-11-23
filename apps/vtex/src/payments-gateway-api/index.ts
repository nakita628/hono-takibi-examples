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
} from './routes'
import {
  deleteApiPvtRulesRuleIdRouteHandler,
  getApiPvtAffiliationsAffiliationIdRouteHandler,
  getApiPvtAffiliationsRouteHandler,
  getApiPvtInstallmentsRouteHandler,
  getApiPvtMerchantsPaymentSystemsRouteHandler,
  getApiPvtRulesRouteHandler,
  getApiPvtRulesRuleIdRouteHandler,
  getApiPvtTransactionsTransactionIdPaymentsPaymentIdRouteHandler,
  getApiPvtTransactionsTransactionIdRouteHandler,
  getApiPvtTransactionsTransactionIdSettlementsRouteHandler,
  postApiPubTransactionsTransactionIdPaymentsRouteHandler,
  postApiPvtAffiliationsRouteHandler,
  postApiPvtRulesRouteHandler,
  postApiPvtTransactionsRouteHandler,
  postApiPvtTransactionsTransactionIdAdditionalDataRouteHandler,
  postApiPvtTransactionsTransactionIdAuthorizationRequestRouteHandler,
  postApiPvtTransactionsTransactionIdCancellationRequestRouteHandler,
  postApiPvtTransactionsTransactionIdPaymentsRouteHandler,
  postApiPvtTransactionsTransactionIdRefundingRequestRouteHandler,
  postApiPvtTransactionsTransactionIdSettlementRequestRouteHandler,
  putApiPvtAffiliationsAffiliationIdRouteHandler,
  putApiPvtRulesRuleIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postApiPubTransactionsTransactionIdPaymentsRoute,
    postApiPubTransactionsTransactionIdPaymentsRouteHandler,
  )
  .openapi(getApiPvtAffiliationsRoute, getApiPvtAffiliationsRouteHandler)
  .openapi(postApiPvtAffiliationsRoute, postApiPvtAffiliationsRouteHandler)
  .openapi(getApiPvtAffiliationsAffiliationIdRoute, getApiPvtAffiliationsAffiliationIdRouteHandler)
  .openapi(putApiPvtAffiliationsAffiliationIdRoute, putApiPvtAffiliationsAffiliationIdRouteHandler)
  .openapi(getApiPvtInstallmentsRoute, getApiPvtInstallmentsRouteHandler)
  .openapi(getApiPvtMerchantsPaymentSystemsRoute, getApiPvtMerchantsPaymentSystemsRouteHandler)
  .openapi(getApiPvtRulesRoute, getApiPvtRulesRouteHandler)
  .openapi(postApiPvtRulesRoute, postApiPvtRulesRouteHandler)
  .openapi(deleteApiPvtRulesRuleIdRoute, deleteApiPvtRulesRuleIdRouteHandler)
  .openapi(getApiPvtRulesRuleIdRoute, getApiPvtRulesRuleIdRouteHandler)
  .openapi(putApiPvtRulesRuleIdRoute, putApiPvtRulesRuleIdRouteHandler)
  .openapi(postApiPvtTransactionsRoute, postApiPvtTransactionsRouteHandler)
  .openapi(getApiPvtTransactionsTransactionIdRoute, getApiPvtTransactionsTransactionIdRouteHandler)
  .openapi(
    postApiPvtTransactionsTransactionIdAdditionalDataRoute,
    postApiPvtTransactionsTransactionIdAdditionalDataRouteHandler,
  )
  .openapi(
    postApiPvtTransactionsTransactionIdAuthorizationRequestRoute,
    postApiPvtTransactionsTransactionIdAuthorizationRequestRouteHandler,
  )
  .openapi(
    postApiPvtTransactionsTransactionIdCancellationRequestRoute,
    postApiPvtTransactionsTransactionIdCancellationRequestRouteHandler,
  )
  .openapi(
    postApiPvtTransactionsTransactionIdPaymentsRoute,
    postApiPvtTransactionsTransactionIdPaymentsRouteHandler,
  )
  .openapi(
    getApiPvtTransactionsTransactionIdPaymentsPaymentIdRoute,
    getApiPvtTransactionsTransactionIdPaymentsPaymentIdRouteHandler,
  )
  .openapi(
    postApiPvtTransactionsTransactionIdRefundingRequestRoute,
    postApiPvtTransactionsTransactionIdRefundingRequestRouteHandler,
  )
  .openapi(
    postApiPvtTransactionsTransactionIdSettlementRequestRoute,
    postApiPvtTransactionsTransactionIdSettlementRequestRouteHandler,
  )
  .openapi(
    getApiPvtTransactionsTransactionIdSettlementsRoute,
    getApiPvtTransactionsTransactionIdSettlementsRouteHandler,
  )

export default app
