import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdAutomationRulesIdRoute,
  getApiV1AccountsAccountIdAutomationRulesIdRoute,
  getApiV1AccountsAccountIdAutomationRulesRoute,
  patchApiV1AccountsAccountIdAutomationRulesIdRoute,
  postApiV1AccountsAccountIdAutomationRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automationRuleHandler = app
  .openapi(getApiV1AccountsAccountIdAutomationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdAutomationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdAutomationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdAutomationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdAutomationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
