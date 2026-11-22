import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1IndicatorsEmaOptionsTickerRoute,
  getV1IndicatorsMacdOptionsTickerRoute,
  getV1IndicatorsRsiOptionsTickerRoute,
  getV1IndicatorsSmaOptionsTickerRoute,
  getV2AggsTickerOptionsTickerPrevRoute,
  getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToRoute,
} from '../routes'

const app = new OpenAPIHono()

export const optionsAggregatesHandler = app
  .openapi(getV1IndicatorsEmaOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsMacdOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsRsiOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicatorsSmaOptionsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerOptionsTickerPrevRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromToRoute, (c) => {
    throw new Error('Not implemented')
  })
