import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1IndicatorsEmaFxTickerRoute,
  getV1IndicatorsMacdFxTickerRoute,
  getV1IndicatorsRsiFxTickerRoute,
  getV1IndicatorsSmaFxTickerRoute,
  getV2AggsGroupedLocaleGlobalMarketFxDateRoute,
  getV2AggsTickerForexTickerPrevRoute,
  getV2AggsTickerForexTickerRangeMultiplierTimespanFromToRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fxAggregatesHandler = app
  .openapi(getV1IndicatorsEmaFxTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsMacdFxTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsRsiFxTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsSmaFxTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsGroupedLocaleGlobalMarketFxDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerForexTickerPrevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerForexTickerRangeMultiplierTimespanFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
