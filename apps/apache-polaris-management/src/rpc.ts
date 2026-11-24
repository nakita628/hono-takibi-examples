import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCatalogs(options?: ClientRequestOptions) {
  return await parseResponse(client.catalogs.$get(undefined, options))
}

export async function postCatalogs(
  args: InferRequestType<typeof client.catalogs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs.$post(args, options))
}

export async function getCatalogsCatalogName(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':catalogName'].$get(args, options))
}

export async function putCatalogsCatalogName(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':catalogName'].$put(args, options))
}

export async function deleteCatalogsCatalogName(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':catalogName'].$delete(args, options))
}

export async function getPrincipals(options?: ClientRequestOptions) {
  return await parseResponse(client.principals.$get(undefined, options))
}

export async function postPrincipals(
  args: InferRequestType<typeof client.principals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.principals.$post(args, options))
}

export async function getPrincipalsPrincipalName(
  args: InferRequestType<(typeof client.principals)[':principalName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.principals[':principalName'].$get(args, options))
}

export async function putPrincipalsPrincipalName(
  args: InferRequestType<(typeof client.principals)[':principalName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.principals[':principalName'].$put(args, options))
}

export async function deletePrincipalsPrincipalName(
  args: InferRequestType<(typeof client.principals)[':principalName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.principals[':principalName'].$delete(args, options))
}

export async function postPrincipalsPrincipalNameRotate(
  args: InferRequestType<(typeof client.principals)[':principalName']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.principals[':principalName'].rotate.$post(args, options))
}

export async function postPrincipalsPrincipalNameReset(
  args: InferRequestType<(typeof client.principals)[':principalName']['reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.principals[':principalName'].reset.$post(args, options))
}

export async function getPrincipalsPrincipalNamePrincipalRoles(
  args: InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.principals[':principalName']['principal-roles'].$get(args, options),
  )
}

export async function putPrincipalsPrincipalNamePrincipalRoles(
  args: InferRequestType<(typeof client.principals)[':principalName']['principal-roles']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.principals[':principalName']['principal-roles'].$put(args, options),
  )
}

export async function deletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleName(
  args: InferRequestType<
    (typeof client.principals)[':principalName']['principal-roles'][':principalRoleName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.principals[':principalName']['principal-roles'][':principalRoleName'].$delete(
      args,
      options,
    ),
  )
}

export async function getPrincipalRoles(options?: ClientRequestOptions) {
  return await parseResponse(client['principal-roles'].$get(undefined, options))
}

export async function postPrincipalRoles(
  args: InferRequestType<(typeof client)['principal-roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['principal-roles'].$post(args, options))
}

export async function getPrincipalRolesPrincipalRoleName(
  args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['principal-roles'][':principalRoleName'].$get(args, options))
}

export async function putPrincipalRolesPrincipalRoleName(
  args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['principal-roles'][':principalRoleName'].$put(args, options))
}

export async function deletePrincipalRolesPrincipalRoleName(
  args: InferRequestType<(typeof client)['principal-roles'][':principalRoleName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['principal-roles'][':principalRoleName'].$delete(args, options))
}

export async function getPrincipalRolesPrincipalRoleNamePrincipals(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['principals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['principal-roles'][':principalRoleName'].principals.$get(args, options),
  )
}

export async function getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogName(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'].$get(
      args,
      options,
    ),
  )
}

export async function putPrincipalRolesPrincipalRoleNameCatalogRolesCatalogName(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'].$put(
      args,
      options,
    ),
  )
}

export async function deletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleName(
  args: InferRequestType<
    (typeof client)['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][':catalogRoleName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['principal-roles'][':principalRoleName']['catalog-roles'][':catalogName'][
      ':catalogRoleName'
    ].$delete(args, options),
  )
}

export async function getCatalogsCatalogNameCatalogRoles(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':catalogName']['catalog-roles'].$get(args, options))
}

export async function postCatalogsCatalogNameCatalogRoles(
  args: InferRequestType<(typeof client.catalogs)[':catalogName']['catalog-roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalogs[':catalogName']['catalog-roles'].$post(args, options))
}

export async function getCatalogsCatalogNameCatalogRolesCatalogRoleName(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].$get(args, options),
  )
}

export async function putCatalogsCatalogNameCatalogRolesCatalogRoleName(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].$put(args, options),
  )
}

export async function deleteCatalogsCatalogNameCatalogRolesCatalogRoleName(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].$delete(args, options),
  )
}

export async function getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRoles(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName']['principal-roles'].$get(
      args,
      options,
    ),
  )
}

export async function getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].grants.$get(args, options),
  )
}

export async function putCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].grants.$put(args, options),
  )
}

export async function postCatalogsCatalogNameCatalogRolesCatalogRoleNameGrants(
  args: InferRequestType<
    (typeof client.catalogs)[':catalogName']['catalog-roles'][':catalogRoleName']['grants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.catalogs[':catalogName']['catalog-roles'][':catalogRoleName'].grants.$post(
      args,
      options,
    ),
  )
}
