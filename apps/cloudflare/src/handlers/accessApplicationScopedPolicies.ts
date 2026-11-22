import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  deleteAccountsAccountIdAccessAppsAppIdPoliciesPolicyIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesRoute,
  getAccountsAccountIdAccessAppsAppIdPoliciesPolicyIdRoute,
  getAccountsAccountIdAccessAppsAppIdPoliciesRoute,
  postAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesRoute,
  postAccountsAccountIdAccessAppsAppIdPoliciesRoute,
  putAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  putAccountsAccountIdAccessAppsAppIdPoliciesPolicyIdMakeReusableRoute,
  putAccountsAccountIdAccessAppsAppIdPoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessApplicationScopedPoliciesHandler = app
  .openapi(getAccountsAccountIdAccessAppsAppIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessAppsAppIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessAppsAppIdPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessAppsAppIdPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessAppsAppIdPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessAppsAppIdPoliciesPolicyIdMakeReusableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdAccessAppsAppIdPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
