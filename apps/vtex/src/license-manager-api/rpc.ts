import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiLicenseManagerSitePvtLoginsListPaged(
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['license-manager'].site.pvt.logins.list.paged.$get(args, options),
  )
}

export async function getApiLicenseManagerSitePvtRolesListPaged(
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['license-manager'].site.pvt.roles.list.paged.$get(args, options),
  )
}

export async function postApiLicenseManagerUsers(
  args: InferRequestType<(typeof client.api)['license-manager']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['license-manager'].users.$post(args, options))
}

export async function getApiLicenseManagerUsersUserId(
  args: InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['license-manager'].users[':userId'].$get(args, options))
}

export async function getApiLicenseManagerUsersUserIdRoles(
  args: InferRequestType<
    (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['license-manager'].users[':userId'].roles.$get(args, options),
  )
}

export async function putApiLicenseManagerUsersUserIdRoles(
  args: InferRequestType<
    (typeof client.api)['license-manager']['users'][':userId']['roles']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['license-manager'].users[':userId'].roles.$put(args, options),
  )
}

export async function deleteApiLicenseManagerUsersUserIdRolesRoleId(
  args: InferRequestType<
    (typeof client.api)['license-manager']['users'][':userId']['roles'][':roleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['license-manager'].users[':userId'].roles[':roleId'].$delete(args, options),
  )
}

export async function getApiVlmAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.vlm.account.$get(undefined, options))
}

export async function getApiVlmAccountStores(options?: ClientRequestOptions) {
  return await parseResponse(client.api.vlm.account.stores.$get(undefined, options))
}

export async function getApiVlmAppkeys(
  args: InferRequestType<typeof client.api.vlm.appkeys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vlm.appkeys.$get(args, options))
}

export async function postApiVlmAppkeys(
  args: InferRequestType<typeof client.api.vlm.appkeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vlm.appkeys.$post(args, options))
}

export async function putApiVlmAppkeysId(
  args: InferRequestType<(typeof client.api.vlm.appkeys)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.vlm.appkeys[':id'].$put(args, options))
}
