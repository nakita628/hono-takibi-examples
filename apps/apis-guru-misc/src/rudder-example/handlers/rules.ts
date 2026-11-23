import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRulesCategoriesRuleCategoryIdRoute,
  deleteRulesRuleIdRoute,
  getRulesCategoriesRuleCategoryIdRoute,
  getRulesRoute,
  getRulesRuleIdRoute,
  getRulesTreeRoute,
  postRulesCategoriesRuleCategoryIdRoute,
  postRulesRuleIdRoute,
  putRulesCategoriesRoute,
  putRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rulesHandler = app
  .openapi(getRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRulesCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRulesCategoriesRuleCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesCategoriesRuleCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRulesCategoriesRuleCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
