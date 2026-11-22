import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMnmRulesRuleIdRoute,
  getAccountsAccountIdMnmRulesRoute,
  getAccountsAccountIdMnmRulesRuleIdRoute,
  patchAccountsAccountIdMnmRulesRuleIdAdvertisementRoute,
  patchAccountsAccountIdMnmRulesRuleIdRoute,
  postAccountsAccountIdMnmRulesBulkRoute,
  postAccountsAccountIdMnmRulesRoute,
  putAccountsAccountIdMnmRulesBulkRoute,
  putAccountsAccountIdMnmRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicNetworkMonitoringRulesHandler = app
  .openapi(getAccountsAccountIdMnmRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMnmRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMnmRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMnmRulesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMnmRulesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMnmRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMnmRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMnmRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMnmRulesRuleIdAdvertisementRoute, (c) => {
    throw new Error('Not implemented')
  })
