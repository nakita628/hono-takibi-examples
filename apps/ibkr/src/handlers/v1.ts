import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1ApiFyiDeliveryoptionsDeviceIdRoute,
  deleteV1ApiIserverAccountAccountIdAlertAlertIdRoute,
  deleteV1ApiIserverAccountAccountIdOrderOrderIdRoute,
  deleteV1ApiIserverWatchlistRoute,
  getV1ApiAceswsAccountIdSignaturesAndOwnersRoute,
  getV1ApiContractTradingScheduleRoute,
  getV1ApiForecastCategoryTreeRoute,
  getV1ApiForecastContractDetailsRoute,
  getV1ApiForecastContractMarketRoute,
  getV1ApiForecastContractRulesRoute,
  getV1ApiForecastContractSchedulesRoute,
  getV1ApiFyiDeliveryoptionsRoute,
  getV1ApiFyiDisclaimerTypecodeRoute,
  getV1ApiFyiNotificationsRoute,
  getV1ApiFyiSettingsRoute,
  getV1ApiFyiUnreadnumberRoute,
  getV1ApiIserverAccountAccountIdAlertsRoute,
  getV1ApiIserverAccountAccountIdSummaryAvailableFundsRoute,
  getV1ApiIserverAccountAccountIdSummaryBalancesRoute,
  getV1ApiIserverAccountAccountIdSummaryMarginsRoute,
  getV1ApiIserverAccountAccountIdSummaryMarketValueRoute,
  getV1ApiIserverAccountAccountIdSummaryRoute,
  getV1ApiIserverAccountAlertAlertIdRoute,
  getV1ApiIserverAccountAllocationAccountsRoute,
  getV1ApiIserverAccountAllocationGroupRoute,
  getV1ApiIserverAccountAllocationModelsRoute,
  getV1ApiIserverAccountAllocationPresetsRoute,
  getV1ApiIserverAccountMtaRoute,
  getV1ApiIserverAccountOrdersRoute,
  getV1ApiIserverAccountOrderStatusOrderIdRoute,
  getV1ApiIserverAccountPnlPartitionedRoute,
  getV1ApiIserverAccountSearchSearchPatternRoute,
  getV1ApiIserverAccountsRoute,
  getV1ApiIserverAccountTradesRoute,
  getV1ApiIserverContractConidAlgosRoute,
  getV1ApiIserverContractConidInfoAndRulesRoute,
  getV1ApiIserverContractConidInfoRoute,
  getV1ApiIserverCurrencyPairsRoute,
  getV1ApiIserverExchangerateRoute,
  getV1ApiIserverMarketdataHistoryRoute,
  getV1ApiIserverMarketdataSnapshotRoute,
  getV1ApiIserverMarketdataUnsubscribeallRoute,
  getV1ApiIserverScannerParamsRoute,
  getV1ApiIserverSecdefBondFiltersRoute,
  getV1ApiIserverSecdefInfoRoute,
  getV1ApiIserverSecdefSearchRoute,
  getV1ApiIserverSecdefStrikesRoute,
  getV1ApiIserverWatchlistRoute,
  getV1ApiIserverWatchlistsRoute,
  getV1ApiPortfolio2AccountIdPositionsRoute,
  getV1ApiPortfolioAccountIdAllocationRoute,
  getV1ApiPortfolioAccountIdComboPositionsRoute,
  getV1ApiPortfolioAccountIdLedgerRoute,
  getV1ApiPortfolioAccountIdMetaRoute,
  getV1ApiPortfolioAccountIdPositionConidRoute,
  getV1ApiPortfolioAccountIdPositionsPageIdRoute,
  getV1ApiPortfolioAccountIdSummaryRoute,
  getV1ApiPortfolioAccountsRoute,
  getV1ApiPortfolioPositionsConidRoute,
  getV1ApiPortfolioSubaccounts2Route,
  getV1ApiPortfolioSubaccountsRoute,
  getV1ApiSsoValidateRoute,
  getV1ApiTrsrvAllConidsRoute,
  getV1ApiTrsrvFuturesRoute,
  getV1ApiTrsrvSecdefRoute,
  getV1ApiTrsrvSecdefScheduleRoute,
  getV1ApiTrsrvStocksRoute,
  getV1ApiWsRoute,
  postV1ApiFaFaPresetGetRoute,
  postV1ApiFaFaPresetSaveRoute,
  postV1ApiFaIsFullMasterRoute,
  postV1ApiFaModelAccountsDetailsRoute,
  postV1ApiFaModelCashAnalyzerRoute,
  postV1ApiFaModelInvestDivestPositionsRoute,
  postV1ApiFaModelInvestDivestRoute,
  postV1ApiFaModelListRoute,
  postV1ApiFaModelPositionsRoute,
  postV1ApiFaModelRebalanceToExistingTargetsRoute,
  postV1ApiFaModelRebalanceToNewTargetsRoute,
  postV1ApiFaModelRebalanceToSpecificTargetsRoute,
  postV1ApiFaModelSaveRoute,
  postV1ApiFaModelSubmitTransfersRoute,
  postV1ApiFaModelSummaryRoute,
  postV1ApiFaModelTwsInvestDivestRoute,
  postV1ApiFyiDeliveryoptionsDeviceRoute,
  postV1ApiFyiSettingsTypecodeRoute,
  postV1ApiIserverAccountAccountIdAlertActivateRoute,
  postV1ApiIserverAccountAccountIdAlertRoute,
  postV1ApiIserverAccountAccountIdOrderOrderIdRoute,
  postV1ApiIserverAccountAccountIdOrdersRoute,
  postV1ApiIserverAccountAccountIdOrdersWhatifRoute,
  postV1ApiIserverAccountAllocationGroupDeleteRoute,
  postV1ApiIserverAccountAllocationGroupRoute,
  postV1ApiIserverAccountAllocationGroupSingleRoute,
  postV1ApiIserverAccountAllocationPresetsRoute,
  postV1ApiIserverAccountModelCodeOrdersRoute,
  postV1ApiIserverAccountRoute,
  postV1ApiIserverAuthSsodhInitRoute,
  postV1ApiIserverAuthStatusRoute,
  postV1ApiIserverContractRulesRoute,
  postV1ApiIserverDynaccountRoute,
  postV1ApiIserverMarketdataUnsubscribeRoute,
  postV1ApiIserverNotificationRoute,
  postV1ApiIserverQuestionsSuppressResetRoute,
  postV1ApiIserverQuestionsSuppressRoute,
  postV1ApiIserverReplyReplyIdRoute,
  postV1ApiIserverScannerRunRoute,
  postV1ApiIserverSecdefSearchRoute,
  postV1ApiIserverWatchlistRoute,
  postV1ApiLogoutRoute,
  postV1ApiOauthAccessTokenRoute,
  postV1ApiOauthLiveSessionTokenRoute,
  postV1ApiOauthRequestTokenRoute,
  postV1ApiPaAllocationRoute,
  postV1ApiPaAllperiodsRoute,
  postV1ApiPaPerformanceRoute,
  postV1ApiPaTransactionsRoute,
  postV1ApiPortfolioAccountIdPositionsInvalidateRoute,
  postV1ApiTickleRoute,
  putV1ApiFyiDeliveryoptionsEmailRoute,
  putV1ApiFyiDisclaimerTypecodeRoute,
  putV1ApiFyiNotificationsNotificationIdRoute,
  putV1ApiIserverAccountAllocationGroupRoute,
} from '../routes'

export const postV1ApiFaFaPresetGetRouteHandler: RouteHandler<
  typeof postV1ApiFaFaPresetGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaFaPresetSaveRouteHandler: RouteHandler<
  typeof postV1ApiFaFaPresetSaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaIsFullMasterRouteHandler: RouteHandler<
  typeof postV1ApiFaIsFullMasterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelAccountsDetailsRouteHandler: RouteHandler<
  typeof postV1ApiFaModelAccountsDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelCashAnalyzerRouteHandler: RouteHandler<
  typeof postV1ApiFaModelCashAnalyzerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelInvestDivestRouteHandler: RouteHandler<
  typeof postV1ApiFaModelInvestDivestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelInvestDivestPositionsRouteHandler: RouteHandler<
  typeof postV1ApiFaModelInvestDivestPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelListRouteHandler: RouteHandler<
  typeof postV1ApiFaModelListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelPositionsRouteHandler: RouteHandler<
  typeof postV1ApiFaModelPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelRebalanceToExistingTargetsRouteHandler: RouteHandler<
  typeof postV1ApiFaModelRebalanceToExistingTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelRebalanceToNewTargetsRouteHandler: RouteHandler<
  typeof postV1ApiFaModelRebalanceToNewTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelRebalanceToSpecificTargetsRouteHandler: RouteHandler<
  typeof postV1ApiFaModelRebalanceToSpecificTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelSaveRouteHandler: RouteHandler<
  typeof postV1ApiFaModelSaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelSubmitTransfersRouteHandler: RouteHandler<
  typeof postV1ApiFaModelSubmitTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelSummaryRouteHandler: RouteHandler<
  typeof postV1ApiFaModelSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFaModelTwsInvestDivestRouteHandler: RouteHandler<
  typeof postV1ApiFaModelTwsInvestDivestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFyiDeliveryoptionsDeviceRouteHandler: RouteHandler<
  typeof postV1ApiFyiDeliveryoptionsDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiFyiSettingsTypecodeRouteHandler: RouteHandler<
  typeof postV1ApiFyiSettingsTypecodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountAllocationGroupRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountAllocationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAllocationGroupRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAllocationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ApiIserverAccountAllocationGroupRouteHandler: RouteHandler<
  typeof putV1ApiIserverAccountAllocationGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountAllocationGroupDeleteRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountAllocationGroupDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountAllocationGroupSingleRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountAllocationGroupSingleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountAllocationPresetsRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountAllocationPresetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAllocationPresetsRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAllocationPresetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountAccountIdAlertRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountAccountIdAlertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountAccountIdAlertActivateRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountAccountIdAlertActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountAccountIdOrderOrderIdRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountAccountIdOrderOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ApiIserverAccountAccountIdOrderOrderIdRouteHandler: RouteHandler<
  typeof deleteV1ApiIserverAccountAccountIdOrderOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountAccountIdOrdersRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountAccountIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountAccountIdOrdersWhatifRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountAccountIdOrdersWhatifRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAccountModelCodeOrdersRouteHandler: RouteHandler<
  typeof postV1ApiIserverAccountModelCodeOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAuthSsodhInitRouteHandler: RouteHandler<
  typeof postV1ApiIserverAuthSsodhInitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverAuthStatusRouteHandler: RouteHandler<
  typeof postV1ApiIserverAuthStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverContractRulesRouteHandler: RouteHandler<
  typeof postV1ApiIserverContractRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverDynaccountRouteHandler: RouteHandler<
  typeof postV1ApiIserverDynaccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverMarketdataUnsubscribeRouteHandler: RouteHandler<
  typeof postV1ApiIserverMarketdataUnsubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverNotificationRouteHandler: RouteHandler<
  typeof postV1ApiIserverNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverQuestionsSuppressRouteHandler: RouteHandler<
  typeof postV1ApiIserverQuestionsSuppressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverQuestionsSuppressResetRouteHandler: RouteHandler<
  typeof postV1ApiIserverQuestionsSuppressResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverReplyReplyIdRouteHandler: RouteHandler<
  typeof postV1ApiIserverReplyReplyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverScannerRunRouteHandler: RouteHandler<
  typeof postV1ApiIserverScannerRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverSecdefSearchRouteHandler: RouteHandler<
  typeof postV1ApiIserverSecdefSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverSecdefSearchRouteHandler: RouteHandler<
  typeof getV1ApiIserverSecdefSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiIserverWatchlistRouteHandler: RouteHandler<
  typeof postV1ApiIserverWatchlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverWatchlistRouteHandler: RouteHandler<
  typeof getV1ApiIserverWatchlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ApiIserverWatchlistRouteHandler: RouteHandler<
  typeof deleteV1ApiIserverWatchlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiLogoutRouteHandler: RouteHandler<typeof postV1ApiLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiOauthAccessTokenRouteHandler: RouteHandler<
  typeof postV1ApiOauthAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiOauthLiveSessionTokenRouteHandler: RouteHandler<
  typeof postV1ApiOauthLiveSessionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiOauthRequestTokenRouteHandler: RouteHandler<
  typeof postV1ApiOauthRequestTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiPaAllocationRouteHandler: RouteHandler<
  typeof postV1ApiPaAllocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiPaAllperiodsRouteHandler: RouteHandler<
  typeof postV1ApiPaAllperiodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiPaPerformanceRouteHandler: RouteHandler<
  typeof postV1ApiPaPerformanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiPaTransactionsRouteHandler: RouteHandler<
  typeof postV1ApiPaTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiPortfolioAccountIdPositionsInvalidateRouteHandler: RouteHandler<
  typeof postV1ApiPortfolioAccountIdPositionsInvalidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiTickleRouteHandler: RouteHandler<typeof postV1ApiTickleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiAceswsAccountIdSignaturesAndOwnersRouteHandler: RouteHandler<
  typeof getV1ApiAceswsAccountIdSignaturesAndOwnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiContractTradingScheduleRouteHandler: RouteHandler<
  typeof getV1ApiContractTradingScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiForecastCategoryTreeRouteHandler: RouteHandler<
  typeof getV1ApiForecastCategoryTreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiForecastContractDetailsRouteHandler: RouteHandler<
  typeof getV1ApiForecastContractDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiForecastContractMarketRouteHandler: RouteHandler<
  typeof getV1ApiForecastContractMarketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiForecastContractRulesRouteHandler: RouteHandler<
  typeof getV1ApiForecastContractRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiForecastContractSchedulesRouteHandler: RouteHandler<
  typeof getV1ApiForecastContractSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiFyiDeliveryoptionsRouteHandler: RouteHandler<
  typeof getV1ApiFyiDeliveryoptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiFyiDisclaimerTypecodeRouteHandler: RouteHandler<
  typeof getV1ApiFyiDisclaimerTypecodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ApiFyiDisclaimerTypecodeRouteHandler: RouteHandler<
  typeof putV1ApiFyiDisclaimerTypecodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiFyiNotificationsRouteHandler: RouteHandler<
  typeof getV1ApiFyiNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiFyiSettingsRouteHandler: RouteHandler<
  typeof getV1ApiFyiSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiFyiUnreadnumberRouteHandler: RouteHandler<
  typeof getV1ApiFyiUnreadnumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAlertAlertIdRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAlertAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAllocationAccountsRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAllocationAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAllocationModelsRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAllocationModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountMtaRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountMtaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountOrderStatusOrderIdRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountOrderStatusOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountOrdersRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountPnlPartitionedRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountPnlPartitionedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountSearchSearchPatternRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountSearchSearchPatternRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountTradesRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountTradesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAccountIdAlertsRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAccountIdAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAccountIdSummaryRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAccountIdSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAccountIdSummaryAvailableFundsRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAccountIdSummaryAvailableFundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAccountIdSummaryBalancesRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAccountIdSummaryBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAccountIdSummaryMarginsRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAccountIdSummaryMarginsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountAccountIdSummaryMarketValueRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountAccountIdSummaryMarketValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverAccountsRouteHandler: RouteHandler<
  typeof getV1ApiIserverAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverContractConidAlgosRouteHandler: RouteHandler<
  typeof getV1ApiIserverContractConidAlgosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverContractConidInfoRouteHandler: RouteHandler<
  typeof getV1ApiIserverContractConidInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverContractConidInfoAndRulesRouteHandler: RouteHandler<
  typeof getV1ApiIserverContractConidInfoAndRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverCurrencyPairsRouteHandler: RouteHandler<
  typeof getV1ApiIserverCurrencyPairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverExchangerateRouteHandler: RouteHandler<
  typeof getV1ApiIserverExchangerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverMarketdataHistoryRouteHandler: RouteHandler<
  typeof getV1ApiIserverMarketdataHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverMarketdataSnapshotRouteHandler: RouteHandler<
  typeof getV1ApiIserverMarketdataSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverMarketdataUnsubscribeallRouteHandler: RouteHandler<
  typeof getV1ApiIserverMarketdataUnsubscribeallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverScannerParamsRouteHandler: RouteHandler<
  typeof getV1ApiIserverScannerParamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverSecdefBondFiltersRouteHandler: RouteHandler<
  typeof getV1ApiIserverSecdefBondFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverSecdefInfoRouteHandler: RouteHandler<
  typeof getV1ApiIserverSecdefInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverSecdefStrikesRouteHandler: RouteHandler<
  typeof getV1ApiIserverSecdefStrikesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiIserverWatchlistsRouteHandler: RouteHandler<
  typeof getV1ApiIserverWatchlistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioAccountsRouteHandler: RouteHandler<
  typeof getV1ApiPortfolioAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioPositionsConidRouteHandler: RouteHandler<
  typeof getV1ApiPortfolioPositionsConidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioSubaccountsRouteHandler: RouteHandler<
  typeof getV1ApiPortfolioSubaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioSubaccounts2RouteHandler: RouteHandler<
  typeof getV1ApiPortfolioSubaccounts2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioAccountIdAllocationRouteHandler: RouteHandler<
  typeof getV1ApiPortfolioAccountIdAllocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioAccountIdComboPositionsRouteHandler: RouteHandler<
  typeof getV1ApiPortfolioAccountIdComboPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioAccountIdLedgerRouteHandler: RouteHandler<
  typeof getV1ApiPortfolioAccountIdLedgerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioAccountIdMetaRouteHandler: RouteHandler<
  typeof getV1ApiPortfolioAccountIdMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioAccountIdPositionConidRouteHandler: RouteHandler<
  typeof getV1ApiPortfolioAccountIdPositionConidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioAccountIdPositionsPageIdRouteHandler: RouteHandler<
  typeof getV1ApiPortfolioAccountIdPositionsPageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolioAccountIdSummaryRouteHandler: RouteHandler<
  typeof getV1ApiPortfolioAccountIdSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiPortfolio2AccountIdPositionsRouteHandler: RouteHandler<
  typeof getV1ApiPortfolio2AccountIdPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiSsoValidateRouteHandler: RouteHandler<
  typeof getV1ApiSsoValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiTrsrvAllConidsRouteHandler: RouteHandler<
  typeof getV1ApiTrsrvAllConidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiTrsrvFuturesRouteHandler: RouteHandler<
  typeof getV1ApiTrsrvFuturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiTrsrvSecdefRouteHandler: RouteHandler<
  typeof getV1ApiTrsrvSecdefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiTrsrvSecdefScheduleRouteHandler: RouteHandler<
  typeof getV1ApiTrsrvSecdefScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiTrsrvStocksRouteHandler: RouteHandler<
  typeof getV1ApiTrsrvStocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ApiWsRouteHandler: RouteHandler<typeof getV1ApiWsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ApiFyiDeliveryoptionsEmailRouteHandler: RouteHandler<
  typeof putV1ApiFyiDeliveryoptionsEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ApiFyiNotificationsNotificationIdRouteHandler: RouteHandler<
  typeof putV1ApiFyiNotificationsNotificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ApiFyiDeliveryoptionsDeviceIdRouteHandler: RouteHandler<
  typeof deleteV1ApiFyiDeliveryoptionsDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ApiIserverAccountAccountIdAlertAlertIdRouteHandler: RouteHandler<
  typeof deleteV1ApiIserverAccountAccountIdAlertAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
