import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAgentsBlueprints(
  args: InferRequestType<typeof client.agents.blueprints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.blueprints.$get(args, options))
}

export async function postAgentsBlueprints(
  args: InferRequestType<typeof client.agents.blueprints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.blueprints.$post(args, options))
}

export async function getAgentsBlueprintsAgentBlueprintId(
  args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.blueprints[':agent_blueprint_id'].$get(args, options))
}

export async function deleteAgentsBlueprintsAgentBlueprintId(
  args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.blueprints[':agent_blueprint_id'].$delete(args, options))
}

export async function patchAgentsBlueprintsAgentBlueprintId(
  args: InferRequestType<(typeof client.agents.blueprints)[':agent_blueprint_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.blueprints[':agent_blueprint_id'].$patch(args, options))
}

export async function postAgentsBlueprintsAgentBlueprintIdTokens(
  args: InferRequestType<
    (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.blueprints[':agent_blueprint_id'].tokens.$post(args, options),
  )
}

export async function postAgentsBlueprintsAgentBlueprintIdTokensValidate(
  args: InferRequestType<
    (typeof client.agents.blueprints)[':agent_blueprint_id']['tokens']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.blueprints[':agent_blueprint_id'].tokens.validate.$post(args, options),
  )
}

export async function patchAgentsClaimsAttempts(
  args: InferRequestType<typeof client.agents.claims.attempts.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.claims.attempts.$patch(args, options))
}

export async function postAgentsCredentialsValidate(
  args: InferRequestType<typeof client.agents.credentials.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.credentials.validate.$post(args, options))
}

export async function getAgentsInstances(
  args: InferRequestType<typeof client.agents.instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.instances.$get(args, options))
}

export async function getAgentsInstancesAgentInstanceId(
  args: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.instances[':agent_instance_id'].$get(args, options))
}

export async function deleteAgentsInstancesAgentInstanceId(
  args: InferRequestType<(typeof client.agents.instances)[':agent_instance_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.instances[':agent_instance_id'].$delete(args, options))
}

export async function getAgentsRegistrationsId(
  args: InferRequestType<(typeof client.agents.registrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.registrations[':id'].$get(args, options))
}

export async function postAgentsRegistrationsIdRevoke(
  args: InferRequestType<(typeof client.agents.registrations)[':id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.registrations[':id'].revoke.$post(args, options))
}

export async function getAgentsSessions(
  args: InferRequestType<typeof client.agents.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.sessions.$get(args, options))
}

export async function getAgentsSessionsAgentInstanceSessionId(
  args: InferRequestType<(typeof client.agents.sessions)[':agent_instance_session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':agent_instance_session_id'].$get(args, options),
  )
}

export async function postAgentsSessionsAgentInstanceSessionIdRevoke(
  args: InferRequestType<
    (typeof client.agents.sessions)[':agent_instance_session_id']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.agents.sessions[':agent_instance_session_id'].revoke.$post(args, options),
  )
}

export async function postApiKeysValidations(
  args: InferRequestType<typeof client.api_keys.validations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys.validations.$post(args, options))
}

export async function deleteApiKeysId(
  args: InferRequestType<(typeof client.api_keys)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':id'].$delete(args, options))
}

export async function postApiKeysIdExpire(
  args: InferRequestType<(typeof client.api_keys)[':id']['expire']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':id'].expire.$post(args, options))
}

export async function getAuditLogsActions(
  args: InferRequestType<typeof client.audit_logs.actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit_logs.actions.$get(args, options))
}

export async function getAuditLogsActionsActionNameSchemas(
  args: InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit_logs.actions[':actionName'].schemas.$get(args, options))
}

export async function postAuditLogsActionsActionNameSchemas(
  args: InferRequestType<(typeof client.audit_logs.actions)[':actionName']['schemas']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit_logs.actions[':actionName'].schemas.$post(args, options))
}

export async function postAuditLogsEvents(
  args: InferRequestType<typeof client.audit_logs.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit_logs.events.$post(args, options))
}

export async function postAuditLogsExports(
  args: InferRequestType<typeof client.audit_logs.exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit_logs.exports.$post(args, options))
}

export async function getAuditLogsExportsAuditLogExportId(
  args: InferRequestType<(typeof client.audit_logs.exports)[':auditLogExportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit_logs.exports[':auditLogExportId'].$get(args, options))
}

export async function postAuthChallengesIdVerify(
  args: InferRequestType<(typeof client.auth.challenges)[':id']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.challenges[':id'].verify.$post(args, options))
}

export async function postAuthFactorsEnroll(
  args: InferRequestType<typeof client.auth.factors.enroll.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.factors.enroll.$post(args, options))
}

export async function getAuthFactorsId(
  args: InferRequestType<(typeof client.auth.factors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.factors[':id'].$get(args, options))
}

export async function deleteAuthFactorsId(
  args: InferRequestType<(typeof client.auth.factors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.factors[':id'].$delete(args, options))
}

export async function postAuthFactorsIdChallenge(
  args: InferRequestType<(typeof client.auth.factors)[':id']['challenge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.factors[':id'].challenge.$post(args, options))
}

export async function postAuthkitOauth2Complete(
  args: InferRequestType<typeof client.authkit.oauth2.complete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authkit.oauth2.complete.$post(args, options))
}

export async function getAuthorizationGroupsGroupIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.groups[':group_id'].role_assignments.$get(args, options),
  )
}

export async function putAuthorizationGroupsGroupIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.groups[':group_id'].role_assignments.$put(args, options),
  )
}

export async function postAuthorizationGroupsGroupIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.groups[':group_id'].role_assignments.$post(args, options),
  )
}

export async function deleteAuthorizationGroupsGroupIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.groups[':group_id'].role_assignments.$delete(args, options),
  )
}

export async function patchAuthorizationGroupsGroupIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.groups[':group_id'].role_assignments.$patch(args, options),
  )
}

export async function getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentId(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.groups[':group_id'].role_assignments[':role_assignment_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentId(
  args: InferRequestType<
    (typeof client.authorization.groups)[':group_id']['role_assignments'][':role_assignment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.groups[':group_id'].role_assignments[':role_assignment_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postAuthorizationOrganizationMembershipsOrganizationMembershipIdCheck(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organization_memberships[':organization_membership_id'].check.$post(
      args,
      options,
    ),
  )
}

export async function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResources(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organization_memberships[':organization_membership_id'].resources.$get(
      args,
      options,
    ),
  )
}

export async function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissions(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_id']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organization_memberships[':organization_membership_id'].resources[
      ':resource_id'
    ].permissions.$get(args, options),
  )
}

export async function getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissions(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['resources'][':resource_type_slug'][':external_id']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organization_memberships[':organization_membership_id'].resources[
      ':resource_type_slug'
    ][':external_id'].permissions.$get(args, options),
  )
}

export async function getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organization_memberships[
      ':organization_membership_id'
    ].role_assignments.$get(args, options),
  )
}

export async function postAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organization_memberships[
      ':organization_membership_id'
    ].role_assignments.$post(args, options),
  )
}

export async function deleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organization_memberships[
      ':organization_membership_id'
    ].role_assignments.$delete(args, options),
  )
}

export async function patchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organization_memberships[
      ':organization_membership_id'
    ].role_assignments.$patch(args, options),
  )
}

export async function deleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentId(
  args: InferRequestType<
    (typeof client.authorization.organization_memberships)[':organization_membership_id']['role_assignments'][':role_assignment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organization_memberships[':organization_membership_id'].role_assignments[
      ':role_assignment_id'
    ].$delete(args, options),
  )
}

export async function getAuthorizationOrganizationsOrganizationIdRoles(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organizationId'].roles.$get(args, options),
  )
}

export async function postAuthorizationOrganizationsOrganizationIdRoles(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organizationId'].roles.$post(args, options),
  )
}

export async function getAuthorizationOrganizationsOrganizationIdRolesSlug(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organizationId'].roles[':slug'].$get(args, options),
  )
}

export async function deleteAuthorizationOrganizationsOrganizationIdRolesSlug(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organizationId'].roles[':slug'].$delete(args, options),
  )
}

export async function patchAuthorizationOrganizationsOrganizationIdRolesSlug(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organizationId'].roles[':slug'].$patch(args, options),
  )
}

export async function putAuthorizationOrganizationsOrganizationIdRolesSlugPermissions(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organizationId'].roles[':slug'].permissions.$put(
      args,
      options,
    ),
  )
}

export async function postAuthorizationOrganizationsOrganizationIdRolesSlugPermissions(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organizationId'].roles[':slug'].permissions.$post(
      args,
      options,
    ),
  )
}

export async function deleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlug(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organizationId']['roles'][':slug']['permissions'][':permissionSlug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organizationId'].roles[':slug'].permissions[
      ':permissionSlug'
    ].$delete(args, options),
  )
}

export async function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
      ':external_id'
    ].$get(args, options),
  )
}

export async function deleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
      ':external_id'
    ].$delete(args, options),
  )
}

export async function patchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalId(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
      ':external_id'
    ].$patch(args, options),
  )
}

export async function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMemberships(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['organization_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
      ':external_id'
    ].organization_memberships.$get(args, options),
  )
}

export async function getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.organizations)[':organization_id']['resources'][':resource_type_slug'][':external_id']['role_assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.organizations[':organization_id'].resources[':resource_type_slug'][
      ':external_id'
    ].role_assignments.$get(args, options),
  )
}

export async function getAuthorizationPermissions(
  args: InferRequestType<typeof client.authorization.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.permissions.$get(args, options))
}

export async function postAuthorizationPermissions(
  args: InferRequestType<typeof client.authorization.permissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.permissions.$post(args, options))
}

export async function getAuthorizationPermissionsSlug(
  args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.permissions[':slug'].$get(args, options))
}

export async function deleteAuthorizationPermissionsSlug(
  args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.permissions[':slug'].$delete(args, options))
}

export async function patchAuthorizationPermissionsSlug(
  args: InferRequestType<(typeof client.authorization.permissions)[':slug']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.permissions[':slug'].$patch(args, options))
}

export async function getAuthorizationResources(
  args: InferRequestType<typeof client.authorization.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.resources.$get(args, options))
}

export async function postAuthorizationResources(
  args: InferRequestType<typeof client.authorization.resources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.resources.$post(args, options))
}

export async function getAuthorizationResourcesResourceId(
  args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.resources[':resource_id'].$get(args, options))
}

export async function deleteAuthorizationResourcesResourceId(
  args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.resources[':resource_id'].$delete(args, options))
}

export async function patchAuthorizationResourcesResourceId(
  args: InferRequestType<(typeof client.authorization.resources)[':resource_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.resources[':resource_id'].$patch(args, options))
}

export async function getAuthorizationResourcesResourceIdOrganizationMemberships(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['organization_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.resources[':resource_id'].organization_memberships.$get(args, options),
  )
}

export async function getAuthorizationResourcesResourceIdRoleAssignments(
  args: InferRequestType<
    (typeof client.authorization.resources)[':resource_id']['role_assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authorization.resources[':resource_id'].role_assignments.$get(args, options),
  )
}

export async function getAuthorizationRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.authorization.roles.$get(undefined, options))
}

export async function postAuthorizationRoles(
  args: InferRequestType<typeof client.authorization.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.roles.$post(args, options))
}

export async function getAuthorizationRolesSlug(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.roles[':slug'].$get(args, options))
}

export async function patchAuthorizationRolesSlug(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.roles[':slug'].$patch(args, options))
}

export async function putAuthorizationRolesSlugPermissions(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.roles[':slug'].permissions.$put(args, options))
}

export async function postAuthorizationRolesSlugPermissions(
  args: InferRequestType<(typeof client.authorization.roles)[':slug']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorization.roles[':slug'].permissions.$post(args, options))
}

export async function postClientToken(
  args: InferRequestType<typeof client.client.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client.token.$post(args, options))
}

export async function getConnectApplications(
  args: InferRequestType<typeof client.connect.applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.applications.$get(args, options))
}

export async function postConnectApplications(
  args: InferRequestType<typeof client.connect.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.applications.$post(args, options))
}

export async function getConnectApplicationsId(
  args: InferRequestType<(typeof client.connect.applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.applications[':id'].$get(args, options))
}

export async function putConnectApplicationsId(
  args: InferRequestType<(typeof client.connect.applications)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.applications[':id'].$put(args, options))
}

export async function deleteConnectApplicationsId(
  args: InferRequestType<(typeof client.connect.applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.applications[':id'].$delete(args, options))
}

export async function getConnectApplicationsIdClientSecrets(
  args: InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.applications[':id'].client_secrets.$get(args, options))
}

export async function postConnectApplicationsIdClientSecrets(
  args: InferRequestType<(typeof client.connect.applications)[':id']['client_secrets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.applications[':id'].client_secrets.$post(args, options))
}

export async function deleteConnectClientSecretsId(
  args: InferRequestType<(typeof client.connect.client_secrets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.client_secrets[':id'].$delete(args, options))
}

export async function getConnections(
  args: InferRequestType<typeof client.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$get(args, options))
}

export async function postConnections(
  args: InferRequestType<typeof client.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$post(args, options))
}

export async function getConnectionsConnectionIdSamlIdpSigningCerts(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connectionId'].saml_idp_signing_certs.$get(args, options),
  )
}

export async function postConnectionsConnectionIdSamlIdpSigningCerts(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_idp_signing_certs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connectionId'].saml_idp_signing_certs.$post(args, options),
  )
}

export async function deleteConnectionsConnectionIdSamlIdpSigningCertsCertificateId(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_idp_signing_certs'][':certificateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connectionId'].saml_idp_signing_certs[':certificateId'].$delete(
      args,
      options,
    ),
  )
}

export async function getConnectionsConnectionIdSamlSpEncryptionCerts(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connectionId'].saml_sp_encryption_certs.$get(args, options),
  )
}

export async function postConnectionsConnectionIdSamlSpEncryptionCerts(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_encryption_certs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connectionId'].saml_sp_encryption_certs.$post(args, options),
  )
}

export async function deleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateId(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_encryption_certs'][':certificateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connectionId'].saml_sp_encryption_certs[':certificateId'].$delete(
      args,
      options,
    ),
  )
}

export async function getConnectionsConnectionIdSamlSpSigningCert(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connectionId'].saml_sp_signing_cert.$get(args, options),
  )
}

export async function postConnectionsConnectionIdSamlSpSigningCert(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_signing_cert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connectionId'].saml_sp_signing_cert.$post(args, options),
  )
}

export async function deleteConnectionsConnectionIdSamlSpSigningCertCertificateId(
  args: InferRequestType<
    (typeof client.connections)[':connectionId']['saml_sp_signing_cert'][':certificateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connectionId'].saml_sp_signing_cert[':certificateId'].$delete(
      args,
      options,
    ),
  )
}

export async function getConnectionsId(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].$get(args, options))
}

export async function deleteConnectionsId(
  args: InferRequestType<(typeof client.connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].$delete(args, options))
}

export async function patchConnectionsId(
  args: InferRequestType<(typeof client.connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].$patch(args, options))
}

export async function getDataIntegrations(
  args: InferRequestType<(typeof client)['data-integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'].$get(args, options))
}

export async function postDataIntegrations(
  args: InferRequestType<(typeof client)['data-integrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'].$post(args, options))
}

export async function postDataIntegrationsFinish(
  args: InferRequestType<(typeof client)['data-integrations']['finish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'].finish.$post(args, options))
}

export async function getDataIntegrationsSlug(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'][':slug'].$get(args, options))
}

export async function putDataIntegrationsSlug(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'][':slug'].$put(args, options))
}

export async function deleteDataIntegrationsSlug(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'][':slug'].$delete(args, options))
}

export async function putDataIntegrationsSlugApiKey(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'][':slug']['api-key'].$put(args, options))
}

export async function postDataIntegrationsSlugApiKey(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['api-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'][':slug']['api-key'].$post(args, options))
}

export async function postDataIntegrationsSlugAuthorize(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'][':slug'].authorize.$post(args, options))
}

export async function putDataIntegrationsSlugClientCredentials(
  args: InferRequestType<
    (typeof client)['data-integrations'][':slug']['client-credentials']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-integrations'][':slug']['client-credentials'].$put(args, options),
  )
}

export async function postDataIntegrationsSlugClientCredentials(
  args: InferRequestType<
    (typeof client)['data-integrations'][':slug']['client-credentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-integrations'][':slug']['client-credentials'].$post(args, options),
  )
}

export async function postDataIntegrationsSlugCredentials(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'][':slug'].credentials.$post(args, options))
}

export async function getDataIntegrationsSlugOrganization(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'][':slug'].organization.$get(args, options))
}

export async function putDataIntegrationsSlugOrganization(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'][':slug'].organization.$put(args, options))
}

export async function deleteDataIntegrationsSlugOrganization(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['organization']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['data-integrations'][':slug'].organization.$delete(args, options),
  )
}

export async function postDataIntegrationsSlugToken(
  args: InferRequestType<(typeof client)['data-integrations'][':slug']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['data-integrations'][':slug'].token.$post(args, options))
}

export async function getDirectories(
  args: InferRequestType<typeof client.directories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directories.$get(args, options))
}

export async function getDirectoriesDirectoryIdGroups(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directories[':directoryId'].groups.$get(args, options))
}

export async function getDirectoriesDirectoryIdGroupsGroupId(
  args: InferRequestType<(typeof client.directories)[':directoryId']['groups'][':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.directories[':directoryId'].groups[':groupId'].$get(args, options),
  )
}

export async function getDirectoriesDirectoryIdUsers(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directories[':directoryId'].users.$get(args, options))
}

export async function getDirectoriesDirectoryIdUsersUserId(
  args: InferRequestType<(typeof client.directories)[':directoryId']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.directories[':directoryId'].users[':userId'].$get(args, options),
  )
}

export async function getDirectoriesId(
  args: InferRequestType<(typeof client.directories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directories[':id'].$get(args, options))
}

export async function deleteDirectoriesId(
  args: InferRequestType<(typeof client.directories)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directories[':id'].$delete(args, options))
}

export async function postDirectoriesIdSync(
  args: InferRequestType<(typeof client.directories)[':id']['sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directories[':id'].sync.$post(args, options))
}

export async function getDirectoryGroups(
  args: InferRequestType<typeof client.directory_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directory_groups.$get(args, options))
}

export async function getDirectoryGroupsId(
  args: InferRequestType<(typeof client.directory_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directory_groups[':id'].$get(args, options))
}

export async function getDirectoryUsers(
  args: InferRequestType<typeof client.directory_users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directory_users.$get(args, options))
}

export async function getDirectoryUsersId(
  args: InferRequestType<(typeof client.directory_users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directory_users[':id'].$get(args, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getFeatureFlags(
  args: InferRequestType<(typeof client)['feature-flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['feature-flags'].$get(args, options))
}

export async function getFeatureFlagsSlug(
  args: InferRequestType<(typeof client)['feature-flags'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['feature-flags'][':slug'].$get(args, options))
}

export async function putFeatureFlagsSlugDisable(
  args: InferRequestType<(typeof client)['feature-flags'][':slug']['disable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['feature-flags'][':slug'].disable.$put(args, options))
}

export async function putFeatureFlagsSlugEnable(
  args: InferRequestType<(typeof client)['feature-flags'][':slug']['enable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['feature-flags'][':slug'].enable.$put(args, options))
}

export async function postFeatureFlagsSlugTargetsResourceId(
  args: InferRequestType<
    (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags'][':slug'].targets[':resourceId'].$post(args, options),
  )
}

export async function deleteFeatureFlagsSlugTargetsResourceId(
  args: InferRequestType<
    (typeof client)['feature-flags'][':slug']['targets'][':resourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['feature-flags'][':slug'].targets[':resourceId'].$delete(args, options),
  )
}

export async function postOrganizationDomains(
  args: InferRequestType<typeof client.organization_domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_domains.$post(args, options))
}

export async function getOrganizationDomainsId(
  args: InferRequestType<(typeof client.organization_domains)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_domains[':id'].$get(args, options))
}

export async function deleteOrganizationDomainsId(
  args: InferRequestType<(typeof client.organization_domains)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_domains[':id'].$delete(args, options))
}

export async function postOrganizationDomainsIdVerify(
  args: InferRequestType<(typeof client.organization_domains)[':id']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_domains[':id'].verify.$post(args, options))
}

export async function getOrganizations(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$get(args, options))
}

export async function postOrganizations(
  args: InferRequestType<typeof client.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$post(args, options))
}

export async function getOrganizationsExternalIdExternalId(
  args: InferRequestType<(typeof client.organizations.external_id)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.external_id[':external_id'].$get(args, options))
}

export async function getOrganizationsId(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].$get(args, options))
}

export async function putOrganizationsId(
  args: InferRequestType<(typeof client.organizations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].$put(args, options))
}

export async function deleteOrganizationsId(
  args: InferRequestType<(typeof client.organizations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].$delete(args, options))
}

export async function getOrganizationsIdAuditLogConfiguration(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_log_configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':id'].audit_log_configuration.$get(args, options),
  )
}

export async function getOrganizationsIdAuditLogsRetention(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].audit_logs_retention.$get(args, options))
}

export async function putOrganizationsIdAuditLogsRetention(
  args: InferRequestType<(typeof client.organizations)[':id']['audit_logs_retention']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].audit_logs_retention.$put(args, options))
}

export async function getOrganizationsOrganizationIdApiKeys(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].api_keys.$get(args, options))
}

export async function postOrganizationsOrganizationIdApiKeys(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['api_keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].api_keys.$post(args, options))
}

export async function getOrganizationsOrganizationIdDataIntegrationConfigurations(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['data_integration_configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].data_integration_configurations.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdDataIntegrationConfigurationsSlug(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['data_integration_configurations'][':slug']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].data_integration_configurations[':slug'].$put(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdFeatureFlags(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['feature-flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId']['feature-flags'].$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdGroups(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].groups.$get(args, options))
}

export async function postOrganizationsOrganizationIdGroups(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationId'].groups.$post(args, options))
}

export async function getOrganizationsOrganizationIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].groups[':groupId'].$get(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].groups[':groupId'].$delete(args, options),
  )
}

export async function patchOrganizationsOrganizationIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].groups[':groupId'].$patch(args, options),
  )
}

export async function getOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].groups[':groupId']['organization-memberships'].$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].groups[':groupId']['organization-memberships'].$post(
      args,
      options,
    ),
  )
}

export async function patchOrganizationsOrganizationIdGroupsGroupIdOrganizationMemberships(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].groups[':groupId']['organization-memberships'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdGroupsGroupIdOrganizationMembershipsOmId(
  args: InferRequestType<
    (typeof client.organizations)[':organizationId']['groups'][':groupId']['organization-memberships'][':omId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationId'].groups[':groupId']['organization-memberships'][
      ':omId'
    ].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdAuthorizedApplications(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['authorized_applications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].authorized_applications.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdConnectedAccountsSlug(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].connected_accounts[':slug'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdConnectedAccountsSlug(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].connected_accounts[':slug'].$put(args, options),
  )
}

export async function postOrganizationsOrganizationIdConnectedAccountsSlug(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].connected_accounts[':slug'].$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdConnectedAccountsSlug(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['connected_accounts'][':slug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].connected_accounts[':slug'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdDataProviders(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['data_providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].data_providers.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdItContacts(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].it_contacts.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdItContacts(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['it_contacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].it_contacts.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdItContactsContactId(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].it_contacts[':contact_id'].$delete(args, options),
  )
}

export async function postOrganizationsOrganizationIdItContactsContactIdInvite(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['invite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].it_contacts[':contact_id'].invite.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdItContactsContactIdRevoke(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id']['it_contacts'][':contact_id']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].it_contacts[':contact_id'].revoke.$post(args, options),
  )
}

export async function postPlatformTeams(
  args: InferRequestType<typeof client.platform.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.teams.$post(args, options))
}

export async function getPlatformTeamsTeamId(
  args: InferRequestType<(typeof client.platform.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.teams[':team_id'].$get(args, options))
}

export async function postPortalGenerateLink(
  args: InferRequestType<typeof client.portal.generate_link.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portal.generate_link.$post(args, options))
}

export async function postPortalRevokeLink(
  args: InferRequestType<typeof client.portal.revoke_link.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portal.revoke_link.$post(args, options))
}

export async function postRadarAttempts(
  args: InferRequestType<typeof client.radar.attempts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.attempts.$post(args, options))
}

export async function putRadarAttemptsId(
  args: InferRequestType<(typeof client.radar.attempts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.attempts[':id'].$put(args, options))
}

export async function postRadarListsTypeAction(
  args: InferRequestType<(typeof client.radar.lists)[':type'][':action']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.lists[':type'][':action'].$post(args, options))
}

export async function deleteRadarListsTypeAction(
  args: InferRequestType<(typeof client.radar.lists)[':type'][':action']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.lists[':type'][':action'].$delete(args, options))
}

export async function getSsoAuthorize(
  args: InferRequestType<typeof client.sso.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.authorize.$get(args, options))
}

export async function getSsoJwksClientId(
  args: InferRequestType<(typeof client.sso.jwks)[':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.jwks[':clientId'].$get(args, options))
}

export async function getSsoLogout(
  args: InferRequestType<typeof client.sso.logout.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.logout.$get(args, options))
}

export async function postSsoLogoutAuthorize(
  args: InferRequestType<typeof client.sso.logout.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.logout.authorize.$post(args, options))
}

export async function getSsoProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.sso.profile.$get(undefined, options))
}

export async function postSsoToken(
  args: InferRequestType<typeof client.sso.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.token.$post(args, options))
}

export async function postUserManagementAuthenticate(
  args: InferRequestType<typeof client.user_management.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.authenticate.$post(args, options))
}

export async function getUserManagementAuthkitOauthResources(
  args: InferRequestType<typeof client.user_management.authkit_oauth_resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.authkit_oauth_resources.$get(args, options))
}

export async function postUserManagementAuthkitOauthResources(
  args: InferRequestType<typeof client.user_management.authkit_oauth_resources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.authkit_oauth_resources.$post(args, options))
}

export async function deleteUserManagementAuthkitOauthResourcesId(
  args: InferRequestType<(typeof client.user_management.authkit_oauth_resources)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.authkit_oauth_resources[':id'].$delete(args, options),
  )
}

export async function getUserManagementAuthorize(
  args: InferRequestType<typeof client.user_management.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.authorize.$get(args, options))
}

export async function postUserManagementAuthorizeDevice(
  args: InferRequestType<typeof client.user_management.authorize.device.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.authorize.device.$post(args, options))
}

export async function getUserManagementCorsOrigins(
  args: InferRequestType<typeof client.user_management.cors_origins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.cors_origins.$get(args, options))
}

export async function postUserManagementCorsOrigins(
  args: InferRequestType<typeof client.user_management.cors_origins.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.cors_origins.$post(args, options))
}

export async function getUserManagementEmailVerificationId(
  args: InferRequestType<(typeof client.user_management.email_verification)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.email_verification[':id'].$get(args, options))
}

export async function getUserManagementInvitations(
  args: InferRequestType<typeof client.user_management.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.invitations.$get(args, options))
}

export async function postUserManagementInvitations(
  args: InferRequestType<typeof client.user_management.invitations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.invitations.$post(args, options))
}

export async function getUserManagementInvitationsByTokenToken(
  args: InferRequestType<(typeof client.user_management.invitations.by_token)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.invitations.by_token[':token'].$get(args, options),
  )
}

export async function getUserManagementInvitationsId(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.invitations[':id'].$get(args, options))
}

export async function postUserManagementInvitationsIdAccept(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.invitations[':id'].accept.$post(args, options))
}

export async function postUserManagementInvitationsIdResend(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['resend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.invitations[':id'].resend.$post(args, options))
}

export async function postUserManagementInvitationsIdRevoke(
  args: InferRequestType<(typeof client.user_management.invitations)[':id']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.invitations[':id'].revoke.$post(args, options))
}

export async function getUserManagementJwtTemplate(options?: ClientRequestOptions) {
  return await parseResponse(client.user_management.jwt_template.$get(undefined, options))
}

export async function putUserManagementJwtTemplate(
  args: InferRequestType<typeof client.user_management.jwt_template.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.jwt_template.$put(args, options))
}

export async function postUserManagementMagicAuth(
  args: InferRequestType<typeof client.user_management.magic_auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.magic_auth.$post(args, options))
}

export async function getUserManagementMagicAuthId(
  args: InferRequestType<(typeof client.user_management.magic_auth)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.magic_auth[':id'].$get(args, options))
}

export async function getUserManagementOrganizationMemberships(
  args: InferRequestType<typeof client.user_management.organization_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.organization_memberships.$get(args, options))
}

export async function postUserManagementOrganizationMemberships(
  args: InferRequestType<typeof client.user_management.organization_memberships.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.organization_memberships.$post(args, options))
}

export async function getUserManagementOrganizationMembershipsId(
  args: InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.organization_memberships[':id'].$get(args, options),
  )
}

export async function putUserManagementOrganizationMembershipsId(
  args: InferRequestType<(typeof client.user_management.organization_memberships)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.organization_memberships[':id'].$put(args, options),
  )
}

export async function deleteUserManagementOrganizationMembershipsId(
  args: InferRequestType<
    (typeof client.user_management.organization_memberships)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.organization_memberships[':id'].$delete(args, options),
  )
}

export async function putUserManagementOrganizationMembershipsIdDeactivate(
  args: InferRequestType<
    (typeof client.user_management.organization_memberships)[':id']['deactivate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.organization_memberships[':id'].deactivate.$put(args, options),
  )
}

export async function putUserManagementOrganizationMembershipsIdReactivate(
  args: InferRequestType<
    (typeof client.user_management.organization_memberships)[':id']['reactivate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.organization_memberships[':id'].reactivate.$put(args, options),
  )
}

export async function getUserManagementOrganizationMembershipsOmIdGroups(
  args: InferRequestType<
    (typeof client.user_management.organization_memberships)[':omId']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.organization_memberships[':omId'].groups.$get(args, options),
  )
}

export async function postUserManagementPasswordReset(
  args: InferRequestType<typeof client.user_management.password_reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.password_reset.$post(args, options))
}

export async function postUserManagementPasswordResetConfirm(
  args: InferRequestType<typeof client.user_management.password_reset.confirm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.password_reset.confirm.$post(args, options))
}

export async function getUserManagementPasswordResetId(
  args: InferRequestType<(typeof client.user_management.password_reset)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.password_reset[':id'].$get(args, options))
}

export async function postUserManagementRadarChallenges(
  args: InferRequestType<typeof client.user_management.radar_challenges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.radar_challenges.$post(args, options))
}

export async function getUserManagementRadarChallengesId(
  args: InferRequestType<(typeof client.user_management.radar_challenges)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.radar_challenges[':id'].$get(args, options))
}

export async function getUserManagementRedirectUris(
  args: InferRequestType<typeof client.user_management.redirect_uris.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.redirect_uris.$get(args, options))
}

export async function postUserManagementRedirectUris(
  args: InferRequestType<typeof client.user_management.redirect_uris.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.redirect_uris.$post(args, options))
}

export async function deleteUserManagementRedirectUrisId(
  args: InferRequestType<(typeof client.user_management.redirect_uris)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.redirect_uris[':id'].$delete(args, options))
}

export async function getUserManagementSessionsLogout(
  args: InferRequestType<typeof client.user_management.sessions.logout.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.sessions.logout.$get(args, options))
}

export async function postUserManagementSessionsRevoke(
  args: InferRequestType<typeof client.user_management.sessions.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.sessions.revoke.$post(args, options))
}

export async function getUserManagementUsers(
  args: InferRequestType<typeof client.user_management.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.users.$get(args, options))
}

export async function postUserManagementUsers(
  args: InferRequestType<typeof client.user_management.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.users.$post(args, options))
}

export async function getUserManagementUsersExternalIdExternalId(
  args: InferRequestType<(typeof client.user_management.users.external_id)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users.external_id[':external_id'].$get(args, options),
  )
}

export async function getUserManagementUsersId(
  args: InferRequestType<(typeof client.user_management.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.users[':id'].$get(args, options))
}

export async function putUserManagementUsersId(
  args: InferRequestType<(typeof client.user_management.users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.users[':id'].$put(args, options))
}

export async function deleteUserManagementUsersId(
  args: InferRequestType<(typeof client.user_management.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.users[':id'].$delete(args, options))
}

export async function postUserManagementUsersIdEmailChangeConfirm(
  args: InferRequestType<
    (typeof client.user_management.users)[':id']['email_change']['confirm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':id'].email_change.confirm.$post(args, options),
  )
}

export async function postUserManagementUsersIdEmailChangeSend(
  args: InferRequestType<
    (typeof client.user_management.users)[':id']['email_change']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':id'].email_change.send.$post(args, options),
  )
}

export async function postUserManagementUsersIdEmailVerificationConfirm(
  args: InferRequestType<
    (typeof client.user_management.users)[':id']['email_verification']['confirm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':id'].email_verification.confirm.$post(args, options),
  )
}

export async function postUserManagementUsersIdEmailVerificationSend(
  args: InferRequestType<
    (typeof client.user_management.users)[':id']['email_verification']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':id'].email_verification.send.$post(args, options),
  )
}

export async function getUserManagementUsersIdIdentities(
  args: InferRequestType<(typeof client.user_management.users)[':id']['identities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.users[':id'].identities.$get(args, options))
}

export async function getUserManagementUsersIdSessions(
  args: InferRequestType<(typeof client.user_management.users)[':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.users[':id'].sessions.$get(args, options))
}

export async function getUserManagementUsersUserIdApiKeys(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.users[':userId'].api_keys.$get(args, options))
}

export async function postUserManagementUsersUserIdApiKeys(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['api_keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.users[':userId'].api_keys.$post(args, options))
}

export async function getUserManagementUsersUserIdFeatureFlags(
  args: InferRequestType<(typeof client.user_management.users)[':userId']['feature-flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':userId']['feature-flags'].$get(args, options),
  )
}

export async function getUserManagementUsersUserIdAuthorizedApplications(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['authorized_applications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':user_id'].authorized_applications.$get(args, options),
  )
}

export async function deleteUserManagementUsersUserIdAuthorizedApplicationsApplicationId(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['authorized_applications'][':application_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':user_id'].authorized_applications[':application_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getUserManagementUsersUserIdConnectedAccountsSlug(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':user_id'].connected_accounts[':slug'].$get(args, options),
  )
}

export async function putUserManagementUsersUserIdConnectedAccountsSlug(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':user_id'].connected_accounts[':slug'].$put(args, options),
  )
}

export async function postUserManagementUsersUserIdConnectedAccountsSlug(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':user_id'].connected_accounts[':slug'].$post(args, options),
  )
}

export async function deleteUserManagementUsersUserIdConnectedAccountsSlug(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['connected_accounts'][':slug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':user_id'].connected_accounts[':slug'].$delete(args, options),
  )
}

export async function getUserManagementUsersUserIdDataProviders(
  args: InferRequestType<
    (typeof client.user_management.users)[':user_id']['data_providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':user_id'].data_providers.$get(args, options),
  )
}

export async function getUserManagementUsersUserlandUserIdAuthFactors(
  args: InferRequestType<
    (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':userlandUserId'].auth_factors.$get(args, options),
  )
}

export async function postUserManagementUsersUserlandUserIdAuthFactors(
  args: InferRequestType<
    (typeof client.user_management.users)[':userlandUserId']['auth_factors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.users[':userlandUserId'].auth_factors.$post(args, options),
  )
}

export async function deleteUserManagementWaitlistEntriesId(
  args: InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.waitlist_entries[':id'].$delete(args, options))
}

export async function postUserManagementWaitlistEntriesIdApprove(
  args: InferRequestType<
    (typeof client.user_management.waitlist_entries)[':id']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.waitlist_entries[':id'].approve.$post(args, options),
  )
}

export async function postUserManagementWaitlistEntriesIdDeny(
  args: InferRequestType<(typeof client.user_management.waitlist_entries)[':id']['deny']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user_management.waitlist_entries[':id'].deny.$post(args, options),
  )
}

export async function getUserManagementWaitlists(options?: ClientRequestOptions) {
  return await parseResponse(client.user_management.waitlists.$get(undefined, options))
}

export async function getUserManagementWaitlistsId(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.waitlists[':id'].$get(args, options))
}

export async function getUserManagementWaitlistsIdEntries(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.waitlists[':id'].entries.$get(args, options))
}

export async function postUserManagementWaitlistsIdEntries(
  args: InferRequestType<(typeof client.user_management.waitlists)[':id']['entries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_management.waitlists[':id'].entries.$post(args, options))
}

export async function postVaultV1KeysDataKey(
  args: InferRequestType<(typeof client.vault.v1.keys)['data-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.keys['data-key'].$post(args, options))
}

export async function postVaultV1KeysDecrypt(
  args: InferRequestType<typeof client.vault.v1.keys.decrypt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.keys.decrypt.$post(args, options))
}

export async function postVaultV1KeysRekey(
  args: InferRequestType<typeof client.vault.v1.keys.rekey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.keys.rekey.$post(args, options))
}

export async function getVaultV1Kv(
  args: InferRequestType<typeof client.vault.v1.kv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.kv.$get(args, options))
}

export async function postVaultV1Kv(
  args: InferRequestType<typeof client.vault.v1.kv.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.kv.$post(args, options))
}

export async function getVaultV1KvNameName(
  args: InferRequestType<(typeof client.vault.v1.kv.name)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.kv.name[':name'].$get(args, options))
}

export async function getVaultV1KvId(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.kv[':id'].$get(args, options))
}

export async function putVaultV1KvId(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.kv[':id'].$put(args, options))
}

export async function deleteVaultV1KvId(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.kv[':id'].$delete(args, options))
}

export async function getVaultV1KvIdMetadata(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.kv[':id'].metadata.$get(args, options))
}

export async function getVaultV1KvIdVersions(
  args: InferRequestType<(typeof client.vault.v1.kv)[':id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vault.v1.kv[':id'].versions.$get(args, options))
}

export async function getWebhookEndpoints(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints.$get(args, options))
}

export async function postWebhookEndpoints(
  args: InferRequestType<typeof client.webhook_endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints.$post(args, options))
}

export async function deleteWebhookEndpointsId(
  args: InferRequestType<(typeof client.webhook_endpoints)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints[':id'].$delete(args, options))
}

export async function patchWebhookEndpointsId(
  args: InferRequestType<(typeof client.webhook_endpoints)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints[':id'].$patch(args, options))
}

export async function postWidgetsToken(
  args: InferRequestType<typeof client.widgets.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.widgets.token.$post(args, options))
}
