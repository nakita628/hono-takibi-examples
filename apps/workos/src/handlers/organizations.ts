import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsIdRoute,
  deleteOrganizationsOrganizationIdConnectedAccountsSlugRoute,
  deleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmIdRoute,
  deleteOrganizationsOrganizationIdGroupsGroupIdRoute,
  deleteOrganizationsOrganizationIdItContactsContactIdRoute,
  getOrganizationsExternalIdExternalIdRoute,
  getOrganizationsIdAuditLogConfigurationRoute,
  getOrganizationsIdAuditLogsRetentionRoute,
  getOrganizationsIdRoute,
  getOrganizationsOrganizationIdApiKeysRoute,
  getOrganizationsOrganizationIdAuthorizedApplicationsRoute,
  getOrganizationsOrganizationIdConnectedAccountsSlugRoute,
  getOrganizationsOrganizationIdDataIntegrationConfigurationsRoute,
  getOrganizationsOrganizationIdDataProvidersRoute,
  getOrganizationsOrganizationIdFeatureFlagsRoute,
  getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute,
  getOrganizationsOrganizationIdGroupsGroupIdRoute,
  getOrganizationsOrganizationIdGroupsRoute,
  getOrganizationsOrganizationIdItContactsRoute,
  getOrganizationsRoute,
  patchOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute,
  patchOrganizationsOrganizationIdGroupsGroupIdRoute,
  postOrganizationsOrganizationIdApiKeysRoute,
  postOrganizationsOrganizationIdConnectedAccountsSlugRoute,
  postOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute,
  postOrganizationsOrganizationIdGroupsRoute,
  postOrganizationsOrganizationIdItContactsContactIdInviteRoute,
  postOrganizationsOrganizationIdItContactsContactIdRevokeRoute,
  postOrganizationsOrganizationIdItContactsRoute,
  postOrganizationsRoute,
  putOrganizationsIdAuditLogsRetentionRoute,
  putOrganizationsIdRoute,
  putOrganizationsOrganizationIdConnectedAccountsSlugRoute,
  putOrganizationsOrganizationIdDataIntegrationConfigurationsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsExternalIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdAuditLogConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdAuditLogsRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdAuditLogsRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDataIntegrationConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdDataIntegrationConfigurationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdFeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAuthorizedApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDataProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdItContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdItContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdItContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdItContactsContactIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdItContactsContactIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
