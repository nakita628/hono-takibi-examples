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
} from './routes'
import {
  getFdxConsentsConsentIdRevocationRouteHandler,
  getFdxConsentsConsentIdRouteHandler,
  getFdxConsentsRouteHandler,
  getFdxRecipientRecipientIdRouteHandler,
  getFdxRecipientsRouteHandler,
  postAccountsBalanceGetRouteHandler,
  postAccountsGetRouteHandler,
  postApplicationGetRouteHandler,
  postAssetReportAuditCopyCreateRouteHandler,
  postAssetReportAuditCopyGetRouteHandler,
  postAssetReportAuditCopyPdfGetRouteHandler,
  postAssetReportAuditCopyRemoveRouteHandler,
  postAssetReportCreateRouteHandler,
  postAssetReportFilterRouteHandler,
  postAssetReportGetRouteHandler,
  postAssetReportPdfGetRouteHandler,
  postAssetReportRefreshRouteHandler,
  postAssetReportRemoveRouteHandler,
  postAuthGetRouteHandler,
  postAuthVerifyRouteHandler,
  postBankTransferBalanceGetRouteHandler,
  postBankTransferCancelRouteHandler,
  postBankTransferCreateRouteHandler,
  postBankTransferEventListRouteHandler,
  postBankTransferEventSyncRouteHandler,
  postBankTransferGetRouteHandler,
  postBankTransferListRouteHandler,
  postBankTransferMigrateAccountRouteHandler,
  postBankTransferSweepGetRouteHandler,
  postBankTransferSweepListRouteHandler,
  postBeaconAccountRiskV1EvaluateRouteHandler,
  postBeaconDuplicateGetRouteHandler,
  postBeaconReportCreateRouteHandler,
  postBeaconReportGetRouteHandler,
  postBeaconReportListRouteHandler,
  postBeaconReportSyndicationGetRouteHandler,
  postBeaconReportSyndicationListRouteHandler,
  postBeaconUserAccountInsightsGetRouteHandler,
  postBeaconUserCreateRouteHandler,
  postBeaconUserGetRouteHandler,
  postBeaconUserHistoryListRouteHandler,
  postBeaconUserReviewRouteHandler,
  postBeaconUserUpdateRouteHandler,
  postBetaCashAdvanceIncomeInsightsV1GetRouteHandler,
  postBetaCreditV1BankEmploymentGetRouteHandler,
  postBetaEwaReportV1GetRouteHandler,
  postBetaIssuesV1GetRouteHandler,
  postBetaIssuesV1ListRouteHandler,
  postBetaIssuesV1MatchRouteHandler,
  postBetaIssuesV1SubscribeRouteHandler,
  postBetaIssuesV1UnsubscribeRouteHandler,
  postBetaPartnerCustomerV1CreateRouteHandler,
  postBetaPartnerCustomerV1EnableRouteHandler,
  postBetaPartnerCustomerV1GetRouteHandler,
  postBetaPartnerCustomerV1UpdateRouteHandler,
  postBetaTransactionsRulesV1CreateRouteHandler,
  postBetaTransactionsRulesV1ListRouteHandler,
  postBetaTransactionsRulesV1RemoveRouteHandler,
  postBetaTransactionsUserInsightsV1GetRouteHandler,
  postBetaWebhookEventsListRouteHandler,
  postBusinessVerificationCreateRouteHandler,
  postBusinessVerificationGetRouteHandler,
  postCashflowReportGetRouteHandler,
  postCashflowReportInsightsGetRouteHandler,
  postCashflowReportRefreshRouteHandler,
  postCashflowReportTransactionsGetRouteHandler,
  postCategoriesGetRouteHandler,
  postConsentEventsGetRouteHandler,
  postConsumerReportPdfGetRouteHandler,
  postCraCheckReportBaseReportGetRouteHandler,
  postCraCheckReportCashflowInsightsGetRouteHandler,
  postCraCheckReportCreateRouteHandler,
  postCraCheckReportIncomeInsightsGetRouteHandler,
  postCraCheckReportLendScoreGetRouteHandler,
  postCraCheckReportNetworkInsightsGetRouteHandler,
  postCraCheckReportPartnerInsightsGetRouteHandler,
  postCraCheckReportPdfGetRouteHandler,
  postCraCheckReportVerificationGetRouteHandler,
  postCraCheckReportVerificationPdfGetRouteHandler,
  postCraCreditProfileReportGetRouteHandler,
  postCraLoansApplicationsRegisterRouteHandler,
  postCraLoansRegisterRouteHandler,
  postCraLoansUnregisterRouteHandler,
  postCraLoansUpdateRouteHandler,
  postCraMonitoringInsightsGetRouteHandler,
  postCraMonitoringInsightsSubscribeRouteHandler,
  postCraMonitoringInsightsUnsubscribeRouteHandler,
  postCraPartnerInsightsGetRouteHandler,
  postCraReportCreateRouteHandler,
  postCraReportGetRouteHandler,
  postCraServicingSubscriptionCreateRouteHandler,
  postCraServicingSubscriptionDeleteRouteHandler,
  postCraServicingSubscriptionGetRouteHandler,
  postCraServicingSubscriptionListRouteHandler,
  postCraServicingSubscriptionUpdateRouteHandler,
  postCreditAssetReportFreddieMacGetRouteHandler,
  postCreditAuditCopyTokenCreateRouteHandler,
  postCreditAuditCopyTokenRemoveRouteHandler,
  postCreditAuditCopyTokenUpdateRouteHandler,
  postCreditBankIncomeGetRouteHandler,
  postCreditBankIncomePdfGetRouteHandler,
  postCreditBankIncomeRefreshRouteHandler,
  postCreditBankIncomeWebhookUpdateRouteHandler,
  postCreditBankStatementsUploadsGetRouteHandler,
  postCreditEmploymentGetRouteHandler,
  postCreditFreddieMacReportsGetRouteHandler,
  postCreditPayrollIncomeGetRouteHandler,
  postCreditPayrollIncomeParsingConfigUpdateRouteHandler,
  postCreditPayrollIncomePrecheckRouteHandler,
  postCreditPayrollIncomeRefreshRouteHandler,
  postCreditPayrollIncomeRiskSignalsGetRouteHandler,
  postCreditRelayCreateRouteHandler,
  postCreditRelayGetRouteHandler,
  postCreditRelayPdfGetRouteHandler,
  postCreditRelayRefreshRouteHandler,
  postCreditRelayRemoveRouteHandler,
  postCreditSessionsGetRouteHandler,
  postDashboardUserGetRouteHandler,
  postDashboardUserListRouteHandler,
  postEmployersSearchRouteHandler,
  postEmploymentVerificationGetRouteHandler,
  postFdxNotificationsRouteHandler,
  postIdentityDocumentsUploadsGetRouteHandler,
  postIdentityGetRouteHandler,
  postIdentityMatchListRouteHandler,
  postIdentityMatchRouteHandler,
  postIdentityRefreshRouteHandler,
  postIdentityVerificationAutofillCreateRouteHandler,
  postIdentityVerificationCreateRouteHandler,
  postIdentityVerificationGetRouteHandler,
  postIdentityVerificationListRouteHandler,
  postIdentityVerificationRetryRouteHandler,
  postIncomeVerificationCreateRouteHandler,
  postIncomeVerificationDocumentsDownloadRouteHandler,
  postIncomeVerificationPaystubsGetRouteHandler,
  postIncomeVerificationPrecheckRouteHandler,
  postIncomeVerificationTaxformsGetRouteHandler,
  postInstitutionsGetByIdRouteHandler,
  postInstitutionsGetRouteHandler,
  postInstitutionsSearchRouteHandler,
  postInvestmentsAuthGetRouteHandler,
  postInvestmentsHoldingsGetRouteHandler,
  postInvestmentsRefreshRouteHandler,
  postInvestmentsTransactionsGetRouteHandler,
  postIssuesGetRouteHandler,
  postIssuesSearchRouteHandler,
  postIssuesSubscribeRouteHandler,
  postItemAccessTokenInvalidateRouteHandler,
  postItemActivityListRouteHandler,
  postItemApplicationListRouteHandler,
  postItemApplicationScopesUpdateRouteHandler,
  postItemApplicationUnlinkRouteHandler,
  postItemGetRouteHandler,
  postItemImportRouteHandler,
  postItemProductsTerminateRouteHandler,
  postItemPublicTokenCreateRouteHandler,
  postItemPublicTokenExchangeRouteHandler,
  postItemRemoveRouteHandler,
  postItemWebhookUpdateRouteHandler,
  postLiabilitiesGetRouteHandler,
  postLinkOauthCorrelationIdExchangeRouteHandler,
  postLinkTokenCreateRouteHandler,
  postLinkTokenGetRouteHandler,
  postNetworkStatusGetRouteHandler,
  postOauthIntrospectRouteHandler,
  postOauthRevokeRouteHandler,
  postOauthTokenRouteHandler,
  postPartnerCustomerCreateRouteHandler,
  postPartnerCustomerEnableRouteHandler,
  postPartnerCustomerGetRouteHandler,
  postPartnerCustomerOauthInstitutionsGetRouteHandler,
  postPartnerCustomerRemoveRouteHandler,
  postPaymentInitiationConsentCreateRouteHandler,
  postPaymentInitiationConsentGetRouteHandler,
  postPaymentInitiationConsentPaymentExecuteRouteHandler,
  postPaymentInitiationConsentRevokeRouteHandler,
  postPaymentInitiationPaymentCreateRouteHandler,
  postPaymentInitiationPaymentGetRouteHandler,
  postPaymentInitiationPaymentListRouteHandler,
  postPaymentInitiationPaymentReverseRouteHandler,
  postPaymentInitiationPaymentTokenCreateRouteHandler,
  postPaymentInitiationRecipientCreateRouteHandler,
  postPaymentInitiationRecipientGetRouteHandler,
  postPaymentInitiationRecipientListRouteHandler,
  postPaymentProfileCreateRouteHandler,
  postPaymentProfileGetRouteHandler,
  postPaymentProfileRemoveRouteHandler,
  postProcessorAccountGetRouteHandler,
  postProcessorApexProcessorTokenCreateRouteHandler,
  postProcessorAuthGetRouteHandler,
  postProcessorBalanceGetRouteHandler,
  postProcessorBankTransferCreateRouteHandler,
  postProcessorIdentityGetRouteHandler,
  postProcessorIdentityMatchRouteHandler,
  postProcessorInvestmentsAuthGetRouteHandler,
  postProcessorInvestmentsHoldingsGetRouteHandler,
  postProcessorInvestmentsTransactionsGetRouteHandler,
  postProcessorLiabilitiesGetRouteHandler,
  postProcessorSignalDecisionReportRouteHandler,
  postProcessorSignalEvaluateRouteHandler,
  postProcessorSignalPrepareRouteHandler,
  postProcessorSignalReturnReportRouteHandler,
  postProcessorStripeBankAccountTokenCreateRouteHandler,
  postProcessorTokenCreateRouteHandler,
  postProcessorTokenPermissionsGetRouteHandler,
  postProcessorTokenPermissionsSetRouteHandler,
  postProcessorTokenWebhookUpdateRouteHandler,
  postProcessorTransactionsGetRouteHandler,
  postProcessorTransactionsRecurringGetRouteHandler,
  postProcessorTransactionsRefreshRouteHandler,
  postProcessorTransactionsSyncRouteHandler,
  postProfileNetworkStatusGetRouteHandler,
  postProtectCashAdvanceDecisionCreateRouteHandler,
  postProtectCashAdvanceFeedbackUploadRouteHandler,
  postProtectCashAdvanceRepaymentCreateRouteHandler,
  postProtectComputeRouteHandler,
  postProtectEventGetRouteHandler,
  postProtectEventSendRouteHandler,
  postProtectReportCreateRouteHandler,
  postProtectUserInsightsGetRouteHandler,
  postSandboxBankIncomeFireWebhookRouteHandler,
  postSandboxBankTransferFireWebhookRouteHandler,
  postSandboxBankTransferSimulateRouteHandler,
  postSandboxCraCashflowUpdatesUpdateRouteHandler,
  postSandboxCraServicingSimulateRouteHandler,
  postSandboxFdxConsentSeedRouteHandler,
  postSandboxIncomeFireWebhookRouteHandler,
  postSandboxItemApplicationSeedRouteHandler,
  postSandboxItemFireWebhookRouteHandler,
  postSandboxItemResetLoginRouteHandler,
  postSandboxItemSetVerificationStatusRouteHandler,
  postSandboxOauthSelectAccountsRouteHandler,
  postSandboxPaymentProfileResetLoginRouteHandler,
  postSandboxPaymentSimulateRouteHandler,
  postSandboxProcessorTokenCreateRouteHandler,
  postSandboxPublicTokenCreateRouteHandler,
  postSandboxTransactionsCreateRouteHandler,
  postSandboxTransferFireWebhookRouteHandler,
  postSandboxTransferLedgerDepositSimulateRouteHandler,
  postSandboxTransferLedgerSimulateAvailableRouteHandler,
  postSandboxTransferLedgerWithdrawSimulateRouteHandler,
  postSandboxTransferRefundSimulateRouteHandler,
  postSandboxTransferSimulateRouteHandler,
  postSandboxTransferSweepSimulateRouteHandler,
  postSandboxTransferTestClockAdvanceRouteHandler,
  postSandboxTransferTestClockCreateRouteHandler,
  postSandboxTransferTestClockGetRouteHandler,
  postSandboxTransferTestClockListRouteHandler,
  postSandboxUserFireWebhookRouteHandler,
  postSandboxUserResetLoginRouteHandler,
  postSessionTokenCreateRouteHandler,
  postSignalDecisionReportRouteHandler,
  postSignalEvaluateRouteHandler,
  postSignalPrepareRouteHandler,
  postSignalReturnReportRouteHandler,
  postSignalScheduleRouteHandler,
  postStatementsDownloadRouteHandler,
  postStatementsListRouteHandler,
  postStatementsRefreshRouteHandler,
  postTransactionsEnrichRouteHandler,
  postTransactionsGetRouteHandler,
  postTransactionsRecurringGetRouteHandler,
  postTransactionsRefreshRouteHandler,
  postTransactionsSyncRouteHandler,
  postTransferAuthorizationCancelRouteHandler,
  postTransferAuthorizationCreateRouteHandler,
  postTransferBalanceGetRouteHandler,
  postTransferCancelRouteHandler,
  postTransferCapabilitiesGetRouteHandler,
  postTransferConfigurationGetRouteHandler,
  postTransferCreateRouteHandler,
  postTransferDiligenceDocumentUploadRouteHandler,
  postTransferDiligenceSubmitRouteHandler,
  postTransferEventListRouteHandler,
  postTransferEventSyncRouteHandler,
  postTransferGetRouteHandler,
  postTransferIntentCreateRouteHandler,
  postTransferIntentGetRouteHandler,
  postTransferLedgerDepositRouteHandler,
  postTransferLedgerDistributeRouteHandler,
  postTransferLedgerEventListRouteHandler,
  postTransferLedgerGetRouteHandler,
  postTransferLedgerWithdrawRouteHandler,
  postTransferListRouteHandler,
  postTransferMetricsGetRouteHandler,
  postTransferMigrateAccountRouteHandler,
  postTransferOriginatorCreateRouteHandler,
  postTransferOriginatorFundingAccountCreateRouteHandler,
  postTransferOriginatorFundingAccountUpdateRouteHandler,
  postTransferOriginatorGetRouteHandler,
  postTransferOriginatorListRouteHandler,
  postTransferPlatformOriginatorCreateRouteHandler,
  postTransferPlatformPersonCreateRouteHandler,
  postTransferPlatformRequirementSubmitRouteHandler,
  postTransferQuestionnaireCreateRouteHandler,
  postTransferRecurringCancelRouteHandler,
  postTransferRecurringCreateRouteHandler,
  postTransferRecurringGetRouteHandler,
  postTransferRecurringListRouteHandler,
  postTransferRefundCancelRouteHandler,
  postTransferRefundCreateRouteHandler,
  postTransferRefundGetRouteHandler,
  postTransferRepaymentListRouteHandler,
  postTransferRepaymentReturnListRouteHandler,
  postTransferReturnRecoverRouteHandler,
  postTransferSweepGetRouteHandler,
  postTransferSweepListRouteHandler,
  postUserAccountSessionEventSendRouteHandler,
  postUserAccountSessionGetRouteHandler,
  postUserCreateRouteHandler,
  postUserFinancialDataRefreshRouteHandler,
  postUserGetRouteHandler,
  postUserIdentityRemoveRouteHandler,
  postUserItemsAssociateRouteHandler,
  postUserItemsGetRouteHandler,
  postUserItemsRemoveRouteHandler,
  postUserProductsTerminateRouteHandler,
  postUserRemoveRouteHandler,
  postUserThirdPartyTokenCreateRouteHandler,
  postUserThirdPartyTokenRemoveRouteHandler,
  postUserTransactionsRefreshRouteHandler,
  postUserTransferLimitsGetRouteHandler,
  postUserUpdateRouteHandler,
  postWalletCreateRouteHandler,
  postWalletGetRouteHandler,
  postWalletListRouteHandler,
  postWalletTransactionExecuteRouteHandler,
  postWalletTransactionGetRouteHandler,
  postWalletTransactionListRouteHandler,
  postWatchlistScreeningEntityCreateRouteHandler,
  postWatchlistScreeningEntityGetRouteHandler,
  postWatchlistScreeningEntityHistoryListRouteHandler,
  postWatchlistScreeningEntityHitListRouteHandler,
  postWatchlistScreeningEntityListRouteHandler,
  postWatchlistScreeningEntityProgramGetRouteHandler,
  postWatchlistScreeningEntityProgramListRouteHandler,
  postWatchlistScreeningEntityReviewCreateRouteHandler,
  postWatchlistScreeningEntityReviewListRouteHandler,
  postWatchlistScreeningEntityUpdateRouteHandler,
  postWatchlistScreeningIndividualCreateRouteHandler,
  postWatchlistScreeningIndividualGetRouteHandler,
  postWatchlistScreeningIndividualHistoryListRouteHandler,
  postWatchlistScreeningIndividualHitListRouteHandler,
  postWatchlistScreeningIndividualListRouteHandler,
  postWatchlistScreeningIndividualProgramGetRouteHandler,
  postWatchlistScreeningIndividualProgramListRouteHandler,
  postWatchlistScreeningIndividualReviewCreateRouteHandler,
  postWatchlistScreeningIndividualReviewListRouteHandler,
  postWatchlistScreeningIndividualUpdateRouteHandler,
  postWebhookVerificationKeyGetRouteHandler,
  putFdxConsentsConsentIdRevocationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAssetReportCreateRoute, postAssetReportCreateRouteHandler)
  .openapi(postAssetReportGetRoute, postAssetReportGetRouteHandler)
  .openapi(postAssetReportPdfGetRoute, postAssetReportPdfGetRouteHandler)
  .openapi(postAssetReportRefreshRoute, postAssetReportRefreshRouteHandler)
  .openapi(postAssetReportFilterRoute, postAssetReportFilterRouteHandler)
  .openapi(postAssetReportRemoveRoute, postAssetReportRemoveRouteHandler)
  .openapi(postAssetReportAuditCopyCreateRoute, postAssetReportAuditCopyCreateRouteHandler)
  .openapi(postAssetReportAuditCopyGetRoute, postAssetReportAuditCopyGetRouteHandler)
  .openapi(postAssetReportAuditCopyPdfGetRoute, postAssetReportAuditCopyPdfGetRouteHandler)
  .openapi(postAssetReportAuditCopyRemoveRoute, postAssetReportAuditCopyRemoveRouteHandler)
  .openapi(postCraMonitoringInsightsSubscribeRoute, postCraMonitoringInsightsSubscribeRouteHandler)
  .openapi(
    postCraMonitoringInsightsUnsubscribeRoute,
    postCraMonitoringInsightsUnsubscribeRouteHandler,
  )
  .openapi(postCraMonitoringInsightsGetRoute, postCraMonitoringInsightsGetRouteHandler)
  .openapi(postCreditAuditCopyTokenUpdateRoute, postCreditAuditCopyTokenUpdateRouteHandler)
  .openapi(postCraPartnerInsightsGetRoute, postCraPartnerInsightsGetRouteHandler)
  .openapi(
    postCraCheckReportIncomeInsightsGetRoute,
    postCraCheckReportIncomeInsightsGetRouteHandler,
  )
  .openapi(postCraCheckReportBaseReportGetRoute, postCraCheckReportBaseReportGetRouteHandler)
  .openapi(postCraCheckReportPdfGetRoute, postCraCheckReportPdfGetRouteHandler)
  .openapi(postCraCheckReportCreateRoute, postCraCheckReportCreateRouteHandler)
  .openapi(
    postCraCheckReportPartnerInsightsGetRoute,
    postCraCheckReportPartnerInsightsGetRouteHandler,
  )
  .openapi(
    postCraCheckReportCashflowInsightsGetRoute,
    postCraCheckReportCashflowInsightsGetRouteHandler,
  )
  .openapi(postCraCheckReportLendScoreGetRoute, postCraCheckReportLendScoreGetRouteHandler)
  .openapi(
    postCraCheckReportNetworkInsightsGetRoute,
    postCraCheckReportNetworkInsightsGetRouteHandler,
  )
  .openapi(postCraCheckReportVerificationGetRoute, postCraCheckReportVerificationGetRouteHandler)
  .openapi(
    postCraCheckReportVerificationPdfGetRoute,
    postCraCheckReportVerificationPdfGetRouteHandler,
  )
  .openapi(postCraLoansApplicationsRegisterRoute, postCraLoansApplicationsRegisterRouteHandler)
  .openapi(postCraLoansRegisterRoute, postCraLoansRegisterRouteHandler)
  .openapi(postCraLoansUpdateRoute, postCraLoansUpdateRouteHandler)
  .openapi(postCraLoansUnregisterRoute, postCraLoansUnregisterRouteHandler)
  .openapi(postCraServicingSubscriptionCreateRoute, postCraServicingSubscriptionCreateRouteHandler)
  .openapi(postCraServicingSubscriptionDeleteRoute, postCraServicingSubscriptionDeleteRouteHandler)
  .openapi(postCraServicingSubscriptionGetRoute, postCraServicingSubscriptionGetRouteHandler)
  .openapi(postCraServicingSubscriptionListRoute, postCraServicingSubscriptionListRouteHandler)
  .openapi(postCraServicingSubscriptionUpdateRoute, postCraServicingSubscriptionUpdateRouteHandler)
  .openapi(postCraReportCreateRoute, postCraReportCreateRouteHandler)
  .openapi(postCraReportGetRoute, postCraReportGetRouteHandler)
  .openapi(postCraCreditProfileReportGetRoute, postCraCreditProfileReportGetRouteHandler)
  .openapi(postConsumerReportPdfGetRoute, postConsumerReportPdfGetRouteHandler)
  .openapi(postOauthTokenRoute, postOauthTokenRouteHandler)
  .openapi(postOauthIntrospectRoute, postOauthIntrospectRouteHandler)
  .openapi(postOauthRevokeRoute, postOauthRevokeRouteHandler)
  .openapi(postStatementsListRoute, postStatementsListRouteHandler)
  .openapi(postStatementsDownloadRoute, postStatementsDownloadRouteHandler)
  .openapi(postStatementsRefreshRoute, postStatementsRefreshRouteHandler)
  .openapi(postConsentEventsGetRoute, postConsentEventsGetRouteHandler)
  .openapi(postItemActivityListRoute, postItemActivityListRouteHandler)
  .openapi(postItemApplicationListRoute, postItemApplicationListRouteHandler)
  .openapi(postItemApplicationUnlinkRoute, postItemApplicationUnlinkRouteHandler)
  .openapi(postItemApplicationScopesUpdateRoute, postItemApplicationScopesUpdateRouteHandler)
  .openapi(postApplicationGetRoute, postApplicationGetRouteHandler)
  .openapi(postItemGetRoute, postItemGetRouteHandler)
  .openapi(postUserAccountSessionGetRoute, postUserAccountSessionGetRouteHandler)
  .openapi(postUserAccountSessionEventSendRoute, postUserAccountSessionEventSendRouteHandler)
  .openapi(postProfileNetworkStatusGetRoute, postProfileNetworkStatusGetRouteHandler)
  .openapi(postNetworkStatusGetRoute, postNetworkStatusGetRouteHandler)
  .openapi(postAuthGetRoute, postAuthGetRouteHandler)
  .openapi(postAuthVerifyRoute, postAuthVerifyRouteHandler)
  .openapi(postTransactionsGetRoute, postTransactionsGetRouteHandler)
  .openapi(postTransactionsRefreshRoute, postTransactionsRefreshRouteHandler)
  .openapi(postSandboxTransactionsCreateRoute, postSandboxTransactionsCreateRouteHandler)
  .openapi(postCashflowReportRefreshRoute, postCashflowReportRefreshRouteHandler)
  .openapi(postCashflowReportGetRoute, postCashflowReportGetRouteHandler)
  .openapi(postCashflowReportTransactionsGetRoute, postCashflowReportTransactionsGetRouteHandler)
  .openapi(postCashflowReportInsightsGetRoute, postCashflowReportInsightsGetRouteHandler)
  .openapi(postTransactionsRecurringGetRoute, postTransactionsRecurringGetRouteHandler)
  .openapi(postTransactionsSyncRoute, postTransactionsSyncRouteHandler)
  .openapi(postTransactionsEnrichRoute, postTransactionsEnrichRouteHandler)
  .openapi(postUserTransactionsRefreshRoute, postUserTransactionsRefreshRouteHandler)
  .openapi(postUserFinancialDataRefreshRoute, postUserFinancialDataRefreshRouteHandler)
  .openapi(postInstitutionsGetRoute, postInstitutionsGetRouteHandler)
  .openapi(postInstitutionsSearchRoute, postInstitutionsSearchRouteHandler)
  .openapi(postInstitutionsGetByIdRoute, postInstitutionsGetByIdRouteHandler)
  .openapi(postItemRemoveRoute, postItemRemoveRouteHandler)
  .openapi(postItemProductsTerminateRoute, postItemProductsTerminateRouteHandler)
  .openapi(postAccountsGetRoute, postAccountsGetRouteHandler)
  .openapi(postCategoriesGetRoute, postCategoriesGetRouteHandler)
  .openapi(postSandboxProcessorTokenCreateRoute, postSandboxProcessorTokenCreateRouteHandler)
  .openapi(postSandboxPublicTokenCreateRoute, postSandboxPublicTokenCreateRouteHandler)
  .openapi(postSandboxItemFireWebhookRoute, postSandboxItemFireWebhookRouteHandler)
  .openapi(postSandboxUserFireWebhookRoute, postSandboxUserFireWebhookRouteHandler)
  .openapi(postAccountsBalanceGetRoute, postAccountsBalanceGetRouteHandler)
  .openapi(postIdentityGetRoute, postIdentityGetRouteHandler)
  .openapi(postIdentityDocumentsUploadsGetRoute, postIdentityDocumentsUploadsGetRouteHandler)
  .openapi(postIdentityMatchRoute, postIdentityMatchRouteHandler)
  .openapi(postIdentityMatchListRoute, postIdentityMatchListRouteHandler)
  .openapi(postIdentityRefreshRoute, postIdentityRefreshRouteHandler)
  .openapi(postDashboardUserGetRoute, postDashboardUserGetRouteHandler)
  .openapi(postDashboardUserListRoute, postDashboardUserListRouteHandler)
  .openapi(postIdentityVerificationCreateRoute, postIdentityVerificationCreateRouteHandler)
  .openapi(postIdentityVerificationGetRoute, postIdentityVerificationGetRouteHandler)
  .openapi(postIdentityVerificationListRoute, postIdentityVerificationListRouteHandler)
  .openapi(postIdentityVerificationRetryRoute, postIdentityVerificationRetryRouteHandler)
  .openapi(postWatchlistScreeningEntityCreateRoute, postWatchlistScreeningEntityCreateRouteHandler)
  .openapi(postWatchlistScreeningEntityGetRoute, postWatchlistScreeningEntityGetRouteHandler)
  .openapi(
    postWatchlistScreeningEntityHistoryListRoute,
    postWatchlistScreeningEntityHistoryListRouteHandler,
  )
  .openapi(
    postWatchlistScreeningEntityHitListRoute,
    postWatchlistScreeningEntityHitListRouteHandler,
  )
  .openapi(postWatchlistScreeningEntityListRoute, postWatchlistScreeningEntityListRouteHandler)
  .openapi(
    postWatchlistScreeningEntityProgramGetRoute,
    postWatchlistScreeningEntityProgramGetRouteHandler,
  )
  .openapi(
    postWatchlistScreeningEntityProgramListRoute,
    postWatchlistScreeningEntityProgramListRouteHandler,
  )
  .openapi(
    postWatchlistScreeningEntityReviewCreateRoute,
    postWatchlistScreeningEntityReviewCreateRouteHandler,
  )
  .openapi(
    postWatchlistScreeningEntityReviewListRoute,
    postWatchlistScreeningEntityReviewListRouteHandler,
  )
  .openapi(postWatchlistScreeningEntityUpdateRoute, postWatchlistScreeningEntityUpdateRouteHandler)
  .openapi(
    postWatchlistScreeningIndividualCreateRoute,
    postWatchlistScreeningIndividualCreateRouteHandler,
  )
  .openapi(
    postWatchlistScreeningIndividualGetRoute,
    postWatchlistScreeningIndividualGetRouteHandler,
  )
  .openapi(
    postWatchlistScreeningIndividualHistoryListRoute,
    postWatchlistScreeningIndividualHistoryListRouteHandler,
  )
  .openapi(
    postWatchlistScreeningIndividualHitListRoute,
    postWatchlistScreeningIndividualHitListRouteHandler,
  )
  .openapi(
    postWatchlistScreeningIndividualListRoute,
    postWatchlistScreeningIndividualListRouteHandler,
  )
  .openapi(
    postWatchlistScreeningIndividualProgramGetRoute,
    postWatchlistScreeningIndividualProgramGetRouteHandler,
  )
  .openapi(
    postWatchlistScreeningIndividualProgramListRoute,
    postWatchlistScreeningIndividualProgramListRouteHandler,
  )
  .openapi(
    postWatchlistScreeningIndividualReviewCreateRoute,
    postWatchlistScreeningIndividualReviewCreateRouteHandler,
  )
  .openapi(
    postWatchlistScreeningIndividualReviewListRoute,
    postWatchlistScreeningIndividualReviewListRouteHandler,
  )
  .openapi(
    postWatchlistScreeningIndividualUpdateRoute,
    postWatchlistScreeningIndividualUpdateRouteHandler,
  )
  .openapi(postBeaconAccountRiskV1EvaluateRoute, postBeaconAccountRiskV1EvaluateRouteHandler)
  .openapi(postBeaconUserCreateRoute, postBeaconUserCreateRouteHandler)
  .openapi(postBeaconUserGetRoute, postBeaconUserGetRouteHandler)
  .openapi(postBeaconUserReviewRoute, postBeaconUserReviewRouteHandler)
  .openapi(postBeaconReportCreateRoute, postBeaconReportCreateRouteHandler)
  .openapi(postBeaconReportListRoute, postBeaconReportListRouteHandler)
  .openapi(postBeaconReportSyndicationListRoute, postBeaconReportSyndicationListRouteHandler)
  .openapi(postBeaconReportGetRoute, postBeaconReportGetRouteHandler)
  .openapi(postBeaconReportSyndicationGetRoute, postBeaconReportSyndicationGetRouteHandler)
  .openapi(postBeaconUserUpdateRoute, postBeaconUserUpdateRouteHandler)
  .openapi(postBeaconDuplicateGetRoute, postBeaconDuplicateGetRouteHandler)
  .openapi(
    postIdentityVerificationAutofillCreateRoute,
    postIdentityVerificationAutofillCreateRouteHandler,
  )
  .openapi(postBeaconUserHistoryListRoute, postBeaconUserHistoryListRouteHandler)
  .openapi(postBeaconUserAccountInsightsGetRoute, postBeaconUserAccountInsightsGetRouteHandler)
  .openapi(postProtectUserInsightsGetRoute, postProtectUserInsightsGetRouteHandler)
  .openapi(postProtectReportCreateRoute, postProtectReportCreateRouteHandler)
  .openapi(
    postProtectCashAdvanceDecisionCreateRoute,
    postProtectCashAdvanceDecisionCreateRouteHandler,
  )
  .openapi(
    postProtectCashAdvanceRepaymentCreateRoute,
    postProtectCashAdvanceRepaymentCreateRouteHandler,
  )
  .openapi(
    postProtectCashAdvanceFeedbackUploadRoute,
    postProtectCashAdvanceFeedbackUploadRouteHandler,
  )
  .openapi(postProtectComputeRoute, postProtectComputeRouteHandler)
  .openapi(postProtectEventSendRoute, postProtectEventSendRouteHandler)
  .openapi(postProtectEventGetRoute, postProtectEventGetRouteHandler)
  .openapi(postBusinessVerificationGetRoute, postBusinessVerificationGetRouteHandler)
  .openapi(postBusinessVerificationCreateRoute, postBusinessVerificationCreateRouteHandler)
  .openapi(postProcessorAuthGetRoute, postProcessorAuthGetRouteHandler)
  .openapi(postProcessorAccountGetRoute, postProcessorAccountGetRouteHandler)
  .openapi(
    postProcessorInvestmentsHoldingsGetRoute,
    postProcessorInvestmentsHoldingsGetRouteHandler,
  )
  .openapi(postProcessorInvestmentsAuthGetRoute, postProcessorInvestmentsAuthGetRouteHandler)
  .openapi(
    postProcessorInvestmentsTransactionsGetRoute,
    postProcessorInvestmentsTransactionsGetRouteHandler,
  )
  .openapi(postProcessorTransactionsGetRoute, postProcessorTransactionsGetRouteHandler)
  .openapi(postProcessorTransactionsSyncRoute, postProcessorTransactionsSyncRouteHandler)
  .openapi(postProcessorTransactionsRefreshRoute, postProcessorTransactionsRefreshRouteHandler)
  .openapi(
    postProcessorTransactionsRecurringGetRoute,
    postProcessorTransactionsRecurringGetRouteHandler,
  )
  .openapi(postProcessorSignalEvaluateRoute, postProcessorSignalEvaluateRouteHandler)
  .openapi(postProcessorSignalDecisionReportRoute, postProcessorSignalDecisionReportRouteHandler)
  .openapi(postProcessorSignalReturnReportRoute, postProcessorSignalReturnReportRouteHandler)
  .openapi(postProcessorSignalPrepareRoute, postProcessorSignalPrepareRouteHandler)
  .openapi(postProcessorBankTransferCreateRoute, postProcessorBankTransferCreateRouteHandler)
  .openapi(postProcessorLiabilitiesGetRoute, postProcessorLiabilitiesGetRouteHandler)
  .openapi(postProcessorIdentityGetRoute, postProcessorIdentityGetRouteHandler)
  .openapi(postProcessorIdentityMatchRoute, postProcessorIdentityMatchRouteHandler)
  .openapi(postProcessorBalanceGetRoute, postProcessorBalanceGetRouteHandler)
  .openapi(postItemWebhookUpdateRoute, postItemWebhookUpdateRouteHandler)
  .openapi(postItemAccessTokenInvalidateRoute, postItemAccessTokenInvalidateRouteHandler)
  .openapi(postBetaWebhookEventsListRoute, postBetaWebhookEventsListRouteHandler)
  .openapi(postWebhookVerificationKeyGetRoute, postWebhookVerificationKeyGetRouteHandler)
  .openapi(postLiabilitiesGetRoute, postLiabilitiesGetRouteHandler)
  .openapi(
    postPaymentInitiationRecipientCreateRoute,
    postPaymentInitiationRecipientCreateRouteHandler,
  )
  .openapi(
    postPaymentInitiationPaymentReverseRoute,
    postPaymentInitiationPaymentReverseRouteHandler,
  )
  .openapi(postPaymentInitiationRecipientGetRoute, postPaymentInitiationRecipientGetRouteHandler)
  .openapi(postPaymentInitiationRecipientListRoute, postPaymentInitiationRecipientListRouteHandler)
  .openapi(postPaymentInitiationPaymentCreateRoute, postPaymentInitiationPaymentCreateRouteHandler)
  .openapi(
    postPaymentInitiationPaymentTokenCreateRoute,
    postPaymentInitiationPaymentTokenCreateRouteHandler,
  )
  .openapi(postPaymentInitiationConsentCreateRoute, postPaymentInitiationConsentCreateRouteHandler)
  .openapi(postPaymentInitiationConsentGetRoute, postPaymentInitiationConsentGetRouteHandler)
  .openapi(postPaymentInitiationConsentRevokeRoute, postPaymentInitiationConsentRevokeRouteHandler)
  .openapi(
    postPaymentInitiationConsentPaymentExecuteRoute,
    postPaymentInitiationConsentPaymentExecuteRouteHandler,
  )
  .openapi(postSandboxItemResetLoginRoute, postSandboxItemResetLoginRouteHandler)
  .openapi(postSandboxItemApplicationSeedRoute, postSandboxItemApplicationSeedRouteHandler)
  .openapi(postSandboxFdxConsentSeedRoute, postSandboxFdxConsentSeedRouteHandler)
  .openapi(
    postSandboxItemSetVerificationStatusRoute,
    postSandboxItemSetVerificationStatusRouteHandler,
  )
  .openapi(postSandboxUserResetLoginRoute, postSandboxUserResetLoginRouteHandler)
  .openapi(postItemPublicTokenExchangeRoute, postItemPublicTokenExchangeRouteHandler)
  .openapi(postItemPublicTokenCreateRoute, postItemPublicTokenCreateRouteHandler)
  .openapi(postUserCreateRoute, postUserCreateRouteHandler)
  .openapi(postUserGetRoute, postUserGetRouteHandler)
  .openapi(postUserIdentityRemoveRoute, postUserIdentityRemoveRouteHandler)
  .openapi(postUserUpdateRoute, postUserUpdateRouteHandler)
  .openapi(postUserRemoveRoute, postUserRemoveRouteHandler)
  .openapi(postUserProductsTerminateRoute, postUserProductsTerminateRouteHandler)
  .openapi(postUserTransferLimitsGetRoute, postUserTransferLimitsGetRouteHandler)
  .openapi(postUserItemsGetRoute, postUserItemsGetRouteHandler)
  .openapi(postUserItemsAssociateRoute, postUserItemsAssociateRouteHandler)
  .openapi(postUserItemsRemoveRoute, postUserItemsRemoveRouteHandler)
  .openapi(postUserThirdPartyTokenCreateRoute, postUserThirdPartyTokenCreateRouteHandler)
  .openapi(postUserThirdPartyTokenRemoveRoute, postUserThirdPartyTokenRemoveRouteHandler)
  .openapi(postCreditSessionsGetRoute, postCreditSessionsGetRouteHandler)
  .openapi(postPaymentInitiationPaymentGetRoute, postPaymentInitiationPaymentGetRouteHandler)
  .openapi(postPaymentInitiationPaymentListRoute, postPaymentInitiationPaymentListRouteHandler)
  .openapi(postInvestmentsHoldingsGetRoute, postInvestmentsHoldingsGetRouteHandler)
  .openapi(postInvestmentsTransactionsGetRoute, postInvestmentsTransactionsGetRouteHandler)
  .openapi(postInvestmentsRefreshRoute, postInvestmentsRefreshRouteHandler)
  .openapi(postInvestmentsAuthGetRoute, postInvestmentsAuthGetRouteHandler)
  .openapi(postProcessorTokenCreateRoute, postProcessorTokenCreateRouteHandler)
  .openapi(postProcessorTokenPermissionsSetRoute, postProcessorTokenPermissionsSetRouteHandler)
  .openapi(postProcessorTokenPermissionsGetRoute, postProcessorTokenPermissionsGetRouteHandler)
  .openapi(postProcessorTokenWebhookUpdateRoute, postProcessorTokenWebhookUpdateRouteHandler)
  .openapi(
    postProcessorStripeBankAccountTokenCreateRoute,
    postProcessorStripeBankAccountTokenCreateRouteHandler,
  )
  .openapi(
    postProcessorApexProcessorTokenCreateRoute,
    postProcessorApexProcessorTokenCreateRouteHandler,
  )
  .openapi(postItemImportRoute, postItemImportRouteHandler)
  .openapi(postLinkTokenCreateRoute, postLinkTokenCreateRouteHandler)
  .openapi(postLinkTokenGetRoute, postLinkTokenGetRouteHandler)
  .openapi(postLinkOauthCorrelationIdExchangeRoute, postLinkOauthCorrelationIdExchangeRouteHandler)
  .openapi(postSessionTokenCreateRoute, postSessionTokenCreateRouteHandler)
  .openapi(postTransferGetRoute, postTransferGetRouteHandler)
  .openapi(postTransferRecurringGetRoute, postTransferRecurringGetRouteHandler)
  .openapi(postBankTransferGetRoute, postBankTransferGetRouteHandler)
  .openapi(postTransferAuthorizationCreateRoute, postTransferAuthorizationCreateRouteHandler)
  .openapi(postTransferAuthorizationCancelRoute, postTransferAuthorizationCancelRouteHandler)
  .openapi(postTransferBalanceGetRoute, postTransferBalanceGetRouteHandler)
  .openapi(postTransferCapabilitiesGetRoute, postTransferCapabilitiesGetRouteHandler)
  .openapi(postTransferConfigurationGetRoute, postTransferConfigurationGetRouteHandler)
  .openapi(postTransferLedgerGetRoute, postTransferLedgerGetRouteHandler)
  .openapi(postTransferLedgerDistributeRoute, postTransferLedgerDistributeRouteHandler)
  .openapi(postTransferLedgerDepositRoute, postTransferLedgerDepositRouteHandler)
  .openapi(postTransferLedgerWithdrawRoute, postTransferLedgerWithdrawRouteHandler)
  .openapi(
    postTransferOriginatorFundingAccountUpdateRoute,
    postTransferOriginatorFundingAccountUpdateRouteHandler,
  )
  .openapi(
    postTransferOriginatorFundingAccountCreateRoute,
    postTransferOriginatorFundingAccountCreateRouteHandler,
  )
  .openapi(postTransferMetricsGetRoute, postTransferMetricsGetRouteHandler)
  .openapi(postTransferCreateRoute, postTransferCreateRouteHandler)
  .openapi(postTransferRecurringCreateRoute, postTransferRecurringCreateRouteHandler)
  .openapi(postBankTransferCreateRoute, postBankTransferCreateRouteHandler)
  .openapi(postTransferListRoute, postTransferListRouteHandler)
  .openapi(postTransferRecurringListRoute, postTransferRecurringListRouteHandler)
  .openapi(postBankTransferListRoute, postBankTransferListRouteHandler)
  .openapi(postTransferCancelRoute, postTransferCancelRouteHandler)
  .openapi(postTransferRecurringCancelRoute, postTransferRecurringCancelRouteHandler)
  .openapi(postBankTransferCancelRoute, postBankTransferCancelRouteHandler)
  .openapi(postTransferEventListRoute, postTransferEventListRouteHandler)
  .openapi(postTransferLedgerEventListRoute, postTransferLedgerEventListRouteHandler)
  .openapi(postBankTransferEventListRoute, postBankTransferEventListRouteHandler)
  .openapi(postTransferEventSyncRoute, postTransferEventSyncRouteHandler)
  .openapi(postBankTransferEventSyncRoute, postBankTransferEventSyncRouteHandler)
  .openapi(postTransferSweepGetRoute, postTransferSweepGetRouteHandler)
  .openapi(postBankTransferSweepGetRoute, postBankTransferSweepGetRouteHandler)
  .openapi(postTransferSweepListRoute, postTransferSweepListRouteHandler)
  .openapi(postBankTransferSweepListRoute, postBankTransferSweepListRouteHandler)
  .openapi(postBankTransferBalanceGetRoute, postBankTransferBalanceGetRouteHandler)
  .openapi(postBankTransferMigrateAccountRoute, postBankTransferMigrateAccountRouteHandler)
  .openapi(postTransferMigrateAccountRoute, postTransferMigrateAccountRouteHandler)
  .openapi(postTransferIntentCreateRoute, postTransferIntentCreateRouteHandler)
  .openapi(postTransferIntentGetRoute, postTransferIntentGetRouteHandler)
  .openapi(postTransferRepaymentListRoute, postTransferRepaymentListRouteHandler)
  .openapi(postTransferRepaymentReturnListRoute, postTransferRepaymentReturnListRouteHandler)
  .openapi(
    postTransferPlatformRequirementSubmitRoute,
    postTransferPlatformRequirementSubmitRouteHandler,
  )
  .openapi(postTransferOriginatorCreateRoute, postTransferOriginatorCreateRouteHandler)
  .openapi(postTransferQuestionnaireCreateRoute, postTransferQuestionnaireCreateRouteHandler)
  .openapi(postTransferDiligenceSubmitRoute, postTransferDiligenceSubmitRouteHandler)
  .openapi(
    postTransferDiligenceDocumentUploadRoute,
    postTransferDiligenceDocumentUploadRouteHandler,
  )
  .openapi(postTransferOriginatorGetRoute, postTransferOriginatorGetRouteHandler)
  .openapi(postTransferOriginatorListRoute, postTransferOriginatorListRouteHandler)
  .openapi(postTransferRefundCreateRoute, postTransferRefundCreateRouteHandler)
  .openapi(postTransferReturnRecoverRoute, postTransferReturnRecoverRouteHandler)
  .openapi(postTransferRefundGetRoute, postTransferRefundGetRouteHandler)
  .openapi(postTransferRefundCancelRoute, postTransferRefundCancelRouteHandler)
  .openapi(
    postTransferPlatformOriginatorCreateRoute,
    postTransferPlatformOriginatorCreateRouteHandler,
  )
  .openapi(postTransferPlatformPersonCreateRoute, postTransferPlatformPersonCreateRouteHandler)
  .openapi(postSandboxBankTransferSimulateRoute, postSandboxBankTransferSimulateRouteHandler)
  .openapi(postSandboxTransferSweepSimulateRoute, postSandboxTransferSweepSimulateRouteHandler)
  .openapi(postSandboxTransferSimulateRoute, postSandboxTransferSimulateRouteHandler)
  .openapi(postSandboxTransferRefundSimulateRoute, postSandboxTransferRefundSimulateRouteHandler)
  .openapi(
    postSandboxTransferLedgerSimulateAvailableRoute,
    postSandboxTransferLedgerSimulateAvailableRouteHandler,
  )
  .openapi(
    postSandboxTransferLedgerDepositSimulateRoute,
    postSandboxTransferLedgerDepositSimulateRouteHandler,
  )
  .openapi(
    postSandboxTransferLedgerWithdrawSimulateRoute,
    postSandboxTransferLedgerWithdrawSimulateRouteHandler,
  )
  .openapi(postSandboxTransferFireWebhookRoute, postSandboxTransferFireWebhookRouteHandler)
  .openapi(postSandboxTransferTestClockCreateRoute, postSandboxTransferTestClockCreateRouteHandler)
  .openapi(
    postSandboxTransferTestClockAdvanceRoute,
    postSandboxTransferTestClockAdvanceRouteHandler,
  )
  .openapi(postSandboxTransferTestClockGetRoute, postSandboxTransferTestClockGetRouteHandler)
  .openapi(postSandboxTransferTestClockListRoute, postSandboxTransferTestClockListRouteHandler)
  .openapi(
    postSandboxPaymentProfileResetLoginRoute,
    postSandboxPaymentProfileResetLoginRouteHandler,
  )
  .openapi(postSandboxPaymentSimulateRoute, postSandboxPaymentSimulateRouteHandler)
  .openapi(postEmployersSearchRoute, postEmployersSearchRouteHandler)
  .openapi(postIncomeVerificationCreateRoute, postIncomeVerificationCreateRouteHandler)
  .openapi(postIncomeVerificationPaystubsGetRoute, postIncomeVerificationPaystubsGetRouteHandler)
  .openapi(
    postIncomeVerificationDocumentsDownloadRoute,
    postIncomeVerificationDocumentsDownloadRouteHandler,
  )
  .openapi(postIncomeVerificationTaxformsGetRoute, postIncomeVerificationTaxformsGetRouteHandler)
  .openapi(postIncomeVerificationPrecheckRoute, postIncomeVerificationPrecheckRouteHandler)
  .openapi(postEmploymentVerificationGetRoute, postEmploymentVerificationGetRouteHandler)
  .openapi(postCreditAuditCopyTokenCreateRoute, postCreditAuditCopyTokenCreateRouteHandler)
  .openapi(postCreditAuditCopyTokenRemoveRoute, postCreditAuditCopyTokenRemoveRouteHandler)
  .openapi(postCreditAssetReportFreddieMacGetRoute, postCreditAssetReportFreddieMacGetRouteHandler)
  .openapi(postCreditFreddieMacReportsGetRoute, postCreditFreddieMacReportsGetRouteHandler)
  .openapi(postBetaCreditV1BankEmploymentGetRoute, postBetaCreditV1BankEmploymentGetRouteHandler)
  .openapi(postCreditBankIncomeGetRoute, postCreditBankIncomeGetRouteHandler)
  .openapi(postCreditBankIncomePdfGetRoute, postCreditBankIncomePdfGetRouteHandler)
  .openapi(postCreditBankIncomeRefreshRoute, postCreditBankIncomeRefreshRouteHandler)
  .openapi(postCreditBankIncomeWebhookUpdateRoute, postCreditBankIncomeWebhookUpdateRouteHandler)
  .openapi(
    postCreditPayrollIncomeParsingConfigUpdateRoute,
    postCreditPayrollIncomeParsingConfigUpdateRouteHandler,
  )
  .openapi(postCreditBankStatementsUploadsGetRoute, postCreditBankStatementsUploadsGetRouteHandler)
  .openapi(postCreditPayrollIncomeGetRoute, postCreditPayrollIncomeGetRouteHandler)
  .openapi(
    postCreditPayrollIncomeRiskSignalsGetRoute,
    postCreditPayrollIncomeRiskSignalsGetRouteHandler,
  )
  .openapi(postCreditPayrollIncomePrecheckRoute, postCreditPayrollIncomePrecheckRouteHandler)
  .openapi(postCreditEmploymentGetRoute, postCreditEmploymentGetRouteHandler)
  .openapi(postCreditPayrollIncomeRefreshRoute, postCreditPayrollIncomeRefreshRouteHandler)
  .openapi(postCreditRelayCreateRoute, postCreditRelayCreateRouteHandler)
  .openapi(postCreditRelayGetRoute, postCreditRelayGetRouteHandler)
  .openapi(postCreditRelayPdfGetRoute, postCreditRelayPdfGetRouteHandler)
  .openapi(postCreditRelayRefreshRoute, postCreditRelayRefreshRouteHandler)
  .openapi(postCreditRelayRemoveRoute, postCreditRelayRemoveRouteHandler)
  .openapi(postSandboxBankTransferFireWebhookRoute, postSandboxBankTransferFireWebhookRouteHandler)
  .openapi(postSandboxIncomeFireWebhookRoute, postSandboxIncomeFireWebhookRouteHandler)
  .openapi(postSandboxBankIncomeFireWebhookRoute, postSandboxBankIncomeFireWebhookRouteHandler)
  .openapi(
    postSandboxCraCashflowUpdatesUpdateRoute,
    postSandboxCraCashflowUpdatesUpdateRouteHandler,
  )
  .openapi(postSandboxCraServicingSimulateRoute, postSandboxCraServicingSimulateRouteHandler)
  .openapi(postSandboxOauthSelectAccountsRoute, postSandboxOauthSelectAccountsRouteHandler)
  .openapi(postSignalEvaluateRoute, postSignalEvaluateRouteHandler)
  .openapi(postSignalScheduleRoute, postSignalScheduleRouteHandler)
  .openapi(postSignalDecisionReportRoute, postSignalDecisionReportRouteHandler)
  .openapi(postSignalReturnReportRoute, postSignalReturnReportRouteHandler)
  .openapi(postSignalPrepareRoute, postSignalPrepareRouteHandler)
  .openapi(postWalletCreateRoute, postWalletCreateRouteHandler)
  .openapi(postWalletGetRoute, postWalletGetRouteHandler)
  .openapi(postWalletListRoute, postWalletListRouteHandler)
  .openapi(postWalletTransactionExecuteRoute, postWalletTransactionExecuteRouteHandler)
  .openapi(postWalletTransactionGetRoute, postWalletTransactionGetRouteHandler)
  .openapi(postWalletTransactionListRoute, postWalletTransactionListRouteHandler)
  .openapi(postBetaTransactionsRulesV1CreateRoute, postBetaTransactionsRulesV1CreateRouteHandler)
  .openapi(postBetaTransactionsRulesV1ListRoute, postBetaTransactionsRulesV1ListRouteHandler)
  .openapi(postBetaTransactionsRulesV1RemoveRoute, postBetaTransactionsRulesV1RemoveRouteHandler)
  .openapi(
    postBetaTransactionsUserInsightsV1GetRoute,
    postBetaTransactionsUserInsightsV1GetRouteHandler,
  )
  .openapi(postBetaEwaReportV1GetRoute, postBetaEwaReportV1GetRouteHandler)
  .openapi(
    postBetaCashAdvanceIncomeInsightsV1GetRoute,
    postBetaCashAdvanceIncomeInsightsV1GetRouteHandler,
  )
  .openapi(postBetaIssuesV1GetRoute, postBetaIssuesV1GetRouteHandler)
  .openapi(postBetaIssuesV1ListRoute, postBetaIssuesV1ListRouteHandler)
  .openapi(postBetaIssuesV1MatchRoute, postBetaIssuesV1MatchRouteHandler)
  .openapi(postBetaIssuesV1SubscribeRoute, postBetaIssuesV1SubscribeRouteHandler)
  .openapi(postBetaIssuesV1UnsubscribeRoute, postBetaIssuesV1UnsubscribeRouteHandler)
  .openapi(postIssuesSearchRoute, postIssuesSearchRouteHandler)
  .openapi(postIssuesGetRoute, postIssuesGetRouteHandler)
  .openapi(postIssuesSubscribeRoute, postIssuesSubscribeRouteHandler)
  .openapi(postPaymentProfileCreateRoute, postPaymentProfileCreateRouteHandler)
  .openapi(postPaymentProfileGetRoute, postPaymentProfileGetRouteHandler)
  .openapi(postPaymentProfileRemoveRoute, postPaymentProfileRemoveRouteHandler)
  .openapi(postPartnerCustomerCreateRoute, postPartnerCustomerCreateRouteHandler)
  .openapi(postPartnerCustomerGetRoute, postPartnerCustomerGetRouteHandler)
  .openapi(postPartnerCustomerEnableRoute, postPartnerCustomerEnableRouteHandler)
  .openapi(postPartnerCustomerRemoveRoute, postPartnerCustomerRemoveRouteHandler)
  .openapi(
    postPartnerCustomerOauthInstitutionsGetRoute,
    postPartnerCustomerOauthInstitutionsGetRouteHandler,
  )
  .openapi(postBetaPartnerCustomerV1CreateRoute, postBetaPartnerCustomerV1CreateRouteHandler)
  .openapi(postBetaPartnerCustomerV1GetRoute, postBetaPartnerCustomerV1GetRouteHandler)
  .openapi(postBetaPartnerCustomerV1UpdateRoute, postBetaPartnerCustomerV1UpdateRouteHandler)
  .openapi(postBetaPartnerCustomerV1EnableRoute, postBetaPartnerCustomerV1EnableRouteHandler)
  .openapi(postFdxNotificationsRoute, postFdxNotificationsRouteHandler)
  .openapi(getFdxRecipientsRoute, getFdxRecipientsRouteHandler)
  .openapi(getFdxConsentsRoute, getFdxConsentsRouteHandler)
  .openapi(putFdxConsentsConsentIdRevocationRoute, putFdxConsentsConsentIdRevocationRouteHandler)
  .openapi(getFdxConsentsConsentIdRevocationRoute, getFdxConsentsConsentIdRevocationRouteHandler)
  .openapi(getFdxConsentsConsentIdRoute, getFdxConsentsConsentIdRouteHandler)
  .openapi(getFdxRecipientRecipientIdRoute, getFdxRecipientRecipientIdRouteHandler)

export default app
