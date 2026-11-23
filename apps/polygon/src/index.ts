import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBenzingaV1AnalystInsightsRoute,
  getBenzingaV1AnalystsRoute,
  getBenzingaV1BullsBearsSayRoute,
  getBenzingaV1ConsensusRatingsTickerRoute,
  getBenzingaV1EarningsRoute,
  getBenzingaV1FirmsRoute,
  getBenzingaV1GuidanceRoute,
  getBenzingaV1RatingsRoute,
  getBenzingaV2NewsRoute,
  getConsumerSpendingEuV1MerchantAggregatesRoute,
  getConsumerSpendingEuV1MerchantHierarchyRoute,
  getCryptoV1ExchangesRoute,
  getEtfGlobalV1AnalyticsRoute,
  getEtfGlobalV1ConstituentsRoute,
  getEtfGlobalV1FundFlowsRoute,
  getEtfGlobalV1ProfilesRoute,
  getEtfGlobalV1TaxonomiesRoute,
  getFedV1FundingConditionsRoute,
  getFedV1InflationExpectationsRoute,
  getFedV1InflationRoute,
  getFedV1LaborMarketRoute,
  getFedV1TreasuryYieldsRoute,
  getForexV1ExchangesRoute,
  getFuturesV1AggsTickerRoute,
  getFuturesV1ContractsRoute,
  getFuturesV1ExchangesRoute,
  getFuturesV1MarketStatusRoute,
  getFuturesV1ProductsRoute,
  getFuturesV1QuotesTickerRoute,
  getFuturesV1SchedulesRoute,
  getFuturesV1SnapshotRoute,
  getFuturesV1TradesTickerRoute,
  getOptionsV1AdminMessagesRoute,
  getOptionsV1AnalyticsExpirationRoute,
  getOptionsV1AnalyticsRoute,
  getOptionsV1AnalyticsStrikeRoute,
  getOptionsV1AnalyticsUnderlyingRoute,
  getOptionsV1ExchangesRoute,
  getOptionsV1OpenInterestRoute,
  getOptionsV1OpenInterestUnderlyingRoute,
  getOptionsV1UnusualTradesRoute,
  getOptionsV3QuotesTickerRoute,
  getOptionsV3TradesTickerRoute,
  getStocksDevTradesTickerRoute,
  getStocksFilings10KVX0SectionsRoute,
  getStocksFilings10KVXSectionsRoute,
  getStocksFilings8KVXDisclosuresRoute,
  getStocksFilings8KVXTextRoute,
  getStocksFilingsVX13FRoute,
  getStocksFilingsVXForm3Route,
  getStocksFilingsVXForm4Route,
  getStocksFilingsVXForm5Route,
  getStocksFilingsVXIndexRoute,
  getStocksFilingsVXRiskFactorsRoute,
  getStocksFinancialsV1BalanceSheetsRoute,
  getStocksFinancialsV1CashFlowStatementsRoute,
  getStocksFinancialsV1IncomeStatementsRoute,
  getStocksFinancialsV1RatiosRoute,
  getStocksInsidersVXActivityRoute,
  getStocksInsidersVXHoldingsRoute,
  getStocksTaxonomiesVXDisclosuresRoute,
  getStocksTaxonomiesVXRiskFactorsRoute,
  getStocksV1DividendsRoute,
  getStocksV1ExchangesRoute,
  getStocksV1ShortInterestRoute,
  getStocksV1ShortVolumeRoute,
  getStocksV1SplitsRoute,
  getStocksVXFloatRoute,
  getTmxV1CorporateEventsRoute,
  getV1ConversionFromToRoute,
  getV1HistoricCryptoFromToDateRoute,
  getV1HistoricForexFromToDateRoute,
  getV1IndicatorsEmaCryptoTickerRoute,
  getV1IndicatorsEmaFxTickerRoute,
  getV1IndicatorsEmaIndicesTickerRoute,
  getV1IndicatorsEmaOptionsTickerRoute,
  getV1IndicatorsEmaStockTickerRoute,
  getV1IndicatorsMacdCryptoTickerRoute,
  getV1IndicatorsMacdFxTickerRoute,
  getV1IndicatorsMacdIndicesTickerRoute,
  getV1IndicatorsMacdOptionsTickerRoute,
  getV1IndicatorsMacdStockTickerRoute,
  getV1IndicatorsRsiCryptoTickerRoute,
  getV1IndicatorsRsiFxTickerRoute,
  getV1IndicatorsRsiIndicesTickerRoute,
  getV1IndicatorsRsiOptionsTickerRoute,
  getV1IndicatorsRsiStockTickerRoute,
  getV1IndicatorsSmaCryptoTickerRoute,
  getV1IndicatorsSmaFxTickerRoute,
  getV1IndicatorsSmaIndicesTickerRoute,
  getV1IndicatorsSmaOptionsTickerRoute,
  getV1IndicatorsSmaStockTickerRoute,
  getV1LastCryptoFromToRoute,
  getV1LastQuoteCurrenciesFromToRoute,
  getV1MarketstatusNowRoute,
  getV1MarketstatusUpcomingRoute,
  getV1OpenCloseCryptoFromToDateRoute,
  getV1OpenCloseIndicesTickerDateRoute,
  getV1OpenCloseOptionsTickerDateRoute,
  getV1OpenCloseStocksTickerDateRoute,
  getV1ReferenceIposRoute,
  getV1ReferenceSecFilingsFilingIdFilesFileIdRoute,
  getV1ReferenceSecFilingsFilingIdFilesRoute,
  getV1ReferenceSecFilingsFilingIdRoute,
  getV1ReferenceSecFilingsRoute,
  getV1RelatedCompaniesTickerRoute,
  getV2AggsGroupedLocaleGlobalMarketCryptoDateRoute,
  getV2AggsGroupedLocaleGlobalMarketFxDateRoute,
  getV2AggsGroupedLocaleUsMarketStocksDateRoute,
  getV2AggsTickerCryptoTickerPrevRoute,
  getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToRoute,
  getV2AggsTickerForexTickerPrevRoute,
  getV2AggsTickerForexTickerRangeMultiplierTimespanFromToRoute,
  getV2AggsTickerIndicesTickerPrevRoute,
  getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToRoute,
  getV2AggsTickerOptionsTickerPrevRoute,
  getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToRoute,
  getV2AggsTickerStocksTickerPrevRoute,
  getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToRoute,
  getV2LastNbboStocksTickerRoute,
  getV2LastTradeOptionsTickerRoute,
  getV2LastTradeStocksTickerRoute,
  getV2ReferenceNewsRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoDirectionRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookRoute,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerRoute,
  getV2SnapshotLocaleGlobalMarketsForexDirectionRoute,
  getV2SnapshotLocaleGlobalMarketsForexTickersRoute,
  getV2SnapshotLocaleGlobalMarketsForexTickersTickerRoute,
  getV2SnapshotLocaleUsMarketsStocksDirectionRoute,
  getV2SnapshotLocaleUsMarketsStocksTickersRoute,
  getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerRoute,
  getV2TicksStocksNbboTickerDateRoute,
  getV2TicksStocksTradesTickerDateRoute,
  getV3QuotesFxTickerRoute,
  getV3QuotesOptionsTickerRoute,
  getV3QuotesStockTickerRoute,
  getV3ReferenceConditionsRoute,
  getV3ReferenceDividendsRoute,
  getV3ReferenceExchangesRoute,
  getV3ReferenceOptionsContractsOptionsTickerRoute,
  getV3ReferenceOptionsContractsRoute,
  getV3ReferenceSplitsRoute,
  getV3ReferenceTickersRoute,
  getV3ReferenceTickersTickerRoute,
  getV3ReferenceTickersTypesRoute,
  getV3SnapshotIndicesRoute,
  getV3SnapshotOptionsUnderlyingAssetOptionContractRoute,
  getV3SnapshotOptionsUnderlyingAssetRoute,
  getV3SnapshotRoute,
  getV3TradesCryptoTickerRoute,
  getV3TradesOptionsTickerRoute,
  getV3TradesStockTickerRoute,
  getVXReferenceIposRoute,
  getVXReferenceTickersIdEventsRoute,
} from './routes'
import {
  getBenzingaV1AnalystInsightsRouteHandler,
  getBenzingaV1AnalystsRouteHandler,
  getBenzingaV1BullsBearsSayRouteHandler,
  getBenzingaV1ConsensusRatingsTickerRouteHandler,
  getBenzingaV1EarningsRouteHandler,
  getBenzingaV1FirmsRouteHandler,
  getBenzingaV1GuidanceRouteHandler,
  getBenzingaV1RatingsRouteHandler,
  getBenzingaV2NewsRouteHandler,
  getConsumerSpendingEuV1MerchantAggregatesRouteHandler,
  getConsumerSpendingEuV1MerchantHierarchyRouteHandler,
  getCryptoV1ExchangesRouteHandler,
  getEtfGlobalV1AnalyticsRouteHandler,
  getEtfGlobalV1ConstituentsRouteHandler,
  getEtfGlobalV1FundFlowsRouteHandler,
  getEtfGlobalV1ProfilesRouteHandler,
  getEtfGlobalV1TaxonomiesRouteHandler,
  getFedV1FundingConditionsRouteHandler,
  getFedV1InflationExpectationsRouteHandler,
  getFedV1InflationRouteHandler,
  getFedV1LaborMarketRouteHandler,
  getFedV1TreasuryYieldsRouteHandler,
  getForexV1ExchangesRouteHandler,
  getFuturesV1AggsTickerRouteHandler,
  getFuturesV1ContractsRouteHandler,
  getFuturesV1ExchangesRouteHandler,
  getFuturesV1MarketStatusRouteHandler,
  getFuturesV1ProductsRouteHandler,
  getFuturesV1QuotesTickerRouteHandler,
  getFuturesV1SchedulesRouteHandler,
  getFuturesV1SnapshotRouteHandler,
  getFuturesV1TradesTickerRouteHandler,
  getOptionsV1AdminMessagesRouteHandler,
  getOptionsV1AnalyticsExpirationRouteHandler,
  getOptionsV1AnalyticsRouteHandler,
  getOptionsV1AnalyticsStrikeRouteHandler,
  getOptionsV1AnalyticsUnderlyingRouteHandler,
  getOptionsV1ExchangesRouteHandler,
  getOptionsV1OpenInterestRouteHandler,
  getOptionsV1OpenInterestUnderlyingRouteHandler,
  getOptionsV1UnusualTradesRouteHandler,
  getOptionsV3QuotesTickerRouteHandler,
  getOptionsV3TradesTickerRouteHandler,
  getStocksDevTradesTickerRouteHandler,
  getStocksFilings10KVX0SectionsRouteHandler,
  getStocksFilings10KVXSectionsRouteHandler,
  getStocksFilings8KVXDisclosuresRouteHandler,
  getStocksFilings8KVXTextRouteHandler,
  getStocksFilingsVX13FRouteHandler,
  getStocksFilingsVXForm3RouteHandler,
  getStocksFilingsVXForm4RouteHandler,
  getStocksFilingsVXForm5RouteHandler,
  getStocksFilingsVXIndexRouteHandler,
  getStocksFilingsVXRiskFactorsRouteHandler,
  getStocksFinancialsV1BalanceSheetsRouteHandler,
  getStocksFinancialsV1CashFlowStatementsRouteHandler,
  getStocksFinancialsV1IncomeStatementsRouteHandler,
  getStocksFinancialsV1RatiosRouteHandler,
  getStocksInsidersVXActivityRouteHandler,
  getStocksInsidersVXHoldingsRouteHandler,
  getStocksTaxonomiesVXDisclosuresRouteHandler,
  getStocksTaxonomiesVXRiskFactorsRouteHandler,
  getStocksV1DividendsRouteHandler,
  getStocksV1ExchangesRouteHandler,
  getStocksV1ShortInterestRouteHandler,
  getStocksV1ShortVolumeRouteHandler,
  getStocksV1SplitsRouteHandler,
  getStocksVXFloatRouteHandler,
  getTmxV1CorporateEventsRouteHandler,
  getV1ConversionFromToRouteHandler,
  getV1HistoricCryptoFromToDateRouteHandler,
  getV1HistoricForexFromToDateRouteHandler,
  getV1IndicatorsEmaCryptoTickerRouteHandler,
  getV1IndicatorsEmaFxTickerRouteHandler,
  getV1IndicatorsEmaIndicesTickerRouteHandler,
  getV1IndicatorsEmaOptionsTickerRouteHandler,
  getV1IndicatorsEmaStockTickerRouteHandler,
  getV1IndicatorsMacdCryptoTickerRouteHandler,
  getV1IndicatorsMacdFxTickerRouteHandler,
  getV1IndicatorsMacdIndicesTickerRouteHandler,
  getV1IndicatorsMacdOptionsTickerRouteHandler,
  getV1IndicatorsMacdStockTickerRouteHandler,
  getV1IndicatorsRsiCryptoTickerRouteHandler,
  getV1IndicatorsRsiFxTickerRouteHandler,
  getV1IndicatorsRsiIndicesTickerRouteHandler,
  getV1IndicatorsRsiOptionsTickerRouteHandler,
  getV1IndicatorsRsiStockTickerRouteHandler,
  getV1IndicatorsSmaCryptoTickerRouteHandler,
  getV1IndicatorsSmaFxTickerRouteHandler,
  getV1IndicatorsSmaIndicesTickerRouteHandler,
  getV1IndicatorsSmaOptionsTickerRouteHandler,
  getV1IndicatorsSmaStockTickerRouteHandler,
  getV1LastCryptoFromToRouteHandler,
  getV1LastQuoteCurrenciesFromToRouteHandler,
  getV1MarketstatusNowRouteHandler,
  getV1MarketstatusUpcomingRouteHandler,
  getV1OpenCloseCryptoFromToDateRouteHandler,
  getV1OpenCloseIndicesTickerDateRouteHandler,
  getV1OpenCloseOptionsTickerDateRouteHandler,
  getV1OpenCloseStocksTickerDateRouteHandler,
  getV1ReferenceIposRouteHandler,
  getV1ReferenceSecFilingsFilingIdFilesFileIdRouteHandler,
  getV1ReferenceSecFilingsFilingIdFilesRouteHandler,
  getV1ReferenceSecFilingsFilingIdRouteHandler,
  getV1ReferenceSecFilingsRouteHandler,
  getV1RelatedCompaniesTickerRouteHandler,
  getV2AggsGroupedLocaleGlobalMarketCryptoDateRouteHandler,
  getV2AggsGroupedLocaleGlobalMarketFxDateRouteHandler,
  getV2AggsGroupedLocaleUsMarketStocksDateRouteHandler,
  getV2AggsTickerCryptoTickerPrevRouteHandler,
  getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToRouteHandler,
  getV2AggsTickerForexTickerPrevRouteHandler,
  getV2AggsTickerForexTickerRangeMultiplierTimespanFromToRouteHandler,
  getV2AggsTickerIndicesTickerPrevRouteHandler,
  getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToRouteHandler,
  getV2AggsTickerOptionsTickerPrevRouteHandler,
  getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToRouteHandler,
  getV2AggsTickerStocksTickerPrevRouteHandler,
  getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToRouteHandler,
  getV2LastNbboStocksTickerRouteHandler,
  getV2LastTradeOptionsTickerRouteHandler,
  getV2LastTradeStocksTickerRouteHandler,
  getV2ReferenceNewsRouteHandler,
  getV2SnapshotLocaleGlobalMarketsCryptoDirectionRouteHandler,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersRouteHandler,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookRouteHandler,
  getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerRouteHandler,
  getV2SnapshotLocaleGlobalMarketsForexDirectionRouteHandler,
  getV2SnapshotLocaleGlobalMarketsForexTickersRouteHandler,
  getV2SnapshotLocaleGlobalMarketsForexTickersTickerRouteHandler,
  getV2SnapshotLocaleUsMarketsStocksDirectionRouteHandler,
  getV2SnapshotLocaleUsMarketsStocksTickersRouteHandler,
  getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerRouteHandler,
  getV2TicksStocksNbboTickerDateRouteHandler,
  getV2TicksStocksTradesTickerDateRouteHandler,
  getV3QuotesFxTickerRouteHandler,
  getV3QuotesOptionsTickerRouteHandler,
  getV3QuotesStockTickerRouteHandler,
  getV3ReferenceConditionsRouteHandler,
  getV3ReferenceDividendsRouteHandler,
  getV3ReferenceExchangesRouteHandler,
  getV3ReferenceOptionsContractsOptionsTickerRouteHandler,
  getV3ReferenceOptionsContractsRouteHandler,
  getV3ReferenceSplitsRouteHandler,
  getV3ReferenceTickersRouteHandler,
  getV3ReferenceTickersTickerRouteHandler,
  getV3ReferenceTickersTypesRouteHandler,
  getV3SnapshotIndicesRouteHandler,
  getV3SnapshotOptionsUnderlyingAssetOptionContractRouteHandler,
  getV3SnapshotOptionsUnderlyingAssetRouteHandler,
  getV3SnapshotRouteHandler,
  getV3TradesCryptoTickerRouteHandler,
  getV3TradesOptionsTickerRouteHandler,
  getV3TradesStockTickerRouteHandler,
  getVXReferenceIposRouteHandler,
  getVXReferenceTickersIdEventsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBenzingaV1AnalystInsightsRoute, getBenzingaV1AnalystInsightsRouteHandler)
  .openapi(getBenzingaV1AnalystsRoute, getBenzingaV1AnalystsRouteHandler)
  .openapi(getBenzingaV1BullsBearsSayRoute, getBenzingaV1BullsBearsSayRouteHandler)
  .openapi(
    getBenzingaV1ConsensusRatingsTickerRoute,
    getBenzingaV1ConsensusRatingsTickerRouteHandler,
  )
  .openapi(getBenzingaV1EarningsRoute, getBenzingaV1EarningsRouteHandler)
  .openapi(getBenzingaV1FirmsRoute, getBenzingaV1FirmsRouteHandler)
  .openapi(getBenzingaV1GuidanceRoute, getBenzingaV1GuidanceRouteHandler)
  .openapi(getBenzingaV1RatingsRoute, getBenzingaV1RatingsRouteHandler)
  .openapi(getBenzingaV2NewsRoute, getBenzingaV2NewsRouteHandler)
  .openapi(
    getConsumerSpendingEuV1MerchantAggregatesRoute,
    getConsumerSpendingEuV1MerchantAggregatesRouteHandler,
  )
  .openapi(
    getConsumerSpendingEuV1MerchantHierarchyRoute,
    getConsumerSpendingEuV1MerchantHierarchyRouteHandler,
  )
  .openapi(getCryptoV1ExchangesRoute, getCryptoV1ExchangesRouteHandler)
  .openapi(getEtfGlobalV1AnalyticsRoute, getEtfGlobalV1AnalyticsRouteHandler)
  .openapi(getEtfGlobalV1ConstituentsRoute, getEtfGlobalV1ConstituentsRouteHandler)
  .openapi(getEtfGlobalV1FundFlowsRoute, getEtfGlobalV1FundFlowsRouteHandler)
  .openapi(getEtfGlobalV1ProfilesRoute, getEtfGlobalV1ProfilesRouteHandler)
  .openapi(getEtfGlobalV1TaxonomiesRoute, getEtfGlobalV1TaxonomiesRouteHandler)
  .openapi(getFedV1FundingConditionsRoute, getFedV1FundingConditionsRouteHandler)
  .openapi(getFedV1InflationRoute, getFedV1InflationRouteHandler)
  .openapi(getFedV1InflationExpectationsRoute, getFedV1InflationExpectationsRouteHandler)
  .openapi(getFedV1LaborMarketRoute, getFedV1LaborMarketRouteHandler)
  .openapi(getFedV1TreasuryYieldsRoute, getFedV1TreasuryYieldsRouteHandler)
  .openapi(getForexV1ExchangesRoute, getForexV1ExchangesRouteHandler)
  .openapi(getFuturesV1AggsTickerRoute, getFuturesV1AggsTickerRouteHandler)
  .openapi(getFuturesV1ContractsRoute, getFuturesV1ContractsRouteHandler)
  .openapi(getFuturesV1ExchangesRoute, getFuturesV1ExchangesRouteHandler)
  .openapi(getFuturesV1MarketStatusRoute, getFuturesV1MarketStatusRouteHandler)
  .openapi(getFuturesV1ProductsRoute, getFuturesV1ProductsRouteHandler)
  .openapi(getFuturesV1QuotesTickerRoute, getFuturesV1QuotesTickerRouteHandler)
  .openapi(getFuturesV1SchedulesRoute, getFuturesV1SchedulesRouteHandler)
  .openapi(getFuturesV1SnapshotRoute, getFuturesV1SnapshotRouteHandler)
  .openapi(getFuturesV1TradesTickerRoute, getFuturesV1TradesTickerRouteHandler)
  .openapi(getOptionsV1AdminMessagesRoute, getOptionsV1AdminMessagesRouteHandler)
  .openapi(getOptionsV1AnalyticsRoute, getOptionsV1AnalyticsRouteHandler)
  .openapi(getOptionsV1AnalyticsExpirationRoute, getOptionsV1AnalyticsExpirationRouteHandler)
  .openapi(getOptionsV1AnalyticsStrikeRoute, getOptionsV1AnalyticsStrikeRouteHandler)
  .openapi(getOptionsV1AnalyticsUnderlyingRoute, getOptionsV1AnalyticsUnderlyingRouteHandler)
  .openapi(getOptionsV1ExchangesRoute, getOptionsV1ExchangesRouteHandler)
  .openapi(getOptionsV1OpenInterestRoute, getOptionsV1OpenInterestRouteHandler)
  .openapi(getOptionsV1OpenInterestUnderlyingRoute, getOptionsV1OpenInterestUnderlyingRouteHandler)
  .openapi(getOptionsV1UnusualTradesRoute, getOptionsV1UnusualTradesRouteHandler)
  .openapi(getOptionsV3QuotesTickerRoute, getOptionsV3QuotesTickerRouteHandler)
  .openapi(getOptionsV3TradesTickerRoute, getOptionsV3TradesTickerRouteHandler)
  .openapi(getStocksDevTradesTickerRoute, getStocksDevTradesTickerRouteHandler)
  .openapi(getStocksFilings10KVXSectionsRoute, getStocksFilings10KVXSectionsRouteHandler)
  .openapi(getStocksFilings10KVX0SectionsRoute, getStocksFilings10KVX0SectionsRouteHandler)
  .openapi(getStocksFilings8KVXDisclosuresRoute, getStocksFilings8KVXDisclosuresRouteHandler)
  .openapi(getStocksFilings8KVXTextRoute, getStocksFilings8KVXTextRouteHandler)
  .openapi(getStocksFilingsVX13FRoute, getStocksFilingsVX13FRouteHandler)
  .openapi(getStocksFilingsVXForm3Route, getStocksFilingsVXForm3RouteHandler)
  .openapi(getStocksFilingsVXForm4Route, getStocksFilingsVXForm4RouteHandler)
  .openapi(getStocksFilingsVXForm5Route, getStocksFilingsVXForm5RouteHandler)
  .openapi(getStocksFilingsVXIndexRoute, getStocksFilingsVXIndexRouteHandler)
  .openapi(getStocksFilingsVXRiskFactorsRoute, getStocksFilingsVXRiskFactorsRouteHandler)
  .openapi(getStocksFinancialsV1BalanceSheetsRoute, getStocksFinancialsV1BalanceSheetsRouteHandler)
  .openapi(
    getStocksFinancialsV1CashFlowStatementsRoute,
    getStocksFinancialsV1CashFlowStatementsRouteHandler,
  )
  .openapi(
    getStocksFinancialsV1IncomeStatementsRoute,
    getStocksFinancialsV1IncomeStatementsRouteHandler,
  )
  .openapi(getStocksFinancialsV1RatiosRoute, getStocksFinancialsV1RatiosRouteHandler)
  .openapi(getStocksInsidersVXActivityRoute, getStocksInsidersVXActivityRouteHandler)
  .openapi(getStocksInsidersVXHoldingsRoute, getStocksInsidersVXHoldingsRouteHandler)
  .openapi(getStocksTaxonomiesVXDisclosuresRoute, getStocksTaxonomiesVXDisclosuresRouteHandler)
  .openapi(getStocksTaxonomiesVXRiskFactorsRoute, getStocksTaxonomiesVXRiskFactorsRouteHandler)
  .openapi(getStocksV1DividendsRoute, getStocksV1DividendsRouteHandler)
  .openapi(getStocksV1ExchangesRoute, getStocksV1ExchangesRouteHandler)
  .openapi(getStocksV1ShortInterestRoute, getStocksV1ShortInterestRouteHandler)
  .openapi(getStocksV1ShortVolumeRoute, getStocksV1ShortVolumeRouteHandler)
  .openapi(getStocksV1SplitsRoute, getStocksV1SplitsRouteHandler)
  .openapi(getStocksVXFloatRoute, getStocksVXFloatRouteHandler)
  .openapi(getTmxV1CorporateEventsRoute, getTmxV1CorporateEventsRouteHandler)
  .openapi(getV1ConversionFromToRoute, getV1ConversionFromToRouteHandler)
  .openapi(getV1HistoricCryptoFromToDateRoute, getV1HistoricCryptoFromToDateRouteHandler)
  .openapi(getV1HistoricForexFromToDateRoute, getV1HistoricForexFromToDateRouteHandler)
  .openapi(getV1IndicatorsEmaCryptoTickerRoute, getV1IndicatorsEmaCryptoTickerRouteHandler)
  .openapi(getV1IndicatorsEmaFxTickerRoute, getV1IndicatorsEmaFxTickerRouteHandler)
  .openapi(getV1IndicatorsEmaIndicesTickerRoute, getV1IndicatorsEmaIndicesTickerRouteHandler)
  .openapi(getV1IndicatorsEmaOptionsTickerRoute, getV1IndicatorsEmaOptionsTickerRouteHandler)
  .openapi(getV1IndicatorsEmaStockTickerRoute, getV1IndicatorsEmaStockTickerRouteHandler)
  .openapi(getV1IndicatorsMacdCryptoTickerRoute, getV1IndicatorsMacdCryptoTickerRouteHandler)
  .openapi(getV1IndicatorsMacdFxTickerRoute, getV1IndicatorsMacdFxTickerRouteHandler)
  .openapi(getV1IndicatorsMacdIndicesTickerRoute, getV1IndicatorsMacdIndicesTickerRouteHandler)
  .openapi(getV1IndicatorsMacdOptionsTickerRoute, getV1IndicatorsMacdOptionsTickerRouteHandler)
  .openapi(getV1IndicatorsMacdStockTickerRoute, getV1IndicatorsMacdStockTickerRouteHandler)
  .openapi(getV1IndicatorsRsiCryptoTickerRoute, getV1IndicatorsRsiCryptoTickerRouteHandler)
  .openapi(getV1IndicatorsRsiFxTickerRoute, getV1IndicatorsRsiFxTickerRouteHandler)
  .openapi(getV1IndicatorsRsiIndicesTickerRoute, getV1IndicatorsRsiIndicesTickerRouteHandler)
  .openapi(getV1IndicatorsRsiOptionsTickerRoute, getV1IndicatorsRsiOptionsTickerRouteHandler)
  .openapi(getV1IndicatorsRsiStockTickerRoute, getV1IndicatorsRsiStockTickerRouteHandler)
  .openapi(getV1IndicatorsSmaCryptoTickerRoute, getV1IndicatorsSmaCryptoTickerRouteHandler)
  .openapi(getV1IndicatorsSmaFxTickerRoute, getV1IndicatorsSmaFxTickerRouteHandler)
  .openapi(getV1IndicatorsSmaIndicesTickerRoute, getV1IndicatorsSmaIndicesTickerRouteHandler)
  .openapi(getV1IndicatorsSmaOptionsTickerRoute, getV1IndicatorsSmaOptionsTickerRouteHandler)
  .openapi(getV1IndicatorsSmaStockTickerRoute, getV1IndicatorsSmaStockTickerRouteHandler)
  .openapi(getV1LastCryptoFromToRoute, getV1LastCryptoFromToRouteHandler)
  .openapi(getV1LastQuoteCurrenciesFromToRoute, getV1LastQuoteCurrenciesFromToRouteHandler)
  .openapi(getV1MarketstatusNowRoute, getV1MarketstatusNowRouteHandler)
  .openapi(getV1MarketstatusUpcomingRoute, getV1MarketstatusUpcomingRouteHandler)
  .openapi(getV1OpenCloseCryptoFromToDateRoute, getV1OpenCloseCryptoFromToDateRouteHandler)
  .openapi(getV1OpenCloseIndicesTickerDateRoute, getV1OpenCloseIndicesTickerDateRouteHandler)
  .openapi(getV1OpenCloseOptionsTickerDateRoute, getV1OpenCloseOptionsTickerDateRouteHandler)
  .openapi(getV1OpenCloseStocksTickerDateRoute, getV1OpenCloseStocksTickerDateRouteHandler)
  .openapi(getV1ReferenceIposRoute, getV1ReferenceIposRouteHandler)
  .openapi(getV1ReferenceSecFilingsRoute, getV1ReferenceSecFilingsRouteHandler)
  .openapi(getV1ReferenceSecFilingsFilingIdRoute, getV1ReferenceSecFilingsFilingIdRouteHandler)
  .openapi(
    getV1ReferenceSecFilingsFilingIdFilesRoute,
    getV1ReferenceSecFilingsFilingIdFilesRouteHandler,
  )
  .openapi(
    getV1ReferenceSecFilingsFilingIdFilesFileIdRoute,
    getV1ReferenceSecFilingsFilingIdFilesFileIdRouteHandler,
  )
  .openapi(getV1RelatedCompaniesTickerRoute, getV1RelatedCompaniesTickerRouteHandler)
  .openapi(
    getV2AggsGroupedLocaleGlobalMarketCryptoDateRoute,
    getV2AggsGroupedLocaleGlobalMarketCryptoDateRouteHandler,
  )
  .openapi(
    getV2AggsGroupedLocaleGlobalMarketFxDateRoute,
    getV2AggsGroupedLocaleGlobalMarketFxDateRouteHandler,
  )
  .openapi(
    getV2AggsGroupedLocaleUsMarketStocksDateRoute,
    getV2AggsGroupedLocaleUsMarketStocksDateRouteHandler,
  )
  .openapi(getV2AggsTickerCryptoTickerPrevRoute, getV2AggsTickerCryptoTickerPrevRouteHandler)
  .openapi(
    getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToRoute,
    getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToRouteHandler,
  )
  .openapi(getV2AggsTickerForexTickerPrevRoute, getV2AggsTickerForexTickerPrevRouteHandler)
  .openapi(
    getV2AggsTickerForexTickerRangeMultiplierTimespanFromToRoute,
    getV2AggsTickerForexTickerRangeMultiplierTimespanFromToRouteHandler,
  )
  .openapi(getV2AggsTickerIndicesTickerPrevRoute, getV2AggsTickerIndicesTickerPrevRouteHandler)
  .openapi(
    getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToRoute,
    getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToRouteHandler,
  )
  .openapi(getV2AggsTickerOptionsTickerPrevRoute, getV2AggsTickerOptionsTickerPrevRouteHandler)
  .openapi(
    getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToRoute,
    getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToRouteHandler,
  )
  .openapi(getV2AggsTickerStocksTickerPrevRoute, getV2AggsTickerStocksTickerPrevRouteHandler)
  .openapi(
    getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToRoute,
    getV2AggsTickerStocksTickerRangeMultiplierTimespanFromToRouteHandler,
  )
  .openapi(getV2LastNbboStocksTickerRoute, getV2LastNbboStocksTickerRouteHandler)
  .openapi(getV2LastTradeOptionsTickerRoute, getV2LastTradeOptionsTickerRouteHandler)
  .openapi(getV2LastTradeStocksTickerRoute, getV2LastTradeStocksTickerRouteHandler)
  .openapi(getV2ReferenceNewsRoute, getV2ReferenceNewsRouteHandler)
  .openapi(
    getV2SnapshotLocaleGlobalMarketsCryptoTickersRoute,
    getV2SnapshotLocaleGlobalMarketsCryptoTickersRouteHandler,
  )
  .openapi(
    getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerRoute,
    getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerRouteHandler,
  )
  .openapi(
    getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookRoute,
    getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBookRouteHandler,
  )
  .openapi(
    getV2SnapshotLocaleGlobalMarketsCryptoDirectionRoute,
    getV2SnapshotLocaleGlobalMarketsCryptoDirectionRouteHandler,
  )
  .openapi(
    getV2SnapshotLocaleGlobalMarketsForexTickersRoute,
    getV2SnapshotLocaleGlobalMarketsForexTickersRouteHandler,
  )
  .openapi(
    getV2SnapshotLocaleGlobalMarketsForexTickersTickerRoute,
    getV2SnapshotLocaleGlobalMarketsForexTickersTickerRouteHandler,
  )
  .openapi(
    getV2SnapshotLocaleGlobalMarketsForexDirectionRoute,
    getV2SnapshotLocaleGlobalMarketsForexDirectionRouteHandler,
  )
  .openapi(
    getV2SnapshotLocaleUsMarketsStocksTickersRoute,
    getV2SnapshotLocaleUsMarketsStocksTickersRouteHandler,
  )
  .openapi(
    getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerRoute,
    getV2SnapshotLocaleUsMarketsStocksTickersStocksTickerRouteHandler,
  )
  .openapi(
    getV2SnapshotLocaleUsMarketsStocksDirectionRoute,
    getV2SnapshotLocaleUsMarketsStocksDirectionRouteHandler,
  )
  .openapi(getV2TicksStocksNbboTickerDateRoute, getV2TicksStocksNbboTickerDateRouteHandler)
  .openapi(getV2TicksStocksTradesTickerDateRoute, getV2TicksStocksTradesTickerDateRouteHandler)
  .openapi(getV3QuotesFxTickerRoute, getV3QuotesFxTickerRouteHandler)
  .openapi(getV3QuotesOptionsTickerRoute, getV3QuotesOptionsTickerRouteHandler)
  .openapi(getV3QuotesStockTickerRoute, getV3QuotesStockTickerRouteHandler)
  .openapi(getV3ReferenceConditionsRoute, getV3ReferenceConditionsRouteHandler)
  .openapi(getV3ReferenceDividendsRoute, getV3ReferenceDividendsRouteHandler)
  .openapi(getV3ReferenceExchangesRoute, getV3ReferenceExchangesRouteHandler)
  .openapi(getV3ReferenceOptionsContractsRoute, getV3ReferenceOptionsContractsRouteHandler)
  .openapi(
    getV3ReferenceOptionsContractsOptionsTickerRoute,
    getV3ReferenceOptionsContractsOptionsTickerRouteHandler,
  )
  .openapi(getV3ReferenceSplitsRoute, getV3ReferenceSplitsRouteHandler)
  .openapi(getV3ReferenceTickersRoute, getV3ReferenceTickersRouteHandler)
  .openapi(getV3ReferenceTickersTypesRoute, getV3ReferenceTickersTypesRouteHandler)
  .openapi(getV3ReferenceTickersTickerRoute, getV3ReferenceTickersTickerRouteHandler)
  .openapi(getV3SnapshotRoute, getV3SnapshotRouteHandler)
  .openapi(getV3SnapshotIndicesRoute, getV3SnapshotIndicesRouteHandler)
  .openapi(
    getV3SnapshotOptionsUnderlyingAssetRoute,
    getV3SnapshotOptionsUnderlyingAssetRouteHandler,
  )
  .openapi(
    getV3SnapshotOptionsUnderlyingAssetOptionContractRoute,
    getV3SnapshotOptionsUnderlyingAssetOptionContractRouteHandler,
  )
  .openapi(getV3TradesCryptoTickerRoute, getV3TradesCryptoTickerRouteHandler)
  .openapi(getV3TradesOptionsTickerRoute, getV3TradesOptionsTickerRouteHandler)
  .openapi(getV3TradesStockTickerRoute, getV3TradesStockTickerRouteHandler)
  .openapi(getVXReferenceIposRoute, getVXReferenceIposRouteHandler)
  .openapi(getVXReferenceTickersIdEventsRoute, getVXReferenceTickersIdEventsRouteHandler)

export default app
