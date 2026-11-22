import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessOrganizationsTrustSettingsRoute,
  getAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute,
  getAccountsAccountIdAccessOrganizationsDohRoute,
  getAccountsAccountIdAccessOrganizationsRoute,
  getAccountsAccountIdAccessOrganizationsTrustSettingsRoute,
  patchAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute,
  patchAccountsAccountIdAccessOrganizationsRoute,
  patchAccountsAccountIdAccessOrganizationsTrustSettingsRoute,
  postAccountOrZoneAccountOrZoneIdAccessOrganizationsRevokeUserRoute,
  postAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute,
  postAccountsAccountIdAccessOrganizationsRevokeUserRoute,
  postAccountsAccountIdAccessOrganizationsRoute,
  putAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute,
  putAccountsAccountIdAccessOrganizationsDohRoute,
  putAccountsAccountIdAccessOrganizationsRoute,
  putAccountsAccountIdAccessOrganizationsTrustSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustOrganizationHandler = app
  .openapi(getAccountsAccountIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessOrganizationsDohRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessOrganizationsDohRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessOrganizationsRevokeUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessOrganizationsTrustSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessOrganizationsTrustSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAccessOrganizationsTrustSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessOrganizationsTrustSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdAccessOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdAccessOrganizationsRevokeUserRoute, (c) => {
    throw new Error('Not implemented')
  })
