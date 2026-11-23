import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1ApiFaFaPresetGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaFaPresetSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaIsFullMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelAccountsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelCashAnalyzerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelInvestDivestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelInvestDivestPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelRebalanceToExistingTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelRebalanceToNewTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelRebalanceToSpecificTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelSubmitTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFaModelTwsInvestDivestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFyiDeliveryoptionsDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiFyiSettingsTypecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAllocationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAllocationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ApiIserverAccountAllocationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAllocationGroupDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAllocationGroupSingleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAllocationPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAllocationPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAccountIdAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAccountIdAlertActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAccountIdOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApiIserverAccountAccountIdOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAccountIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAccountIdOrdersWhatifRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountModelCodeOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAuthSsodhInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAuthStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverContractRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverDynaccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverMarketdataUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverQuestionsSuppressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverQuestionsSuppressResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverReplyReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverScannerRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverSecdefSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverSecdefSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverWatchlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverWatchlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApiIserverWatchlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiOauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiOauthLiveSessionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiOauthRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiPaAllocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiPaAllperiodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiPaPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiPaTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiPortfolioAccountIdPositionsInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiTickleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiAceswsAccountIdSignaturesAndOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiContractTradingScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiForecastCategoryTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiForecastContractDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiForecastContractMarketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiForecastContractRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiForecastContractSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiFyiDeliveryoptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiFyiDisclaimerTypecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ApiFyiDisclaimerTypecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiFyiNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiFyiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiFyiUnreadnumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAlertAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAllocationAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAllocationModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountMtaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountOrderStatusOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountPnlPartitionedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountSearchSearchPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdSummaryAvailableFundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdSummaryBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdSummaryMarginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdSummaryMarketValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverContractConidAlgosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverContractConidInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverContractConidInfoAndRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverCurrencyPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverExchangerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverMarketdataHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverMarketdataSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverMarketdataUnsubscribeallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverScannerParamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverSecdefBondFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverSecdefInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverSecdefStrikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverWatchlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioPositionsConidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioSubaccounts2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdAllocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdComboPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdLedgerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdPositionConidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdPositionsPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolioAccountIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiPortfolio2AccountIdPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiSsoValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiTrsrvAllConidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiTrsrvFuturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiTrsrvSecdefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiTrsrvSecdefScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiTrsrvStocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiWsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ApiFyiDeliveryoptionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ApiFyiNotificationsNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApiFyiDeliveryoptionsDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApiIserverAccountAccountIdAlertAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
