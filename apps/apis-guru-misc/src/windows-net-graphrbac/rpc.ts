import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getTenantIDApplications(
  args: InferRequestType<(typeof client)[':tenantID']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].applications.$get(args, options))
}

export async function postTenantIDApplications(
  args: InferRequestType<(typeof client)[':tenantID']['applications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].applications.$post(args, options))
}

export async function getTenantIDApplicationsApplicationObjectId(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].applications[':applicationObjectId'].$get(args, options),
  )
}

export async function deleteTenantIDApplicationsApplicationObjectId(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].applications[':applicationObjectId'].$delete(args, options),
  )
}

export async function patchTenantIDApplicationsApplicationObjectId(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].applications[':applicationObjectId'].$patch(args, options),
  )
}

export async function postTenantIDApplicationsApplicationObjectIdLinksOwners(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].applications[':applicationObjectId'].$links.owners.$post(args, options),
  )
}

export async function deleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectId(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners'][':ownerObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].applications[':applicationObjectId'].$links.owners[
      ':ownerObjectId'
    ].$delete(args, options),
  )
}

export async function getTenantIDApplicationsApplicationObjectIdKeyCredentials(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].applications[':applicationObjectId'].keyCredentials.$get(args, options),
  )
}

export async function patchTenantIDApplicationsApplicationObjectIdKeyCredentials(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].applications[':applicationObjectId'].keyCredentials.$patch(args, options),
  )
}

export async function getTenantIDApplicationsApplicationObjectIdOwners(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].applications[':applicationObjectId'].owners.$get(args, options),
  )
}

export async function getTenantIDApplicationsApplicationObjectIdPasswordCredentials(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].applications[':applicationObjectId'].passwordCredentials.$get(
      args,
      options,
    ),
  )
}

export async function patchTenantIDApplicationsApplicationObjectIdPasswordCredentials(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].applications[':applicationObjectId'].passwordCredentials.$patch(
      args,
      options,
    ),
  )
}

export async function getTenantIDDeletedApplications(
  args: InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].deletedApplications.$get(args, options))
}

export async function deleteTenantIDDeletedApplicationsApplicationObjectId(
  args: InferRequestType<
    (typeof client)[':tenantID']['deletedApplications'][':applicationObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].deletedApplications[':applicationObjectId'].$delete(args, options),
  )
}

export async function postTenantIDDeletedApplicationsObjectIdRestore(
  args: InferRequestType<
    (typeof client)[':tenantID']['deletedApplications'][':objectId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].deletedApplications[':objectId'].restore.$post(args, options),
  )
}

export async function getTenantIDDomains(
  args: InferRequestType<(typeof client)[':tenantID']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].domains.$get(args, options))
}

export async function getTenantIDDomainsDomainName(
  args: InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].domains[':domainName'].$get(args, options))
}

export async function postTenantIDGetObjectsByObjectIds(
  args: InferRequestType<(typeof client)[':tenantID']['getObjectsByObjectIds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].getObjectsByObjectIds.$post(args, options))
}

export async function getTenantIDGroups(
  args: InferRequestType<(typeof client)[':tenantID']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].groups.$get(args, options))
}

export async function postTenantIDGroups(
  args: InferRequestType<(typeof client)[':tenantID']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].groups.$post(args, options))
}

export async function postTenantIDGroupsGroupObjectIdLinksMembers(
  args: InferRequestType<
    (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].groups[':groupObjectId'].$links.members.$post(args, options),
  )
}

export async function deleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectId(
  args: InferRequestType<
    (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members'][':memberObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].groups[':groupObjectId'].$links.members[':memberObjectId'].$delete(
      args,
      options,
    ),
  )
}

export async function getTenantIDGroupsObjectId(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].groups[':objectId'].$get(args, options))
}

export async function deleteTenantIDGroupsObjectId(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].groups[':objectId'].$delete(args, options))
}

export async function postTenantIDGroupsObjectIdLinksOwners(
  args: InferRequestType<
    (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].groups[':objectId'].$links.owners.$post(args, options),
  )
}

export async function deleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectId(
  args: InferRequestType<
    (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].groups[':objectId'].$links.owners[':ownerObjectId'].$delete(args, options),
  )
}

export async function postTenantIDGroupsObjectIdGetMemberGroups(
  args: InferRequestType<
    (typeof client)[':tenantID']['groups'][':objectId']['getMemberGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].groups[':objectId'].getMemberGroups.$post(args, options),
  )
}

export async function getTenantIDGroupsObjectIdMembers(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].groups[':objectId'].members.$get(args, options))
}

export async function getTenantIDGroupsObjectIdOwners(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].groups[':objectId'].owners.$get(args, options))
}

export async function postTenantIDIsMemberOf(
  args: InferRequestType<(typeof client)[':tenantID']['isMemberOf']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].isMemberOf.$post(args, options))
}

export async function getTenantIDMe(
  args: InferRequestType<(typeof client)[':tenantID']['me']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].me.$get(args, options))
}

export async function getTenantIDMeOwnedObjects(
  args: InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].me.ownedObjects.$get(args, options))
}

export async function getTenantIDOauth2PermissionGrants(
  args: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].oauth2PermissionGrants.$get(args, options))
}

export async function postTenantIDOauth2PermissionGrants(
  args: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].oauth2PermissionGrants.$post(args, options))
}

export async function deleteTenantIDOauth2PermissionGrantsObjectId(
  args: InferRequestType<
    (typeof client)[':tenantID']['oauth2PermissionGrants'][':objectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].oauth2PermissionGrants[':objectId'].$delete(args, options),
  )
}

export async function getTenantIDServicePrincipals(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].servicePrincipals.$get(args, options))
}

export async function postTenantIDServicePrincipals(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].servicePrincipals.$post(args, options))
}

export async function getTenantIDServicePrincipalsObjectId(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].servicePrincipals[':objectId'].$get(args, options))
}

export async function deleteTenantIDServicePrincipalsObjectId(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].$delete(args, options),
  )
}

export async function patchTenantIDServicePrincipalsObjectId(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].$patch(args, options),
  )
}

export async function postTenantIDServicePrincipalsObjectIdLinksOwners(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].$links.owners.$post(args, options),
  )
}

export async function deleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectId(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].$links.owners[':ownerObjectId'].$delete(
      args,
      options,
    ),
  )
}

export async function getTenantIDServicePrincipalsObjectIdAppRoleAssignedTo(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignedTo.$get(args, options),
  )
}

export async function getTenantIDServicePrincipalsObjectIdAppRoleAssignments(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignments.$get(args, options),
  )
}

export async function getTenantIDServicePrincipalsObjectIdKeyCredentials(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].keyCredentials.$get(args, options),
  )
}

export async function patchTenantIDServicePrincipalsObjectIdKeyCredentials(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].keyCredentials.$patch(args, options),
  )
}

export async function getTenantIDServicePrincipalsObjectIdOwners(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].owners.$get(args, options),
  )
}

export async function getTenantIDServicePrincipalsObjectIdPasswordCredentials(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].passwordCredentials.$get(args, options),
  )
}

export async function patchTenantIDServicePrincipalsObjectIdPasswordCredentials(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipals[':objectId'].passwordCredentials.$patch(args, options),
  )
}

export async function getTenantIDServicePrincipalsByAppIdApplicationIDObjectId(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].servicePrincipalsByAppId[':applicationID'].objectId.$get(args, options),
  )
}

export async function getTenantIDUsers(
  args: InferRequestType<(typeof client)[':tenantID']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].users.$get(args, options))
}

export async function postTenantIDUsers(
  args: InferRequestType<(typeof client)[':tenantID']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].users.$post(args, options))
}

export async function postTenantIDUsersObjectIdGetMemberGroups(
  args: InferRequestType<
    (typeof client)[':tenantID']['users'][':objectId']['getMemberGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':tenantID'].users[':objectId'].getMemberGroups.$post(args, options),
  )
}

export async function getTenantIDUsersUpnOrObjectId(
  args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].users[':upnOrObjectId'].$get(args, options))
}

export async function deleteTenantIDUsersUpnOrObjectId(
  args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].users[':upnOrObjectId'].$delete(args, options))
}

export async function patchTenantIDUsersUpnOrObjectId(
  args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':tenantID'].users[':upnOrObjectId'].$patch(args, options))
}
