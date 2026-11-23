import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.api_keys.$get(undefined, options))
}

export async function postApiKeys(
  args: InferRequestType<typeof client.api_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys.$post(args, options))
}

export async function deleteApiKeysKeyId(
  args: InferRequestType<(typeof client.api_keys)[':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':key_id'].$delete(args, options))
}

export async function getProjectsProjectIdOperationsOperationId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['operations'][':operation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].operations[':operation_id'].$get(args, options),
  )
}

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getProjectsShared(
  args: InferRequestType<typeof client.projects.shared.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.shared.$get(args, options))
}

export async function getProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].$get(args, options))
}

export async function deleteProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].$delete(args, options))
}

export async function patchProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':project_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].$patch(args, options))
}

export async function getProjectsProjectIdOperations(
  args: InferRequestType<(typeof client.projects)[':project_id']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].operations.$get(args, options))
}

export async function getProjectsProjectIdPermissions(
  args: InferRequestType<(typeof client.projects)[':project_id']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].permissions.$get(args, options))
}

export async function postProjectsProjectIdPermissions(
  args: InferRequestType<(typeof client.projects)[':project_id']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].permissions.$post(args, options))
}

export async function deleteProjectsProjectIdPermissionsPermissionId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['permissions'][':permission_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].permissions[':permission_id'].$delete(args, options),
  )
}

export async function getProjectsProjectIdJwks(
  args: InferRequestType<(typeof client.projects)[':project_id']['jwks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].jwks.$get(args, options))
}

export async function postProjectsProjectIdJwks(
  args: InferRequestType<(typeof client.projects)[':project_id']['jwks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].jwks.$post(args, options))
}

export async function deleteProjectsProjectIdJwksJwksId(
  args: InferRequestType<(typeof client.projects)[':project_id']['jwks'][':jwks_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].jwks[':jwks_id'].$delete(args, options))
}

export async function getProjectsProjectIdConnectionUri(
  args: InferRequestType<(typeof client.projects)[':project_id']['connection_uri']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].connection_uri.$get(args, options))
}

export async function getProjectsProjectIdBranches(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].branches.$get(args, options))
}

export async function postProjectsProjectIdBranches(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].branches.$post(args, options))
}

export async function getProjectsProjectIdBranchesCount(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].branches.count.$get(args, options))
}

export async function getProjectsProjectIdBranchesBranchId(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].$get(args, options),
  )
}

export async function deleteProjectsProjectIdBranchesBranchId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].$delete(args, options),
  )
}

export async function patchProjectsProjectIdBranchesBranchId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].$patch(args, options),
  )
}

export async function postProjectsProjectIdBranchesBranchIdRestore(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].restore.$post(args, options),
  )
}

export async function getProjectsProjectIdBranchesBranchIdSchema(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].schema.$get(args, options),
  )
}

export async function getProjectsProjectIdBranchesBranchIdCompareSchema(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].compare_schema.$get(args, options),
  )
}

export async function postProjectsProjectIdBranchesBranchIdSetAsDefault(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['set_as_default']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].set_as_default.$post(args, options),
  )
}

export async function getProjectsProjectIdBranchesBranchIdEndpoints(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].endpoints.$get(args, options),
  )
}

export async function getProjectsProjectIdBranchesBranchIdDatabases(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].databases.$get(args, options),
  )
}

export async function postProjectsProjectIdBranchesBranchIdDatabases(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].databases.$post(args, options),
  )
}

export async function getProjectsProjectIdBranchesBranchIdDatabasesDatabaseName(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].databases[':database_name'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseName(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].databases[':database_name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchProjectsProjectIdBranchesBranchIdDatabasesDatabaseName(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].databases[':database_name'].$patch(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectIdBranchesBranchIdRoles(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].roles.$get(args, options),
  )
}

export async function postProjectsProjectIdBranchesBranchIdRoles(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].roles.$post(args, options),
  )
}

export async function getProjectsProjectIdBranchesBranchIdRolesRoleName(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].roles[':role_name'].$get(args, options),
  )
}

export async function deleteProjectsProjectIdBranchesBranchIdRolesRoleName(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].roles[':role_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPassword(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].roles[':role_name'].reveal_password.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectIdBranchesBranchIdRolesRoleNameResetPassword(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reset_password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].branches[':branch_id'].roles[':role_name'].reset_password.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectIdVpcEndpoints(
  args: InferRequestType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].vpc_endpoints.$get(args, options))
}

export async function postProjectsProjectIdVpcEndpointsVpcEndpointId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].vpc_endpoints[':vpc_endpoint_id'].$post(args, options),
  )
}

export async function deleteProjectsProjectIdVpcEndpointsVpcEndpointId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].vpc_endpoints[':vpc_endpoint_id'].$delete(args, options),
  )
}

export async function getProjectsProjectIdEndpoints(
  args: InferRequestType<(typeof client.projects)[':project_id']['endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].endpoints.$get(args, options))
}

export async function postProjectsProjectIdEndpoints(
  args: InferRequestType<(typeof client.projects)[':project_id']['endpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].endpoints.$post(args, options))
}

export async function getProjectsProjectIdEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].endpoints[':endpoint_id'].$get(args, options),
  )
}

export async function deleteProjectsProjectIdEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].endpoints[':endpoint_id'].$delete(args, options),
  )
}

export async function patchProjectsProjectIdEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].endpoints[':endpoint_id'].$patch(args, options),
  )
}

export async function postProjectsProjectIdEndpointsEndpointIdStart(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].endpoints[':endpoint_id'].start.$post(args, options),
  )
}

export async function postProjectsProjectIdEndpointsEndpointIdSuspend(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['suspend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].endpoints[':endpoint_id'].suspend.$post(args, options),
  )
}

export async function postProjectsProjectIdEndpointsEndpointIdRestart(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].endpoints[':endpoint_id'].restart.$post(args, options),
  )
}

export async function getConsumptionHistoryAccount(
  args: InferRequestType<typeof client.consumption_history.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumption_history.account.$get(args, options))
}

export async function getConsumptionHistoryProjects(
  args: InferRequestType<typeof client.consumption_history.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumption_history.projects.$get(args, options))
}

export async function getOrganizationsOrgId(
  args: InferRequestType<(typeof client.organizations)[':org_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':org_id'].$get(args, options))
}

export async function getOrganizationsOrgIdApiKeys(
  args: InferRequestType<(typeof client.organizations)[':org_id']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':org_id'].api_keys.$get(args, options))
}

export async function postOrganizationsOrgIdApiKeys(
  args: InferRequestType<(typeof client.organizations)[':org_id']['api_keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':org_id'].api_keys.$post(args, options))
}

export async function deleteOrganizationsOrgIdApiKeysKeyId(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['api_keys'][':key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].api_keys[':key_id'].$delete(args, options),
  )
}

export async function getOrganizationsOrgIdMembers(
  args: InferRequestType<(typeof client.organizations)[':org_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':org_id'].members.$get(args, options))
}

export async function getOrganizationsOrgIdMembersMemberId(
  args: InferRequestType<(typeof client.organizations)[':org_id']['members'][':member_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].members[':member_id'].$get(args, options),
  )
}

export async function deleteOrganizationsOrgIdMembersMemberId(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['members'][':member_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].members[':member_id'].$delete(args, options),
  )
}

export async function patchOrganizationsOrgIdMembersMemberId(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['members'][':member_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].members[':member_id'].$patch(args, options),
  )
}

export async function getOrganizationsOrgIdInvitations(
  args: InferRequestType<(typeof client.organizations)[':org_id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':org_id'].invitations.$get(args, options))
}

export async function postOrganizationsOrgIdInvitations(
  args: InferRequestType<(typeof client.organizations)[':org_id']['invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':org_id'].invitations.$post(args, options))
}

export async function getOrganizationsOrgIdVpcRegionRegionIdVpcEndpoints(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].vpc.region[':region_id'].vpc_endpoints.$get(args, options),
  )
}

export async function getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointId(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].vpc.region[':region_id'].vpc_endpoints[':vpc_endpoint_id'].$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointId(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].vpc.region[':region_id'].vpc_endpoints[
      ':vpc_endpoint_id'
    ].$post(args, options),
  )
}

export async function deleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointId(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':org_id'].vpc.region[':region_id'].vpc_endpoints[
      ':vpc_endpoint_id'
    ].$delete(args, options),
  )
}

export async function getRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.regions.$get(undefined, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$get(undefined, options))
}

export async function getUsersMeOrganizations(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.organizations.$get(undefined, options))
}

export async function postUsersMeProjectsTransfer(
  args: InferRequestType<typeof client.users.me.projects.transfer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.projects.transfer.$post(args, options))
}
