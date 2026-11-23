import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1BranchesBranchIdOrRef(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_id_or_ref'].$get(args, options))
}

export async function deleteV1BranchesBranchIdOrRef(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_id_or_ref'].$delete(args, options))
}

export async function patchV1BranchesBranchIdOrRef(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_id_or_ref'].$patch(args, options))
}

export async function postV1BranchesBranchIdOrRefPush(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_id_or_ref'].push.$post(args, options))
}

export async function postV1BranchesBranchIdOrRefMerge(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_id_or_ref'].merge.$post(args, options))
}

export async function postV1BranchesBranchIdOrRefReset(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_id_or_ref'].reset.$post(args, options))
}

export async function postV1BranchesBranchIdOrRefRestore(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_id_or_ref'].restore.$post(args, options))
}

export async function getV1BranchesBranchIdOrRefDiff(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_id_or_ref'].diff.$get(args, options))
}

export async function getV1Projects(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.projects.$get(undefined, options))
}

export async function postV1Projects(
  args: InferRequestType<typeof client.v1.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects.$post(args, options))
}

export async function getV1ProjectsAvailableRegions(
  args: InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects['available-regions'].$get(args, options))
}

export async function getV1Organizations(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.organizations.$get(undefined, options))
}

export async function postV1Organizations(
  args: InferRequestType<typeof client.v1.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.$post(args, options))
}

export async function getV1OauthAuthorize(
  args: InferRequestType<typeof client.v1.oauth.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.authorize.$get(args, options))
}

export async function postV1OauthToken(
  args: InferRequestType<typeof client.v1.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.token.$post(args, options))
}

export async function postV1OauthRevoke(
  args: InferRequestType<typeof client.v1.oauth.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.revoke.$post(args, options))
}

export async function getV1OauthAuthorizeProjectClaim(
  args: InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.authorize['project-claim'].$get(args, options))
}

export async function getV1Snippets(
  args: InferRequestType<typeof client.v1.snippets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.snippets.$get(args, options))
}

export async function getV1SnippetsId(
  args: InferRequestType<(typeof client.v1.snippets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.snippets[':id'].$get(args, options))
}

export async function getV1Profile(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.profile.$get(undefined, options))
}

export async function getV1ProjectsRefActions(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].actions.$get(args, options))
}

export async function headV1ProjectsRefActions(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].actions.$head(args, options))
}

export async function getV1ProjectsRefActionsRunId(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].actions[':run_id'].$get(args, options))
}

export async function patchV1ProjectsRefActionsRunIdStatus(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['actions'][':run_id']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].actions[':run_id'].status.$patch(args, options),
  )
}

export async function getV1ProjectsRefActionsRunIdLogs(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].actions[':run_id'].logs.$get(args, options))
}

export async function getV1ProjectsRefApiKeys(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['api-keys'].$get(args, options))
}

export async function postV1ProjectsRefApiKeys(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['api-keys'].$post(args, options))
}

export async function getV1ProjectsRefApiKeysLegacy(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['api-keys'].legacy.$get(args, options))
}

export async function putV1ProjectsRefApiKeysLegacy(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['api-keys'].legacy.$put(args, options))
}

export async function getV1ProjectsRefApiKeysId(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['api-keys'][':id'].$get(args, options))
}

export async function deleteV1ProjectsRefApiKeysId(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['api-keys'][':id'].$delete(args, options))
}

export async function patchV1ProjectsRefApiKeysId(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['api-keys'][':id'].$patch(args, options))
}

export async function getV1ProjectsRefBranches(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].branches.$get(args, options))
}

export async function postV1ProjectsRefBranches(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].branches.$post(args, options))
}

export async function deleteV1ProjectsRefBranches(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].branches.$delete(args, options))
}

export async function getV1ProjectsRefBranchesName(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].branches[':name'].$get(args, options))
}

export async function getV1ProjectsRefCustomHostname(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['custom-hostname'].$get(args, options))
}

export async function deleteV1ProjectsRefCustomHostname(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['custom-hostname'].$delete(args, options))
}

export async function postV1ProjectsRefCustomHostnameInitialize(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['custom-hostname']['initialize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['custom-hostname'].initialize.$post(args, options),
  )
}

export async function postV1ProjectsRefCustomHostnameReverify(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['custom-hostname']['reverify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['custom-hostname'].reverify.$post(args, options),
  )
}

export async function postV1ProjectsRefCustomHostnameActivate(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['custom-hostname']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['custom-hostname'].activate.$post(args, options),
  )
}

export async function getV1ProjectsRefJitAccess(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['jit-access'].$get(args, options))
}

export async function putV1ProjectsRefJitAccess(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['jit-access'].$put(args, options))
}

export async function postV1ProjectsRefNetworkBansRetrieve(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['network-bans'].retrieve.$post(args, options),
  )
}

export async function postV1ProjectsRefNetworkBansRetrieveEnriched(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['enriched']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['network-bans'].retrieve.enriched.$post(args, options),
  )
}

export async function deleteV1ProjectsRefNetworkBans(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-bans']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['network-bans'].$delete(args, options))
}

export async function getV1ProjectsRefNetworkRestrictions(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['network-restrictions'].$get(args, options))
}

export async function patchV1ProjectsRefNetworkRestrictions(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['network-restrictions'].$patch(args, options),
  )
}

export async function postV1ProjectsRefNetworkRestrictionsApply(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['network-restrictions']['apply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['network-restrictions'].apply.$post(args, options),
  )
}

export async function postV1ProjectsRefNetworkRestrictionsReview(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['network-restrictions']['review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['network-restrictions'].review.$post(args, options),
  )
}

export async function getV1ProjectsRefPgsodium(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].pgsodium.$get(args, options))
}

export async function putV1ProjectsRefPgsodium(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].pgsodium.$put(args, options))
}

export async function getV1ProjectsRefPostgrest(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].postgrest.$get(args, options))
}

export async function patchV1ProjectsRefPostgrest(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].postgrest.$patch(args, options))
}

export async function getV1ProjectsRef(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].$get(args, options))
}

export async function deleteV1ProjectsRef(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].$delete(args, options))
}

export async function patchV1ProjectsRef(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].$patch(args, options))
}

export async function getV1ProjectsRefSecrets(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].secrets.$get(args, options))
}

export async function postV1ProjectsRefSecrets(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].secrets.$post(args, options))
}

export async function deleteV1ProjectsRefSecrets(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].secrets.$delete(args, options))
}

export async function getV1ProjectsRefSslEnforcement(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['ssl-enforcement'].$get(args, options))
}

export async function putV1ProjectsRefSslEnforcement(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['ssl-enforcement'].$put(args, options))
}

export async function getV1ProjectsRefTypesTypescript(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].types.typescript.$get(args, options))
}

export async function getV1ProjectsRefVanitySubdomain(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['vanity-subdomain'].$get(args, options))
}

export async function deleteV1ProjectsRefVanitySubdomain(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['vanity-subdomain'].$delete(args, options))
}

export async function postV1ProjectsRefVanitySubdomainCheckAvailability(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['vanity-subdomain']['check-availability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['vanity-subdomain']['check-availability'].$post(args, options),
  )
}

export async function postV1ProjectsRefVanitySubdomainActivate(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['vanity-subdomain']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['vanity-subdomain'].activate.$post(args, options),
  )
}

export async function postV1ProjectsRefUpgrade(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].upgrade.$post(args, options))
}

export async function getV1ProjectsRefUpgradeEligibility(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].upgrade.eligibility.$get(args, options))
}

export async function getV1ProjectsRefUpgradeStatus(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].upgrade.status.$get(args, options))
}

export async function getV1ProjectsRefReadonly(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].readonly.$get(args, options))
}

export async function postV1ProjectsRefReadonlyTemporaryDisable(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['readonly']['temporary-disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].readonly['temporary-disable'].$post(args, options),
  )
}

export async function postV1ProjectsRefReadReplicasSetup(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['read-replicas'].setup.$post(args, options))
}

export async function postV1ProjectsRefReadReplicasRemove(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['read-replicas']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref']['read-replicas'].remove.$post(args, options),
  )
}

export async function getV1ProjectsRefHealth(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].health.$get(args, options))
}

export async function getV1ProjectsRefConfigAuthSigningKeysLegacy(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['signing-keys'].legacy.$get(args, options),
  )
}

export async function postV1ProjectsRefConfigAuthSigningKeysLegacy(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['signing-keys'].legacy.$post(args, options),
  )
}

export async function getV1ProjectsRefConfigAuthSigningKeys(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['signing-keys'].$get(args, options),
  )
}

export async function postV1ProjectsRefConfigAuthSigningKeys(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['signing-keys'].$post(args, options),
  )
}

export async function getV1ProjectsRefConfigAuthSigningKeysId(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$get(args, options),
  )
}

export async function deleteV1ProjectsRefConfigAuthSigningKeysId(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$delete(args, options),
  )
}

export async function patchV1ProjectsRefConfigAuthSigningKeysId(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$patch(args, options),
  )
}

export async function getV1ProjectsRefConfigAuth(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.auth.$get(args, options))
}

export async function patchV1ProjectsRefConfigAuth(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.auth.$patch(args, options))
}

export async function getV1ProjectsRefConfigAuthThirdPartyAuth(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['third-party-auth'].$get(args, options),
  )
}

export async function postV1ProjectsRefConfigAuthThirdPartyAuth(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['third-party-auth'].$post(args, options),
  )
}

export async function getV1ProjectsRefConfigAuthThirdPartyAuthTpaId(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['third-party-auth'][':tpa_id'].$get(args, options),
  )
}

export async function deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaId(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth['third-party-auth'][':tpa_id'].$delete(args, options),
  )
}

export async function postV1ProjectsRefPause(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].pause.$post(args, options))
}

export async function postV1ProjectsRefRestart(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restart']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].restart.$post(args, options))
}

export async function getV1ProjectsRefRestore(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].restore.$get(args, options))
}

export async function postV1ProjectsRefRestore(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].restore.$post(args, options))
}

export async function postV1ProjectsRefRestoreCancel(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].restore.cancel.$post(args, options))
}

export async function getV1ProjectsRefBillingAddons(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].billing.addons.$get(args, options))
}

export async function patchV1ProjectsRefBillingAddons(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].billing.addons.$patch(args, options))
}

export async function deleteV1ProjectsRefBillingAddonsAddonVariant(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['billing']['addons'][':addon_variant']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].billing.addons[':addon_variant'].$delete(args, options),
  )
}

export async function getV1ProjectsRefClaimToken(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['claim-token'].$get(args, options))
}

export async function postV1ProjectsRefClaimToken(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['claim-token'].$post(args, options))
}

export async function deleteV1ProjectsRefClaimToken(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref']['claim-token'].$delete(args, options))
}

export async function getV1ProjectsRefAdvisorsPerformance(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].advisors.performance.$get(args, options))
}

export async function getV1ProjectsRefAdvisorsSecurity(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].advisors.security.$get(args, options))
}

export async function getV1ProjectsRefAnalyticsEndpointsLogsAll(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].analytics.endpoints['logs.all'].$get(args, options),
  )
}

export async function getV1ProjectsRefAnalyticsEndpointsLogs(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].analytics.endpoints.logs.$get(args, options),
  )
}

export async function postV1ProjectsRefAnalyticsEndpointsLogs(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].analytics.endpoints.logs.$post(args, options),
  )
}

export async function getV1ProjectsRefAnalyticsEndpointsUsageApiCounts(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].analytics.endpoints['usage.api-counts'].$get(args, options),
  )
}

export async function getV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCount(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].analytics.endpoints['usage.api-requests-count'].$get(args, options),
  )
}

export async function getV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStats(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].analytics.endpoints['functions.combined-stats'].$get(args, options),
  )
}

export async function getV1ProjectsRefAnalyticsEndpointsMetrics(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].analytics.endpoints.metrics.$get(args, options),
  )
}

export async function postV1ProjectsRefCliLoginRole(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].cli['login-role'].$post(args, options))
}

export async function deleteV1ProjectsRefCliLoginRole(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].cli['login-role'].$delete(args, options))
}

export async function getV1ProjectsRefDatabaseMigrations(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.migrations.$get(args, options))
}

export async function putV1ProjectsRefDatabaseMigrations(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.migrations.$put(args, options))
}

export async function postV1ProjectsRefDatabaseMigrations(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.migrations.$post(args, options))
}

export async function deleteV1ProjectsRefDatabaseMigrations(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.migrations.$delete(args, options))
}

export async function getV1ProjectsRefDatabaseMigrationsVersion(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.migrations[':version'].$get(args, options),
  )
}

export async function patchV1ProjectsRefDatabaseMigrationsVersion(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.migrations[':version'].$patch(args, options),
  )
}

export async function postV1ProjectsRefDatabaseQuery(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.query.$post(args, options))
}

export async function postV1ProjectsRefDatabaseQueryReadOnly(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['query']['read-only']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.query['read-only'].$post(args, options),
  )
}

export async function postV1ProjectsRefDatabaseWebhooksEnable(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['webhooks']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.webhooks.enable.$post(args, options),
  )
}

export async function getV1ProjectsRefDatabaseContext(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.context.$get(args, options))
}

export async function patchV1ProjectsRefDatabasePassword(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['password']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.password.$patch(args, options))
}

export async function getV1ProjectsRefDatabaseJit(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.jit.$get(args, options))
}

export async function putV1ProjectsRefDatabaseJit(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.jit.$put(args, options))
}

export async function postV1ProjectsRefDatabaseJit(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.jit.$post(args, options))
}

export async function getV1ProjectsRefDatabaseJitList(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.jit.list.$get(args, options))
}

export async function postV1ProjectsRefDatabaseJitInvite(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.jit.invite.$post(args, options))
}

export async function postV1ProjectsRefDatabaseJitInviteAccept(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['jit']['invite']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.jit.invite.accept.$post(args, options),
  )
}

export async function deleteV1ProjectsRefDatabaseJitInviteInviteId(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['jit']['invite'][':invite_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.jit.invite[':invite_id'].$delete(args, options),
  )
}

export async function deleteV1ProjectsRefDatabaseJitUserId(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['jit'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.jit[':user_id'].$delete(args, options),
  )
}

export async function getV1ProjectsRefDatabaseOpenapi(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.openapi.$get(args, options))
}

export async function getV1ProjectsRefFunctions(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].functions.$get(args, options))
}

export async function putV1ProjectsRefFunctions(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].functions.$put(args, options))
}

export async function postV1ProjectsRefFunctions(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].functions.$post(args, options))
}

export async function deleteV1ProjectsRefFunctions(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].functions.$delete(args, options))
}

export async function postV1ProjectsRefFunctionsDeploy(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['deploy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].functions.deploy.$post(args, options))
}

export async function getV1ProjectsRefFunctionsFunctionSlug(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].functions[':function_slug'].$get(args, options),
  )
}

export async function deleteV1ProjectsRefFunctionsFunctionSlug(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].functions[':function_slug'].$delete(args, options),
  )
}

export async function patchV1ProjectsRefFunctionsFunctionSlug(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].functions[':function_slug'].$patch(args, options),
  )
}

export async function getV1ProjectsRefFunctionsFunctionSlugBody(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].functions[':function_slug'].body.$get(args, options),
  )
}

export async function getV1ProjectsRefStorageBuckets(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].storage.buckets.$get(args, options))
}

export async function getV1ProjectsRefConfigDisk(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.disk.$get(args, options))
}

export async function postV1ProjectsRefConfigDisk(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.disk.$post(args, options))
}

export async function getV1ProjectsRefConfigDiskUtil(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.disk.util.$get(args, options))
}

export async function getV1ProjectsRefConfigDiskAutoscale(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.disk.autoscale.$get(args, options))
}

export async function getV1ProjectsRefConfigStorage(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.storage.$get(args, options))
}

export async function patchV1ProjectsRefConfigStorage(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.storage.$patch(args, options))
}

export async function getV1ProjectsRefConfigDatabasePgbouncer(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.database.pgbouncer.$get(args, options),
  )
}

export async function getV1ProjectsRefConfigDatabasePooler(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.database.pooler.$get(args, options))
}

export async function patchV1ProjectsRefConfigDatabasePooler(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.database.pooler.$patch(args, options),
  )
}

export async function getV1ProjectsRefConfigDatabasePostgres(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.database.postgres.$get(args, options),
  )
}

export async function putV1ProjectsRefConfigDatabasePostgres(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.database.postgres.$put(args, options),
  )
}

export async function patchV1ProjectsRefConfigDatabasePostgres(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.database.postgres.$patch(args, options),
  )
}

export async function getV1ProjectsRefConfigRealtime(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.realtime.$get(args, options))
}

export async function patchV1ProjectsRefConfigRealtime(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].config.realtime.$patch(args, options))
}

export async function postV1ProjectsRefConfigRealtimeShutdown(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['realtime']['shutdown']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.realtime.shutdown.$post(args, options),
  )
}

export async function getV1ProjectsRefConfigAuthSsoProviders(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth.sso.providers.$get(args, options),
  )
}

export async function postV1ProjectsRefConfigAuthSsoProviders(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth.sso.providers.$post(args, options),
  )
}

export async function getV1ProjectsRefConfigAuthSsoProvidersProviderId(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$get(args, options),
  )
}

export async function putV1ProjectsRefConfigAuthSsoProvidersProviderId(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$put(args, options),
  )
}

export async function deleteV1ProjectsRefConfigAuthSsoProvidersProviderId(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$delete(args, options),
  )
}

export async function getV1ProjectsRefDatabaseBackups(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.backups.$get(args, options))
}

export async function postV1ProjectsRefDatabaseBackupsRestorePitr(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore-pitr']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.backups['restore-pitr'].$post(args, options),
  )
}

export async function getV1ProjectsRefDatabaseBackupsRestorePoint(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.backups['restore-point'].$get(args, options),
  )
}

export async function postV1ProjectsRefDatabaseBackupsRestorePoint(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.backups['restore-point'].$post(args, options),
  )
}

export async function postV1ProjectsRefDatabaseBackupsRestore(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.backups.restore.$post(args, options),
  )
}

export async function getV1ProjectsRefDatabaseBackupsSchedule(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.backups.schedule.$get(args, options),
  )
}

export async function patchV1ProjectsRefDatabaseBackupsSchedule(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':ref'].database.backups.schedule.$patch(args, options),
  )
}

export async function postV1ProjectsRefDatabaseBackupsUndo(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['undo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':ref'].database.backups.undo.$post(args, options))
}

export async function getV1OrganizationsSlugEntitlements(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':slug'].entitlements.$get(args, options))
}

export async function getV1OrganizationsSlugMembers(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':slug'].members.$get(args, options))
}

export async function getV1OrganizationsSlug(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':slug'].$get(args, options))
}

export async function getV1OrganizationsSlugProjectClaimToken(
  args: InferRequestType<
    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':slug']['project-claim'][':token'].$get(args, options),
  )
}

export async function postV1OrganizationsSlugProjectClaimToken(
  args: InferRequestType<
    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':slug']['project-claim'][':token'].$post(args, options),
  )
}

export async function getV1OrganizationsSlugProjects(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':slug'].projects.$get(args, options))
}
