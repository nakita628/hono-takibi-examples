import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecommendationsEventOrchestrationsServicesServiceIdAcceptedRulesRuleIdRoute,
  getRecommendationsEventOrchestrationsRulesRoute,
  postRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdAcceptRoute,
  postRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdDismissRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recommendationsHandler = app
  .openapi(getRecommendationsEventOrchestrationsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdDismissRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdAcceptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRecommendationsEventOrchestrationsServicesServiceIdAcceptedRulesRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
