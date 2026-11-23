import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccountHoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountHoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountHoldersAccountHolderTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AccountHoldersAccountHolderTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountHoldersAccountHolderTokenDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountHoldersAccountHolderTokenDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountHoldersAccountHolderTokenEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AccountsAccountTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountTokenSpendLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardsCardTokenSignalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountTokenSignalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AuthStreamSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthStreamSecretRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardProgramsCardProgramTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsSearchByPanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardsCardTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CardsCardTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardsCardTokenBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardsCardTokenFinancialTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardTokenProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardTokenWebProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardTokenReissueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardTokenRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardTokenReassignAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardTokenConvertPhysicalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardsCardTokenSpendLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardTokenEmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardAuthorizationsEventTokenChallengeResponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardBulkOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardBulkOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardBulkOrdersBulkOrderTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CardBulkOrdersBulkOrderTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DigitalCardArtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DigitalCardArtDigitalCardArtTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DisputesDisputeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DisputesDisputeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DisputesDisputeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DisputesDisputeTokenEvidencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DisputesDisputeTokenEvidencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DisputesDisputeTokenEvidencesEvidenceTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DisputesDisputeTokenEvidencesEvidenceTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmbedCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FraudTransactionsTransactionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FraudTransactionsTransactionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsTransactionTokenEnhancedCommercialDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransactionsTransactionTokenExpireAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransactionsTransactionTokenRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsEventsEventTokenEnhancedCommercialDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EventSubscriptionsEventSubscriptionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventSubscriptionsEventSubscriptionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EventSubscriptionsEventSubscriptionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventSubscriptionsEventSubscriptionTokenAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventSubscriptionsEventSubscriptionTokenRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventSubscriptionsEventSubscriptionTokenReplayMissingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventSubscriptionsEventSubscriptionTokenSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventSubscriptionsEventSubscriptionTokenSecretRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsEventTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsEventTokenAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BlockchainRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BlockchainRecipientsBlockchainRecipientTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExternalBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExternalBankAccountsExternalBankAccountTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ExternalBankAccountsExternalBankAccountTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalBankAccountsExternalBankAccountTokenPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalBankAccountsExternalBankAccountTokenUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditProductsCreditProductTokenExtendedCreditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditProductsCreditProductTokenPrimeRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditProductsCreditProductTokenPrimeRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FinancialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1FinancialAccountsFinancialAccountTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenOpenToBuyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenCreditConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1FinancialAccountsFinancialAccountTokenCreditConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FinancialAccountsFinancialAccountTokenHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HoldsHoldTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HoldsHoldTokenVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1FinancialAccountsFinancialAccountTokenLoanTapesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinancialAccountsFinancialAccountTokenInstallmentPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FinancialAccountsFinancialAccountTokenInterestTierScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1FinancialAccountsFinancialAccountTokenUpdateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountActivityTransactionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsStablecoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsPaymentTokenRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsPaymentTokenReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportsSettlementDetailsReportDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportsSettlementSummaryReportDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportsSettlementNetworkTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportsSettlementNetworkTotalsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ResponderEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResponderEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResponderEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IpRangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateAuthorizationAdviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateClearingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateCreditAuthorizationAdviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulatePaymentsReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulatePaymentsReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulatePaymentsReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulatePaymentsPaymentTokenActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateReturnReversalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateTokenizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateAccountHoldersEnrollmentReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimulateAccountHoldersEnrollmentDocumentReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ThreeDsAuthenticationSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ThreeDsDecisioningSimulateEnterOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ThreeDsAuthenticationThreeDsAuthenticationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ThreeDsDecisioningSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ThreeDsDecisioningSecretRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ThreeDsDecisioningChallengeResponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokenizationDecisioningSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizationDecisioningSecretRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardTokenTokenizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizationsTokenizationTokenSelectTfaMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizationsTokenizationTokenSubmitTfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizationsTokenizationTokenPaymentCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokenizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokenizationsTokenizationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizationsTokenizationTokenPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizationsTokenizationTokenUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizationsTokenizationTokenDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizationsTokenizationTokenActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizationsTokenizationTokenResendActivationCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizationsTokenizationTokenUpdateDigitalCardArtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsTransactionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionMonitoringCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionMonitoringCasesCaseTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TransactionMonitoringCasesCaseTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionMonitoringCasesCaseTokenActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionMonitoringCasesCaseTokenTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionMonitoringCasesCaseTokenCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransactionMonitoringCasesCaseTokenCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransactionMonitoringCasesCaseTokenFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionMonitoringCasesCaseTokenFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionMonitoringCasesCaseTokenFilesFileTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransactionMonitoringQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionMonitoringQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionMonitoringQueuesQueueTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TransactionMonitoringQueuesQueueTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TransactionMonitoringQueuesQueueTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransferLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BookTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BookTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BookTransfersBookTransferTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BookTransfersBookTransferTokenRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BookTransfersBookTransferTokenReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExternalPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExternalPaymentsExternalPaymentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalPaymentsExternalPaymentTokenSettleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalPaymentsExternalPaymentTokenReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalPaymentsExternalPaymentTokenCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExternalPaymentsExternalPaymentTokenReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ManagementOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ManagementOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ManagementOperationsManagementOperationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ManagementOperationsManagementOperationTokenReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NetworkProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NetworkProgramsNetworkProgramTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FundingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FundingEventsFundingEventTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FundingEventsFundingEventTokenDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
