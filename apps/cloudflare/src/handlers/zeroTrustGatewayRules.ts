import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdGatewayRulesRuleIdRoute,
  getAccountsAccountIdGatewayRulesRoute,
  getAccountsAccountIdGatewayRulesRuleIdRoute,
  getAccountsAccountIdGatewayRulesTenantRoute,
  patchAccountsAccountIdGatewayRulesRoute,
  patchAccountsAccountIdGatewayRulesRuleIdRoute,
  postAccountsAccountIdGatewayRulesRoute,
  postAccountsAccountIdGatewayRulesRuleIdResetExpirationRoute,
  putAccountsAccountIdGatewayRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustGatewayRulesHandler = app
  .openapi(getAccountsAccountIdGatewayRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdGatewayRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayRulesTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdGatewayRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdGatewayRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdGatewayRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayRulesRuleIdResetExpirationRoute, (c) => {
    throw new Error('Not implemented')
  })
