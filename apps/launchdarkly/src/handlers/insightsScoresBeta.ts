import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute,
  getApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute,
  getApiV2EngineeringInsightsInsightsGroupsRoute,
  getApiV2EngineeringInsightsInsightsScoresRoute,
  patchApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute,
  postApiV2EngineeringInsightsInsightsGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightsScoresBetaHandler = app
  .openapi(postApiV2EngineeringInsightsInsightsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsInsightsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2EngineeringInsightsInsightsGroupsInsightGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsInsightsScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
