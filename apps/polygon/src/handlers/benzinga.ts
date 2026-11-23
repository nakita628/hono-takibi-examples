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
} from '../routes'

const app = new OpenAPIHono()

export const benzingaHandler = app
  .openapi(getBenzingaV1AnalystInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBenzingaV1AnalystsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBenzingaV1BullsBearsSayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBenzingaV1ConsensusRatingsTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBenzingaV1EarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBenzingaV1FirmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBenzingaV1GuidanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBenzingaV1RatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBenzingaV2NewsRoute, (c) => {
    throw new Error('Not implemented')
  })
