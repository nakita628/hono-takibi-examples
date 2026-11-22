import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2GovernanceTagRulesRuleIdRoute,
  getApiV2GovernanceTagRulesRoute,
  getApiV2GovernanceTagRulesRuleIdRoute,
  getApiV2GovernanceTagRulesRuleIdScoreRoute,
  patchApiV2GovernanceTagRulesRuleIdRoute,
  postApiV2GovernanceTagRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagRulesHandler = app
  .openapi(getApiV2GovernanceTagRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GovernanceTagRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GovernanceTagRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GovernanceTagRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2GovernanceTagRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GovernanceTagRulesRuleIdScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
