import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpEmailRulesRuleIdRoute,
  getAccountsAccountIdDlpEmailAccountMappingRoute,
  getAccountsAccountIdDlpEmailRulesRoute,
  getAccountsAccountIdDlpEmailRulesRuleIdRoute,
  patchAccountsAccountIdDlpEmailRulesRoute,
  postAccountsAccountIdDlpEmailAccountMappingRoute,
  postAccountsAccountIdDlpEmailRulesRoute,
  putAccountsAccountIdDlpEmailRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpEmailHandler = app
  .openapi(getAccountsAccountIdDlpEmailAccountMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpEmailAccountMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpEmailRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDlpEmailRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpEmailRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpEmailRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpEmailRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpEmailRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
