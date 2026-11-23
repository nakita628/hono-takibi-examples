import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.config.$get(undefined, options))
}

export async function getApiKeys(
  args: InferRequestType<(typeof client)['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'].$get(args, options))
}

export async function postApiKeys(
  args: InferRequestType<(typeof client)['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'].$post(args, options))
}

export async function getApiKeysCurrent(
  args: InferRequestType<(typeof client)['api-keys']['current']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'].current.$get(args, options))
}

export async function getApiKeysName(
  args: InferRequestType<(typeof client)['api-keys'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':name'].$get(args, options))
}

export async function deleteApiKeysName(
  args: InferRequestType<(typeof client)['api-keys'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':name'].$delete(args, options))
}

export async function deleteApiKeysUserIdName(
  args: InferRequestType<(typeof client)['api-keys'][':userId'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':userId'][':name'].$delete(args, options))
}

export async function getOrganizationsInvitations(options?: ClientRequestOptions) {
  return await parseResponse(client.organizations.invitations.$get(undefined, options))
}

export async function getOrganizationsInvitationsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.organizations.invitations.count.$get(undefined, options))
}

export async function postOrganizationsInvitationsInvitationIdAccept(
  args: InferRequestType<
    (typeof client.organizations.invitations)[':invitationId']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations.invitations[':invitationId'].accept.$post(args, options),
  )
}

export async function postOrganizationsInvitationsInvitationIdDecline(
  args: InferRequestType<
    (typeof client.organizations.invitations)[':invitationId']['decline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations.invitations[':invitationId'].decline.$post(args, options),
  )
}

export async function getOrganizations(options?: ClientRequestOptions) {
  return await parseResponse(client.organizations.$get(undefined, options))
}

export async function postOrganizations(
  args: InferRequestType<typeof client.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$post(args, options))
}

export async function patchOrganizationsOrganizationIdDefaultRegion(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['default-region']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId']['default-region'].$patch(args, options),
  )
}

export async function getOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].$get(args, options))
}

export async function deleteOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].$delete(args, options))
}

export async function getOrganizationsOrganizationIdUsage(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].usage.$get(args, options))
}

export async function patchOrganizationsOrganizationIdQuota(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['quota']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].quota.$patch(args, options))
}

export async function patchOrganizationsOrganizationIdQuotaRegionId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['quota'][':regionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].quota[':regionId'].$patch(args, options),
  )
}

export async function postOrganizationsOrganizationIdLeave(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].leave.$post(args, options))
}

export async function postOrganizationsOrganizationIdSuspend(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].suspend.$post(args, options))
}

export async function postOrganizationsOrganizationIdUnsuspend(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['unsuspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].unsuspend.$post(args, options))
}

export async function getOrganizationsOtelConfigBySandboxAuthTokenAuthToken(
  args: InferRequestType<
    (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations['otel-config']['by-sandbox-auth-token'][':authToken'].$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOtelConfig(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId']['otel-config'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdOtelConfig(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId']['otel-config'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOtelConfig(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['otel-config']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId']['otel-config'].$delete(args, options),
  )
}

export async function postOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgress(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['sandbox-default-limited-network-egress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId']['sandbox-default-limited-network-egress'].$post(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdExperimentalConfig(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['experimental-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId']['experimental-config'].$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdRoles(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].roles.$get(args, options))
}

export async function postOrganizationsOrganizationIdRoles(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].roles.$post(args, options))
}

export async function putOrganizationsOrganizationIdRolesRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['roles'][':roleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].roles[':roleId'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdRolesRoleId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['roles'][':roleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].roles[':roleId'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdUsers(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].users.$get(args, options))
}

export async function postOrganizationsOrganizationIdUsersUserIdAccess(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['users'][':userId']['access']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].users[':userId'].access.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdUsersUserId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].users[':userId'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdInvitations(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].invitations.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdInvitations(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].invitations.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdInvitationsInvitationId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].invitations[':invitationId'].$put(args, options),
  )
}

export async function postOrganizationsOrganizationIdInvitationsInvitationIdCancel(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].invitations[':invitationId'].cancel.$post(
      args,
      options,
    ),
  )
}

export async function getRegions(
  args: InferRequestType<typeof client.regions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regions.$get(args, options))
}

export async function postRegions(
  args: InferRequestType<typeof client.regions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regions.$post(args, options))
}

export async function getRegionsId(
  args: InferRequestType<(typeof client.regions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regions[':id'].$get(args, options))
}

export async function deleteRegionsId(
  args: InferRequestType<(typeof client.regions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regions[':id'].$delete(args, options))
}

export async function patchRegionsId(
  args: InferRequestType<(typeof client.regions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regions[':id'].$patch(args, options))
}

export async function postRegionsIdRegenerateProxyApiKey(
  args: InferRequestType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regions[':id']['regenerate-proxy-api-key'].$post(args, options))
}

export async function postRegionsIdRegenerateSshGatewayApiKey(
  args: InferRequestType<(typeof client.regions)[':id']['regenerate-ssh-gateway-api-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.regions[':id']['regenerate-ssh-gateway-api-key'].$post(args, options),
  )
}

export async function postRegionsIdRegenerateSnapshotManagerCredentials(
  args: InferRequestType<
    (typeof client.regions)[':id']['regenerate-snapshot-manager-credentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.regions[':id']['regenerate-snapshot-manager-credentials'].$post(args, options),
  )
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$get(undefined, options))
}

export async function getUsersAccountProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.users['account-providers'].$get(undefined, options))
}

export async function postUsersLinkedAccounts(
  args: InferRequestType<(typeof client.users)['linked-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['linked-accounts'].$post(args, options))
}

export async function deleteUsersLinkedAccountsProviderProviderUserId(
  args: InferRequestType<
    (typeof client.users)['linked-accounts'][':provider'][':providerUserId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users['linked-accounts'][':provider'][':providerUserId'].$delete(args, options),
  )
}

export async function postUsersMfaSmsEnroll(options?: ClientRequestOptions) {
  return await parseResponse(client.users.mfa.sms.enroll.$post(undefined, options))
}

export async function getSharedRegions(options?: ClientRequestOptions) {
  return await parseResponse(client['shared-regions'].$get(undefined, options))
}

export async function getSandbox(
  args: InferRequestType<typeof client.sandbox.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.$get(args, options))
}

export async function postSandbox(
  args: InferRequestType<typeof client.sandbox.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.$post(args, options))
}

export async function getSandboxPaginated(
  args: InferRequestType<typeof client.sandbox.paginated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.paginated.$get(args, options))
}

export async function getSandboxForRunner(
  args: InferRequestType<(typeof client.sandbox)['for-runner']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox['for-runner'].$get(args, options))
}

export async function getSandboxSandboxIdOrName(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].$get(args, options))
}

export async function deleteSandboxSandboxIdOrName(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].$delete(args, options))
}

export async function postSandboxSandboxIdOrNameRecover(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].recover.$post(args, options))
}

export async function postSandboxSandboxIdOrNameStart(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].start.$post(args, options))
}

export async function postSandboxSandboxIdOrNameStop(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].stop.$post(args, options))
}

export async function postSandboxSandboxIdOrNamePause(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].pause.$post(args, options))
}

export async function postSandboxSandboxIdOrNameResize(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].resize.$post(args, options))
}

export async function putSandboxSandboxIdOrNameLabels(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].labels.$put(args, options))
}

export async function putSandboxSandboxIdState(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['state']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxId'].state.$put(args, options))
}

export async function postSandboxSandboxIdOrNameBackup(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].backup.$post(args, options))
}

export async function postSandboxSandboxIdOrNameSnapshot(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].snapshot.$post(args, options))
}

export async function postSandboxSandboxIdOrNameFork(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].fork.$post(args, options))
}

export async function getSandboxSandboxIdOrNameForks(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].forks.$get(args, options))
}

export async function getSandboxSandboxIdOrNameParent(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].parent.$get(args, options))
}

export async function getSandboxSandboxIdOrNameAncestors(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].ancestors.$get(args, options))
}

export async function postSandboxSandboxIdOrNamePublicIsPublic(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['public'][':isPublic']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxIdOrName'].public[':isPublic'].$post(args, options),
  )
}

export async function postSandboxSandboxIdLastActivity(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxId']['last-activity'].$post(args, options))
}

export async function postSandboxSandboxIdOrNameAutostopInterval(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['autostop'][':interval']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxIdOrName'].autostop[':interval'].$post(args, options),
  )
}

export async function postSandboxSandboxIdOrNameAutoarchiveInterval(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['autoarchive'][':interval']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxIdOrName'].autoarchive[':interval'].$post(args, options),
  )
}

export async function postSandboxSandboxIdOrNameAutodeleteInterval(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['autodelete'][':interval']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxIdOrName'].autodelete[':interval'].$post(args, options),
  )
}

export async function postSandboxSandboxIdOrNameNetworkSettings(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['network-settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxIdOrName']['network-settings'].$post(args, options),
  )
}

export async function postSandboxSandboxIdOrNameArchive(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName'].archive.$post(args, options))
}

export async function getSandboxSandboxIdOrNamePortsPortPreviewUrl(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxIdOrName'].ports[':port']['preview-url'].$get(args, options),
  )
}

export async function getSandboxSandboxIdOrNamePortsPortSignedPreviewUrl(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxIdOrName'].ports[':port']['signed-preview-url'].$get(args, options),
  )
}

export async function postSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpire(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url'][':token']['expire']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxIdOrName'].ports[':port']['signed-preview-url'][':token'].expire.$post(
      args,
      options,
    ),
  )
}

export async function getSandboxSandboxIdOrNameBuildLogs(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName']['build-logs'].$get(args, options))
}

export async function getSandboxSandboxIdOrNameBuildLogsUrl(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxIdOrName']['build-logs-url'].$get(args, options),
  )
}

export async function postSandboxSandboxIdOrNameSshAccess(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxIdOrName']['ssh-access'].$post(args, options))
}

export async function deleteSandboxSandboxIdOrNameSshAccess(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxIdOrName']['ssh-access'].$delete(args, options),
  )
}

export async function getSandboxSshAccessValidate(
  args: InferRequestType<(typeof client.sandbox)['ssh-access']['validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox['ssh-access'].validate.$get(args, options))
}

export async function getSandboxSandboxIdToolboxProxyUrl(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxId']['toolbox-proxy-url'].$get(args, options))
}

export async function getSandboxSandboxIdOrganization(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxId'].organization.$get(args, options))
}

export async function getSandboxSandboxIdRegionQuota(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxId']['region-quota'].$get(args, options))
}

export async function getRunners(
  args: InferRequestType<typeof client.runners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.runners.$get(args, options))
}

export async function postRunners(
  args: InferRequestType<typeof client.runners.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.runners.$post(args, options))
}

export async function getRunnersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.runners.me.$get(undefined, options))
}

export async function getRunnersBySandboxSandboxId(
  args: InferRequestType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.runners['by-sandbox'][':sandboxId'].$get(args, options))
}

export async function getRunnersBySnapshotRef(
  args: InferRequestType<(typeof client.runners)['by-snapshot-ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.runners['by-snapshot-ref'].$get(args, options))
}

export async function getRunnersId(
  args: InferRequestType<(typeof client.runners)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.runners[':id'].$get(args, options))
}

export async function deleteRunnersId(
  args: InferRequestType<(typeof client.runners)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.runners[':id'].$delete(args, options))
}

export async function getRunnersIdFull(
  args: InferRequestType<(typeof client.runners)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.runners[':id'].full.$get(args, options))
}

export async function patchRunnersIdScheduling(
  args: InferRequestType<(typeof client.runners)[':id']['scheduling']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.runners[':id'].scheduling.$patch(args, options))
}

export async function patchRunnersIdDraining(
  args: InferRequestType<(typeof client.runners)[':id']['draining']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.runners[':id'].draining.$patch(args, options))
}

export async function postRunnersHealthcheck(
  args: InferRequestType<typeof client.runners.healthcheck.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.runners.healthcheck.$post(args, options))
}

export async function getToolboxSandboxIdToolboxProjectDir(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox['project-dir'].$get(args, options),
  )
}

export async function getToolboxSandboxIdToolboxUserHomeDir(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox['user-home-dir'].$get(args, options),
  )
}

export async function getToolboxSandboxIdToolboxWorkDir(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox['work-dir'].$get(args, options))
}

export async function getToolboxSandboxIdToolboxFiles(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.files.$get(args, options))
}

export async function deleteToolboxSandboxIdToolboxFiles(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.files.$delete(args, options))
}

export async function getToolboxSandboxIdToolboxFilesDownload(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.files.download.$get(args, options),
  )
}

export async function postToolboxSandboxIdToolboxFilesBulkDownload(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.files['bulk-download'].$post(args, options),
  )
}

export async function getToolboxSandboxIdToolboxFilesFind(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.files.find.$get(args, options))
}

export async function postToolboxSandboxIdToolboxFilesFolder(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['folder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.files.folder.$post(args, options))
}

export async function getToolboxSandboxIdToolboxFilesInfo(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.files.info.$get(args, options))
}

export async function postToolboxSandboxIdToolboxFilesMove(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.files.move.$post(args, options))
}

export async function postToolboxSandboxIdToolboxFilesPermissions(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['permissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.files.permissions.$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxFilesReplace(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['replace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.files.replace.$post(args, options),
  )
}

export async function getToolboxSandboxIdToolboxFilesSearch(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.files.search.$get(args, options))
}

export async function postToolboxSandboxIdToolboxFilesUpload(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.files.upload.$post(args, options))
}

export async function postToolboxSandboxIdToolboxFilesBulkUpload(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.files['bulk-upload'].$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxGitAdd(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.git.add.$post(args, options))
}

export async function getToolboxSandboxIdToolboxGitBranches(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.git.branches.$get(args, options))
}

export async function postToolboxSandboxIdToolboxGitBranches(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.git.branches.$post(args, options))
}

export async function deleteToolboxSandboxIdToolboxGitBranches(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.git.branches.$delete(args, options),
  )
}

export async function postToolboxSandboxIdToolboxGitClone(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.git.clone.$post(args, options))
}

export async function postToolboxSandboxIdToolboxGitCommit(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['commit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.git.commit.$post(args, options))
}

export async function getToolboxSandboxIdToolboxGitHistory(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.git.history.$get(args, options))
}

export async function postToolboxSandboxIdToolboxGitPull(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['pull']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.git.pull.$post(args, options))
}

export async function postToolboxSandboxIdToolboxGitPush(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.git.push.$post(args, options))
}

export async function postToolboxSandboxIdToolboxGitCheckout(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['checkout']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.git.checkout.$post(args, options))
}

export async function getToolboxSandboxIdToolboxGitStatus(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.git.status.$get(args, options))
}

export async function postToolboxSandboxIdToolboxProcessExecute(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['execute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.execute.$post(args, options),
  )
}

export async function getToolboxSandboxIdToolboxProcessSession(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.session.$get(args, options),
  )
}

export async function postToolboxSandboxIdToolboxProcessSession(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.session.$post(args, options),
  )
}

export async function getToolboxSandboxIdToolboxProcessSessionSessionId(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].$get(args, options),
  )
}

export async function deleteToolboxSandboxIdToolboxProcessSessionSessionId(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].$delete(args, options),
  )
}

export async function postToolboxSandboxIdToolboxProcessSessionSessionIdExec(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['exec']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].exec.$post(args, options),
  )
}

export async function getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandId(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[':commandId'].$get(
      args,
      options,
    ),
  )
}

export async function getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogs(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
      ':commandId'
    ].logs.$get(args, options),
  )
}

export async function getToolboxSandboxIdToolboxProcessPty(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.process.pty.$get(args, options))
}

export async function postToolboxSandboxIdToolboxProcessPty(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.process.pty.$post(args, options))
}

export async function getToolboxSandboxIdToolboxProcessPtySessionId(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].$get(args, options),
  )
}

export async function deleteToolboxSandboxIdToolboxProcessPtySessionId(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].$delete(args, options),
  )
}

export async function postToolboxSandboxIdToolboxProcessPtySessionIdResize(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['resize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].resize.$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxLspCompletions(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['completions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.lsp.completions.$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxLspDidClose(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-close']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.lsp['did-close'].$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxLspDidOpen(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-open']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.lsp['did-open'].$post(args, options),
  )
}

export async function getToolboxSandboxIdToolboxLspDocumentSymbols(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.lsp['document-symbols'].$get(args, options),
  )
}

export async function postToolboxSandboxIdToolboxLspStart(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.lsp.start.$post(args, options))
}

export async function postToolboxSandboxIdToolboxLspStop(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.toolbox[':sandboxId'].toolbox.lsp.stop.$post(args, options))
}

export async function getToolboxSandboxIdToolboxLspWorkspaceSymbols(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.lsp['workspace-symbols'].$get(args, options),
  )
}

export async function postToolboxSandboxIdToolboxComputeruseStart(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.start.$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxComputeruseStop(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.stop.$post(args, options),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseStatus(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.status.$get(args, options),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatus(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].status.$get(
      args,
      options,
    ),
  )
}

export async function postToolboxSandboxIdToolboxComputeruseProcessProcessNameRestart(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].restart.$post(
      args,
      options,
    ),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogs(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].logs.$get(
      args,
      options,
    ),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrors(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].errors.$get(
      args,
      options,
    ),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseMousePosition(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.mouse.position.$get(args, options),
  )
}

export async function postToolboxSandboxIdToolboxComputeruseMouseMove(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.mouse.move.$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxComputeruseMouseClick(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['click']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.mouse.click.$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxComputeruseMouseDrag(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['drag']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.mouse.drag.$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxComputeruseMouseScroll(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['scroll']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.mouse.scroll.$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxComputeruseKeyboardType(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.keyboard.type.$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxComputeruseKeyboardKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.keyboard.key.$post(args, options),
  )
}

export async function postToolboxSandboxIdToolboxComputeruseKeyboardHotkey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['hotkey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.keyboard.hotkey.$post(args, options),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseScreenshot(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.$get(args, options),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseScreenshotRegion(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.$get(args, options),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseScreenshotCompressed(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.compressed.$get(args, options),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressed(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.compressed.$get(
      args,
      options,
    ),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseDisplayInfo(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.display.info.$get(args, options),
  )
}

export async function getToolboxSandboxIdToolboxComputeruseDisplayWindows(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolbox[':sandboxId'].toolbox.computeruse.display.windows.$get(args, options),
  )
}

export async function getSnapshots(
  args: InferRequestType<typeof client.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots.$get(args, options))
}

export async function postSnapshots(
  args: InferRequestType<typeof client.snapshots.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots.$post(args, options))
}

export async function getSnapshotsId(
  args: InferRequestType<(typeof client.snapshots)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':id'].$get(args, options))
}

export async function deleteSnapshotsId(
  args: InferRequestType<(typeof client.snapshots)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':id'].$delete(args, options))
}

export async function getSnapshotsIdBuildLogs(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':id']['build-logs'].$get(args, options))
}

export async function getSnapshotsIdBuildLogsUrl(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':id']['build-logs-url'].$get(args, options))
}

export async function postSnapshotsIdActivate(
  args: InferRequestType<(typeof client.snapshots)[':id']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':id'].activate.$post(args, options))
}

export async function postSnapshotsIdDeactivate(
  args: InferRequestType<(typeof client.snapshots)[':id']['deactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':id'].deactivate.$post(args, options))
}

export async function getPreviewSandboxIdPublic(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['public']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.preview[':sandboxId'].public.$get(args, options))
}

export async function getPreviewSandboxIdValidateAuthToken(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preview[':sandboxId'].validate[':authToken'].$get(args, options),
  )
}

export async function getPreviewSandboxIdAccess(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.preview[':sandboxId'].access.$get(args, options))
}

export async function getPreviewSignedPreviewTokenPortSandboxId(
  args: InferRequestType<
    (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preview[':signedPreviewToken'][':port']['sandbox-id'].$get(args, options),
  )
}

export async function getVolumes(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$get(args, options))
}

export async function postVolumes(
  args: InferRequestType<typeof client.volumes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$post(args, options))
}

export async function getVolumesVolumeId(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeId'].$get(args, options))
}

export async function deleteVolumesVolumeId(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeId'].$delete(args, options))
}

export async function getVolumesByNameName(
  args: InferRequestType<(typeof client.volumes)['by-name'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes['by-name'][':name'].$get(args, options))
}

export async function getJobs(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$get(args, options))
}

export async function getJobsPoll(
  args: InferRequestType<typeof client.jobs.poll.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.poll.$get(args, options))
}

export async function getJobsJobId(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].$get(args, options))
}

export async function postJobsJobIdStatus(
  args: InferRequestType<(typeof client.jobs)[':jobId']['status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].status.$post(args, options))
}

export async function getDockerRegistry(
  args: InferRequestType<(typeof client)['docker-registry']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['docker-registry'].$get(args, options))
}

export async function postDockerRegistry(
  args: InferRequestType<(typeof client)['docker-registry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['docker-registry'].$post(args, options))
}

export async function getDockerRegistryRegistryPushAccess(
  args: InferRequestType<(typeof client)['docker-registry']['registry-push-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['docker-registry']['registry-push-access'].$get(args, options))
}

export async function getDockerRegistryId(
  args: InferRequestType<(typeof client)['docker-registry'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['docker-registry'][':id'].$get(args, options))
}

export async function deleteDockerRegistryId(
  args: InferRequestType<(typeof client)['docker-registry'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['docker-registry'][':id'].$delete(args, options))
}

export async function patchDockerRegistryId(
  args: InferRequestType<(typeof client)['docker-registry'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['docker-registry'][':id'].$patch(args, options))
}

export async function getAdminRunners(
  args: InferRequestType<typeof client.admin.runners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.runners.$get(args, options))
}

export async function postAdminRunners(
  args: InferRequestType<typeof client.admin.runners.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.runners.$post(args, options))
}

export async function getAdminRunnersId(
  args: InferRequestType<(typeof client.admin.runners)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.runners[':id'].$get(args, options))
}

export async function deleteAdminRunnersId(
  args: InferRequestType<(typeof client.admin.runners)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.runners[':id'].$delete(args, options))
}

export async function patchAdminRunnersIdScheduling(
  args: InferRequestType<(typeof client.admin.runners)[':id']['scheduling']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.runners[':id'].scheduling.$patch(args, options))
}

export async function postAdminSandboxSandboxIdRecover(
  args: InferRequestType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.sandbox[':sandboxId'].recover.$post(args, options))
}

export async function getAdminUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.users.$get(undefined, options))
}

export async function postAdminUsers(
  args: InferRequestType<typeof client.admin.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.$post(args, options))
}

export async function postAdminUsersIdRegenerateKeyPair(
  args: InferRequestType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id']['regenerate-key-pair'].$post(args, options))
}

export async function getAdminUsersId(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':id'].$get(args, options))
}

export async function postAdminWebhooksOrganizationsOrganizationIdSend(
  args: InferRequestType<
    (typeof client.admin.webhooks.organizations)[':organizationId']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.webhooks.organizations[':organizationId'].send.$post(args, options),
  )
}

export async function getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttempts(
  args: InferRequestType<
    (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.webhooks.organizations[':organizationId'].messages[':messageId'].attempts.$get(
      args,
      options,
    ),
  )
}

export async function getAdminWebhooksStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.webhooks.status.$get(undefined, options))
}

export async function postAdminWebhooksOrganizationsOrganizationIdInitialize(
  args: InferRequestType<
    (typeof client.admin.webhooks.organizations)[':organizationId']['initialize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.webhooks.organizations[':organizationId'].initialize.$post(args, options),
  )
}

export async function postAdminDockerRegistryIdSetDefault(
  args: InferRequestType<(typeof client.admin)['docker-registry'][':id']['set-default']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin['docker-registry'][':id']['set-default'].$post(args, options),
  )
}

export async function getAdminSnapshotsCanCleanupImage(
  args: InferRequestType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.snapshots['can-cleanup-image'].$get(args, options))
}

export async function patchAdminSnapshotsIdGeneral(
  args: InferRequestType<(typeof client.admin.snapshots)[':id']['general']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.snapshots[':id'].general.$patch(args, options))
}

export async function getAdminAudit(
  args: InferRequestType<typeof client.admin.audit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.audit.$get(args, options))
}

export async function postAdminOrganizationsOrganizationIdQuotaRegionId(
  args: InferRequestType<
    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.organizations[':organizationId'].quota[':regionId'].$post(args, options),
  )
}

export async function patchAdminOrganizationsOrganizationIdQuotaRegionId(
  args: InferRequestType<
    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.organizations[':organizationId'].quota[':regionId'].$patch(args, options),
  )
}

export async function getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClass(
  args: InferRequestType<
    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.organizations[':organizationId'].quota[':regionId'][':sandboxClass'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClass(
  args: InferRequestType<
    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.admin.organizations[':organizationId'].quota[':regionId'][':sandboxClass'].$delete(
      args,
      options,
    ),
  )
}

export async function postWebhooksOrganizationsOrganizationIdAppPortalAccess(
  args: InferRequestType<
    (typeof client.webhooks.organizations)[':organizationId']['app-portal-access']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks.organizations[':organizationId']['app-portal-access'].$post(args, options),
  )
}

export async function getWebhooksOrganizationsOrganizationIdInitializationStatus(
  args: InferRequestType<
    (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks.organizations[':organizationId']['initialization-status'].$get(args, options),
  )
}

export async function postWebhooksOrganizationsOrganizationIdInitialize(
  args: InferRequestType<
    (typeof client.webhooks.organizations)[':organizationId']['initialize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks.organizations[':organizationId'].initialize.$post(args, options),
  )
}

export async function postWebhooksOrganizationsOrganizationIdRefreshEndpoints(
  args: InferRequestType<
    (typeof client.webhooks.organizations)[':organizationId']['refresh-endpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks.organizations[':organizationId']['refresh-endpoints'].$post(args, options),
  )
}

export async function getAuditOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.audit.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.organizations[':organizationId'].$get(args, options))
}

export async function getObjectStoragePushAccess(
  args: InferRequestType<(typeof client)['object-storage']['push-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['object-storage']['push-access'].$get(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getHealthReady(options?: ClientRequestOptions) {
  return await parseResponse(client.health.ready.$get(undefined, options))
}

export async function getSandboxSandboxIdTelemetryLogs(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxId'].telemetry.logs.$get(args, options))
}

export async function getSandboxSandboxIdTelemetryTraces(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxId'].telemetry.traces.$get(args, options))
}

export async function getSandboxSandboxIdTelemetryTracesTraceId(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandbox[':sandboxId'].telemetry.traces[':traceId'].$get(args, options),
  )
}

export async function getSandboxSandboxIdTelemetryMetrics(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox[':sandboxId'].telemetry.metrics.$get(args, options))
}
