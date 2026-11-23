import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ListFederationsRoute,
  getApiV2ListMarketsRoute,
  getApiV2PerformanceStatsRoute,
  getApiV2PredictionsIdRoute,
  getApiV2PredictionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV2ListFederationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ListMarketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PerformanceStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PredictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
