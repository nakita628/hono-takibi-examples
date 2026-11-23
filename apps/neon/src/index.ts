import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysKeyIdRoute,
  deleteOrganizationsOrgIdApiKeysKeyIdRoute,
  deleteOrganizationsOrgIdMembersMemberIdRoute,
  deleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute,
  deleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
  deleteProjectsProjectIdBranchesBranchIdRolesRoleNameRoute,
  deleteProjectsProjectIdBranchesBranchIdRoute,
  deleteProjectsProjectIdEndpointsEndpointIdRoute,
  deleteProjectsProjectIdJwksJwksIdRoute,
  deleteProjectsProjectIdPermissionsPermissionIdRoute,
  deleteProjectsProjectIdRoute,
  deleteProjectsProjectIdVpcEndpointsVpcEndpointIdRoute,
  getApiKeysRoute,
  getConsumptionHistoryAccountRoute,
  getConsumptionHistoryProjectsRoute,
  getOrganizationsOrgIdApiKeysRoute,
  getOrganizationsOrgIdInvitationsRoute,
  getOrganizationsOrgIdMembersMemberIdRoute,
  getOrganizationsOrgIdMembersRoute,
  getOrganizationsOrgIdRoute,
  getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsRoute,
  getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute,
  getProjectsProjectIdBranchesBranchIdCompareSchemaRoute,
  getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
  getProjectsProjectIdBranchesBranchIdDatabasesRoute,
  getProjectsProjectIdBranchesBranchIdEndpointsRoute,
  getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordRoute,
  getProjectsProjectIdBranchesBranchIdRolesRoleNameRoute,
  getProjectsProjectIdBranchesBranchIdRolesRoute,
  getProjectsProjectIdBranchesBranchIdRoute,
  getProjectsProjectIdBranchesBranchIdSchemaRoute,
  getProjectsProjectIdBranchesCountRoute,
  getProjectsProjectIdBranchesRoute,
  getProjectsProjectIdConnectionUriRoute,
  getProjectsProjectIdEndpointsEndpointIdRoute,
  getProjectsProjectIdEndpointsRoute,
  getProjectsProjectIdJwksRoute,
  getProjectsProjectIdOperationsOperationIdRoute,
  getProjectsProjectIdOperationsRoute,
  getProjectsProjectIdPermissionsRoute,
  getProjectsProjectIdRoute,
  getProjectsProjectIdVpcEndpointsRoute,
  getProjectsRoute,
  getProjectsSharedRoute,
  getRegionsRoute,
  getUsersMeOrganizationsRoute,
  getUsersMeRoute,
  patchOrganizationsOrgIdMembersMemberIdRoute,
  patchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
  patchProjectsProjectIdBranchesBranchIdRoute,
  patchProjectsProjectIdEndpointsEndpointIdRoute,
  patchProjectsProjectIdRoute,
  postApiKeysRoute,
  postOrganizationsOrgIdApiKeysRoute,
  postOrganizationsOrgIdInvitationsRoute,
  postOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute,
  postProjectsProjectIdBranchesBranchIdDatabasesRoute,
  postProjectsProjectIdBranchesBranchIdRestoreRoute,
  postProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordRoute,
  postProjectsProjectIdBranchesBranchIdRolesRoute,
  postProjectsProjectIdBranchesBranchIdSetAsDefaultRoute,
  postProjectsProjectIdBranchesRoute,
  postProjectsProjectIdEndpointsEndpointIdRestartRoute,
  postProjectsProjectIdEndpointsEndpointIdStartRoute,
  postProjectsProjectIdEndpointsEndpointIdSuspendRoute,
  postProjectsProjectIdEndpointsRoute,
  postProjectsProjectIdJwksRoute,
  postProjectsProjectIdPermissionsRoute,
  postProjectsProjectIdVpcEndpointsVpcEndpointIdRoute,
  postProjectsRoute,
  postUsersMeProjectsTransferRoute,
} from './routes'
import {
  deleteApiKeysKeyIdRouteHandler,
  deleteOrganizationsOrgIdApiKeysKeyIdRouteHandler,
  deleteOrganizationsOrgIdMembersMemberIdRouteHandler,
  deleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRouteHandler,
  deleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRouteHandler,
  deleteProjectsProjectIdBranchesBranchIdRolesRoleNameRouteHandler,
  deleteProjectsProjectIdBranchesBranchIdRouteHandler,
  deleteProjectsProjectIdEndpointsEndpointIdRouteHandler,
  deleteProjectsProjectIdJwksJwksIdRouteHandler,
  deleteProjectsProjectIdPermissionsPermissionIdRouteHandler,
  deleteProjectsProjectIdRouteHandler,
  deleteProjectsProjectIdVpcEndpointsVpcEndpointIdRouteHandler,
  getApiKeysRouteHandler,
  getConsumptionHistoryAccountRouteHandler,
  getConsumptionHistoryProjectsRouteHandler,
  getOrganizationsOrgIdApiKeysRouteHandler,
  getOrganizationsOrgIdInvitationsRouteHandler,
  getOrganizationsOrgIdMembersMemberIdRouteHandler,
  getOrganizationsOrgIdMembersRouteHandler,
  getOrganizationsOrgIdRouteHandler,
  getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsRouteHandler,
  getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRouteHandler,
  getProjectsProjectIdBranchesBranchIdCompareSchemaRouteHandler,
  getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRouteHandler,
  getProjectsProjectIdBranchesBranchIdDatabasesRouteHandler,
  getProjectsProjectIdBranchesBranchIdEndpointsRouteHandler,
  getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordRouteHandler,
  getProjectsProjectIdBranchesBranchIdRolesRoleNameRouteHandler,
  getProjectsProjectIdBranchesBranchIdRolesRouteHandler,
  getProjectsProjectIdBranchesBranchIdRouteHandler,
  getProjectsProjectIdBranchesBranchIdSchemaRouteHandler,
  getProjectsProjectIdBranchesCountRouteHandler,
  getProjectsProjectIdBranchesRouteHandler,
  getProjectsProjectIdConnectionUriRouteHandler,
  getProjectsProjectIdEndpointsEndpointIdRouteHandler,
  getProjectsProjectIdEndpointsRouteHandler,
  getProjectsProjectIdJwksRouteHandler,
  getProjectsProjectIdOperationsOperationIdRouteHandler,
  getProjectsProjectIdOperationsRouteHandler,
  getProjectsProjectIdPermissionsRouteHandler,
  getProjectsProjectIdRouteHandler,
  getProjectsProjectIdVpcEndpointsRouteHandler,
  getProjectsRouteHandler,
  getProjectsSharedRouteHandler,
  getRegionsRouteHandler,
  getUsersMeOrganizationsRouteHandler,
  getUsersMeRouteHandler,
  patchOrganizationsOrgIdMembersMemberIdRouteHandler,
  patchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRouteHandler,
  patchProjectsProjectIdBranchesBranchIdRouteHandler,
  patchProjectsProjectIdEndpointsEndpointIdRouteHandler,
  patchProjectsProjectIdRouteHandler,
  postApiKeysRouteHandler,
  postOrganizationsOrgIdApiKeysRouteHandler,
  postOrganizationsOrgIdInvitationsRouteHandler,
  postOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRouteHandler,
  postProjectsProjectIdBranchesBranchIdDatabasesRouteHandler,
  postProjectsProjectIdBranchesBranchIdRestoreRouteHandler,
  postProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordRouteHandler,
  postProjectsProjectIdBranchesBranchIdRolesRouteHandler,
  postProjectsProjectIdBranchesBranchIdSetAsDefaultRouteHandler,
  postProjectsProjectIdBranchesRouteHandler,
  postProjectsProjectIdEndpointsEndpointIdRestartRouteHandler,
  postProjectsProjectIdEndpointsEndpointIdStartRouteHandler,
  postProjectsProjectIdEndpointsEndpointIdSuspendRouteHandler,
  postProjectsProjectIdEndpointsRouteHandler,
  postProjectsProjectIdJwksRouteHandler,
  postProjectsProjectIdPermissionsRouteHandler,
  postProjectsProjectIdVpcEndpointsVpcEndpointIdRouteHandler,
  postProjectsRouteHandler,
  postUsersMeProjectsTransferRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiKeysRoute, getApiKeysRouteHandler)
  .openapi(postApiKeysRoute, postApiKeysRouteHandler)
  .openapi(deleteApiKeysKeyIdRoute, deleteApiKeysKeyIdRouteHandler)
  .openapi(
    getProjectsProjectIdOperationsOperationIdRoute,
    getProjectsProjectIdOperationsOperationIdRouteHandler,
  )
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(getProjectsSharedRoute, getProjectsSharedRouteHandler)
  .openapi(getProjectsProjectIdRoute, getProjectsProjectIdRouteHandler)
  .openapi(patchProjectsProjectIdRoute, patchProjectsProjectIdRouteHandler)
  .openapi(deleteProjectsProjectIdRoute, deleteProjectsProjectIdRouteHandler)
  .openapi(getProjectsProjectIdOperationsRoute, getProjectsProjectIdOperationsRouteHandler)
  .openapi(getProjectsProjectIdPermissionsRoute, getProjectsProjectIdPermissionsRouteHandler)
  .openapi(postProjectsProjectIdPermissionsRoute, postProjectsProjectIdPermissionsRouteHandler)
  .openapi(
    deleteProjectsProjectIdPermissionsPermissionIdRoute,
    deleteProjectsProjectIdPermissionsPermissionIdRouteHandler,
  )
  .openapi(getProjectsProjectIdJwksRoute, getProjectsProjectIdJwksRouteHandler)
  .openapi(postProjectsProjectIdJwksRoute, postProjectsProjectIdJwksRouteHandler)
  .openapi(deleteProjectsProjectIdJwksJwksIdRoute, deleteProjectsProjectIdJwksJwksIdRouteHandler)
  .openapi(getProjectsProjectIdConnectionUriRoute, getProjectsProjectIdConnectionUriRouteHandler)
  .openapi(postProjectsProjectIdBranchesRoute, postProjectsProjectIdBranchesRouteHandler)
  .openapi(getProjectsProjectIdBranchesRoute, getProjectsProjectIdBranchesRouteHandler)
  .openapi(getProjectsProjectIdBranchesCountRoute, getProjectsProjectIdBranchesCountRouteHandler)
  .openapi(
    getProjectsProjectIdBranchesBranchIdRoute,
    getProjectsProjectIdBranchesBranchIdRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdBranchesBranchIdRoute,
    deleteProjectsProjectIdBranchesBranchIdRouteHandler,
  )
  .openapi(
    patchProjectsProjectIdBranchesBranchIdRoute,
    patchProjectsProjectIdBranchesBranchIdRouteHandler,
  )
  .openapi(
    postProjectsProjectIdBranchesBranchIdRestoreRoute,
    postProjectsProjectIdBranchesBranchIdRestoreRouteHandler,
  )
  .openapi(
    getProjectsProjectIdBranchesBranchIdSchemaRoute,
    getProjectsProjectIdBranchesBranchIdSchemaRouteHandler,
  )
  .openapi(
    getProjectsProjectIdBranchesBranchIdCompareSchemaRoute,
    getProjectsProjectIdBranchesBranchIdCompareSchemaRouteHandler,
  )
  .openapi(
    postProjectsProjectIdBranchesBranchIdSetAsDefaultRoute,
    postProjectsProjectIdBranchesBranchIdSetAsDefaultRouteHandler,
  )
  .openapi(
    getProjectsProjectIdBranchesBranchIdEndpointsRoute,
    getProjectsProjectIdBranchesBranchIdEndpointsRouteHandler,
  )
  .openapi(
    getProjectsProjectIdBranchesBranchIdDatabasesRoute,
    getProjectsProjectIdBranchesBranchIdDatabasesRouteHandler,
  )
  .openapi(
    postProjectsProjectIdBranchesBranchIdDatabasesRoute,
    postProjectsProjectIdBranchesBranchIdDatabasesRouteHandler,
  )
  .openapi(
    getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
    getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRouteHandler,
  )
  .openapi(
    patchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
    patchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
    deleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRouteHandler,
  )
  .openapi(
    getProjectsProjectIdBranchesBranchIdRolesRoute,
    getProjectsProjectIdBranchesBranchIdRolesRouteHandler,
  )
  .openapi(
    postProjectsProjectIdBranchesBranchIdRolesRoute,
    postProjectsProjectIdBranchesBranchIdRolesRouteHandler,
  )
  .openapi(
    getProjectsProjectIdBranchesBranchIdRolesRoleNameRoute,
    getProjectsProjectIdBranchesBranchIdRolesRoleNameRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdBranchesBranchIdRolesRoleNameRoute,
    deleteProjectsProjectIdBranchesBranchIdRolesRoleNameRouteHandler,
  )
  .openapi(
    getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordRoute,
    getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordRouteHandler,
  )
  .openapi(
    postProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordRoute,
    postProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordRouteHandler,
  )
  .openapi(getProjectsProjectIdVpcEndpointsRoute, getProjectsProjectIdVpcEndpointsRouteHandler)
  .openapi(
    postProjectsProjectIdVpcEndpointsVpcEndpointIdRoute,
    postProjectsProjectIdVpcEndpointsVpcEndpointIdRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdVpcEndpointsVpcEndpointIdRoute,
    deleteProjectsProjectIdVpcEndpointsVpcEndpointIdRouteHandler,
  )
  .openapi(postProjectsProjectIdEndpointsRoute, postProjectsProjectIdEndpointsRouteHandler)
  .openapi(getProjectsProjectIdEndpointsRoute, getProjectsProjectIdEndpointsRouteHandler)
  .openapi(
    getProjectsProjectIdEndpointsEndpointIdRoute,
    getProjectsProjectIdEndpointsEndpointIdRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdEndpointsEndpointIdRoute,
    deleteProjectsProjectIdEndpointsEndpointIdRouteHandler,
  )
  .openapi(
    patchProjectsProjectIdEndpointsEndpointIdRoute,
    patchProjectsProjectIdEndpointsEndpointIdRouteHandler,
  )
  .openapi(
    postProjectsProjectIdEndpointsEndpointIdStartRoute,
    postProjectsProjectIdEndpointsEndpointIdStartRouteHandler,
  )
  .openapi(
    postProjectsProjectIdEndpointsEndpointIdSuspendRoute,
    postProjectsProjectIdEndpointsEndpointIdSuspendRouteHandler,
  )
  .openapi(
    postProjectsProjectIdEndpointsEndpointIdRestartRoute,
    postProjectsProjectIdEndpointsEndpointIdRestartRouteHandler,
  )
  .openapi(getConsumptionHistoryAccountRoute, getConsumptionHistoryAccountRouteHandler)
  .openapi(getConsumptionHistoryProjectsRoute, getConsumptionHistoryProjectsRouteHandler)
  .openapi(getOrganizationsOrgIdRoute, getOrganizationsOrgIdRouteHandler)
  .openapi(getOrganizationsOrgIdApiKeysRoute, getOrganizationsOrgIdApiKeysRouteHandler)
  .openapi(postOrganizationsOrgIdApiKeysRoute, postOrganizationsOrgIdApiKeysRouteHandler)
  .openapi(
    deleteOrganizationsOrgIdApiKeysKeyIdRoute,
    deleteOrganizationsOrgIdApiKeysKeyIdRouteHandler,
  )
  .openapi(getOrganizationsOrgIdMembersRoute, getOrganizationsOrgIdMembersRouteHandler)
  .openapi(
    getOrganizationsOrgIdMembersMemberIdRoute,
    getOrganizationsOrgIdMembersMemberIdRouteHandler,
  )
  .openapi(
    patchOrganizationsOrgIdMembersMemberIdRoute,
    patchOrganizationsOrgIdMembersMemberIdRouteHandler,
  )
  .openapi(
    deleteOrganizationsOrgIdMembersMemberIdRoute,
    deleteOrganizationsOrgIdMembersMemberIdRouteHandler,
  )
  .openapi(getOrganizationsOrgIdInvitationsRoute, getOrganizationsOrgIdInvitationsRouteHandler)
  .openapi(postOrganizationsOrgIdInvitationsRoute, postOrganizationsOrgIdInvitationsRouteHandler)
  .openapi(
    getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsRoute,
    getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsRouteHandler,
  )
  .openapi(
    getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute,
    getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRouteHandler,
  )
  .openapi(
    postOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute,
    postOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRouteHandler,
  )
  .openapi(
    deleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRoute,
    deleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdRouteHandler,
  )
  .openapi(getRegionsRoute, getRegionsRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(getUsersMeOrganizationsRoute, getUsersMeOrganizationsRouteHandler)
  .openapi(postUsersMeProjectsTransferRoute, postUsersMeProjectsTransferRouteHandler)

export default app
