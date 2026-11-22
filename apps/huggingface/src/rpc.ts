import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiNotifications(
  args: InferRequestType<typeof client.api.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications.$get(args, options))
}

export async function getApiSettingsMcp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.settings.mcp.$get(undefined, options))
}

export async function getApiSettingsWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.api.settings.webhooks.$get(undefined, options))
}

export async function postApiSettingsWebhooks(
  args: InferRequestType<typeof client.api.settings.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.settings.webhooks.$post(args, options))
}

export async function getApiSettingsWebhooksWebhookId(
  args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.settings.webhooks[':webhookId'].$get(args, options))
}

export async function postApiSettingsWebhooksWebhookId(
  args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.settings.webhooks[':webhookId'].$post(args, options))
}

export async function deleteApiSettingsWebhooksWebhookId(
  args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.settings.webhooks[':webhookId'].$delete(args, options))
}

export async function postApiSettingsWebhooksWebhookIdAction(
  args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId'][':action']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.settings.webhooks[':webhookId'][':action'].$post(args, options),
  )
}

export async function postApiSettingsWebhooksWebhookIdReplayLogId(
  args: InferRequestType<
    (typeof client.api.settings.webhooks)[':webhookId']['replay'][':logId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.settings.webhooks[':webhookId'].replay[':logId'].$post(args, options),
  )
}

export async function postApiSettingsPapersClaim(
  args: InferRequestType<typeof client.api.settings.papers.claim.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.settings.papers.claim.$post(args, options))
}

export async function getApiSettingsRepositories(
  args: InferRequestType<typeof client.api.settings.repositories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.settings.repositories.$get(args, options))
}

export async function getApiOrganizationsNameSettingsTokens(
  args: InferRequestType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':name'].settings.tokens.$get(args, options))
}

export async function getApiOrganizationsNameSettingsRepositories(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].settings.repositories.$get(args, options),
  )
}

export async function putApiOrganizationsNameSettingsSsoCredentials(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['sso']['credentials']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].settings.sso.credentials.$put(args, options),
  )
}

export async function getApiOrganizationsNameAuditLogExport(
  args: InferRequestType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['audit-log'].export.$get(args, options),
  )
}

export async function getApiOrganizationsNameResourceGroupsResourceGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$get(args, options),
  )
}

export async function deleteApiOrganizationsNameResourceGroupsResourceGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$delete(args, options),
  )
}

export async function patchApiOrganizationsNameResourceGroupsResourceGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$patch(args, options),
  )
}

export async function postApiOrganizationsNameResourceGroupsResourceGroupIdSettings(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'][':resourceGroupId'].settings.$post(
      args,
      options,
    ),
  )
}

export async function postApiOrganizationsNameResourceGroupsResourceGroupIdUsers(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'][':resourceGroupId'].users.$post(
      args,
      options,
    ),
  )
}

export async function postApiOrganizationsNameResourceGroupsResourceGroupIdInvite(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invite.$post(
      args,
      options,
    ),
  )
}

export async function getApiOrganizationsNameResourceGroupsResourceGroupIdInvitations(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invitations.$get(
      args,
      options,
    ),
  )
}

export async function postApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResend(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitation'][':id']['resend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invitation[
      ':id'
    ].resend.$post(args, options),
  )
}

export async function deleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsername(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'][':resourceGroupId'].users[
      ':username'
    ].$delete(args, options),
  )
}

export async function patchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsername(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'][':resourceGroupId'].users[
      ':username'
    ].$patch(args, options),
  )
}

export async function getApiOrganizationsNameResourceGroups(
  args: InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'].$get(args, options),
  )
}

export async function postApiOrganizationsNameResourceGroups(
  args: InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'].$post(args, options),
  )
}

export async function getApiOrganizationsNameResourceGroupsSettings(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'].settings.$get(args, options),
  )
}

export async function postApiOrganizationsNameResourceGroupsSettings(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups']['settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['resource-groups'].settings.$post(args, options),
  )
}

export async function getApiOrganizationsNameSettingsNetworkSecurity(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].settings['network-security'].$get(args, options),
  )
}

export async function patchApiOrganizationsNameSettingsNetworkSecurity(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['network-security']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].settings['network-security'].$patch(args, options),
  )
}

export async function getApiOrganizationsNameServiceAccounts(
  args: InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['service-accounts'].$get(args, options),
  )
}

export async function postApiOrganizationsNameServiceAccounts(
  args: InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['service-accounts'].$post(args, options),
  )
}

export async function getApiOrganizationsNameServiceAccountsServiceAccountId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['service-accounts'][':serviceAccountId'].$get(args, options),
  )
}

export async function deleteApiOrganizationsNameServiceAccountsServiceAccountId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['service-accounts'][':serviceAccountId'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiOrganizationsNameServiceAccountsServiceAccountIdTokens(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens[
      ':tokenId'
    ].$delete(args, options),
  )
}

export async function patchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens[
      ':tokenId'
    ].$patch(args, options),
  )
}

export async function postApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotate(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens[
      ':tokenId'
    ].rotate.$post(args, options),
  )
}

export async function getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishers(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['service-accounts'][':serviceAccountId'][
      'trusted-publishers'
    ].$get(args, options),
  )
}

export async function postApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishers(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['service-accounts'][':serviceAccountId'][
      'trusted-publishers'
    ].$post(args, options),
  )
}

export async function getApiOrganizationsNameAvatar(
  args: InferRequestType<(typeof client.api.organizations)[':name']['avatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':name'].avatar.$get(args, options))
}

export async function getApiOrganizationsNameMembers(
  args: InferRequestType<(typeof client.api.organizations)[':name']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':name'].members.$get(args, options))
}

export async function getApiOrganizationsNameScimV2ServiceProviderConfig(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.ServiceProviderConfig.$get(args, options),
  )
}

export async function getApiOrganizationsNameScimV2ResourceTypes(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.ResourceTypes.$get(args, options),
  )
}

export async function getApiOrganizationsNameScimV2Schemas(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':name'].scim.v2.Schemas.$get(args, options))
}

export async function getApiOrganizationsNameScimV2SchemasSchemaId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.Schemas[':schemaId'].$get(args, options),
  )
}

export async function getApiOrganizationsNameScimV2Users(
  args: InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':name'].scim.v2.Users.$get(args, options))
}

export async function postApiOrganizationsNameScimV2Users(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':name'].scim.v2.Users.$post(args, options))
}

export async function getApiOrganizationsNameScimV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.Users[':userId'].$get(args, options),
  )
}

export async function putApiOrganizationsNameScimV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.Users[':userId'].$put(args, options),
  )
}

export async function deleteApiOrganizationsNameScimV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.Users[':userId'].$delete(args, options),
  )
}

export async function patchApiOrganizationsNameScimV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.Users[':userId'].$patch(args, options),
  )
}

export async function getApiOrganizationsNameScimV2Groups(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':name'].scim.v2.Groups.$get(args, options))
}

export async function postApiOrganizationsNameScimV2Groups(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':name'].scim.v2.Groups.$post(args, options))
}

export async function getApiOrganizationsNameScimV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.Groups[':groupId'].$get(args, options),
  )
}

export async function putApiOrganizationsNameScimV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.Groups[':groupId'].$put(args, options),
  )
}

export async function deleteApiOrganizationsNameScimV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.Groups[':groupId'].$delete(args, options),
  )
}

export async function patchApiOrganizationsNameScimV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].scim.v2.Groups[':groupId'].$patch(args, options),
  )
}

export async function getApiOrganizationsNameScimProvisioningV2Users(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Users.$get(args, options),
  )
}

export async function postApiOrganizationsNameScimProvisioningV2Users(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Users.$post(args, options),
  )
}

export async function getApiOrganizationsNameScimProvisioningV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$get(args, options),
  )
}

export async function putApiOrganizationsNameScimProvisioningV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$put(args, options),
  )
}

export async function deleteApiOrganizationsNameScimProvisioningV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiOrganizationsNameScimProvisioningV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiOrganizationsNameScimProvisioningV2Groups(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Groups.$get(args, options),
  )
}

export async function postApiOrganizationsNameScimProvisioningV2Groups(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Groups.$post(args, options),
  )
}

export async function getApiOrganizationsNameScimProvisioningV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$get(
      args,
      options,
    ),
  )
}

export async function putApiOrganizationsNameScimProvisioningV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiOrganizationsNameScimProvisioningV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiOrganizationsNameScimProvisioningV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$patch(
      args,
      options,
    ),
  )
}

export async function postOauthRegister(
  args: InferRequestType<typeof client.oauth.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.register.$post(args, options))
}

export async function postOauthDevice(
  args: InferRequestType<typeof client.oauth.device.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.device.$post(args, options))
}

export async function getOauthUserinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth.userinfo.$get(undefined, options))
}

export async function postOauthUserinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth.userinfo.$post(undefined, options))
}

export async function getApiRegistryToken(
  args: InferRequestType<typeof client.api.registry.token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.registry.token.$get(args, options))
}

export async function postApiBlogSlugComment(
  args: InferRequestType<(typeof client.api.blog)[':slug']['comment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.blog[':slug'].comment.$post(args, options))
}

export async function postApiBlogSlugCommentCommentIdReply(
  args: InferRequestType<
    (typeof client.api.blog)[':slug']['comment'][':commentId']['reply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.blog[':slug'].comment[':commentId'].reply.$post(args, options),
  )
}

export async function postApiBlogNamespaceSlugComment(
  args: InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.blog[':namespace'][':slug'].comment.$post(args, options))
}

export async function postApiBlogNamespaceSlugCommentCommentIdReply(
  args: InferRequestType<
    (typeof client.api.blog)[':namespace'][':slug']['comment'][':commentId']['reply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.blog[':namespace'][':slug'].comment[':commentId'].reply.$post(args, options),
  )
}

export async function getApiBlogNamespaceSlugResourceGroup(
  args: InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.blog[':namespace'][':slug']['resource-group'].$get(args, options),
  )
}

export async function postApiBlogNamespaceSlugResourceGroup(
  args: InferRequestType<
    (typeof client.api.blog)[':namespace'][':slug']['resource-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.blog[':namespace'][':slug']['resource-group'].$post(args, options),
  )
}

export async function getApiDocs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.docs.$get(undefined, options))
}

export async function getApiDocsSearch(
  args: InferRequestType<typeof client.api.docs.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.docs.search.$get(args, options))
}

export async function getApiDocsSearchFullText(
  args: InferRequestType<(typeof client.api.docs.search)['full-text']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.docs.search['full-text'].$get(args, options))
}

export async function getApiWhoamiV2(options?: ClientRequestOptions) {
  return await parseResponse(client.api['whoami-v2'].$get(undefined, options))
}

export async function getApiOrganizationsNameBillingUsageByResourceGroup(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].billing['usage-by-resource-group'].$get(args, options),
  )
}

export async function getApiOrganizationsNameBillingUsageByInferenceSession(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].billing['usage-by-inference-session'].$get(args, options),
  )
}

export async function getApiOrganizationsNameBillingUsageInference(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].billing.usage.inference.$get(args, options),
  )
}

export async function getApiOrganizationsNameBillingCredits(
  args: InferRequestType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':name'].billing.credits.$get(args, options))
}

export async function postApiOrganizationsNameBillingPrepaidCreditsPurchaseLink(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['prepaid-credits']['purchase-link']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.organizations[':name'].billing['prepaid-credits']['purchase-link'].$post(
      args,
      options,
    ),
  )
}

export async function getApiSettingsBillingCredits(options?: ClientRequestOptions) {
  return await parseResponse(client.api.settings.billing.credits.$get(undefined, options))
}

export async function postApiSettingsBillingPrepaidCreditsPurchaseLink(
  args: InferRequestType<
    (typeof client.api.settings.billing)['prepaid-credits']['purchase-link']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.settings.billing['prepaid-credits']['purchase-link'].$post(args, options),
  )
}

export async function getApiSettingsBillingUsageByInferenceSession(
  args: InferRequestType<
    (typeof client.api.settings.billing)['usage-by-inference-session']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.settings.billing['usage-by-inference-session'].$get(args, options),
  )
}

export async function getApiSettingsBillingUsageJobs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.settings.billing.usage.jobs.$get(undefined, options))
}

export async function getApiUsersUsernameOverview(
  args: InferRequestType<(typeof client.api.users)[':username']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':username'].overview.$get(args, options))
}

export async function getApiUsersUsernameSocials(
  args: InferRequestType<(typeof client.api.users)[':username']['socials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':username'].socials.$get(args, options))
}

export async function getApiUsersUsernameAvatar(
  args: InferRequestType<(typeof client.api.users)[':username']['avatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':username'].avatar.$get(args, options))
}

export async function getApiUsersUsernameLikes(
  args: InferRequestType<(typeof client.api.users)[':username']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':username'].likes.$get(args, options))
}

export async function getApiUsersUsernameFollowers(
  args: InferRequestType<(typeof client.api.users)[':username']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':username'].followers.$get(args, options))
}

export async function getApiUsersUsernameFollowing(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':username'].following.$get(args, options))
}

export async function getApiUsersUsernameFollowingOrgs(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':username'].following.orgs.$get(args, options))
}

export async function getApiOrganizationsNameSocials(
  args: InferRequestType<(typeof client.api.organizations)[':name']['socials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':name'].socials.$get(args, options))
}

export async function postApiInferenceEndpointsNamespaceAuthCheckPerms(
  args: InferRequestType<
    (typeof client.api)['inference-endpoints'][':namespace']['auth-check'][':perms']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['inference-endpoints'][':namespace']['auth-check'][':perms'].$post(args, options),
  )
}

export async function postApiInferenceEndpointsNamespaceEndpointAuthCheckPerms(
  args: InferRequestType<
    (typeof client.api)['inference-endpoints'][':namespace'][':endpoint']['auth-check'][':perms']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['inference-endpoints'][':namespace'][':endpoint']['auth-check'][':perms'].$post(
      args,
      options,
    ),
  )
}

export async function postApiJobsNamespaceAuthCheckPerms(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['auth-check'][':perms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.jobs[':namespace']['auth-check'][':perms'].$post(args, options),
  )
}

export async function postApiJobsNamespaceJobIdAuthCheckPerms(
  args: InferRequestType<
    (typeof client.api.jobs)[':namespace'][':jobId']['auth-check'][':perms']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.jobs[':namespace'][':jobId']['auth-check'][':perms'].$post(args, options),
  )
}

export async function getApiModelsNamespaceRepoTreesizeRevPath(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo'].treesize[':rev'][':path'].$get(args, options),
  )
}

export async function getApiSpacesNamespaceRepoTreesizeRevPath(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo'].treesize[':rev'][':path'].$get(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoTreesizeRevPath(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo'].treesize[':rev'][':path'].$get(args, options),
  )
}

export async function getApiModelsNamespaceRepoSafetensorsMetadataPath(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['safetensors-metadata'][':path'].$get(args, options),
  )
}

export async function getApiModelsNamespaceRepoLfsFiles(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['lfs-files'].$get(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoLfsFiles(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo']['lfs-files'].$get(args, options),
  )
}

export async function getApiSpacesNamespaceRepoLfsFiles(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo']['lfs-files'].$get(args, options),
  )
}

export async function postApiModelsNamespaceRepoLfsFilesDuplicate(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['lfs-files'].duplicate.$post(args, options),
  )
}

export async function postApiKernelsNamespaceRepoLfsFilesDuplicate(
  args: InferRequestType<
    (typeof client.api.kernels)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.kernels[':namespace'][':repo']['lfs-files'].duplicate.$post(args, options),
  )
}

export async function postApiDatasetsNamespaceRepoLfsFilesDuplicate(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo']['lfs-files'].duplicate.$post(args, options),
  )
}

export async function postApiSpacesNamespaceRepoLfsFilesDuplicate(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo']['lfs-files'].duplicate.$post(args, options),
  )
}

export async function postApiBucketsNamespaceRepoLfsFilesDuplicate(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.buckets[':namespace'][':repo']['lfs-files'].duplicate.$post(args, options),
  )
}

export async function getApiModelsNamespaceRepoCommitsRev(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo'].commits[':rev'].$get(args, options),
  )
}

export async function getApiSpacesNamespaceRepoCommitsRev(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo'].commits[':rev'].$get(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoCommitsRev(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo'].commits[':rev'].$get(args, options),
  )
}

export async function getApiModelsNamespaceRepoRefs(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.models[':namespace'][':repo'].refs.$get(args, options))
}

export async function getApiDatasetsNamespaceRepoRefs(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.datasets[':namespace'][':repo'].refs.$get(args, options))
}

export async function getApiSpacesNamespaceRepoRefs(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':namespace'][':repo'].refs.$get(args, options))
}

export async function getApiModelsNamespaceRepoCompareCompare(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo'].compare[':compare'].$get(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoCompareCompare(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo'].compare[':compare'].$get(args, options),
  )
}

export async function getApiSpacesNamespaceRepoCompareCompare(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo'].compare[':compare'].$get(args, options),
  )
}

export async function postApiModelsNamespaceRepoPathsInfoRev(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['paths-info'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['paths-info'][':rev'].$post(args, options),
  )
}

export async function postApiDatasetsNamespaceRepoPathsInfoRev(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['paths-info'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo']['paths-info'][':rev'].$post(args, options),
  )
}

export async function postApiSpacesNamespaceRepoPathsInfoRev(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['paths-info'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo']['paths-info'][':rev'].$post(args, options),
  )
}

export async function postApiModelsNamespaceRepoPreuploadRev(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['preupload'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo'].preupload[':rev'].$post(args, options),
  )
}

export async function postApiSpacesNamespaceRepoPreuploadRev(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['preupload'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo'].preupload[':rev'].$post(args, options),
  )
}

export async function postApiDatasetsNamespaceRepoPreuploadRev(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['preupload'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo'].preupload[':rev'].$post(args, options),
  )
}

export async function getApiModelsNamespaceRepoXetWriteTokenRev(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['xet-write-token'][':rev'].$get(args, options),
  )
}

export async function getApiSpacesNamespaceRepoXetWriteTokenRev(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo']['xet-write-token'][':rev'].$get(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoXetWriteTokenRev(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo']['xet-write-token'][':rev'].$get(args, options),
  )
}

export async function getApiBucketsNamespaceRepoXetWriteToken(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.buckets[':namespace'][':repo']['xet-write-token'].$get(args, options),
  )
}

export async function getApiContainersNamespaceRepoXetWriteToken(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.containers[':namespace'][':repo']['xet-write-token'].$get(args, options),
  )
}

export async function getApiModelsNamespaceRepoXetReadTokenRev(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['xet-read-token'][':rev'].$get(args, options),
  )
}

export async function getApiSpacesNamespaceRepoXetReadTokenRev(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo']['xet-read-token'][':rev'].$get(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoXetReadTokenRev(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo']['xet-read-token'][':rev'].$get(args, options),
  )
}

export async function getApiBucketsNamespaceRepoXetReadToken(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.buckets[':namespace'][':repo']['xet-read-token'].$get(args, options),
  )
}

export async function getApiContainersNamespaceRepoXetReadToken(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.containers[':namespace'][':repo']['xet-read-token'].$get(args, options),
  )
}

export async function postApiModelsNamespaceRepoCommitRev(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['commit'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo'].commit[':rev'].$post(args, options),
  )
}

export async function postApiDatasetsNamespaceRepoCommitRev(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['commit'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo'].commit[':rev'].$post(args, options),
  )
}

export async function postApiSpacesNamespaceRepoCommitRev(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['commit'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo'].commit[':rev'].$post(args, options),
  )
}

export async function getApiModelsNamespaceRepoResourceGroup(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['resource-group'].$get(args, options),
  )
}

export async function postApiModelsNamespaceRepoResourceGroup(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['resource-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['resource-group'].$post(args, options),
  )
}

export async function getApiSpacesNamespaceRepoResourceGroup(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo']['resource-group'].$get(args, options),
  )
}

export async function postApiSpacesNamespaceRepoResourceGroup(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo']['resource-group'].$post(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoResourceGroup(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo']['resource-group'].$get(args, options),
  )
}

export async function postApiDatasetsNamespaceRepoResourceGroup(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo']['resource-group'].$post(args, options),
  )
}

export async function getApiBucketsNamespaceRepoResourceGroup(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.buckets[':namespace'][':repo']['resource-group'].$get(args, options),
  )
}

export async function postApiBucketsNamespaceRepoResourceGroup(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.buckets[':namespace'][':repo']['resource-group'].$post(args, options),
  )
}

export async function getApiContainersNamespaceRepoResourceGroup(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.containers[':namespace'][':repo']['resource-group'].$get(args, options),
  )
}

export async function postApiContainersNamespaceRepoResourceGroup(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.containers[':namespace'][':repo']['resource-group'].$post(args, options),
  )
}

export async function postApiModelsNamespaceRepoSuperSquashRev(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['super-squash'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['super-squash'][':rev'].$post(args, options),
  )
}

export async function postApiDatasetsNamespaceRepoSuperSquashRev(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['super-squash'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo']['super-squash'][':rev'].$post(args, options),
  )
}

export async function postApiSpacesNamespaceRepoSuperSquashRev(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['super-squash'][':rev']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo']['super-squash'][':rev'].$post(args, options),
  )
}

export async function putApiModelsNamespaceRepoSettings(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.models[':namespace'][':repo'].settings.$put(args, options))
}

export async function putApiSpacesNamespaceRepoSettings(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':namespace'][':repo'].settings.$put(args, options))
}

export async function putApiDatasetsNamespaceRepoSettings(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo'].settings.$put(args, options),
  )
}

export async function getApiRepoTypeNamespaceRepoSettingsTrustedPublishers(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].settings['trusted-publishers'].$get(
      args,
      options,
    ),
  )
}

export async function postApiRepoTypeNamespaceRepoSettingsTrustedPublishers(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].settings['trusted-publishers'].$post(
      args,
      options,
    ),
  )
}

export async function getApiModelsNamespaceRepoTreeRevPath(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo'].tree[':rev'][':path'].$get(args, options),
  )
}

export async function getApiSpacesNamespaceRepoTreeRevPath(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo'].tree[':rev'][':path'].$get(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoTreeRevPath(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo'].tree[':rev'][':path'].$get(args, options),
  )
}

export async function getApiModelsNamespaceRepoNotebookRevPath(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo'].notebook[':rev'][':path'].$get(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoNotebookRevPath(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo'].notebook[':rev'][':path'].$get(args, options),
  )
}

export async function getApiSpacesNamespaceRepoNotebookRevPath(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.spaces[':namespace'][':repo'].notebook[':rev'][':path'].$get(args, options),
  )
}

export async function getApiModelsNamespaceRepoScan(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.models[':namespace'][':repo'].scan.$get(args, options))
}

export async function getApiDatasetsNamespaceRepoScan(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.datasets[':namespace'][':repo'].scan.$get(args, options))
}

export async function getApiSpacesNamespaceRepoScan(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':namespace'][':repo'].scan.$get(args, options))
}

export async function getApiKernelsNamespaceRepoScan(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.kernels[':namespace'][':repo'].scan.$get(args, options))
}

export async function getApiRepoTypeNamespaceRepoDiscussions(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].discussions.$get(args, options),
  )
}

export async function postApiRepoTypeNamespaceRepoDiscussions(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].discussions.$post(args, options),
  )
}

export async function getApiRepoTypeNamespaceRepoDiscussionsNum(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].discussions[':num'].$get(args, options),
  )
}

export async function postApiRepoTypeNamespaceRepoDiscussionsNumComment(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['comment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].discussions[':num'].comment.$post(args, options),
  )
}

export async function postApiRepoTypeNamespaceRepoDiscussionsNumStatus(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].discussions[':num'].status.$post(args, options),
  )
}

export async function postApiRepoTypeNamespaceRepoDiscussionsNumTitle(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['title']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].discussions[':num'].title.$post(args, options),
  )
}

export async function getApiRepoTypeNamespaceRepoDiscussionsNumStorage(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].discussions[':num'].storage.$get(args, options),
  )
}

export async function getApiKernels(
  args: InferRequestType<typeof client.api.kernels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.kernels.$get(args, options))
}

export async function getApiKernelsNamespaceRepo(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.kernels[':namespace'][':repo'].$get(args, options))
}

export async function getApiKernelsNamespaceRepoRevisionRev(
  args: InferRequestType<
    (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.kernels[':namespace'][':repo'].revision[':rev'].$get(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoLeaderboard(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo'].leaderboard.$get(args, options),
  )
}

export async function getApiModelsNamespaceRepoJwt(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.models[':namespace'][':repo'].jwt.$get(args, options))
}

export async function getApiSpacesNamespaceRepoJwt(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':namespace'][':repo'].jwt.$get(args, options))
}

export async function getApiDatasetsNamespaceRepoJwt(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.datasets[':namespace'][':repo'].jwt.$get(args, options))
}

export async function getApiAgentHarnesses(options?: ClientRequestOptions) {
  return await parseResponse(client.api['agent-harnesses'].$get(undefined, options))
}

export async function getApiModelsTagsByType(
  args: InferRequestType<(typeof client.api)['models-tags-by-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['models-tags-by-type'].$get(args, options))
}

export async function getApiDatasetsTagsByType(
  args: InferRequestType<(typeof client.api)['datasets-tags-by-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['datasets-tags-by-type'].$get(args, options))
}

export async function getApiTrending(
  args: InferRequestType<typeof client.api.trending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.trending.$get(args, options))
}

export async function getApiQuicksearch(
  args: InferRequestType<typeof client.api.quicksearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quicksearch.$get(args, options))
}

export async function postApiQuicksearch(
  args: InferRequestType<typeof client.api.quicksearch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quicksearch.$post(args, options))
}

export async function getApiSpacesHardware(options?: ClientRequestOptions) {
  return await parseResponse(client.api.spaces.hardware.$get(undefined, options))
}

export async function getApiSpacesTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.api.spaces.templates.$get(undefined, options))
}

export async function getApiSpacesZeroGpuQuota(options?: ClientRequestOptions) {
  return await parseResponse(client.api.spaces['zero-gpu'].quota.$get(undefined, options))
}

export async function getApiSpacesNamespaceRepoSecrets(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':namespace'][':repo'].secrets.$get(args, options))
}

export async function getApiSpacesNamespaceRepoVariables(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spaces[':namespace'][':repo'].variables.$get(args, options))
}

export async function postApiRepoTypeNamespaceRepoDuplicate(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].duplicate.$post(args, options),
  )
}

export async function getApiRepoTypeNamespaceRepoDuplicateStatus(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo'].duplicate.status.$get(args, options),
  )
}

export async function postApiReposCreate(
  args: InferRequestType<typeof client.api.repos.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.repos.create.$post(args, options))
}

export async function deleteApiRepoTypeNamespaceRepoSqlConsoleEmbedId(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo']['sql-console'].embed[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiRepoTypeNamespaceRepoSqlConsoleEmbedId(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo']['sql-console'].embed[':id'].$patch(
      args,
      options,
    ),
  )
}

export async function postApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHide(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['hide']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo']['sql-console'].embed[':id'].hide.$post(
      args,
      options,
    ),
  )
}

export async function postApiRepoTypeNamespaceRepoSqlConsoleEmbed(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':repoType'][':namespace'][':repo']['sql-console'].embed.$post(args, options),
  )
}

export async function getSpacesNamespaceRepoResolveRevPath(
  args: InferRequestType<
    (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, options),
  )
}

export async function getDatasetsNamespaceRepoResolveRevPath(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasets[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, options),
  )
}

export async function getNamespaceRepoResolveRevPath(
  args: InferRequestType<
    (typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, options),
  )
}

export async function getApiResolveCacheSpacesNamespaceRepoRevPath(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['resolve-cache'].spaces[':namespace'][':repo'][':rev'][':path'].$get(args, options),
  )
}

export async function getApiResolveCacheDatasetsNamespaceRepoRevPath(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['resolve-cache'].datasets[':namespace'][':repo'][':rev'][':path'].$get(
      args,
      options,
    ),
  )
}

export async function getApiResolveCacheModelsNamespaceRepoRevPath(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['resolve-cache'].models[':namespace'][':repo'][':rev'][':path'].$get(args, options),
  )
}

export async function postNamespaceRepoAskAccess(
  args: InferRequestType<(typeof client)[':namespace'][':repo']['ask-access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':namespace'][':repo']['ask-access'].$post(args, options))
}

export async function postDatasetsNamespaceRepoAskAccess(
  args: InferRequestType<(typeof client.datasets)[':namespace'][':repo']['ask-access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasets[':namespace'][':repo']['ask-access'].$post(args, options),
  )
}

export async function getNamespaceRepoUserAccessReport(
  args: InferRequestType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':namespace'][':repo']['user-access-report'].$get(args, options),
  )
}

export async function getDatasetsNamespaceRepoUserAccessReport(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasets[':namespace'][':repo']['user-access-report'].$get(args, options),
  )
}

export async function getApiModelsNamespaceRepoUserAccessRequestStatus(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['user-access-request'][':status'].$get(args, options),
  )
}

export async function getApiDatasetsNamespaceRepoUserAccessRequestStatus(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo']['user-access-request'][':status'].$get(
      args,
      options,
    ),
  )
}

export async function postApiModelsNamespaceRepoUserAccessRequestBatch(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['user-access-request']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.models[':namespace'][':repo']['user-access-request'].batch.$post(args, options),
  )
}

export async function postApiDatasetsNamespaceRepoUserAccessRequestBatch(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['user-access-request']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.datasets[':namespace'][':repo']['user-access-request'].batch.$post(args, options),
  )
}

export async function getApiDailyPapers(
  args: InferRequestType<typeof client.api.daily_papers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.daily_papers.$get(args, options))
}

export async function getApiPapers(
  args: InferRequestType<typeof client.api.papers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.papers.$get(args, options))
}

export async function postApiPapersIndex(
  args: InferRequestType<typeof client.api.papers.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.papers.index.$post(args, options))
}

export async function getApiPapersPaperId(
  args: InferRequestType<(typeof client.api.papers)[':paperId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.papers[':paperId'].$get(args, options))
}

export async function postApiPapersPaperIdComment(
  args: InferRequestType<(typeof client.api.papers)[':paperId']['comment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.papers[':paperId'].comment.$post(args, options))
}

export async function postApiPapersPaperIdCommentCommentIdReply(
  args: InferRequestType<
    (typeof client.api.papers)[':paperId']['comment'][':commentId']['reply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.papers[':paperId'].comment[':commentId'].reply.$post(args, options),
  )
}

export async function postApiPapersPaperIdLinks(
  args: InferRequestType<(typeof client.api.papers)[':paperId']['links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.papers[':paperId'].links.$post(args, options))
}

export async function postApiPapersPaperIdMedia(
  args: InferRequestType<(typeof client.api.papers)[':paperId']['media']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.papers[':paperId'].media.$post(args, options))
}

export async function postApiPostsUsernamePostSlugComment(
  args: InferRequestType<(typeof client.api.posts)[':username'][':postSlug']['comment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.posts[':username'][':postSlug'].comment.$post(args, options),
  )
}

export async function postApiPostsUsernamePostSlugCommentCommentIdReply(
  args: InferRequestType<
    (typeof client.api.posts)[':username'][':postSlug']['comment'][':commentId']['reply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.posts[':username'][':postSlug'].comment[':commentId'].reply.$post(args, options),
  )
}

export async function getApiCollectionsNamespaceSlugId(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug-:id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.collections[':namespace'][':slug-:id'].$get(args, options))
}

export async function patchApiCollectionsNamespaceSlugId(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug-:id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.collections[':namespace'][':slug-:id'].$patch(args, options),
  )
}

export async function getApiCollectionsNamespaceSlug(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.collections[':namespace'][':slug'].$get(args, options))
}

export async function patchApiCollectionsNamespaceSlug(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.collections[':namespace'][':slug'].$patch(args, options))
}

export async function postApiCollectionsNamespaceSlugIdItems(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug-:id']['items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.collections[':namespace'][':slug-:id'].items.$post(args, options),
  )
}

export async function postApiCollectionsNamespaceSlugItems(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.collections[':namespace'][':slug'].items.$post(args, options),
  )
}

export async function getApiCollections(
  args: InferRequestType<typeof client.api.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.collections.$get(args, options))
}

export async function postApiCollections(
  args: InferRequestType<typeof client.api.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.collections.$post(args, options))
}

export async function getApiCollectionsNamespaceSlugIdResourceGroup(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug-:id']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.collections[':namespace'][':slug-:id']['resource-group'].$get(args, options),
  )
}

export async function postApiCollectionsNamespaceSlugIdResourceGroup(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug-:id']['resource-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.collections[':namespace'][':slug-:id']['resource-group'].$post(args, options),
  )
}

export async function getApiCollectionsNamespaceSlugResourceGroup(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.collections[':namespace'][':slug']['resource-group'].$get(args, options),
  )
}

export async function postApiCollectionsNamespaceSlugResourceGroup(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.collections[':namespace'][':slug']['resource-group'].$post(args, options),
  )
}

export async function getApiBucketsNamespaceRepo(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.buckets[':namespace'][':repo'].$get(args, options))
}

export async function postApiBucketsNamespaceRepo(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.buckets[':namespace'][':repo'].$post(args, options))
}

export async function getApiContainersNamespaceRepo(
  args: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.containers[':namespace'][':repo'].$get(args, options))
}

export async function postApiContainersNamespaceRepo(
  args: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.containers[':namespace'][':repo'].$post(args, options))
}

export async function putApiBucketsNamespaceRepoSettings(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.buckets[':namespace'][':repo'].settings.$put(args, options))
}

export async function putApiContainersNamespaceRepoSettings(
  args: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.containers[':namespace'][':repo'].settings.$put(args, options),
  )
}

export async function getApiBucketsNamespace(
  args: InferRequestType<(typeof client.api.buckets)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.buckets[':namespace'].$get(args, options))
}

export async function getApiContainersNamespace(
  args: InferRequestType<(typeof client.api.containers)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.containers[':namespace'].$get(args, options))
}

export async function getBucketsNamespaceRepoResolvePath(
  args: InferRequestType<
    (typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.buckets[':namespace'][':repo'].resolve[':path'].$get(args, options),
  )
}

export async function getContainersNamespaceRepoResolvePath(
  args: InferRequestType<
    (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.containers[':namespace'][':repo'].resolve[':path'].$get(args, options),
  )
}

export async function postApiBucketsNamespaceRepoBatch(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.buckets[':namespace'][':repo'].batch.$post(args, options))
}

export async function postApiContainersNamespaceRepoBatch(
  args: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.containers[':namespace'][':repo'].batch.$post(args, options),
  )
}

export async function getApiBucketsNamespaceRepoTreePath(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.buckets[':namespace'][':repo'].tree[':path'].$get(args, options),
  )
}

export async function getApiContainersNamespaceRepoTreePath(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.containers[':namespace'][':repo'].tree[':path'].$get(args, options),
  )
}

export async function getApiBucketsNamespaceRepoEvents(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.buckets[':namespace'][':repo'].events.$get(args, options))
}

export async function postApiBucketsNamespaceRepoPathsInfo(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['paths-info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.buckets[':namespace'][':repo']['paths-info'].$post(args, options),
  )
}

export async function postApiContainersNamespaceRepoPathsInfo(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['paths-info']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.containers[':namespace'][':repo']['paths-info'].$post(args, options),
  )
}

export async function getApiJobsHardware(options?: ClientRequestOptions) {
  return await parseResponse(client.api.jobs.hardware.$get(undefined, options))
}

export async function getApiJobsNamespace(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':namespace'].$get(args, options))
}

export async function postApiJobsNamespace(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':namespace'].$post(args, options))
}

export async function getApiJobsNamespaceCount(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':namespace'].count.$get(args, options))
}

export async function getApiJobsNamespaceJobId(
  args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':namespace'][':jobId'].$get(args, options))
}

export async function postApiJobsNamespaceJobIdCancel(
  args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':namespace'][':jobId'].cancel.$post(args, options))
}

export async function postApiJobsNamespaceJobIdDuplicate(
  args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':namespace'][':jobId'].duplicate.$post(args, options))
}

export async function putApiJobsNamespaceJobIdLabels(
  args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['labels']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':namespace'][':jobId'].labels.$put(args, options))
}

export async function putApiJobsNamespaceJobIdExpose(
  args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['expose']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':namespace'][':jobId'].expose.$put(args, options))
}

export async function getApiScheduledJobsNamespace(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['scheduled-jobs'][':namespace'].$get(args, options))
}

export async function postApiScheduledJobsNamespace(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['scheduled-jobs'][':namespace'].$post(args, options))
}

export async function getApiScheduledJobsNamespaceJobId(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['scheduled-jobs'][':namespace'][':jobId'].$get(args, options),
  )
}

export async function postApiScheduledJobsNamespaceJobIdRun(
  args: InferRequestType<
    (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['run']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['scheduled-jobs'][':namespace'][':jobId'].run.$post(args, options),
  )
}

export async function postApiScheduledJobsNamespaceJobIdSchedule(
  args: InferRequestType<
    (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['schedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['scheduled-jobs'][':namespace'][':jobId'].schedule.$post(args, options),
  )
}

export async function putApiScheduledJobsNamespaceJobIdLabels(
  args: InferRequestType<
    (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['labels']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['scheduled-jobs'][':namespace'][':jobId'].labels.$put(args, options),
  )
}
