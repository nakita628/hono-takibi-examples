import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityIdentitiesHealthIssuesHealthIssueIdRoute,
  deleteSecurityIdentitiesIdentityAccountsIdentityAccountsIdRoute,
  deleteSecurityIdentitiesRoute,
  deleteSecurityIdentitiesSensorCandidateActivationConfigurationRoute,
  deleteSecurityIdentitiesSensorCandidatesSensorCandidateIdRoute,
  deleteSecurityIdentitiesSensorsSensorIdRoute,
  deleteSecurityIdentitiesSettingsAutoAuditingConfigurationRoute,
  deleteSecurityIdentitiesSettingsRoute,
  getSecurityIdentitiesHealthIssuesCountRoute,
  getSecurityIdentitiesHealthIssuesHealthIssueIdRoute,
  getSecurityIdentitiesHealthIssuesRoute,
  getSecurityIdentitiesIdentityAccountsCountRoute,
  getSecurityIdentitiesIdentityAccountsIdentityAccountsIdRoute,
  getSecurityIdentitiesIdentityAccountsRoute,
  getSecurityIdentitiesRoute,
  getSecurityIdentitiesSensorCandidateActivationConfigurationRoute,
  getSecurityIdentitiesSensorCandidatesCountRoute,
  getSecurityIdentitiesSensorCandidatesRoute,
  getSecurityIdentitiesSensorCandidatesSensorCandidateIdRoute,
  getSecurityIdentitiesSensorsCountRoute,
  getSecurityIdentitiesSensorsMicrosoftGraphSecurityGetDeploymentAccessKeyRoute,
  getSecurityIdentitiesSensorsMicrosoftGraphSecurityGetDeploymentPackageUriRoute,
  getSecurityIdentitiesSensorsRoute,
  getSecurityIdentitiesSensorsSensorIdHealthIssuesCountRoute,
  getSecurityIdentitiesSensorsSensorIdHealthIssuesHealthIssueIdRoute,
  getSecurityIdentitiesSensorsSensorIdHealthIssuesRoute,
  getSecurityIdentitiesSensorsSensorIdRoute,
  getSecurityIdentitiesSettingsAutoAuditingConfigurationRoute,
  getSecurityIdentitiesSettingsRoute,
  patchSecurityIdentitiesHealthIssuesHealthIssueIdRoute,
  patchSecurityIdentitiesIdentityAccountsIdentityAccountsIdRoute,
  patchSecurityIdentitiesRoute,
  patchSecurityIdentitiesSensorCandidateActivationConfigurationRoute,
  patchSecurityIdentitiesSensorCandidatesSensorCandidateIdRoute,
  patchSecurityIdentitiesSensorsSensorIdRoute,
  patchSecurityIdentitiesSettingsAutoAuditingConfigurationRoute,
  patchSecurityIdentitiesSettingsRoute,
  postSecurityIdentitiesHealthIssuesRoute,
  postSecurityIdentitiesIdentityAccountsIdentityAccountsIdMicrosoftGraphSecurityInvokeActionRoute,
  postSecurityIdentitiesIdentityAccountsRoute,
  postSecurityIdentitiesSensorCandidatesMicrosoftGraphSecurityActivateRoute,
  postSecurityIdentitiesSensorCandidatesRoute,
  postSecurityIdentitiesSensorsMicrosoftGraphSecurityRegenerateDeploymentAccessKeyRoute,
  postSecurityIdentitiesSensorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityIdentityContainerHandler = app
  .openapi(getSecurityIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesHealthIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityIdentitiesHealthIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesHealthIssuesHealthIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityIdentitiesHealthIssuesHealthIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityIdentitiesHealthIssuesHealthIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesHealthIssuesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesIdentityAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityIdentitiesIdentityAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesIdentityAccountsIdentityAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityIdentitiesIdentityAccountsIdentityAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityIdentitiesIdentityAccountsIdentityAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSecurityIdentitiesIdentityAccountsIdentityAccountsIdMicrosoftGraphSecurityInvokeActionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityIdentitiesIdentityAccountsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorCandidateActivationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityIdentitiesSensorCandidateActivationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityIdentitiesSensorCandidateActivationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorCandidatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityIdentitiesSensorCandidatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorCandidatesSensorCandidateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityIdentitiesSensorCandidatesSensorCandidateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityIdentitiesSensorCandidatesSensorCandidateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorCandidatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityIdentitiesSensorCandidatesMicrosoftGraphSecurityActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityIdentitiesSensorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorsSensorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityIdentitiesSensorsSensorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityIdentitiesSensorsSensorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorsSensorIdHealthIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorsSensorIdHealthIssuesHealthIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorsSensorIdHealthIssuesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorsMicrosoftGraphSecurityGetDeploymentAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSensorsMicrosoftGraphSecurityGetDeploymentPackageUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSecurityIdentitiesSensorsMicrosoftGraphSecurityRegenerateDeploymentAccessKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityIdentitiesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityIdentitiesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityIdentitiesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIdentitiesSettingsAutoAuditingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityIdentitiesSettingsAutoAuditingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityIdentitiesSettingsAutoAuditingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
