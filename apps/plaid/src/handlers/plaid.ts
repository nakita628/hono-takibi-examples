import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFdxConsentsConsentIdRevocationRoute,
  getFdxConsentsConsentIdRoute,
  getFdxConsentsRoute,
  getFdxRecipientRecipientIdRoute,
  getFdxRecipientsRoute,
  postAccountsBalanceGetRoute,
  postAccountsGetRoute,
  postApplicationGetRoute,
  postAssetReportAuditCopyCreateRoute,
  postAssetReportAuditCopyGetRoute,
  postAssetReportAuditCopyPdfGetRoute,
  postAssetReportAuditCopyRemoveRoute,
  postAssetReportCreateRoute,
  postAssetReportFilterRoute,
  postAssetReportGetRoute,
  postAssetReportPdfGetRoute,
  postAssetReportRefreshRoute,
  postAssetReportRemoveRoute,
  postAuthGetRoute,
  postAuthVerifyRoute,
  postBankTransferBalanceGetRoute,
  postBankTransferCancelRoute,
  postBankTransferCreateRoute,
  postBankTransferEventListRoute,
  postBankTransferEventSyncRoute,
  postBankTransferGetRoute,
  postBankTransferListRoute,
  postBankTransferMigrateAccountRoute,
  postBankTransferSweepGetRoute,
  postBankTransferSweepListRoute,
  postBeaconAccountRiskV1EvaluateRoute,
  postBeaconDuplicateGetRoute,
  postBeaconReportCreateRoute,
  postBeaconReportGetRoute,
  postBeaconReportListRoute,
  postBeaconReportSyndicationGetRoute,
  postBeaconReportSyndicationListRoute,
  postBeaconUserAccountInsightsGetRoute,
  postBeaconUserCreateRoute,
  postBeaconUserGetRoute,
  postBeaconUserHistoryListRoute,
  postBeaconUserReviewRoute,
  postBeaconUserUpdateRoute,
  postBetaCashAdvanceIncomeInsightsV1GetRoute,
  postBetaCreditV1BankEmploymentGetRoute,
  postBetaEwaReportV1GetRoute,
  postBetaIssuesV1GetRoute,
  postBetaIssuesV1ListRoute,
  postBetaIssuesV1MatchRoute,
  postBetaIssuesV1SubscribeRoute,
  postBetaIssuesV1UnsubscribeRoute,
  postBetaPartnerCustomerV1CreateRoute,
  postBetaPartnerCustomerV1EnableRoute,
  postBetaPartnerCustomerV1GetRoute,
  postBetaPartnerCustomerV1UpdateRoute,
  postBetaTransactionsRulesV1CreateRoute,
  postBetaTransactionsRulesV1ListRoute,
  postBetaTransactionsRulesV1RemoveRoute,
  postBetaTransactionsUserInsightsV1GetRoute,
  postBetaWebhookEventsListRoute,
  postBusinessVerificationCreateRoute,
  postBusinessVerificationGetRoute,
  postCashflowReportGetRoute,
  postCashflowReportInsightsGetRoute,
  postCashflowReportRefreshRoute,
  postCashflowReportTransactionsGetRoute,
  postCategoriesGetRoute,
  postConsentEventsGetRoute,
  postConsumerReportPdfGetRoute,
  postCraCheckReportBaseReportGetRoute,
  postCraCheckReportCashflowInsightsGetRoute,
  postCraCheckReportCreateRoute,
  postCraCheckReportIncomeInsightsGetRoute,
  postCraCheckReportLendScoreGetRoute,
  postCraCheckReportNetworkInsightsGetRoute,
  postCraCheckReportPartnerInsightsGetRoute,
  postCraCheckReportPdfGetRoute,
  postCraCheckReportVerificationGetRoute,
  postCraCheckReportVerificationPdfGetRoute,
  postCraCreditProfileReportGetRoute,
  postCraLoansApplicationsRegisterRoute,
  postCraLoansRegisterRoute,
  postCraLoansUnregisterRoute,
  postCraLoansUpdateRoute,
  postCraMonitoringInsightsGetRoute,
  postCraMonitoringInsightsSubscribeRoute,
  postCraMonitoringInsightsUnsubscribeRoute,
  postCraPartnerInsightsGetRoute,
  postCraReportCreateRoute,
  postCraReportGetRoute,
  postCraServicingSubscriptionCreateRoute,
  postCraServicingSubscriptionDeleteRoute,
  postCraServicingSubscriptionGetRoute,
  postCraServicingSubscriptionListRoute,
  postCraServicingSubscriptionUpdateRoute,
  postCreditAssetReportFreddieMacGetRoute,
  postCreditAuditCopyTokenCreateRoute,
  postCreditAuditCopyTokenRemoveRoute,
  postCreditAuditCopyTokenUpdateRoute,
  postCreditBankIncomeGetRoute,
  postCreditBankIncomePdfGetRoute,
  postCreditBankIncomeRefreshRoute,
  postCreditBankIncomeWebhookUpdateRoute,
  postCreditBankStatementsUploadsGetRoute,
  postCreditEmploymentGetRoute,
  postCreditFreddieMacReportsGetRoute,
  postCreditPayrollIncomeGetRoute,
  postCreditPayrollIncomeParsingConfigUpdateRoute,
  postCreditPayrollIncomePrecheckRoute,
  postCreditPayrollIncomeRefreshRoute,
  postCreditPayrollIncomeRiskSignalsGetRoute,
  postCreditRelayCreateRoute,
  postCreditRelayGetRoute,
  postCreditRelayPdfGetRoute,
  postCreditRelayRefreshRoute,
  postCreditRelayRemoveRoute,
  postCreditSessionsGetRoute,
  postDashboardUserGetRoute,
  postDashboardUserListRoute,
  postEmployersSearchRoute,
  postEmploymentVerificationGetRoute,
  postFdxNotificationsRoute,
  postIdentityDocumentsUploadsGetRoute,
  postIdentityGetRoute,
  postIdentityMatchListRoute,
  postIdentityMatchRoute,
  postIdentityRefreshRoute,
  postIdentityVerificationAutofillCreateRoute,
  postIdentityVerificationCreateRoute,
  postIdentityVerificationGetRoute,
  postIdentityVerificationListRoute,
  postIdentityVerificationRetryRoute,
  postIncomeVerificationCreateRoute,
  postIncomeVerificationDocumentsDownloadRoute,
  postIncomeVerificationPaystubsGetRoute,
  postIncomeVerificationPrecheckRoute,
  postIncomeVerificationTaxformsGetRoute,
  postInstitutionsGetByIdRoute,
  postInstitutionsGetRoute,
  postInstitutionsSearchRoute,
  postInvestmentsAuthGetRoute,
  postInvestmentsHoldingsGetRoute,
  postInvestmentsRefreshRoute,
  postInvestmentsTransactionsGetRoute,
  postIssuesGetRoute,
  postIssuesSearchRoute,
  postIssuesSubscribeRoute,
  postItemAccessTokenInvalidateRoute,
  postItemActivityListRoute,
  postItemApplicationListRoute,
  postItemApplicationScopesUpdateRoute,
  postItemApplicationUnlinkRoute,
  postItemGetRoute,
  postItemImportRoute,
  postItemProductsTerminateRoute,
  postItemPublicTokenCreateRoute,
  postItemPublicTokenExchangeRoute,
  postItemRemoveRoute,
  postItemWebhookUpdateRoute,
  postLiabilitiesGetRoute,
  postLinkOauthCorrelationIdExchangeRoute,
  postLinkTokenCreateRoute,
  postLinkTokenGetRoute,
  postNetworkStatusGetRoute,
  postOauthIntrospectRoute,
  postOauthRevokeRoute,
  postOauthTokenRoute,
  postPartnerCustomerCreateRoute,
  postPartnerCustomerEnableRoute,
  postPartnerCustomerGetRoute,
  postPartnerCustomerOauthInstitutionsGetRoute,
  postPartnerCustomerRemoveRoute,
  postPaymentInitiationConsentCreateRoute,
  postPaymentInitiationConsentGetRoute,
  postPaymentInitiationConsentPaymentExecuteRoute,
  postPaymentInitiationConsentRevokeRoute,
  postPaymentInitiationPaymentCreateRoute,
  postPaymentInitiationPaymentGetRoute,
  postPaymentInitiationPaymentListRoute,
  postPaymentInitiationPaymentReverseRoute,
  postPaymentInitiationPaymentTokenCreateRoute,
  postPaymentInitiationRecipientCreateRoute,
  postPaymentInitiationRecipientGetRoute,
  postPaymentInitiationRecipientListRoute,
  postPaymentProfileCreateRoute,
  postPaymentProfileGetRoute,
  postPaymentProfileRemoveRoute,
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
  postProfileNetworkStatusGetRoute,
  postProtectCashAdvanceDecisionCreateRoute,
  postProtectCashAdvanceFeedbackUploadRoute,
  postProtectCashAdvanceRepaymentCreateRoute,
  postProtectComputeRoute,
  postProtectEventGetRoute,
  postProtectEventSendRoute,
  postProtectReportCreateRoute,
  postProtectUserInsightsGetRoute,
  postSandboxBankIncomeFireWebhookRoute,
  postSandboxBankTransferFireWebhookRoute,
  postSandboxBankTransferSimulateRoute,
  postSandboxCraCashflowUpdatesUpdateRoute,
  postSandboxCraServicingSimulateRoute,
  postSandboxFdxConsentSeedRoute,
  postSandboxIncomeFireWebhookRoute,
  postSandboxItemApplicationSeedRoute,
  postSandboxItemFireWebhookRoute,
  postSandboxItemResetLoginRoute,
  postSandboxItemSetVerificationStatusRoute,
  postSandboxOauthSelectAccountsRoute,
  postSandboxPaymentProfileResetLoginRoute,
  postSandboxPaymentSimulateRoute,
  postSandboxProcessorTokenCreateRoute,
  postSandboxPublicTokenCreateRoute,
  postSandboxTransactionsCreateRoute,
  postSandboxTransferFireWebhookRoute,
  postSandboxTransferLedgerDepositSimulateRoute,
  postSandboxTransferLedgerSimulateAvailableRoute,
  postSandboxTransferLedgerWithdrawSimulateRoute,
  postSandboxTransferRefundSimulateRoute,
  postSandboxTransferSimulateRoute,
  postSandboxTransferSweepSimulateRoute,
  postSandboxTransferTestClockAdvanceRoute,
  postSandboxTransferTestClockCreateRoute,
  postSandboxTransferTestClockGetRoute,
  postSandboxTransferTestClockListRoute,
  postSandboxUserFireWebhookRoute,
  postSandboxUserResetLoginRoute,
  postSessionTokenCreateRoute,
  postSignalDecisionReportRoute,
  postSignalEvaluateRoute,
  postSignalPrepareRoute,
  postSignalReturnReportRoute,
  postSignalScheduleRoute,
  postStatementsDownloadRoute,
  postStatementsListRoute,
  postStatementsRefreshRoute,
  postTransactionsEnrichRoute,
  postTransactionsGetRoute,
  postTransactionsRecurringGetRoute,
  postTransactionsRefreshRoute,
  postTransactionsSyncRoute,
  postTransferAuthorizationCancelRoute,
  postTransferAuthorizationCreateRoute,
  postTransferBalanceGetRoute,
  postTransferCancelRoute,
  postTransferCapabilitiesGetRoute,
  postTransferConfigurationGetRoute,
  postTransferCreateRoute,
  postTransferDiligenceDocumentUploadRoute,
  postTransferDiligenceSubmitRoute,
  postTransferEventListRoute,
  postTransferEventSyncRoute,
  postTransferGetRoute,
  postTransferIntentCreateRoute,
  postTransferIntentGetRoute,
  postTransferLedgerDepositRoute,
  postTransferLedgerDistributeRoute,
  postTransferLedgerEventListRoute,
  postTransferLedgerGetRoute,
  postTransferLedgerWithdrawRoute,
  postTransferListRoute,
  postTransferMetricsGetRoute,
  postTransferMigrateAccountRoute,
  postTransferOriginatorCreateRoute,
  postTransferOriginatorFundingAccountCreateRoute,
  postTransferOriginatorFundingAccountUpdateRoute,
  postTransferOriginatorGetRoute,
  postTransferOriginatorListRoute,
  postTransferPlatformOriginatorCreateRoute,
  postTransferPlatformPersonCreateRoute,
  postTransferPlatformRequirementSubmitRoute,
  postTransferQuestionnaireCreateRoute,
  postTransferRecurringCancelRoute,
  postTransferRecurringCreateRoute,
  postTransferRecurringGetRoute,
  postTransferRecurringListRoute,
  postTransferRefundCancelRoute,
  postTransferRefundCreateRoute,
  postTransferRefundGetRoute,
  postTransferRepaymentListRoute,
  postTransferRepaymentReturnListRoute,
  postTransferReturnRecoverRoute,
  postTransferSweepGetRoute,
  postTransferSweepListRoute,
  postUserAccountSessionEventSendRoute,
  postUserAccountSessionGetRoute,
  postUserCreateRoute,
  postUserFinancialDataRefreshRoute,
  postUserGetRoute,
  postUserIdentityRemoveRoute,
  postUserItemsAssociateRoute,
  postUserItemsGetRoute,
  postUserItemsRemoveRoute,
  postUserProductsTerminateRoute,
  postUserRemoveRoute,
  postUserThirdPartyTokenCreateRoute,
  postUserThirdPartyTokenRemoveRoute,
  postUserTransactionsRefreshRoute,
  postUserTransferLimitsGetRoute,
  postUserUpdateRoute,
  postWalletCreateRoute,
  postWalletGetRoute,
  postWalletListRoute,
  postWalletTransactionExecuteRoute,
  postWalletTransactionGetRoute,
  postWalletTransactionListRoute,
  postWatchlistScreeningEntityCreateRoute,
  postWatchlistScreeningEntityGetRoute,
  postWatchlistScreeningEntityHistoryListRoute,
  postWatchlistScreeningEntityHitListRoute,
  postWatchlistScreeningEntityListRoute,
  postWatchlistScreeningEntityProgramGetRoute,
  postWatchlistScreeningEntityProgramListRoute,
  postWatchlistScreeningEntityReviewCreateRoute,
  postWatchlistScreeningEntityReviewListRoute,
  postWatchlistScreeningEntityUpdateRoute,
  postWatchlistScreeningIndividualCreateRoute,
  postWatchlistScreeningIndividualGetRoute,
  postWatchlistScreeningIndividualHistoryListRoute,
  postWatchlistScreeningIndividualHitListRoute,
  postWatchlistScreeningIndividualListRoute,
  postWatchlistScreeningIndividualProgramGetRoute,
  postWatchlistScreeningIndividualProgramListRoute,
  postWatchlistScreeningIndividualReviewCreateRoute,
  postWatchlistScreeningIndividualReviewListRoute,
  postWatchlistScreeningIndividualUpdateRoute,
  postWebhookVerificationKeyGetRoute,
  putFdxConsentsConsentIdRevocationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const plaidHandler = app
  .openapi(postAssetReportCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportPdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportAuditCopyCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportAuditCopyGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportAuditCopyPdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetReportAuditCopyRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraMonitoringInsightsSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraMonitoringInsightsUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraMonitoringInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditAuditCopyTokenUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraPartnerInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportIncomeInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportBaseReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportPdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportPartnerInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportCashflowInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportLendScoreGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportNetworkInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportVerificationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCheckReportVerificationPdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraLoansApplicationsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraLoansRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraLoansUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraLoansUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraServicingSubscriptionCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraServicingSubscriptionDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraServicingSubscriptionGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraServicingSubscriptionListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraServicingSubscriptionUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraReportCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCraCreditProfileReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumerReportPdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthIntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatementsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatementsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatementsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsentEventsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemActivityListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemApplicationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemApplicationUnlinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemApplicationScopesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserAccountSessionGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserAccountSessionEventSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfileNetworkStatusGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkStatusGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransactionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCashflowReportRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCashflowReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCashflowReportTransactionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCashflowReportInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsRecurringGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsEnrichRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserTransactionsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserFinancialDataRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstitutionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstitutionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstitutionsGetByIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemProductsTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxProcessorTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxPublicTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxUserFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsBalanceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityDocumentsUploadsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMatchListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardUserGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardUserListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityVerificationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityVerificationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityVerificationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityVerificationRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityHistoryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityHitListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityProgramGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityProgramListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityReviewCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityReviewListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualHistoryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualHitListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualProgramGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualProgramListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualReviewCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualReviewListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconAccountRiskV1EvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconReportCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconReportListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconReportSyndicationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconReportSyndicationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconDuplicateGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityVerificationAutofillCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserHistoryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserAccountInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectUserInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectReportCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectCashAdvanceDecisionCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectCashAdvanceRepaymentCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectCashAdvanceFeedbackUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectComputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectEventSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectEventGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessVerificationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessVerificationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postItemWebhookUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemAccessTokenInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaWebhookEventsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookVerificationKeyGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiabilitiesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationRecipientCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationPaymentReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationRecipientGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationRecipientListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationPaymentCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationPaymentTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationConsentCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationConsentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationConsentRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationConsentPaymentExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemResetLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemApplicationSeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxFdxConsentSeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxItemSetVerificationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxUserResetLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemPublicTokenExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemPublicTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdentityRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserProductsTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserTransferLimitsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserItemsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserItemsAssociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserItemsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserThirdPartyTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserThirdPartyTokenRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditSessionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationPaymentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInitiationPaymentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvestmentsHoldingsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvestmentsTransactionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvestmentsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvestmentsAuthGetRoute, (c) => {
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
  .openapi(postItemImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinkTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinkTokenGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinkOauthCorrelationIdExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferAuthorizationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferAuthorizationCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferBalanceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferCapabilitiesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferConfigurationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferLedgerGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferLedgerDistributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferLedgerDepositRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferLedgerWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorFundingAccountUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorFundingAccountCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferMetricsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferEventListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferLedgerEventListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferEventListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferEventSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferEventSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferSweepGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferSweepGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferSweepListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferSweepListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferBalanceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransferMigrateAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferMigrateAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferIntentCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferIntentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRepaymentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRepaymentReturnListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferPlatformRequirementSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferQuestionnaireCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferDiligenceSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferDiligenceDocumentUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRefundCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferReturnRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRefundGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRefundCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferPlatformOriginatorCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferPlatformPersonCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxBankTransferSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferSweepSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferRefundSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferLedgerSimulateAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferLedgerDepositSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferLedgerWithdrawSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxTransferTestClockListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxPaymentProfileResetLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxPaymentSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncomeVerificationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncomeVerificationPaystubsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncomeVerificationDocumentsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncomeVerificationTaxformsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncomeVerificationPrecheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmploymentVerificationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditAuditCopyTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditAuditCopyTokenRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditAssetReportFreddieMacGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditFreddieMacReportsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaCreditV1BankEmploymentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditBankIncomeGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditBankIncomePdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditBankIncomeRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditBankIncomeWebhookUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditPayrollIncomeParsingConfigUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditBankStatementsUploadsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditPayrollIncomeGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditPayrollIncomeRiskSignalsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditPayrollIncomePrecheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditEmploymentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditPayrollIncomeRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditRelayCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditRelayGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditRelayPdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditRelayRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditRelayRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxBankTransferFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxIncomeFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxBankIncomeFireWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxCraCashflowUpdatesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxCraServicingSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxOauthSelectAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignalEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignalScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignalDecisionReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignalReturnReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignalPrepareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletTransactionExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletTransactionGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletTransactionListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsRulesV1CreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsRulesV1ListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsRulesV1RemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaTransactionsUserInsightsV1GetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaEwaReportV1GetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaCashAdvanceIncomeInsightsV1GetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaIssuesV1GetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaIssuesV1ListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaIssuesV1MatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaIssuesV1SubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaIssuesV1UnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssuesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssuesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssuesSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentProfileCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentProfileGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentProfileRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerCustomerCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerCustomerGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerCustomerEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerCustomerRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartnerCustomerOauthInstitutionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaPartnerCustomerV1CreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaPartnerCustomerV1GetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaPartnerCustomerV1UpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBetaPartnerCustomerV1EnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFdxNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFdxRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFdxConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFdxConsentsConsentIdRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFdxConsentsConsentIdRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFdxConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFdxRecipientRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
