import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdAchRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdAchRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdActionsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdCipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdCipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdDocumentsDocumentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdDocumentsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AccountsAccountIdOnfidoSdkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdOnfidoSdkTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdOptionsApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdRecipientBanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdRecipientBanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdRecipientBanksBankIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdTokenizationCallbackMintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdTokenizationCallbackRedeemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdTokenizationMintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTokenizationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTokenizationRequestsByClientRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdWalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdWalletsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdWalletsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdWalletsTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdWalletsWhitelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdWalletsWhitelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1AccountsActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsActivitiesActivityTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsIraExcessContributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsOptionsApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsEntryRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsFixedIncomeUsCorporatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsFixedIncomeUsTreasuriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CashInterestAprTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CorporateActionsAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CorporateActionsAnnouncementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CountryInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsAccountsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsJournalsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsNtaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsTransfersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FpslAnalyticsAccountIdLoansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FpslLoansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FpslTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstantFundingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InstantFundingInstantFundingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingInstantFundingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingLimitsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstantFundingSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingSettlementsSettlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IposOfferingReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JitSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JitSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JitSettlementsSettlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1JournalsJournalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JournalsJournalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JournalsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JournalsReverseBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OptionsContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OptionsContractsSymbolOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingPortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RebalancingPortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RebalancingPortfoliosPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingPortfoliosPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1RebalancingPortfoliosPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RebalancingRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RebalancingRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RebalancingSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RebalancingSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportingEodAggregatePositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportingEodCashInterestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportingEodPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestingIncomingWiresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TradingAccountsAccountIdAccountConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdAccountPortfolioHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TradingAccountsAccountIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdOrdersEstimationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdOrdersByClientOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdWatchlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdWatchlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersJitLedgerIdBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersJitLedgersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersJitLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersJitReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WalletsFeesEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WalletsTravelRuleVaspsRoute, (c) => {
    throw new Error('Not implemented')
  })
