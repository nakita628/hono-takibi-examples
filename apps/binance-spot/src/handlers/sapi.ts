import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postSapiV1MarginBorrowRepayRoute,
  getSapiV1MarginBorrowRepayRoute,
  getSapiV1MarginTransferRoute,
  getSapiV1MarginAllAssetsRoute,
  getSapiV1MarginAllPairsRoute,
  getSapiV1MarginPriceIndexRoute,
  getSapiV1MarginOrderRoute,
  postSapiV1MarginOrderRoute,
  deleteSapiV1MarginOrderRoute,
  getSapiV1MarginInterestHistoryRoute,
  getSapiV1MarginForceLiquidationRecRoute,
  getSapiV1MarginAccountRoute,
  getSapiV1MarginOpenOrdersRoute,
  deleteSapiV1MarginOpenOrdersRoute,
  getSapiV1MarginAllOrdersRoute,
  postSapiV1MarginOrderOcoRoute,
  getSapiV1MarginOrderListRoute,
  deleteSapiV1MarginOrderListRoute,
  getSapiV1MarginAllOrderListRoute,
  getSapiV1MarginOpenOrderListRoute,
  getSapiV1MarginMyTradesRoute,
  getSapiV1MarginMaxBorrowableRoute,
  getSapiV1MarginMaxTransferableRoute,
  getSapiV1MarginTradeCoeffRoute,
  getSapiV1MarginIsolatedAccountRoute,
  deleteSapiV1MarginIsolatedAccountRoute,
  postSapiV1MarginIsolatedAccountRoute,
  getSapiV1MarginIsolatedAccountLimitRoute,
  getSapiV1MarginIsolatedAllPairsRoute,
  postSapiV1BnbBurnRoute,
  getSapiV1BnbBurnRoute,
  getSapiV1MarginInterestRateHistoryRoute,
  getSapiV1MarginCrossMarginDataRoute,
  getSapiV1MarginIsolatedMarginDataRoute,
  getSapiV1MarginIsolatedMarginTierRoute,
  getSapiV1MarginRateLimitOrderRoute,
  getSapiV1MarginCrossMarginCollateralRatioRoute,
  getSapiV1MarginExchangeSmallLiabilityRoute,
  getSapiV1MarginExchangeSmallLiabilityHistoryRoute,
  getSapiV1MarginNextHourlyInterestRateRoute,
  getSapiV1MarginCapitalFlowRoute,
  getSapiV1MarginDelistScheduleRoute,
  getSapiV1MarginAvailableInventoryRoute,
  postSapiV1MarginManualLiquidationRoute,
  postSapiV1MarginOrderOtoRoute,
  postSapiV1MarginOrderOtocoRoute,
  postSapiV1MarginMaxLeverageRoute,
  getSapiV1MarginLeverageBracketRoute,
  getSapiV1SystemStatusRoute,
  getSapiV1CapitalConfigGetallRoute,
  getSapiV1AccountSnapshotRoute,
  postSapiV1AccountDisableFastWithdrawSwitchRoute,
  postSapiV1AccountEnableFastWithdrawSwitchRoute,
  postSapiV1CapitalWithdrawApplyRoute,
  getSapiV1CapitalDepositHisrecRoute,
  getSapiV1CapitalWithdrawHistoryRoute,
  getSapiV1CapitalDepositAddressRoute,
  getSapiV1AccountStatusRoute,
  getSapiV1AccountApiTradingStatusRoute,
  getSapiV1AssetDribbletRoute,
  postSapiV1AssetDustBtcRoute,
  postSapiV1AssetDustRoute,
  getSapiV1AssetAssetDividendRoute,
  getSapiV1AssetAssetDetailRoute,
  getSapiV1AssetTradeFeeRoute,
  getSapiV1AssetTransferRoute,
  postSapiV1AssetTransferRoute,
  postSapiV1AssetGetFundingAssetRoute,
  postSapiV3AssetGetUserAssetRoute,
  postSapiV1AssetConvertTransferRoute,
  getSapiV1AssetConvertTransferQueryByPageRoute,
  getSapiV1AssetLedgerTransferCloudMiningQueryByPageRoute,
  getSapiV1AccountApiRestrictionsRoute,
  getSapiV1CapitalContractConvertibleCoinsRoute,
  postSapiV1CapitalContractConvertibleCoinsRoute,
  postSapiV1SubAccountVirtualSubAccountRoute,
  getSapiV1SubAccountListRoute,
  getSapiV1SubAccountSubTransferHistoryRoute,
  getSapiV1SubAccountFuturesInternalTransferRoute,
  postSapiV1SubAccountFuturesInternalTransferRoute,
  getSapiV3SubAccountAssetsRoute,
  getSapiV1SubAccountSpotSummaryRoute,
  getSapiV1CapitalDepositSubAddressRoute,
  getSapiV1CapitalDepositSubHisrecRoute,
  postSapiV1CapitalDepositCreditApplyRoute,
  getSapiV1AssetWalletBalanceRoute,
  getSapiV1AssetCustodyTransferHistoryRoute,
  getSapiV1CapitalDepositAddressListRoute,
  getSapiV1SpotDelistScheduleRoute,
  getSapiV1CapitalWithdrawAddressListRoute,
  getSapiV1AccountInfoRoute,
  getSapiV1SubAccountStatusRoute,
  postSapiV1SubAccountMarginEnableRoute,
  getSapiV1SubAccountMarginAccountRoute,
  getSapiV1SubAccountMarginAccountSummaryRoute,
  postSapiV1SubAccountFuturesEnableRoute,
  getSapiV1SubAccountFuturesAccountRoute,
  getSapiV1SubAccountFuturesAccountSummaryRoute,
  getSapiV1SubAccountFuturesPositionRiskRoute,
  postSapiV1SubAccountFuturesTransferRoute,
  postSapiV1SubAccountMarginTransferRoute,
  postSapiV1SubAccountTransferSubToSubRoute,
  postSapiV1SubAccountTransferSubToMasterRoute,
  getSapiV1SubAccountTransferSubUserHistoryRoute,
  getSapiV1SubAccountUniversalTransferRoute,
  postSapiV1SubAccountUniversalTransferRoute,
  getSapiV2SubAccountFuturesAccountRoute,
  getSapiV2SubAccountFuturesAccountSummaryRoute,
  getSapiV2SubAccountFuturesPositionRiskRoute,
  postSapiV1SubAccountBlvtEnableRoute,
  postSapiV1ManagedSubaccountDepositRoute,
  getSapiV1ManagedSubaccountAssetRoute,
  postSapiV1ManagedSubaccountWithdrawRoute,
  getSapiV1ManagedSubaccountAccountSnapshotRoute,
  getSapiV1ManagedSubaccountQueryTransLogForInvestorRoute,
  getSapiV1ManagedSubaccountQueryTransLogForTradeParentRoute,
  getSapiV1ManagedSubaccountFetchFutureAssetRoute,
  getSapiV1ManagedSubaccountMarginAssetRoute,
  getSapiV1ManagedSubaccountInfoRoute,
  getSapiV1ManagedSubaccountDepositAddressRoute,
  getSapiV1ManagedSubaccountQueryTransLogRoute,
  getSapiV1SubAccountSubAccountApiIpRestrictionRoute,
  deleteSapiV1SubAccountSubAccountApiIpRestrictionIpListRoute,
  getSapiV1SubAccountTransactionStatisticsRoute,
  postSapiV1SubAccountEoptionsEnableRoute,
  postSapiV2SubAccountSubAccountApiIpRestrictionRoute,
  getSapiV4SubAccountAssetsRoute,
  postSapiV1UserDataStreamRoute,
  putSapiV1UserDataStreamRoute,
  deleteSapiV1UserDataStreamRoute,
  postSapiV1UserDataStreamIsolatedRoute,
  putSapiV1UserDataStreamIsolatedRoute,
  deleteSapiV1UserDataStreamIsolatedRoute,
  getSapiV1FiatOrdersRoute,
  getSapiV1FiatPaymentsRoute,
  getSapiV1LendingProjectListRoute,
  postSapiV1LendingCustomizedFixedPurchaseRoute,
  getSapiV1LendingProjectPositionListRoute,
  postSapiV1LendingPositionChangedRoute,
  getSapiV1MiningPubAlgoListRoute,
  getSapiV1MiningPubCoinListRoute,
  getSapiV1MiningWorkerDetailRoute,
  getSapiV1MiningWorkerListRoute,
  getSapiV1MiningPaymentListRoute,
  getSapiV1MiningPaymentOtherRoute,
  getSapiV1MiningHashTransferConfigDetailsListRoute,
  getSapiV1MiningHashTransferProfitDetailsRoute,
  postSapiV1MiningHashTransferConfigRoute,
  postSapiV1MiningHashTransferConfigCancelRoute,
  getSapiV1MiningStatisticsUserStatusRoute,
  getSapiV1MiningStatisticsUserListRoute,
  getSapiV1MiningPaymentUidRoute,
  postSapiV1FuturesTransferRoute,
  getSapiV1FuturesTransferRoute,
  getSapiV1FuturesHistDataLinkRoute,
  postSapiV1AlgoFuturesNewOrderVpRoute,
  postSapiV1AlgoFuturesNewOrderTwapRoute,
  deleteSapiV1AlgoFuturesOrderRoute,
  getSapiV1AlgoFuturesOpenOrdersRoute,
  getSapiV1AlgoFuturesHistoricalOrdersRoute,
  getSapiV1AlgoFuturesSubOrdersRoute,
  postSapiV1AlgoSpotNewOrderTwapRoute,
  deleteSapiV1AlgoSpotOrderRoute,
  getSapiV1AlgoSpotOpenOrdersRoute,
  getSapiV1AlgoSpotHistoricalOrdersRoute,
  getSapiV1AlgoSpotSubOrdersRoute,
  getSapiV1PortfolioAccountRoute,
  getSapiV1PortfolioCollateralRateRoute,
  getSapiV2PortfolioCollateralRateRoute,
  getSapiV1PortfolioPmLoanRoute,
  postSapiV1PortfolioRepayRoute,
  getSapiV1PortfolioInterestHistoryRoute,
  getSapiV1PortfolioAssetIndexPriceRoute,
  postSapiV1PortfolioAutoCollectionRoute,
  postSapiV1PortfolioBnbTransferRoute,
  postSapiV1PortfolioRepayFuturesSwitchRoute,
  getSapiV1PortfolioRepayFuturesSwitchRoute,
  postSapiV1PortfolioRepayFuturesNegativeBalanceRoute,
  getSapiV1PortfolioMarginAssetLeverageRoute,
  postSapiV1PortfolioAssetCollectionRoute,
  getSapiV1BlvtTokenInfoRoute,
  postSapiV1BlvtSubscribeRoute,
  getSapiV1BlvtSubscribeRecordRoute,
  postSapiV1BlvtRedeemRoute,
  getSapiV1BlvtRedeemRecordRoute,
  getSapiV1BlvtUserLimitRoute,
  getSapiV1C2cOrderMatchListUserOrderHistoryRoute,
  getSapiV1LoanVipOngoingOrdersRoute,
  postSapiV1LoanVipRepayRoute,
  getSapiV1LoanVipRepayHistoryRoute,
  getSapiV1LoanVipCollateralAccountRoute,
  postSapiV1LoanVipBorrowRoute,
  getSapiV1LoanVipLoanableDataRoute,
  getSapiV1LoanVipCollateralDataRoute,
  getSapiV1LoanVipRequestDataRoute,
  getSapiV1LoanVipRequestInterestRateRoute,
  postSapiV1LoanVipRenewRoute,
  getSapiV1LoanIncomeRoute,
  postSapiV1LoanBorrowRoute,
  getSapiV1LoanBorrowHistoryRoute,
  getSapiV1LoanOngoingOrdersRoute,
  postSapiV1LoanRepayRoute,
  getSapiV1LoanRepayHistoryRoute,
  postSapiV1LoanAdjustLtvRoute,
  getSapiV1LoanLtvAdjustmentHistoryRoute,
  getSapiV1LoanLoanableDataRoute,
  getSapiV1LoanCollateralDataRoute,
  getSapiV1LoanRepayCollateralRateRoute,
  postSapiV1LoanCustomizeMarginCallRoute,
  postSapiV2LoanFlexibleBorrowRoute,
  getSapiV2LoanFlexibleOngoingOrdersRoute,
  getSapiV2LoanFlexibleBorrowHistoryRoute,
  postSapiV2LoanFlexibleRepayRoute,
  getSapiV2LoanFlexibleRepayHistoryRoute,
  postSapiV2LoanFlexibleAdjustLtvRoute,
  getSapiV2LoanFlexibleLtvAdjustmentHistoryRoute,
  getSapiV2LoanFlexibleLoanableDataRoute,
  getSapiV2LoanFlexibleCollateralDataRoute,
  getSapiV1PayTransactionsRoute,
  getSapiV1ConvertExchangeInfoRoute,
  getSapiV1ConvertAssetInfoRoute,
  postSapiV1ConvertGetQuoteRoute,
  postSapiV1ConvertAcceptQuoteRoute,
  getSapiV1ConvertOrderStatusRoute,
  postSapiV1ConvertLimitPlaceOrderRoute,
  postSapiV1ConvertLimitCancelOrderRoute,
  getSapiV1ConvertLimitQueryOpenOrdersRoute,
  getSapiV1ConvertTradeFlowRoute,
  getSapiV1RebateTaxQueryRoute,
  getSapiV1NftHistoryTransactionsRoute,
  getSapiV1NftHistoryDepositRoute,
  getSapiV1NftHistoryWithdrawRoute,
  getSapiV1NftUserGetAssetRoute,
  postSapiV1GiftcardCreateCodeRoute,
  postSapiV1GiftcardRedeemCodeRoute,
  getSapiV1GiftcardVerifyRoute,
  getSapiV1GiftcardCryptographyRsaPublicKeyRoute,
  postSapiV1GiftcardBuyCodeRoute,
  getSapiV1GiftcardBuyCodeTokenLimitRoute,
  getSapiV1LendingAutoInvestTargetAssetListRoute,
  getSapiV1LendingAutoInvestTargetAssetRoiListRoute,
  getSapiV1LendingAutoInvestAllAssetRoute,
  getSapiV1LendingAutoInvestSourceAssetListRoute,
  postSapiV1LendingAutoInvestPlanAddRoute,
  postSapiV1LendingAutoInvestPlanEditRoute,
  postSapiV1LendingAutoInvestPlanEditStatusRoute,
  getSapiV1LendingAutoInvestPlanListRoute,
  getSapiV1LendingAutoInvestPlanIdRoute,
  getSapiV1LendingAutoInvestHistoryListRoute,
  getSapiV1LendingAutoInvestIndexInfoRoute,
  getSapiV1LendingAutoInvestIndexUserSummaryRoute,
  postSapiV1LendingAutoInvestOneOffRoute,
  getSapiV1LendingAutoInvestOneOffStatusRoute,
  postSapiV1LendingAutoInvestRedeemRoute,
  getSapiV1LendingAutoInvestRedeemHistoryRoute,
  getSapiV1LendingAutoInvestRebalanceHistoryRoute,
  postSapiV2EthStakingEthStakeRoute,
  postSapiV1EthStakingEthRedeemRoute,
  getSapiV1EthStakingEthHistoryStakingHistoryRoute,
  getSapiV1EthStakingEthHistoryRedemptionHistoryRoute,
  getSapiV1EthStakingEthHistoryRewardsHistoryRoute,
  getSapiV1EthStakingEthQuotaRoute,
  getSapiV1EthStakingEthHistoryRateHistoryRoute,
  getSapiV2EthStakingAccountRoute,
  postSapiV1EthStakingWbethWrapRoute,
  getSapiV1EthStakingWbethHistoryWrapHistoryRoute,
  getSapiV1EthStakingWbethHistoryUnwrapHistoryRoute,
  getSapiV1EthStakingEthHistoryWbethRewardsHistoryRoute,
  getSapiV1CopyTradingFuturesUserStatusRoute,
  getSapiV1CopyTradingFuturesLeadSymbolRoute,
  getSapiV1SimpleEarnFlexibleListRoute,
  getSapiV1SimpleEarnLockedListRoute,
  postSapiV1SimpleEarnFlexibleSubscribeRoute,
  postSapiV1SimpleEarnLockedSubscribeRoute,
  postSapiV1SimpleEarnFlexibleRedeemRoute,
  postSapiV1SimpleEarnLockedRedeemRoute,
  getSapiV1SimpleEarnFlexiblePositionRoute,
  getSapiV1SimpleEarnLockedPositionRoute,
  getSapiV1SimpleEarnAccountRoute,
  getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordRoute,
  getSapiV1SimpleEarnLockedHistorySubscriptionRecordRoute,
  getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordRoute,
  getSapiV1SimpleEarnLockedHistoryRedemptionRecordRoute,
  getSapiV1SimpleEarnFlexibleHistoryRewardsRecordRoute,
  getSapiV1SimpleEarnLockedHistoryRewardsRecordRoute,
  postSapiV1SimpleEarnFlexibleSetAutoSubscribeRoute,
  postSapiV1SimpleEarnLockedSetAutoSubscribeRoute,
  getSapiV1SimpleEarnFlexiblePersonalLeftQuotaRoute,
  getSapiV1SimpleEarnLockedPersonalLeftQuotaRoute,
  getSapiV1SimpleEarnFlexibleSubscriptionPreviewRoute,
  getSapiV1SimpleEarnLockedSubscriptionPreviewRoute,
  getSapiV1SimpleEarnLockedSetRedeemOptionRoute,
  getSapiV1SimpleEarnFlexibleHistoryRateHistoryRoute,
  getSapiV1SimpleEarnFlexibleHistoryCollateralRecordRoute,
  getSapiV1DciProductListRoute,
  postSapiV1DciProductSubscribeRoute,
  getSapiV1DciProductPositionsRoute,
  getSapiV1DciProductAccountsRoute,
  postSapiV1DciProductAutoCompoundEditStatusRoute,
} from '../routes'

export const postSapiV1MarginBorrowRepayRouteHandler: RouteHandler<
  typeof postSapiV1MarginBorrowRepayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginBorrowRepayRouteHandler: RouteHandler<
  typeof getSapiV1MarginBorrowRepayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginTransferRouteHandler: RouteHandler<
  typeof getSapiV1MarginTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginAllAssetsRouteHandler: RouteHandler<
  typeof getSapiV1MarginAllAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginAllPairsRouteHandler: RouteHandler<
  typeof getSapiV1MarginAllPairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginPriceIndexRouteHandler: RouteHandler<
  typeof getSapiV1MarginPriceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginOrderRouteHandler: RouteHandler<
  typeof getSapiV1MarginOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1MarginOrderRouteHandler: RouteHandler<
  typeof postSapiV1MarginOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSapiV1MarginOrderRouteHandler: RouteHandler<
  typeof deleteSapiV1MarginOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginInterestHistoryRouteHandler: RouteHandler<
  typeof getSapiV1MarginInterestHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginForceLiquidationRecRouteHandler: RouteHandler<
  typeof getSapiV1MarginForceLiquidationRecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginAccountRouteHandler: RouteHandler<
  typeof getSapiV1MarginAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginOpenOrdersRouteHandler: RouteHandler<
  typeof getSapiV1MarginOpenOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSapiV1MarginOpenOrdersRouteHandler: RouteHandler<
  typeof deleteSapiV1MarginOpenOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginAllOrdersRouteHandler: RouteHandler<
  typeof getSapiV1MarginAllOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1MarginOrderOcoRouteHandler: RouteHandler<
  typeof postSapiV1MarginOrderOcoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginOrderListRouteHandler: RouteHandler<
  typeof getSapiV1MarginOrderListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSapiV1MarginOrderListRouteHandler: RouteHandler<
  typeof deleteSapiV1MarginOrderListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginAllOrderListRouteHandler: RouteHandler<
  typeof getSapiV1MarginAllOrderListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginOpenOrderListRouteHandler: RouteHandler<
  typeof getSapiV1MarginOpenOrderListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginMyTradesRouteHandler: RouteHandler<
  typeof getSapiV1MarginMyTradesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginMaxBorrowableRouteHandler: RouteHandler<
  typeof getSapiV1MarginMaxBorrowableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginMaxTransferableRouteHandler: RouteHandler<
  typeof getSapiV1MarginMaxTransferableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginTradeCoeffRouteHandler: RouteHandler<
  typeof getSapiV1MarginTradeCoeffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginIsolatedAccountRouteHandler: RouteHandler<
  typeof getSapiV1MarginIsolatedAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSapiV1MarginIsolatedAccountRouteHandler: RouteHandler<
  typeof deleteSapiV1MarginIsolatedAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1MarginIsolatedAccountRouteHandler: RouteHandler<
  typeof postSapiV1MarginIsolatedAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginIsolatedAccountLimitRouteHandler: RouteHandler<
  typeof getSapiV1MarginIsolatedAccountLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginIsolatedAllPairsRouteHandler: RouteHandler<
  typeof getSapiV1MarginIsolatedAllPairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1BnbBurnRouteHandler: RouteHandler<typeof postSapiV1BnbBurnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSapiV1BnbBurnRouteHandler: RouteHandler<typeof getSapiV1BnbBurnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginInterestRateHistoryRouteHandler: RouteHandler<
  typeof getSapiV1MarginInterestRateHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginCrossMarginDataRouteHandler: RouteHandler<
  typeof getSapiV1MarginCrossMarginDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginIsolatedMarginDataRouteHandler: RouteHandler<
  typeof getSapiV1MarginIsolatedMarginDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginIsolatedMarginTierRouteHandler: RouteHandler<
  typeof getSapiV1MarginIsolatedMarginTierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginRateLimitOrderRouteHandler: RouteHandler<
  typeof getSapiV1MarginRateLimitOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginCrossMarginCollateralRatioRouteHandler: RouteHandler<
  typeof getSapiV1MarginCrossMarginCollateralRatioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginExchangeSmallLiabilityRouteHandler: RouteHandler<
  typeof getSapiV1MarginExchangeSmallLiabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginExchangeSmallLiabilityHistoryRouteHandler: RouteHandler<
  typeof getSapiV1MarginExchangeSmallLiabilityHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginNextHourlyInterestRateRouteHandler: RouteHandler<
  typeof getSapiV1MarginNextHourlyInterestRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginCapitalFlowRouteHandler: RouteHandler<
  typeof getSapiV1MarginCapitalFlowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginDelistScheduleRouteHandler: RouteHandler<
  typeof getSapiV1MarginDelistScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginAvailableInventoryRouteHandler: RouteHandler<
  typeof getSapiV1MarginAvailableInventoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1MarginManualLiquidationRouteHandler: RouteHandler<
  typeof postSapiV1MarginManualLiquidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1MarginOrderOtoRouteHandler: RouteHandler<
  typeof postSapiV1MarginOrderOtoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1MarginOrderOtocoRouteHandler: RouteHandler<
  typeof postSapiV1MarginOrderOtocoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1MarginMaxLeverageRouteHandler: RouteHandler<
  typeof postSapiV1MarginMaxLeverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MarginLeverageBracketRouteHandler: RouteHandler<
  typeof getSapiV1MarginLeverageBracketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SystemStatusRouteHandler: RouteHandler<
  typeof getSapiV1SystemStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CapitalConfigGetallRouteHandler: RouteHandler<
  typeof getSapiV1CapitalConfigGetallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AccountSnapshotRouteHandler: RouteHandler<
  typeof getSapiV1AccountSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1AccountDisableFastWithdrawSwitchRouteHandler: RouteHandler<
  typeof postSapiV1AccountDisableFastWithdrawSwitchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1AccountEnableFastWithdrawSwitchRouteHandler: RouteHandler<
  typeof postSapiV1AccountEnableFastWithdrawSwitchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1CapitalWithdrawApplyRouteHandler: RouteHandler<
  typeof postSapiV1CapitalWithdrawApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CapitalDepositHisrecRouteHandler: RouteHandler<
  typeof getSapiV1CapitalDepositHisrecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CapitalWithdrawHistoryRouteHandler: RouteHandler<
  typeof getSapiV1CapitalWithdrawHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CapitalDepositAddressRouteHandler: RouteHandler<
  typeof getSapiV1CapitalDepositAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AccountStatusRouteHandler: RouteHandler<
  typeof getSapiV1AccountStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AccountApiTradingStatusRouteHandler: RouteHandler<
  typeof getSapiV1AccountApiTradingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AssetDribbletRouteHandler: RouteHandler<
  typeof getSapiV1AssetDribbletRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1AssetDustBtcRouteHandler: RouteHandler<
  typeof postSapiV1AssetDustBtcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1AssetDustRouteHandler: RouteHandler<
  typeof postSapiV1AssetDustRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AssetAssetDividendRouteHandler: RouteHandler<
  typeof getSapiV1AssetAssetDividendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AssetAssetDetailRouteHandler: RouteHandler<
  typeof getSapiV1AssetAssetDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AssetTradeFeeRouteHandler: RouteHandler<
  typeof getSapiV1AssetTradeFeeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AssetTransferRouteHandler: RouteHandler<
  typeof getSapiV1AssetTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1AssetTransferRouteHandler: RouteHandler<
  typeof postSapiV1AssetTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1AssetGetFundingAssetRouteHandler: RouteHandler<
  typeof postSapiV1AssetGetFundingAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV3AssetGetUserAssetRouteHandler: RouteHandler<
  typeof postSapiV3AssetGetUserAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1AssetConvertTransferRouteHandler: RouteHandler<
  typeof postSapiV1AssetConvertTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AssetConvertTransferQueryByPageRouteHandler: RouteHandler<
  typeof getSapiV1AssetConvertTransferQueryByPageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AssetLedgerTransferCloudMiningQueryByPageRouteHandler: RouteHandler<
  typeof getSapiV1AssetLedgerTransferCloudMiningQueryByPageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AccountApiRestrictionsRouteHandler: RouteHandler<
  typeof getSapiV1AccountApiRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CapitalContractConvertibleCoinsRouteHandler: RouteHandler<
  typeof getSapiV1CapitalContractConvertibleCoinsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1CapitalContractConvertibleCoinsRouteHandler: RouteHandler<
  typeof postSapiV1CapitalContractConvertibleCoinsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountVirtualSubAccountRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountVirtualSubAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountListRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountSubTransferHistoryRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountSubTransferHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountFuturesInternalTransferRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountFuturesInternalTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountFuturesInternalTransferRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountFuturesInternalTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV3SubAccountAssetsRouteHandler: RouteHandler<
  typeof getSapiV3SubAccountAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountSpotSummaryRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountSpotSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CapitalDepositSubAddressRouteHandler: RouteHandler<
  typeof getSapiV1CapitalDepositSubAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CapitalDepositSubHisrecRouteHandler: RouteHandler<
  typeof getSapiV1CapitalDepositSubHisrecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1CapitalDepositCreditApplyRouteHandler: RouteHandler<
  typeof postSapiV1CapitalDepositCreditApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AssetWalletBalanceRouteHandler: RouteHandler<
  typeof getSapiV1AssetWalletBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AssetCustodyTransferHistoryRouteHandler: RouteHandler<
  typeof getSapiV1AssetCustodyTransferHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CapitalDepositAddressListRouteHandler: RouteHandler<
  typeof getSapiV1CapitalDepositAddressListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SpotDelistScheduleRouteHandler: RouteHandler<
  typeof getSapiV1SpotDelistScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CapitalWithdrawAddressListRouteHandler: RouteHandler<
  typeof getSapiV1CapitalWithdrawAddressListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AccountInfoRouteHandler: RouteHandler<
  typeof getSapiV1AccountInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountStatusRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountMarginEnableRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountMarginEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountMarginAccountRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountMarginAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountMarginAccountSummaryRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountMarginAccountSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountFuturesEnableRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountFuturesEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountFuturesAccountRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountFuturesAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountFuturesAccountSummaryRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountFuturesAccountSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountFuturesPositionRiskRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountFuturesPositionRiskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountFuturesTransferRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountFuturesTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountMarginTransferRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountMarginTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountTransferSubToSubRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountTransferSubToSubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountTransferSubToMasterRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountTransferSubToMasterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountTransferSubUserHistoryRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountTransferSubUserHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountUniversalTransferRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountUniversalTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountUniversalTransferRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountUniversalTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2SubAccountFuturesAccountRouteHandler: RouteHandler<
  typeof getSapiV2SubAccountFuturesAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2SubAccountFuturesAccountSummaryRouteHandler: RouteHandler<
  typeof getSapiV2SubAccountFuturesAccountSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2SubAccountFuturesPositionRiskRouteHandler: RouteHandler<
  typeof getSapiV2SubAccountFuturesPositionRiskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountBlvtEnableRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountBlvtEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1ManagedSubaccountDepositRouteHandler: RouteHandler<
  typeof postSapiV1ManagedSubaccountDepositRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ManagedSubaccountAssetRouteHandler: RouteHandler<
  typeof getSapiV1ManagedSubaccountAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1ManagedSubaccountWithdrawRouteHandler: RouteHandler<
  typeof postSapiV1ManagedSubaccountWithdrawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ManagedSubaccountAccountSnapshotRouteHandler: RouteHandler<
  typeof getSapiV1ManagedSubaccountAccountSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ManagedSubaccountQueryTransLogForInvestorRouteHandler: RouteHandler<
  typeof getSapiV1ManagedSubaccountQueryTransLogForInvestorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ManagedSubaccountQueryTransLogForTradeParentRouteHandler: RouteHandler<
  typeof getSapiV1ManagedSubaccountQueryTransLogForTradeParentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ManagedSubaccountFetchFutureAssetRouteHandler: RouteHandler<
  typeof getSapiV1ManagedSubaccountFetchFutureAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ManagedSubaccountMarginAssetRouteHandler: RouteHandler<
  typeof getSapiV1ManagedSubaccountMarginAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ManagedSubaccountInfoRouteHandler: RouteHandler<
  typeof getSapiV1ManagedSubaccountInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ManagedSubaccountDepositAddressRouteHandler: RouteHandler<
  typeof getSapiV1ManagedSubaccountDepositAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ManagedSubaccountQueryTransLogRouteHandler: RouteHandler<
  typeof getSapiV1ManagedSubaccountQueryTransLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountSubAccountApiIpRestrictionRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountSubAccountApiIpRestrictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSapiV1SubAccountSubAccountApiIpRestrictionIpListRouteHandler: RouteHandler<
  typeof deleteSapiV1SubAccountSubAccountApiIpRestrictionIpListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SubAccountTransactionStatisticsRouteHandler: RouteHandler<
  typeof getSapiV1SubAccountTransactionStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SubAccountEoptionsEnableRouteHandler: RouteHandler<
  typeof postSapiV1SubAccountEoptionsEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV2SubAccountSubAccountApiIpRestrictionRouteHandler: RouteHandler<
  typeof postSapiV2SubAccountSubAccountApiIpRestrictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV4SubAccountAssetsRouteHandler: RouteHandler<
  typeof getSapiV4SubAccountAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1UserDataStreamRouteHandler: RouteHandler<
  typeof postSapiV1UserDataStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSapiV1UserDataStreamRouteHandler: RouteHandler<
  typeof putSapiV1UserDataStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSapiV1UserDataStreamRouteHandler: RouteHandler<
  typeof deleteSapiV1UserDataStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1UserDataStreamIsolatedRouteHandler: RouteHandler<
  typeof postSapiV1UserDataStreamIsolatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSapiV1UserDataStreamIsolatedRouteHandler: RouteHandler<
  typeof putSapiV1UserDataStreamIsolatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSapiV1UserDataStreamIsolatedRouteHandler: RouteHandler<
  typeof deleteSapiV1UserDataStreamIsolatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1FiatOrdersRouteHandler: RouteHandler<
  typeof getSapiV1FiatOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1FiatPaymentsRouteHandler: RouteHandler<
  typeof getSapiV1FiatPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingProjectListRouteHandler: RouteHandler<
  typeof getSapiV1LendingProjectListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LendingCustomizedFixedPurchaseRouteHandler: RouteHandler<
  typeof postSapiV1LendingCustomizedFixedPurchaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingProjectPositionListRouteHandler: RouteHandler<
  typeof getSapiV1LendingProjectPositionListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LendingPositionChangedRouteHandler: RouteHandler<
  typeof postSapiV1LendingPositionChangedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningPubAlgoListRouteHandler: RouteHandler<
  typeof getSapiV1MiningPubAlgoListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningPubCoinListRouteHandler: RouteHandler<
  typeof getSapiV1MiningPubCoinListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningWorkerDetailRouteHandler: RouteHandler<
  typeof getSapiV1MiningWorkerDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningWorkerListRouteHandler: RouteHandler<
  typeof getSapiV1MiningWorkerListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningPaymentListRouteHandler: RouteHandler<
  typeof getSapiV1MiningPaymentListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningPaymentOtherRouteHandler: RouteHandler<
  typeof getSapiV1MiningPaymentOtherRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningHashTransferConfigDetailsListRouteHandler: RouteHandler<
  typeof getSapiV1MiningHashTransferConfigDetailsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningHashTransferProfitDetailsRouteHandler: RouteHandler<
  typeof getSapiV1MiningHashTransferProfitDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1MiningHashTransferConfigRouteHandler: RouteHandler<
  typeof postSapiV1MiningHashTransferConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1MiningHashTransferConfigCancelRouteHandler: RouteHandler<
  typeof postSapiV1MiningHashTransferConfigCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningStatisticsUserStatusRouteHandler: RouteHandler<
  typeof getSapiV1MiningStatisticsUserStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningStatisticsUserListRouteHandler: RouteHandler<
  typeof getSapiV1MiningStatisticsUserListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1MiningPaymentUidRouteHandler: RouteHandler<
  typeof getSapiV1MiningPaymentUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1FuturesTransferRouteHandler: RouteHandler<
  typeof postSapiV1FuturesTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1FuturesTransferRouteHandler: RouteHandler<
  typeof getSapiV1FuturesTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1FuturesHistDataLinkRouteHandler: RouteHandler<
  typeof getSapiV1FuturesHistDataLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1AlgoFuturesNewOrderVpRouteHandler: RouteHandler<
  typeof postSapiV1AlgoFuturesNewOrderVpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1AlgoFuturesNewOrderTwapRouteHandler: RouteHandler<
  typeof postSapiV1AlgoFuturesNewOrderTwapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSapiV1AlgoFuturesOrderRouteHandler: RouteHandler<
  typeof deleteSapiV1AlgoFuturesOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AlgoFuturesOpenOrdersRouteHandler: RouteHandler<
  typeof getSapiV1AlgoFuturesOpenOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AlgoFuturesHistoricalOrdersRouteHandler: RouteHandler<
  typeof getSapiV1AlgoFuturesHistoricalOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AlgoFuturesSubOrdersRouteHandler: RouteHandler<
  typeof getSapiV1AlgoFuturesSubOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1AlgoSpotNewOrderTwapRouteHandler: RouteHandler<
  typeof postSapiV1AlgoSpotNewOrderTwapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSapiV1AlgoSpotOrderRouteHandler: RouteHandler<
  typeof deleteSapiV1AlgoSpotOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AlgoSpotOpenOrdersRouteHandler: RouteHandler<
  typeof getSapiV1AlgoSpotOpenOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AlgoSpotHistoricalOrdersRouteHandler: RouteHandler<
  typeof getSapiV1AlgoSpotHistoricalOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1AlgoSpotSubOrdersRouteHandler: RouteHandler<
  typeof getSapiV1AlgoSpotSubOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1PortfolioAccountRouteHandler: RouteHandler<
  typeof getSapiV1PortfolioAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1PortfolioCollateralRateRouteHandler: RouteHandler<
  typeof getSapiV1PortfolioCollateralRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2PortfolioCollateralRateRouteHandler: RouteHandler<
  typeof getSapiV2PortfolioCollateralRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1PortfolioPmLoanRouteHandler: RouteHandler<
  typeof getSapiV1PortfolioPmLoanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1PortfolioRepayRouteHandler: RouteHandler<
  typeof postSapiV1PortfolioRepayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1PortfolioInterestHistoryRouteHandler: RouteHandler<
  typeof getSapiV1PortfolioInterestHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1PortfolioAssetIndexPriceRouteHandler: RouteHandler<
  typeof getSapiV1PortfolioAssetIndexPriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1PortfolioAutoCollectionRouteHandler: RouteHandler<
  typeof postSapiV1PortfolioAutoCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1PortfolioBnbTransferRouteHandler: RouteHandler<
  typeof postSapiV1PortfolioBnbTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1PortfolioRepayFuturesSwitchRouteHandler: RouteHandler<
  typeof postSapiV1PortfolioRepayFuturesSwitchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1PortfolioRepayFuturesSwitchRouteHandler: RouteHandler<
  typeof getSapiV1PortfolioRepayFuturesSwitchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1PortfolioRepayFuturesNegativeBalanceRouteHandler: RouteHandler<
  typeof postSapiV1PortfolioRepayFuturesNegativeBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1PortfolioMarginAssetLeverageRouteHandler: RouteHandler<
  typeof getSapiV1PortfolioMarginAssetLeverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1PortfolioAssetCollectionRouteHandler: RouteHandler<
  typeof postSapiV1PortfolioAssetCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1BlvtTokenInfoRouteHandler: RouteHandler<
  typeof getSapiV1BlvtTokenInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1BlvtSubscribeRouteHandler: RouteHandler<
  typeof postSapiV1BlvtSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1BlvtSubscribeRecordRouteHandler: RouteHandler<
  typeof getSapiV1BlvtSubscribeRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1BlvtRedeemRouteHandler: RouteHandler<
  typeof postSapiV1BlvtRedeemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1BlvtRedeemRecordRouteHandler: RouteHandler<
  typeof getSapiV1BlvtRedeemRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1BlvtUserLimitRouteHandler: RouteHandler<
  typeof getSapiV1BlvtUserLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1C2cOrderMatchListUserOrderHistoryRouteHandler: RouteHandler<
  typeof getSapiV1C2cOrderMatchListUserOrderHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanVipOngoingOrdersRouteHandler: RouteHandler<
  typeof getSapiV1LoanVipOngoingOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LoanVipRepayRouteHandler: RouteHandler<
  typeof postSapiV1LoanVipRepayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanVipRepayHistoryRouteHandler: RouteHandler<
  typeof getSapiV1LoanVipRepayHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanVipCollateralAccountRouteHandler: RouteHandler<
  typeof getSapiV1LoanVipCollateralAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LoanVipBorrowRouteHandler: RouteHandler<
  typeof postSapiV1LoanVipBorrowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanVipLoanableDataRouteHandler: RouteHandler<
  typeof getSapiV1LoanVipLoanableDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanVipCollateralDataRouteHandler: RouteHandler<
  typeof getSapiV1LoanVipCollateralDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanVipRequestDataRouteHandler: RouteHandler<
  typeof getSapiV1LoanVipRequestDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanVipRequestInterestRateRouteHandler: RouteHandler<
  typeof getSapiV1LoanVipRequestInterestRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LoanVipRenewRouteHandler: RouteHandler<
  typeof postSapiV1LoanVipRenewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanIncomeRouteHandler: RouteHandler<
  typeof getSapiV1LoanIncomeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LoanBorrowRouteHandler: RouteHandler<
  typeof postSapiV1LoanBorrowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanBorrowHistoryRouteHandler: RouteHandler<
  typeof getSapiV1LoanBorrowHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanOngoingOrdersRouteHandler: RouteHandler<
  typeof getSapiV1LoanOngoingOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LoanRepayRouteHandler: RouteHandler<
  typeof postSapiV1LoanRepayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanRepayHistoryRouteHandler: RouteHandler<
  typeof getSapiV1LoanRepayHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LoanAdjustLtvRouteHandler: RouteHandler<
  typeof postSapiV1LoanAdjustLtvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanLtvAdjustmentHistoryRouteHandler: RouteHandler<
  typeof getSapiV1LoanLtvAdjustmentHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanLoanableDataRouteHandler: RouteHandler<
  typeof getSapiV1LoanLoanableDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanCollateralDataRouteHandler: RouteHandler<
  typeof getSapiV1LoanCollateralDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LoanRepayCollateralRateRouteHandler: RouteHandler<
  typeof getSapiV1LoanRepayCollateralRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LoanCustomizeMarginCallRouteHandler: RouteHandler<
  typeof postSapiV1LoanCustomizeMarginCallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV2LoanFlexibleBorrowRouteHandler: RouteHandler<
  typeof postSapiV2LoanFlexibleBorrowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2LoanFlexibleOngoingOrdersRouteHandler: RouteHandler<
  typeof getSapiV2LoanFlexibleOngoingOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2LoanFlexibleBorrowHistoryRouteHandler: RouteHandler<
  typeof getSapiV2LoanFlexibleBorrowHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV2LoanFlexibleRepayRouteHandler: RouteHandler<
  typeof postSapiV2LoanFlexibleRepayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2LoanFlexibleRepayHistoryRouteHandler: RouteHandler<
  typeof getSapiV2LoanFlexibleRepayHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV2LoanFlexibleAdjustLtvRouteHandler: RouteHandler<
  typeof postSapiV2LoanFlexibleAdjustLtvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2LoanFlexibleLtvAdjustmentHistoryRouteHandler: RouteHandler<
  typeof getSapiV2LoanFlexibleLtvAdjustmentHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2LoanFlexibleLoanableDataRouteHandler: RouteHandler<
  typeof getSapiV2LoanFlexibleLoanableDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2LoanFlexibleCollateralDataRouteHandler: RouteHandler<
  typeof getSapiV2LoanFlexibleCollateralDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1PayTransactionsRouteHandler: RouteHandler<
  typeof getSapiV1PayTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ConvertExchangeInfoRouteHandler: RouteHandler<
  typeof getSapiV1ConvertExchangeInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ConvertAssetInfoRouteHandler: RouteHandler<
  typeof getSapiV1ConvertAssetInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1ConvertGetQuoteRouteHandler: RouteHandler<
  typeof postSapiV1ConvertGetQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1ConvertAcceptQuoteRouteHandler: RouteHandler<
  typeof postSapiV1ConvertAcceptQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ConvertOrderStatusRouteHandler: RouteHandler<
  typeof getSapiV1ConvertOrderStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1ConvertLimitPlaceOrderRouteHandler: RouteHandler<
  typeof postSapiV1ConvertLimitPlaceOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1ConvertLimitCancelOrderRouteHandler: RouteHandler<
  typeof postSapiV1ConvertLimitCancelOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ConvertLimitQueryOpenOrdersRouteHandler: RouteHandler<
  typeof getSapiV1ConvertLimitQueryOpenOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1ConvertTradeFlowRouteHandler: RouteHandler<
  typeof getSapiV1ConvertTradeFlowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1RebateTaxQueryRouteHandler: RouteHandler<
  typeof getSapiV1RebateTaxQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1NftHistoryTransactionsRouteHandler: RouteHandler<
  typeof getSapiV1NftHistoryTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1NftHistoryDepositRouteHandler: RouteHandler<
  typeof getSapiV1NftHistoryDepositRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1NftHistoryWithdrawRouteHandler: RouteHandler<
  typeof getSapiV1NftHistoryWithdrawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1NftUserGetAssetRouteHandler: RouteHandler<
  typeof getSapiV1NftUserGetAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1GiftcardCreateCodeRouteHandler: RouteHandler<
  typeof postSapiV1GiftcardCreateCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1GiftcardRedeemCodeRouteHandler: RouteHandler<
  typeof postSapiV1GiftcardRedeemCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1GiftcardVerifyRouteHandler: RouteHandler<
  typeof getSapiV1GiftcardVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1GiftcardCryptographyRsaPublicKeyRouteHandler: RouteHandler<
  typeof getSapiV1GiftcardCryptographyRsaPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1GiftcardBuyCodeRouteHandler: RouteHandler<
  typeof postSapiV1GiftcardBuyCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1GiftcardBuyCodeTokenLimitRouteHandler: RouteHandler<
  typeof getSapiV1GiftcardBuyCodeTokenLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestTargetAssetListRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestTargetAssetListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestTargetAssetRoiListRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestTargetAssetRoiListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestAllAssetRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestAllAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestSourceAssetListRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestSourceAssetListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LendingAutoInvestPlanAddRouteHandler: RouteHandler<
  typeof postSapiV1LendingAutoInvestPlanAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LendingAutoInvestPlanEditRouteHandler: RouteHandler<
  typeof postSapiV1LendingAutoInvestPlanEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LendingAutoInvestPlanEditStatusRouteHandler: RouteHandler<
  typeof postSapiV1LendingAutoInvestPlanEditStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestPlanListRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestPlanListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestPlanIdRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestHistoryListRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestHistoryListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestIndexInfoRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestIndexInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestIndexUserSummaryRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestIndexUserSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LendingAutoInvestOneOffRouteHandler: RouteHandler<
  typeof postSapiV1LendingAutoInvestOneOffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestOneOffStatusRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestOneOffStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1LendingAutoInvestRedeemRouteHandler: RouteHandler<
  typeof postSapiV1LendingAutoInvestRedeemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestRedeemHistoryRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestRedeemHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1LendingAutoInvestRebalanceHistoryRouteHandler: RouteHandler<
  typeof getSapiV1LendingAutoInvestRebalanceHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV2EthStakingEthStakeRouteHandler: RouteHandler<
  typeof postSapiV2EthStakingEthStakeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1EthStakingEthRedeemRouteHandler: RouteHandler<
  typeof postSapiV1EthStakingEthRedeemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1EthStakingEthHistoryStakingHistoryRouteHandler: RouteHandler<
  typeof getSapiV1EthStakingEthHistoryStakingHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1EthStakingEthHistoryRedemptionHistoryRouteHandler: RouteHandler<
  typeof getSapiV1EthStakingEthHistoryRedemptionHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1EthStakingEthHistoryRewardsHistoryRouteHandler: RouteHandler<
  typeof getSapiV1EthStakingEthHistoryRewardsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1EthStakingEthQuotaRouteHandler: RouteHandler<
  typeof getSapiV1EthStakingEthQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1EthStakingEthHistoryRateHistoryRouteHandler: RouteHandler<
  typeof getSapiV1EthStakingEthHistoryRateHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV2EthStakingAccountRouteHandler: RouteHandler<
  typeof getSapiV2EthStakingAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1EthStakingWbethWrapRouteHandler: RouteHandler<
  typeof postSapiV1EthStakingWbethWrapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1EthStakingWbethHistoryWrapHistoryRouteHandler: RouteHandler<
  typeof getSapiV1EthStakingWbethHistoryWrapHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1EthStakingWbethHistoryUnwrapHistoryRouteHandler: RouteHandler<
  typeof getSapiV1EthStakingWbethHistoryUnwrapHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1EthStakingEthHistoryWbethRewardsHistoryRouteHandler: RouteHandler<
  typeof getSapiV1EthStakingEthHistoryWbethRewardsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CopyTradingFuturesUserStatusRouteHandler: RouteHandler<
  typeof getSapiV1CopyTradingFuturesUserStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1CopyTradingFuturesLeadSymbolRouteHandler: RouteHandler<
  typeof getSapiV1CopyTradingFuturesLeadSymbolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnFlexibleListRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnFlexibleListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnLockedListRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnLockedListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SimpleEarnFlexibleSubscribeRouteHandler: RouteHandler<
  typeof postSapiV1SimpleEarnFlexibleSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SimpleEarnLockedSubscribeRouteHandler: RouteHandler<
  typeof postSapiV1SimpleEarnLockedSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SimpleEarnFlexibleRedeemRouteHandler: RouteHandler<
  typeof postSapiV1SimpleEarnFlexibleRedeemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SimpleEarnLockedRedeemRouteHandler: RouteHandler<
  typeof postSapiV1SimpleEarnLockedRedeemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnFlexiblePositionRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnFlexiblePositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnLockedPositionRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnLockedPositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnAccountRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnFlexibleHistorySubscriptionRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnLockedHistorySubscriptionRecordRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnLockedHistorySubscriptionRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnFlexibleHistoryRedemptionRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnLockedHistoryRedemptionRecordRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnLockedHistoryRedemptionRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnFlexibleHistoryRewardsRecordRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnFlexibleHistoryRewardsRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnLockedHistoryRewardsRecordRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnLockedHistoryRewardsRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SimpleEarnFlexibleSetAutoSubscribeRouteHandler: RouteHandler<
  typeof postSapiV1SimpleEarnFlexibleSetAutoSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1SimpleEarnLockedSetAutoSubscribeRouteHandler: RouteHandler<
  typeof postSapiV1SimpleEarnLockedSetAutoSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnFlexiblePersonalLeftQuotaRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnFlexiblePersonalLeftQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnLockedPersonalLeftQuotaRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnLockedPersonalLeftQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnFlexibleSubscriptionPreviewRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnFlexibleSubscriptionPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnLockedSubscriptionPreviewRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnLockedSubscriptionPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnLockedSetRedeemOptionRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnLockedSetRedeemOptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnFlexibleHistoryRateHistoryRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnFlexibleHistoryRateHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1SimpleEarnFlexibleHistoryCollateralRecordRouteHandler: RouteHandler<
  typeof getSapiV1SimpleEarnFlexibleHistoryCollateralRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1DciProductListRouteHandler: RouteHandler<
  typeof getSapiV1DciProductListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1DciProductSubscribeRouteHandler: RouteHandler<
  typeof postSapiV1DciProductSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1DciProductPositionsRouteHandler: RouteHandler<
  typeof getSapiV1DciProductPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSapiV1DciProductAccountsRouteHandler: RouteHandler<
  typeof getSapiV1DciProductAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSapiV1DciProductAutoCompoundEditStatusRouteHandler: RouteHandler<
  typeof postSapiV1DciProductAutoCompoundEditStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
