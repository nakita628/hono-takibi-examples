import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CorrelationRoute,
  getV1IndicesRoute,
  getV1InvestorGradesRoute,
  getV1MarketIndicatorRoute,
  getV1PricePredictionRoute,
  getV1PriceRoute,
  getV1QuantmetricsTier1Route,
  getV1QuantmetricsTier2Route,
  getV1ResistanceSupportRoute,
  getV1ScenarioAnalysisRoute,
  getV1SentimentsRoute,
  getV1TokensRoute,
  getV1TraderGradesRoute,
  getV1TradingIndicatorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1CorrelationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvestorGradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MarketIndicatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PricePredictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuantmetricsTier1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuantmetricsTier2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResistanceSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ScenarioAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SentimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TraderGradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingIndicatorRoute, (c) => {
    throw new Error('Not implemented')
  })
