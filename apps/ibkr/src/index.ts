import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ApiFyiDeliveryoptionsDeviceIdRoute,
  deleteV1ApiIserverAccountAccountIdAlertAlertIdRoute,
  deleteV1ApiIserverAccountAccountIdOrderOrderIdRoute,
  deleteV1ApiIserverWatchlistRoute,
  getGwApiV1AccountsAccountIdDetailsRoute,
  getGwApiV1AccountsAccountIdKycRoute,
  getGwApiV1AccountsAccountIdLoginMessagesRoute,
  getGwApiV1AccountsAccountIdStatusRoute,
  getGwApiV1AccountsAccountIdTasksRoute,
  getGwApiV1AccountsLoginMessagesRoute,
  getGwApiV1AccountsRoute,
  getGwApiV1AccountsStatusRoute,
  getGwApiV1ClientInstructionsClientInstructionIdRoute,
  getGwApiV1EchoHttpsRoute,
  getGwApiV1EnumerationsComplexAssetTransferRoute,
  getGwApiV1EnumerationsEnumerationTypeRoute,
  getGwApiV1FormsRequiredFormsRoute,
  getGwApiV1FormsRoute,
  getGwApiV1InstructionSetsInstructionSetIdRoute,
  getGwApiV1InstructionsInstructionIdRoute,
  getGwApiV1ParticipatingBanksRoute,
  getGwApiV1RequestsRequestIdStatusRoute,
  getGwApiV1RequestsRoute,
  getGwApiV1RestrictionsAccountRoute,
  getGwApiV1RestrictionsIdsRoute,
  getGwApiV1RestrictionsListRoute,
  getGwApiV1RestrictionsListsIdsRoute,
  getGwApiV1RestrictionsRestrictionRoute,
  getGwApiV1RestrictionsRestrictionScopeRoute,
  getGwApiV1RestrictionsUserRoute,
  getGwApiV1StatementsAvailableRoute,
  getGwApiV1TaxDocumentsAvailableRoute,
  getGwApiV1TaxVouchersActiveCountriesRoute,
  getGwApiV1TaxVouchersDividendsRoute,
  getGwApiV1TaxVouchersRequestIdDownloadRoute,
  getGwApiV1TaxVouchersRequestIdStateRoute,
  getGwApiV1TaxVouchersYearsRoute,
  getGwApiV1TradeConfirmationsAvailableRoute,
  getGwApiV1ValidationsUsernamesUsernameRoute,
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
  patchGwApiV1AccountsAccountIdStatusRoute,
  patchGwApiV1AccountsAccountIdTasksRoute,
  patchGwApiV1AccountsRoute,
  patchGwApiV1RequestsRequestIdStatusRoute,
  postGwApiV1AccountsAccountIdTasksRoute,
  postGwApiV1AccountsDocumentsRoute,
  postGwApiV1AccountsRoute,
  postGwApiV1BalancesQueryRoute,
  postGwApiV1BankInstructionsBulkRoute,
  postGwApiV1BankInstructionsQueryRoute,
  postGwApiV1BankInstructionsRoute,
  postGwApiV1EchoSignedJwtRoute,
  postGwApiV1ExternalAssetTransfersBulkRoute,
  postGwApiV1ExternalAssetTransfersRoute,
  postGwApiV1ExternalCashTransfersBulkRoute,
  postGwApiV1ExternalCashTransfersQueryRoute,
  postGwApiV1ExternalCashTransfersRoute,
  postGwApiV1InstructionsCancelBulkRoute,
  postGwApiV1InstructionsCancelRoute,
  postGwApiV1InstructionsQueryRoute,
  postGwApiV1InternalAssetTransfersBulkRoute,
  postGwApiV1InternalAssetTransfersRoute,
  postGwApiV1InternalCashTransfersBulkRoute,
  postGwApiV1InternalCashTransfersRoute,
  postGwApiV1RestrictionsRoute,
  postGwApiV1RestrictionsVerifyRoute,
  postGwApiV1SsoBrowserSessionsRoute,
  postGwApiV1SsoSessionsRoute,
  postGwApiV1StatementsRoute,
  postGwApiV1TaxDocumentsRoute,
  postGwApiV1TaxVouchersRoute,
  postGwApiV1TradeConfirmationsRoute,
  postGwApiV2ExternalAssetTransfersBulkRoute,
  postGwApiV2ExternalAssetTransfersRoute,
  postOauth2ApiV1TokenRoute,
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
} from './routes'
import {
  deleteV1ApiFyiDeliveryoptionsDeviceIdRouteHandler,
  deleteV1ApiIserverAccountAccountIdAlertAlertIdRouteHandler,
  deleteV1ApiIserverAccountAccountIdOrderOrderIdRouteHandler,
  deleteV1ApiIserverWatchlistRouteHandler,
  getGwApiV1AccountsAccountIdDetailsRouteHandler,
  getGwApiV1AccountsAccountIdKycRouteHandler,
  getGwApiV1AccountsAccountIdLoginMessagesRouteHandler,
  getGwApiV1AccountsAccountIdStatusRouteHandler,
  getGwApiV1AccountsAccountIdTasksRouteHandler,
  getGwApiV1AccountsLoginMessagesRouteHandler,
  getGwApiV1AccountsRouteHandler,
  getGwApiV1AccountsStatusRouteHandler,
  getGwApiV1ClientInstructionsClientInstructionIdRouteHandler,
  getGwApiV1EchoHttpsRouteHandler,
  getGwApiV1EnumerationsComplexAssetTransferRouteHandler,
  getGwApiV1EnumerationsEnumerationTypeRouteHandler,
  getGwApiV1FormsRequiredFormsRouteHandler,
  getGwApiV1FormsRouteHandler,
  getGwApiV1InstructionSetsInstructionSetIdRouteHandler,
  getGwApiV1InstructionsInstructionIdRouteHandler,
  getGwApiV1ParticipatingBanksRouteHandler,
  getGwApiV1RequestsRequestIdStatusRouteHandler,
  getGwApiV1RequestsRouteHandler,
  getGwApiV1RestrictionsAccountRouteHandler,
  getGwApiV1RestrictionsIdsRouteHandler,
  getGwApiV1RestrictionsListRouteHandler,
  getGwApiV1RestrictionsListsIdsRouteHandler,
  getGwApiV1RestrictionsRestrictionRouteHandler,
  getGwApiV1RestrictionsRestrictionScopeRouteHandler,
  getGwApiV1RestrictionsUserRouteHandler,
  getGwApiV1StatementsAvailableRouteHandler,
  getGwApiV1TaxDocumentsAvailableRouteHandler,
  getGwApiV1TaxVouchersActiveCountriesRouteHandler,
  getGwApiV1TaxVouchersDividendsRouteHandler,
  getGwApiV1TaxVouchersRequestIdDownloadRouteHandler,
  getGwApiV1TaxVouchersRequestIdStateRouteHandler,
  getGwApiV1TaxVouchersYearsRouteHandler,
  getGwApiV1TradeConfirmationsAvailableRouteHandler,
  getGwApiV1ValidationsUsernamesUsernameRouteHandler,
  getV1ApiAceswsAccountIdSignaturesAndOwnersRouteHandler,
  getV1ApiContractTradingScheduleRouteHandler,
  getV1ApiForecastCategoryTreeRouteHandler,
  getV1ApiForecastContractDetailsRouteHandler,
  getV1ApiForecastContractMarketRouteHandler,
  getV1ApiForecastContractRulesRouteHandler,
  getV1ApiForecastContractSchedulesRouteHandler,
  getV1ApiFyiDeliveryoptionsRouteHandler,
  getV1ApiFyiDisclaimerTypecodeRouteHandler,
  getV1ApiFyiNotificationsRouteHandler,
  getV1ApiFyiSettingsRouteHandler,
  getV1ApiFyiUnreadnumberRouteHandler,
  getV1ApiIserverAccountAccountIdAlertsRouteHandler,
  getV1ApiIserverAccountAccountIdSummaryAvailableFundsRouteHandler,
  getV1ApiIserverAccountAccountIdSummaryBalancesRouteHandler,
  getV1ApiIserverAccountAccountIdSummaryMarginsRouteHandler,
  getV1ApiIserverAccountAccountIdSummaryMarketValueRouteHandler,
  getV1ApiIserverAccountAccountIdSummaryRouteHandler,
  getV1ApiIserverAccountAlertAlertIdRouteHandler,
  getV1ApiIserverAccountAllocationAccountsRouteHandler,
  getV1ApiIserverAccountAllocationGroupRouteHandler,
  getV1ApiIserverAccountAllocationModelsRouteHandler,
  getV1ApiIserverAccountAllocationPresetsRouteHandler,
  getV1ApiIserverAccountMtaRouteHandler,
  getV1ApiIserverAccountOrdersRouteHandler,
  getV1ApiIserverAccountOrderStatusOrderIdRouteHandler,
  getV1ApiIserverAccountPnlPartitionedRouteHandler,
  getV1ApiIserverAccountSearchSearchPatternRouteHandler,
  getV1ApiIserverAccountsRouteHandler,
  getV1ApiIserverAccountTradesRouteHandler,
  getV1ApiIserverContractConidAlgosRouteHandler,
  getV1ApiIserverContractConidInfoAndRulesRouteHandler,
  getV1ApiIserverContractConidInfoRouteHandler,
  getV1ApiIserverCurrencyPairsRouteHandler,
  getV1ApiIserverExchangerateRouteHandler,
  getV1ApiIserverMarketdataHistoryRouteHandler,
  getV1ApiIserverMarketdataSnapshotRouteHandler,
  getV1ApiIserverMarketdataUnsubscribeallRouteHandler,
  getV1ApiIserverScannerParamsRouteHandler,
  getV1ApiIserverSecdefBondFiltersRouteHandler,
  getV1ApiIserverSecdefInfoRouteHandler,
  getV1ApiIserverSecdefSearchRouteHandler,
  getV1ApiIserverSecdefStrikesRouteHandler,
  getV1ApiIserverWatchlistRouteHandler,
  getV1ApiIserverWatchlistsRouteHandler,
  getV1ApiPortfolio2AccountIdPositionsRouteHandler,
  getV1ApiPortfolioAccountIdAllocationRouteHandler,
  getV1ApiPortfolioAccountIdComboPositionsRouteHandler,
  getV1ApiPortfolioAccountIdLedgerRouteHandler,
  getV1ApiPortfolioAccountIdMetaRouteHandler,
  getV1ApiPortfolioAccountIdPositionConidRouteHandler,
  getV1ApiPortfolioAccountIdPositionsPageIdRouteHandler,
  getV1ApiPortfolioAccountIdSummaryRouteHandler,
  getV1ApiPortfolioAccountsRouteHandler,
  getV1ApiPortfolioPositionsConidRouteHandler,
  getV1ApiPortfolioSubaccounts2RouteHandler,
  getV1ApiPortfolioSubaccountsRouteHandler,
  getV1ApiSsoValidateRouteHandler,
  getV1ApiTrsrvAllConidsRouteHandler,
  getV1ApiTrsrvFuturesRouteHandler,
  getV1ApiTrsrvSecdefRouteHandler,
  getV1ApiTrsrvSecdefScheduleRouteHandler,
  getV1ApiTrsrvStocksRouteHandler,
  getV1ApiWsRouteHandler,
  patchGwApiV1AccountsAccountIdStatusRouteHandler,
  patchGwApiV1AccountsAccountIdTasksRouteHandler,
  patchGwApiV1AccountsRouteHandler,
  patchGwApiV1RequestsRequestIdStatusRouteHandler,
  postGwApiV1AccountsAccountIdTasksRouteHandler,
  postGwApiV1AccountsDocumentsRouteHandler,
  postGwApiV1AccountsRouteHandler,
  postGwApiV1BalancesQueryRouteHandler,
  postGwApiV1BankInstructionsBulkRouteHandler,
  postGwApiV1BankInstructionsQueryRouteHandler,
  postGwApiV1BankInstructionsRouteHandler,
  postGwApiV1EchoSignedJwtRouteHandler,
  postGwApiV1ExternalAssetTransfersBulkRouteHandler,
  postGwApiV1ExternalAssetTransfersRouteHandler,
  postGwApiV1ExternalCashTransfersBulkRouteHandler,
  postGwApiV1ExternalCashTransfersQueryRouteHandler,
  postGwApiV1ExternalCashTransfersRouteHandler,
  postGwApiV1InstructionsCancelBulkRouteHandler,
  postGwApiV1InstructionsCancelRouteHandler,
  postGwApiV1InstructionsQueryRouteHandler,
  postGwApiV1InternalAssetTransfersBulkRouteHandler,
  postGwApiV1InternalAssetTransfersRouteHandler,
  postGwApiV1InternalCashTransfersBulkRouteHandler,
  postGwApiV1InternalCashTransfersRouteHandler,
  postGwApiV1RestrictionsRouteHandler,
  postGwApiV1RestrictionsVerifyRouteHandler,
  postGwApiV1SsoBrowserSessionsRouteHandler,
  postGwApiV1SsoSessionsRouteHandler,
  postGwApiV1StatementsRouteHandler,
  postGwApiV1TaxDocumentsRouteHandler,
  postGwApiV1TaxVouchersRouteHandler,
  postGwApiV1TradeConfirmationsRouteHandler,
  postGwApiV2ExternalAssetTransfersBulkRouteHandler,
  postGwApiV2ExternalAssetTransfersRouteHandler,
  postOauth2ApiV1TokenRouteHandler,
  postV1ApiFaFaPresetGetRouteHandler,
  postV1ApiFaFaPresetSaveRouteHandler,
  postV1ApiFaIsFullMasterRouteHandler,
  postV1ApiFaModelAccountsDetailsRouteHandler,
  postV1ApiFaModelCashAnalyzerRouteHandler,
  postV1ApiFaModelInvestDivestPositionsRouteHandler,
  postV1ApiFaModelInvestDivestRouteHandler,
  postV1ApiFaModelListRouteHandler,
  postV1ApiFaModelPositionsRouteHandler,
  postV1ApiFaModelRebalanceToExistingTargetsRouteHandler,
  postV1ApiFaModelRebalanceToNewTargetsRouteHandler,
  postV1ApiFaModelRebalanceToSpecificTargetsRouteHandler,
  postV1ApiFaModelSaveRouteHandler,
  postV1ApiFaModelSubmitTransfersRouteHandler,
  postV1ApiFaModelSummaryRouteHandler,
  postV1ApiFaModelTwsInvestDivestRouteHandler,
  postV1ApiFyiDeliveryoptionsDeviceRouteHandler,
  postV1ApiFyiSettingsTypecodeRouteHandler,
  postV1ApiIserverAccountAccountIdAlertActivateRouteHandler,
  postV1ApiIserverAccountAccountIdAlertRouteHandler,
  postV1ApiIserverAccountAccountIdOrderOrderIdRouteHandler,
  postV1ApiIserverAccountAccountIdOrdersRouteHandler,
  postV1ApiIserverAccountAccountIdOrdersWhatifRouteHandler,
  postV1ApiIserverAccountAllocationGroupDeleteRouteHandler,
  postV1ApiIserverAccountAllocationGroupRouteHandler,
  postV1ApiIserverAccountAllocationGroupSingleRouteHandler,
  postV1ApiIserverAccountAllocationPresetsRouteHandler,
  postV1ApiIserverAccountModelCodeOrdersRouteHandler,
  postV1ApiIserverAccountRouteHandler,
  postV1ApiIserverAuthSsodhInitRouteHandler,
  postV1ApiIserverAuthStatusRouteHandler,
  postV1ApiIserverContractRulesRouteHandler,
  postV1ApiIserverDynaccountRouteHandler,
  postV1ApiIserverMarketdataUnsubscribeRouteHandler,
  postV1ApiIserverNotificationRouteHandler,
  postV1ApiIserverQuestionsSuppressResetRouteHandler,
  postV1ApiIserverQuestionsSuppressRouteHandler,
  postV1ApiIserverReplyReplyIdRouteHandler,
  postV1ApiIserverScannerRunRouteHandler,
  postV1ApiIserverSecdefSearchRouteHandler,
  postV1ApiIserverWatchlistRouteHandler,
  postV1ApiLogoutRouteHandler,
  postV1ApiOauthAccessTokenRouteHandler,
  postV1ApiOauthLiveSessionTokenRouteHandler,
  postV1ApiOauthRequestTokenRouteHandler,
  postV1ApiPaAllocationRouteHandler,
  postV1ApiPaAllperiodsRouteHandler,
  postV1ApiPaPerformanceRouteHandler,
  postV1ApiPaTransactionsRouteHandler,
  postV1ApiPortfolioAccountIdPositionsInvalidateRouteHandler,
  postV1ApiTickleRouteHandler,
  putV1ApiFyiDeliveryoptionsEmailRouteHandler,
  putV1ApiFyiDisclaimerTypecodeRouteHandler,
  putV1ApiFyiNotificationsNotificationIdRouteHandler,
  putV1ApiIserverAccountAllocationGroupRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGwApiV1AccountsRoute, postGwApiV1AccountsRouteHandler)
  .openapi(patchGwApiV1AccountsRoute, patchGwApiV1AccountsRouteHandler)
  .openapi(getGwApiV1AccountsRoute, getGwApiV1AccountsRouteHandler)
  .openapi(postGwApiV1AccountsDocumentsRoute, postGwApiV1AccountsDocumentsRouteHandler)
  .openapi(postGwApiV1AccountsAccountIdTasksRoute, postGwApiV1AccountsAccountIdTasksRouteHandler)
  .openapi(patchGwApiV1AccountsAccountIdTasksRoute, patchGwApiV1AccountsAccountIdTasksRouteHandler)
  .openapi(getGwApiV1AccountsAccountIdTasksRoute, getGwApiV1AccountsAccountIdTasksRouteHandler)
  .openapi(postGwApiV1BalancesQueryRoute, postGwApiV1BalancesQueryRouteHandler)
  .openapi(postGwApiV1BankInstructionsRoute, postGwApiV1BankInstructionsRouteHandler)
  .openapi(postGwApiV1BankInstructionsQueryRoute, postGwApiV1BankInstructionsQueryRouteHandler)
  .openapi(postGwApiV1BankInstructionsBulkRoute, postGwApiV1BankInstructionsBulkRouteHandler)
  .openapi(postGwApiV1EchoSignedJwtRoute, postGwApiV1EchoSignedJwtRouteHandler)
  .openapi(postGwApiV1ExternalAssetTransfersRoute, postGwApiV1ExternalAssetTransfersRouteHandler)
  .openapi(
    postGwApiV1ExternalAssetTransfersBulkRoute,
    postGwApiV1ExternalAssetTransfersBulkRouteHandler,
  )
  .openapi(postGwApiV1ExternalCashTransfersRoute, postGwApiV1ExternalCashTransfersRouteHandler)
  .openapi(
    postGwApiV1ExternalCashTransfersQueryRoute,
    postGwApiV1ExternalCashTransfersQueryRouteHandler,
  )
  .openapi(
    postGwApiV1ExternalCashTransfersBulkRoute,
    postGwApiV1ExternalCashTransfersBulkRouteHandler,
  )
  .openapi(postGwApiV1InstructionsCancelRoute, postGwApiV1InstructionsCancelRouteHandler)
  .openapi(postGwApiV1InstructionsCancelBulkRoute, postGwApiV1InstructionsCancelBulkRouteHandler)
  .openapi(postGwApiV1InstructionsQueryRoute, postGwApiV1InstructionsQueryRouteHandler)
  .openapi(postGwApiV1InternalAssetTransfersRoute, postGwApiV1InternalAssetTransfersRouteHandler)
  .openapi(
    postGwApiV1InternalAssetTransfersBulkRoute,
    postGwApiV1InternalAssetTransfersBulkRouteHandler,
  )
  .openapi(postGwApiV1InternalCashTransfersRoute, postGwApiV1InternalCashTransfersRouteHandler)
  .openapi(
    postGwApiV1InternalCashTransfersBulkRoute,
    postGwApiV1InternalCashTransfersBulkRouteHandler,
  )
  .openapi(postGwApiV1RestrictionsRoute, postGwApiV1RestrictionsRouteHandler)
  .openapi(postGwApiV1RestrictionsVerifyRoute, postGwApiV1RestrictionsVerifyRouteHandler)
  .openapi(postGwApiV1SsoBrowserSessionsRoute, postGwApiV1SsoBrowserSessionsRouteHandler)
  .openapi(postGwApiV1SsoSessionsRoute, postGwApiV1SsoSessionsRouteHandler)
  .openapi(postGwApiV1StatementsRoute, postGwApiV1StatementsRouteHandler)
  .openapi(postGwApiV1TaxDocumentsRoute, postGwApiV1TaxDocumentsRouteHandler)
  .openapi(postGwApiV1TaxVouchersRoute, postGwApiV1TaxVouchersRouteHandler)
  .openapi(postGwApiV1TradeConfirmationsRoute, postGwApiV1TradeConfirmationsRouteHandler)
  .openapi(postGwApiV2ExternalAssetTransfersRoute, postGwApiV2ExternalAssetTransfersRouteHandler)
  .openapi(
    postGwApiV2ExternalAssetTransfersBulkRoute,
    postGwApiV2ExternalAssetTransfersBulkRouteHandler,
  )
  .openapi(postOauth2ApiV1TokenRoute, postOauth2ApiV1TokenRouteHandler)
  .openapi(postV1ApiFaFaPresetGetRoute, postV1ApiFaFaPresetGetRouteHandler)
  .openapi(postV1ApiFaFaPresetSaveRoute, postV1ApiFaFaPresetSaveRouteHandler)
  .openapi(postV1ApiFaIsFullMasterRoute, postV1ApiFaIsFullMasterRouteHandler)
  .openapi(postV1ApiFaModelAccountsDetailsRoute, postV1ApiFaModelAccountsDetailsRouteHandler)
  .openapi(postV1ApiFaModelCashAnalyzerRoute, postV1ApiFaModelCashAnalyzerRouteHandler)
  .openapi(postV1ApiFaModelInvestDivestRoute, postV1ApiFaModelInvestDivestRouteHandler)
  .openapi(
    postV1ApiFaModelInvestDivestPositionsRoute,
    postV1ApiFaModelInvestDivestPositionsRouteHandler,
  )
  .openapi(postV1ApiFaModelListRoute, postV1ApiFaModelListRouteHandler)
  .openapi(postV1ApiFaModelPositionsRoute, postV1ApiFaModelPositionsRouteHandler)
  .openapi(
    postV1ApiFaModelRebalanceToExistingTargetsRoute,
    postV1ApiFaModelRebalanceToExistingTargetsRouteHandler,
  )
  .openapi(
    postV1ApiFaModelRebalanceToNewTargetsRoute,
    postV1ApiFaModelRebalanceToNewTargetsRouteHandler,
  )
  .openapi(
    postV1ApiFaModelRebalanceToSpecificTargetsRoute,
    postV1ApiFaModelRebalanceToSpecificTargetsRouteHandler,
  )
  .openapi(postV1ApiFaModelSaveRoute, postV1ApiFaModelSaveRouteHandler)
  .openapi(postV1ApiFaModelSubmitTransfersRoute, postV1ApiFaModelSubmitTransfersRouteHandler)
  .openapi(postV1ApiFaModelSummaryRoute, postV1ApiFaModelSummaryRouteHandler)
  .openapi(postV1ApiFaModelTwsInvestDivestRoute, postV1ApiFaModelTwsInvestDivestRouteHandler)
  .openapi(postV1ApiFyiDeliveryoptionsDeviceRoute, postV1ApiFyiDeliveryoptionsDeviceRouteHandler)
  .openapi(postV1ApiFyiSettingsTypecodeRoute, postV1ApiFyiSettingsTypecodeRouteHandler)
  .openapi(postV1ApiIserverAccountRoute, postV1ApiIserverAccountRouteHandler)
  .openapi(
    postV1ApiIserverAccountAllocationGroupRoute,
    postV1ApiIserverAccountAllocationGroupRouteHandler,
  )
  .openapi(
    getV1ApiIserverAccountAllocationGroupRoute,
    getV1ApiIserverAccountAllocationGroupRouteHandler,
  )
  .openapi(
    putV1ApiIserverAccountAllocationGroupRoute,
    putV1ApiIserverAccountAllocationGroupRouteHandler,
  )
  .openapi(
    postV1ApiIserverAccountAllocationGroupDeleteRoute,
    postV1ApiIserverAccountAllocationGroupDeleteRouteHandler,
  )
  .openapi(
    postV1ApiIserverAccountAllocationGroupSingleRoute,
    postV1ApiIserverAccountAllocationGroupSingleRouteHandler,
  )
  .openapi(
    postV1ApiIserverAccountAllocationPresetsRoute,
    postV1ApiIserverAccountAllocationPresetsRouteHandler,
  )
  .openapi(
    getV1ApiIserverAccountAllocationPresetsRoute,
    getV1ApiIserverAccountAllocationPresetsRouteHandler,
  )
  .openapi(
    postV1ApiIserverAccountAccountIdAlertRoute,
    postV1ApiIserverAccountAccountIdAlertRouteHandler,
  )
  .openapi(
    postV1ApiIserverAccountAccountIdAlertActivateRoute,
    postV1ApiIserverAccountAccountIdAlertActivateRouteHandler,
  )
  .openapi(
    postV1ApiIserverAccountAccountIdOrderOrderIdRoute,
    postV1ApiIserverAccountAccountIdOrderOrderIdRouteHandler,
  )
  .openapi(
    deleteV1ApiIserverAccountAccountIdOrderOrderIdRoute,
    deleteV1ApiIserverAccountAccountIdOrderOrderIdRouteHandler,
  )
  .openapi(
    postV1ApiIserverAccountAccountIdOrdersRoute,
    postV1ApiIserverAccountAccountIdOrdersRouteHandler,
  )
  .openapi(
    postV1ApiIserverAccountAccountIdOrdersWhatifRoute,
    postV1ApiIserverAccountAccountIdOrdersWhatifRouteHandler,
  )
  .openapi(
    postV1ApiIserverAccountModelCodeOrdersRoute,
    postV1ApiIserverAccountModelCodeOrdersRouteHandler,
  )
  .openapi(postV1ApiIserverAuthSsodhInitRoute, postV1ApiIserverAuthSsodhInitRouteHandler)
  .openapi(postV1ApiIserverAuthStatusRoute, postV1ApiIserverAuthStatusRouteHandler)
  .openapi(postV1ApiIserverContractRulesRoute, postV1ApiIserverContractRulesRouteHandler)
  .openapi(postV1ApiIserverDynaccountRoute, postV1ApiIserverDynaccountRouteHandler)
  .openapi(
    postV1ApiIserverMarketdataUnsubscribeRoute,
    postV1ApiIserverMarketdataUnsubscribeRouteHandler,
  )
  .openapi(postV1ApiIserverNotificationRoute, postV1ApiIserverNotificationRouteHandler)
  .openapi(postV1ApiIserverQuestionsSuppressRoute, postV1ApiIserverQuestionsSuppressRouteHandler)
  .openapi(
    postV1ApiIserverQuestionsSuppressResetRoute,
    postV1ApiIserverQuestionsSuppressResetRouteHandler,
  )
  .openapi(postV1ApiIserverReplyReplyIdRoute, postV1ApiIserverReplyReplyIdRouteHandler)
  .openapi(postV1ApiIserverScannerRunRoute, postV1ApiIserverScannerRunRouteHandler)
  .openapi(postV1ApiIserverSecdefSearchRoute, postV1ApiIserverSecdefSearchRouteHandler)
  .openapi(getV1ApiIserverSecdefSearchRoute, getV1ApiIserverSecdefSearchRouteHandler)
  .openapi(postV1ApiIserverWatchlistRoute, postV1ApiIserverWatchlistRouteHandler)
  .openapi(getV1ApiIserverWatchlistRoute, getV1ApiIserverWatchlistRouteHandler)
  .openapi(deleteV1ApiIserverWatchlistRoute, deleteV1ApiIserverWatchlistRouteHandler)
  .openapi(postV1ApiLogoutRoute, postV1ApiLogoutRouteHandler)
  .openapi(postV1ApiOauthAccessTokenRoute, postV1ApiOauthAccessTokenRouteHandler)
  .openapi(postV1ApiOauthLiveSessionTokenRoute, postV1ApiOauthLiveSessionTokenRouteHandler)
  .openapi(postV1ApiOauthRequestTokenRoute, postV1ApiOauthRequestTokenRouteHandler)
  .openapi(postV1ApiPaAllocationRoute, postV1ApiPaAllocationRouteHandler)
  .openapi(postV1ApiPaAllperiodsRoute, postV1ApiPaAllperiodsRouteHandler)
  .openapi(postV1ApiPaPerformanceRoute, postV1ApiPaPerformanceRouteHandler)
  .openapi(postV1ApiPaTransactionsRoute, postV1ApiPaTransactionsRouteHandler)
  .openapi(
    postV1ApiPortfolioAccountIdPositionsInvalidateRoute,
    postV1ApiPortfolioAccountIdPositionsInvalidateRouteHandler,
  )
  .openapi(postV1ApiTickleRoute, postV1ApiTickleRouteHandler)
  .openapi(
    patchGwApiV1AccountsAccountIdStatusRoute,
    patchGwApiV1AccountsAccountIdStatusRouteHandler,
  )
  .openapi(getGwApiV1AccountsAccountIdStatusRoute, getGwApiV1AccountsAccountIdStatusRouteHandler)
  .openapi(
    patchGwApiV1RequestsRequestIdStatusRoute,
    patchGwApiV1RequestsRequestIdStatusRouteHandler,
  )
  .openapi(getGwApiV1RequestsRequestIdStatusRoute, getGwApiV1RequestsRequestIdStatusRouteHandler)
  .openapi(getGwApiV1AccountsLoginMessagesRoute, getGwApiV1AccountsLoginMessagesRouteHandler)
  .openapi(getGwApiV1AccountsStatusRoute, getGwApiV1AccountsStatusRouteHandler)
  .openapi(getGwApiV1AccountsAccountIdDetailsRoute, getGwApiV1AccountsAccountIdDetailsRouteHandler)
  .openapi(getGwApiV1AccountsAccountIdKycRoute, getGwApiV1AccountsAccountIdKycRouteHandler)
  .openapi(
    getGwApiV1AccountsAccountIdLoginMessagesRoute,
    getGwApiV1AccountsAccountIdLoginMessagesRouteHandler,
  )
  .openapi(
    getGwApiV1ClientInstructionsClientInstructionIdRoute,
    getGwApiV1ClientInstructionsClientInstructionIdRouteHandler,
  )
  .openapi(getGwApiV1EchoHttpsRoute, getGwApiV1EchoHttpsRouteHandler)
  .openapi(
    getGwApiV1EnumerationsComplexAssetTransferRoute,
    getGwApiV1EnumerationsComplexAssetTransferRouteHandler,
  )
  .openapi(
    getGwApiV1EnumerationsEnumerationTypeRoute,
    getGwApiV1EnumerationsEnumerationTypeRouteHandler,
  )
  .openapi(getGwApiV1FormsRoute, getGwApiV1FormsRouteHandler)
  .openapi(getGwApiV1FormsRequiredFormsRoute, getGwApiV1FormsRequiredFormsRouteHandler)
  .openapi(
    getGwApiV1InstructionSetsInstructionSetIdRoute,
    getGwApiV1InstructionSetsInstructionSetIdRouteHandler,
  )
  .openapi(
    getGwApiV1InstructionsInstructionIdRoute,
    getGwApiV1InstructionsInstructionIdRouteHandler,
  )
  .openapi(getGwApiV1ParticipatingBanksRoute, getGwApiV1ParticipatingBanksRouteHandler)
  .openapi(getGwApiV1RequestsRoute, getGwApiV1RequestsRouteHandler)
  .openapi(getGwApiV1RestrictionsAccountRoute, getGwApiV1RestrictionsAccountRouteHandler)
  .openapi(getGwApiV1RestrictionsIdsRoute, getGwApiV1RestrictionsIdsRouteHandler)
  .openapi(getGwApiV1RestrictionsListRoute, getGwApiV1RestrictionsListRouteHandler)
  .openapi(getGwApiV1RestrictionsListsIdsRoute, getGwApiV1RestrictionsListsIdsRouteHandler)
  .openapi(getGwApiV1RestrictionsRestrictionRoute, getGwApiV1RestrictionsRestrictionRouteHandler)
  .openapi(
    getGwApiV1RestrictionsRestrictionScopeRoute,
    getGwApiV1RestrictionsRestrictionScopeRouteHandler,
  )
  .openapi(getGwApiV1RestrictionsUserRoute, getGwApiV1RestrictionsUserRouteHandler)
  .openapi(getGwApiV1StatementsAvailableRoute, getGwApiV1StatementsAvailableRouteHandler)
  .openapi(getGwApiV1TaxDocumentsAvailableRoute, getGwApiV1TaxDocumentsAvailableRouteHandler)
  .openapi(
    getGwApiV1TaxVouchersActiveCountriesRoute,
    getGwApiV1TaxVouchersActiveCountriesRouteHandler,
  )
  .openapi(getGwApiV1TaxVouchersDividendsRoute, getGwApiV1TaxVouchersDividendsRouteHandler)
  .openapi(getGwApiV1TaxVouchersYearsRoute, getGwApiV1TaxVouchersYearsRouteHandler)
  .openapi(
    getGwApiV1TaxVouchersRequestIdDownloadRoute,
    getGwApiV1TaxVouchersRequestIdDownloadRouteHandler,
  )
  .openapi(
    getGwApiV1TaxVouchersRequestIdStateRoute,
    getGwApiV1TaxVouchersRequestIdStateRouteHandler,
  )
  .openapi(
    getGwApiV1TradeConfirmationsAvailableRoute,
    getGwApiV1TradeConfirmationsAvailableRouteHandler,
  )
  .openapi(
    getGwApiV1ValidationsUsernamesUsernameRoute,
    getGwApiV1ValidationsUsernamesUsernameRouteHandler,
  )
  .openapi(
    getV1ApiAceswsAccountIdSignaturesAndOwnersRoute,
    getV1ApiAceswsAccountIdSignaturesAndOwnersRouteHandler,
  )
  .openapi(getV1ApiContractTradingScheduleRoute, getV1ApiContractTradingScheduleRouteHandler)
  .openapi(getV1ApiForecastCategoryTreeRoute, getV1ApiForecastCategoryTreeRouteHandler)
  .openapi(getV1ApiForecastContractDetailsRoute, getV1ApiForecastContractDetailsRouteHandler)
  .openapi(getV1ApiForecastContractMarketRoute, getV1ApiForecastContractMarketRouteHandler)
  .openapi(getV1ApiForecastContractRulesRoute, getV1ApiForecastContractRulesRouteHandler)
  .openapi(getV1ApiForecastContractSchedulesRoute, getV1ApiForecastContractSchedulesRouteHandler)
  .openapi(getV1ApiFyiDeliveryoptionsRoute, getV1ApiFyiDeliveryoptionsRouteHandler)
  .openapi(getV1ApiFyiDisclaimerTypecodeRoute, getV1ApiFyiDisclaimerTypecodeRouteHandler)
  .openapi(putV1ApiFyiDisclaimerTypecodeRoute, putV1ApiFyiDisclaimerTypecodeRouteHandler)
  .openapi(getV1ApiFyiNotificationsRoute, getV1ApiFyiNotificationsRouteHandler)
  .openapi(getV1ApiFyiSettingsRoute, getV1ApiFyiSettingsRouteHandler)
  .openapi(getV1ApiFyiUnreadnumberRoute, getV1ApiFyiUnreadnumberRouteHandler)
  .openapi(getV1ApiIserverAccountAlertAlertIdRoute, getV1ApiIserverAccountAlertAlertIdRouteHandler)
  .openapi(
    getV1ApiIserverAccountAllocationAccountsRoute,
    getV1ApiIserverAccountAllocationAccountsRouteHandler,
  )
  .openapi(
    getV1ApiIserverAccountAllocationModelsRoute,
    getV1ApiIserverAccountAllocationModelsRouteHandler,
  )
  .openapi(getV1ApiIserverAccountMtaRoute, getV1ApiIserverAccountMtaRouteHandler)
  .openapi(
    getV1ApiIserverAccountOrderStatusOrderIdRoute,
    getV1ApiIserverAccountOrderStatusOrderIdRouteHandler,
  )
  .openapi(getV1ApiIserverAccountOrdersRoute, getV1ApiIserverAccountOrdersRouteHandler)
  .openapi(
    getV1ApiIserverAccountPnlPartitionedRoute,
    getV1ApiIserverAccountPnlPartitionedRouteHandler,
  )
  .openapi(
    getV1ApiIserverAccountSearchSearchPatternRoute,
    getV1ApiIserverAccountSearchSearchPatternRouteHandler,
  )
  .openapi(getV1ApiIserverAccountTradesRoute, getV1ApiIserverAccountTradesRouteHandler)
  .openapi(
    getV1ApiIserverAccountAccountIdAlertsRoute,
    getV1ApiIserverAccountAccountIdAlertsRouteHandler,
  )
  .openapi(
    getV1ApiIserverAccountAccountIdSummaryRoute,
    getV1ApiIserverAccountAccountIdSummaryRouteHandler,
  )
  .openapi(
    getV1ApiIserverAccountAccountIdSummaryAvailableFundsRoute,
    getV1ApiIserverAccountAccountIdSummaryAvailableFundsRouteHandler,
  )
  .openapi(
    getV1ApiIserverAccountAccountIdSummaryBalancesRoute,
    getV1ApiIserverAccountAccountIdSummaryBalancesRouteHandler,
  )
  .openapi(
    getV1ApiIserverAccountAccountIdSummaryMarginsRoute,
    getV1ApiIserverAccountAccountIdSummaryMarginsRouteHandler,
  )
  .openapi(
    getV1ApiIserverAccountAccountIdSummaryMarketValueRoute,
    getV1ApiIserverAccountAccountIdSummaryMarketValueRouteHandler,
  )
  .openapi(getV1ApiIserverAccountsRoute, getV1ApiIserverAccountsRouteHandler)
  .openapi(getV1ApiIserverContractConidAlgosRoute, getV1ApiIserverContractConidAlgosRouteHandler)
  .openapi(getV1ApiIserverContractConidInfoRoute, getV1ApiIserverContractConidInfoRouteHandler)
  .openapi(
    getV1ApiIserverContractConidInfoAndRulesRoute,
    getV1ApiIserverContractConidInfoAndRulesRouteHandler,
  )
  .openapi(getV1ApiIserverCurrencyPairsRoute, getV1ApiIserverCurrencyPairsRouteHandler)
  .openapi(getV1ApiIserverExchangerateRoute, getV1ApiIserverExchangerateRouteHandler)
  .openapi(getV1ApiIserverMarketdataHistoryRoute, getV1ApiIserverMarketdataHistoryRouteHandler)
  .openapi(getV1ApiIserverMarketdataSnapshotRoute, getV1ApiIserverMarketdataSnapshotRouteHandler)
  .openapi(
    getV1ApiIserverMarketdataUnsubscribeallRoute,
    getV1ApiIserverMarketdataUnsubscribeallRouteHandler,
  )
  .openapi(getV1ApiIserverScannerParamsRoute, getV1ApiIserverScannerParamsRouteHandler)
  .openapi(getV1ApiIserverSecdefBondFiltersRoute, getV1ApiIserverSecdefBondFiltersRouteHandler)
  .openapi(getV1ApiIserverSecdefInfoRoute, getV1ApiIserverSecdefInfoRouteHandler)
  .openapi(getV1ApiIserverSecdefStrikesRoute, getV1ApiIserverSecdefStrikesRouteHandler)
  .openapi(getV1ApiIserverWatchlistsRoute, getV1ApiIserverWatchlistsRouteHandler)
  .openapi(getV1ApiPortfolioAccountsRoute, getV1ApiPortfolioAccountsRouteHandler)
  .openapi(getV1ApiPortfolioPositionsConidRoute, getV1ApiPortfolioPositionsConidRouteHandler)
  .openapi(getV1ApiPortfolioSubaccountsRoute, getV1ApiPortfolioSubaccountsRouteHandler)
  .openapi(getV1ApiPortfolioSubaccounts2Route, getV1ApiPortfolioSubaccounts2RouteHandler)
  .openapi(
    getV1ApiPortfolioAccountIdAllocationRoute,
    getV1ApiPortfolioAccountIdAllocationRouteHandler,
  )
  .openapi(
    getV1ApiPortfolioAccountIdComboPositionsRoute,
    getV1ApiPortfolioAccountIdComboPositionsRouteHandler,
  )
  .openapi(getV1ApiPortfolioAccountIdLedgerRoute, getV1ApiPortfolioAccountIdLedgerRouteHandler)
  .openapi(getV1ApiPortfolioAccountIdMetaRoute, getV1ApiPortfolioAccountIdMetaRouteHandler)
  .openapi(
    getV1ApiPortfolioAccountIdPositionConidRoute,
    getV1ApiPortfolioAccountIdPositionConidRouteHandler,
  )
  .openapi(
    getV1ApiPortfolioAccountIdPositionsPageIdRoute,
    getV1ApiPortfolioAccountIdPositionsPageIdRouteHandler,
  )
  .openapi(getV1ApiPortfolioAccountIdSummaryRoute, getV1ApiPortfolioAccountIdSummaryRouteHandler)
  .openapi(
    getV1ApiPortfolio2AccountIdPositionsRoute,
    getV1ApiPortfolio2AccountIdPositionsRouteHandler,
  )
  .openapi(getV1ApiSsoValidateRoute, getV1ApiSsoValidateRouteHandler)
  .openapi(getV1ApiTrsrvAllConidsRoute, getV1ApiTrsrvAllConidsRouteHandler)
  .openapi(getV1ApiTrsrvFuturesRoute, getV1ApiTrsrvFuturesRouteHandler)
  .openapi(getV1ApiTrsrvSecdefRoute, getV1ApiTrsrvSecdefRouteHandler)
  .openapi(getV1ApiTrsrvSecdefScheduleRoute, getV1ApiTrsrvSecdefScheduleRouteHandler)
  .openapi(getV1ApiTrsrvStocksRoute, getV1ApiTrsrvStocksRouteHandler)
  .openapi(getV1ApiWsRoute, getV1ApiWsRouteHandler)
  .openapi(putV1ApiFyiDeliveryoptionsEmailRoute, putV1ApiFyiDeliveryoptionsEmailRouteHandler)
  .openapi(
    putV1ApiFyiNotificationsNotificationIdRoute,
    putV1ApiFyiNotificationsNotificationIdRouteHandler,
  )
  .openapi(
    deleteV1ApiFyiDeliveryoptionsDeviceIdRoute,
    deleteV1ApiFyiDeliveryoptionsDeviceIdRouteHandler,
  )
  .openapi(
    deleteV1ApiIserverAccountAccountIdAlertAlertIdRoute,
    deleteV1ApiIserverAccountAccountIdAlertAlertIdRouteHandler,
  )

export default app
