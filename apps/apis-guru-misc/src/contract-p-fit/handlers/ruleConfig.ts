import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRuleConfigScopeRoute,
  getRuleConfigRoute,
  getRuleConfigScopeRoute,
  patchRuleConfigScopeRoute,
  postRuleConfigRuleEntityDocumentIdRoute,
  postRuleConfigRuleEntityIndexRoute,
  postRuleConfigWhereToSearchDocumentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ruleConfigHandler = app
  .openapi(getRuleConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRuleConfigRuleEntityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRuleConfigRuleEntityDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRuleConfigWhereToSearchDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRuleConfigScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRuleConfigScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRuleConfigScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
