import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRoute,
  deleteV1AccountsAccountIdRecipientBanksBankIdRoute,
  deleteV1AccountsAccountIdTransfersTransferIdRoute,
  deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRoute,
  deleteV1betaAccountsAccountIdFundingWalletRecipientBankRoute,
  deleteV1InstantFundingInstantFundingIdRoute,
  deleteV1JournalsJournalIdRoute,
  deleteV1RebalancingPortfoliosPortfolioIdRoute,
  deleteV1RebalancingRunsRunIdRoute,
  deleteV1RebalancingSubscriptionsSubscriptionIdRoute,
  deleteV1TradingAccountsAccountIdOrdersOrderIdRoute,
  deleteV1TradingAccountsAccountIdOrdersRoute,
  deleteV1TradingAccountsAccountIdPositionsRoute,
  deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute,
  deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
  deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolRoute,
  getV1AccountsAccountIdAchRelationshipsRoute,
  getV1AccountsAccountIdCipRoute,
  getV1AccountsAccountIdDocumentsDocumentIdDownloadRoute,
  getV1AccountsAccountIdDocumentsRoute,
  getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadRoute,
  getV1AccountsAccountIdOnfidoSdkTokensRoute,
  getV1AccountsAccountIdRecipientBanksRoute,
  getV1AccountsAccountIdRoute,
  getV1AccountsAccountIdTokenizationRequestsByClientRequestIdRoute,
  getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdRoute,
  getV1AccountsAccountIdTokenizationRequestsRoute,
  getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdRoute,
  getV1AccountsAccountIdTransfersRoute,
  getV1AccountsAccountIdWalletsRoute,
  getV1AccountsAccountIdWalletsTransfersRoute,
  getV1AccountsAccountIdWalletsTransfersTransferIdRoute,
  getV1AccountsAccountIdWalletsWhitelistsRoute,
  getV1AccountsActivitiesActivityTypeRoute,
  getV1AccountsActivitiesRoute,
  getV1AccountsIraExcessContributionsRoute,
  getV1AccountsOptionsApprovalsRoute,
  getV1AccountsPositionsRoute,
  getV1AccountsRoute,
  getV1AssetsEntryRequirementsRoute,
  getV1AssetsFixedIncomeUsCorporatesRoute,
  getV1AssetsFixedIncomeUsTreasuriesRoute,
  getV1AssetsRoute,
  getV1AssetsSymbolOrAssetIdRoute,
  getV1beta1AcatsAccountIdAcatsIdAssetsRoute,
  getV1beta1AcatsAccountIdAcatsIdRoute,
  getV1beta1AcatsAccountIdRoute,
  getV1beta1AcatsContrabrokersRoute,
  getV1beta1AcatsRoute,
  getV1beta1LogosSymbolRoute,
  getV1betaAccountsAccountIdFundingWalletFundingDetailsRoute,
  getV1betaAccountsAccountIdFundingWalletRecipientBankRoute,
  getV1betaAccountsAccountIdFundingWalletRoute,
  getV1betaAccountsAccountIdFundingWalletTransfersRoute,
  getV1betaAccountsAccountIdFundingWalletTransfersTransferIdRoute,
  getV1CalendarRoute,
  getV1CashInterestAprTiersRoute,
  getV1ClockRoute,
  getV1CorporateActionsAnnouncementsIdRoute,
  getV1CorporateActionsAnnouncementsRoute,
  getV1CountryInfoRoute,
  getV1EventsAccountsStatusRoute,
  getV1EventsJournalsStatusRoute,
  getV1EventsNtaRoute,
  getV1EventsTransfersStatusRoute,
  getV1FpslAnalyticsAccountIdLoansRoute,
  getV1FpslLoansRoute,
  getV1FpslTiersRoute,
  getV1InstantFundingInstantFundingIdRoute,
  getV1InstantFundingLimitsAccountsRoute,
  getV1InstantFundingLimitsRoute,
  getV1InstantFundingReportsRoute,
  getV1InstantFundingRoute,
  getV1InstantFundingSettlementsRoute,
  getV1InstantFundingSettlementsSettlementIdRoute,
  getV1IposOfferingReferenceRoute,
  getV1IposRoute,
  getV1JitSettlementsRoute,
  getV1JitSettlementsSettlementIdRoute,
  getV1JournalsJournalIdRoute,
  getV1JournalsRoute,
  getV1OauthClientsClientIdRoute,
  getV1OptionsContractsRoute,
  getV1OptionsContractsSymbolOrIdRoute,
  getV1RebalancingPortfoliosPortfolioIdRoute,
  getV1RebalancingPortfoliosRoute,
  getV1RebalancingRunsRoute,
  getV1RebalancingRunsRunIdRoute,
  getV1RebalancingSubscriptionsRoute,
  getV1RebalancingSubscriptionsSubscriptionIdRoute,
  getV1ReportingEodAggregatePositionsRoute,
  getV1ReportingEodCashInterestRoute,
  getV1ReportingEodPositionsRoute,
  getV1TradingAccountsAccountIdAccountPortfolioHistoryRoute,
  getV1TradingAccountsAccountIdAccountRoute,
  getV1TradingAccountsAccountIdLimitsRoute,
  getV1TradingAccountsAccountIdOrdersByClientOrderIdRoute,
  getV1TradingAccountsAccountIdOrdersOrderIdRoute,
  getV1TradingAccountsAccountIdOrdersRoute,
  getV1TradingAccountsAccountIdPositionsRoute,
  getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute,
  getV1TradingAccountsAccountIdWatchlistsRoute,
  getV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
  getV1TransfersJitLedgerIdBalancesRoute,
  getV1TransfersJitLedgersRoute,
  getV1TransfersJitLimitsRoute,
  getV1TransfersJitReportsRoute,
  getV1WalletsFeesEstimateRoute,
  getV1WalletsTravelRuleVaspsRoute,
  getV2beta1AccountsAccountIdEventsActivitiesEventIdRoute,
  getV2beta1EventsActivitiesRoute,
  getV2CalendarMarketRoute,
  getV2ClockRoute,
  getV2EventsAdminActionsRoute,
  getV2EventsFundingStatusRoute,
  getV2EventsIposRoute,
  getV2EventsJournalsStatusRoute,
  getV2EventsRebalancerRoute,
  getV2EventsSystemRoute,
  getV2EventsTradesRoute,
  patchV1AccountsAccountIdOnfidoSdkRoute,
  patchV1AccountsAccountIdRoute,
  patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute,
  patchV1RebalancingPortfoliosPortfolioIdRoute,
  patchV1TradingAccountsAccountIdAccountConfigurationsRoute,
  patchV1TradingAccountsAccountIdOrdersOrderIdRoute,
  postV1AccountsAccountIdAchRelationshipsRoute,
  postV1AccountsAccountIdActionsCloseRoute,
  postV1AccountsAccountIdCipRoute,
  postV1AccountsAccountIdDocumentsUploadRoute,
  postV1AccountsAccountIdOptionsApprovalRoute,
  postV1AccountsAccountIdRecipientBanksRoute,
  postV1AccountsAccountIdTokenizationCallbackMintRoute,
  postV1AccountsAccountIdTokenizationCallbackRedeemRoute,
  postV1AccountsAccountIdTokenizationMintRoute,
  postV1AccountsAccountIdTransfersRoute,
  postV1AccountsAccountIdWalletsTransfersRoute,
  postV1AccountsAccountIdWalletsWhitelistsRoute,
  postV1AccountsRoute,
  postV1AgreementsRoute,
  postV1beta1AcatsAccountIdRoute,
  postV1betaAccountsAccountIdFundingWalletRecipientBankRoute,
  postV1betaAccountsAccountIdFundingWalletRoute,
  postV1betaAccountsAccountIdFundingWalletWithdrawalRoute,
  postV1betaAccountsFundingWalletRoute,
  postV1betaDemoBankingFundingRoute,
  postV1InstantFundingRoute,
  postV1InstantFundingSettlementsRoute,
  postV1JitSettlementsRoute,
  postV1JournalsBatchRoute,
  postV1JournalsReverseBatchRoute,
  postV1JournalsRoute,
  postV1OauthAuthorizeRoute,
  postV1OauthTokenRoute,
  postV1RebalancingPortfoliosRoute,
  postV1RebalancingRunsRoute,
  postV1RebalancingSubscriptionsRoute,
  postV1TestingIncomingWiresRoute,
  postV1TradingAccountsAccountIdOrdersEstimationRoute,
  postV1TradingAccountsAccountIdOrdersRoute,
  postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseRoute,
  postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseRoute,
  postV1TradingAccountsAccountIdWatchlistsRoute,
  postV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
  putV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
} from './routes'
import {
  deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRouteHandler,
  deleteV1AccountsAccountIdRecipientBanksBankIdRouteHandler,
  deleteV1AccountsAccountIdTransfersTransferIdRouteHandler,
  deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRouteHandler,
  deleteV1betaAccountsAccountIdFundingWalletRecipientBankRouteHandler,
  deleteV1InstantFundingInstantFundingIdRouteHandler,
  deleteV1JournalsJournalIdRouteHandler,
  deleteV1RebalancingPortfoliosPortfolioIdRouteHandler,
  deleteV1RebalancingRunsRunIdRouteHandler,
  deleteV1RebalancingSubscriptionsSubscriptionIdRouteHandler,
  deleteV1TradingAccountsAccountIdOrdersOrderIdRouteHandler,
  deleteV1TradingAccountsAccountIdOrdersRouteHandler,
  deleteV1TradingAccountsAccountIdPositionsRouteHandler,
  deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRouteHandler,
  deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler,
  deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolRouteHandler,
  getV1AccountsAccountIdAchRelationshipsRouteHandler,
  getV1AccountsAccountIdCipRouteHandler,
  getV1AccountsAccountIdDocumentsDocumentIdDownloadRouteHandler,
  getV1AccountsAccountIdDocumentsRouteHandler,
  getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadRouteHandler,
  getV1AccountsAccountIdOnfidoSdkTokensRouteHandler,
  getV1AccountsAccountIdRecipientBanksRouteHandler,
  getV1AccountsAccountIdRouteHandler,
  getV1AccountsAccountIdTokenizationRequestsByClientRequestIdRouteHandler,
  getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdRouteHandler,
  getV1AccountsAccountIdTokenizationRequestsRouteHandler,
  getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdRouteHandler,
  getV1AccountsAccountIdTransfersRouteHandler,
  getV1AccountsAccountIdWalletsRouteHandler,
  getV1AccountsAccountIdWalletsTransfersRouteHandler,
  getV1AccountsAccountIdWalletsTransfersTransferIdRouteHandler,
  getV1AccountsAccountIdWalletsWhitelistsRouteHandler,
  getV1AccountsActivitiesActivityTypeRouteHandler,
  getV1AccountsActivitiesRouteHandler,
  getV1AccountsIraExcessContributionsRouteHandler,
  getV1AccountsOptionsApprovalsRouteHandler,
  getV1AccountsPositionsRouteHandler,
  getV1AccountsRouteHandler,
  getV1AssetsEntryRequirementsRouteHandler,
  getV1AssetsFixedIncomeUsCorporatesRouteHandler,
  getV1AssetsFixedIncomeUsTreasuriesRouteHandler,
  getV1AssetsRouteHandler,
  getV1AssetsSymbolOrAssetIdRouteHandler,
  getV1beta1AcatsAccountIdAcatsIdAssetsRouteHandler,
  getV1beta1AcatsAccountIdAcatsIdRouteHandler,
  getV1beta1AcatsAccountIdRouteHandler,
  getV1beta1AcatsContrabrokersRouteHandler,
  getV1beta1AcatsRouteHandler,
  getV1beta1LogosSymbolRouteHandler,
  getV1betaAccountsAccountIdFundingWalletFundingDetailsRouteHandler,
  getV1betaAccountsAccountIdFundingWalletRecipientBankRouteHandler,
  getV1betaAccountsAccountIdFundingWalletRouteHandler,
  getV1betaAccountsAccountIdFundingWalletTransfersRouteHandler,
  getV1betaAccountsAccountIdFundingWalletTransfersTransferIdRouteHandler,
  getV1CalendarRouteHandler,
  getV1CashInterestAprTiersRouteHandler,
  getV1ClockRouteHandler,
  getV1CorporateActionsAnnouncementsIdRouteHandler,
  getV1CorporateActionsAnnouncementsRouteHandler,
  getV1CountryInfoRouteHandler,
  getV1EventsAccountsStatusRouteHandler,
  getV1EventsJournalsStatusRouteHandler,
  getV1EventsNtaRouteHandler,
  getV1EventsTransfersStatusRouteHandler,
  getV1FpslAnalyticsAccountIdLoansRouteHandler,
  getV1FpslLoansRouteHandler,
  getV1FpslTiersRouteHandler,
  getV1InstantFundingInstantFundingIdRouteHandler,
  getV1InstantFundingLimitsAccountsRouteHandler,
  getV1InstantFundingLimitsRouteHandler,
  getV1InstantFundingReportsRouteHandler,
  getV1InstantFundingRouteHandler,
  getV1InstantFundingSettlementsRouteHandler,
  getV1InstantFundingSettlementsSettlementIdRouteHandler,
  getV1IposOfferingReferenceRouteHandler,
  getV1IposRouteHandler,
  getV1JitSettlementsRouteHandler,
  getV1JitSettlementsSettlementIdRouteHandler,
  getV1JournalsJournalIdRouteHandler,
  getV1JournalsRouteHandler,
  getV1OauthClientsClientIdRouteHandler,
  getV1OptionsContractsRouteHandler,
  getV1OptionsContractsSymbolOrIdRouteHandler,
  getV1RebalancingPortfoliosPortfolioIdRouteHandler,
  getV1RebalancingPortfoliosRouteHandler,
  getV1RebalancingRunsRouteHandler,
  getV1RebalancingRunsRunIdRouteHandler,
  getV1RebalancingSubscriptionsRouteHandler,
  getV1RebalancingSubscriptionsSubscriptionIdRouteHandler,
  getV1ReportingEodAggregatePositionsRouteHandler,
  getV1ReportingEodCashInterestRouteHandler,
  getV1ReportingEodPositionsRouteHandler,
  getV1TradingAccountsAccountIdAccountPortfolioHistoryRouteHandler,
  getV1TradingAccountsAccountIdAccountRouteHandler,
  getV1TradingAccountsAccountIdLimitsRouteHandler,
  getV1TradingAccountsAccountIdOrdersByClientOrderIdRouteHandler,
  getV1TradingAccountsAccountIdOrdersOrderIdRouteHandler,
  getV1TradingAccountsAccountIdOrdersRouteHandler,
  getV1TradingAccountsAccountIdPositionsRouteHandler,
  getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRouteHandler,
  getV1TradingAccountsAccountIdWatchlistsRouteHandler,
  getV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler,
  getV1TransfersJitLedgerIdBalancesRouteHandler,
  getV1TransfersJitLedgersRouteHandler,
  getV1TransfersJitLimitsRouteHandler,
  getV1TransfersJitReportsRouteHandler,
  getV1WalletsFeesEstimateRouteHandler,
  getV1WalletsTravelRuleVaspsRouteHandler,
  getV2beta1AccountsAccountIdEventsActivitiesEventIdRouteHandler,
  getV2beta1EventsActivitiesRouteHandler,
  getV2CalendarMarketRouteHandler,
  getV2ClockRouteHandler,
  getV2EventsAdminActionsRouteHandler,
  getV2EventsFundingStatusRouteHandler,
  getV2EventsIposRouteHandler,
  getV2EventsJournalsStatusRouteHandler,
  getV2EventsRebalancerRouteHandler,
  getV2EventsSystemRouteHandler,
  getV2EventsTradesRouteHandler,
  patchV1AccountsAccountIdOnfidoSdkRouteHandler,
  patchV1AccountsAccountIdRouteHandler,
  patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRouteHandler,
  patchV1RebalancingPortfoliosPortfolioIdRouteHandler,
  patchV1TradingAccountsAccountIdAccountConfigurationsRouteHandler,
  patchV1TradingAccountsAccountIdOrdersOrderIdRouteHandler,
  postV1AccountsAccountIdAchRelationshipsRouteHandler,
  postV1AccountsAccountIdActionsCloseRouteHandler,
  postV1AccountsAccountIdCipRouteHandler,
  postV1AccountsAccountIdDocumentsUploadRouteHandler,
  postV1AccountsAccountIdOptionsApprovalRouteHandler,
  postV1AccountsAccountIdRecipientBanksRouteHandler,
  postV1AccountsAccountIdTokenizationCallbackMintRouteHandler,
  postV1AccountsAccountIdTokenizationCallbackRedeemRouteHandler,
  postV1AccountsAccountIdTokenizationMintRouteHandler,
  postV1AccountsAccountIdTransfersRouteHandler,
  postV1AccountsAccountIdWalletsTransfersRouteHandler,
  postV1AccountsAccountIdWalletsWhitelistsRouteHandler,
  postV1AccountsRouteHandler,
  postV1AgreementsRouteHandler,
  postV1beta1AcatsAccountIdRouteHandler,
  postV1betaAccountsAccountIdFundingWalletRecipientBankRouteHandler,
  postV1betaAccountsAccountIdFundingWalletRouteHandler,
  postV1betaAccountsAccountIdFundingWalletWithdrawalRouteHandler,
  postV1betaAccountsFundingWalletRouteHandler,
  postV1betaDemoBankingFundingRouteHandler,
  postV1InstantFundingRouteHandler,
  postV1InstantFundingSettlementsRouteHandler,
  postV1JitSettlementsRouteHandler,
  postV1JournalsBatchRouteHandler,
  postV1JournalsReverseBatchRouteHandler,
  postV1JournalsRouteHandler,
  postV1OauthAuthorizeRouteHandler,
  postV1OauthTokenRouteHandler,
  postV1RebalancingPortfoliosRouteHandler,
  postV1RebalancingRunsRouteHandler,
  postV1RebalancingSubscriptionsRouteHandler,
  postV1TestingIncomingWiresRouteHandler,
  postV1TradingAccountsAccountIdOrdersEstimationRouteHandler,
  postV1TradingAccountsAccountIdOrdersRouteHandler,
  postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseRouteHandler,
  postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseRouteHandler,
  postV1TradingAccountsAccountIdWatchlistsRouteHandler,
  postV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler,
  putV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV1betaAccountsAccountIdFundingWalletRoute,
    getV1betaAccountsAccountIdFundingWalletRouteHandler,
  )
  .openapi(
    postV1betaAccountsAccountIdFundingWalletRoute,
    postV1betaAccountsAccountIdFundingWalletRouteHandler,
  )
  .openapi(
    getV1betaAccountsAccountIdFundingWalletFundingDetailsRoute,
    getV1betaAccountsAccountIdFundingWalletFundingDetailsRouteHandler,
  )
  .openapi(
    deleteV1betaAccountsAccountIdFundingWalletRecipientBankRoute,
    deleteV1betaAccountsAccountIdFundingWalletRecipientBankRouteHandler,
  )
  .openapi(
    getV1betaAccountsAccountIdFundingWalletRecipientBankRoute,
    getV1betaAccountsAccountIdFundingWalletRecipientBankRouteHandler,
  )
  .openapi(
    postV1betaAccountsAccountIdFundingWalletRecipientBankRoute,
    postV1betaAccountsAccountIdFundingWalletRecipientBankRouteHandler,
  )
  .openapi(
    getV1betaAccountsAccountIdFundingWalletTransfersRoute,
    getV1betaAccountsAccountIdFundingWalletTransfersRouteHandler,
  )
  .openapi(
    getV1betaAccountsAccountIdFundingWalletTransfersTransferIdRoute,
    getV1betaAccountsAccountIdFundingWalletTransfersTransferIdRouteHandler,
  )
  .openapi(
    postV1betaAccountsAccountIdFundingWalletWithdrawalRoute,
    postV1betaAccountsAccountIdFundingWalletWithdrawalRouteHandler,
  )
  .openapi(postV1betaAccountsFundingWalletRoute, postV1betaAccountsFundingWalletRouteHandler)
  .openapi(postV1betaDemoBankingFundingRoute, postV1betaDemoBankingFundingRouteHandler)
  .openapi(getV1beta1AcatsRoute, getV1beta1AcatsRouteHandler)
  .openapi(getV1beta1AcatsAccountIdRoute, getV1beta1AcatsAccountIdRouteHandler)
  .openapi(postV1beta1AcatsAccountIdRoute, postV1beta1AcatsAccountIdRouteHandler)
  .openapi(getV1beta1AcatsAccountIdAcatsIdRoute, getV1beta1AcatsAccountIdAcatsIdRouteHandler)
  .openapi(
    getV1beta1AcatsAccountIdAcatsIdAssetsRoute,
    getV1beta1AcatsAccountIdAcatsIdAssetsRouteHandler,
  )
  .openapi(getV1beta1AcatsContrabrokersRoute, getV1beta1AcatsContrabrokersRouteHandler)
  .openapi(getV1beta1LogosSymbolRoute, getV1beta1LogosSymbolRouteHandler)
  .openapi(getV1AccountsRoute, getV1AccountsRouteHandler)
  .openapi(postV1AccountsRoute, postV1AccountsRouteHandler)
  .openapi(getV1AccountsAccountIdRoute, getV1AccountsAccountIdRouteHandler)
  .openapi(patchV1AccountsAccountIdRoute, patchV1AccountsAccountIdRouteHandler)
  .openapi(
    getV1AccountsAccountIdAchRelationshipsRoute,
    getV1AccountsAccountIdAchRelationshipsRouteHandler,
  )
  .openapi(
    postV1AccountsAccountIdAchRelationshipsRoute,
    postV1AccountsAccountIdAchRelationshipsRouteHandler,
  )
  .openapi(
    deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRoute,
    deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRouteHandler,
  )
  .openapi(
    postV1AccountsAccountIdActionsCloseRoute,
    postV1AccountsAccountIdActionsCloseRouteHandler,
  )
  .openapi(getV1AccountsAccountIdCipRoute, getV1AccountsAccountIdCipRouteHandler)
  .openapi(postV1AccountsAccountIdCipRoute, postV1AccountsAccountIdCipRouteHandler)
  .openapi(getV1AccountsAccountIdDocumentsRoute, getV1AccountsAccountIdDocumentsRouteHandler)
  .openapi(
    getV1AccountsAccountIdDocumentsDocumentIdDownloadRoute,
    getV1AccountsAccountIdDocumentsDocumentIdDownloadRouteHandler,
  )
  .openapi(
    postV1AccountsAccountIdDocumentsUploadRoute,
    postV1AccountsAccountIdDocumentsUploadRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadRoute,
    getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadRouteHandler,
  )
  .openapi(patchV1AccountsAccountIdOnfidoSdkRoute, patchV1AccountsAccountIdOnfidoSdkRouteHandler)
  .openapi(
    getV1AccountsAccountIdOnfidoSdkTokensRoute,
    getV1AccountsAccountIdOnfidoSdkTokensRouteHandler,
  )
  .openapi(
    postV1AccountsAccountIdOptionsApprovalRoute,
    postV1AccountsAccountIdOptionsApprovalRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdRecipientBanksRoute,
    getV1AccountsAccountIdRecipientBanksRouteHandler,
  )
  .openapi(
    postV1AccountsAccountIdRecipientBanksRoute,
    postV1AccountsAccountIdRecipientBanksRouteHandler,
  )
  .openapi(
    deleteV1AccountsAccountIdRecipientBanksBankIdRoute,
    deleteV1AccountsAccountIdRecipientBanksBankIdRouteHandler,
  )
  .openapi(
    postV1AccountsAccountIdTokenizationCallbackMintRoute,
    postV1AccountsAccountIdTokenizationCallbackMintRouteHandler,
  )
  .openapi(
    postV1AccountsAccountIdTokenizationCallbackRedeemRoute,
    postV1AccountsAccountIdTokenizationCallbackRedeemRouteHandler,
  )
  .openapi(
    postV1AccountsAccountIdTokenizationMintRoute,
    postV1AccountsAccountIdTokenizationMintRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdTokenizationRequestsRoute,
    getV1AccountsAccountIdTokenizationRequestsRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdRoute,
    getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdTokenizationRequestsByClientRequestIdRoute,
    getV1AccountsAccountIdTokenizationRequestsByClientRequestIdRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdRoute,
    getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdRouteHandler,
  )
  .openapi(getV1AccountsAccountIdTransfersRoute, getV1AccountsAccountIdTransfersRouteHandler)
  .openapi(postV1AccountsAccountIdTransfersRoute, postV1AccountsAccountIdTransfersRouteHandler)
  .openapi(
    deleteV1AccountsAccountIdTransfersTransferIdRoute,
    deleteV1AccountsAccountIdTransfersTransferIdRouteHandler,
  )
  .openapi(getV1AccountsAccountIdWalletsRoute, getV1AccountsAccountIdWalletsRouteHandler)
  .openapi(
    getV1AccountsAccountIdWalletsTransfersRoute,
    getV1AccountsAccountIdWalletsTransfersRouteHandler,
  )
  .openapi(
    postV1AccountsAccountIdWalletsTransfersRoute,
    postV1AccountsAccountIdWalletsTransfersRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdWalletsTransfersTransferIdRoute,
    getV1AccountsAccountIdWalletsTransfersTransferIdRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdWalletsWhitelistsRoute,
    getV1AccountsAccountIdWalletsWhitelistsRouteHandler,
  )
  .openapi(
    postV1AccountsAccountIdWalletsWhitelistsRoute,
    postV1AccountsAccountIdWalletsWhitelistsRouteHandler,
  )
  .openapi(
    deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRoute,
    deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRouteHandler,
  )
  .openapi(
    patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute,
    patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRouteHandler,
  )
  .openapi(getV1AccountsActivitiesRoute, getV1AccountsActivitiesRouteHandler)
  .openapi(
    getV1AccountsActivitiesActivityTypeRoute,
    getV1AccountsActivitiesActivityTypeRouteHandler,
  )
  .openapi(
    getV1AccountsIraExcessContributionsRoute,
    getV1AccountsIraExcessContributionsRouteHandler,
  )
  .openapi(getV1AccountsOptionsApprovalsRoute, getV1AccountsOptionsApprovalsRouteHandler)
  .openapi(getV1AccountsPositionsRoute, getV1AccountsPositionsRouteHandler)
  .openapi(postV1AgreementsRoute, postV1AgreementsRouteHandler)
  .openapi(getV1AssetsRoute, getV1AssetsRouteHandler)
  .openapi(getV1AssetsSymbolOrAssetIdRoute, getV1AssetsSymbolOrAssetIdRouteHandler)
  .openapi(getV1AssetsEntryRequirementsRoute, getV1AssetsEntryRequirementsRouteHandler)
  .openapi(getV1AssetsFixedIncomeUsCorporatesRoute, getV1AssetsFixedIncomeUsCorporatesRouteHandler)
  .openapi(getV1AssetsFixedIncomeUsTreasuriesRoute, getV1AssetsFixedIncomeUsTreasuriesRouteHandler)
  .openapi(getV1CalendarRoute, getV1CalendarRouteHandler)
  .openapi(getV1CashInterestAprTiersRoute, getV1CashInterestAprTiersRouteHandler)
  .openapi(getV1ClockRoute, getV1ClockRouteHandler)
  .openapi(getV1CorporateActionsAnnouncementsRoute, getV1CorporateActionsAnnouncementsRouteHandler)
  .openapi(
    getV1CorporateActionsAnnouncementsIdRoute,
    getV1CorporateActionsAnnouncementsIdRouteHandler,
  )
  .openapi(getV1CountryInfoRoute, getV1CountryInfoRouteHandler)
  .openapi(getV1EventsAccountsStatusRoute, getV1EventsAccountsStatusRouteHandler)
  .openapi(getV1EventsJournalsStatusRoute, getV1EventsJournalsStatusRouteHandler)
  .openapi(getV1EventsNtaRoute, getV1EventsNtaRouteHandler)
  .openapi(getV1EventsTransfersStatusRoute, getV1EventsTransfersStatusRouteHandler)
  .openapi(getV1FpslAnalyticsAccountIdLoansRoute, getV1FpslAnalyticsAccountIdLoansRouteHandler)
  .openapi(getV1FpslLoansRoute, getV1FpslLoansRouteHandler)
  .openapi(getV1FpslTiersRoute, getV1FpslTiersRouteHandler)
  .openapi(getV1InstantFundingRoute, getV1InstantFundingRouteHandler)
  .openapi(postV1InstantFundingRoute, postV1InstantFundingRouteHandler)
  .openapi(
    deleteV1InstantFundingInstantFundingIdRoute,
    deleteV1InstantFundingInstantFundingIdRouteHandler,
  )
  .openapi(
    getV1InstantFundingInstantFundingIdRoute,
    getV1InstantFundingInstantFundingIdRouteHandler,
  )
  .openapi(getV1InstantFundingLimitsRoute, getV1InstantFundingLimitsRouteHandler)
  .openapi(getV1InstantFundingLimitsAccountsRoute, getV1InstantFundingLimitsAccountsRouteHandler)
  .openapi(getV1InstantFundingReportsRoute, getV1InstantFundingReportsRouteHandler)
  .openapi(getV1InstantFundingSettlementsRoute, getV1InstantFundingSettlementsRouteHandler)
  .openapi(postV1InstantFundingSettlementsRoute, postV1InstantFundingSettlementsRouteHandler)
  .openapi(
    getV1InstantFundingSettlementsSettlementIdRoute,
    getV1InstantFundingSettlementsSettlementIdRouteHandler,
  )
  .openapi(getV1IposRoute, getV1IposRouteHandler)
  .openapi(getV1IposOfferingReferenceRoute, getV1IposOfferingReferenceRouteHandler)
  .openapi(getV1JitSettlementsRoute, getV1JitSettlementsRouteHandler)
  .openapi(postV1JitSettlementsRoute, postV1JitSettlementsRouteHandler)
  .openapi(getV1JitSettlementsSettlementIdRoute, getV1JitSettlementsSettlementIdRouteHandler)
  .openapi(getV1JournalsRoute, getV1JournalsRouteHandler)
  .openapi(postV1JournalsRoute, postV1JournalsRouteHandler)
  .openapi(deleteV1JournalsJournalIdRoute, deleteV1JournalsJournalIdRouteHandler)
  .openapi(getV1JournalsJournalIdRoute, getV1JournalsJournalIdRouteHandler)
  .openapi(postV1JournalsBatchRoute, postV1JournalsBatchRouteHandler)
  .openapi(postV1JournalsReverseBatchRoute, postV1JournalsReverseBatchRouteHandler)
  .openapi(postV1OauthAuthorizeRoute, postV1OauthAuthorizeRouteHandler)
  .openapi(getV1OauthClientsClientIdRoute, getV1OauthClientsClientIdRouteHandler)
  .openapi(postV1OauthTokenRoute, postV1OauthTokenRouteHandler)
  .openapi(getV1OptionsContractsRoute, getV1OptionsContractsRouteHandler)
  .openapi(getV1OptionsContractsSymbolOrIdRoute, getV1OptionsContractsSymbolOrIdRouteHandler)
  .openapi(getV1RebalancingPortfoliosRoute, getV1RebalancingPortfoliosRouteHandler)
  .openapi(postV1RebalancingPortfoliosRoute, postV1RebalancingPortfoliosRouteHandler)
  .openapi(
    deleteV1RebalancingPortfoliosPortfolioIdRoute,
    deleteV1RebalancingPortfoliosPortfolioIdRouteHandler,
  )
  .openapi(
    getV1RebalancingPortfoliosPortfolioIdRoute,
    getV1RebalancingPortfoliosPortfolioIdRouteHandler,
  )
  .openapi(
    patchV1RebalancingPortfoliosPortfolioIdRoute,
    patchV1RebalancingPortfoliosPortfolioIdRouteHandler,
  )
  .openapi(getV1RebalancingRunsRoute, getV1RebalancingRunsRouteHandler)
  .openapi(postV1RebalancingRunsRoute, postV1RebalancingRunsRouteHandler)
  .openapi(deleteV1RebalancingRunsRunIdRoute, deleteV1RebalancingRunsRunIdRouteHandler)
  .openapi(getV1RebalancingRunsRunIdRoute, getV1RebalancingRunsRunIdRouteHandler)
  .openapi(getV1RebalancingSubscriptionsRoute, getV1RebalancingSubscriptionsRouteHandler)
  .openapi(postV1RebalancingSubscriptionsRoute, postV1RebalancingSubscriptionsRouteHandler)
  .openapi(
    deleteV1RebalancingSubscriptionsSubscriptionIdRoute,
    deleteV1RebalancingSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    getV1RebalancingSubscriptionsSubscriptionIdRoute,
    getV1RebalancingSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    getV1ReportingEodAggregatePositionsRoute,
    getV1ReportingEodAggregatePositionsRouteHandler,
  )
  .openapi(getV1ReportingEodCashInterestRoute, getV1ReportingEodCashInterestRouteHandler)
  .openapi(getV1ReportingEodPositionsRoute, getV1ReportingEodPositionsRouteHandler)
  .openapi(postV1TestingIncomingWiresRoute, postV1TestingIncomingWiresRouteHandler)
  .openapi(
    getV1TradingAccountsAccountIdAccountRoute,
    getV1TradingAccountsAccountIdAccountRouteHandler,
  )
  .openapi(
    patchV1TradingAccountsAccountIdAccountConfigurationsRoute,
    patchV1TradingAccountsAccountIdAccountConfigurationsRouteHandler,
  )
  .openapi(
    getV1TradingAccountsAccountIdAccountPortfolioHistoryRoute,
    getV1TradingAccountsAccountIdAccountPortfolioHistoryRouteHandler,
  )
  .openapi(
    getV1TradingAccountsAccountIdLimitsRoute,
    getV1TradingAccountsAccountIdLimitsRouteHandler,
  )
  .openapi(
    deleteV1TradingAccountsAccountIdOrdersRoute,
    deleteV1TradingAccountsAccountIdOrdersRouteHandler,
  )
  .openapi(
    getV1TradingAccountsAccountIdOrdersRoute,
    getV1TradingAccountsAccountIdOrdersRouteHandler,
  )
  .openapi(
    postV1TradingAccountsAccountIdOrdersRoute,
    postV1TradingAccountsAccountIdOrdersRouteHandler,
  )
  .openapi(
    deleteV1TradingAccountsAccountIdOrdersOrderIdRoute,
    deleteV1TradingAccountsAccountIdOrdersOrderIdRouteHandler,
  )
  .openapi(
    getV1TradingAccountsAccountIdOrdersOrderIdRoute,
    getV1TradingAccountsAccountIdOrdersOrderIdRouteHandler,
  )
  .openapi(
    patchV1TradingAccountsAccountIdOrdersOrderIdRoute,
    patchV1TradingAccountsAccountIdOrdersOrderIdRouteHandler,
  )
  .openapi(
    postV1TradingAccountsAccountIdOrdersEstimationRoute,
    postV1TradingAccountsAccountIdOrdersEstimationRouteHandler,
  )
  .openapi(
    getV1TradingAccountsAccountIdOrdersByClientOrderIdRoute,
    getV1TradingAccountsAccountIdOrdersByClientOrderIdRouteHandler,
  )
  .openapi(
    deleteV1TradingAccountsAccountIdPositionsRoute,
    deleteV1TradingAccountsAccountIdPositionsRouteHandler,
  )
  .openapi(
    getV1TradingAccountsAccountIdPositionsRoute,
    getV1TradingAccountsAccountIdPositionsRouteHandler,
  )
  .openapi(
    deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute,
    deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRouteHandler,
  )
  .openapi(
    getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute,
    getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRouteHandler,
  )
  .openapi(
    postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseRoute,
    postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseRouteHandler,
  )
  .openapi(
    postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseRoute,
    postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseRouteHandler,
  )
  .openapi(
    getV1TradingAccountsAccountIdWatchlistsRoute,
    getV1TradingAccountsAccountIdWatchlistsRouteHandler,
  )
  .openapi(
    postV1TradingAccountsAccountIdWatchlistsRoute,
    postV1TradingAccountsAccountIdWatchlistsRouteHandler,
  )
  .openapi(
    deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
    deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler,
  )
  .openapi(
    getV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
    getV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler,
  )
  .openapi(
    postV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
    postV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler,
  )
  .openapi(
    putV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute,
    putV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler,
  )
  .openapi(
    deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolRoute,
    deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolRouteHandler,
  )
  .openapi(getV1TransfersJitLedgerIdBalancesRoute, getV1TransfersJitLedgerIdBalancesRouteHandler)
  .openapi(getV1TransfersJitLedgersRoute, getV1TransfersJitLedgersRouteHandler)
  .openapi(getV1TransfersJitLimitsRoute, getV1TransfersJitLimitsRouteHandler)
  .openapi(getV1TransfersJitReportsRoute, getV1TransfersJitReportsRouteHandler)
  .openapi(getV1WalletsFeesEstimateRoute, getV1WalletsFeesEstimateRouteHandler)
  .openapi(getV1WalletsTravelRuleVaspsRoute, getV1WalletsTravelRuleVaspsRouteHandler)
  .openapi(
    getV2beta1AccountsAccountIdEventsActivitiesEventIdRoute,
    getV2beta1AccountsAccountIdEventsActivitiesEventIdRouteHandler,
  )
  .openapi(getV2beta1EventsActivitiesRoute, getV2beta1EventsActivitiesRouteHandler)
  .openapi(getV2CalendarMarketRoute, getV2CalendarMarketRouteHandler)
  .openapi(getV2ClockRoute, getV2ClockRouteHandler)
  .openapi(getV2EventsAdminActionsRoute, getV2EventsAdminActionsRouteHandler)
  .openapi(getV2EventsFundingStatusRoute, getV2EventsFundingStatusRouteHandler)
  .openapi(getV2EventsIposRoute, getV2EventsIposRouteHandler)
  .openapi(getV2EventsJournalsStatusRoute, getV2EventsJournalsStatusRouteHandler)
  .openapi(getV2EventsRebalancerRoute, getV2EventsRebalancerRouteHandler)
  .openapi(getV2EventsSystemRoute, getV2EventsSystemRouteHandler)
  .openapi(getV2EventsTradesRoute, getV2EventsTradesRouteHandler)

export default app
