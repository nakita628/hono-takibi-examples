import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2EngineeringInsightsChartsDeploymentsFrequencyRoute,
  getApiV2EngineeringInsightsChartsFlagsStaleRoute,
  getApiV2EngineeringInsightsChartsFlagsStatusRoute,
  getApiV2EngineeringInsightsChartsLeadTimeRoute,
  getApiV2EngineeringInsightsChartsReleasesFrequencyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightsChartsBetaHandler = app
  .openapi(getApiV2EngineeringInsightsChartsDeploymentsFrequencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsChartsFlagsStaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsChartsFlagsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsChartsLeadTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsChartsReleasesFrequencyRoute, (c) => {
    throw new Error('Not implemented')
  })
