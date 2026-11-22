import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRoute,
  deleteV1WorkspaceAuthConnectionsAuthConnectionIdRoute,
  deleteV1WorkspaceInvitesRoute,
  deleteV1WorkspaceWebhooksWebhookIdRoute,
  getV1ServiceAccountsRoute,
  getV1ServiceAccountsServiceAccountUserIdApiKeysRoute,
  getV1WorkspaceAuditLogsRoute,
  getV1WorkspaceAuthConnectionsRoute,
  getV1WorkspaceGroupsRoute,
  getV1WorkspaceGroupsSearchRoute,
  getV1WorkspaceMembersRoute,
  getV1WorkspaceResourcesResourceIdRoute,
  getV1WorkspaceWebhooksRoute,
  patchV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRoute,
  patchV1WorkspaceAuthConnectionsAuthConnectionIdRoute,
  patchV1WorkspaceWebhooksWebhookIdRoute,
  postV1ServiceAccountsRoute,
  postV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdDisableRoute,
  postV1ServiceAccountsServiceAccountUserIdApiKeysRoute,
  postV1WorkspaceAuthConnectionsRoute,
  postV1WorkspaceGroupsGroupIdMembersRemoveRoute,
  postV1WorkspaceGroupsGroupIdMembersRoute,
  postV1WorkspaceInvitesAddBulkRoute,
  postV1WorkspaceInvitesAddRoute,
  postV1WorkspaceMembersRoute,
  postV1WorkspaceResourcesResourceIdShareRoute,
  postV1WorkspaceResourcesResourceIdUnshareRoute,
  postV1WorkspacesApiKeysDisableRoute,
  postV1WorkspacesApiKeysThirdPartyDisablingRoute,
  postV1WorkspaceWebhooksRoute,
  putV1WorkspaceMembersUserIdUsageLimitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspaceHandler = app
  .openapi(postV1WorkspacesApiKeysDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesApiKeysThirdPartyDisablingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServiceAccountsServiceAccountUserIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServiceAccountsServiceAccountUserIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceAuthConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceAuthConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1WorkspaceAuthConnectionsAuthConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WorkspaceAuthConnectionsAuthConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceGroupsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceGroupsGroupIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceInvitesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceInvitesAddBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WorkspaceInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkspaceMembersUserIdUsageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceResourcesResourceIdShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceResourcesResourceIdUnshareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspaceWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspaceWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1WorkspaceWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WorkspaceWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
