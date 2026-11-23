import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoCustomPropertyNameRoute,
  deleteEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute,
  deleteEnterprisesEnterpriseCopilotPoliciesCodingAgentOrganizationsRoute,
  getEnterprisesEnterpriseActionsCacheRetentionLimitRoute,
  getEnterprisesEnterpriseActionsCacheStorageLimitRoute,
  getEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoRoute,
  getEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRepositoriesRoute,
  getEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute,
  getEnterprisesEnterpriseCodeSecurityConfigurationsDefaultsRoute,
  getEnterprisesEnterpriseCodeSecurityConfigurationsRoute,
  getEnterprisesEnterpriseCopilotMetricsReportsEnterprise1DayRoute,
  getEnterprisesEnterpriseCopilotMetricsReportsEnterprise28DayLatestRoute,
  getEnterprisesEnterpriseCopilotMetricsReportsRepos1DayRoute,
  getEnterprisesEnterpriseCopilotMetricsReportsUsers1DayRoute,
  getEnterprisesEnterpriseCopilotMetricsReportsUsers28DayLatestRoute,
  getEnterprisesEnterpriseCopilotMetricsReportsUserTeams1DayRoute,
  getEnterprisesEnterpriseCopilotPoliciesCodeReviewRoute,
  getEnterprisesEnterpriseDependabotAlertsRoute,
  getEnterprisesEnterpriseDependabotRepositoryAccessRoute,
  patchEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute,
  patchEnterprisesEnterpriseDependabotRepositoryAccessRoute,
  postEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoRoute,
  postEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdAttachRoute,
  postEnterprisesEnterpriseCodeSecurityConfigurationsRoute,
  postEnterprisesEnterpriseCopilotPoliciesCodingAgentOrganizationsRoute,
  putEnterprisesEnterpriseActionsCacheRetentionLimitRoute,
  putEnterprisesEnterpriseActionsCacheStorageLimitRoute,
  putEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdDefaultsRoute,
  putEnterprisesEnterpriseCopilotPoliciesCodeReviewRoute,
  putEnterprisesEnterpriseCopilotPoliciesCodingAgentRoute,
  putEnterprisesEnterpriseDependabotRepositoryAccessDefaultLevelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enterprisesHandler = app
  .openapi(getEnterprisesEnterpriseActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoCustomPropertyNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEnterprisesEnterpriseCodeSecurityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseCodeSecurityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseCodeSecurityConfigurationsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRepositoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEnterprisesEnterpriseCopilotMetricsReportsEnterprise1DayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseCopilotMetricsReportsEnterprise28DayLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseCopilotMetricsReportsRepos1DayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseCopilotMetricsReportsUserTeams1DayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseCopilotMetricsReportsUsers1DayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseCopilotMetricsReportsUsers28DayLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseCopilotPoliciesCodeReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseCopilotPoliciesCodeReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseCopilotPoliciesCodingAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseCopilotPoliciesCodingAgentOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnterprisesEnterpriseCopilotPoliciesCodingAgentOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseDependabotAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseDependabotRepositoryAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnterprisesEnterpriseDependabotRepositoryAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseDependabotRepositoryAccessDefaultLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
