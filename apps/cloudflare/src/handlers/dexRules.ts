import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDexRulesRuleIdRoute,
  getAccountsAccountIdDexRulesRoute,
  getAccountsAccountIdDexRulesRuleIdRoute,
  patchAccountsAccountIdDexRulesRuleIdRoute,
  postAccountsAccountIdDexRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dexRulesHandler = app
  .openapi(getAccountsAccountIdDexRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDexRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDexRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDexRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
