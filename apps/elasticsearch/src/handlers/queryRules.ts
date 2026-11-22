import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueryRulesRulesetIdRoute,
  deleteQueryRulesRulesetIdRuleRuleIdRoute,
  getQueryRulesRoute,
  getQueryRulesRulesetIdRoute,
  getQueryRulesRulesetIdRuleRuleIdRoute,
  postQueryRulesRulesetIdTestRoute,
  putQueryRulesRulesetIdRoute,
  putQueryRulesRulesetIdRuleRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryRulesHandler = app
  .openapi(getQueryRulesRulesetIdRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQueryRulesRulesetIdRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueryRulesRulesetIdRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryRulesRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQueryRulesRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueryRulesRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryRulesRulesetIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
