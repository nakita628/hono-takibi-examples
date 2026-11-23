import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAuthTokenAccessorsIndex(
  args: InferRequestType<typeof client.auth.token.accessors.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.accessors.index.$get(args, options))
}

export async function postAuthTokenCreate(
  args: InferRequestType<typeof client.auth.token.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.create.$post(args, options))
}

export async function postAuthTokenCreateOrphan(
  args: InferRequestType<(typeof client.auth.token)['create-orphan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token['create-orphan'].$post(args, options))
}

export async function postAuthTokenCreateRoleName(
  args: InferRequestType<(typeof client.auth.token.create)[':role_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.create[':role_name'].$post(args, options))
}

export async function getAuthTokenLookup(
  args: InferRequestType<typeof client.auth.token.lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.lookup.$get(args, options))
}

export async function postAuthTokenLookup(
  args: InferRequestType<typeof client.auth.token.lookup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.lookup.$post(args, options))
}

export async function postAuthTokenLookupAccessor(
  args: InferRequestType<(typeof client.auth.token)['lookup-accessor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token['lookup-accessor'].$post(args, options))
}

export async function getAuthTokenLookupSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.token['lookup-self'].$get(undefined, options))
}

export async function postAuthTokenLookupSelf(
  args: InferRequestType<(typeof client.auth.token)['lookup-self']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token['lookup-self'].$post(args, options))
}

export async function postAuthTokenRenew(
  args: InferRequestType<typeof client.auth.token.renew.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.renew.$post(args, options))
}

export async function postAuthTokenRenewAccessor(
  args: InferRequestType<(typeof client.auth.token)['renew-accessor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token['renew-accessor'].$post(args, options))
}

export async function postAuthTokenRenewSelf(
  args: InferRequestType<(typeof client.auth.token)['renew-self']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token['renew-self'].$post(args, options))
}

export async function postAuthTokenRevoke(
  args: InferRequestType<typeof client.auth.token.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.revoke.$post(args, options))
}

export async function postAuthTokenRevokeAccessor(
  args: InferRequestType<(typeof client.auth.token)['revoke-accessor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token['revoke-accessor'].$post(args, options))
}

export async function postAuthTokenRevokeOrphan(
  args: InferRequestType<(typeof client.auth.token)['revoke-orphan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token['revoke-orphan'].$post(args, options))
}

export async function postAuthTokenRevokeSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.token['revoke-self'].$post(undefined, options))
}

export async function getAuthTokenRolesIndex(
  args: InferRequestType<typeof client.auth.token.roles.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.roles.index.$get(args, options))
}

export async function getAuthTokenRolesRoleName(
  args: InferRequestType<(typeof client.auth.token.roles)[':role_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.roles[':role_name'].$get(args, options))
}

export async function postAuthTokenRolesRoleName(
  args: InferRequestType<(typeof client.auth.token.roles)[':role_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.roles[':role_name'].$post(args, options))
}

export async function deleteAuthTokenRolesRoleName(
  args: InferRequestType<(typeof client.auth.token.roles)[':role_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.roles[':role_name'].$delete(args, options))
}

export async function postAuthTokenTidy(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.token.tidy.$post(undefined, options))
}

export async function postAuthAlicloudMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':alicloud_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':alicloud_mount_path'].login.$post(args, options))
}

export async function getAuthAlicloudMountPathRoleIndex(
  args: InferRequestType<(typeof client.auth)[':alicloud_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':alicloud_mount_path'].role.index.$get(args, options))
}

export async function getAuthAlicloudMountPathRoleRole(
  args: InferRequestType<(typeof client.auth)[':alicloud_mount_path']['role'][':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':alicloud_mount_path'].role[':role'].$get(args, options))
}

export async function postAuthAlicloudMountPathRoleRole(
  args: InferRequestType<(typeof client.auth)[':alicloud_mount_path']['role'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':alicloud_mount_path'].role[':role'].$post(args, options))
}

export async function deleteAuthAlicloudMountPathRoleRole(
  args: InferRequestType<(typeof client.auth)[':alicloud_mount_path']['role'][':role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':alicloud_mount_path'].role[':role'].$delete(args, options),
  )
}

export async function getAuthAlicloudMountPathRolesIndex(
  args: InferRequestType<(typeof client.auth)[':alicloud_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':alicloud_mount_path'].roles.index.$get(args, options))
}

export async function postAuthApproleMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':approle_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':approle_mount_path'].login.$post(args, options))
}

export async function getAuthApproleMountPathRoleIndex(
  args: InferRequestType<(typeof client.auth)[':approle_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':approle_mount_path'].role.index.$get(args, options))
}

export async function getAuthApproleMountPathRoleRoleName(
  args: InferRequestType<(typeof client.auth)[':approle_mount_path']['role'][':role_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name'].$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleName(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name'].$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleName(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name'].$delete(args, options),
  )
}

export async function getAuthApproleMountPathRoleRoleNameBindSecretId(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['bind-secret-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['bind-secret-id'].$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameBindSecretId(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['bind-secret-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['bind-secret-id'].$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameBindSecretId(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['bind-secret-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['bind-secret-id'].$delete(args, options),
  )
}

export async function getAuthApproleMountPathRoleRoleNameBoundCidrList(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['bound-cidr-list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['bound-cidr-list'].$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameBoundCidrList(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['bound-cidr-list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['bound-cidr-list'].$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameBoundCidrList(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['bound-cidr-list']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['bound-cidr-list'].$delete(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameCustomSecretId(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['custom-secret-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['custom-secret-id'].$post(args, options),
  )
}

export async function getAuthApproleMountPathRoleRoleNameLocalSecretIds(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['local-secret-ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['local-secret-ids'].$get(args, options),
  )
}

export async function getAuthApproleMountPathRoleRoleNamePeriod(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['period']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name'].period.$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNamePeriod(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['period']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name'].period.$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNamePeriod(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['period']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name'].period.$delete(args, options),
  )
}

export async function getAuthApproleMountPathRoleRoleNamePolicies(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name'].policies.$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNamePolicies(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['policies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name'].policies.$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNamePolicies(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['policies']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name'].policies.$delete(args, options),
  )
}

export async function getAuthApproleMountPathRoleRoleNameRoleId(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['role-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['role-id'].$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameRoleId(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['role-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['role-id'].$post(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameSecretId(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id'].$post(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroy(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-accessor']['destroy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-accessor'].destroy.$post(
      args,
      options,
    ),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroy(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-accessor']['destroy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-accessor'].destroy.$delete(
      args,
      options,
    ),
  )
}

export async function postAuthApproleMountPathRoleRoleNameSecretIdAccessorLookup(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-accessor']['lookup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-accessor'].lookup.$post(
      args,
      options,
    ),
  )
}

export async function getAuthApproleMountPathRoleRoleNameSecretIdBoundCidrs(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-bound-cidrs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-bound-cidrs'].$get(
      args,
      options,
    ),
  )
}

export async function postAuthApproleMountPathRoleRoleNameSecretIdBoundCidrs(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-bound-cidrs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-bound-cidrs'].$post(
      args,
      options,
    ),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameSecretIdBoundCidrs(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-bound-cidrs']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-bound-cidrs'].$delete(
      args,
      options,
    ),
  )
}

export async function getAuthApproleMountPathRoleRoleNameSecretIdNumUses(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-num-uses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-num-uses'].$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameSecretIdNumUses(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-num-uses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-num-uses'].$post(
      args,
      options,
    ),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameSecretIdNumUses(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-num-uses']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-num-uses'].$delete(
      args,
      options,
    ),
  )
}

export async function getAuthApproleMountPathRoleRoleNameSecretIdTtl(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-ttl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-ttl'].$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameSecretIdTtl(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-ttl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-ttl'].$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameSecretIdTtl(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id-ttl']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id-ttl'].$delete(args, options),
  )
}

export async function getAuthApproleMountPathRoleRoleNameSecretIdIndex(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id'].index.$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameSecretIdDestroy(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id']['destroy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id'].destroy.$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameSecretIdDestroy(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id']['destroy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id'].destroy.$delete(
      args,
      options,
    ),
  )
}

export async function postAuthApproleMountPathRoleRoleNameSecretIdLookup(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['secret-id']['lookup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['secret-id'].lookup.$post(args, options),
  )
}

export async function getAuthApproleMountPathRoleRoleNameTokenBoundCidrs(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-bound-cidrs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-bound-cidrs'].$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameTokenBoundCidrs(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-bound-cidrs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-bound-cidrs'].$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameTokenBoundCidrs(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-bound-cidrs']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-bound-cidrs'].$delete(
      args,
      options,
    ),
  )
}

export async function getAuthApproleMountPathRoleRoleNameTokenMaxTtl(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-max-ttl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-max-ttl'].$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameTokenMaxTtl(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-max-ttl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-max-ttl'].$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameTokenMaxTtl(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-max-ttl']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-max-ttl'].$delete(args, options),
  )
}

export async function getAuthApproleMountPathRoleRoleNameTokenNumUses(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-num-uses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-num-uses'].$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameTokenNumUses(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-num-uses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-num-uses'].$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameTokenNumUses(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-num-uses']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-num-uses'].$delete(args, options),
  )
}

export async function getAuthApproleMountPathRoleRoleNameTokenTtl(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-ttl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-ttl'].$get(args, options),
  )
}

export async function postAuthApproleMountPathRoleRoleNameTokenTtl(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-ttl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-ttl'].$post(args, options),
  )
}

export async function deleteAuthApproleMountPathRoleRoleNameTokenTtl(
  args: InferRequestType<
    (typeof client.auth)[':approle_mount_path']['role'][':role_name']['token-ttl']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].role[':role_name']['token-ttl'].$delete(args, options),
  )
}

export async function postAuthApproleMountPathTidySecretId(
  args: InferRequestType<(typeof client.auth)[':approle_mount_path']['tidy']['secret-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':approle_mount_path'].tidy['secret-id'].$post(args, options),
  )
}

export async function getAuthAwsMountPathConfigCertificateCertName(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['certificate'][':cert_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.certificate[':cert_name'].$get(args, options),
  )
}

export async function postAuthAwsMountPathConfigCertificateCertName(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['certificate'][':cert_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.certificate[':cert_name'].$post(args, options),
  )
}

export async function deleteAuthAwsMountPathConfigCertificateCertName(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['certificate'][':cert_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.certificate[':cert_name'].$delete(args, options),
  )
}

export async function getAuthAwsMountPathConfigCertificatesIndex(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['certificates']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.certificates.index.$get(args, options),
  )
}

export async function getAuthAwsMountPathConfigClient(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['config']['client']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].config.client.$get(args, options))
}

export async function postAuthAwsMountPathConfigClient(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['config']['client']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].config.client.$post(args, options))
}

export async function deleteAuthAwsMountPathConfigClient(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['config']['client']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].config.client.$delete(args, options))
}

export async function getAuthAwsMountPathConfigIdentity(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['config']['identity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].config.identity.$get(args, options))
}

export async function postAuthAwsMountPathConfigIdentity(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['config']['identity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].config.identity.$post(args, options))
}

export async function postAuthAwsMountPathConfigRotateRoot(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['config']['rotate-root']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config['rotate-root'].$post(args, options),
  )
}

export async function getAuthAwsMountPathConfigStsIndex(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['config']['sts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].config.sts.index.$get(args, options))
}

export async function getAuthAwsMountPathConfigStsAccountId(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['sts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.sts[':account_id'].$get(args, options),
  )
}

export async function postAuthAwsMountPathConfigStsAccountId(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['sts'][':account_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.sts[':account_id'].$post(args, options),
  )
}

export async function deleteAuthAwsMountPathConfigStsAccountId(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['sts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.sts[':account_id'].$delete(args, options),
  )
}

export async function getAuthAwsMountPathConfigTidyIdentityAccesslist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['identity-accesslist']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['identity-accesslist'].$get(args, options),
  )
}

export async function postAuthAwsMountPathConfigTidyIdentityAccesslist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['identity-accesslist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['identity-accesslist'].$post(args, options),
  )
}

export async function deleteAuthAwsMountPathConfigTidyIdentityAccesslist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['identity-accesslist']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['identity-accesslist'].$delete(args, options),
  )
}

export async function getAuthAwsMountPathConfigTidyIdentityWhitelist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['identity-whitelist']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['identity-whitelist'].$get(args, options),
  )
}

export async function postAuthAwsMountPathConfigTidyIdentityWhitelist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['identity-whitelist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['identity-whitelist'].$post(args, options),
  )
}

export async function deleteAuthAwsMountPathConfigTidyIdentityWhitelist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['identity-whitelist']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['identity-whitelist'].$delete(args, options),
  )
}

export async function getAuthAwsMountPathConfigTidyRoletagBlacklist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['roletag-blacklist']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['roletag-blacklist'].$get(args, options),
  )
}

export async function postAuthAwsMountPathConfigTidyRoletagBlacklist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['roletag-blacklist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['roletag-blacklist'].$post(args, options),
  )
}

export async function deleteAuthAwsMountPathConfigTidyRoletagBlacklist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['roletag-blacklist']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['roletag-blacklist'].$delete(args, options),
  )
}

export async function getAuthAwsMountPathConfigTidyRoletagDenylist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['roletag-denylist']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['roletag-denylist'].$get(args, options),
  )
}

export async function postAuthAwsMountPathConfigTidyRoletagDenylist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['roletag-denylist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['roletag-denylist'].$post(args, options),
  )
}

export async function deleteAuthAwsMountPathConfigTidyRoletagDenylist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['config']['tidy']['roletag-denylist']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].config.tidy['roletag-denylist'].$delete(args, options),
  )
}

export async function getAuthAwsMountPathIdentityAccesslistIndex(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['identity-accesslist']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['identity-accesslist'].index.$get(args, options),
  )
}

export async function getAuthAwsMountPathIdentityAccesslistInstanceId(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['identity-accesslist'][':instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['identity-accesslist'][':instance_id'].$get(args, options),
  )
}

export async function deleteAuthAwsMountPathIdentityAccesslistInstanceId(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['identity-accesslist'][':instance_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['identity-accesslist'][':instance_id'].$delete(args, options),
  )
}

export async function getAuthAwsMountPathIdentityWhitelistIndex(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['identity-whitelist']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['identity-whitelist'].index.$get(args, options),
  )
}

export async function getAuthAwsMountPathIdentityWhitelistInstanceId(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['identity-whitelist'][':instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['identity-whitelist'][':instance_id'].$get(args, options),
  )
}

export async function deleteAuthAwsMountPathIdentityWhitelistInstanceId(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['identity-whitelist'][':instance_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['identity-whitelist'][':instance_id'].$delete(args, options),
  )
}

export async function postAuthAwsMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].login.$post(args, options))
}

export async function getAuthAwsMountPathRoleIndex(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].role.index.$get(args, options))
}

export async function getAuthAwsMountPathRoleRole(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['role'][':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].role[':role'].$get(args, options))
}

export async function postAuthAwsMountPathRoleRole(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['role'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].role[':role'].$post(args, options))
}

export async function deleteAuthAwsMountPathRoleRole(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['role'][':role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].role[':role'].$delete(args, options))
}

export async function postAuthAwsMountPathRoleRoleTag(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['role'][':role']['tag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].role[':role'].tag.$post(args, options))
}

export async function getAuthAwsMountPathRolesIndex(
  args: InferRequestType<(typeof client.auth)[':aws_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':aws_mount_path'].roles.index.$get(args, options))
}

export async function getAuthAwsMountPathRoletagBlacklistIndex(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['roletag-blacklist']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['roletag-blacklist'].index.$get(args, options),
  )
}

export async function getAuthAwsMountPathRoletagBlacklistRoleTag(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['roletag-blacklist'][':role_tag']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['roletag-blacklist'][':role_tag'].$get(args, options),
  )
}

export async function postAuthAwsMountPathRoletagBlacklistRoleTag(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['roletag-blacklist'][':role_tag']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['roletag-blacklist'][':role_tag'].$post(args, options),
  )
}

export async function deleteAuthAwsMountPathRoletagBlacklistRoleTag(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['roletag-blacklist'][':role_tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['roletag-blacklist'][':role_tag'].$delete(args, options),
  )
}

export async function getAuthAwsMountPathRoletagDenylistIndex(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['roletag-denylist']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['roletag-denylist'].index.$get(args, options),
  )
}

export async function getAuthAwsMountPathRoletagDenylistRoleTag(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['roletag-denylist'][':role_tag']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['roletag-denylist'][':role_tag'].$get(args, options),
  )
}

export async function postAuthAwsMountPathRoletagDenylistRoleTag(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['roletag-denylist'][':role_tag']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['roletag-denylist'][':role_tag'].$post(args, options),
  )
}

export async function deleteAuthAwsMountPathRoletagDenylistRoleTag(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['roletag-denylist'][':role_tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path']['roletag-denylist'][':role_tag'].$delete(args, options),
  )
}

export async function postAuthAwsMountPathTidyIdentityAccesslist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['tidy']['identity-accesslist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].tidy['identity-accesslist'].$post(args, options),
  )
}

export async function postAuthAwsMountPathTidyIdentityWhitelist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['tidy']['identity-whitelist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].tidy['identity-whitelist'].$post(args, options),
  )
}

export async function postAuthAwsMountPathTidyRoletagBlacklist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['tidy']['roletag-blacklist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].tidy['roletag-blacklist'].$post(args, options),
  )
}

export async function postAuthAwsMountPathTidyRoletagDenylist(
  args: InferRequestType<
    (typeof client.auth)[':aws_mount_path']['tidy']['roletag-denylist']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':aws_mount_path'].tidy['roletag-denylist'].$post(args, options),
  )
}

export async function getAuthAzureMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':azure_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':azure_mount_path'].config.$get(args, options))
}

export async function postAuthAzureMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':azure_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':azure_mount_path'].config.$post(args, options))
}

export async function deleteAuthAzureMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':azure_mount_path']['config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':azure_mount_path'].config.$delete(args, options))
}

export async function postAuthAzureMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':azure_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':azure_mount_path'].login.$post(args, options))
}

export async function getAuthAzureMountPathRoleIndex(
  args: InferRequestType<(typeof client.auth)[':azure_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':azure_mount_path'].role.index.$get(args, options))
}

export async function getAuthAzureMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':azure_mount_path']['role'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':azure_mount_path'].role[':name'].$get(args, options))
}

export async function postAuthAzureMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':azure_mount_path']['role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':azure_mount_path'].role[':name'].$post(args, options))
}

export async function deleteAuthAzureMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':azure_mount_path']['role'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':azure_mount_path'].role[':name'].$delete(args, options))
}

export async function postAuthAzureMountPathRotateRoot(
  args: InferRequestType<(typeof client.auth)[':azure_mount_path']['rotate-root']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':azure_mount_path']['rotate-root'].$post(args, options))
}

export async function getAuthCentrifyMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':centrify_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':centrify_mount_path'].config.$get(args, options))
}

export async function postAuthCentrifyMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':centrify_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':centrify_mount_path'].config.$post(args, options))
}

export async function postAuthCentrifyMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':centrify_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':centrify_mount_path'].login.$post(args, options))
}

export async function getAuthCertMountPathCertsIndex(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['certs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].certs.index.$get(args, options))
}

export async function getAuthCertMountPathCertsName(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['certs'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].certs[':name'].$get(args, options))
}

export async function postAuthCertMountPathCertsName(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['certs'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].certs[':name'].$post(args, options))
}

export async function deleteAuthCertMountPathCertsName(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['certs'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].certs[':name'].$delete(args, options))
}

export async function getAuthCertMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].config.$get(args, options))
}

export async function postAuthCertMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].config.$post(args, options))
}

export async function getAuthCertMountPathCrlsIndex(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['crls']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].crls.index.$get(args, options))
}

export async function getAuthCertMountPathCrlsName(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['crls'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].crls[':name'].$get(args, options))
}

export async function postAuthCertMountPathCrlsName(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['crls'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].crls[':name'].$post(args, options))
}

export async function deleteAuthCertMountPathCrlsName(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['crls'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].crls[':name'].$delete(args, options))
}

export async function postAuthCertMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':cert_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cert_mount_path'].login.$post(args, options))
}

export async function getAuthCfMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':cf_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cf_mount_path'].config.$get(args, options))
}

export async function postAuthCfMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':cf_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cf_mount_path'].config.$post(args, options))
}

export async function deleteAuthCfMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':cf_mount_path']['config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cf_mount_path'].config.$delete(args, options))
}

export async function postAuthCfMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':cf_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cf_mount_path'].login.$post(args, options))
}

export async function getAuthCfMountPathRolesIndex(
  args: InferRequestType<(typeof client.auth)[':cf_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cf_mount_path'].roles.index.$get(args, options))
}

export async function getAuthCfMountPathRolesRole(
  args: InferRequestType<(typeof client.auth)[':cf_mount_path']['roles'][':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cf_mount_path'].roles[':role'].$get(args, options))
}

export async function postAuthCfMountPathRolesRole(
  args: InferRequestType<(typeof client.auth)[':cf_mount_path']['roles'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cf_mount_path'].roles[':role'].$post(args, options))
}

export async function deleteAuthCfMountPathRolesRole(
  args: InferRequestType<(typeof client.auth)[':cf_mount_path']['roles'][':role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':cf_mount_path'].roles[':role'].$delete(args, options))
}

export async function getAuthGcpMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':gcp_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':gcp_mount_path'].config.$get(args, options))
}

export async function postAuthGcpMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':gcp_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':gcp_mount_path'].config.$post(args, options))
}

export async function postAuthGcpMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':gcp_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':gcp_mount_path'].login.$post(args, options))
}

export async function getAuthGcpMountPathRoleIndex(
  args: InferRequestType<(typeof client.auth)[':gcp_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':gcp_mount_path'].role.index.$get(args, options))
}

export async function getAuthGcpMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':gcp_mount_path']['role'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':gcp_mount_path'].role[':name'].$get(args, options))
}

export async function postAuthGcpMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':gcp_mount_path']['role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':gcp_mount_path'].role[':name'].$post(args, options))
}

export async function deleteAuthGcpMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':gcp_mount_path']['role'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':gcp_mount_path'].role[':name'].$delete(args, options))
}

export async function postAuthGcpMountPathRoleNameLabels(
  args: InferRequestType<
    (typeof client.auth)[':gcp_mount_path']['role'][':name']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':gcp_mount_path'].role[':name'].labels.$post(args, options),
  )
}

export async function postAuthGcpMountPathRoleNameServiceAccounts(
  args: InferRequestType<
    (typeof client.auth)[':gcp_mount_path']['role'][':name']['service-accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':gcp_mount_path'].role[':name']['service-accounts'].$post(args, options),
  )
}

export async function getAuthGcpMountPathRolesIndex(
  args: InferRequestType<(typeof client.auth)[':gcp_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':gcp_mount_path'].roles.index.$get(args, options))
}

export async function getAuthGithubMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':github_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':github_mount_path'].config.$get(args, options))
}

export async function postAuthGithubMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':github_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':github_mount_path'].config.$post(args, options))
}

export async function postAuthGithubMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':github_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':github_mount_path'].login.$post(args, options))
}

export async function getAuthGithubMountPathMapTeams(
  args: InferRequestType<(typeof client.auth)[':github_mount_path']['map']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':github_mount_path'].map.teams.$get(args, options))
}

export async function getAuthGithubMountPathMapTeamsIndex(
  args: InferRequestType<
    (typeof client.auth)[':github_mount_path']['map']['teams']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':github_mount_path'].map.teams.index.$get(args, options))
}

export async function getAuthGithubMountPathMapTeamsKey(
  args: InferRequestType<
    (typeof client.auth)[':github_mount_path']['map']['teams'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':github_mount_path'].map.teams[':key'].$get(args, options),
  )
}

export async function postAuthGithubMountPathMapTeamsKey(
  args: InferRequestType<
    (typeof client.auth)[':github_mount_path']['map']['teams'][':key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':github_mount_path'].map.teams[':key'].$post(args, options),
  )
}

export async function deleteAuthGithubMountPathMapTeamsKey(
  args: InferRequestType<
    (typeof client.auth)[':github_mount_path']['map']['teams'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':github_mount_path'].map.teams[':key'].$delete(args, options),
  )
}

export async function getAuthGithubMountPathMapUsers(
  args: InferRequestType<(typeof client.auth)[':github_mount_path']['map']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':github_mount_path'].map.users.$get(args, options))
}

export async function getAuthGithubMountPathMapUsersIndex(
  args: InferRequestType<
    (typeof client.auth)[':github_mount_path']['map']['users']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':github_mount_path'].map.users.index.$get(args, options))
}

export async function getAuthGithubMountPathMapUsersKey(
  args: InferRequestType<
    (typeof client.auth)[':github_mount_path']['map']['users'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':github_mount_path'].map.users[':key'].$get(args, options),
  )
}

export async function postAuthGithubMountPathMapUsersKey(
  args: InferRequestType<
    (typeof client.auth)[':github_mount_path']['map']['users'][':key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':github_mount_path'].map.users[':key'].$post(args, options),
  )
}

export async function deleteAuthGithubMountPathMapUsersKey(
  args: InferRequestType<
    (typeof client.auth)[':github_mount_path']['map']['users'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':github_mount_path'].map.users[':key'].$delete(args, options),
  )
}

export async function getAuthJwtMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':jwt_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':jwt_mount_path'].config.$get(args, options))
}

export async function postAuthJwtMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':jwt_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':jwt_mount_path'].config.$post(args, options))
}

export async function postAuthJwtMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':jwt_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':jwt_mount_path'].login.$post(args, options))
}

export async function postAuthJwtMountPathOidcAuthUrl(
  args: InferRequestType<(typeof client.auth)[':jwt_mount_path']['oidc']['auth_url']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':jwt_mount_path'].oidc.auth_url.$post(args, options))
}

export async function getAuthJwtMountPathOidcCallback(
  args: InferRequestType<(typeof client.auth)[':jwt_mount_path']['oidc']['callback']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':jwt_mount_path'].oidc.callback.$get(args, options))
}

export async function postAuthJwtMountPathOidcCallback(
  args: InferRequestType<(typeof client.auth)[':jwt_mount_path']['oidc']['callback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':jwt_mount_path'].oidc.callback.$post(args, options))
}

export async function getAuthJwtMountPathRoleIndex(
  args: InferRequestType<(typeof client.auth)[':jwt_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':jwt_mount_path'].role.index.$get(args, options))
}

export async function getAuthJwtMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':jwt_mount_path']['role'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':jwt_mount_path'].role[':name'].$get(args, options))
}

export async function postAuthJwtMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':jwt_mount_path']['role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':jwt_mount_path'].role[':name'].$post(args, options))
}

export async function deleteAuthJwtMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':jwt_mount_path']['role'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':jwt_mount_path'].role[':name'].$delete(args, options))
}

export async function getAuthKerberosMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':kerberos_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kerberos_mount_path'].config.$get(args, options))
}

export async function postAuthKerberosMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':kerberos_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kerberos_mount_path'].config.$post(args, options))
}

export async function getAuthKerberosMountPathConfigLdap(
  args: InferRequestType<(typeof client.auth)[':kerberos_mount_path']['config']['ldap']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kerberos_mount_path'].config.ldap.$get(args, options))
}

export async function postAuthKerberosMountPathConfigLdap(
  args: InferRequestType<(typeof client.auth)[':kerberos_mount_path']['config']['ldap']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kerberos_mount_path'].config.ldap.$post(args, options))
}

export async function getAuthKerberosMountPathGroupsIndex(
  args: InferRequestType<(typeof client.auth)[':kerberos_mount_path']['groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kerberos_mount_path'].groups.index.$get(args, options))
}

export async function getAuthKerberosMountPathGroupsName(
  args: InferRequestType<(typeof client.auth)[':kerberos_mount_path']['groups'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':kerberos_mount_path'].groups[':name'].$get(args, options),
  )
}

export async function postAuthKerberosMountPathGroupsName(
  args: InferRequestType<(typeof client.auth)[':kerberos_mount_path']['groups'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':kerberos_mount_path'].groups[':name'].$post(args, options),
  )
}

export async function deleteAuthKerberosMountPathGroupsName(
  args: InferRequestType<
    (typeof client.auth)[':kerberos_mount_path']['groups'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':kerberos_mount_path'].groups[':name'].$delete(args, options),
  )
}

export async function getAuthKerberosMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':kerberos_mount_path']['login']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kerberos_mount_path'].login.$get(args, options))
}

export async function postAuthKerberosMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':kerberos_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kerberos_mount_path'].login.$post(args, options))
}

export async function getAuthKubernetesMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':kubernetes_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kubernetes_mount_path'].config.$get(args, options))
}

export async function postAuthKubernetesMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':kubernetes_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kubernetes_mount_path'].config.$post(args, options))
}

export async function postAuthKubernetesMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':kubernetes_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kubernetes_mount_path'].login.$post(args, options))
}

export async function getAuthKubernetesMountPathRoleIndex(
  args: InferRequestType<(typeof client.auth)[':kubernetes_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':kubernetes_mount_path'].role.index.$get(args, options))
}

export async function getAuthKubernetesMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':kubernetes_mount_path']['role'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':kubernetes_mount_path'].role[':name'].$get(args, options),
  )
}

export async function postAuthKubernetesMountPathRoleName(
  args: InferRequestType<(typeof client.auth)[':kubernetes_mount_path']['role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':kubernetes_mount_path'].role[':name'].$post(args, options),
  )
}

export async function deleteAuthKubernetesMountPathRoleName(
  args: InferRequestType<
    (typeof client.auth)[':kubernetes_mount_path']['role'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':kubernetes_mount_path'].role[':name'].$delete(args, options),
  )
}

export async function getAuthLdapMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':ldap_mount_path'].config.$get(args, options))
}

export async function postAuthLdapMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':ldap_mount_path'].config.$post(args, options))
}

export async function getAuthLdapMountPathGroupsIndex(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':ldap_mount_path'].groups.index.$get(args, options))
}

export async function getAuthLdapMountPathGroupsName(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['groups'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':ldap_mount_path'].groups[':name'].$get(args, options))
}

export async function postAuthLdapMountPathGroupsName(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['groups'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':ldap_mount_path'].groups[':name'].$post(args, options))
}

export async function deleteAuthLdapMountPathGroupsName(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['groups'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':ldap_mount_path'].groups[':name'].$delete(args, options))
}

export async function postAuthLdapMountPathLoginUsername(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['login'][':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':ldap_mount_path'].login[':username'].$post(args, options),
  )
}

export async function getAuthLdapMountPathUsersIndex(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['users']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':ldap_mount_path'].users.index.$get(args, options))
}

export async function getAuthLdapMountPathUsersName(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['users'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':ldap_mount_path'].users[':name'].$get(args, options))
}

export async function postAuthLdapMountPathUsersName(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['users'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':ldap_mount_path'].users[':name'].$post(args, options))
}

export async function deleteAuthLdapMountPathUsersName(
  args: InferRequestType<(typeof client.auth)[':ldap_mount_path']['users'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':ldap_mount_path'].users[':name'].$delete(args, options))
}

export async function getAuthOciMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':oci_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':oci_mount_path'].config.$get(args, options))
}

export async function postAuthOciMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':oci_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':oci_mount_path'].config.$post(args, options))
}

export async function deleteAuthOciMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':oci_mount_path']['config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':oci_mount_path'].config.$delete(args, options))
}

export async function postAuthOciMountPathLoginRole(
  args: InferRequestType<(typeof client.auth)[':oci_mount_path']['login'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':oci_mount_path'].login[':role'].$post(args, options))
}

export async function getAuthOciMountPathRoleIndex(
  args: InferRequestType<(typeof client.auth)[':oci_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':oci_mount_path'].role.index.$get(args, options))
}

export async function getAuthOciMountPathRoleRole(
  args: InferRequestType<(typeof client.auth)[':oci_mount_path']['role'][':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':oci_mount_path'].role[':role'].$get(args, options))
}

export async function postAuthOciMountPathRoleRole(
  args: InferRequestType<(typeof client.auth)[':oci_mount_path']['role'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':oci_mount_path'].role[':role'].$post(args, options))
}

export async function deleteAuthOciMountPathRoleRole(
  args: InferRequestType<(typeof client.auth)[':oci_mount_path']['role'][':role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':oci_mount_path'].role[':role'].$delete(args, options))
}

export async function getAuthOktaMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].config.$get(args, options))
}

export async function postAuthOktaMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].config.$post(args, options))
}

export async function getAuthOktaMountPathGroupsIndex(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].groups.index.$get(args, options))
}

export async function getAuthOktaMountPathGroupsName(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['groups'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].groups[':name'].$get(args, options))
}

export async function postAuthOktaMountPathGroupsName(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['groups'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].groups[':name'].$post(args, options))
}

export async function deleteAuthOktaMountPathGroupsName(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['groups'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].groups[':name'].$delete(args, options))
}

export async function postAuthOktaMountPathLoginUsername(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['login'][':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':okta_mount_path'].login[':username'].$post(args, options),
  )
}

export async function getAuthOktaMountPathUsersIndex(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['users']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].users.index.$get(args, options))
}

export async function getAuthOktaMountPathUsersName(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['users'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].users[':name'].$get(args, options))
}

export async function postAuthOktaMountPathUsersName(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['users'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].users[':name'].$post(args, options))
}

export async function deleteAuthOktaMountPathUsersName(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['users'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].users[':name'].$delete(args, options))
}

export async function getAuthOktaMountPathVerifyNonce(
  args: InferRequestType<(typeof client.auth)[':okta_mount_path']['verify'][':nonce']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':okta_mount_path'].verify[':nonce'].$get(args, options))
}

export async function getAuthRadiusMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':radius_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':radius_mount_path'].config.$get(args, options))
}

export async function postAuthRadiusMountPathConfig(
  args: InferRequestType<(typeof client.auth)[':radius_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':radius_mount_path'].config.$post(args, options))
}

export async function postAuthRadiusMountPathLogin(
  args: InferRequestType<(typeof client.auth)[':radius_mount_path']['login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':radius_mount_path'].login.$post(args, options))
}

export async function postAuthRadiusMountPathLoginUrlusername(
  args: InferRequestType<
    (typeof client.auth)[':radius_mount_path']['login'][':urlusername']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':radius_mount_path'].login[':urlusername'].$post(args, options),
  )
}

export async function getAuthRadiusMountPathUsersIndex(
  args: InferRequestType<(typeof client.auth)[':radius_mount_path']['users']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':radius_mount_path'].users.index.$get(args, options))
}

export async function getAuthRadiusMountPathUsersName(
  args: InferRequestType<(typeof client.auth)[':radius_mount_path']['users'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':radius_mount_path'].users[':name'].$get(args, options))
}

export async function postAuthRadiusMountPathUsersName(
  args: InferRequestType<(typeof client.auth)[':radius_mount_path']['users'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':radius_mount_path'].users[':name'].$post(args, options))
}

export async function deleteAuthRadiusMountPathUsersName(
  args: InferRequestType<(typeof client.auth)[':radius_mount_path']['users'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':radius_mount_path'].users[':name'].$delete(args, options),
  )
}

export async function postAuthUserpassMountPathLoginUsername(
  args: InferRequestType<
    (typeof client.auth)[':userpass_mount_path']['login'][':username']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':userpass_mount_path'].login[':username'].$post(args, options),
  )
}

export async function getAuthUserpassMountPathUsersIndex(
  args: InferRequestType<(typeof client.auth)[':userpass_mount_path']['users']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth[':userpass_mount_path'].users.index.$get(args, options))
}

export async function getAuthUserpassMountPathUsersUsername(
  args: InferRequestType<
    (typeof client.auth)[':userpass_mount_path']['users'][':username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':userpass_mount_path'].users[':username'].$get(args, options),
  )
}

export async function postAuthUserpassMountPathUsersUsername(
  args: InferRequestType<
    (typeof client.auth)[':userpass_mount_path']['users'][':username']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':userpass_mount_path'].users[':username'].$post(args, options),
  )
}

export async function deleteAuthUserpassMountPathUsersUsername(
  args: InferRequestType<
    (typeof client.auth)[':userpass_mount_path']['users'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':userpass_mount_path'].users[':username'].$delete(args, options),
  )
}

export async function postAuthUserpassMountPathUsersUsernamePassword(
  args: InferRequestType<
    (typeof client.auth)[':userpass_mount_path']['users'][':username']['password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':userpass_mount_path'].users[':username'].password.$post(args, options),
  )
}

export async function postAuthUserpassMountPathUsersUsernamePolicies(
  args: InferRequestType<
    (typeof client.auth)[':userpass_mount_path']['users'][':username']['policies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.auth[':userpass_mount_path'].users[':username'].policies.$post(args, options),
  )
}

export async function getCubbyholePath(
  args: InferRequestType<(typeof client.cubbyhole)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cubbyhole[':path'].$get(args, options))
}

export async function postCubbyholePath(
  args: InferRequestType<(typeof client.cubbyhole)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cubbyhole[':path'].$post(args, options))
}

export async function deleteCubbyholePath(
  args: InferRequestType<(typeof client.cubbyhole)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cubbyhole[':path'].$delete(args, options))
}

export async function getCubbyholePathIndex(
  args: InferRequestType<(typeof client.cubbyhole)[':path']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cubbyhole[':path'].index.$get(args, options))
}

export async function postIdentityAlias(
  args: InferRequestType<typeof client.identity.alias.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.alias.$post(args, options))
}

export async function getIdentityAliasIdIndex(
  args: InferRequestType<typeof client.identity.alias.id.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.alias.id.index.$get(args, options))
}

export async function getIdentityAliasIdId(
  args: InferRequestType<(typeof client.identity.alias.id)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.alias.id[':id'].$get(args, options))
}

export async function postIdentityAliasIdId(
  args: InferRequestType<(typeof client.identity.alias.id)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.alias.id[':id'].$post(args, options))
}

export async function deleteIdentityAliasIdId(
  args: InferRequestType<(typeof client.identity.alias.id)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.alias.id[':id'].$delete(args, options))
}

export async function postIdentityEntity(
  args: InferRequestType<typeof client.identity.entity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity.$post(args, options))
}

export async function postIdentityEntityAlias(
  args: InferRequestType<(typeof client.identity)['entity-alias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity['entity-alias'].$post(args, options))
}

export async function getIdentityEntityAliasIdIndex(
  args: InferRequestType<(typeof client.identity)['entity-alias']['id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity['entity-alias'].id.index.$get(args, options))
}

export async function getIdentityEntityAliasIdId(
  args: InferRequestType<(typeof client.identity)['entity-alias']['id'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity['entity-alias'].id[':id'].$get(args, options))
}

export async function postIdentityEntityAliasIdId(
  args: InferRequestType<(typeof client.identity)['entity-alias']['id'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity['entity-alias'].id[':id'].$post(args, options))
}

export async function deleteIdentityEntityAliasIdId(
  args: InferRequestType<(typeof client.identity)['entity-alias']['id'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity['entity-alias'].id[':id'].$delete(args, options))
}

export async function postIdentityEntityBatchDelete(
  args: InferRequestType<(typeof client.identity.entity)['batch-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity['batch-delete'].$post(args, options))
}

export async function getIdentityEntityIdIndex(
  args: InferRequestType<typeof client.identity.entity.id.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity.id.index.$get(args, options))
}

export async function getIdentityEntityIdId(
  args: InferRequestType<(typeof client.identity.entity.id)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity.id[':id'].$get(args, options))
}

export async function postIdentityEntityIdId(
  args: InferRequestType<(typeof client.identity.entity.id)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity.id[':id'].$post(args, options))
}

export async function deleteIdentityEntityIdId(
  args: InferRequestType<(typeof client.identity.entity.id)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity.id[':id'].$delete(args, options))
}

export async function postIdentityEntityMerge(
  args: InferRequestType<typeof client.identity.entity.merge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity.merge.$post(args, options))
}

export async function getIdentityEntityNameIndex(
  args: InferRequestType<typeof client.identity.entity.name.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity.name.index.$get(args, options))
}

export async function getIdentityEntityNameName(
  args: InferRequestType<(typeof client.identity.entity.name)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity.name[':name'].$get(args, options))
}

export async function postIdentityEntityNameName(
  args: InferRequestType<(typeof client.identity.entity.name)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity.name[':name'].$post(args, options))
}

export async function deleteIdentityEntityNameName(
  args: InferRequestType<(typeof client.identity.entity.name)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.entity.name[':name'].$delete(args, options))
}

export async function postIdentityGroup(
  args: InferRequestType<typeof client.identity.group.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.group.$post(args, options))
}

export async function postIdentityGroupAlias(
  args: InferRequestType<(typeof client.identity)['group-alias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity['group-alias'].$post(args, options))
}

export async function getIdentityGroupAliasIdIndex(
  args: InferRequestType<(typeof client.identity)['group-alias']['id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity['group-alias'].id.index.$get(args, options))
}

export async function getIdentityGroupAliasIdId(
  args: InferRequestType<(typeof client.identity)['group-alias']['id'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity['group-alias'].id[':id'].$get(args, options))
}

export async function postIdentityGroupAliasIdId(
  args: InferRequestType<(typeof client.identity)['group-alias']['id'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity['group-alias'].id[':id'].$post(args, options))
}

export async function deleteIdentityGroupAliasIdId(
  args: InferRequestType<(typeof client.identity)['group-alias']['id'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity['group-alias'].id[':id'].$delete(args, options))
}

export async function getIdentityGroupIdIndex(
  args: InferRequestType<typeof client.identity.group.id.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.group.id.index.$get(args, options))
}

export async function getIdentityGroupIdId(
  args: InferRequestType<(typeof client.identity.group.id)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.group.id[':id'].$get(args, options))
}

export async function postIdentityGroupIdId(
  args: InferRequestType<(typeof client.identity.group.id)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.group.id[':id'].$post(args, options))
}

export async function deleteIdentityGroupIdId(
  args: InferRequestType<(typeof client.identity.group.id)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.group.id[':id'].$delete(args, options))
}

export async function getIdentityGroupNameIndex(
  args: InferRequestType<typeof client.identity.group.name.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.group.name.index.$get(args, options))
}

export async function getIdentityGroupNameName(
  args: InferRequestType<(typeof client.identity.group.name)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.group.name[':name'].$get(args, options))
}

export async function postIdentityGroupNameName(
  args: InferRequestType<(typeof client.identity.group.name)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.group.name[':name'].$post(args, options))
}

export async function deleteIdentityGroupNameName(
  args: InferRequestType<(typeof client.identity.group.name)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.group.name[':name'].$delete(args, options))
}

export async function postIdentityLookupEntity(
  args: InferRequestType<typeof client.identity.lookup.entity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.lookup.entity.$post(args, options))
}

export async function postIdentityLookupGroup(
  args: InferRequestType<typeof client.identity.lookup.group.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.lookup.group.$post(args, options))
}

export async function getIdentityMfaLoginEnforcementIndex(
  args: InferRequestType<(typeof client.identity.mfa)['login-enforcement']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa['login-enforcement'].index.$get(args, options))
}

export async function getIdentityMfaLoginEnforcementName(
  args: InferRequestType<(typeof client.identity.mfa)['login-enforcement'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa['login-enforcement'][':name'].$get(args, options))
}

export async function postIdentityMfaLoginEnforcementName(
  args: InferRequestType<(typeof client.identity.mfa)['login-enforcement'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa['login-enforcement'][':name'].$post(args, options))
}

export async function deleteIdentityMfaLoginEnforcementName(
  args: InferRequestType<(typeof client.identity.mfa)['login-enforcement'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identity.mfa['login-enforcement'][':name'].$delete(args, options),
  )
}

export async function getIdentityMfaMethodIndex(
  args: InferRequestType<typeof client.identity.mfa.method.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.index.$get(args, options))
}

export async function postIdentityMfaMethodDuo(
  args: InferRequestType<typeof client.identity.mfa.method.duo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.duo.$post(args, options))
}

export async function getIdentityMfaMethodDuoIndex(
  args: InferRequestType<typeof client.identity.mfa.method.duo.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.duo.index.$get(args, options))
}

export async function getIdentityMfaMethodDuoMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.duo)[':method_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.duo[':method_id'].$get(args, options))
}

export async function postIdentityMfaMethodDuoMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.duo)[':method_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.duo[':method_id'].$post(args, options))
}

export async function deleteIdentityMfaMethodDuoMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.duo)[':method_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.duo[':method_id'].$delete(args, options))
}

export async function postIdentityMfaMethodOkta(
  args: InferRequestType<typeof client.identity.mfa.method.okta.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.okta.$post(args, options))
}

export async function getIdentityMfaMethodOktaIndex(
  args: InferRequestType<typeof client.identity.mfa.method.okta.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.okta.index.$get(args, options))
}

export async function getIdentityMfaMethodOktaMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.okta)[':method_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.okta[':method_id'].$get(args, options))
}

export async function postIdentityMfaMethodOktaMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.okta)[':method_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.okta[':method_id'].$post(args, options))
}

export async function deleteIdentityMfaMethodOktaMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.okta)[':method_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.okta[':method_id'].$delete(args, options))
}

export async function postIdentityMfaMethodPingid(
  args: InferRequestType<typeof client.identity.mfa.method.pingid.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.pingid.$post(args, options))
}

export async function getIdentityMfaMethodPingidIndex(
  args: InferRequestType<typeof client.identity.mfa.method.pingid.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.pingid.index.$get(args, options))
}

export async function getIdentityMfaMethodPingidMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.pingid)[':method_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.pingid[':method_id'].$get(args, options))
}

export async function postIdentityMfaMethodPingidMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.pingid)[':method_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.pingid[':method_id'].$post(args, options))
}

export async function deleteIdentityMfaMethodPingidMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.pingid)[':method_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.pingid[':method_id'].$delete(args, options))
}

export async function postIdentityMfaMethodTotp(
  args: InferRequestType<typeof client.identity.mfa.method.totp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.totp.$post(args, options))
}

export async function getIdentityMfaMethodTotpIndex(
  args: InferRequestType<typeof client.identity.mfa.method.totp.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.totp.index.$get(args, options))
}

export async function postIdentityMfaMethodTotpAdminDestroy(
  args: InferRequestType<(typeof client.identity.mfa.method.totp)['admin-destroy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.totp['admin-destroy'].$post(args, options))
}

export async function postIdentityMfaMethodTotpAdminGenerate(
  args: InferRequestType<(typeof client.identity.mfa.method.totp)['admin-generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.totp['admin-generate'].$post(args, options))
}

export async function postIdentityMfaMethodTotpGenerate(
  args: InferRequestType<typeof client.identity.mfa.method.totp.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.totp.generate.$post(args, options))
}

export async function getIdentityMfaMethodTotpMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.totp)[':method_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.totp[':method_id'].$get(args, options))
}

export async function postIdentityMfaMethodTotpMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.totp)[':method_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.totp[':method_id'].$post(args, options))
}

export async function deleteIdentityMfaMethodTotpMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method.totp)[':method_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method.totp[':method_id'].$delete(args, options))
}

export async function getIdentityMfaMethodMethodId(
  args: InferRequestType<(typeof client.identity.mfa.method)[':method_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.mfa.method[':method_id'].$get(args, options))
}

export async function getIdentityOidcWellKnownKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.identity.oidc['.well-known'].keys.$get(undefined, options))
}

export async function getIdentityOidcWellKnownOpenidConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(
    client.identity.oidc['.well-known']['openid-configuration'].$get(undefined, options),
  )
}

export async function getIdentityOidcAssignmentIndex(
  args: InferRequestType<typeof client.identity.oidc.assignment.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.assignment.index.$get(args, options))
}

export async function getIdentityOidcAssignmentName(
  args: InferRequestType<(typeof client.identity.oidc.assignment)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.assignment[':name'].$get(args, options))
}

export async function postIdentityOidcAssignmentName(
  args: InferRequestType<(typeof client.identity.oidc.assignment)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.assignment[':name'].$post(args, options))
}

export async function deleteIdentityOidcAssignmentName(
  args: InferRequestType<(typeof client.identity.oidc.assignment)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.assignment[':name'].$delete(args, options))
}

export async function getIdentityOidcClientIndex(
  args: InferRequestType<typeof client.identity.oidc.client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.client.index.$get(args, options))
}

export async function getIdentityOidcClientName(
  args: InferRequestType<(typeof client.identity.oidc.client)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.client[':name'].$get(args, options))
}

export async function postIdentityOidcClientName(
  args: InferRequestType<(typeof client.identity.oidc.client)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.client[':name'].$post(args, options))
}

export async function deleteIdentityOidcClientName(
  args: InferRequestType<(typeof client.identity.oidc.client)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.client[':name'].$delete(args, options))
}

export async function getIdentityOidcConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.identity.oidc.config.$get(undefined, options))
}

export async function postIdentityOidcConfig(
  args: InferRequestType<typeof client.identity.oidc.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.config.$post(args, options))
}

export async function postIdentityOidcIntrospect(
  args: InferRequestType<typeof client.identity.oidc.introspect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.introspect.$post(args, options))
}

export async function getIdentityOidcKeyIndex(
  args: InferRequestType<typeof client.identity.oidc.key.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.key.index.$get(args, options))
}

export async function getIdentityOidcKeyName(
  args: InferRequestType<(typeof client.identity.oidc.key)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.key[':name'].$get(args, options))
}

export async function postIdentityOidcKeyName(
  args: InferRequestType<(typeof client.identity.oidc.key)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.key[':name'].$post(args, options))
}

export async function deleteIdentityOidcKeyName(
  args: InferRequestType<(typeof client.identity.oidc.key)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.key[':name'].$delete(args, options))
}

export async function postIdentityOidcKeyNameRotate(
  args: InferRequestType<(typeof client.identity.oidc.key)[':name']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.key[':name'].rotate.$post(args, options))
}

export async function getIdentityOidcProviderIndex(
  args: InferRequestType<typeof client.identity.oidc.provider.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.provider.index.$get(args, options))
}

export async function getIdentityOidcProviderName(
  args: InferRequestType<(typeof client.identity.oidc.provider)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.provider[':name'].$get(args, options))
}

export async function postIdentityOidcProviderName(
  args: InferRequestType<(typeof client.identity.oidc.provider)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.provider[':name'].$post(args, options))
}

export async function deleteIdentityOidcProviderName(
  args: InferRequestType<(typeof client.identity.oidc.provider)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.provider[':name'].$delete(args, options))
}

export async function getIdentityOidcProviderNameWellKnownKeys(
  args: InferRequestType<
    (typeof client.identity.oidc.provider)[':name']['.well-known']['keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identity.oidc.provider[':name']['.well-known'].keys.$get(args, options),
  )
}

export async function getIdentityOidcProviderNameWellKnownOpenidConfiguration(
  args: InferRequestType<
    (typeof client.identity.oidc.provider)[':name']['.well-known']['openid-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identity.oidc.provider[':name']['.well-known']['openid-configuration'].$get(
      args,
      options,
    ),
  )
}

export async function getIdentityOidcProviderNameAuthorize(
  args: InferRequestType<(typeof client.identity.oidc.provider)[':name']['authorize']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.provider[':name'].authorize.$get(args, options))
}

export async function postIdentityOidcProviderNameAuthorize(
  args: InferRequestType<(typeof client.identity.oidc.provider)[':name']['authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.provider[':name'].authorize.$post(args, options))
}

export async function postIdentityOidcProviderNameToken(
  args: InferRequestType<(typeof client.identity.oidc.provider)[':name']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.provider[':name'].token.$post(args, options))
}

export async function getIdentityOidcProviderNameUserinfo(
  args: InferRequestType<(typeof client.identity.oidc.provider)[':name']['userinfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.provider[':name'].userinfo.$get(args, options))
}

export async function postIdentityOidcProviderNameUserinfo(
  args: InferRequestType<(typeof client.identity.oidc.provider)[':name']['userinfo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.provider[':name'].userinfo.$post(args, options))
}

export async function getIdentityOidcRoleIndex(
  args: InferRequestType<typeof client.identity.oidc.role.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.role.index.$get(args, options))
}

export async function getIdentityOidcRoleName(
  args: InferRequestType<(typeof client.identity.oidc.role)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.role[':name'].$get(args, options))
}

export async function postIdentityOidcRoleName(
  args: InferRequestType<(typeof client.identity.oidc.role)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.role[':name'].$post(args, options))
}

export async function deleteIdentityOidcRoleName(
  args: InferRequestType<(typeof client.identity.oidc.role)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.role[':name'].$delete(args, options))
}

export async function getIdentityOidcScopeIndex(
  args: InferRequestType<typeof client.identity.oidc.scope.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.scope.index.$get(args, options))
}

export async function getIdentityOidcScopeName(
  args: InferRequestType<(typeof client.identity.oidc.scope)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.scope[':name'].$get(args, options))
}

export async function postIdentityOidcScopeName(
  args: InferRequestType<(typeof client.identity.oidc.scope)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.scope[':name'].$post(args, options))
}

export async function deleteIdentityOidcScopeName(
  args: InferRequestType<(typeof client.identity.oidc.scope)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.scope[':name'].$delete(args, options))
}

export async function getIdentityOidcTokenName(
  args: InferRequestType<(typeof client.identity.oidc.token)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.oidc.token[':name'].$get(args, options))
}

export async function postIdentityPersona(
  args: InferRequestType<typeof client.identity.persona.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.persona.$post(args, options))
}

export async function getIdentityPersonaIdIndex(
  args: InferRequestType<typeof client.identity.persona.id.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.persona.id.index.$get(args, options))
}

export async function getIdentityPersonaIdId(
  args: InferRequestType<(typeof client.identity.persona.id)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.persona.id[':id'].$get(args, options))
}

export async function postIdentityPersonaIdId(
  args: InferRequestType<(typeof client.identity.persona.id)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.persona.id[':id'].$post(args, options))
}

export async function deleteIdentityPersonaIdId(
  args: InferRequestType<(typeof client.identity.persona.id)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity.persona.id[':id'].$delete(args, options))
}

export async function getSysAudit(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.audit.$get(undefined, options))
}

export async function postSysAuditHashPath(
  args: InferRequestType<(typeof client.sys)['audit-hash'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['audit-hash'][':path'].$post(args, options))
}

export async function postSysAuditPath(
  args: InferRequestType<(typeof client.sys.audit)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.audit[':path'].$post(args, options))
}

export async function deleteSysAuditPath(
  args: InferRequestType<(typeof client.sys.audit)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.audit[':path'].$delete(args, options))
}

export async function getSysAuth(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.auth.$get(undefined, options))
}

export async function getSysAuthPath(
  args: InferRequestType<(typeof client.sys.auth)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.auth[':path'].$get(args, options))
}

export async function postSysAuthPath(
  args: InferRequestType<(typeof client.sys.auth)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.auth[':path'].$post(args, options))
}

export async function deleteSysAuthPath(
  args: InferRequestType<(typeof client.sys.auth)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.auth[':path'].$delete(args, options))
}

export async function getSysAuthPathTune(
  args: InferRequestType<(typeof client.sys.auth)[':path']['tune']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.auth[':path'].tune.$get(args, options))
}

export async function postSysAuthPathTune(
  args: InferRequestType<(typeof client.sys.auth)[':path']['tune']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.auth[':path'].tune.$post(args, options))
}

export async function postSysCapabilities(
  args: InferRequestType<typeof client.sys.capabilities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.capabilities.$post(args, options))
}

export async function postSysCapabilitiesAccessor(
  args: InferRequestType<(typeof client.sys)['capabilities-accessor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['capabilities-accessor'].$post(args, options))
}

export async function postSysCapabilitiesSelf(
  args: InferRequestType<(typeof client.sys)['capabilities-self']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['capabilities-self'].$post(args, options))
}

export async function getSysConfigAuditingRequestHeaders(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.config.auditing['request-headers'].$get(undefined, options))
}

export async function getSysConfigAuditingRequestHeadersHeader(
  args: InferRequestType<(typeof client.sys.config.auditing)['request-headers'][':header']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.config.auditing['request-headers'][':header'].$get(args, options),
  )
}

export async function postSysConfigAuditingRequestHeadersHeader(
  args: InferRequestType<
    (typeof client.sys.config.auditing)['request-headers'][':header']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.config.auditing['request-headers'][':header'].$post(args, options),
  )
}

export async function deleteSysConfigAuditingRequestHeadersHeader(
  args: InferRequestType<
    (typeof client.sys.config.auditing)['request-headers'][':header']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.config.auditing['request-headers'][':header'].$delete(args, options),
  )
}

export async function getSysConfigControlGroup(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.config['control-group'].$get(undefined, options))
}

export async function postSysConfigControlGroup(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.config['control-group'].$post(undefined, options))
}

export async function deleteSysConfigControlGroup(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.config['control-group'].$delete(undefined, options))
}

export async function getSysConfigCors(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.config.cors.$get(undefined, options))
}

export async function postSysConfigCors(
  args: InferRequestType<typeof client.sys.config.cors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.config.cors.$post(args, options))
}

export async function deleteSysConfigCors(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.config.cors.$delete(undefined, options))
}

export async function getSysConfigGroupPolicyApplication(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.config['group-policy-application'].$get(undefined, options))
}

export async function postSysConfigGroupPolicyApplication(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.config['group-policy-application'].$post(undefined, options),
  )
}

export async function postSysConfigReloadSubsystem(
  args: InferRequestType<(typeof client.sys.config.reload)[':subsystem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.config.reload[':subsystem'].$post(args, options))
}

export async function getSysConfigStateSanitized(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.config.state.sanitized.$get(undefined, options))
}

export async function getSysConfigUiHeadersIndex(
  args: InferRequestType<typeof client.sys.config.ui.headers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.config.ui.headers.index.$get(args, options))
}

export async function getSysConfigUiHeadersHeader(
  args: InferRequestType<(typeof client.sys.config.ui.headers)[':header']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.config.ui.headers[':header'].$get(args, options))
}

export async function postSysConfigUiHeadersHeader(
  args: InferRequestType<(typeof client.sys.config.ui.headers)[':header']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.config.ui.headers[':header'].$post(args, options))
}

export async function deleteSysConfigUiHeadersHeader(
  args: InferRequestType<(typeof client.sys.config.ui.headers)[':header']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.config.ui.headers[':header'].$delete(args, options))
}

export async function postSysControlGroupAuthorize(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['control-group'].authorize.$post(undefined, options))
}

export async function postSysControlGroupRequest(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['control-group'].request.$post(undefined, options))
}

export async function postSysDecodeToken(
  args: InferRequestType<(typeof client.sys)['decode-token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['decode-token'].$post(args, options))
}

export async function getSysExperiments(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.experiments.$get(undefined, options))
}

export async function getSysGenerateRoot(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['generate-root'].$get(undefined, options))
}

export async function postSysGenerateRoot(
  args: InferRequestType<(typeof client.sys)['generate-root']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['generate-root'].$post(args, options))
}

export async function deleteSysGenerateRoot(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['generate-root'].$delete(undefined, options))
}

export async function getSysGenerateRootAttempt(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['generate-root'].attempt.$get(undefined, options))
}

export async function postSysGenerateRootAttempt(
  args: InferRequestType<(typeof client.sys)['generate-root']['attempt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['generate-root'].attempt.$post(args, options))
}

export async function deleteSysGenerateRootAttempt(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['generate-root'].attempt.$delete(undefined, options))
}

export async function postSysGenerateRootUpdate(
  args: InferRequestType<(typeof client.sys)['generate-root']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['generate-root'].update.$post(args, options))
}

export async function getSysHaStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['ha-status'].$get(undefined, options))
}

export async function getSysHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.health.$get(undefined, options))
}

export async function getSysHostInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['host-info'].$get(undefined, options))
}

export async function getSysInFlightReq(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['in-flight-req'].$get(undefined, options))
}

export async function getSysInit(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.init.$get(undefined, options))
}

export async function postSysInit(
  args: InferRequestType<typeof client.sys.init.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.init.$post(args, options))
}

export async function getSysInternalCountersActivity(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.counters.activity.$get(undefined, options))
}

export async function getSysInternalCountersActivityExport(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.counters.activity.export.$get(undefined, options))
}

export async function getSysInternalCountersActivityMonthly(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.counters.activity.monthly.$get(undefined, options))
}

export async function getSysInternalCountersConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.counters.config.$get(undefined, options))
}

export async function postSysInternalCountersConfig(
  args: InferRequestType<typeof client.sys.internal.counters.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.internal.counters.config.$post(args, options))
}

export async function getSysInternalCountersEntities(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.counters.entities.$get(undefined, options))
}

export async function getSysInternalCountersRequests(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.counters.requests.$get(undefined, options))
}

export async function getSysInternalCountersTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.counters.tokens.$get(undefined, options))
}

export async function getSysInternalInspectRouterTag(
  args: InferRequestType<(typeof client.sys.internal.inspect.router)[':tag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.internal.inspect.router[':tag'].$get(args, options))
}

export async function getSysInternalSpecsOpenapi(
  args: InferRequestType<typeof client.sys.internal.specs.openapi.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.internal.specs.openapi.$get(args, options))
}

export async function postSysInternalSpecsOpenapi(
  args: InferRequestType<typeof client.sys.internal.specs.openapi.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.internal.specs.openapi.$post(args, options))
}

export async function getSysInternalUiFeatureFlags(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.ui['feature-flags'].$get(undefined, options))
}

export async function getSysInternalUiMounts(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.ui.mounts.$get(undefined, options))
}

export async function getSysInternalUiMountsPath(
  args: InferRequestType<(typeof client.sys.internal.ui.mounts)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.internal.ui.mounts[':path'].$get(args, options))
}

export async function getSysInternalUiNamespaces(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.ui.namespaces.$get(undefined, options))
}

export async function getSysInternalUiResultantAcl(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.internal.ui['resultant-acl'].$get(undefined, options))
}

export async function getSysKeyStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['key-status'].$get(undefined, options))
}

export async function getSysLeader(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.leader.$get(undefined, options))
}

export async function getSysLeases(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.leases.$get(undefined, options))
}

export async function getSysLeasesCount(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.leases.count.$get(undefined, options))
}

export async function postSysLeasesLookup(
  args: InferRequestType<typeof client.sys.leases.lookup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.leases.lookup.$post(args, options))
}

export async function getSysLeasesLookupPrefixIndex(
  args: InferRequestType<(typeof client.sys.leases.lookup)[':prefix']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.leases.lookup[':prefix'].index.$get(args, options))
}

export async function postSysLeasesRenew(
  args: InferRequestType<typeof client.sys.leases.renew.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.leases.renew.$post(args, options))
}

export async function postSysLeasesRenewUrlLeaseId(
  args: InferRequestType<(typeof client.sys.leases.renew)[':url_lease_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.leases.renew[':url_lease_id'].$post(args, options))
}

export async function postSysLeasesRevoke(
  args: InferRequestType<typeof client.sys.leases.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.leases.revoke.$post(args, options))
}

export async function postSysLeasesRevokeForcePrefix(
  args: InferRequestType<(typeof client.sys.leases)['revoke-force'][':prefix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.leases['revoke-force'][':prefix'].$post(args, options))
}

export async function postSysLeasesRevokePrefixPrefix(
  args: InferRequestType<(typeof client.sys.leases)['revoke-prefix'][':prefix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.leases['revoke-prefix'][':prefix'].$post(args, options))
}

export async function postSysLeasesRevokeUrlLeaseId(
  args: InferRequestType<(typeof client.sys.leases.revoke)[':url_lease_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.leases.revoke[':url_lease_id'].$post(args, options))
}

export async function postSysLeasesTidy(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.leases.tidy.$post(undefined, options))
}

export async function getSysLicenseStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.license.status.$get(undefined, options))
}

export async function getSysLockedUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['locked-users'].$get(undefined, options))
}

export async function postSysLockedUsersMountAccessorUnlockAliasIdentifier(
  args: InferRequestType<
    (typeof client.sys)['locked-users'][':mount_accessor']['unlock'][':alias_identifier']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys['locked-users'][':mount_accessor'].unlock[':alias_identifier'].$post(args, options),
  )
}

export async function getSysLoggers(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.loggers.$get(undefined, options))
}

export async function postSysLoggers(
  args: InferRequestType<typeof client.sys.loggers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.loggers.$post(args, options))
}

export async function deleteSysLoggers(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.loggers.$delete(undefined, options))
}

export async function getSysLoggersName(
  args: InferRequestType<(typeof client.sys.loggers)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.loggers[':name'].$get(args, options))
}

export async function postSysLoggersName(
  args: InferRequestType<(typeof client.sys.loggers)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.loggers[':name'].$post(args, options))
}

export async function deleteSysLoggersName(
  args: InferRequestType<(typeof client.sys.loggers)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.loggers[':name'].$delete(args, options))
}

export async function getSysManagedKeysTypeIndex(
  args: InferRequestType<(typeof client.sys)['managed-keys'][':type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['managed-keys'][':type'].index.$get(args, options))
}

export async function getSysManagedKeysTypeName(
  args: InferRequestType<(typeof client.sys)['managed-keys'][':type'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['managed-keys'][':type'][':name'].$get(args, options))
}

export async function postSysManagedKeysTypeName(
  args: InferRequestType<(typeof client.sys)['managed-keys'][':type'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['managed-keys'][':type'][':name'].$post(args, options))
}

export async function deleteSysManagedKeysTypeName(
  args: InferRequestType<(typeof client.sys)['managed-keys'][':type'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['managed-keys'][':type'][':name'].$delete(args, options))
}

export async function postSysManagedKeysTypeNameTestSign(
  args: InferRequestType<
    (typeof client.sys)['managed-keys'][':type'][':name']['test']['sign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys['managed-keys'][':type'][':name'].test.sign.$post(args, options),
  )
}

export async function getSysMetrics(
  args: InferRequestType<typeof client.sys.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.metrics.$get(args, options))
}

export async function getSysMfaMethodIndex(
  args: InferRequestType<typeof client.sys.mfa.method.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.index.$get(args, options))
}

export async function getSysMfaMethodDuoName(
  args: InferRequestType<(typeof client.sys.mfa.method.duo)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.duo[':name'].$get(args, options))
}

export async function postSysMfaMethodDuoName(
  args: InferRequestType<(typeof client.sys.mfa.method.duo)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.duo[':name'].$post(args, options))
}

export async function deleteSysMfaMethodDuoName(
  args: InferRequestType<(typeof client.sys.mfa.method.duo)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.duo[':name'].$delete(args, options))
}

export async function getSysMfaMethodOktaName(
  args: InferRequestType<(typeof client.sys.mfa.method.okta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.okta[':name'].$get(args, options))
}

export async function postSysMfaMethodOktaName(
  args: InferRequestType<(typeof client.sys.mfa.method.okta)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.okta[':name'].$post(args, options))
}

export async function deleteSysMfaMethodOktaName(
  args: InferRequestType<(typeof client.sys.mfa.method.okta)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.okta[':name'].$delete(args, options))
}

export async function getSysMfaMethodPingidName(
  args: InferRequestType<(typeof client.sys.mfa.method.pingid)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.pingid[':name'].$get(args, options))
}

export async function postSysMfaMethodPingidName(
  args: InferRequestType<(typeof client.sys.mfa.method.pingid)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.pingid[':name'].$post(args, options))
}

export async function deleteSysMfaMethodPingidName(
  args: InferRequestType<(typeof client.sys.mfa.method.pingid)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.pingid[':name'].$delete(args, options))
}

export async function getSysMfaMethodTotpName(
  args: InferRequestType<(typeof client.sys.mfa.method.totp)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.totp[':name'].$get(args, options))
}

export async function postSysMfaMethodTotpName(
  args: InferRequestType<(typeof client.sys.mfa.method.totp)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.totp[':name'].$post(args, options))
}

export async function deleteSysMfaMethodTotpName(
  args: InferRequestType<(typeof client.sys.mfa.method.totp)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.totp[':name'].$delete(args, options))
}

export async function postSysMfaMethodTotpNameAdminDestroy(
  args: InferRequestType<(typeof client.sys.mfa.method.totp)[':name']['admin-destroy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.mfa.method.totp[':name']['admin-destroy'].$post(args, options),
  )
}

export async function postSysMfaMethodTotpNameAdminGenerate(
  args: InferRequestType<(typeof client.sys.mfa.method.totp)[':name']['admin-generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.mfa.method.totp[':name']['admin-generate'].$post(args, options),
  )
}

export async function getSysMfaMethodTotpNameGenerate(
  args: InferRequestType<(typeof client.sys.mfa.method.totp)[':name']['generate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.method.totp[':name'].generate.$get(args, options))
}

export async function postSysMfaValidate(
  args: InferRequestType<typeof client.sys.mfa.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mfa.validate.$post(args, options))
}

export async function getSysMonitor(
  args: InferRequestType<typeof client.sys.monitor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.monitor.$get(args, options))
}

export async function getSysMounts(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.mounts.$get(undefined, options))
}

export async function getSysMountsPath(
  args: InferRequestType<(typeof client.sys.mounts)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mounts[':path'].$get(args, options))
}

export async function postSysMountsPath(
  args: InferRequestType<(typeof client.sys.mounts)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mounts[':path'].$post(args, options))
}

export async function deleteSysMountsPath(
  args: InferRequestType<(typeof client.sys.mounts)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mounts[':path'].$delete(args, options))
}

export async function getSysMountsPathTune(
  args: InferRequestType<(typeof client.sys.mounts)[':path']['tune']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mounts[':path'].tune.$get(args, options))
}

export async function postSysMountsPathTune(
  args: InferRequestType<(typeof client.sys.mounts)[':path']['tune']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.mounts[':path'].tune.$post(args, options))
}

export async function getSysNamespacesIndex(
  args: InferRequestType<typeof client.sys.namespaces.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.namespaces.index.$get(args, options))
}

export async function postSysNamespacesApiLockLock(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.namespaces['api-lock'].lock.$post(undefined, options))
}

export async function postSysNamespacesApiLockLockPath(
  args: InferRequestType<(typeof client.sys.namespaces)['api-lock']['lock'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.namespaces['api-lock'].lock[':path'].$post(args, options))
}

export async function postSysNamespacesApiLockUnlock(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.namespaces['api-lock'].unlock.$post(undefined, options))
}

export async function postSysNamespacesApiLockUnlockPath(
  args: InferRequestType<(typeof client.sys.namespaces)['api-lock']['unlock'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.namespaces['api-lock'].unlock[':path'].$post(args, options))
}

export async function getSysNamespacesPath(
  args: InferRequestType<(typeof client.sys.namespaces)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.namespaces[':path'].$get(args, options))
}

export async function postSysNamespacesPath(
  args: InferRequestType<(typeof client.sys.namespaces)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.namespaces[':path'].$post(args, options))
}

export async function deleteSysNamespacesPath(
  args: InferRequestType<(typeof client.sys.namespaces)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.namespaces[':path'].$delete(args, options))
}

export async function getSysPluginsCatalog(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.plugins.catalog.$get(undefined, options))
}

export async function getSysPluginsCatalogName(
  args: InferRequestType<(typeof client.sys.plugins.catalog)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.plugins.catalog[':name'].$get(args, options))
}

export async function postSysPluginsCatalogName(
  args: InferRequestType<(typeof client.sys.plugins.catalog)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.plugins.catalog[':name'].$post(args, options))
}

export async function deleteSysPluginsCatalogName(
  args: InferRequestType<(typeof client.sys.plugins.catalog)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.plugins.catalog[':name'].$delete(args, options))
}

export async function getSysPluginsCatalogTypeIndex(
  args: InferRequestType<(typeof client.sys.plugins.catalog)[':type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.plugins.catalog[':type'].index.$get(args, options))
}

export async function getSysPluginsCatalogTypeName(
  args: InferRequestType<(typeof client.sys.plugins.catalog)[':type'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.plugins.catalog[':type'][':name'].$get(args, options))
}

export async function postSysPluginsCatalogTypeName(
  args: InferRequestType<(typeof client.sys.plugins.catalog)[':type'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.plugins.catalog[':type'][':name'].$post(args, options))
}

export async function deleteSysPluginsCatalogTypeName(
  args: InferRequestType<(typeof client.sys.plugins.catalog)[':type'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.plugins.catalog[':type'][':name'].$delete(args, options))
}

export async function postSysPluginsReloadBackend(
  args: InferRequestType<typeof client.sys.plugins.reload.backend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.plugins.reload.backend.$post(args, options))
}

export async function getSysPluginsReloadBackendStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.plugins.reload.backend.status.$get(undefined, options))
}

export async function getSysPluginsRuntimesCatalogIndex(
  args: InferRequestType<typeof client.sys.plugins.runtimes.catalog.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.plugins.runtimes.catalog.index.$get(args, options))
}

export async function getSysPluginsRuntimesCatalogTypeName(
  args: InferRequestType<(typeof client.sys.plugins.runtimes.catalog)[':type'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.plugins.runtimes.catalog[':type'][':name'].$get(args, options),
  )
}

export async function postSysPluginsRuntimesCatalogTypeName(
  args: InferRequestType<(typeof client.sys.plugins.runtimes.catalog)[':type'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.plugins.runtimes.catalog[':type'][':name'].$post(args, options),
  )
}

export async function deleteSysPluginsRuntimesCatalogTypeName(
  args: InferRequestType<(typeof client.sys.plugins.runtimes.catalog)[':type'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.plugins.runtimes.catalog[':type'][':name'].$delete(args, options),
  )
}

export async function getSysPoliciesAclIndex(
  args: InferRequestType<typeof client.sys.policies.acl.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.acl.index.$get(args, options))
}

export async function getSysPoliciesAclName(
  args: InferRequestType<(typeof client.sys.policies.acl)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.acl[':name'].$get(args, options))
}

export async function postSysPoliciesAclName(
  args: InferRequestType<(typeof client.sys.policies.acl)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.acl[':name'].$post(args, options))
}

export async function deleteSysPoliciesAclName(
  args: InferRequestType<(typeof client.sys.policies.acl)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.acl[':name'].$delete(args, options))
}

export async function getSysPoliciesEgpIndex(
  args: InferRequestType<typeof client.sys.policies.egp.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.egp.index.$get(args, options))
}

export async function getSysPoliciesEgpName(
  args: InferRequestType<(typeof client.sys.policies.egp)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.egp[':name'].$get(args, options))
}

export async function postSysPoliciesEgpName(
  args: InferRequestType<(typeof client.sys.policies.egp)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.egp[':name'].$post(args, options))
}

export async function deleteSysPoliciesEgpName(
  args: InferRequestType<(typeof client.sys.policies.egp)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.egp[':name'].$delete(args, options))
}

export async function getSysPoliciesPasswordIndex(
  args: InferRequestType<typeof client.sys.policies.password.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.password.index.$get(args, options))
}

export async function getSysPoliciesPasswordName(
  args: InferRequestType<(typeof client.sys.policies.password)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.password[':name'].$get(args, options))
}

export async function postSysPoliciesPasswordName(
  args: InferRequestType<(typeof client.sys.policies.password)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.password[':name'].$post(args, options))
}

export async function deleteSysPoliciesPasswordName(
  args: InferRequestType<(typeof client.sys.policies.password)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.password[':name'].$delete(args, options))
}

export async function getSysPoliciesPasswordNameGenerate(
  args: InferRequestType<(typeof client.sys.policies.password)[':name']['generate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.password[':name'].generate.$get(args, options))
}

export async function getSysPoliciesRgpIndex(
  args: InferRequestType<typeof client.sys.policies.rgp.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.rgp.index.$get(args, options))
}

export async function getSysPoliciesRgpName(
  args: InferRequestType<(typeof client.sys.policies.rgp)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.rgp[':name'].$get(args, options))
}

export async function postSysPoliciesRgpName(
  args: InferRequestType<(typeof client.sys.policies.rgp)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.rgp[':name'].$post(args, options))
}

export async function deleteSysPoliciesRgpName(
  args: InferRequestType<(typeof client.sys.policies.rgp)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policies.rgp[':name'].$delete(args, options))
}

export async function getSysPolicy(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.policy.$get(undefined, options))
}

export async function getSysPolicyIndex(
  args: InferRequestType<typeof client.sys.policy.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policy.index.$get(args, options))
}

export async function getSysPolicyName(
  args: InferRequestType<(typeof client.sys.policy)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policy[':name'].$get(args, options))
}

export async function postSysPolicyName(
  args: InferRequestType<(typeof client.sys.policy)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policy[':name'].$post(args, options))
}

export async function deleteSysPolicyName(
  args: InferRequestType<(typeof client.sys.policy)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.policy[':name'].$delete(args, options))
}

export async function getSysPprof(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.$get(undefined, options))
}

export async function getSysPprofAllocs(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.allocs.$get(undefined, options))
}

export async function getSysPprofBlock(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.block.$get(undefined, options))
}

export async function getSysPprofCmdline(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.cmdline.$get(undefined, options))
}

export async function getSysPprofGoroutine(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.goroutine.$get(undefined, options))
}

export async function getSysPprofHeap(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.heap.$get(undefined, options))
}

export async function getSysPprofMutex(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.mutex.$get(undefined, options))
}

export async function getSysPprofProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.profile.$get(undefined, options))
}

export async function getSysPprofSymbol(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.symbol.$get(undefined, options))
}

export async function getSysPprofThreadcreate(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.threadcreate.$get(undefined, options))
}

export async function getSysPprofTrace(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.pprof.trace.$get(undefined, options))
}

export async function getSysQuotasConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.quotas.config.$get(undefined, options))
}

export async function postSysQuotasConfig(
  args: InferRequestType<typeof client.sys.quotas.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.quotas.config.$post(args, options))
}

export async function getSysQuotasLeaseCountIndex(
  args: InferRequestType<(typeof client.sys.quotas)['lease-count']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.quotas['lease-count'].index.$get(args, options))
}

export async function getSysQuotasLeaseCountName(
  args: InferRequestType<(typeof client.sys.quotas)['lease-count'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.quotas['lease-count'][':name'].$get(args, options))
}

export async function postSysQuotasLeaseCountName(
  args: InferRequestType<(typeof client.sys.quotas)['lease-count'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.quotas['lease-count'][':name'].$post(args, options))
}

export async function deleteSysQuotasLeaseCountName(
  args: InferRequestType<(typeof client.sys.quotas)['lease-count'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.quotas['lease-count'][':name'].$delete(args, options))
}

export async function getSysQuotasRateLimitIndex(
  args: InferRequestType<(typeof client.sys.quotas)['rate-limit']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.quotas['rate-limit'].index.$get(args, options))
}

export async function getSysQuotasRateLimitName(
  args: InferRequestType<(typeof client.sys.quotas)['rate-limit'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.quotas['rate-limit'][':name'].$get(args, options))
}

export async function postSysQuotasRateLimitName(
  args: InferRequestType<(typeof client.sys.quotas)['rate-limit'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.quotas['rate-limit'][':name'].$post(args, options))
}

export async function deleteSysQuotasRateLimitName(
  args: InferRequestType<(typeof client.sys.quotas)['rate-limit'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.quotas['rate-limit'][':name'].$delete(args, options))
}

export async function getSysRawPath(
  args: InferRequestType<(typeof client.sys.raw)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.raw[':path'].$get(args, options))
}

export async function postSysRawPath(
  args: InferRequestType<(typeof client.sys.raw)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.raw[':path'].$post(args, options))
}

export async function deleteSysRawPath(
  args: InferRequestType<(typeof client.sys.raw)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.raw[':path'].$delete(args, options))
}

export async function getSysRawPathIndex(
  args: InferRequestType<(typeof client.sys.raw)[':path']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.raw[':path'].index.$get(args, options))
}

export async function getSysRekeyBackup(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.rekey.backup.$get(undefined, options))
}

export async function deleteSysRekeyBackup(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.rekey.backup.$delete(undefined, options))
}

export async function getSysRekeyInit(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.rekey.init.$get(undefined, options))
}

export async function postSysRekeyInit(
  args: InferRequestType<typeof client.sys.rekey.init.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.rekey.init.$post(args, options))
}

export async function deleteSysRekeyInit(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.rekey.init.$delete(undefined, options))
}

export async function getSysRekeyRecoveryKeyBackup(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.rekey['recovery-key-backup'].$get(undefined, options))
}

export async function deleteSysRekeyRecoveryKeyBackup(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.rekey['recovery-key-backup'].$delete(undefined, options))
}

export async function postSysRekeyUpdate(
  args: InferRequestType<typeof client.sys.rekey.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.rekey.update.$post(args, options))
}

export async function getSysRekeyVerify(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.rekey.verify.$get(undefined, options))
}

export async function postSysRekeyVerify(
  args: InferRequestType<typeof client.sys.rekey.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.rekey.verify.$post(args, options))
}

export async function deleteSysRekeyVerify(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.rekey.verify.$delete(undefined, options))
}

export async function postSysRemount(
  args: InferRequestType<typeof client.sys.remount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.remount.$post(args, options))
}

export async function getSysRemountStatusMigrationId(
  args: InferRequestType<(typeof client.sys.remount.status)[':migration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.remount.status[':migration_id'].$get(args, options))
}

export async function postSysRenew(
  args: InferRequestType<typeof client.sys.renew.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.renew.$post(args, options))
}

export async function postSysRenewUrlLeaseId(
  args: InferRequestType<(typeof client.sys.renew)[':url_lease_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.renew[':url_lease_id'].$post(args, options))
}

export async function postSysReplicationDrPrimaryDemote(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.dr.primary.demote.$post(undefined, options))
}

export async function postSysReplicationDrPrimaryDisable(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.dr.primary.disable.$post(undefined, options))
}

export async function postSysReplicationDrPrimaryEnable(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.dr.primary.enable.$post(undefined, options))
}

export async function postSysReplicationDrPrimaryRevokeSecondary(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.dr.primary['revoke-secondary'].$post(undefined, options),
  )
}

export async function postSysReplicationDrPrimarySecondaryToken(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.dr.primary['secondary-token'].$post(undefined, options),
  )
}

export async function postSysReplicationDrSecondaryConfigReloadSubsystem(
  args: InferRequestType<
    (typeof client.sys.replication.dr.secondary.config.reload)[':subsystem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.dr.secondary.config.reload[':subsystem'].$post(args, options),
  )
}

export async function postSysReplicationDrSecondaryDisable(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.dr.secondary.disable.$post(undefined, options))
}

export async function postSysReplicationDrSecondaryEnable(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.dr.secondary.enable.$post(undefined, options))
}

export async function postSysReplicationDrSecondaryGeneratePublicKey(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.dr.secondary['generate-public-key'].$post(undefined, options),
  )
}

export async function getSysReplicationDrSecondaryLicenseStatus(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.dr.secondary.license.status.$get(undefined, options),
  )
}

export async function postSysReplicationDrSecondaryOperationTokenDelete(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.dr.secondary['operation-token'].delete.$post(undefined, options),
  )
}

export async function postSysReplicationDrSecondaryPromote(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.dr.secondary.promote.$post(undefined, options))
}

export async function postSysReplicationDrSecondaryRecover(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.dr.secondary.recover.$post(undefined, options))
}

export async function postSysReplicationDrSecondaryReindex(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.dr.secondary.reindex.$post(undefined, options))
}

export async function postSysReplicationDrSecondaryUpdatePrimary(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.dr.secondary['update-primary'].$post(undefined, options),
  )
}

export async function getSysReplicationDrStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.dr.status.$get(undefined, options))
}

export async function postSysReplicationPerformancePrimaryDemote(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.performance.primary.demote.$post(undefined, options),
  )
}

export async function postSysReplicationPerformancePrimaryDisable(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.performance.primary.disable.$post(undefined, options),
  )
}

export async function getSysReplicationPerformancePrimaryDynamicFilterId(
  args: InferRequestType<
    (typeof client.sys.replication.performance.primary)['dynamic-filter'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.primary['dynamic-filter'][':id'].$get(args, options),
  )
}

export async function postSysReplicationPerformancePrimaryEnable(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.performance.primary.enable.$post(undefined, options),
  )
}

export async function getSysReplicationPerformancePrimaryPathsFilterId(
  args: InferRequestType<
    (typeof client.sys.replication.performance.primary)['paths-filter'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.primary['paths-filter'][':id'].$get(args, options),
  )
}

export async function postSysReplicationPerformancePrimaryPathsFilterId(
  args: InferRequestType<
    (typeof client.sys.replication.performance.primary)['paths-filter'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.primary['paths-filter'][':id'].$post(args, options),
  )
}

export async function deleteSysReplicationPerformancePrimaryPathsFilterId(
  args: InferRequestType<
    (typeof client.sys.replication.performance.primary)['paths-filter'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.primary['paths-filter'][':id'].$delete(args, options),
  )
}

export async function postSysReplicationPerformancePrimaryRevokeSecondary(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.primary['revoke-secondary'].$post(undefined, options),
  )
}

export async function postSysReplicationPerformancePrimarySecondaryToken(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.primary['secondary-token'].$post(undefined, options),
  )
}

export async function postSysReplicationPerformanceSecondaryDisable(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.secondary.disable.$post(undefined, options),
  )
}

export async function getSysReplicationPerformanceSecondaryDynamicFilterId(
  args: InferRequestType<
    (typeof client.sys.replication.performance.secondary)['dynamic-filter'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.secondary['dynamic-filter'][':id'].$get(args, options),
  )
}

export async function postSysReplicationPerformanceSecondaryEnable(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.performance.secondary.enable.$post(undefined, options),
  )
}

export async function postSysReplicationPerformanceSecondaryGeneratePublicKey(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.secondary['generate-public-key'].$post(undefined, options),
  )
}

export async function postSysReplicationPerformanceSecondaryPromote(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.secondary.promote.$post(undefined, options),
  )
}

export async function postSysReplicationPerformanceSecondaryUpdatePrimary(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.replication.performance.secondary['update-primary'].$post(undefined, options),
  )
}

export async function getSysReplicationPerformanceStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.performance.status.$get(undefined, options))
}

export async function postSysReplicationPrimaryDemote(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.primary.demote.$post(undefined, options))
}

export async function postSysReplicationPrimaryDisable(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.primary.disable.$post(undefined, options))
}

export async function postSysReplicationPrimaryEnable(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.primary.enable.$post(undefined, options))
}

export async function postSysReplicationPrimaryRevokeSecondary(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.primary['revoke-secondary'].$post(undefined, options),
  )
}

export async function postSysReplicationPrimarySecondaryToken(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.primary['secondary-token'].$post(undefined, options),
  )
}

export async function postSysReplicationRecover(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.recover.$post(undefined, options))
}

export async function postSysReplicationReindex(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.reindex.$post(undefined, options))
}

export async function postSysReplicationSecondaryDisable(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.secondary.disable.$post(undefined, options))
}

export async function postSysReplicationSecondaryEnable(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.secondary.enable.$post(undefined, options))
}

export async function postSysReplicationSecondaryPromote(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.secondary.promote.$post(undefined, options))
}

export async function postSysReplicationSecondaryUpdatePrimary(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sys.replication.secondary['update-primary'].$post(undefined, options),
  )
}

export async function getSysReplicationStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.replication.status.$get(undefined, options))
}

export async function postSysRevoke(
  args: InferRequestType<typeof client.sys.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.revoke.$post(args, options))
}

export async function postSysRevokeForcePrefix(
  args: InferRequestType<(typeof client.sys)['revoke-force'][':prefix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['revoke-force'][':prefix'].$post(args, options))
}

export async function postSysRevokePrefixPrefix(
  args: InferRequestType<(typeof client.sys)['revoke-prefix'][':prefix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['revoke-prefix'][':prefix'].$post(args, options))
}

export async function postSysRevokeUrlLeaseId(
  args: InferRequestType<(typeof client.sys.revoke)[':url_lease_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.revoke[':url_lease_id'].$post(args, options))
}

export async function postSysRotate(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.rotate.$post(undefined, options))
}

export async function getSysRotateConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.rotate.config.$get(undefined, options))
}

export async function postSysRotateConfig(
  args: InferRequestType<typeof client.sys.rotate.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.rotate.config.$post(args, options))
}

export async function postSysSeal(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.seal.$post(undefined, options))
}

export async function getSysSealStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['seal-status'].$get(undefined, options))
}

export async function getSysSealwrapRewrap(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.sealwrap.rewrap.$get(undefined, options))
}

export async function postSysSealwrapRewrap(options?: ClientRequestOptions) {
  return await parseResponse(client.sys.sealwrap.rewrap.$post(undefined, options))
}

export async function postSysStepDown(options?: ClientRequestOptions) {
  return await parseResponse(client.sys['step-down'].$post(undefined, options))
}

export async function getSysStorageRaftSnapshotAutoConfigIndex(
  args: InferRequestType<
    (typeof client.sys.storage.raft)['snapshot-auto']['config']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.storage.raft['snapshot-auto'].config.index.$get(args, options),
  )
}

export async function getSysStorageRaftSnapshotAutoConfigName(
  args: InferRequestType<
    (typeof client.sys.storage.raft)['snapshot-auto']['config'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.storage.raft['snapshot-auto'].config[':name'].$get(args, options),
  )
}

export async function postSysStorageRaftSnapshotAutoConfigName(
  args: InferRequestType<
    (typeof client.sys.storage.raft)['snapshot-auto']['config'][':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.storage.raft['snapshot-auto'].config[':name'].$post(args, options),
  )
}

export async function deleteSysStorageRaftSnapshotAutoConfigName(
  args: InferRequestType<
    (typeof client.sys.storage.raft)['snapshot-auto']['config'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.storage.raft['snapshot-auto'].config[':name'].$delete(args, options),
  )
}

export async function getSysStorageRaftSnapshotAutoStatusName(
  args: InferRequestType<
    (typeof client.sys.storage.raft)['snapshot-auto']['status'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sys.storage.raft['snapshot-auto'].status[':name'].$get(args, options),
  )
}

export async function postSysToolsHash(
  args: InferRequestType<typeof client.sys.tools.hash.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.tools.hash.$post(args, options))
}

export async function postSysToolsHashUrlalgorithm(
  args: InferRequestType<(typeof client.sys.tools.hash)[':urlalgorithm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.tools.hash[':urlalgorithm'].$post(args, options))
}

export async function postSysToolsRandom(
  args: InferRequestType<typeof client.sys.tools.random.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.tools.random.$post(args, options))
}

export async function postSysToolsRandomSource(
  args: InferRequestType<(typeof client.sys.tools.random)[':source']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.tools.random[':source'].$post(args, options))
}

export async function postSysToolsRandomSourceUrlbytes(
  args: InferRequestType<(typeof client.sys.tools.random)[':source'][':urlbytes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.tools.random[':source'][':urlbytes'].$post(args, options))
}

export async function postSysToolsRandomUrlbytes(
  args: InferRequestType<(typeof client.sys.tools.random)[':urlbytes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.tools.random[':urlbytes'].$post(args, options))
}

export async function postSysUnseal(
  args: InferRequestType<typeof client.sys.unseal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.unseal.$post(args, options))
}

export async function getSysVersionHistoryIndex(
  args: InferRequestType<(typeof client.sys)['version-history']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys['version-history'].index.$get(args, options))
}

export async function getSysWrappingLookup(
  args: InferRequestType<typeof client.sys.wrapping.lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.wrapping.lookup.$get(args, options))
}

export async function postSysWrappingLookup(
  args: InferRequestType<typeof client.sys.wrapping.lookup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.wrapping.lookup.$post(args, options))
}

export async function postSysWrappingRewrap(
  args: InferRequestType<typeof client.sys.wrapping.rewrap.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.wrapping.rewrap.$post(args, options))
}

export async function postSysWrappingUnwrap(
  args: InferRequestType<typeof client.sys.wrapping.unwrap.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.wrapping.unwrap.$post(args, options))
}

export async function postSysWrappingWrap(
  args: InferRequestType<typeof client.sys.wrapping.wrap.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sys.wrapping.wrap.$post(args, options))
}

export async function getAlicloudMountPathConfig(
  args: InferRequestType<(typeof client)[':alicloud_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':alicloud_mount_path'].config.$get(args, options))
}

export async function postAlicloudMountPathConfig(
  args: InferRequestType<(typeof client)[':alicloud_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':alicloud_mount_path'].config.$post(args, options))
}

export async function deleteAlicloudMountPathConfig(
  args: InferRequestType<(typeof client)[':alicloud_mount_path']['config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':alicloud_mount_path'].config.$delete(args, options))
}

export async function getAlicloudMountPathCredsName(
  args: InferRequestType<(typeof client)[':alicloud_mount_path']['creds'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':alicloud_mount_path'].creds[':name'].$get(args, options))
}

export async function getAlicloudMountPathRoleIndex(
  args: InferRequestType<(typeof client)[':alicloud_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':alicloud_mount_path'].role.index.$get(args, options))
}

export async function getAlicloudMountPathRoleName(
  args: InferRequestType<(typeof client)[':alicloud_mount_path']['role'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':alicloud_mount_path'].role[':name'].$get(args, options))
}

export async function postAlicloudMountPathRoleName(
  args: InferRequestType<(typeof client)[':alicloud_mount_path']['role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':alicloud_mount_path'].role[':name'].$post(args, options))
}

export async function deleteAlicloudMountPathRoleName(
  args: InferRequestType<(typeof client)[':alicloud_mount_path']['role'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':alicloud_mount_path'].role[':name'].$delete(args, options))
}

export async function getAwsMountPathConfigLease(
  args: InferRequestType<(typeof client)[':aws_mount_path']['config']['lease']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].config.lease.$get(args, options))
}

export async function postAwsMountPathConfigLease(
  args: InferRequestType<(typeof client)[':aws_mount_path']['config']['lease']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].config.lease.$post(args, options))
}

export async function getAwsMountPathConfigRoot(
  args: InferRequestType<(typeof client)[':aws_mount_path']['config']['root']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].config.root.$get(args, options))
}

export async function postAwsMountPathConfigRoot(
  args: InferRequestType<(typeof client)[':aws_mount_path']['config']['root']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].config.root.$post(args, options))
}

export async function postAwsMountPathConfigRotateRoot(
  args: InferRequestType<(typeof client)[':aws_mount_path']['config']['rotate-root']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].config['rotate-root'].$post(args, options))
}

export async function getAwsMountPathCredsName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['creds'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].creds[':name'].$get(args, options))
}

export async function postAwsMountPathCredsName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['creds'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].creds[':name'].$post(args, options))
}

export async function getAwsMountPathRolesIndex(
  args: InferRequestType<(typeof client)[':aws_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].roles.index.$get(args, options))
}

export async function getAwsMountPathRolesName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['roles'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].roles[':name'].$get(args, options))
}

export async function postAwsMountPathRolesName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['roles'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].roles[':name'].$post(args, options))
}

export async function deleteAwsMountPathRolesName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['roles'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].roles[':name'].$delete(args, options))
}

export async function getAwsMountPathStaticCredsName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['static-creds'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path']['static-creds'][':name'].$get(args, options))
}

export async function getAwsMountPathStaticRolesName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['static-roles'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path']['static-roles'][':name'].$get(args, options))
}

export async function postAwsMountPathStaticRolesName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['static-roles'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':aws_mount_path']['static-roles'][':name'].$post(args, options),
  )
}

export async function deleteAwsMountPathStaticRolesName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['static-roles'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':aws_mount_path']['static-roles'][':name'].$delete(args, options),
  )
}

export async function getAwsMountPathStsName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['sts'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].sts[':name'].$get(args, options))
}

export async function postAwsMountPathStsName(
  args: InferRequestType<(typeof client)[':aws_mount_path']['sts'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':aws_mount_path'].sts[':name'].$post(args, options))
}

export async function getAzureMountPathConfig(
  args: InferRequestType<(typeof client)[':azure_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':azure_mount_path'].config.$get(args, options))
}

export async function postAzureMountPathConfig(
  args: InferRequestType<(typeof client)[':azure_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':azure_mount_path'].config.$post(args, options))
}

export async function deleteAzureMountPathConfig(
  args: InferRequestType<(typeof client)[':azure_mount_path']['config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':azure_mount_path'].config.$delete(args, options))
}

export async function getAzureMountPathCredsRole(
  args: InferRequestType<(typeof client)[':azure_mount_path']['creds'][':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':azure_mount_path'].creds[':role'].$get(args, options))
}

export async function getAzureMountPathRolesIndex(
  args: InferRequestType<(typeof client)[':azure_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':azure_mount_path'].roles.index.$get(args, options))
}

export async function getAzureMountPathRolesName(
  args: InferRequestType<(typeof client)[':azure_mount_path']['roles'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':azure_mount_path'].roles[':name'].$get(args, options))
}

export async function postAzureMountPathRolesName(
  args: InferRequestType<(typeof client)[':azure_mount_path']['roles'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':azure_mount_path'].roles[':name'].$post(args, options))
}

export async function deleteAzureMountPathRolesName(
  args: InferRequestType<(typeof client)[':azure_mount_path']['roles'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':azure_mount_path'].roles[':name'].$delete(args, options))
}

export async function postAzureMountPathRotateRoot(
  args: InferRequestType<(typeof client)[':azure_mount_path']['rotate-root']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':azure_mount_path']['rotate-root'].$post(args, options))
}

export async function getConsulMountPathConfigAccess(
  args: InferRequestType<(typeof client)[':consul_mount_path']['config']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':consul_mount_path'].config.access.$get(args, options))
}

export async function postConsulMountPathConfigAccess(
  args: InferRequestType<(typeof client)[':consul_mount_path']['config']['access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':consul_mount_path'].config.access.$post(args, options))
}

export async function getConsulMountPathCredsRole(
  args: InferRequestType<(typeof client)[':consul_mount_path']['creds'][':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':consul_mount_path'].creds[':role'].$get(args, options))
}

export async function getConsulMountPathRolesIndex(
  args: InferRequestType<(typeof client)[':consul_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':consul_mount_path'].roles.index.$get(args, options))
}

export async function getConsulMountPathRolesName(
  args: InferRequestType<(typeof client)[':consul_mount_path']['roles'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':consul_mount_path'].roles[':name'].$get(args, options))
}

export async function postConsulMountPathRolesName(
  args: InferRequestType<(typeof client)[':consul_mount_path']['roles'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':consul_mount_path'].roles[':name'].$post(args, options))
}

export async function deleteConsulMountPathRolesName(
  args: InferRequestType<(typeof client)[':consul_mount_path']['roles'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':consul_mount_path'].roles[':name'].$delete(args, options))
}

export async function getDatabaseMountPathConfigIndex(
  args: InferRequestType<(typeof client)[':database_mount_path']['config']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':database_mount_path'].config.index.$get(args, options))
}

export async function getDatabaseMountPathConfigName(
  args: InferRequestType<(typeof client)[':database_mount_path']['config'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':database_mount_path'].config[':name'].$get(args, options))
}

export async function postDatabaseMountPathConfigName(
  args: InferRequestType<(typeof client)[':database_mount_path']['config'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':database_mount_path'].config[':name'].$post(args, options))
}

export async function deleteDatabaseMountPathConfigName(
  args: InferRequestType<(typeof client)[':database_mount_path']['config'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':database_mount_path'].config[':name'].$delete(args, options))
}

export async function getDatabaseMountPathCredsName(
  args: InferRequestType<(typeof client)[':database_mount_path']['creds'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':database_mount_path'].creds[':name'].$get(args, options))
}

export async function postDatabaseMountPathResetName(
  args: InferRequestType<(typeof client)[':database_mount_path']['reset'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':database_mount_path'].reset[':name'].$post(args, options))
}

export async function getDatabaseMountPathRolesIndex(
  args: InferRequestType<(typeof client)[':database_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':database_mount_path'].roles.index.$get(args, options))
}

export async function getDatabaseMountPathRolesName(
  args: InferRequestType<(typeof client)[':database_mount_path']['roles'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':database_mount_path'].roles[':name'].$get(args, options))
}

export async function postDatabaseMountPathRolesName(
  args: InferRequestType<(typeof client)[':database_mount_path']['roles'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':database_mount_path'].roles[':name'].$post(args, options))
}

export async function deleteDatabaseMountPathRolesName(
  args: InferRequestType<(typeof client)[':database_mount_path']['roles'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':database_mount_path'].roles[':name'].$delete(args, options))
}

export async function postDatabaseMountPathRotateRoleName(
  args: InferRequestType<(typeof client)[':database_mount_path']['rotate-role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':database_mount_path']['rotate-role'][':name'].$post(args, options),
  )
}

export async function postDatabaseMountPathRotateRootName(
  args: InferRequestType<(typeof client)[':database_mount_path']['rotate-root'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':database_mount_path']['rotate-root'][':name'].$post(args, options),
  )
}

export async function getDatabaseMountPathStaticCredsName(
  args: InferRequestType<(typeof client)[':database_mount_path']['static-creds'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':database_mount_path']['static-creds'][':name'].$get(args, options),
  )
}

export async function getDatabaseMountPathStaticRolesIndex(
  args: InferRequestType<(typeof client)[':database_mount_path']['static-roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':database_mount_path']['static-roles'].index.$get(args, options),
  )
}

export async function getDatabaseMountPathStaticRolesName(
  args: InferRequestType<(typeof client)[':database_mount_path']['static-roles'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':database_mount_path']['static-roles'][':name'].$get(args, options),
  )
}

export async function postDatabaseMountPathStaticRolesName(
  args: InferRequestType<(typeof client)[':database_mount_path']['static-roles'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':database_mount_path']['static-roles'][':name'].$post(args, options),
  )
}

export async function deleteDatabaseMountPathStaticRolesName(
  args: InferRequestType<
    (typeof client)[':database_mount_path']['static-roles'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':database_mount_path']['static-roles'][':name'].$delete(args, options),
  )
}

export async function getGcpMountPathConfig(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].config.$get(args, options))
}

export async function postGcpMountPathConfig(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].config.$post(args, options))
}

export async function postGcpMountPathConfigRotateRoot(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['config']['rotate-root']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].config['rotate-root'].$post(args, options))
}

export async function getGcpMountPathImpersonatedAccountIndex(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['impersonated-account']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['impersonated-account'].index.$get(args, options),
  )
}

export async function getGcpMountPathImpersonatedAccountName(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['impersonated-account'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['impersonated-account'][':name'].$get(args, options),
  )
}

export async function postGcpMountPathImpersonatedAccountName(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['impersonated-account'][':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['impersonated-account'][':name'].$post(args, options),
  )
}

export async function deleteGcpMountPathImpersonatedAccountName(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['impersonated-account'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['impersonated-account'][':name'].$delete(args, options),
  )
}

export async function getGcpMountPathImpersonatedAccountNameToken(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['impersonated-account'][':name']['token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['impersonated-account'][':name'].token.$get(args, options),
  )
}

export async function postGcpMountPathImpersonatedAccountNameToken(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['impersonated-account'][':name']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['impersonated-account'][':name'].token.$post(args, options),
  )
}

export async function getGcpMountPathImpersonatedAccountsIndex(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['impersonated-accounts']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['impersonated-accounts'].index.$get(args, options),
  )
}

export async function getGcpMountPathKeyRoleset(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['key'][':roleset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].key[':roleset'].$get(args, options))
}

export async function postGcpMountPathKeyRoleset(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['key'][':roleset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].key[':roleset'].$post(args, options))
}

export async function getGcpMountPathRolesetIndex(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['roleset']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].roleset.index.$get(args, options))
}

export async function getGcpMountPathRolesetName(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['roleset'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].roleset[':name'].$get(args, options))
}

export async function postGcpMountPathRolesetName(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['roleset'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].roleset[':name'].$post(args, options))
}

export async function deleteGcpMountPathRolesetName(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['roleset'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].roleset[':name'].$delete(args, options))
}

export async function postGcpMountPathRolesetNameRotate(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['roleset'][':name']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].roleset[':name'].rotate.$post(args, options))
}

export async function postGcpMountPathRolesetNameRotateKey(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['roleset'][':name']['rotate-key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path'].roleset[':name']['rotate-key'].$post(args, options),
  )
}

export async function getGcpMountPathRolesetRolesetKey(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['roleset'][':roleset']['key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].roleset[':roleset'].key.$get(args, options))
}

export async function postGcpMountPathRolesetRolesetKey(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['roleset'][':roleset']['key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].roleset[':roleset'].key.$post(args, options))
}

export async function getGcpMountPathRolesetRolesetToken(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['roleset'][':roleset']['token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path'].roleset[':roleset'].token.$get(args, options),
  )
}

export async function postGcpMountPathRolesetRolesetToken(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['roleset'][':roleset']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path'].roleset[':roleset'].token.$post(args, options),
  )
}

export async function getGcpMountPathRolesetsIndex(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['rolesets']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].rolesets.index.$get(args, options))
}

export async function getGcpMountPathStaticAccountIndex(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['static-account']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path']['static-account'].index.$get(args, options))
}

export async function getGcpMountPathStaticAccountName(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['static-account'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['static-account'][':name'].$get(args, options),
  )
}

export async function postGcpMountPathStaticAccountName(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['static-account'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['static-account'][':name'].$post(args, options),
  )
}

export async function deleteGcpMountPathStaticAccountName(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['static-account'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['static-account'][':name'].$delete(args, options),
  )
}

export async function getGcpMountPathStaticAccountNameKey(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['static-account'][':name']['key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['static-account'][':name'].key.$get(args, options),
  )
}

export async function postGcpMountPathStaticAccountNameKey(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['static-account'][':name']['key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['static-account'][':name'].key.$post(args, options),
  )
}

export async function postGcpMountPathStaticAccountNameRotateKey(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['static-account'][':name']['rotate-key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['static-account'][':name']['rotate-key'].$post(args, options),
  )
}

export async function getGcpMountPathStaticAccountNameToken(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['static-account'][':name']['token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['static-account'][':name'].token.$get(args, options),
  )
}

export async function postGcpMountPathStaticAccountNameToken(
  args: InferRequestType<
    (typeof client)[':gcp_mount_path']['static-account'][':name']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcp_mount_path']['static-account'][':name'].token.$post(args, options),
  )
}

export async function getGcpMountPathStaticAccountsIndex(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['static-accounts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path']['static-accounts'].index.$get(args, options))
}

export async function getGcpMountPathTokenRoleset(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['token'][':roleset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].token[':roleset'].$get(args, options))
}

export async function postGcpMountPathTokenRoleset(
  args: InferRequestType<(typeof client)[':gcp_mount_path']['token'][':roleset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcp_mount_path'].token[':roleset'].$post(args, options))
}

export async function getGcpkmsMountPathConfig(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].config.$get(args, options))
}

export async function postGcpkmsMountPathConfig(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].config.$post(args, options))
}

export async function deleteGcpkmsMountPathConfig(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].config.$delete(args, options))
}

export async function postGcpkmsMountPathDecryptKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['decrypt'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].decrypt[':key'].$post(args, options))
}

export async function postGcpkmsMountPathEncryptKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['encrypt'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].encrypt[':key'].$post(args, options))
}

export async function getGcpkmsMountPathKeysIndex(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['keys']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].keys.index.$get(args, options))
}

export async function getGcpkmsMountPathKeysConfigKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['keys']['config'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].keys.config[':key'].$get(args, options))
}

export async function postGcpkmsMountPathKeysConfigKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['keys']['config'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].keys.config[':key'].$post(args, options))
}

export async function postGcpkmsMountPathKeysDeregisterKey(
  args: InferRequestType<
    (typeof client)[':gcpkms_mount_path']['keys']['deregister'][':key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcpkms_mount_path'].keys.deregister[':key'].$post(args, options),
  )
}

export async function deleteGcpkmsMountPathKeysDeregisterKey(
  args: InferRequestType<
    (typeof client)[':gcpkms_mount_path']['keys']['deregister'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcpkms_mount_path'].keys.deregister[':key'].$delete(args, options),
  )
}

export async function postGcpkmsMountPathKeysRegisterKey(
  args: InferRequestType<
    (typeof client)[':gcpkms_mount_path']['keys']['register'][':key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':gcpkms_mount_path'].keys.register[':key'].$post(args, options),
  )
}

export async function postGcpkmsMountPathKeysRotateKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['keys']['rotate'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].keys.rotate[':key'].$post(args, options))
}

export async function postGcpkmsMountPathKeysTrimKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['keys']['trim'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].keys.trim[':key'].$post(args, options))
}

export async function deleteGcpkmsMountPathKeysTrimKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['keys']['trim'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].keys.trim[':key'].$delete(args, options))
}

export async function getGcpkmsMountPathKeysKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['keys'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].keys[':key'].$get(args, options))
}

export async function postGcpkmsMountPathKeysKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['keys'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].keys[':key'].$post(args, options))
}

export async function deleteGcpkmsMountPathKeysKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['keys'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].keys[':key'].$delete(args, options))
}

export async function getGcpkmsMountPathPubkeyKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['pubkey'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].pubkey[':key'].$get(args, options))
}

export async function postGcpkmsMountPathReencryptKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['reencrypt'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].reencrypt[':key'].$post(args, options))
}

export async function postGcpkmsMountPathSignKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['sign'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].sign[':key'].$post(args, options))
}

export async function postGcpkmsMountPathVerifyKey(
  args: InferRequestType<(typeof client)[':gcpkms_mount_path']['verify'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':gcpkms_mount_path'].verify[':key'].$post(args, options))
}

export async function getKubernetesMountPathCheck(
  args: InferRequestType<(typeof client)[':kubernetes_mount_path']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kubernetes_mount_path'].check.$get(args, options))
}

export async function getKubernetesMountPathConfig(
  args: InferRequestType<(typeof client)[':kubernetes_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kubernetes_mount_path'].config.$get(args, options))
}

export async function postKubernetesMountPathConfig(
  args: InferRequestType<(typeof client)[':kubernetes_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kubernetes_mount_path'].config.$post(args, options))
}

export async function deleteKubernetesMountPathConfig(
  args: InferRequestType<(typeof client)[':kubernetes_mount_path']['config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kubernetes_mount_path'].config.$delete(args, options))
}

export async function postKubernetesMountPathCredsName(
  args: InferRequestType<(typeof client)[':kubernetes_mount_path']['creds'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kubernetes_mount_path'].creds[':name'].$post(args, options))
}

export async function getKubernetesMountPathRolesIndex(
  args: InferRequestType<(typeof client)[':kubernetes_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kubernetes_mount_path'].roles.index.$get(args, options))
}

export async function getKubernetesMountPathRolesName(
  args: InferRequestType<(typeof client)[':kubernetes_mount_path']['roles'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kubernetes_mount_path'].roles[':name'].$get(args, options))
}

export async function postKubernetesMountPathRolesName(
  args: InferRequestType<(typeof client)[':kubernetes_mount_path']['roles'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kubernetes_mount_path'].roles[':name'].$post(args, options))
}

export async function deleteKubernetesMountPathRolesName(
  args: InferRequestType<(typeof client)[':kubernetes_mount_path']['roles'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kubernetes_mount_path'].roles[':name'].$delete(args, options))
}

export async function getKvV1MountPathPath(
  args: InferRequestType<(typeof client)[':kv_v1_mount_path'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v1_mount_path'][':path'].$get(args, options))
}

export async function postKvV1MountPathPath(
  args: InferRequestType<(typeof client)[':kv_v1_mount_path'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v1_mount_path'][':path'].$post(args, options))
}

export async function deleteKvV1MountPathPath(
  args: InferRequestType<(typeof client)[':kv_v1_mount_path'][':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v1_mount_path'][':path'].$delete(args, options))
}

export async function getKvV1MountPathPathIndex(
  args: InferRequestType<(typeof client)[':kv_v1_mount_path'][':path']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v1_mount_path'][':path'].index.$get(args, options))
}

export async function getKvV2MountPathConfig(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].config.$get(args, options))
}

export async function postKvV2MountPathConfig(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].config.$post(args, options))
}

export async function getKvV2MountPathDataPath(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['data'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].data[':path'].$get(args, options))
}

export async function postKvV2MountPathDataPath(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['data'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].data[':path'].$post(args, options))
}

export async function deleteKvV2MountPathDataPath(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['data'][':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].data[':path'].$delete(args, options))
}

export async function postKvV2MountPathDeletePath(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['delete'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].delete[':path'].$post(args, options))
}

export async function postKvV2MountPathDestroyPath(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['destroy'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].destroy[':path'].$post(args, options))
}

export async function getKvV2MountPathMetadataPath(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['metadata'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].metadata[':path'].$get(args, options))
}

export async function postKvV2MountPathMetadataPath(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['metadata'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].metadata[':path'].$post(args, options))
}

export async function deleteKvV2MountPathMetadataPath(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['metadata'][':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].metadata[':path'].$delete(args, options))
}

export async function getKvV2MountPathMetadataPathIndex(
  args: InferRequestType<
    (typeof client)[':kv_v2_mount_path']['metadata'][':path']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':kv_v2_mount_path'].metadata[':path'].index.$get(args, options),
  )
}

export async function getKvV2MountPathSubkeysPath(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['subkeys'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].subkeys[':path'].$get(args, options))
}

export async function postKvV2MountPathUndeletePath(
  args: InferRequestType<(typeof client)[':kv_v2_mount_path']['undelete'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':kv_v2_mount_path'].undelete[':path'].$post(args, options))
}

export async function getLdapMountPathConfig(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].config.$get(args, options))
}

export async function postLdapMountPathConfig(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].config.$post(args, options))
}

export async function deleteLdapMountPathConfig(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].config.$delete(args, options))
}

export async function getLdapMountPathCredsName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['creds'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].creds[':name'].$get(args, options))
}

export async function getLdapMountPathLibraryIndex(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['library']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].library.index.$get(args, options))
}

export async function postLdapMountPathLibraryManageNameCheckIn(
  args: InferRequestType<
    (typeof client)[':ldap_mount_path']['library']['manage'][':name']['check-in']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':ldap_mount_path'].library.manage[':name']['check-in'].$post(args, options),
  )
}

export async function getLdapMountPathLibraryName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['library'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].library[':name'].$get(args, options))
}

export async function postLdapMountPathLibraryName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['library'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].library[':name'].$post(args, options))
}

export async function deleteLdapMountPathLibraryName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['library'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].library[':name'].$delete(args, options))
}

export async function postLdapMountPathLibraryNameCheckIn(
  args: InferRequestType<
    (typeof client)[':ldap_mount_path']['library'][':name']['check-in']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':ldap_mount_path'].library[':name']['check-in'].$post(args, options),
  )
}

export async function postLdapMountPathLibraryNameCheckOut(
  args: InferRequestType<
    (typeof client)[':ldap_mount_path']['library'][':name']['check-out']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':ldap_mount_path'].library[':name']['check-out'].$post(args, options),
  )
}

export async function getLdapMountPathLibraryNameStatus(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['library'][':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].library[':name'].status.$get(args, options))
}

export async function getLdapMountPathRoleIndex(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].role.index.$get(args, options))
}

export async function getLdapMountPathRoleName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['role'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].role[':name'].$get(args, options))
}

export async function postLdapMountPathRoleName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].role[':name'].$post(args, options))
}

export async function deleteLdapMountPathRoleName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['role'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path'].role[':name'].$delete(args, options))
}

export async function postLdapMountPathRotateRoleName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['rotate-role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':ldap_mount_path']['rotate-role'][':name'].$post(args, options),
  )
}

export async function postLdapMountPathRotateRoot(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['rotate-root']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path']['rotate-root'].$post(args, options))
}

export async function getLdapMountPathStaticCredName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['static-cred'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path']['static-cred'][':name'].$get(args, options))
}

export async function getLdapMountPathStaticRoleIndex(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['static-role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path']['static-role'].index.$get(args, options))
}

export async function getLdapMountPathStaticRoleName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['static-role'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ldap_mount_path']['static-role'][':name'].$get(args, options))
}

export async function postLdapMountPathStaticRoleName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['static-role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':ldap_mount_path']['static-role'][':name'].$post(args, options),
  )
}

export async function deleteLdapMountPathStaticRoleName(
  args: InferRequestType<(typeof client)[':ldap_mount_path']['static-role'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':ldap_mount_path']['static-role'][':name'].$delete(args, options),
  )
}

export async function getMongodbatlasMountPathConfig(
  args: InferRequestType<(typeof client)[':mongodbatlas_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':mongodbatlas_mount_path'].config.$get(args, options))
}

export async function postMongodbatlasMountPathConfig(
  args: InferRequestType<(typeof client)[':mongodbatlas_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':mongodbatlas_mount_path'].config.$post(args, options))
}

export async function getMongodbatlasMountPathCredsName(
  args: InferRequestType<(typeof client)[':mongodbatlas_mount_path']['creds'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':mongodbatlas_mount_path'].creds[':name'].$get(args, options))
}

export async function postMongodbatlasMountPathCredsName(
  args: InferRequestType<(typeof client)[':mongodbatlas_mount_path']['creds'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':mongodbatlas_mount_path'].creds[':name'].$post(args, options))
}

export async function getMongodbatlasMountPathRolesIndex(
  args: InferRequestType<(typeof client)[':mongodbatlas_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':mongodbatlas_mount_path'].roles.index.$get(args, options))
}

export async function getMongodbatlasMountPathRolesName(
  args: InferRequestType<(typeof client)[':mongodbatlas_mount_path']['roles'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':mongodbatlas_mount_path'].roles[':name'].$get(args, options))
}

export async function postMongodbatlasMountPathRolesName(
  args: InferRequestType<(typeof client)[':mongodbatlas_mount_path']['roles'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':mongodbatlas_mount_path'].roles[':name'].$post(args, options))
}

export async function deleteMongodbatlasMountPathRolesName(
  args: InferRequestType<(typeof client)[':mongodbatlas_mount_path']['roles'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':mongodbatlas_mount_path'].roles[':name'].$delete(args, options),
  )
}

export async function getNomadMountPathConfigAccess(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['config']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].config.access.$get(args, options))
}

export async function postNomadMountPathConfigAccess(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['config']['access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].config.access.$post(args, options))
}

export async function deleteNomadMountPathConfigAccess(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['config']['access']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].config.access.$delete(args, options))
}

export async function getNomadMountPathConfigLease(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['config']['lease']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].config.lease.$get(args, options))
}

export async function postNomadMountPathConfigLease(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['config']['lease']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].config.lease.$post(args, options))
}

export async function deleteNomadMountPathConfigLease(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['config']['lease']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].config.lease.$delete(args, options))
}

export async function getNomadMountPathCredsName(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['creds'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].creds[':name'].$get(args, options))
}

export async function getNomadMountPathRoleIndex(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].role.index.$get(args, options))
}

export async function getNomadMountPathRoleName(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['role'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].role[':name'].$get(args, options))
}

export async function postNomadMountPathRoleName(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].role[':name'].$post(args, options))
}

export async function deleteNomadMountPathRoleName(
  args: InferRequestType<(typeof client)[':nomad_mount_path']['role'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':nomad_mount_path'].role[':name'].$delete(args, options))
}

export async function postPkiMountPathAcmeAccountKid(
  args: InferRequestType<(typeof client)[':pki_mount_path']['acme']['account'][':kid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].acme.account[':kid'].$post(args, options))
}

export async function postPkiMountPathAcmeAuthorizationAuthId(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['acme']['authorization'][':auth_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].acme.authorization[':auth_id'].$post(args, options),
  )
}

export async function postPkiMountPathAcmeChallengeAuthIdChallengeType(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['acme']['challenge'][':auth_id'][':challenge_type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].acme.challenge[':auth_id'][':challenge_type'].$post(args, options),
  )
}

export async function getPkiMountPathAcmeDirectory(
  args: InferRequestType<(typeof client)[':pki_mount_path']['acme']['directory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].acme.directory.$get(args, options))
}

export async function postPkiMountPathAcmeNewAccount(
  args: InferRequestType<(typeof client)[':pki_mount_path']['acme']['new-account']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].acme['new-account'].$post(args, options))
}

export async function postPkiMountPathAcmeNewEab(
  args: InferRequestType<(typeof client)[':pki_mount_path']['acme']['new-eab']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].acme['new-eab'].$post(args, options))
}

export async function getPkiMountPathAcmeNewNonce(
  args: InferRequestType<(typeof client)[':pki_mount_path']['acme']['new-nonce']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].acme['new-nonce'].$get(args, options))
}

export async function postPkiMountPathAcmeNewOrder(
  args: InferRequestType<(typeof client)[':pki_mount_path']['acme']['new-order']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].acme['new-order'].$post(args, options))
}

export async function postPkiMountPathAcmeOrderOrderId(
  args: InferRequestType<(typeof client)[':pki_mount_path']['acme']['order'][':order_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].acme.order[':order_id'].$post(args, options))
}

export async function postPkiMountPathAcmeOrderOrderIdCert(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['acme']['order'][':order_id']['cert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].acme.order[':order_id'].cert.$post(args, options),
  )
}

export async function postPkiMountPathAcmeOrderOrderIdFinalize(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['acme']['order'][':order_id']['finalize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].acme.order[':order_id'].finalize.$post(args, options),
  )
}

export async function postPkiMountPathAcmeOrders(
  args: InferRequestType<(typeof client)[':pki_mount_path']['acme']['orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].acme.orders.$post(args, options))
}

export async function postPkiMountPathAcmeRevokeCert(
  args: InferRequestType<(typeof client)[':pki_mount_path']['acme']['revoke-cert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].acme['revoke-cert'].$post(args, options))
}

export async function getPkiMountPathCa(
  args: InferRequestType<(typeof client)[':pki_mount_path']['ca']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].ca.$get(args, options))
}

export async function getPkiMountPathCaPem(
  args: InferRequestType<(typeof client)[':pki_mount_path']['ca']['pem']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].ca.pem.$get(args, options))
}

export async function getPkiMountPathCaChain(
  args: InferRequestType<(typeof client)[':pki_mount_path']['ca_chain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].ca_chain.$get(args, options))
}

export async function getPkiMountPathCertCaChain(
  args: InferRequestType<(typeof client)[':pki_mount_path']['cert']['ca_chain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].cert.ca_chain.$get(args, options))
}

export async function getPkiMountPathCertCrl(
  args: InferRequestType<(typeof client)[':pki_mount_path']['cert']['crl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].cert.crl.$get(args, options))
}

export async function getPkiMountPathCertDeltaCrl(
  args: InferRequestType<(typeof client)[':pki_mount_path']['cert']['delta-crl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].cert['delta-crl'].$get(args, options))
}

export async function getPkiMountPathCertSerial(
  args: InferRequestType<(typeof client)[':pki_mount_path']['cert'][':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].cert[':serial'].$get(args, options))
}

export async function getPkiMountPathCertSerialRaw(
  args: InferRequestType<(typeof client)[':pki_mount_path']['cert'][':serial']['raw']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].cert[':serial'].raw.$get(args, options))
}

export async function getPkiMountPathCertSerialRawPem(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['cert'][':serial']['raw']['pem']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].cert[':serial'].raw.pem.$get(args, options))
}

export async function getPkiMountPathCertsIndex(
  args: InferRequestType<(typeof client)[':pki_mount_path']['certs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].certs.index.$get(args, options))
}

export async function getPkiMountPathCertsRevokedIndex(
  args: InferRequestType<(typeof client)[':pki_mount_path']['certs']['revoked']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].certs.revoked.index.$get(args, options))
}

export async function getPkiMountPathConfigAcme(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['acme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.acme.$get(args, options))
}

export async function postPkiMountPathConfigAcme(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['acme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.acme.$post(args, options))
}

export async function getPkiMountPathConfigAutoTidy(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['auto-tidy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config['auto-tidy'].$get(args, options))
}

export async function postPkiMountPathConfigAutoTidy(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['auto-tidy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config['auto-tidy'].$post(args, options))
}

export async function postPkiMountPathConfigCa(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['ca']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.ca.$post(args, options))
}

export async function getPkiMountPathConfigCluster(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['cluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.cluster.$get(args, options))
}

export async function postPkiMountPathConfigCluster(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['cluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.cluster.$post(args, options))
}

export async function getPkiMountPathConfigCrl(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['crl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.crl.$get(args, options))
}

export async function postPkiMountPathConfigCrl(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['crl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.crl.$post(args, options))
}

export async function getPkiMountPathConfigIssuers(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['issuers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.issuers.$get(args, options))
}

export async function postPkiMountPathConfigIssuers(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['issuers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.issuers.$post(args, options))
}

export async function getPkiMountPathConfigKeys(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.keys.$get(args, options))
}

export async function postPkiMountPathConfigKeys(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.keys.$post(args, options))
}

export async function getPkiMountPathConfigUrls(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['urls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.urls.$get(args, options))
}

export async function postPkiMountPathConfigUrls(
  args: InferRequestType<(typeof client)[':pki_mount_path']['config']['urls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].config.urls.$post(args, options))
}

export async function getPkiMountPathCrl(
  args: InferRequestType<(typeof client)[':pki_mount_path']['crl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].crl.$get(args, options))
}

export async function getPkiMountPathCrlDelta(
  args: InferRequestType<(typeof client)[':pki_mount_path']['crl']['delta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].crl.delta.$get(args, options))
}

export async function getPkiMountPathCrlDeltaPem(
  args: InferRequestType<(typeof client)[':pki_mount_path']['crl']['delta']['pem']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].crl.delta.pem.$get(args, options))
}

export async function getPkiMountPathCrlPem(
  args: InferRequestType<(typeof client)[':pki_mount_path']['crl']['pem']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].crl.pem.$get(args, options))
}

export async function getPkiMountPathCrlRotate(
  args: InferRequestType<(typeof client)[':pki_mount_path']['crl']['rotate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].crl.rotate.$get(args, options))
}

export async function getPkiMountPathCrlRotateDelta(
  args: InferRequestType<(typeof client)[':pki_mount_path']['crl']['rotate-delta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].crl['rotate-delta'].$get(args, options))
}

export async function getPkiMountPathEabIndex(
  args: InferRequestType<(typeof client)[':pki_mount_path']['eab']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].eab.index.$get(args, options))
}

export async function deletePkiMountPathEabKeyId(
  args: InferRequestType<(typeof client)[':pki_mount_path']['eab'][':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].eab[':key_id'].$delete(args, options))
}

export async function postPkiMountPathIntermediateCrossSign(
  args: InferRequestType<(typeof client)[':pki_mount_path']['intermediate']['cross-sign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].intermediate['cross-sign'].$post(args, options),
  )
}

export async function postPkiMountPathIntermediateGenerateExported(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['intermediate']['generate'][':exported']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].intermediate.generate[':exported'].$post(args, options),
  )
}

export async function postPkiMountPathIntermediateSetSigned(
  args: InferRequestType<(typeof client)[':pki_mount_path']['intermediate']['set-signed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].intermediate['set-signed'].$post(args, options),
  )
}

export async function postPkiMountPathIssueRole(
  args: InferRequestType<(typeof client)[':pki_mount_path']['issue'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].issue[':role'].$post(args, options))
}

export async function getPkiMountPathIssuerIssuerRef(
  args: InferRequestType<(typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].issuer[':issuer_ref'].$get(args, options))
}

export async function postPkiMountPathIssuerIssuerRef(
  args: InferRequestType<(typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].issuer[':issuer_ref'].$post(args, options))
}

export async function deletePkiMountPathIssuerIssuerRef(
  args: InferRequestType<(typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].issuer[':issuer_ref'].$delete(args, options))
}

export async function postPkiMountPathIssuerIssuerRefAcmeAccountKid(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['account'][':kid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme.account[':kid'].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefAcmeAuthorizationAuthId(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['authorization'][':auth_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme.authorization[':auth_id'].$post(
      args,
      options,
    ),
  )
}

export async function postPkiMountPathIssuerIssuerRefAcmeChallengeAuthIdChallengeType(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['challenge'][':auth_id'][':challenge_type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme.challenge[':auth_id'][
      ':challenge_type'
    ].$post(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefAcmeDirectory(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['directory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme.directory.$get(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefAcmeNewAccount(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['new-account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme['new-account'].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefAcmeNewEab(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['new-eab']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme['new-eab'].$post(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefAcmeNewNonce(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['new-nonce']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme['new-nonce'].$get(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefAcmeNewOrder(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['new-order']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme['new-order'].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefAcmeOrderOrderId(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['order'][':order_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme.order[':order_id'].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdCert(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['order'][':order_id']['cert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme.order[':order_id'].cert.$post(
      args,
      options,
    ),
  )
}

export async function postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdFinalize(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['order'][':order_id']['finalize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme.order[':order_id'].finalize.$post(
      args,
      options,
    ),
  )
}

export async function postPkiMountPathIssuerIssuerRefAcmeOrders(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['orders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme.orders.$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefAcmeRevokeCert(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['acme']['revoke-cert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].acme['revoke-cert'].$post(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefCrl(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['crl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].crl.$get(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefCrlDelta(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['crl']['delta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].crl.delta.$get(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefCrlDeltaDer(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['crl']['delta']['der']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].crl.delta.der.$get(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefCrlDeltaPem(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['crl']['delta']['pem']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].crl.delta.pem.$get(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefCrlDer(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['crl']['der']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].crl.der.$get(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefCrlPem(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['crl']['pem']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].crl.pem.$get(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefDer(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['der']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].der.$get(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefIssueRole(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['issue'][':role']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].issue[':role'].$post(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefJson(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].json.$get(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefPem(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['pem']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].pem.$get(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefResignCrls(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['resign-crls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref']['resign-crls'].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefRevoke(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].revoke.$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeAccountKid(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['account'][':kid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme.account[':kid'].$post(
      args,
      options,
    ),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeAuthorizationAuthId(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['authorization'][':auth_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme.authorization[
      ':auth_id'
    ].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeType(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['challenge'][':auth_id'][':challenge_type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme.challenge[':auth_id'][
      ':challenge_type'
    ].$post(args, options),
  )
}

export async function getPkiMountPathIssuerIssuerRefRolesRoleAcmeDirectory(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['directory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme.directory.$get(
      args,
      options,
    ),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewAccount(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['new-account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme['new-account'].$post(
      args,
      options,
    ),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewEab(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['new-eab']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme['new-eab'].$post(
      args,
      options,
    ),
  )
}

export async function getPkiMountPathIssuerIssuerRefRolesRoleAcmeNewNonce(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['new-nonce']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme['new-nonce'].$get(
      args,
      options,
    ),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewOrder(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['new-order']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme['new-order'].$post(
      args,
      options,
    ),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderId(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['order'][':order_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme.order[':order_id'].$post(
      args,
      options,
    ),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdCert(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['order'][':order_id']['cert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme.order[
      ':order_id'
    ].cert.$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalize(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['order'][':order_id']['finalize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme.order[
      ':order_id'
    ].finalize.$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrders(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['orders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme.orders.$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefRolesRoleAcmeRevokeCert(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['roles'][':role']['acme']['revoke-cert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].roles[':role'].acme['revoke-cert'].$post(
      args,
      options,
    ),
  )
}

export async function postPkiMountPathIssuerIssuerRefSignIntermediate(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['sign-intermediate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref']['sign-intermediate'].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefSignRevocationList(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['sign-revocation-list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref']['sign-revocation-list'].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefSignSelfIssued(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['sign-self-issued']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref']['sign-self-issued'].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefSignVerbatim(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['sign-verbatim']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref']['sign-verbatim'].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefSignVerbatimRole(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['sign-verbatim'][':role']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref']['sign-verbatim'][':role'].$post(args, options),
  )
}

export async function postPkiMountPathIssuerIssuerRefSignRole(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuer'][':issuer_ref']['sign'][':role']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuer[':issuer_ref'].sign[':role'].$post(args, options),
  )
}

export async function getPkiMountPathIssuersIndex(
  args: InferRequestType<(typeof client)[':pki_mount_path']['issuers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].issuers.index.$get(args, options))
}

export async function postPkiMountPathIssuersGenerateIntermediateExported(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuers']['generate']['intermediate'][':exported']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuers.generate.intermediate[':exported'].$post(args, options),
  )
}

export async function postPkiMountPathIssuersGenerateRootExported(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuers']['generate']['root'][':exported']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].issuers.generate.root[':exported'].$post(args, options),
  )
}

export async function postPkiMountPathIssuersImportBundle(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['issuers']['import']['bundle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].issuers.import.bundle.$post(args, options))
}

export async function postPkiMountPathIssuersImportCert(
  args: InferRequestType<(typeof client)[':pki_mount_path']['issuers']['import']['cert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].issuers.import.cert.$post(args, options))
}

export async function getPkiMountPathKeyKeyRef(
  args: InferRequestType<(typeof client)[':pki_mount_path']['key'][':key_ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].key[':key_ref'].$get(args, options))
}

export async function postPkiMountPathKeyKeyRef(
  args: InferRequestType<(typeof client)[':pki_mount_path']['key'][':key_ref']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].key[':key_ref'].$post(args, options))
}

export async function deletePkiMountPathKeyKeyRef(
  args: InferRequestType<(typeof client)[':pki_mount_path']['key'][':key_ref']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].key[':key_ref'].$delete(args, options))
}

export async function getPkiMountPathKeysIndex(
  args: InferRequestType<(typeof client)[':pki_mount_path']['keys']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].keys.index.$get(args, options))
}

export async function postPkiMountPathKeysGenerateExported(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['keys']['generate']['exported']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].keys.generate.exported.$post(args, options))
}

export async function postPkiMountPathKeysGenerateInternal(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['keys']['generate']['internal']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].keys.generate.internal.$post(args, options))
}

export async function postPkiMountPathKeysGenerateKms(
  args: InferRequestType<(typeof client)[':pki_mount_path']['keys']['generate']['kms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].keys.generate.kms.$post(args, options))
}

export async function postPkiMountPathKeysImport(
  args: InferRequestType<(typeof client)[':pki_mount_path']['keys']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].keys.import.$post(args, options))
}

export async function postPkiMountPathOcsp(
  args: InferRequestType<(typeof client)[':pki_mount_path']['ocsp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].ocsp.$post(args, options))
}

export async function getPkiMountPathOcspReq(
  args: InferRequestType<(typeof client)[':pki_mount_path']['ocsp'][':req']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].ocsp[':req'].$get(args, options))
}

export async function postPkiMountPathRevoke(
  args: InferRequestType<(typeof client)[':pki_mount_path']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].revoke.$post(args, options))
}

export async function postPkiMountPathRevokeWithKey(
  args: InferRequestType<(typeof client)[':pki_mount_path']['revoke-with-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path']['revoke-with-key'].$post(args, options))
}

export async function getPkiMountPathRolesIndex(
  args: InferRequestType<(typeof client)[':pki_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].roles.index.$get(args, options))
}

export async function getPkiMountPathRolesName(
  args: InferRequestType<(typeof client)[':pki_mount_path']['roles'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].roles[':name'].$get(args, options))
}

export async function postPkiMountPathRolesName(
  args: InferRequestType<(typeof client)[':pki_mount_path']['roles'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].roles[':name'].$post(args, options))
}

export async function deletePkiMountPathRolesName(
  args: InferRequestType<(typeof client)[':pki_mount_path']['roles'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].roles[':name'].$delete(args, options))
}

export async function postPkiMountPathRolesRoleAcmeAccountKid(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['account'][':kid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme.account[':kid'].$post(args, options),
  )
}

export async function postPkiMountPathRolesRoleAcmeAuthorizationAuthId(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['authorization'][':auth_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme.authorization[':auth_id'].$post(args, options),
  )
}

export async function postPkiMountPathRolesRoleAcmeChallengeAuthIdChallengeType(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['challenge'][':auth_id'][':challenge_type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme.challenge[':auth_id'][':challenge_type'].$post(
      args,
      options,
    ),
  )
}

export async function getPkiMountPathRolesRoleAcmeDirectory(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['directory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme.directory.$get(args, options),
  )
}

export async function postPkiMountPathRolesRoleAcmeNewAccount(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['new-account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme['new-account'].$post(args, options),
  )
}

export async function postPkiMountPathRolesRoleAcmeNewEab(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['new-eab']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme['new-eab'].$post(args, options),
  )
}

export async function getPkiMountPathRolesRoleAcmeNewNonce(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['new-nonce']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme['new-nonce'].$get(args, options),
  )
}

export async function postPkiMountPathRolesRoleAcmeNewOrder(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['new-order']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme['new-order'].$post(args, options),
  )
}

export async function postPkiMountPathRolesRoleAcmeOrderOrderId(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['order'][':order_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme.order[':order_id'].$post(args, options),
  )
}

export async function postPkiMountPathRolesRoleAcmeOrderOrderIdCert(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['order'][':order_id']['cert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme.order[':order_id'].cert.$post(args, options),
  )
}

export async function postPkiMountPathRolesRoleAcmeOrderOrderIdFinalize(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['order'][':order_id']['finalize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme.order[':order_id'].finalize.$post(args, options),
  )
}

export async function postPkiMountPathRolesRoleAcmeOrders(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['orders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme.orders.$post(args, options),
  )
}

export async function postPkiMountPathRolesRoleAcmeRevokeCert(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['roles'][':role']['acme']['revoke-cert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].roles[':role'].acme['revoke-cert'].$post(args, options),
  )
}

export async function deletePkiMountPathRoot(
  args: InferRequestType<(typeof client)[':pki_mount_path']['root']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].root.$delete(args, options))
}

export async function postPkiMountPathRootGenerateExported(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['root']['generate'][':exported']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].root.generate[':exported'].$post(args, options),
  )
}

export async function postPkiMountPathRootReplace(
  args: InferRequestType<(typeof client)[':pki_mount_path']['root']['replace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].root.replace.$post(args, options))
}

export async function postPkiMountPathRootRotateExported(
  args: InferRequestType<
    (typeof client)[':pki_mount_path']['root']['rotate'][':exported']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].root.rotate[':exported'].$post(args, options),
  )
}

export async function postPkiMountPathRootSignIntermediate(
  args: InferRequestType<(typeof client)[':pki_mount_path']['root']['sign-intermediate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].root['sign-intermediate'].$post(args, options),
  )
}

export async function postPkiMountPathRootSignSelfIssued(
  args: InferRequestType<(typeof client)[':pki_mount_path']['root']['sign-self-issued']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path'].root['sign-self-issued'].$post(args, options),
  )
}

export async function postPkiMountPathSignVerbatim(
  args: InferRequestType<(typeof client)[':pki_mount_path']['sign-verbatim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path']['sign-verbatim'].$post(args, options))
}

export async function postPkiMountPathSignVerbatimRole(
  args: InferRequestType<(typeof client)[':pki_mount_path']['sign-verbatim'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':pki_mount_path']['sign-verbatim'][':role'].$post(args, options),
  )
}

export async function postPkiMountPathSignRole(
  args: InferRequestType<(typeof client)[':pki_mount_path']['sign'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].sign[':role'].$post(args, options))
}

export async function postPkiMountPathTidy(
  args: InferRequestType<(typeof client)[':pki_mount_path']['tidy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path'].tidy.$post(args, options))
}

export async function postPkiMountPathTidyCancel(
  args: InferRequestType<(typeof client)[':pki_mount_path']['tidy-cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path']['tidy-cancel'].$post(args, options))
}

export async function getPkiMountPathTidyStatus(
  args: InferRequestType<(typeof client)[':pki_mount_path']['tidy-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':pki_mount_path']['tidy-status'].$get(args, options))
}

export async function postRabbitmqMountPathConfigConnection(
  args: InferRequestType<(typeof client)[':rabbitmq_mount_path']['config']['connection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':rabbitmq_mount_path'].config.connection.$post(args, options))
}

export async function getRabbitmqMountPathConfigLease(
  args: InferRequestType<(typeof client)[':rabbitmq_mount_path']['config']['lease']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':rabbitmq_mount_path'].config.lease.$get(args, options))
}

export async function postRabbitmqMountPathConfigLease(
  args: InferRequestType<(typeof client)[':rabbitmq_mount_path']['config']['lease']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':rabbitmq_mount_path'].config.lease.$post(args, options))
}

export async function getRabbitmqMountPathCredsName(
  args: InferRequestType<(typeof client)[':rabbitmq_mount_path']['creds'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':rabbitmq_mount_path'].creds[':name'].$get(args, options))
}

export async function getRabbitmqMountPathRolesIndex(
  args: InferRequestType<(typeof client)[':rabbitmq_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':rabbitmq_mount_path'].roles.index.$get(args, options))
}

export async function getRabbitmqMountPathRolesName(
  args: InferRequestType<(typeof client)[':rabbitmq_mount_path']['roles'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':rabbitmq_mount_path'].roles[':name'].$get(args, options))
}

export async function postRabbitmqMountPathRolesName(
  args: InferRequestType<(typeof client)[':rabbitmq_mount_path']['roles'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':rabbitmq_mount_path'].roles[':name'].$post(args, options))
}

export async function deleteRabbitmqMountPathRolesName(
  args: InferRequestType<(typeof client)[':rabbitmq_mount_path']['roles'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':rabbitmq_mount_path'].roles[':name'].$delete(args, options))
}

export async function getSshMountPathConfigCa(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['config']['ca']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].config.ca.$get(args, options))
}

export async function postSshMountPathConfigCa(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['config']['ca']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].config.ca.$post(args, options))
}

export async function deleteSshMountPathConfigCa(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['config']['ca']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].config.ca.$delete(args, options))
}

export async function getSshMountPathConfigZeroaddress(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['config']['zeroaddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].config.zeroaddress.$get(args, options))
}

export async function postSshMountPathConfigZeroaddress(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['config']['zeroaddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].config.zeroaddress.$post(args, options))
}

export async function deleteSshMountPathConfigZeroaddress(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['config']['zeroaddress']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].config.zeroaddress.$delete(args, options))
}

export async function postSshMountPathCredsRole(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['creds'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].creds[':role'].$post(args, options))
}

export async function postSshMountPathIssueRole(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['issue'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].issue[':role'].$post(args, options))
}

export async function postSshMountPathLookup(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['lookup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].lookup.$post(args, options))
}

export async function getSshMountPathPublicKey(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['public_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].public_key.$get(args, options))
}

export async function getSshMountPathRolesIndex(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['roles']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].roles.index.$get(args, options))
}

export async function getSshMountPathRolesRole(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['roles'][':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].roles[':role'].$get(args, options))
}

export async function postSshMountPathRolesRole(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['roles'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].roles[':role'].$post(args, options))
}

export async function deleteSshMountPathRolesRole(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['roles'][':role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].roles[':role'].$delete(args, options))
}

export async function postSshMountPathSignRole(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['sign'][':role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].sign[':role'].$post(args, options))
}

export async function deleteSshMountPathTidyDynamicKeys(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['tidy']['dynamic-keys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].tidy['dynamic-keys'].$delete(args, options))
}

export async function postSshMountPathVerify(
  args: InferRequestType<(typeof client)[':ssh_mount_path']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':ssh_mount_path'].verify.$post(args, options))
}

export async function getTerraformMountPathConfig(
  args: InferRequestType<(typeof client)[':terraform_mount_path']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':terraform_mount_path'].config.$get(args, options))
}

export async function postTerraformMountPathConfig(
  args: InferRequestType<(typeof client)[':terraform_mount_path']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':terraform_mount_path'].config.$post(args, options))
}

export async function deleteTerraformMountPathConfig(
  args: InferRequestType<(typeof client)[':terraform_mount_path']['config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':terraform_mount_path'].config.$delete(args, options))
}

export async function getTerraformMountPathCredsName(
  args: InferRequestType<(typeof client)[':terraform_mount_path']['creds'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':terraform_mount_path'].creds[':name'].$get(args, options))
}

export async function postTerraformMountPathCredsName(
  args: InferRequestType<(typeof client)[':terraform_mount_path']['creds'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':terraform_mount_path'].creds[':name'].$post(args, options))
}

export async function getTerraformMountPathRoleIndex(
  args: InferRequestType<(typeof client)[':terraform_mount_path']['role']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':terraform_mount_path'].role.index.$get(args, options))
}

export async function getTerraformMountPathRoleName(
  args: InferRequestType<(typeof client)[':terraform_mount_path']['role'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':terraform_mount_path'].role[':name'].$get(args, options))
}

export async function postTerraformMountPathRoleName(
  args: InferRequestType<(typeof client)[':terraform_mount_path']['role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':terraform_mount_path'].role[':name'].$post(args, options))
}

export async function deleteTerraformMountPathRoleName(
  args: InferRequestType<(typeof client)[':terraform_mount_path']['role'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':terraform_mount_path'].role[':name'].$delete(args, options))
}

export async function postTerraformMountPathRotateRoleName(
  args: InferRequestType<(typeof client)[':terraform_mount_path']['rotate-role'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':terraform_mount_path']['rotate-role'][':name'].$post(args, options),
  )
}

export async function getTotpMountPathCodeName(
  args: InferRequestType<(typeof client)[':totp_mount_path']['code'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':totp_mount_path'].code[':name'].$get(args, options))
}

export async function postTotpMountPathCodeName(
  args: InferRequestType<(typeof client)[':totp_mount_path']['code'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':totp_mount_path'].code[':name'].$post(args, options))
}

export async function getTotpMountPathKeysIndex(
  args: InferRequestType<(typeof client)[':totp_mount_path']['keys']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':totp_mount_path'].keys.index.$get(args, options))
}

export async function getTotpMountPathKeysName(
  args: InferRequestType<(typeof client)[':totp_mount_path']['keys'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':totp_mount_path'].keys[':name'].$get(args, options))
}

export async function postTotpMountPathKeysName(
  args: InferRequestType<(typeof client)[':totp_mount_path']['keys'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':totp_mount_path'].keys[':name'].$post(args, options))
}

export async function deleteTotpMountPathKeysName(
  args: InferRequestType<(typeof client)[':totp_mount_path']['keys'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':totp_mount_path'].keys[':name'].$delete(args, options))
}

export async function getTransitMountPathBackupName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['backup'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].backup[':name'].$get(args, options))
}

export async function getTransitMountPathByokExportDestinationSource(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['byok-export'][':destination'][':source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path']['byok-export'][':destination'][':source'].$get(args, options),
  )
}

export async function getTransitMountPathByokExportDestinationSourceVersion(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['byok-export'][':destination'][':source'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path']['byok-export'][':destination'][':source'][':version'].$get(
      args,
      options,
    ),
  )
}

export async function getTransitMountPathCacheConfig(
  args: InferRequestType<(typeof client)[':transit_mount_path']['cache-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path']['cache-config'].$get(args, options))
}

export async function postTransitMountPathCacheConfig(
  args: InferRequestType<(typeof client)[':transit_mount_path']['cache-config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path']['cache-config'].$post(args, options))
}

export async function getTransitMountPathConfigKeys(
  args: InferRequestType<(typeof client)[':transit_mount_path']['config']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].config.keys.$get(args, options))
}

export async function postTransitMountPathConfigKeys(
  args: InferRequestType<(typeof client)[':transit_mount_path']['config']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].config.keys.$post(args, options))
}

export async function postTransitMountPathDatakeyPlaintextName(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['datakey'][':plaintext'][':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].datakey[':plaintext'][':name'].$post(args, options),
  )
}

export async function postTransitMountPathDecryptName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['decrypt'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].decrypt[':name'].$post(args, options))
}

export async function postTransitMountPathEncryptName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['encrypt'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].encrypt[':name'].$post(args, options))
}

export async function getTransitMountPathExportTypeName(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['export'][':type'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].export[':type'][':name'].$get(args, options),
  )
}

export async function getTransitMountPathExportTypeNameVersion(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['export'][':type'][':name'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].export[':type'][':name'][':version'].$get(args, options),
  )
}

export async function postTransitMountPathHash(
  args: InferRequestType<(typeof client)[':transit_mount_path']['hash']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].hash.$post(args, options))
}

export async function postTransitMountPathHashUrlalgorithm(
  args: InferRequestType<(typeof client)[':transit_mount_path']['hash'][':urlalgorithm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].hash[':urlalgorithm'].$post(args, options),
  )
}

export async function postTransitMountPathHmacName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['hmac'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].hmac[':name'].$post(args, options))
}

export async function postTransitMountPathHmacNameUrlalgorithm(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['hmac'][':name'][':urlalgorithm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].hmac[':name'][':urlalgorithm'].$post(args, options),
  )
}

export async function getTransitMountPathKeysIndex(
  args: InferRequestType<(typeof client)[':transit_mount_path']['keys']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].keys.index.$get(args, options))
}

export async function getTransitMountPathKeysName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['keys'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].keys[':name'].$get(args, options))
}

export async function postTransitMountPathKeysName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['keys'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].keys[':name'].$post(args, options))
}

export async function deleteTransitMountPathKeysName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['keys'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].keys[':name'].$delete(args, options))
}

export async function postTransitMountPathKeysNameConfig(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['keys'][':name']['config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].keys[':name'].config.$post(args, options),
  )
}

export async function postTransitMountPathKeysNameCsr(
  args: InferRequestType<(typeof client)[':transit_mount_path']['keys'][':name']['csr']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].keys[':name'].csr.$post(args, options))
}

export async function postTransitMountPathKeysNameImport(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['keys'][':name']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].keys[':name'].import.$post(args, options),
  )
}

export async function postTransitMountPathKeysNameImportVersion(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['keys'][':name']['import_version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].keys[':name'].import_version.$post(args, options),
  )
}

export async function postTransitMountPathKeysNameRotate(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['keys'][':name']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].keys[':name'].rotate.$post(args, options),
  )
}

export async function postTransitMountPathKeysNameSetCertificate(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['keys'][':name']['set-certificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].keys[':name']['set-certificate'].$post(args, options),
  )
}

export async function postTransitMountPathKeysNameTrim(
  args: InferRequestType<(typeof client)[':transit_mount_path']['keys'][':name']['trim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].keys[':name'].trim.$post(args, options))
}

export async function postTransitMountPathRandom(
  args: InferRequestType<(typeof client)[':transit_mount_path']['random']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].random.$post(args, options))
}

export async function postTransitMountPathRandomSource(
  args: InferRequestType<(typeof client)[':transit_mount_path']['random'][':source']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].random[':source'].$post(args, options))
}

export async function postTransitMountPathRandomSourceUrlbytes(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['random'][':source'][':urlbytes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].random[':source'][':urlbytes'].$post(args, options),
  )
}

export async function postTransitMountPathRandomUrlbytes(
  args: InferRequestType<(typeof client)[':transit_mount_path']['random'][':urlbytes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].random[':urlbytes'].$post(args, options))
}

export async function postTransitMountPathRestore(
  args: InferRequestType<(typeof client)[':transit_mount_path']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].restore.$post(args, options))
}

export async function postTransitMountPathRestoreName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['restore'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].restore[':name'].$post(args, options))
}

export async function postTransitMountPathRewrapName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['rewrap'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].rewrap[':name'].$post(args, options))
}

export async function postTransitMountPathSignName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['sign'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].sign[':name'].$post(args, options))
}

export async function postTransitMountPathSignNameUrlalgorithm(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['sign'][':name'][':urlalgorithm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].sign[':name'][':urlalgorithm'].$post(args, options),
  )
}

export async function postTransitMountPathVerifyName(
  args: InferRequestType<(typeof client)[':transit_mount_path']['verify'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].verify[':name'].$post(args, options))
}

export async function postTransitMountPathVerifyNameUrlalgorithm(
  args: InferRequestType<
    (typeof client)[':transit_mount_path']['verify'][':name'][':urlalgorithm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':transit_mount_path'].verify[':name'][':urlalgorithm'].$post(args, options),
  )
}

export async function getTransitMountPathWrappingKey(
  args: InferRequestType<(typeof client)[':transit_mount_path']['wrapping_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':transit_mount_path'].wrapping_key.$get(args, options))
}
