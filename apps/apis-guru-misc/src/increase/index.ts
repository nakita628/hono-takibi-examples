import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountNumbersAccountNumberIdRoute,
  getAccountNumbersRoute,
  getAccountsAccountIdRoute,
  getAccountsRoute,
  getAccountStatementsAccountStatementIdRoute,
  getAccountStatementsRoute,
  getAccountTransfersAccountTransferIdRoute,
  getAccountTransfersRoute,
  getAchPrenotificationsAchPrenotificationIdRoute,
  getAchPrenotificationsRoute,
  getAchTransfersAchTransferIdRoute,
  getAchTransfersRoute,
  getCardDisputesCardDisputeIdRoute,
  getCardDisputesRoute,
  getCardProfilesCardProfileIdRoute,
  getCardProfilesRoute,
  getCardsCardIdDetailsRoute,
  getCardsCardIdRoute,
  getCardsRoute,
  getCheckDepositsCheckDepositIdRoute,
  getCheckDepositsRoute,
  getCheckTransfersCheckTransferIdRoute,
  getCheckTransfersRoute,
  getDeclinedTransactionsDeclinedTransactionIdRoute,
  getDeclinedTransactionsRoute,
  getDigitalWalletTokensDigitalWalletTokenIdRoute,
  getDigitalWalletTokensRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsRoute,
  getEntitiesEntityIdRoute,
  getEntitiesRoute,
  getEventsEventIdRoute,
  getEventsRoute,
  getEventSubscriptionsEventSubscriptionIdRoute,
  getEventSubscriptionsRoute,
  getExternalAccountsExternalAccountIdRoute,
  getExternalAccountsRoute,
  getFilesFileIdRoute,
  getFilesRoute,
  getGroupsCurrentRoute,
  getInboundAchTransferReturnsInboundAchTransferReturnIdRoute,
  getInboundAchTransferReturnsRoute,
  getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdRoute,
  getInboundWireDrawdownRequestsRoute,
  getLimitsLimitIdRoute,
  getLimitsRoute,
  getOauthConnectionsOauthConnectionIdRoute,
  getOauthConnectionsRoute,
  getPendingTransactionsPendingTransactionIdRoute,
  getPendingTransactionsRoute,
  getRealTimeDecisionsRealTimeDecisionIdRoute,
  getRoutingNumbersRoute,
  getTransactionsRoute,
  getTransactionsTransactionIdRoute,
  getWireDrawdownRequestsRoute,
  getWireDrawdownRequestsWireDrawdownRequestIdRoute,
  getWireTransfersRoute,
  getWireTransfersWireTransferIdRoute,
  patchAccountNumbersAccountNumberIdRoute,
  patchAccountsAccountIdRoute,
  patchCardsCardIdRoute,
  patchEventSubscriptionsEventSubscriptionIdRoute,
  patchExternalAccountsExternalAccountIdRoute,
  patchLimitsLimitIdRoute,
  postAccountNumbersRoute,
  postAccountsAccountIdCloseRoute,
  postAccountsRoute,
  postAccountTransfersAccountTransferIdApproveRoute,
  postAccountTransfersAccountTransferIdCancelRoute,
  postAccountTransfersRoute,
  postAchPrenotificationsRoute,
  postAchTransfersAchTransferIdApproveRoute,
  postAchTransfersAchTransferIdCancelRoute,
  postAchTransfersRoute,
  postCardDisputesRoute,
  postCardProfilesRoute,
  postCardsRoute,
  postCheckDepositsRoute,
  postCheckTransfersCheckTransferIdApproveRoute,
  postCheckTransfersCheckTransferIdCancelRoute,
  postCheckTransfersCheckTransferIdStopPaymentRoute,
  postCheckTransfersRoute,
  postEntitiesEntityIdSupplementalDocumentsRoute,
  postEntitiesRoute,
  postEventSubscriptionsRoute,
  postExternalAccountsRoute,
  postFilesRoute,
  postInboundAchTransferReturnsRoute,
  postLimitsRoute,
  postRealTimeDecisionsRealTimeDecisionIdActionRoute,
  postSimulationsAccountStatementsRoute,
  postSimulationsAccountTransfersAccountTransferIdCompleteRoute,
  postSimulationsAchTransfersAchTransferIdReturnRoute,
  postSimulationsAchTransfersAchTransferIdSubmitRoute,
  postSimulationsCardAuthorizationsRoute,
  postSimulationsCardDisputesCardDisputeIdActionRoute,
  postSimulationsCardRefundsRoute,
  postSimulationsCardSettlementsRoute,
  postSimulationsCheckDepositsCheckDepositIdRejectRoute,
  postSimulationsCheckDepositsCheckDepositIdReturnRoute,
  postSimulationsCheckDepositsCheckDepositIdSubmitRoute,
  postSimulationsCheckTransfersCheckTransferIdDepositRoute,
  postSimulationsCheckTransfersCheckTransferIdMailRoute,
  postSimulationsDigitalWalletTokenRequestsRoute,
  postSimulationsDocumentsRoute,
  postSimulationsInboundAchTransfersRoute,
  postSimulationsInboundRealTimePaymentsTransfersRoute,
  postSimulationsInboundWireDrawdownRequestsRoute,
  postSimulationsInboundWireTransfersRoute,
  postSimulationsWireTransfersWireTransferIdReverseRoute,
  postSimulationsWireTransfersWireTransferIdSubmitRoute,
  postWireDrawdownRequestsRoute,
  postWireTransfersRoute,
  postWireTransfersWireTransferIdApproveRoute,
  postWireTransfersWireTransferIdCancelRoute,
} from './routes'
import {
  getAccountNumbersAccountNumberIdRouteHandler,
  getAccountNumbersRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountsRouteHandler,
  getAccountStatementsAccountStatementIdRouteHandler,
  getAccountStatementsRouteHandler,
  getAccountTransfersAccountTransferIdRouteHandler,
  getAccountTransfersRouteHandler,
  getAchPrenotificationsAchPrenotificationIdRouteHandler,
  getAchPrenotificationsRouteHandler,
  getAchTransfersAchTransferIdRouteHandler,
  getAchTransfersRouteHandler,
  getCardDisputesCardDisputeIdRouteHandler,
  getCardDisputesRouteHandler,
  getCardProfilesCardProfileIdRouteHandler,
  getCardProfilesRouteHandler,
  getCardsCardIdDetailsRouteHandler,
  getCardsCardIdRouteHandler,
  getCardsRouteHandler,
  getCheckDepositsCheckDepositIdRouteHandler,
  getCheckDepositsRouteHandler,
  getCheckTransfersCheckTransferIdRouteHandler,
  getCheckTransfersRouteHandler,
  getDeclinedTransactionsDeclinedTransactionIdRouteHandler,
  getDeclinedTransactionsRouteHandler,
  getDigitalWalletTokensDigitalWalletTokenIdRouteHandler,
  getDigitalWalletTokensRouteHandler,
  getDocumentsDocumentIdRouteHandler,
  getDocumentsRouteHandler,
  getEntitiesEntityIdRouteHandler,
  getEntitiesRouteHandler,
  getEventsEventIdRouteHandler,
  getEventsRouteHandler,
  getEventSubscriptionsEventSubscriptionIdRouteHandler,
  getEventSubscriptionsRouteHandler,
  getExternalAccountsExternalAccountIdRouteHandler,
  getExternalAccountsRouteHandler,
  getFilesFileIdRouteHandler,
  getFilesRouteHandler,
  getGroupsCurrentRouteHandler,
  getInboundAchTransferReturnsInboundAchTransferReturnIdRouteHandler,
  getInboundAchTransferReturnsRouteHandler,
  getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdRouteHandler,
  getInboundWireDrawdownRequestsRouteHandler,
  getLimitsLimitIdRouteHandler,
  getLimitsRouteHandler,
  getOauthConnectionsOauthConnectionIdRouteHandler,
  getOauthConnectionsRouteHandler,
  getPendingTransactionsPendingTransactionIdRouteHandler,
  getPendingTransactionsRouteHandler,
  getRealTimeDecisionsRealTimeDecisionIdRouteHandler,
  getRoutingNumbersRouteHandler,
  getTransactionsRouteHandler,
  getTransactionsTransactionIdRouteHandler,
  getWireDrawdownRequestsRouteHandler,
  getWireDrawdownRequestsWireDrawdownRequestIdRouteHandler,
  getWireTransfersRouteHandler,
  getWireTransfersWireTransferIdRouteHandler,
  patchAccountNumbersAccountNumberIdRouteHandler,
  patchAccountsAccountIdRouteHandler,
  patchCardsCardIdRouteHandler,
  patchEventSubscriptionsEventSubscriptionIdRouteHandler,
  patchExternalAccountsExternalAccountIdRouteHandler,
  patchLimitsLimitIdRouteHandler,
  postAccountNumbersRouteHandler,
  postAccountsAccountIdCloseRouteHandler,
  postAccountsRouteHandler,
  postAccountTransfersAccountTransferIdApproveRouteHandler,
  postAccountTransfersAccountTransferIdCancelRouteHandler,
  postAccountTransfersRouteHandler,
  postAchPrenotificationsRouteHandler,
  postAchTransfersAchTransferIdApproveRouteHandler,
  postAchTransfersAchTransferIdCancelRouteHandler,
  postAchTransfersRouteHandler,
  postCardDisputesRouteHandler,
  postCardProfilesRouteHandler,
  postCardsRouteHandler,
  postCheckDepositsRouteHandler,
  postCheckTransfersCheckTransferIdApproveRouteHandler,
  postCheckTransfersCheckTransferIdCancelRouteHandler,
  postCheckTransfersCheckTransferIdStopPaymentRouteHandler,
  postCheckTransfersRouteHandler,
  postEntitiesEntityIdSupplementalDocumentsRouteHandler,
  postEntitiesRouteHandler,
  postEventSubscriptionsRouteHandler,
  postExternalAccountsRouteHandler,
  postFilesRouteHandler,
  postInboundAchTransferReturnsRouteHandler,
  postLimitsRouteHandler,
  postRealTimeDecisionsRealTimeDecisionIdActionRouteHandler,
  postSimulationsAccountStatementsRouteHandler,
  postSimulationsAccountTransfersAccountTransferIdCompleteRouteHandler,
  postSimulationsAchTransfersAchTransferIdReturnRouteHandler,
  postSimulationsAchTransfersAchTransferIdSubmitRouteHandler,
  postSimulationsCardAuthorizationsRouteHandler,
  postSimulationsCardDisputesCardDisputeIdActionRouteHandler,
  postSimulationsCardRefundsRouteHandler,
  postSimulationsCardSettlementsRouteHandler,
  postSimulationsCheckDepositsCheckDepositIdRejectRouteHandler,
  postSimulationsCheckDepositsCheckDepositIdReturnRouteHandler,
  postSimulationsCheckDepositsCheckDepositIdSubmitRouteHandler,
  postSimulationsCheckTransfersCheckTransferIdDepositRouteHandler,
  postSimulationsCheckTransfersCheckTransferIdMailRouteHandler,
  postSimulationsDigitalWalletTokenRequestsRouteHandler,
  postSimulationsDocumentsRouteHandler,
  postSimulationsInboundAchTransfersRouteHandler,
  postSimulationsInboundRealTimePaymentsTransfersRouteHandler,
  postSimulationsInboundWireDrawdownRequestsRouteHandler,
  postSimulationsInboundWireTransfersRouteHandler,
  postSimulationsWireTransfersWireTransferIdReverseRouteHandler,
  postSimulationsWireTransfersWireTransferIdSubmitRouteHandler,
  postWireDrawdownRequestsRouteHandler,
  postWireTransfersRouteHandler,
  postWireTransfersWireTransferIdApproveRouteHandler,
  postWireTransfersWireTransferIdCancelRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountNumbersRoute, getAccountNumbersRouteHandler)
  .openapi(postAccountNumbersRoute, postAccountNumbersRouteHandler)
  .openapi(getAccountNumbersAccountNumberIdRoute, getAccountNumbersAccountNumberIdRouteHandler)
  .openapi(patchAccountNumbersAccountNumberIdRoute, patchAccountNumbersAccountNumberIdRouteHandler)
  .openapi(getAccountStatementsRoute, getAccountStatementsRouteHandler)
  .openapi(
    getAccountStatementsAccountStatementIdRoute,
    getAccountStatementsAccountStatementIdRouteHandler,
  )
  .openapi(getAccountTransfersRoute, getAccountTransfersRouteHandler)
  .openapi(postAccountTransfersRoute, postAccountTransfersRouteHandler)
  .openapi(
    getAccountTransfersAccountTransferIdRoute,
    getAccountTransfersAccountTransferIdRouteHandler,
  )
  .openapi(
    postAccountTransfersAccountTransferIdApproveRoute,
    postAccountTransfersAccountTransferIdApproveRouteHandler,
  )
  .openapi(
    postAccountTransfersAccountTransferIdCancelRoute,
    postAccountTransfersAccountTransferIdCancelRouteHandler,
  )
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(patchAccountsAccountIdRoute, patchAccountsAccountIdRouteHandler)
  .openapi(postAccountsAccountIdCloseRoute, postAccountsAccountIdCloseRouteHandler)
  .openapi(getAchPrenotificationsRoute, getAchPrenotificationsRouteHandler)
  .openapi(postAchPrenotificationsRoute, postAchPrenotificationsRouteHandler)
  .openapi(
    getAchPrenotificationsAchPrenotificationIdRoute,
    getAchPrenotificationsAchPrenotificationIdRouteHandler,
  )
  .openapi(getAchTransfersRoute, getAchTransfersRouteHandler)
  .openapi(postAchTransfersRoute, postAchTransfersRouteHandler)
  .openapi(getAchTransfersAchTransferIdRoute, getAchTransfersAchTransferIdRouteHandler)
  .openapi(
    postAchTransfersAchTransferIdApproveRoute,
    postAchTransfersAchTransferIdApproveRouteHandler,
  )
  .openapi(
    postAchTransfersAchTransferIdCancelRoute,
    postAchTransfersAchTransferIdCancelRouteHandler,
  )
  .openapi(getCardDisputesRoute, getCardDisputesRouteHandler)
  .openapi(postCardDisputesRoute, postCardDisputesRouteHandler)
  .openapi(getCardDisputesCardDisputeIdRoute, getCardDisputesCardDisputeIdRouteHandler)
  .openapi(getCardProfilesRoute, getCardProfilesRouteHandler)
  .openapi(postCardProfilesRoute, postCardProfilesRouteHandler)
  .openapi(getCardProfilesCardProfileIdRoute, getCardProfilesCardProfileIdRouteHandler)
  .openapi(getCardsRoute, getCardsRouteHandler)
  .openapi(postCardsRoute, postCardsRouteHandler)
  .openapi(getCardsCardIdRoute, getCardsCardIdRouteHandler)
  .openapi(patchCardsCardIdRoute, patchCardsCardIdRouteHandler)
  .openapi(getCardsCardIdDetailsRoute, getCardsCardIdDetailsRouteHandler)
  .openapi(getCheckDepositsRoute, getCheckDepositsRouteHandler)
  .openapi(postCheckDepositsRoute, postCheckDepositsRouteHandler)
  .openapi(getCheckDepositsCheckDepositIdRoute, getCheckDepositsCheckDepositIdRouteHandler)
  .openapi(getCheckTransfersRoute, getCheckTransfersRouteHandler)
  .openapi(postCheckTransfersRoute, postCheckTransfersRouteHandler)
  .openapi(getCheckTransfersCheckTransferIdRoute, getCheckTransfersCheckTransferIdRouteHandler)
  .openapi(
    postCheckTransfersCheckTransferIdApproveRoute,
    postCheckTransfersCheckTransferIdApproveRouteHandler,
  )
  .openapi(
    postCheckTransfersCheckTransferIdCancelRoute,
    postCheckTransfersCheckTransferIdCancelRouteHandler,
  )
  .openapi(
    postCheckTransfersCheckTransferIdStopPaymentRoute,
    postCheckTransfersCheckTransferIdStopPaymentRouteHandler,
  )
  .openapi(getDeclinedTransactionsRoute, getDeclinedTransactionsRouteHandler)
  .openapi(
    getDeclinedTransactionsDeclinedTransactionIdRoute,
    getDeclinedTransactionsDeclinedTransactionIdRouteHandler,
  )
  .openapi(getDigitalWalletTokensRoute, getDigitalWalletTokensRouteHandler)
  .openapi(
    getDigitalWalletTokensDigitalWalletTokenIdRoute,
    getDigitalWalletTokensDigitalWalletTokenIdRouteHandler,
  )
  .openapi(getDocumentsRoute, getDocumentsRouteHandler)
  .openapi(getDocumentsDocumentIdRoute, getDocumentsDocumentIdRouteHandler)
  .openapi(getEntitiesRoute, getEntitiesRouteHandler)
  .openapi(postEntitiesRoute, postEntitiesRouteHandler)
  .openapi(getEntitiesEntityIdRoute, getEntitiesEntityIdRouteHandler)
  .openapi(
    postEntitiesEntityIdSupplementalDocumentsRoute,
    postEntitiesEntityIdSupplementalDocumentsRouteHandler,
  )
  .openapi(getEventSubscriptionsRoute, getEventSubscriptionsRouteHandler)
  .openapi(postEventSubscriptionsRoute, postEventSubscriptionsRouteHandler)
  .openapi(
    getEventSubscriptionsEventSubscriptionIdRoute,
    getEventSubscriptionsEventSubscriptionIdRouteHandler,
  )
  .openapi(
    patchEventSubscriptionsEventSubscriptionIdRoute,
    patchEventSubscriptionsEventSubscriptionIdRouteHandler,
  )
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getEventsEventIdRoute, getEventsEventIdRouteHandler)
  .openapi(getExternalAccountsRoute, getExternalAccountsRouteHandler)
  .openapi(postExternalAccountsRoute, postExternalAccountsRouteHandler)
  .openapi(
    getExternalAccountsExternalAccountIdRoute,
    getExternalAccountsExternalAccountIdRouteHandler,
  )
  .openapi(
    patchExternalAccountsExternalAccountIdRoute,
    patchExternalAccountsExternalAccountIdRouteHandler,
  )
  .openapi(getFilesRoute, getFilesRouteHandler)
  .openapi(postFilesRoute, postFilesRouteHandler)
  .openapi(getFilesFileIdRoute, getFilesFileIdRouteHandler)
  .openapi(getGroupsCurrentRoute, getGroupsCurrentRouteHandler)
  .openapi(getInboundAchTransferReturnsRoute, getInboundAchTransferReturnsRouteHandler)
  .openapi(postInboundAchTransferReturnsRoute, postInboundAchTransferReturnsRouteHandler)
  .openapi(
    getInboundAchTransferReturnsInboundAchTransferReturnIdRoute,
    getInboundAchTransferReturnsInboundAchTransferReturnIdRouteHandler,
  )
  .openapi(getInboundWireDrawdownRequestsRoute, getInboundWireDrawdownRequestsRouteHandler)
  .openapi(
    getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdRoute,
    getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdRouteHandler,
  )
  .openapi(getLimitsRoute, getLimitsRouteHandler)
  .openapi(postLimitsRoute, postLimitsRouteHandler)
  .openapi(getLimitsLimitIdRoute, getLimitsLimitIdRouteHandler)
  .openapi(patchLimitsLimitIdRoute, patchLimitsLimitIdRouteHandler)
  .openapi(getOauthConnectionsRoute, getOauthConnectionsRouteHandler)
  .openapi(
    getOauthConnectionsOauthConnectionIdRoute,
    getOauthConnectionsOauthConnectionIdRouteHandler,
  )
  .openapi(getPendingTransactionsRoute, getPendingTransactionsRouteHandler)
  .openapi(
    getPendingTransactionsPendingTransactionIdRoute,
    getPendingTransactionsPendingTransactionIdRouteHandler,
  )
  .openapi(
    getRealTimeDecisionsRealTimeDecisionIdRoute,
    getRealTimeDecisionsRealTimeDecisionIdRouteHandler,
  )
  .openapi(
    postRealTimeDecisionsRealTimeDecisionIdActionRoute,
    postRealTimeDecisionsRealTimeDecisionIdActionRouteHandler,
  )
  .openapi(getRoutingNumbersRoute, getRoutingNumbersRouteHandler)
  .openapi(postSimulationsAccountStatementsRoute, postSimulationsAccountStatementsRouteHandler)
  .openapi(
    postSimulationsAccountTransfersAccountTransferIdCompleteRoute,
    postSimulationsAccountTransfersAccountTransferIdCompleteRouteHandler,
  )
  .openapi(
    postSimulationsAchTransfersAchTransferIdReturnRoute,
    postSimulationsAchTransfersAchTransferIdReturnRouteHandler,
  )
  .openapi(
    postSimulationsAchTransfersAchTransferIdSubmitRoute,
    postSimulationsAchTransfersAchTransferIdSubmitRouteHandler,
  )
  .openapi(postSimulationsCardAuthorizationsRoute, postSimulationsCardAuthorizationsRouteHandler)
  .openapi(
    postSimulationsCardDisputesCardDisputeIdActionRoute,
    postSimulationsCardDisputesCardDisputeIdActionRouteHandler,
  )
  .openapi(postSimulationsCardRefundsRoute, postSimulationsCardRefundsRouteHandler)
  .openapi(postSimulationsCardSettlementsRoute, postSimulationsCardSettlementsRouteHandler)
  .openapi(
    postSimulationsCheckDepositsCheckDepositIdRejectRoute,
    postSimulationsCheckDepositsCheckDepositIdRejectRouteHandler,
  )
  .openapi(
    postSimulationsCheckDepositsCheckDepositIdReturnRoute,
    postSimulationsCheckDepositsCheckDepositIdReturnRouteHandler,
  )
  .openapi(
    postSimulationsCheckDepositsCheckDepositIdSubmitRoute,
    postSimulationsCheckDepositsCheckDepositIdSubmitRouteHandler,
  )
  .openapi(
    postSimulationsCheckTransfersCheckTransferIdDepositRoute,
    postSimulationsCheckTransfersCheckTransferIdDepositRouteHandler,
  )
  .openapi(
    postSimulationsCheckTransfersCheckTransferIdMailRoute,
    postSimulationsCheckTransfersCheckTransferIdMailRouteHandler,
  )
  .openapi(
    postSimulationsDigitalWalletTokenRequestsRoute,
    postSimulationsDigitalWalletTokenRequestsRouteHandler,
  )
  .openapi(postSimulationsDocumentsRoute, postSimulationsDocumentsRouteHandler)
  .openapi(postSimulationsInboundAchTransfersRoute, postSimulationsInboundAchTransfersRouteHandler)
  .openapi(
    postSimulationsInboundRealTimePaymentsTransfersRoute,
    postSimulationsInboundRealTimePaymentsTransfersRouteHandler,
  )
  .openapi(
    postSimulationsInboundWireDrawdownRequestsRoute,
    postSimulationsInboundWireDrawdownRequestsRouteHandler,
  )
  .openapi(
    postSimulationsInboundWireTransfersRoute,
    postSimulationsInboundWireTransfersRouteHandler,
  )
  .openapi(
    postSimulationsWireTransfersWireTransferIdReverseRoute,
    postSimulationsWireTransfersWireTransferIdReverseRouteHandler,
  )
  .openapi(
    postSimulationsWireTransfersWireTransferIdSubmitRoute,
    postSimulationsWireTransfersWireTransferIdSubmitRouteHandler,
  )
  .openapi(getTransactionsRoute, getTransactionsRouteHandler)
  .openapi(getTransactionsTransactionIdRoute, getTransactionsTransactionIdRouteHandler)
  .openapi(getWireDrawdownRequestsRoute, getWireDrawdownRequestsRouteHandler)
  .openapi(postWireDrawdownRequestsRoute, postWireDrawdownRequestsRouteHandler)
  .openapi(
    getWireDrawdownRequestsWireDrawdownRequestIdRoute,
    getWireDrawdownRequestsWireDrawdownRequestIdRouteHandler,
  )
  .openapi(getWireTransfersRoute, getWireTransfersRouteHandler)
  .openapi(postWireTransfersRoute, postWireTransfersRouteHandler)
  .openapi(getWireTransfersWireTransferIdRoute, getWireTransfersWireTransferIdRouteHandler)
  .openapi(
    postWireTransfersWireTransferIdApproveRoute,
    postWireTransfersWireTransferIdApproveRouteHandler,
  )
  .openapi(
    postWireTransfersWireTransferIdCancelRoute,
    postWireTransfersWireTransferIdCancelRouteHandler,
  )

export default app
