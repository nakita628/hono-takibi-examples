import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1IndicatorsEmaCryptoTickerRoute,
  getV1IndicatorsMacdCryptoTickerRoute,
  getV1IndicatorsRsiCryptoTickerRoute,
  getV1IndicatorsSmaCryptoTickerRoute,
  getV2AggsGroupedLocaleGlobalMarketCryptoDateRoute,
  getV2AggsTickerCryptoTickerPrevRoute,
  getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cryptoAggregatesHandler = app
  .openapi(getV1IndicatorsEmaCryptoTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsMacdCryptoTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsRsiCryptoTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsSmaCryptoTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsGroupedLocaleGlobalMarketCryptoDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerCryptoTickerPrevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
