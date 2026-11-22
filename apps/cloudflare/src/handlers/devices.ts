import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDevicesPolicyExcludeRoute,
  deleteAccountsAccountIdDevicesPolicyFallbackDomainsRoute,
  deleteAccountsAccountIdDevicesPolicyPolicyIdExcludeRoute,
  deleteAccountsAccountIdDevicesPolicyPolicyIdFallbackDomainsRoute,
  deleteAccountsAccountIdDevicesPolicyPolicyIdRoute,
  getAccountsAccountIdDevicesDeviceIdOverrideCodesRoute,
  getAccountsAccountIdDevicesDeviceIdRoute,
  getAccountsAccountIdDevicesPoliciesRoute,
  getAccountsAccountIdDevicesPolicyExcludeRoute,
  getAccountsAccountIdDevicesPolicyFallbackDomainsRoute,
  getAccountsAccountIdDevicesPolicyIncludeRoute,
  getAccountsAccountIdDevicesPolicyPolicyIdExcludeRoute,
  getAccountsAccountIdDevicesPolicyPolicyIdFallbackDomainsRoute,
  getAccountsAccountIdDevicesPolicyPolicyIdIncludeRoute,
  getAccountsAccountIdDevicesPolicyPolicyIdRoute,
  getAccountsAccountIdDevicesPolicyRoute,
  getAccountsAccountIdDevicesRoute,
  getZonesZoneIdDevicesPolicyCertificatesRoute,
  patchAccountsAccountIdDevicesPolicyPolicyIdRoute,
  patchAccountsAccountIdDevicesPolicyRoute,
  patchZonesZoneIdDevicesPolicyCertificatesRoute,
  postAccountsAccountIdDevicesPolicyRoute,
  postAccountsAccountIdDevicesRevokeRoute,
  postAccountsAccountIdDevicesUnrevokeRoute,
  putAccountsAccountIdDevicesPolicyExcludeRoute,
  putAccountsAccountIdDevicesPolicyFallbackDomainsRoute,
  putAccountsAccountIdDevicesPolicyIncludeRoute,
  putAccountsAccountIdDevicesPolicyPolicyIdExcludeRoute,
  putAccountsAccountIdDevicesPolicyPolicyIdFallbackDomainsRoute,
  putAccountsAccountIdDevicesPolicyPolicyIdIncludeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getAccountsAccountIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDevicesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesPolicyExcludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPolicyExcludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDevicesPolicyExcludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesPolicyFallbackDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPolicyFallbackDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDevicesPolicyFallbackDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPolicyIncludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDevicesPolicyIncludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDevicesPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesPolicyPolicyIdExcludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPolicyPolicyIdExcludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDevicesPolicyPolicyIdExcludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesPolicyPolicyIdFallbackDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPolicyPolicyIdFallbackDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDevicesPolicyPolicyIdFallbackDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPolicyPolicyIdIncludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDevicesPolicyPolicyIdIncludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesUnrevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesDeviceIdOverrideCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdDevicesPolicyCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdDevicesPolicyCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
