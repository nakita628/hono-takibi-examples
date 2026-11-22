import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1IndicatorsEmaIndicesTickerRoute,
  getV1IndicatorsMacdIndicesTickerRoute,
  getV1IndicatorsRsiIndicesTickerRoute,
  getV1IndicatorsSmaIndicesTickerRoute,
  getV2AggsTickerIndicesTickerPrevRoute,
  getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indicesAggregatesHandler = app
  .openapi(getV1IndicatorsEmaIndicesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsMacdIndicesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsRsiIndicesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsSmaIndicesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerIndicesTickerPrevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
