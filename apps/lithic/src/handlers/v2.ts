import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2AuthRulesAuthRuleTokenRoute,
  getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenRoute,
  getV2AuthRulesAuthRuleTokenBacktestsRoute,
  getV2AuthRulesAuthRuleTokenFeaturesRoute,
  getV2AuthRulesAuthRuleTokenReportRoute,
  getV2AuthRulesAuthRuleTokenRoute,
  getV2AuthRulesAuthRuleTokenVersionsRoute,
  getV2AuthRulesResultsRoute,
  getV2AuthRulesRoute,
  getV2DisputesDisputeTokenRoute,
  getV2DisputesRoute,
  patchV2AuthRulesAuthRuleTokenEntitiesRoute,
  patchV2AuthRulesAuthRuleTokenRoute,
  postV2AuthRulesAuthRuleTokenBacktestsRoute,
  postV2AuthRulesAuthRuleTokenDraftRoute,
  postV2AuthRulesAuthRuleTokenPromoteRoute,
  postV2AuthRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2AuthRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AuthRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AuthRulesAuthRuleTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AuthRulesAuthRuleTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AuthRulesAuthRuleTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2AuthRulesAuthRuleTokenEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AuthRulesAuthRuleTokenDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AuthRulesAuthRuleTokenFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AuthRulesAuthRuleTokenPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AuthRulesAuthRuleTokenVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AuthRulesAuthRuleTokenReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AuthRulesAuthRuleTokenBacktestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AuthRulesAuthRuleTokenBacktestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AuthRulesResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisputesDisputeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
