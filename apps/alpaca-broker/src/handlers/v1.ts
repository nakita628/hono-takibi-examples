import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRoute,
  deleteV1AccountsAccountIdRecipientBanksBankIdRoute,
  deleteV1AccountsAccountIdTransfersTransferIdRoute,
  deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRoute,
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
} from '../routes'

export const getV1AccountsRouteHandler: RouteHandler<typeof getV1AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsRouteHandler: RouteHandler<typeof postV1AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AccountsAccountIdRouteHandler: RouteHandler<
  typeof patchV1AccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdAchRelationshipsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdAchRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdAchRelationshipsRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdAchRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRouteHandler: RouteHandler<
  typeof deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdActionsCloseRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdActionsCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdCipRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdCipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdCipRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdCipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdDocumentsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdDocumentsDocumentIdDownloadRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdDocumentsDocumentIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdDocumentsUploadRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdDocumentsUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AccountsAccountIdOnfidoSdkRouteHandler: RouteHandler<
  typeof patchV1AccountsAccountIdOnfidoSdkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdOnfidoSdkTokensRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdOnfidoSdkTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdOptionsApprovalRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdOptionsApprovalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdRecipientBanksRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdRecipientBanksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdRecipientBanksRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdRecipientBanksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountsAccountIdRecipientBanksBankIdRouteHandler: RouteHandler<
  typeof deleteV1AccountsAccountIdRecipientBanksBankIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdTokenizationCallbackMintRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdTokenizationCallbackMintRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdTokenizationCallbackRedeemRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdTokenizationCallbackRedeemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdTokenizationMintRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdTokenizationMintRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdTokenizationRequestsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdTokenizationRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdTokenizationRequestsByClientRequestIdRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdTokenizationRequestsByClientRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdTransfersRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdTransfersRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountsAccountIdTransfersTransferIdRouteHandler: RouteHandler<
  typeof deleteV1AccountsAccountIdTransfersTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdWalletsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdWalletsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdWalletsTransfersRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdWalletsTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdWalletsTransfersRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdWalletsTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdWalletsTransfersTransferIdRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdWalletsTransfersTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsAccountIdWalletsWhitelistsRouteHandler: RouteHandler<
  typeof getV1AccountsAccountIdWalletsWhitelistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AccountsAccountIdWalletsWhitelistsRouteHandler: RouteHandler<
  typeof postV1AccountsAccountIdWalletsWhitelistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRouteHandler: RouteHandler<
  typeof deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRouteHandler: RouteHandler<
  typeof patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsActivitiesRouteHandler: RouteHandler<
  typeof getV1AccountsActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsActivitiesActivityTypeRouteHandler: RouteHandler<
  typeof getV1AccountsActivitiesActivityTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsIraExcessContributionsRouteHandler: RouteHandler<
  typeof getV1AccountsIraExcessContributionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsOptionsApprovalsRouteHandler: RouteHandler<
  typeof getV1AccountsOptionsApprovalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AccountsPositionsRouteHandler: RouteHandler<
  typeof getV1AccountsPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AgreementsRouteHandler: RouteHandler<typeof postV1AgreementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AssetsRouteHandler: RouteHandler<typeof getV1AssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AssetsSymbolOrAssetIdRouteHandler: RouteHandler<
  typeof getV1AssetsSymbolOrAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AssetsEntryRequirementsRouteHandler: RouteHandler<
  typeof getV1AssetsEntryRequirementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AssetsFixedIncomeUsCorporatesRouteHandler: RouteHandler<
  typeof getV1AssetsFixedIncomeUsCorporatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AssetsFixedIncomeUsTreasuriesRouteHandler: RouteHandler<
  typeof getV1AssetsFixedIncomeUsTreasuriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CalendarRouteHandler: RouteHandler<typeof getV1CalendarRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CashInterestAprTiersRouteHandler: RouteHandler<
  typeof getV1CashInterestAprTiersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ClockRouteHandler: RouteHandler<typeof getV1ClockRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CorporateActionsAnnouncementsRouteHandler: RouteHandler<
  typeof getV1CorporateActionsAnnouncementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CorporateActionsAnnouncementsIdRouteHandler: RouteHandler<
  typeof getV1CorporateActionsAnnouncementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CountryInfoRouteHandler: RouteHandler<typeof getV1CountryInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1EventsAccountsStatusRouteHandler: RouteHandler<
  typeof getV1EventsAccountsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsJournalsStatusRouteHandler: RouteHandler<
  typeof getV1EventsJournalsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsNtaRouteHandler: RouteHandler<typeof getV1EventsNtaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsTransfersStatusRouteHandler: RouteHandler<
  typeof getV1EventsTransfersStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FpslAnalyticsAccountIdLoansRouteHandler: RouteHandler<
  typeof getV1FpslAnalyticsAccountIdLoansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FpslLoansRouteHandler: RouteHandler<typeof getV1FpslLoansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FpslTiersRouteHandler: RouteHandler<typeof getV1FpslTiersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstantFundingRouteHandler: RouteHandler<
  typeof getV1InstantFundingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstantFundingRouteHandler: RouteHandler<
  typeof postV1InstantFundingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1InstantFundingInstantFundingIdRouteHandler: RouteHandler<
  typeof deleteV1InstantFundingInstantFundingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstantFundingInstantFundingIdRouteHandler: RouteHandler<
  typeof getV1InstantFundingInstantFundingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstantFundingLimitsRouteHandler: RouteHandler<
  typeof getV1InstantFundingLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstantFundingLimitsAccountsRouteHandler: RouteHandler<
  typeof getV1InstantFundingLimitsAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstantFundingReportsRouteHandler: RouteHandler<
  typeof getV1InstantFundingReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstantFundingSettlementsRouteHandler: RouteHandler<
  typeof getV1InstantFundingSettlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InstantFundingSettlementsRouteHandler: RouteHandler<
  typeof postV1InstantFundingSettlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InstantFundingSettlementsSettlementIdRouteHandler: RouteHandler<
  typeof getV1InstantFundingSettlementsSettlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IposRouteHandler: RouteHandler<typeof getV1IposRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IposOfferingReferenceRouteHandler: RouteHandler<
  typeof getV1IposOfferingReferenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JitSettlementsRouteHandler: RouteHandler<
  typeof getV1JitSettlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JitSettlementsRouteHandler: RouteHandler<
  typeof postV1JitSettlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JitSettlementsSettlementIdRouteHandler: RouteHandler<
  typeof getV1JitSettlementsSettlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JournalsRouteHandler: RouteHandler<typeof getV1JournalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JournalsRouteHandler: RouteHandler<typeof postV1JournalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1JournalsJournalIdRouteHandler: RouteHandler<
  typeof deleteV1JournalsJournalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JournalsJournalIdRouteHandler: RouteHandler<
  typeof getV1JournalsJournalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JournalsBatchRouteHandler: RouteHandler<
  typeof postV1JournalsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JournalsReverseBatchRouteHandler: RouteHandler<
  typeof postV1JournalsReverseBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OauthAuthorizeRouteHandler: RouteHandler<
  typeof postV1OauthAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OauthClientsClientIdRouteHandler: RouteHandler<
  typeof getV1OauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OauthTokenRouteHandler: RouteHandler<typeof postV1OauthTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1OptionsContractsRouteHandler: RouteHandler<
  typeof getV1OptionsContractsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OptionsContractsSymbolOrIdRouteHandler: RouteHandler<
  typeof getV1OptionsContractsSymbolOrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RebalancingPortfoliosRouteHandler: RouteHandler<
  typeof getV1RebalancingPortfoliosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RebalancingPortfoliosRouteHandler: RouteHandler<
  typeof postV1RebalancingPortfoliosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RebalancingPortfoliosPortfolioIdRouteHandler: RouteHandler<
  typeof deleteV1RebalancingPortfoliosPortfolioIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RebalancingPortfoliosPortfolioIdRouteHandler: RouteHandler<
  typeof getV1RebalancingPortfoliosPortfolioIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1RebalancingPortfoliosPortfolioIdRouteHandler: RouteHandler<
  typeof patchV1RebalancingPortfoliosPortfolioIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RebalancingRunsRouteHandler: RouteHandler<
  typeof getV1RebalancingRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RebalancingRunsRouteHandler: RouteHandler<
  typeof postV1RebalancingRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RebalancingRunsRunIdRouteHandler: RouteHandler<
  typeof deleteV1RebalancingRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RebalancingRunsRunIdRouteHandler: RouteHandler<
  typeof getV1RebalancingRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RebalancingSubscriptionsRouteHandler: RouteHandler<
  typeof getV1RebalancingSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RebalancingSubscriptionsRouteHandler: RouteHandler<
  typeof postV1RebalancingSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RebalancingSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteV1RebalancingSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RebalancingSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getV1RebalancingSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportingEodAggregatePositionsRouteHandler: RouteHandler<
  typeof getV1ReportingEodAggregatePositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportingEodCashInterestRouteHandler: RouteHandler<
  typeof getV1ReportingEodCashInterestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportingEodPositionsRouteHandler: RouteHandler<
  typeof getV1ReportingEodPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TestingIncomingWiresRouteHandler: RouteHandler<
  typeof postV1TestingIncomingWiresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TradingAccountsAccountIdAccountRouteHandler: RouteHandler<
  typeof getV1TradingAccountsAccountIdAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1TradingAccountsAccountIdAccountConfigurationsRouteHandler: RouteHandler<
  typeof patchV1TradingAccountsAccountIdAccountConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TradingAccountsAccountIdAccountPortfolioHistoryRouteHandler: RouteHandler<
  typeof getV1TradingAccountsAccountIdAccountPortfolioHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TradingAccountsAccountIdLimitsRouteHandler: RouteHandler<
  typeof getV1TradingAccountsAccountIdLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TradingAccountsAccountIdOrdersRouteHandler: RouteHandler<
  typeof deleteV1TradingAccountsAccountIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TradingAccountsAccountIdOrdersRouteHandler: RouteHandler<
  typeof getV1TradingAccountsAccountIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TradingAccountsAccountIdOrdersRouteHandler: RouteHandler<
  typeof postV1TradingAccountsAccountIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TradingAccountsAccountIdOrdersOrderIdRouteHandler: RouteHandler<
  typeof deleteV1TradingAccountsAccountIdOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TradingAccountsAccountIdOrdersOrderIdRouteHandler: RouteHandler<
  typeof getV1TradingAccountsAccountIdOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1TradingAccountsAccountIdOrdersOrderIdRouteHandler: RouteHandler<
  typeof patchV1TradingAccountsAccountIdOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TradingAccountsAccountIdOrdersEstimationRouteHandler: RouteHandler<
  typeof postV1TradingAccountsAccountIdOrdersEstimationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TradingAccountsAccountIdOrdersByClientOrderIdRouteHandler: RouteHandler<
  typeof getV1TradingAccountsAccountIdOrdersByClientOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TradingAccountsAccountIdPositionsRouteHandler: RouteHandler<
  typeof deleteV1TradingAccountsAccountIdPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TradingAccountsAccountIdPositionsRouteHandler: RouteHandler<
  typeof getV1TradingAccountsAccountIdPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRouteHandler: RouteHandler<
  typeof deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRouteHandler: RouteHandler<
  typeof getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseRouteHandler: RouteHandler<
  typeof postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseRouteHandler: RouteHandler<
  typeof postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TradingAccountsAccountIdWatchlistsRouteHandler: RouteHandler<
  typeof getV1TradingAccountsAccountIdWatchlistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TradingAccountsAccountIdWatchlistsRouteHandler: RouteHandler<
  typeof postV1TradingAccountsAccountIdWatchlistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler: RouteHandler<
  typeof deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler: RouteHandler<
  typeof getV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler: RouteHandler<
  typeof postV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TradingAccountsAccountIdWatchlistsWatchlistIdRouteHandler: RouteHandler<
  typeof putV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolRouteHandler: RouteHandler<
  typeof deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransfersJitLedgerIdBalancesRouteHandler: RouteHandler<
  typeof getV1TransfersJitLedgerIdBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransfersJitLedgersRouteHandler: RouteHandler<
  typeof getV1TransfersJitLedgersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransfersJitLimitsRouteHandler: RouteHandler<
  typeof getV1TransfersJitLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransfersJitReportsRouteHandler: RouteHandler<
  typeof getV1TransfersJitReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WalletsFeesEstimateRouteHandler: RouteHandler<
  typeof getV1WalletsFeesEstimateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WalletsTravelRuleVaspsRouteHandler: RouteHandler<
  typeof getV1WalletsTravelRuleVaspsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
