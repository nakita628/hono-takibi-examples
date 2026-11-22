import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserAnalyticsStoreIdRulesRuleIdRoute,
  getV2UserAnalyticsStoreIdRulesExecutionsRoute,
  getV2UserAnalyticsStoreIdRulesRoute,
  getV2UserAnalyticsStoreIdRulesRuleIdRoute,
  patchV2UserAnalyticsStoreIdRulesRuleIdRoute,
  postV2UserAnalyticsStoreIdRulesRoute,
  postV2UserAnalyticsStoreIdRulesRuleIdDisableRoute,
  postV2UserAnalyticsStoreIdRulesRuleIdEnableRoute,
  postV2UserAnalyticsStoreIdRulesRuleIdMovedownRoute,
  postV2UserAnalyticsStoreIdRulesRuleIdMoveupRoute,
  postV2UserAnalyticsStoreIdRulesRuleIdRunRoute,
  postV2UserAnalyticsStoreIdRulesRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analytics__RulesHandler = app
  .openapi(getV2UserAnalyticsStoreIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdRulesExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserAnalyticsStoreIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2UserAnalyticsStoreIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRuleIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRuleIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRuleIdMovedownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRuleIdMoveupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRuleIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
