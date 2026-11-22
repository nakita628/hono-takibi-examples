import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute,
  deleteAccountsAccountIdAccessAppsAppIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsAppIdUserPolicyChecksRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsRoute,
  getAccountsAccountIdAccessAppsAppIdRoute,
  getAccountsAccountIdAccessAppsAppIdUserPolicyChecksRoute,
  getAccountsAccountIdAccessAppsRoute,
  patchAccountOrZoneAccountOrZoneIdAccessAppsAppIdSettingsRoute,
  patchAccountsAccountIdAccessAppsAppIdSettingsRoute,
  postAccountOrZoneAccountOrZoneIdAccessAppsAppIdRevokeTokensRoute,
  postAccountOrZoneAccountOrZoneIdAccessAppsRoute,
  postAccountsAccountIdAccessAppsAppIdRevokeTokensRoute,
  postAccountsAccountIdAccessAppsRoute,
  putAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute,
  putAccountOrZoneAccountOrZoneIdAccessAppsAppIdSettingsRoute,
  putAccountsAccountIdAccessAppsAppIdRoute,
  putAccountsAccountIdAccessAppsAppIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessApplicationsHandler = app
  .openapi(getAccountsAccountIdAccessAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessAppsAppIdRevokeTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAccessAppsAppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessAppsAppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessAppsAppIdUserPolicyChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdAccessAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdAccessAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdAccessAppsAppIdRevokeTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountOrZoneAccountOrZoneIdAccessAppsAppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdAccessAppsAppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessAppsAppIdUserPolicyChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
