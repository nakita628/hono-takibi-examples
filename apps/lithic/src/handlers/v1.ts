import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenRoute,
  deleteV1DisputesDisputeTokenEvidencesEvidenceTokenRoute,
  deleteV1DisputesDisputeTokenRoute,
  deleteV1EventSubscriptionsEventSubscriptionTokenRoute,
  deleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRoute,
  deleteV1ResponderEndpointsRoute,
  deleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenRoute,
  deleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenRoute,
  deleteV1TransactionMonitoringQueuesQueueTokenRoute,
  getV1AccountActivityRoute,
  getV1AccountActivityTransactionTokenRoute,
  getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenRoute,
  getV1AccountHoldersAccountHolderTokenDocumentsRoute,
  getV1AccountHoldersAccountHolderTokenRoute,
  getV1AccountHoldersRoute,
  getV1AccountsAccountTokenRoute,
  getV1AccountsAccountTokenSignalsRoute,
  getV1AccountsAccountTokenSpendLimitsRoute,
  getV1AccountsRoute,
  getV1AuthStreamSecretRoute,
  getV1BalancesRoute,
  getV1BlockchainRecipientsBlockchainRecipientTokenRoute,
  getV1BookTransfersBookTransferTokenRoute,
  getV1BookTransfersRoute,
  getV1CardBulkOrdersBulkOrderTokenRoute,
  getV1CardBulkOrdersRoute,
  getV1CardProgramsCardProgramTokenRoute,
  getV1CardProgramsRoute,
  getV1CardsCardTokenBalancesRoute,
  getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenRoute,
  getV1CardsCardTokenFinancialTransactionsRoute,
  getV1CardsCardTokenRoute,
  getV1CardsCardTokenSignalsRoute,
  getV1CardsCardTokenSpendLimitsRoute,
  getV1CardsRoute,
  getV1CreditProductsCreditProductTokenExtendedCreditRoute,
  getV1CreditProductsCreditProductTokenPrimeRatesRoute,
  getV1DigitalCardArtDigitalCardArtTokenRoute,
  getV1DigitalCardArtRoute,
  getV1DisputesDisputeTokenEvidencesEvidenceTokenRoute,
  getV1DisputesDisputeTokenEvidencesRoute,
  getV1DisputesDisputeTokenRoute,
  getV1DisputesRoute,
  getV1EmbedCardRoute,
  getV1EmbedRoute,
  getV1EventsEventTokenAttemptsRoute,
  getV1EventsEventTokenRoute,
  getV1EventsRoute,
  getV1EventSubscriptionsEventSubscriptionTokenAttemptsRoute,
  getV1EventSubscriptionsEventSubscriptionTokenRoute,
  getV1EventSubscriptionsEventSubscriptionTokenSecretRoute,
  getV1EventSubscriptionsRoute,
  getV1ExternalBankAccountsExternalBankAccountTokenRoute,
  getV1ExternalBankAccountsRoute,
  getV1ExternalPaymentsExternalPaymentTokenRoute,
  getV1ExternalPaymentsRoute,
  getV1FinancialAccountsFinancialAccountTokenBalancesRoute,
  getV1FinancialAccountsFinancialAccountTokenCreditConfigurationRoute,
  getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenRoute,
  getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsRoute,
  getV1FinancialAccountsFinancialAccountTokenHoldsRoute,
  getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenRoute,
  getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsRoute,
  getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenRoute,
  getV1FinancialAccountsFinancialAccountTokenInstallmentPlansRoute,
  getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRoute,
  getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleRoute,
  getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationRoute,
  getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenRoute,
  getV1FinancialAccountsFinancialAccountTokenLoanTapesRoute,
  getV1FinancialAccountsFinancialAccountTokenOpenToBuyRoute,
  getV1FinancialAccountsFinancialAccountTokenRoute,
  getV1FinancialAccountsFinancialAccountTokenStatementsRoute,
  getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsRoute,
  getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenRoute,
  getV1FinancialAccountsRoute,
  getV1FraudTransactionsTransactionTokenRoute,
  getV1FundingEventsFundingEventTokenDetailsRoute,
  getV1FundingEventsFundingEventTokenRoute,
  getV1FundingEventsRoute,
  getV1HoldsHoldTokenRoute,
  getV1IpRangesRoute,
  getV1ManagementOperationsManagementOperationTokenRoute,
  getV1ManagementOperationsRoute,
  getV1NetworkProgramsNetworkProgramTokenRoute,
  getV1NetworkProgramsRoute,
  getV1PaymentsPaymentTokenRoute,
  getV1PaymentsRoute,
  getV1ReportsSettlementDetailsReportDateRoute,
  getV1ReportsSettlementNetworkTotalsRoute,
  getV1ReportsSettlementNetworkTotalsTokenRoute,
  getV1ReportsSettlementSummaryReportDateRoute,
  getV1ResponderEndpointsRoute,
  getV1StatusRoute,
  getV1ThreeDsAuthenticationThreeDsAuthenticationTokenRoute,
  getV1ThreeDsDecisioningSecretRoute,
  getV1TokenizationDecisioningSecretRoute,
  getV1TokenizationsRoute,
  getV1TokenizationsTokenizationTokenRoute,
  getV1TransactionMonitoringCasesCaseTokenActivityRoute,
  getV1TransactionMonitoringCasesCaseTokenCardsRoute,
  getV1TransactionMonitoringCasesCaseTokenFilesFileTokenRoute,
  getV1TransactionMonitoringCasesCaseTokenFilesRoute,
  getV1TransactionMonitoringCasesCaseTokenRoute,
  getV1TransactionMonitoringCasesCaseTokenTransactionsRoute,
  getV1TransactionMonitoringCasesRoute,
  getV1TransactionMonitoringQueuesQueueTokenRoute,
  getV1TransactionMonitoringQueuesRoute,
  getV1TransactionsEventsEventTokenEnhancedCommercialDataRoute,
  getV1TransactionsRoute,
  getV1TransactionsTransactionTokenEnhancedCommercialDataRoute,
  getV1TransactionsTransactionTokenRoute,
  getV1TransferLimitsRoute,
  patchV1AccountHoldersAccountHolderTokenRoute,
  patchV1AccountsAccountTokenRoute,
  patchV1CardBulkOrdersBulkOrderTokenRoute,
  patchV1CardsCardTokenRoute,
  patchV1DisputesDisputeTokenRoute,
  patchV1EventSubscriptionsEventSubscriptionTokenRoute,
  patchV1ExternalBankAccountsExternalBankAccountTokenRoute,
  patchV1FinancialAccountsFinancialAccountTokenCreditConfigurationRoute,
  patchV1FinancialAccountsFinancialAccountTokenRoute,
  patchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenRoute,
  patchV1TransactionMonitoringCasesCaseTokenRoute,
  patchV1TransactionMonitoringQueuesQueueTokenRoute,
  postV1AccountHoldersAccountHolderTokenDocumentsRoute,
  postV1AccountHoldersAccountHolderTokenEntitiesRoute,
  postV1AccountHoldersRoute,
  postV1AuthStreamSecretRotateRoute,
  postV1BlockchainRecipientsRoute,
  postV1BookTransfersBookTransferTokenRetryRoute,
  postV1BookTransfersBookTransferTokenReverseRoute,
  postV1BookTransfersRoute,
  postV1CardAuthorizationsEventTokenChallengeResponseRoute,
  postV1CardBulkOrdersRoute,
  postV1CardsCardTokenConvertPhysicalRoute,
  postV1CardsCardTokenEmbedRoute,
  postV1CardsCardTokenProvisionRoute,
  postV1CardsCardTokenReassignAccountRoute,
  postV1CardsCardTokenReissueRoute,
  postV1CardsCardTokenRenewRoute,
  postV1CardsCardTokenTokenizationsRoute,
  postV1CardsCardTokenWebProvisionRoute,
  postV1CardsRoute,
  postV1CardsSearchByPanRoute,
  postV1CreditProductsCreditProductTokenPrimeRatesRoute,
  postV1DisputesDisputeTokenEvidencesRoute,
  postV1DisputesRoute,
  postV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendRoute,
  postV1EventSubscriptionsEventSubscriptionTokenRecoverRoute,
  postV1EventSubscriptionsEventSubscriptionTokenReplayMissingRoute,
  postV1EventSubscriptionsEventSubscriptionTokenSecretRotateRoute,
  postV1EventSubscriptionsRoute,
  postV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsRoute,
  postV1ExternalBankAccountsExternalBankAccountTokenPauseRoute,
  postV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsRoute,
  postV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteRoute,
  postV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodRoute,
  postV1ExternalBankAccountsExternalBankAccountTokenUnpauseRoute,
  postV1ExternalBankAccountsRoute,
  postV1ExternalPaymentsExternalPaymentTokenCancelRoute,
  postV1ExternalPaymentsExternalPaymentTokenReleaseRoute,
  postV1ExternalPaymentsExternalPaymentTokenReverseRoute,
  postV1ExternalPaymentsExternalPaymentTokenSettleRoute,
  postV1ExternalPaymentsRoute,
  postV1FinancialAccountsFinancialAccountTokenHoldsRoute,
  postV1FinancialAccountsFinancialAccountTokenInterestTierScheduleRoute,
  postV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberRoute,
  postV1FinancialAccountsFinancialAccountTokenUpdateStatusRoute,
  postV1FinancialAccountsRoute,
  postV1FraudTransactionsTransactionTokenRoute,
  postV1HoldsHoldTokenVoidRoute,
  postV1ManagementOperationsManagementOperationTokenReverseRoute,
  postV1ManagementOperationsRoute,
  postV1PaymentsPaymentTokenRetryRoute,
  postV1PaymentsPaymentTokenReturnRoute,
  postV1PaymentsRoute,
  postV1PaymentsStablecoinRoute,
  postV1ResponderEndpointsRoute,
  postV1SimulateAccountHoldersEnrollmentDocumentReviewRoute,
  postV1SimulateAccountHoldersEnrollmentReviewRoute,
  postV1SimulateAuthorizationAdviceRoute,
  postV1SimulateAuthorizeRoute,
  postV1SimulateClearingRoute,
  postV1SimulateCreditAuthorizationAdviceRoute,
  postV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleRoute,
  postV1SimulatePaymentsPaymentTokenActionRoute,
  postV1SimulatePaymentsReceiptRoute,
  postV1SimulatePaymentsReleaseRoute,
  postV1SimulatePaymentsReturnRoute,
  postV1SimulateReturnReversalRoute,
  postV1SimulateReturnRoute,
  postV1SimulateTokenizationsRoute,
  postV1SimulateVoidRoute,
  postV1ThreeDsAuthenticationSimulateRoute,
  postV1ThreeDsDecisioningChallengeResponseRoute,
  postV1ThreeDsDecisioningSecretRotateRoute,
  postV1ThreeDsDecisioningSimulateEnterOtpRoute,
  postV1TokenizationDecisioningSecretRotateRoute,
  postV1TokenizationsTokenizationTokenActivateRoute,
  postV1TokenizationsTokenizationTokenDeactivateRoute,
  postV1TokenizationsTokenizationTokenPauseRoute,
  postV1TokenizationsTokenizationTokenPaymentCredentialsRoute,
  postV1TokenizationsTokenizationTokenResendActivationCodeRoute,
  postV1TokenizationsTokenizationTokenSelectTfaMethodRoute,
  postV1TokenizationsTokenizationTokenSubmitTfaRoute,
  postV1TokenizationsTokenizationTokenUnpauseRoute,
  postV1TokenizationsTokenizationTokenUpdateDigitalCardArtRoute,
  postV1TransactionMonitoringCasesCaseTokenCommentsRoute,
  postV1TransactionMonitoringCasesCaseTokenFilesRoute,
  postV1TransactionMonitoringQueuesRoute,
  postV1TransactionsTransactionTokenExpireAuthorizationRoute,
  postV1TransactionsTransactionTokenRouteRoute,
  postV1TransferRoute,
  putV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRoute,
} from '../routes'

export const getV1AccountHoldersRouteHandler: RouteHandler<
  typeof getV1AccountHoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountHoldersRouteHandler: RouteHandler<
  typeof postV1AccountHoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountHoldersAccountHolderTokenRouteHandler: RouteHandler<
  typeof getV1AccountHoldersAccountHolderTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AccountHoldersAccountHolderTokenRouteHandler: RouteHandler<
  typeof patchV1AccountHoldersAccountHolderTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountHoldersAccountHolderTokenDocumentsRouteHandler: RouteHandler<
  typeof getV1AccountHoldersAccountHolderTokenDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountHoldersAccountHolderTokenDocumentsRouteHandler: RouteHandler<
  typeof postV1AccountHoldersAccountHolderTokenDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenRouteHandler: RouteHandler<
  typeof getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountHoldersAccountHolderTokenEntitiesRouteHandler: RouteHandler<
  typeof postV1AccountHoldersAccountHolderTokenEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenRouteHandler: RouteHandler<
  typeof deleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsRouteHandler: RouteHandler<typeof getV1AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountTokenRouteHandler: RouteHandler<
  typeof getV1AccountsAccountTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AccountsAccountTokenRouteHandler: RouteHandler<
  typeof patchV1AccountsAccountTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountTokenSpendLimitsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountTokenSpendLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardsCardTokenSignalsRouteHandler: RouteHandler<
  typeof getV1CardsCardTokenSignalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountTokenSignalsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountTokenSignalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AuthStreamSecretRouteHandler: RouteHandler<
  typeof getV1AuthStreamSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AuthStreamSecretRotateRouteHandler: RouteHandler<
  typeof postV1AuthStreamSecretRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BalancesRouteHandler: RouteHandler<typeof getV1BalancesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardProgramsRouteHandler: RouteHandler<typeof getV1CardProgramsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CardProgramsCardProgramTokenRouteHandler: RouteHandler<
  typeof getV1CardProgramsCardProgramTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardsRouteHandler: RouteHandler<typeof getV1CardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardsRouteHandler: RouteHandler<typeof postV1CardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardsSearchByPanRouteHandler: RouteHandler<
  typeof postV1CardsSearchByPanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardsCardTokenRouteHandler: RouteHandler<
  typeof getV1CardsCardTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1CardsCardTokenRouteHandler: RouteHandler<
  typeof patchV1CardsCardTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardsCardTokenBalancesRouteHandler: RouteHandler<
  typeof getV1CardsCardTokenBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardsCardTokenFinancialTransactionsRouteHandler: RouteHandler<
  typeof getV1CardsCardTokenFinancialTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenRouteHandler: RouteHandler<
  typeof getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardsCardTokenProvisionRouteHandler: RouteHandler<
  typeof postV1CardsCardTokenProvisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardsCardTokenWebProvisionRouteHandler: RouteHandler<
  typeof postV1CardsCardTokenWebProvisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardsCardTokenReissueRouteHandler: RouteHandler<
  typeof postV1CardsCardTokenReissueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardsCardTokenRenewRouteHandler: RouteHandler<
  typeof postV1CardsCardTokenRenewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardsCardTokenReassignAccountRouteHandler: RouteHandler<
  typeof postV1CardsCardTokenReassignAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardsCardTokenConvertPhysicalRouteHandler: RouteHandler<
  typeof postV1CardsCardTokenConvertPhysicalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardsCardTokenSpendLimitsRouteHandler: RouteHandler<
  typeof getV1CardsCardTokenSpendLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardsCardTokenEmbedRouteHandler: RouteHandler<
  typeof postV1CardsCardTokenEmbedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardAuthorizationsEventTokenChallengeResponseRouteHandler: RouteHandler<
  typeof postV1CardAuthorizationsEventTokenChallengeResponseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardBulkOrdersRouteHandler: RouteHandler<
  typeof getV1CardBulkOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardBulkOrdersRouteHandler: RouteHandler<
  typeof postV1CardBulkOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardBulkOrdersBulkOrderTokenRouteHandler: RouteHandler<
  typeof getV1CardBulkOrdersBulkOrderTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1CardBulkOrdersBulkOrderTokenRouteHandler: RouteHandler<
  typeof patchV1CardBulkOrdersBulkOrderTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DigitalCardArtRouteHandler: RouteHandler<
  typeof getV1DigitalCardArtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DigitalCardArtDigitalCardArtTokenRouteHandler: RouteHandler<
  typeof getV1DigitalCardArtDigitalCardArtTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DisputesRouteHandler: RouteHandler<typeof getV1DisputesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DisputesRouteHandler: RouteHandler<typeof postV1DisputesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DisputesDisputeTokenRouteHandler: RouteHandler<
  typeof deleteV1DisputesDisputeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DisputesDisputeTokenRouteHandler: RouteHandler<
  typeof getV1DisputesDisputeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DisputesDisputeTokenRouteHandler: RouteHandler<
  typeof patchV1DisputesDisputeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DisputesDisputeTokenEvidencesRouteHandler: RouteHandler<
  typeof getV1DisputesDisputeTokenEvidencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DisputesDisputeTokenEvidencesRouteHandler: RouteHandler<
  typeof postV1DisputesDisputeTokenEvidencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DisputesDisputeTokenEvidencesEvidenceTokenRouteHandler: RouteHandler<
  typeof deleteV1DisputesDisputeTokenEvidencesEvidenceTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DisputesDisputeTokenEvidencesEvidenceTokenRouteHandler: RouteHandler<
  typeof getV1DisputesDisputeTokenEvidencesEvidenceTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EmbedCardRouteHandler: RouteHandler<typeof getV1EmbedCardRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EmbedRouteHandler: RouteHandler<typeof getV1EmbedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FraudTransactionsTransactionTokenRouteHandler: RouteHandler<
  typeof getV1FraudTransactionsTransactionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FraudTransactionsTransactionTokenRouteHandler: RouteHandler<
  typeof postV1FraudTransactionsTransactionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionsTransactionTokenEnhancedCommercialDataRouteHandler: RouteHandler<
  typeof getV1TransactionsTransactionTokenEnhancedCommercialDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransactionsTransactionTokenExpireAuthorizationRouteHandler: RouteHandler<
  typeof postV1TransactionsTransactionTokenExpireAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransactionsTransactionTokenRouteRouteHandler: RouteHandler<
  typeof postV1TransactionsTransactionTokenRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionsEventsEventTokenEnhancedCommercialDataRouteHandler: RouteHandler<
  typeof getV1TransactionsEventsEventTokenEnhancedCommercialDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventSubscriptionsRouteHandler: RouteHandler<
  typeof getV1EventSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EventSubscriptionsRouteHandler: RouteHandler<
  typeof postV1EventSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1EventSubscriptionsEventSubscriptionTokenRouteHandler: RouteHandler<
  typeof deleteV1EventSubscriptionsEventSubscriptionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventSubscriptionsEventSubscriptionTokenRouteHandler: RouteHandler<
  typeof getV1EventSubscriptionsEventSubscriptionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1EventSubscriptionsEventSubscriptionTokenRouteHandler: RouteHandler<
  typeof patchV1EventSubscriptionsEventSubscriptionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventSubscriptionsEventSubscriptionTokenAttemptsRouteHandler: RouteHandler<
  typeof getV1EventSubscriptionsEventSubscriptionTokenAttemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EventSubscriptionsEventSubscriptionTokenRecoverRouteHandler: RouteHandler<
  typeof postV1EventSubscriptionsEventSubscriptionTokenRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EventSubscriptionsEventSubscriptionTokenReplayMissingRouteHandler: RouteHandler<
  typeof postV1EventSubscriptionsEventSubscriptionTokenReplayMissingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventSubscriptionsEventSubscriptionTokenSecretRouteHandler: RouteHandler<
  typeof getV1EventSubscriptionsEventSubscriptionTokenSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EventSubscriptionsEventSubscriptionTokenSecretRotateRouteHandler: RouteHandler<
  typeof postV1EventSubscriptionsEventSubscriptionTokenSecretRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsRouteHandler: RouteHandler<typeof getV1EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsEventTokenRouteHandler: RouteHandler<
  typeof getV1EventsEventTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsEventTokenAttemptsRouteHandler: RouteHandler<
  typeof getV1EventsEventTokenAttemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendRouteHandler: RouteHandler<
  typeof postV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BlockchainRecipientsRouteHandler: RouteHandler<
  typeof postV1BlockchainRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BlockchainRecipientsBlockchainRecipientTokenRouteHandler: RouteHandler<
  typeof getV1BlockchainRecipientsBlockchainRecipientTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExternalBankAccountsRouteHandler: RouteHandler<
  typeof getV1ExternalBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalBankAccountsRouteHandler: RouteHandler<
  typeof postV1ExternalBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExternalBankAccountsExternalBankAccountTokenRouteHandler: RouteHandler<
  typeof getV1ExternalBankAccountsExternalBankAccountTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1ExternalBankAccountsExternalBankAccountTokenRouteHandler: RouteHandler<
  typeof patchV1ExternalBankAccountsExternalBankAccountTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsRouteHandler: RouteHandler<
  typeof postV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalBankAccountsExternalBankAccountTokenPauseRouteHandler: RouteHandler<
  typeof postV1ExternalBankAccountsExternalBankAccountTokenPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsRouteHandler: RouteHandler<
  typeof postV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteRouteHandler: RouteHandler<
  typeof postV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodRouteHandler: RouteHandler<
  typeof postV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalBankAccountsExternalBankAccountTokenUnpauseRouteHandler: RouteHandler<
  typeof postV1ExternalBankAccountsExternalBankAccountTokenUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditProductsCreditProductTokenExtendedCreditRouteHandler: RouteHandler<
  typeof getV1CreditProductsCreditProductTokenExtendedCreditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditProductsCreditProductTokenPrimeRatesRouteHandler: RouteHandler<
  typeof getV1CreditProductsCreditProductTokenPrimeRatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CreditProductsCreditProductTokenPrimeRatesRouteHandler: RouteHandler<
  typeof postV1CreditProductsCreditProductTokenPrimeRatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FinancialAccountsRouteHandler: RouteHandler<
  typeof postV1FinancialAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1FinancialAccountsFinancialAccountTokenRouteHandler: RouteHandler<
  typeof patchV1FinancialAccountsFinancialAccountTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenBalancesRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenOpenToBuyRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenOpenToBuyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenCreditConfigurationRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenCreditConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1FinancialAccountsFinancialAccountTokenCreditConfigurationRouteHandler: RouteHandler<
  typeof patchV1FinancialAccountsFinancialAccountTokenCreditConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberRouteHandler: RouteHandler<
  typeof postV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenHoldsRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenHoldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FinancialAccountsFinancialAccountTokenHoldsRouteHandler: RouteHandler<
  typeof postV1FinancialAccountsFinancialAccountTokenHoldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1HoldsHoldTokenRouteHandler: RouteHandler<
  typeof getV1HoldsHoldTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1HoldsHoldTokenVoidRouteHandler: RouteHandler<
  typeof postV1HoldsHoldTokenVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenStatementsRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenStatementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenLoanTapesRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenLoanTapesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenInstallmentPlansRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FinancialAccountsFinancialAccountTokenInterestTierScheduleRouteHandler: RouteHandler<
  typeof postV1FinancialAccountsFinancialAccountTokenInterestTierScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRouteHandler: RouteHandler<
  typeof deleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRouteHandler: RouteHandler<
  typeof putV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FinancialAccountsFinancialAccountTokenUpdateStatusRouteHandler: RouteHandler<
  typeof postV1FinancialAccountsFinancialAccountTokenUpdateStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountActivityRouteHandler: RouteHandler<
  typeof getV1AccountActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountActivityTransactionTokenRouteHandler: RouteHandler<
  typeof getV1AccountActivityTransactionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsRouteHandler: RouteHandler<typeof getV1PaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsRouteHandler: RouteHandler<typeof postV1PaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsStablecoinRouteHandler: RouteHandler<
  typeof postV1PaymentsStablecoinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsPaymentTokenRouteHandler: RouteHandler<
  typeof getV1PaymentsPaymentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsPaymentTokenRetryRouteHandler: RouteHandler<
  typeof postV1PaymentsPaymentTokenRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsPaymentTokenReturnRouteHandler: RouteHandler<
  typeof postV1PaymentsPaymentTokenReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportsSettlementDetailsReportDateRouteHandler: RouteHandler<
  typeof getV1ReportsSettlementDetailsReportDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportsSettlementSummaryReportDateRouteHandler: RouteHandler<
  typeof getV1ReportsSettlementSummaryReportDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportsSettlementNetworkTotalsRouteHandler: RouteHandler<
  typeof getV1ReportsSettlementNetworkTotalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportsSettlementNetworkTotalsTokenRouteHandler: RouteHandler<
  typeof getV1ReportsSettlementNetworkTotalsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ResponderEndpointsRouteHandler: RouteHandler<
  typeof deleteV1ResponderEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ResponderEndpointsRouteHandler: RouteHandler<
  typeof getV1ResponderEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ResponderEndpointsRouteHandler: RouteHandler<
  typeof postV1ResponderEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IpRangesRouteHandler: RouteHandler<typeof getV1IpRangesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulateAuthorizationAdviceRouteHandler: RouteHandler<
  typeof postV1SimulateAuthorizationAdviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulateAuthorizeRouteHandler: RouteHandler<
  typeof postV1SimulateAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulateClearingRouteHandler: RouteHandler<
  typeof postV1SimulateClearingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulateCreditAuthorizationAdviceRouteHandler: RouteHandler<
  typeof postV1SimulateCreditAuthorizationAdviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleRouteHandler: RouteHandler<
  typeof postV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulatePaymentsReceiptRouteHandler: RouteHandler<
  typeof postV1SimulatePaymentsReceiptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulatePaymentsReleaseRouteHandler: RouteHandler<
  typeof postV1SimulatePaymentsReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulatePaymentsReturnRouteHandler: RouteHandler<
  typeof postV1SimulatePaymentsReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulatePaymentsPaymentTokenActionRouteHandler: RouteHandler<
  typeof postV1SimulatePaymentsPaymentTokenActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulateReturnRouteHandler: RouteHandler<
  typeof postV1SimulateReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulateReturnReversalRouteHandler: RouteHandler<
  typeof postV1SimulateReturnReversalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulateTokenizationsRouteHandler: RouteHandler<
  typeof postV1SimulateTokenizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulateVoidRouteHandler: RouteHandler<typeof postV1SimulateVoidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SimulateAccountHoldersEnrollmentReviewRouteHandler: RouteHandler<
  typeof postV1SimulateAccountHoldersEnrollmentReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulateAccountHoldersEnrollmentDocumentReviewRouteHandler: RouteHandler<
  typeof postV1SimulateAccountHoldersEnrollmentDocumentReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StatusRouteHandler: RouteHandler<typeof getV1StatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ThreeDsAuthenticationSimulateRouteHandler: RouteHandler<
  typeof postV1ThreeDsAuthenticationSimulateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ThreeDsDecisioningSimulateEnterOtpRouteHandler: RouteHandler<
  typeof postV1ThreeDsDecisioningSimulateEnterOtpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ThreeDsAuthenticationThreeDsAuthenticationTokenRouteHandler: RouteHandler<
  typeof getV1ThreeDsAuthenticationThreeDsAuthenticationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ThreeDsDecisioningSecretRouteHandler: RouteHandler<
  typeof getV1ThreeDsDecisioningSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ThreeDsDecisioningSecretRotateRouteHandler: RouteHandler<
  typeof postV1ThreeDsDecisioningSecretRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ThreeDsDecisioningChallengeResponseRouteHandler: RouteHandler<
  typeof postV1ThreeDsDecisioningChallengeResponseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TokenizationDecisioningSecretRouteHandler: RouteHandler<
  typeof getV1TokenizationDecisioningSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokenizationDecisioningSecretRotateRouteHandler: RouteHandler<
  typeof postV1TokenizationDecisioningSecretRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardsCardTokenTokenizationsRouteHandler: RouteHandler<
  typeof postV1CardsCardTokenTokenizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokenizationsTokenizationTokenSelectTfaMethodRouteHandler: RouteHandler<
  typeof postV1TokenizationsTokenizationTokenSelectTfaMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokenizationsTokenizationTokenSubmitTfaRouteHandler: RouteHandler<
  typeof postV1TokenizationsTokenizationTokenSubmitTfaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokenizationsTokenizationTokenPaymentCredentialsRouteHandler: RouteHandler<
  typeof postV1TokenizationsTokenizationTokenPaymentCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TokenizationsRouteHandler: RouteHandler<typeof getV1TokenizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TokenizationsTokenizationTokenRouteHandler: RouteHandler<
  typeof getV1TokenizationsTokenizationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokenizationsTokenizationTokenPauseRouteHandler: RouteHandler<
  typeof postV1TokenizationsTokenizationTokenPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokenizationsTokenizationTokenUnpauseRouteHandler: RouteHandler<
  typeof postV1TokenizationsTokenizationTokenUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokenizationsTokenizationTokenDeactivateRouteHandler: RouteHandler<
  typeof postV1TokenizationsTokenizationTokenDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokenizationsTokenizationTokenActivateRouteHandler: RouteHandler<
  typeof postV1TokenizationsTokenizationTokenActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokenizationsTokenizationTokenResendActivationCodeRouteHandler: RouteHandler<
  typeof postV1TokenizationsTokenizationTokenResendActivationCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TokenizationsTokenizationTokenUpdateDigitalCardArtRouteHandler: RouteHandler<
  typeof postV1TokenizationsTokenizationTokenUpdateDigitalCardArtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionsRouteHandler: RouteHandler<typeof getV1TransactionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TransactionsTransactionTokenRouteHandler: RouteHandler<
  typeof getV1TransactionsTransactionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionMonitoringCasesRouteHandler: RouteHandler<
  typeof getV1TransactionMonitoringCasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionMonitoringCasesCaseTokenRouteHandler: RouteHandler<
  typeof getV1TransactionMonitoringCasesCaseTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1TransactionMonitoringCasesCaseTokenRouteHandler: RouteHandler<
  typeof patchV1TransactionMonitoringCasesCaseTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionMonitoringCasesCaseTokenActivityRouteHandler: RouteHandler<
  typeof getV1TransactionMonitoringCasesCaseTokenActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionMonitoringCasesCaseTokenTransactionsRouteHandler: RouteHandler<
  typeof getV1TransactionMonitoringCasesCaseTokenTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionMonitoringCasesCaseTokenCardsRouteHandler: RouteHandler<
  typeof getV1TransactionMonitoringCasesCaseTokenCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransactionMonitoringCasesCaseTokenCommentsRouteHandler: RouteHandler<
  typeof postV1TransactionMonitoringCasesCaseTokenCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenRouteHandler: RouteHandler<
  typeof patchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenRouteHandler: RouteHandler<
  typeof deleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransactionMonitoringCasesCaseTokenFilesRouteHandler: RouteHandler<
  typeof postV1TransactionMonitoringCasesCaseTokenFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionMonitoringCasesCaseTokenFilesRouteHandler: RouteHandler<
  typeof getV1TransactionMonitoringCasesCaseTokenFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionMonitoringCasesCaseTokenFilesFileTokenRouteHandler: RouteHandler<
  typeof getV1TransactionMonitoringCasesCaseTokenFilesFileTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenRouteHandler: RouteHandler<
  typeof deleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransactionMonitoringQueuesRouteHandler: RouteHandler<
  typeof postV1TransactionMonitoringQueuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionMonitoringQueuesRouteHandler: RouteHandler<
  typeof getV1TransactionMonitoringQueuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionMonitoringQueuesQueueTokenRouteHandler: RouteHandler<
  typeof getV1TransactionMonitoringQueuesQueueTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1TransactionMonitoringQueuesQueueTokenRouteHandler: RouteHandler<
  typeof patchV1TransactionMonitoringQueuesQueueTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TransactionMonitoringQueuesQueueTokenRouteHandler: RouteHandler<
  typeof deleteV1TransactionMonitoringQueuesQueueTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransferRouteHandler: RouteHandler<typeof postV1TransferRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransferLimitsRouteHandler: RouteHandler<
  typeof getV1TransferLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BookTransfersRouteHandler: RouteHandler<typeof getV1BookTransfersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1BookTransfersRouteHandler: RouteHandler<
  typeof postV1BookTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BookTransfersBookTransferTokenRouteHandler: RouteHandler<
  typeof getV1BookTransfersBookTransferTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BookTransfersBookTransferTokenRetryRouteHandler: RouteHandler<
  typeof postV1BookTransfersBookTransferTokenRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BookTransfersBookTransferTokenReverseRouteHandler: RouteHandler<
  typeof postV1BookTransfersBookTransferTokenReverseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExternalPaymentsRouteHandler: RouteHandler<
  typeof getV1ExternalPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalPaymentsRouteHandler: RouteHandler<
  typeof postV1ExternalPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExternalPaymentsExternalPaymentTokenRouteHandler: RouteHandler<
  typeof getV1ExternalPaymentsExternalPaymentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalPaymentsExternalPaymentTokenSettleRouteHandler: RouteHandler<
  typeof postV1ExternalPaymentsExternalPaymentTokenSettleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalPaymentsExternalPaymentTokenReleaseRouteHandler: RouteHandler<
  typeof postV1ExternalPaymentsExternalPaymentTokenReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalPaymentsExternalPaymentTokenCancelRouteHandler: RouteHandler<
  typeof postV1ExternalPaymentsExternalPaymentTokenCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalPaymentsExternalPaymentTokenReverseRouteHandler: RouteHandler<
  typeof postV1ExternalPaymentsExternalPaymentTokenReverseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ManagementOperationsRouteHandler: RouteHandler<
  typeof getV1ManagementOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ManagementOperationsRouteHandler: RouteHandler<
  typeof postV1ManagementOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ManagementOperationsManagementOperationTokenRouteHandler: RouteHandler<
  typeof getV1ManagementOperationsManagementOperationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ManagementOperationsManagementOperationTokenReverseRouteHandler: RouteHandler<
  typeof postV1ManagementOperationsManagementOperationTokenReverseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NetworkProgramsRouteHandler: RouteHandler<
  typeof getV1NetworkProgramsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NetworkProgramsNetworkProgramTokenRouteHandler: RouteHandler<
  typeof getV1NetworkProgramsNetworkProgramTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FundingEventsRouteHandler: RouteHandler<typeof getV1FundingEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1FundingEventsFundingEventTokenRouteHandler: RouteHandler<
  typeof getV1FundingEventsFundingEventTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FundingEventsFundingEventTokenDetailsRouteHandler: RouteHandler<
  typeof getV1FundingEventsFundingEventTokenDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
