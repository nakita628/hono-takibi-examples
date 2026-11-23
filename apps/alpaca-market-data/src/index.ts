import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1EventsCorporateActionsRoute,
  getV1beta1FixedIncomeLatestPricesRoute,
  getV1beta1FixedIncomeLatestQuotesRoute,
  getV1beta1LogosSymbolRoute,
  getV1beta1NewsRoute,
  getV1beta1OptionsBarsRoute,
  getV1beta1OptionsMetaConditionsTicktypeRoute,
  getV1beta1OptionsMetaExchangesRoute,
  getV1beta1OptionsQuotesLatestRoute,
  getV1beta1OptionsSnapshotsRoute,
  getV1beta1OptionsSnapshotsUnderlyingSymbolRoute,
  getV1beta1OptionsTradesLatestRoute,
  getV1beta1OptionsTradesRoute,
  getV1beta1ScreenerMarketTypeMoversRoute,
  getV1beta1ScreenerStocksMostActivesRoute,
  getV1beta3CryptoLocBarsRoute,
  getV1beta3CryptoLocLatestBarsRoute,
  getV1beta3CryptoLocLatestOrderbooksRoute,
  getV1beta3CryptoLocLatestQuotesRoute,
  getV1beta3CryptoLocLatestTradesRoute,
  getV1beta3CryptoLocQuotesRoute,
  getV1beta3CryptoLocSnapshotsRoute,
  getV1beta3CryptoLocTradesRoute,
  getV1CorporateActionsRoute,
  getV2StocksAuctionsRoute,
  getV2StocksBarsLatestRoute,
  getV2StocksBarsRoute,
  getV2StocksMetaConditionsTicktypeRoute,
  getV2StocksMetaExchangesRoute,
  getV2StocksQuotesLatestRoute,
  getV2StocksQuotesRoute,
  getV2StocksSnapshotsRoute,
  getV2StocksSymbolAuctionsRoute,
  getV2StocksSymbolBarsLatestRoute,
  getV2StocksSymbolBarsRoute,
  getV2StocksSymbolQuotesLatestRoute,
  getV2StocksSymbolQuotesRoute,
  getV2StocksSymbolSnapshotRoute,
  getV2StocksSymbolTradesLatestRoute,
  getV2StocksSymbolTradesRoute,
  getV2StocksTradesLatestRoute,
  getV2StocksTradesRoute,
  getV3StocksFeedBarsRoute,
  getV3StocksFeedLatestBarsRoute,
  getV3StocksFeedLatestQuotesRoute,
  getV3StocksFeedLatestTradesRoute,
  getV3StocksFeedQuotesRoute,
  getV3StocksFeedSnapshotsRoute,
  getV3StocksFeedTradesRoute,
} from './routes'
import {
  getV1beta1EventsCorporateActionsRouteHandler,
  getV1beta1FixedIncomeLatestPricesRouteHandler,
  getV1beta1FixedIncomeLatestQuotesRouteHandler,
  getV1beta1LogosSymbolRouteHandler,
  getV1beta1NewsRouteHandler,
  getV1beta1OptionsBarsRouteHandler,
  getV1beta1OptionsMetaConditionsTicktypeRouteHandler,
  getV1beta1OptionsMetaExchangesRouteHandler,
  getV1beta1OptionsQuotesLatestRouteHandler,
  getV1beta1OptionsSnapshotsRouteHandler,
  getV1beta1OptionsSnapshotsUnderlyingSymbolRouteHandler,
  getV1beta1OptionsTradesLatestRouteHandler,
  getV1beta1OptionsTradesRouteHandler,
  getV1beta1ScreenerMarketTypeMoversRouteHandler,
  getV1beta1ScreenerStocksMostActivesRouteHandler,
  getV1beta3CryptoLocBarsRouteHandler,
  getV1beta3CryptoLocLatestBarsRouteHandler,
  getV1beta3CryptoLocLatestOrderbooksRouteHandler,
  getV1beta3CryptoLocLatestQuotesRouteHandler,
  getV1beta3CryptoLocLatestTradesRouteHandler,
  getV1beta3CryptoLocQuotesRouteHandler,
  getV1beta3CryptoLocSnapshotsRouteHandler,
  getV1beta3CryptoLocTradesRouteHandler,
  getV1CorporateActionsRouteHandler,
  getV2StocksAuctionsRouteHandler,
  getV2StocksBarsLatestRouteHandler,
  getV2StocksBarsRouteHandler,
  getV2StocksMetaConditionsTicktypeRouteHandler,
  getV2StocksMetaExchangesRouteHandler,
  getV2StocksQuotesLatestRouteHandler,
  getV2StocksQuotesRouteHandler,
  getV2StocksSnapshotsRouteHandler,
  getV2StocksSymbolAuctionsRouteHandler,
  getV2StocksSymbolBarsLatestRouteHandler,
  getV2StocksSymbolBarsRouteHandler,
  getV2StocksSymbolQuotesLatestRouteHandler,
  getV2StocksSymbolQuotesRouteHandler,
  getV2StocksSymbolSnapshotRouteHandler,
  getV2StocksSymbolTradesLatestRouteHandler,
  getV2StocksSymbolTradesRouteHandler,
  getV2StocksTradesLatestRouteHandler,
  getV2StocksTradesRouteHandler,
  getV3StocksFeedBarsRouteHandler,
  getV3StocksFeedLatestBarsRouteHandler,
  getV3StocksFeedLatestQuotesRouteHandler,
  getV3StocksFeedLatestTradesRouteHandler,
  getV3StocksFeedQuotesRouteHandler,
  getV3StocksFeedSnapshotsRouteHandler,
  getV3StocksFeedTradesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1EventsCorporateActionsRoute, getV1beta1EventsCorporateActionsRouteHandler)
  .openapi(getV1beta1FixedIncomeLatestPricesRoute, getV1beta1FixedIncomeLatestPricesRouteHandler)
  .openapi(getV1beta1FixedIncomeLatestQuotesRoute, getV1beta1FixedIncomeLatestQuotesRouteHandler)
  .openapi(getV1beta1LogosSymbolRoute, getV1beta1LogosSymbolRouteHandler)
  .openapi(getV1beta1NewsRoute, getV1beta1NewsRouteHandler)
  .openapi(getV1beta1OptionsBarsRoute, getV1beta1OptionsBarsRouteHandler)
  .openapi(
    getV1beta1OptionsMetaConditionsTicktypeRoute,
    getV1beta1OptionsMetaConditionsTicktypeRouteHandler,
  )
  .openapi(getV1beta1OptionsMetaExchangesRoute, getV1beta1OptionsMetaExchangesRouteHandler)
  .openapi(getV1beta1OptionsQuotesLatestRoute, getV1beta1OptionsQuotesLatestRouteHandler)
  .openapi(getV1beta1OptionsSnapshotsRoute, getV1beta1OptionsSnapshotsRouteHandler)
  .openapi(
    getV1beta1OptionsSnapshotsUnderlyingSymbolRoute,
    getV1beta1OptionsSnapshotsUnderlyingSymbolRouteHandler,
  )
  .openapi(getV1beta1OptionsTradesRoute, getV1beta1OptionsTradesRouteHandler)
  .openapi(getV1beta1OptionsTradesLatestRoute, getV1beta1OptionsTradesLatestRouteHandler)
  .openapi(getV1beta1ScreenerMarketTypeMoversRoute, getV1beta1ScreenerMarketTypeMoversRouteHandler)
  .openapi(
    getV1beta1ScreenerStocksMostActivesRoute,
    getV1beta1ScreenerStocksMostActivesRouteHandler,
  )
  .openapi(getV1beta3CryptoLocBarsRoute, getV1beta3CryptoLocBarsRouteHandler)
  .openapi(getV1beta3CryptoLocLatestBarsRoute, getV1beta3CryptoLocLatestBarsRouteHandler)
  .openapi(
    getV1beta3CryptoLocLatestOrderbooksRoute,
    getV1beta3CryptoLocLatestOrderbooksRouteHandler,
  )
  .openapi(getV1beta3CryptoLocLatestQuotesRoute, getV1beta3CryptoLocLatestQuotesRouteHandler)
  .openapi(getV1beta3CryptoLocLatestTradesRoute, getV1beta3CryptoLocLatestTradesRouteHandler)
  .openapi(getV1beta3CryptoLocQuotesRoute, getV1beta3CryptoLocQuotesRouteHandler)
  .openapi(getV1beta3CryptoLocSnapshotsRoute, getV1beta3CryptoLocSnapshotsRouteHandler)
  .openapi(getV1beta3CryptoLocTradesRoute, getV1beta3CryptoLocTradesRouteHandler)
  .openapi(getV1CorporateActionsRoute, getV1CorporateActionsRouteHandler)
  .openapi(getV2StocksSymbolAuctionsRoute, getV2StocksSymbolAuctionsRouteHandler)
  .openapi(getV2StocksSymbolBarsRoute, getV2StocksSymbolBarsRouteHandler)
  .openapi(getV2StocksSymbolBarsLatestRoute, getV2StocksSymbolBarsLatestRouteHandler)
  .openapi(getV2StocksSymbolQuotesRoute, getV2StocksSymbolQuotesRouteHandler)
  .openapi(getV2StocksSymbolQuotesLatestRoute, getV2StocksSymbolQuotesLatestRouteHandler)
  .openapi(getV2StocksSymbolSnapshotRoute, getV2StocksSymbolSnapshotRouteHandler)
  .openapi(getV2StocksSymbolTradesRoute, getV2StocksSymbolTradesRouteHandler)
  .openapi(getV2StocksSymbolTradesLatestRoute, getV2StocksSymbolTradesLatestRouteHandler)
  .openapi(getV2StocksAuctionsRoute, getV2StocksAuctionsRouteHandler)
  .openapi(getV2StocksBarsRoute, getV2StocksBarsRouteHandler)
  .openapi(getV2StocksBarsLatestRoute, getV2StocksBarsLatestRouteHandler)
  .openapi(getV2StocksMetaConditionsTicktypeRoute, getV2StocksMetaConditionsTicktypeRouteHandler)
  .openapi(getV2StocksMetaExchangesRoute, getV2StocksMetaExchangesRouteHandler)
  .openapi(getV2StocksQuotesRoute, getV2StocksQuotesRouteHandler)
  .openapi(getV2StocksQuotesLatestRoute, getV2StocksQuotesLatestRouteHandler)
  .openapi(getV2StocksSnapshotsRoute, getV2StocksSnapshotsRouteHandler)
  .openapi(getV2StocksTradesRoute, getV2StocksTradesRouteHandler)
  .openapi(getV2StocksTradesLatestRoute, getV2StocksTradesLatestRouteHandler)
  .openapi(getV3StocksFeedBarsRoute, getV3StocksFeedBarsRouteHandler)
  .openapi(getV3StocksFeedLatestBarsRoute, getV3StocksFeedLatestBarsRouteHandler)
  .openapi(getV3StocksFeedLatestQuotesRoute, getV3StocksFeedLatestQuotesRouteHandler)
  .openapi(getV3StocksFeedLatestTradesRoute, getV3StocksFeedLatestTradesRouteHandler)
  .openapi(getV3StocksFeedQuotesRoute, getV3StocksFeedQuotesRouteHandler)
  .openapi(getV3StocksFeedSnapshotsRoute, getV3StocksFeedSnapshotsRouteHandler)
  .openapi(getV3StocksFeedTradesRoute, getV3StocksFeedTradesRouteHandler)

export default app
