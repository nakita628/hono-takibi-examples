import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountsBalanceGetRoute,
  postAccountsGetRoute,
  postApplicationGetRoute,
  postAssetReportAuditCopyCreateRoute,
  postAssetReportAuditCopyGetRoute,
  postAssetReportAuditCopyRemoveRoute,
  postAssetReportCreateRoute,
  postAssetReportFilterRoute,
  postAssetReportGetRoute,
  postAssetReportPdfGetRoute,
  postAssetReportRefreshRoute,
  postAssetReportRemoveRoute,
  postAuthGetRoute,
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
  postBetaCreditV1BankEmploymentGetRoute,
  postBetaTransactionsRulesV1CreateRoute,
  postBetaTransactionsRulesV1ListRoute,
  postBetaTransactionsRulesV1RemoveRoute,
  postBetaTransactionsV1EnhanceRoute,
  postCategoriesGetRoute,
  postCreditAssetReportFreddieMacGetRoute,
  postCreditAuditCopyTokenCreateRoute,
  postCreditAuditCopyTokenRemoveRoute,
  postCreditAuditCopyTokenUpdateRoute,
  postCreditBankIncomeGetRoute,
  postCreditBankIncomePdfGetRoute,
  postCreditBankIncomeRefreshRoute,
  postCreditEmploymentGetRoute,
  postCreditFreddieMacReportsGetRoute,
  postCreditPayrollIncomeGetRoute,
  postCreditPayrollIncomePrecheckRoute,
  postCreditPayrollIncomeRefreshRoute,
  postCreditRelayCreateRoute,
  postCreditRelayGetRoute,
  postCreditRelayRefreshRoute,
  postCreditRelayRemoveRoute,
  postCreditSessionsGetRoute,
  postDashboardUserGetRoute,
  postDashboardUserListRoute,
  postDepositSwitchAltCreateRoute,
  postDepositSwitchCreateRoute,
  postDepositSwitchGetRoute,
  postDepositSwitchTokenCreateRoute,
  postEmployersSearchRoute,
  postEmploymentVerificationGetRoute,
  postFdxNotificationsRoute,
  postIdentityGetRoute,
  postIdentityMatchRoute,
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
  postInvestmentsHoldingsGetRoute,
  postInvestmentsTransactionsGetRoute,
  postItemAccessTokenInvalidateRoute,
  postItemActivityListRoute,
  postItemApplicationListRoute,
  postItemApplicationScopesUpdateRoute,
  postItemGetRoute,
  postItemImportRoute,
  postItemPublicTokenCreateRoute,
  postItemPublicTokenExchangeRoute,
  postItemRemoveRoute,
  postItemWebhookUpdateRoute,
  postLiabilitiesGetRoute,
  postLinkDeliveryCreateRoute,
  postLinkDeliveryGetRoute,
  postLinkOauthCorrelationIdExchangeRoute,
  postLinkTokenCreateRoute,
  postLinkTokenGetRoute,
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
  postProcessorApexProcessorTokenCreateRoute,
  postProcessorAuthGetRoute,
  postProcessorBalanceGetRoute,
  postProcessorBankTransferCreateRoute,
  postProcessorIdentityGetRoute,
  postProcessorSignalDecisionReportRoute,
  postProcessorSignalEvaluateRoute,
  postProcessorSignalReturnReportRoute,
  postProcessorStripeBankAccountTokenCreateRoute,
  postProcessorTokenCreateRoute,
  postSandboxBankTransferFireWebhookRoute,
  postSandboxBankTransferSimulateRoute,
  postSandboxIncomeFireWebhookRoute,
  postSandboxItemFireWebhookRoute,
  postSandboxItemResetLoginRoute,
  postSandboxItemSetVerificationStatusRoute,
  postSandboxOauthSelectAccountsRoute,
  postSandboxPaymentProfileResetLoginRoute,
  postSandboxProcessorTokenCreateRoute,
  postSandboxPublicTokenCreateRoute,
  postSandboxTransferFireWebhookRoute,
  postSandboxTransferRepaymentSimulateRoute,
  postSandboxTransferSimulateRoute,
  postSandboxTransferSweepSimulateRoute,
  postSandboxTransferTestClockAdvanceRoute,
  postSandboxTransferTestClockCreateRoute,
  postSandboxTransferTestClockGetRoute,
  postSandboxTransferTestClockListRoute,
  postSignalDecisionReportRoute,
  postSignalEvaluateRoute,
  postSignalPrepareRoute,
  postSignalReturnReportRoute,
  postTransactionsEnrichRoute,
  postTransactionsGetRoute,
  postTransactionsRecurringGetRoute,
  postTransactionsRefreshRoute,
  postTransactionsSyncRoute,
  postTransferAuthorizationCreateRoute,
  postTransferCancelRoute,
  postTransferCapabilitiesGetRoute,
  postTransferCreateRoute,
  postTransferEventListRoute,
  postTransferEventSyncRoute,
  postTransferGetRoute,
  postTransferIntentCreateRoute,
  postTransferIntentGetRoute,
  postTransferListRoute,
  postTransferMigrateAccountRoute,
  postTransferOriginatorCreateRoute,
  postTransferOriginatorGetRoute,
  postTransferOriginatorListRoute,
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
  postTransferSweepGetRoute,
  postTransferSweepListRoute,
  postUserCreateRoute,
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
} from './routes'
import {
  postAccountsBalanceGetRouteHandler,
  postAccountsGetRouteHandler,
  postApplicationGetRouteHandler,
  postAssetReportAuditCopyCreateRouteHandler,
  postAssetReportAuditCopyGetRouteHandler,
  postAssetReportAuditCopyRemoveRouteHandler,
  postAssetReportCreateRouteHandler,
  postAssetReportFilterRouteHandler,
  postAssetReportGetRouteHandler,
  postAssetReportPdfGetRouteHandler,
  postAssetReportRefreshRouteHandler,
  postAssetReportRemoveRouteHandler,
  postAuthGetRouteHandler,
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
  postBetaCreditV1BankEmploymentGetRouteHandler,
  postBetaTransactionsRulesV1CreateRouteHandler,
  postBetaTransactionsRulesV1ListRouteHandler,
  postBetaTransactionsRulesV1RemoveRouteHandler,
  postBetaTransactionsV1EnhanceRouteHandler,
  postCategoriesGetRouteHandler,
  postCreditAssetReportFreddieMacGetRouteHandler,
  postCreditAuditCopyTokenCreateRouteHandler,
  postCreditAuditCopyTokenRemoveRouteHandler,
  postCreditAuditCopyTokenUpdateRouteHandler,
  postCreditBankIncomeGetRouteHandler,
  postCreditBankIncomePdfGetRouteHandler,
  postCreditBankIncomeRefreshRouteHandler,
  postCreditEmploymentGetRouteHandler,
  postCreditFreddieMacReportsGetRouteHandler,
  postCreditPayrollIncomeGetRouteHandler,
  postCreditPayrollIncomePrecheckRouteHandler,
  postCreditPayrollIncomeRefreshRouteHandler,
  postCreditRelayCreateRouteHandler,
  postCreditRelayGetRouteHandler,
  postCreditRelayRefreshRouteHandler,
  postCreditRelayRemoveRouteHandler,
  postCreditSessionsGetRouteHandler,
  postDashboardUserGetRouteHandler,
  postDashboardUserListRouteHandler,
  postDepositSwitchAltCreateRouteHandler,
  postDepositSwitchCreateRouteHandler,
  postDepositSwitchGetRouteHandler,
  postDepositSwitchTokenCreateRouteHandler,
  postEmployersSearchRouteHandler,
  postEmploymentVerificationGetRouteHandler,
  postFdxNotificationsRouteHandler,
  postIdentityGetRouteHandler,
  postIdentityMatchRouteHandler,
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
  postInvestmentsHoldingsGetRouteHandler,
  postInvestmentsTransactionsGetRouteHandler,
  postItemAccessTokenInvalidateRouteHandler,
  postItemActivityListRouteHandler,
  postItemApplicationListRouteHandler,
  postItemApplicationScopesUpdateRouteHandler,
  postItemGetRouteHandler,
  postItemImportRouteHandler,
  postItemPublicTokenCreateRouteHandler,
  postItemPublicTokenExchangeRouteHandler,
  postItemRemoveRouteHandler,
  postItemWebhookUpdateRouteHandler,
  postLiabilitiesGetRouteHandler,
  postLinkDeliveryCreateRouteHandler,
  postLinkDeliveryGetRouteHandler,
  postLinkOauthCorrelationIdExchangeRouteHandler,
  postLinkTokenCreateRouteHandler,
  postLinkTokenGetRouteHandler,
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
  postProcessorApexProcessorTokenCreateRouteHandler,
  postProcessorAuthGetRouteHandler,
  postProcessorBalanceGetRouteHandler,
  postProcessorBankTransferCreateRouteHandler,
  postProcessorIdentityGetRouteHandler,
  postProcessorSignalDecisionReportRouteHandler,
  postProcessorSignalEvaluateRouteHandler,
  postProcessorSignalReturnReportRouteHandler,
  postProcessorStripeBankAccountTokenCreateRouteHandler,
  postProcessorTokenCreateRouteHandler,
  postSandboxBankTransferFireWebhookRouteHandler,
  postSandboxBankTransferSimulateRouteHandler,
  postSandboxIncomeFireWebhookRouteHandler,
  postSandboxItemFireWebhookRouteHandler,
  postSandboxItemResetLoginRouteHandler,
  postSandboxItemSetVerificationStatusRouteHandler,
  postSandboxOauthSelectAccountsRouteHandler,
  postSandboxPaymentProfileResetLoginRouteHandler,
  postSandboxProcessorTokenCreateRouteHandler,
  postSandboxPublicTokenCreateRouteHandler,
  postSandboxTransferFireWebhookRouteHandler,
  postSandboxTransferRepaymentSimulateRouteHandler,
  postSandboxTransferSimulateRouteHandler,
  postSandboxTransferSweepSimulateRouteHandler,
  postSandboxTransferTestClockAdvanceRouteHandler,
  postSandboxTransferTestClockCreateRouteHandler,
  postSandboxTransferTestClockGetRouteHandler,
  postSandboxTransferTestClockListRouteHandler,
  postSignalDecisionReportRouteHandler,
  postSignalEvaluateRouteHandler,
  postSignalPrepareRouteHandler,
  postSignalReturnReportRouteHandler,
  postTransactionsEnrichRouteHandler,
  postTransactionsGetRouteHandler,
  postTransactionsRecurringGetRouteHandler,
  postTransactionsRefreshRouteHandler,
  postTransactionsSyncRouteHandler,
  postTransferAuthorizationCreateRouteHandler,
  postTransferCancelRouteHandler,
  postTransferCapabilitiesGetRouteHandler,
  postTransferCreateRouteHandler,
  postTransferEventListRouteHandler,
  postTransferEventSyncRouteHandler,
  postTransferGetRouteHandler,
  postTransferIntentCreateRouteHandler,
  postTransferIntentGetRouteHandler,
  postTransferListRouteHandler,
  postTransferMigrateAccountRouteHandler,
  postTransferOriginatorCreateRouteHandler,
  postTransferOriginatorGetRouteHandler,
  postTransferOriginatorListRouteHandler,
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
  postTransferSweepGetRouteHandler,
  postTransferSweepListRouteHandler,
  postUserCreateRouteHandler,
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
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccountsBalanceGetRoute, postAccountsBalanceGetRouteHandler)
  .openapi(postAccountsGetRoute, postAccountsGetRouteHandler)
  .openapi(postApplicationGetRoute, postApplicationGetRouteHandler)
  .openapi(postAssetReportAuditCopyCreateRoute, postAssetReportAuditCopyCreateRouteHandler)
  .openapi(postAssetReportAuditCopyGetRoute, postAssetReportAuditCopyGetRouteHandler)
  .openapi(postAssetReportAuditCopyRemoveRoute, postAssetReportAuditCopyRemoveRouteHandler)
  .openapi(postAssetReportCreateRoute, postAssetReportCreateRouteHandler)
  .openapi(postAssetReportFilterRoute, postAssetReportFilterRouteHandler)
  .openapi(postAssetReportGetRoute, postAssetReportGetRouteHandler)
  .openapi(postAssetReportPdfGetRoute, postAssetReportPdfGetRouteHandler)
  .openapi(postAssetReportRefreshRoute, postAssetReportRefreshRouteHandler)
  .openapi(postAssetReportRemoveRoute, postAssetReportRemoveRouteHandler)
  .openapi(postAuthGetRoute, postAuthGetRouteHandler)
  .openapi(postBankTransferBalanceGetRoute, postBankTransferBalanceGetRouteHandler)
  .openapi(postBankTransferCancelRoute, postBankTransferCancelRouteHandler)
  .openapi(postBankTransferCreateRoute, postBankTransferCreateRouteHandler)
  .openapi(postBankTransferEventListRoute, postBankTransferEventListRouteHandler)
  .openapi(postBankTransferEventSyncRoute, postBankTransferEventSyncRouteHandler)
  .openapi(postBankTransferGetRoute, postBankTransferGetRouteHandler)
  .openapi(postBankTransferListRoute, postBankTransferListRouteHandler)
  .openapi(postBankTransferMigrateAccountRoute, postBankTransferMigrateAccountRouteHandler)
  .openapi(postBankTransferSweepGetRoute, postBankTransferSweepGetRouteHandler)
  .openapi(postBankTransferSweepListRoute, postBankTransferSweepListRouteHandler)
  .openapi(postBetaCreditV1BankEmploymentGetRoute, postBetaCreditV1BankEmploymentGetRouteHandler)
  .openapi(postBetaTransactionsRulesV1CreateRoute, postBetaTransactionsRulesV1CreateRouteHandler)
  .openapi(postBetaTransactionsRulesV1ListRoute, postBetaTransactionsRulesV1ListRouteHandler)
  .openapi(postBetaTransactionsRulesV1RemoveRoute, postBetaTransactionsRulesV1RemoveRouteHandler)
  .openapi(postBetaTransactionsV1EnhanceRoute, postBetaTransactionsV1EnhanceRouteHandler)
  .openapi(postCategoriesGetRoute, postCategoriesGetRouteHandler)
  .openapi(postCreditAssetReportFreddieMacGetRoute, postCreditAssetReportFreddieMacGetRouteHandler)
  .openapi(postCreditAuditCopyTokenCreateRoute, postCreditAuditCopyTokenCreateRouteHandler)
  .openapi(postCreditAuditCopyTokenRemoveRoute, postCreditAuditCopyTokenRemoveRouteHandler)
  .openapi(postCreditAuditCopyTokenUpdateRoute, postCreditAuditCopyTokenUpdateRouteHandler)
  .openapi(postCreditBankIncomeGetRoute, postCreditBankIncomeGetRouteHandler)
  .openapi(postCreditBankIncomePdfGetRoute, postCreditBankIncomePdfGetRouteHandler)
  .openapi(postCreditBankIncomeRefreshRoute, postCreditBankIncomeRefreshRouteHandler)
  .openapi(postCreditEmploymentGetRoute, postCreditEmploymentGetRouteHandler)
  .openapi(postCreditFreddieMacReportsGetRoute, postCreditFreddieMacReportsGetRouteHandler)
  .openapi(postCreditPayrollIncomeGetRoute, postCreditPayrollIncomeGetRouteHandler)
  .openapi(postCreditPayrollIncomePrecheckRoute, postCreditPayrollIncomePrecheckRouteHandler)
  .openapi(postCreditPayrollIncomeRefreshRoute, postCreditPayrollIncomeRefreshRouteHandler)
  .openapi(postCreditRelayCreateRoute, postCreditRelayCreateRouteHandler)
  .openapi(postCreditRelayGetRoute, postCreditRelayGetRouteHandler)
  .openapi(postCreditRelayRefreshRoute, postCreditRelayRefreshRouteHandler)
  .openapi(postCreditRelayRemoveRoute, postCreditRelayRemoveRouteHandler)
  .openapi(postCreditSessionsGetRoute, postCreditSessionsGetRouteHandler)
  .openapi(postDashboardUserGetRoute, postDashboardUserGetRouteHandler)
  .openapi(postDashboardUserListRoute, postDashboardUserListRouteHandler)
  .openapi(postDepositSwitchAltCreateRoute, postDepositSwitchAltCreateRouteHandler)
  .openapi(postDepositSwitchCreateRoute, postDepositSwitchCreateRouteHandler)
  .openapi(postDepositSwitchGetRoute, postDepositSwitchGetRouteHandler)
  .openapi(postDepositSwitchTokenCreateRoute, postDepositSwitchTokenCreateRouteHandler)
  .openapi(postEmployersSearchRoute, postEmployersSearchRouteHandler)
  .openapi(postEmploymentVerificationGetRoute, postEmploymentVerificationGetRouteHandler)
  .openapi(postFdxNotificationsRoute, postFdxNotificationsRouteHandler)
  .openapi(postIdentityGetRoute, postIdentityGetRouteHandler)
  .openapi(postIdentityMatchRoute, postIdentityMatchRouteHandler)
  .openapi(postIdentityVerificationCreateRoute, postIdentityVerificationCreateRouteHandler)
  .openapi(postIdentityVerificationGetRoute, postIdentityVerificationGetRouteHandler)
  .openapi(postIdentityVerificationListRoute, postIdentityVerificationListRouteHandler)
  .openapi(postIdentityVerificationRetryRoute, postIdentityVerificationRetryRouteHandler)
  .openapi(postIncomeVerificationCreateRoute, postIncomeVerificationCreateRouteHandler)
  .openapi(
    postIncomeVerificationDocumentsDownloadRoute,
    postIncomeVerificationDocumentsDownloadRouteHandler,
  )
  .openapi(postIncomeVerificationPaystubsGetRoute, postIncomeVerificationPaystubsGetRouteHandler)
  .openapi(postIncomeVerificationPrecheckRoute, postIncomeVerificationPrecheckRouteHandler)
  .openapi(postIncomeVerificationTaxformsGetRoute, postIncomeVerificationTaxformsGetRouteHandler)
  .openapi(postInstitutionsGetRoute, postInstitutionsGetRouteHandler)
  .openapi(postInstitutionsGetByIdRoute, postInstitutionsGetByIdRouteHandler)
  .openapi(postInstitutionsSearchRoute, postInstitutionsSearchRouteHandler)
  .openapi(postInvestmentsHoldingsGetRoute, postInvestmentsHoldingsGetRouteHandler)
  .openapi(postInvestmentsTransactionsGetRoute, postInvestmentsTransactionsGetRouteHandler)
  .openapi(postItemAccessTokenInvalidateRoute, postItemAccessTokenInvalidateRouteHandler)
  .openapi(postItemActivityListRoute, postItemActivityListRouteHandler)
  .openapi(postItemApplicationListRoute, postItemApplicationListRouteHandler)
  .openapi(postItemApplicationScopesUpdateRoute, postItemApplicationScopesUpdateRouteHandler)
  .openapi(postItemGetRoute, postItemGetRouteHandler)
  .openapi(postItemImportRoute, postItemImportRouteHandler)
  .openapi(postItemPublicTokenCreateRoute, postItemPublicTokenCreateRouteHandler)
  .openapi(postItemPublicTokenExchangeRoute, postItemPublicTokenExchangeRouteHandler)
  .openapi(postItemRemoveRoute, postItemRemoveRouteHandler)
  .openapi(postItemWebhookUpdateRoute, postItemWebhookUpdateRouteHandler)
  .openapi(postLiabilitiesGetRoute, postLiabilitiesGetRouteHandler)
  .openapi(postLinkOauthCorrelationIdExchangeRoute, postLinkOauthCorrelationIdExchangeRouteHandler)
  .openapi(postLinkTokenCreateRoute, postLinkTokenCreateRouteHandler)
  .openapi(postLinkTokenGetRoute, postLinkTokenGetRouteHandler)
  .openapi(postLinkDeliveryCreateRoute, postLinkDeliveryCreateRouteHandler)
  .openapi(postLinkDeliveryGetRoute, postLinkDeliveryGetRouteHandler)
  .openapi(postPartnerCustomerCreateRoute, postPartnerCustomerCreateRouteHandler)
  .openapi(postPartnerCustomerEnableRoute, postPartnerCustomerEnableRouteHandler)
  .openapi(postPartnerCustomerGetRoute, postPartnerCustomerGetRouteHandler)
  .openapi(
    postPartnerCustomerOauthInstitutionsGetRoute,
    postPartnerCustomerOauthInstitutionsGetRouteHandler,
  )
  .openapi(postPartnerCustomerRemoveRoute, postPartnerCustomerRemoveRouteHandler)
  .openapi(postPaymentInitiationConsentCreateRoute, postPaymentInitiationConsentCreateRouteHandler)
  .openapi(postPaymentInitiationConsentGetRoute, postPaymentInitiationConsentGetRouteHandler)
  .openapi(
    postPaymentInitiationConsentPaymentExecuteRoute,
    postPaymentInitiationConsentPaymentExecuteRouteHandler,
  )
  .openapi(postPaymentInitiationConsentRevokeRoute, postPaymentInitiationConsentRevokeRouteHandler)
  .openapi(postPaymentInitiationPaymentCreateRoute, postPaymentInitiationPaymentCreateRouteHandler)
  .openapi(postPaymentInitiationPaymentGetRoute, postPaymentInitiationPaymentGetRouteHandler)
  .openapi(postPaymentInitiationPaymentListRoute, postPaymentInitiationPaymentListRouteHandler)
  .openapi(
    postPaymentInitiationPaymentReverseRoute,
    postPaymentInitiationPaymentReverseRouteHandler,
  )
  .openapi(
    postPaymentInitiationPaymentTokenCreateRoute,
    postPaymentInitiationPaymentTokenCreateRouteHandler,
  )
  .openapi(
    postPaymentInitiationRecipientCreateRoute,
    postPaymentInitiationRecipientCreateRouteHandler,
  )
  .openapi(postPaymentInitiationRecipientGetRoute, postPaymentInitiationRecipientGetRouteHandler)
  .openapi(postPaymentInitiationRecipientListRoute, postPaymentInitiationRecipientListRouteHandler)
  .openapi(postPaymentProfileCreateRoute, postPaymentProfileCreateRouteHandler)
  .openapi(postPaymentProfileGetRoute, postPaymentProfileGetRouteHandler)
  .openapi(postPaymentProfileRemoveRoute, postPaymentProfileRemoveRouteHandler)
  .openapi(
    postProcessorApexProcessorTokenCreateRoute,
    postProcessorApexProcessorTokenCreateRouteHandler,
  )
  .openapi(postProcessorAuthGetRoute, postProcessorAuthGetRouteHandler)
  .openapi(postProcessorBalanceGetRoute, postProcessorBalanceGetRouteHandler)
  .openapi(postProcessorBankTransferCreateRoute, postProcessorBankTransferCreateRouteHandler)
  .openapi(postProcessorIdentityGetRoute, postProcessorIdentityGetRouteHandler)
  .openapi(postProcessorSignalDecisionReportRoute, postProcessorSignalDecisionReportRouteHandler)
  .openapi(postProcessorSignalEvaluateRoute, postProcessorSignalEvaluateRouteHandler)
  .openapi(postProcessorSignalReturnReportRoute, postProcessorSignalReturnReportRouteHandler)
  .openapi(
    postProcessorStripeBankAccountTokenCreateRoute,
    postProcessorStripeBankAccountTokenCreateRouteHandler,
  )
  .openapi(postProcessorTokenCreateRoute, postProcessorTokenCreateRouteHandler)
  .openapi(postSandboxBankTransferFireWebhookRoute, postSandboxBankTransferFireWebhookRouteHandler)
  .openapi(postSandboxBankTransferSimulateRoute, postSandboxBankTransferSimulateRouteHandler)
  .openapi(postSandboxIncomeFireWebhookRoute, postSandboxIncomeFireWebhookRouteHandler)
  .openapi(postSandboxItemFireWebhookRoute, postSandboxItemFireWebhookRouteHandler)
  .openapi(postSandboxItemResetLoginRoute, postSandboxItemResetLoginRouteHandler)
  .openapi(
    postSandboxItemSetVerificationStatusRoute,
    postSandboxItemSetVerificationStatusRouteHandler,
  )
  .openapi(postSandboxOauthSelectAccountsRoute, postSandboxOauthSelectAccountsRouteHandler)
  .openapi(
    postSandboxPaymentProfileResetLoginRoute,
    postSandboxPaymentProfileResetLoginRouteHandler,
  )
  .openapi(postSandboxProcessorTokenCreateRoute, postSandboxProcessorTokenCreateRouteHandler)
  .openapi(postSandboxPublicTokenCreateRoute, postSandboxPublicTokenCreateRouteHandler)
  .openapi(postSandboxTransferFireWebhookRoute, postSandboxTransferFireWebhookRouteHandler)
  .openapi(
    postSandboxTransferRepaymentSimulateRoute,
    postSandboxTransferRepaymentSimulateRouteHandler,
  )
  .openapi(postSandboxTransferSimulateRoute, postSandboxTransferSimulateRouteHandler)
  .openapi(postSandboxTransferSweepSimulateRoute, postSandboxTransferSweepSimulateRouteHandler)
  .openapi(
    postSandboxTransferTestClockAdvanceRoute,
    postSandboxTransferTestClockAdvanceRouteHandler,
  )
  .openapi(postSandboxTransferTestClockCreateRoute, postSandboxTransferTestClockCreateRouteHandler)
  .openapi(postSandboxTransferTestClockGetRoute, postSandboxTransferTestClockGetRouteHandler)
  .openapi(postSandboxTransferTestClockListRoute, postSandboxTransferTestClockListRouteHandler)
  .openapi(postSignalDecisionReportRoute, postSignalDecisionReportRouteHandler)
  .openapi(postSignalEvaluateRoute, postSignalEvaluateRouteHandler)
  .openapi(postSignalPrepareRoute, postSignalPrepareRouteHandler)
  .openapi(postSignalReturnReportRoute, postSignalReturnReportRouteHandler)
  .openapi(postTransactionsEnrichRoute, postTransactionsEnrichRouteHandler)
  .openapi(postTransactionsGetRoute, postTransactionsGetRouteHandler)
  .openapi(postTransactionsRecurringGetRoute, postTransactionsRecurringGetRouteHandler)
  .openapi(postTransactionsRefreshRoute, postTransactionsRefreshRouteHandler)
  .openapi(postTransactionsSyncRoute, postTransactionsSyncRouteHandler)
  .openapi(postTransferAuthorizationCreateRoute, postTransferAuthorizationCreateRouteHandler)
  .openapi(postTransferCancelRoute, postTransferCancelRouteHandler)
  .openapi(postTransferCapabilitiesGetRoute, postTransferCapabilitiesGetRouteHandler)
  .openapi(postTransferCreateRoute, postTransferCreateRouteHandler)
  .openapi(postTransferEventListRoute, postTransferEventListRouteHandler)
  .openapi(postTransferEventSyncRoute, postTransferEventSyncRouteHandler)
  .openapi(postTransferGetRoute, postTransferGetRouteHandler)
  .openapi(postTransferIntentCreateRoute, postTransferIntentCreateRouteHandler)
  .openapi(postTransferIntentGetRoute, postTransferIntentGetRouteHandler)
  .openapi(postTransferListRoute, postTransferListRouteHandler)
  .openapi(postTransferMigrateAccountRoute, postTransferMigrateAccountRouteHandler)
  .openapi(postTransferOriginatorCreateRoute, postTransferOriginatorCreateRouteHandler)
  .openapi(postTransferOriginatorGetRoute, postTransferOriginatorGetRouteHandler)
  .openapi(postTransferOriginatorListRoute, postTransferOriginatorListRouteHandler)
  .openapi(postTransferQuestionnaireCreateRoute, postTransferQuestionnaireCreateRouteHandler)
  .openapi(postTransferRecurringCancelRoute, postTransferRecurringCancelRouteHandler)
  .openapi(postTransferRecurringCreateRoute, postTransferRecurringCreateRouteHandler)
  .openapi(postTransferRecurringGetRoute, postTransferRecurringGetRouteHandler)
  .openapi(postTransferRecurringListRoute, postTransferRecurringListRouteHandler)
  .openapi(postTransferRefundCancelRoute, postTransferRefundCancelRouteHandler)
  .openapi(postTransferRefundCreateRoute, postTransferRefundCreateRouteHandler)
  .openapi(postTransferRefundGetRoute, postTransferRefundGetRouteHandler)
  .openapi(postTransferRepaymentListRoute, postTransferRepaymentListRouteHandler)
  .openapi(postTransferRepaymentReturnListRoute, postTransferRepaymentReturnListRouteHandler)
  .openapi(postTransferSweepGetRoute, postTransferSweepGetRouteHandler)
  .openapi(postTransferSweepListRoute, postTransferSweepListRouteHandler)
  .openapi(postUserCreateRoute, postUserCreateRouteHandler)
  .openapi(postWalletCreateRoute, postWalletCreateRouteHandler)
  .openapi(postWalletGetRoute, postWalletGetRouteHandler)
  .openapi(postWalletListRoute, postWalletListRouteHandler)
  .openapi(postWalletTransactionExecuteRoute, postWalletTransactionExecuteRouteHandler)
  .openapi(postWalletTransactionGetRoute, postWalletTransactionGetRouteHandler)
  .openapi(postWalletTransactionListRoute, postWalletTransactionListRouteHandler)
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
  .openapi(postWebhookVerificationKeyGetRoute, postWebhookVerificationKeyGetRouteHandler)

export default app
