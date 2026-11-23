import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1ConversionFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HistoricCryptoFromToDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HistoricForexFromToDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsEmaCryptoTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsEmaFxTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsEmaIndicesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsEmaOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsEmaStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsMacdCryptoTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsMacdFxTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsMacdIndicesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsMacdOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsMacdStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsRsiCryptoTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsRsiFxTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsRsiIndicesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsRsiOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsRsiStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsSmaCryptoTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsSmaFxTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsSmaIndicesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsSmaOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsSmaStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LastCryptoFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LastQuoteCurrenciesFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MarketstatusNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MarketstatusUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OpenCloseCryptoFromToDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OpenCloseIndicesTickerDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OpenCloseOptionsTickerDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OpenCloseStocksTickerDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReferenceIposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReferenceSecFilingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReferenceSecFilingsFilingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReferenceSecFilingsFilingIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReferenceSecFilingsFilingIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RelatedCompaniesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
