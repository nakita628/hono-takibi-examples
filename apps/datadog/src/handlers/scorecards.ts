import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ScorecardCampaignsCampaignIdRoute,
  deleteApiV2ScorecardRulesRuleIdRoute,
  getApiV2ScorecardCampaignsCampaignIdRoute,
  getApiV2ScorecardCampaignsRoute,
  getApiV2ScorecardOutcomesRoute,
  getApiV2ScorecardRulesRoute,
  getApiV2ScorecardScorecardsRoute,
  getApiV2ScorecardScoresAggregationRoute,
  postApiV2ScorecardCampaignsRoute,
  postApiV2ScorecardOutcomesBatchRoute,
  postApiV2ScorecardOutcomesRoute,
  postApiV2ScorecardRulesRoute,
  putApiV2ScorecardCampaignsCampaignIdRoute,
  putApiV2ScorecardRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scorecardsHandler = app
  .openapi(getApiV2ScorecardCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ScorecardCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ScorecardCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ScorecardCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ScorecardCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ScorecardOutcomesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ScorecardOutcomesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ScorecardOutcomesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ScorecardRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ScorecardRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ScorecardRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ScorecardRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ScorecardScorecardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ScorecardScoresAggregationRoute, (c) => {
    throw new Error('Not implemented')
  })
