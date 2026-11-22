import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdEmailSecuritySettingsAllowPoliciesPolicyIdRoute,
  deleteAccountsAccountIdEmailSecuritySettingsBlockSendersPatternIdRoute,
  deleteAccountsAccountIdEmailSecuritySettingsContentPoliciesPolicyIdRoute,
  deleteAccountsAccountIdEmailSecuritySettingsDomainsDomainIdRoute,
  deleteAccountsAccountIdEmailSecuritySettingsDomainsRoute,
  deleteAccountsAccountIdEmailSecuritySettingsImpersonationRegistryImpersonationRegistryIdRoute,
  deleteAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsSendingDomainRestrictionIdRoute,
  deleteAccountsAccountIdEmailSecuritySettingsTrustedDomainsTrustedDomainIdRoute,
  deleteAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsPatternIdRoute,
  getAccountsAccountIdEmailSecuritySettingsAllowPoliciesPolicyIdRoute,
  getAccountsAccountIdEmailSecuritySettingsAllowPoliciesRoute,
  getAccountsAccountIdEmailSecuritySettingsBlockSendersPatternIdRoute,
  getAccountsAccountIdEmailSecuritySettingsBlockSendersRoute,
  getAccountsAccountIdEmailSecuritySettingsContentPoliciesPolicyIdRoute,
  getAccountsAccountIdEmailSecuritySettingsContentPoliciesRoute,
  getAccountsAccountIdEmailSecuritySettingsDomainsDomainIdRoute,
  getAccountsAccountIdEmailSecuritySettingsDomainsDomainIdVerificationRoute,
  getAccountsAccountIdEmailSecuritySettingsDomainsRoute,
  getAccountsAccountIdEmailSecuritySettingsImpersonationRegistryImpersonationRegistryIdRoute,
  getAccountsAccountIdEmailSecuritySettingsImpersonationRegistryRoute,
  getAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsRoute,
  getAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsSendingDomainRestrictionIdRoute,
  getAccountsAccountIdEmailSecuritySettingsTrustedDomainsRoute,
  getAccountsAccountIdEmailSecuritySettingsTrustedDomainsTrustedDomainIdRoute,
  getAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsPatternIdRoute,
  getAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsRoute,
  patchAccountsAccountIdEmailSecuritySettingsAllowPoliciesPolicyIdRoute,
  patchAccountsAccountIdEmailSecuritySettingsBlockSendersPatternIdRoute,
  patchAccountsAccountIdEmailSecuritySettingsContentPoliciesPolicyIdRoute,
  patchAccountsAccountIdEmailSecuritySettingsDomainsDomainIdRoute,
  patchAccountsAccountIdEmailSecuritySettingsImpersonationRegistryImpersonationRegistryIdRoute,
  patchAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsSendingDomainRestrictionIdRoute,
  patchAccountsAccountIdEmailSecuritySettingsTrustedDomainsTrustedDomainIdRoute,
  patchAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsPatternIdRoute,
  postAccountsAccountIdEmailSecuritySettingsAllowPoliciesBatchRoute,
  postAccountsAccountIdEmailSecuritySettingsAllowPoliciesRoute,
  postAccountsAccountIdEmailSecuritySettingsBlockSendersBatchRoute,
  postAccountsAccountIdEmailSecuritySettingsBlockSendersRoute,
  postAccountsAccountIdEmailSecuritySettingsContentPoliciesBatchRoute,
  postAccountsAccountIdEmailSecuritySettingsContentPoliciesRoute,
  postAccountsAccountIdEmailSecuritySettingsDomainsBatchRoute,
  postAccountsAccountIdEmailSecuritySettingsDomainsRoute,
  postAccountsAccountIdEmailSecuritySettingsImpersonationRegistryRoute,
  postAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsBatchRoute,
  postAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsRoute,
  postAccountsAccountIdEmailSecuritySettingsTrustedDomainsBatchRoute,
  postAccountsAccountIdEmailSecuritySettingsTrustedDomainsRoute,
  postAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsBatchRoute,
  postAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsRoute,
  putAccountsAccountIdEmailSecuritySettingsAllowPoliciesPolicyIdRoute,
  putAccountsAccountIdEmailSecuritySettingsBlockSendersPatternIdRoute,
  putAccountsAccountIdEmailSecuritySettingsDomainsDomainIdRoute,
  putAccountsAccountIdEmailSecuritySettingsTrustedDomainsTrustedDomainIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailSecuritySettingsHandler = app
  .openapi(getAccountsAccountIdEmailSecuritySettingsAllowPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsAllowPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsAllowPoliciesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEmailSecuritySettingsAllowPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsAllowPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdEmailSecuritySettingsAllowPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdEmailSecuritySettingsAllowPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsBlockSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsBlockSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsBlockSendersBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEmailSecuritySettingsBlockSendersPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsBlockSendersPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdEmailSecuritySettingsBlockSendersPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdEmailSecuritySettingsBlockSendersPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsContentPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsContentPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsContentPoliciesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEmailSecuritySettingsContentPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsContentPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdEmailSecuritySettingsContentPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEmailSecuritySettingsDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsDomainsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEmailSecuritySettingsDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdEmailSecuritySettingsDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdEmailSecuritySettingsDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsDomainsDomainIdVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsImpersonationRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsImpersonationRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdEmailSecuritySettingsImpersonationRegistryImpersonationRegistryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdEmailSecuritySettingsImpersonationRegistryImpersonationRegistryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAccountsAccountIdEmailSecuritySettingsImpersonationRegistryImpersonationRegistryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsSendingDomainRestrictionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsSendingDomainRestrictionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAccountsAccountIdEmailSecuritySettingsSendingDomainRestrictionsSendingDomainRestrictionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdEmailSecuritySettingsTrustedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsTrustedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsTrustedDomainsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEmailSecuritySettingsTrustedDomainsTrustedDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsTrustedDomainsTrustedDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdEmailSecuritySettingsTrustedDomainsTrustedDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdEmailSecuritySettingsTrustedDomainsTrustedDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdEmailSecuritySettingsUrlIgnorePatternsPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
