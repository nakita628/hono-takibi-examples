import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  deleteRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  deleteRoleManagementDirectoryDeletedItemsRoute,
  deleteRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
  deleteRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
  deleteRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
  deleteRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
  deleteRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
  deleteRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
  deleteRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoute,
  deleteRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  deleteRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  deleteRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
  deleteRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
  deleteRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
  deleteRoleManagementDirectoryRoute,
  deleteRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  deleteRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  deleteRoleManagementEntitlementManagementDeletedItemsRoute,
  deleteRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
  deleteRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
  deleteRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
  deleteRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
  deleteRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
  deleteRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
  deleteRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoute,
  deleteRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  deleteRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  deleteRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
  deleteRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
  deleteRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
  deleteRoleManagementEntitlementManagementRoute,
  getRoleManagementDirectoryDeletedItemsRoleDefinitionsCountRoute,
  getRoleManagementDirectoryDeletedItemsRoleDefinitionsRoute,
  getRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
  getRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  getRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  getRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  getRoleManagementDirectoryDeletedItemsRoute,
  getRoleManagementDirectoryResourceNamespacesCountRoute,
  getRoleManagementDirectoryResourceNamespacesRoute,
  getRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsCountRoute,
  getRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsRoute,
  getRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
  getRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesCountRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesFilterByCurrentUserOnOnRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdActivatedUsingRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdAppScopeRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdDirectoryScopeRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdPrincipalRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoleDefinitionRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsCountRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsFilterByCurrentUserOnOnRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdActivatedUsingRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdAppScopeRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdDirectoryScopeRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdPrincipalRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoleDefinitionRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdTargetScheduleRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesCountRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesFilterByCurrentUserOnOnRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdActivatedUsingRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdAppScopeRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdDirectoryScopeRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdPrincipalRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoleDefinitionRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
  getRoleManagementDirectoryRoleAssignmentsCountRoute,
  getRoleManagementDirectoryRoleAssignmentsRoute,
  getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
  getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdDirectoryScopeRoute,
  getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdPrincipalRoute,
  getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoleDefinitionRoute,
  getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoute,
  getRoleManagementDirectoryRoleDefinitionsCountRoute,
  getRoleManagementDirectoryRoleDefinitionsRoute,
  getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
  getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesCountRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesFilterByCurrentUserOnOnRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdAppScopeRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdDirectoryScopeRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdPrincipalRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoleDefinitionRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsCountRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsFilterByCurrentUserOnOnRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdAppScopeRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdDirectoryScopeRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdPrincipalRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoleDefinitionRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdTargetScheduleRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesCountRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesFilterByCurrentUserOnOnRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdAppScopeRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdDirectoryScopeRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdPrincipalRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoleDefinitionRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
  getRoleManagementDirectoryRoute,
  getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsCountRoute,
  getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsRoute,
  getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
  getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  getRoleManagementEntitlementManagementDeletedItemsRoute,
  getRoleManagementEntitlementManagementResourceNamespacesCountRoute,
  getRoleManagementEntitlementManagementResourceNamespacesRoute,
  getRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsCountRoute,
  getRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsRoute,
  getRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
  getRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesCountRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesFilterByCurrentUserOnOnRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdActivatedUsingRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdAppScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdDirectoryScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdPrincipalRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoleDefinitionRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsCountRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsFilterByCurrentUserOnOnRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdActivatedUsingRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdAppScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdDirectoryScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdPrincipalRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoleDefinitionRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdTargetScheduleRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesCountRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesFilterByCurrentUserOnOnRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdActivatedUsingRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdAppScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdDirectoryScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdPrincipalRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoleDefinitionRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsCountRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdDirectoryScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdPrincipalRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoleDefinitionRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoute,
  getRoleManagementEntitlementManagementRoleDefinitionsCountRoute,
  getRoleManagementEntitlementManagementRoleDefinitionsRoute,
  getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
  getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesCountRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesFilterByCurrentUserOnOnRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdAppScopeRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdDirectoryScopeRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdPrincipalRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoleDefinitionRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsCountRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsFilterByCurrentUserOnOnRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdAppScopeRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdDirectoryScopeRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdPrincipalRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoleDefinitionRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdTargetScheduleRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesCountRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesFilterByCurrentUserOnOnRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdAppScopeRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdDirectoryScopeRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdPrincipalRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoleDefinitionRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
  getRoleManagementEntitlementManagementRoute,
  patchRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  patchRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  patchRoleManagementDirectoryDeletedItemsRoute,
  patchRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
  patchRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
  patchRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
  patchRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
  patchRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
  patchRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
  patchRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoute,
  patchRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  patchRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  patchRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
  patchRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
  patchRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
  patchRoleManagementDirectoryRoute,
  patchRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  patchRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  patchRoleManagementEntitlementManagementDeletedItemsRoute,
  patchRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
  patchRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
  patchRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
  patchRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
  patchRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
  patchRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
  patchRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoute,
  patchRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  patchRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  patchRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
  patchRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
  patchRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
  patchRoleManagementEntitlementManagementRoute,
  postRoleManagementDirectoryDeletedItemsRoleDefinitionsRoute,
  postRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  postRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1RestoreRoute,
  postRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRestoreRoute,
  postRoleManagementDirectoryResourceNamespacesRoute,
  postRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsRoute,
  postRoleManagementDirectoryRoleAssignmentScheduleInstancesRoute,
  postRoleManagementDirectoryRoleAssignmentScheduleRequestsRoute,
  postRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdCancelRoute,
  postRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdUpdateRequestRoute,
  postRoleManagementDirectoryRoleAssignmentSchedulesRoute,
  postRoleManagementDirectoryRoleAssignmentsRoute,
  postRoleManagementDirectoryRoleDefinitionsRoute,
  postRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  postRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1RestoreRoute,
  postRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRestoreRoute,
  postRoleManagementDirectoryRoleEligibilityScheduleInstancesRoute,
  postRoleManagementDirectoryRoleEligibilityScheduleRequestsRoute,
  postRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdCancelRoute,
  postRoleManagementDirectoryRoleEligibilitySchedulesRoute,
  postRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsRoute,
  postRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  postRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1RestoreRoute,
  postRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRestoreRoute,
  postRoleManagementEntitlementManagementResourceNamespacesRoute,
  postRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsRoute,
  postRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesRoute,
  postRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsRoute,
  postRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdCancelRoute,
  postRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdUpdateRequestRoute,
  postRoleManagementEntitlementManagementRoleAssignmentSchedulesRoute,
  postRoleManagementEntitlementManagementRoleAssignmentsRoute,
  postRoleManagementEntitlementManagementRoleDefinitionsRoute,
  postRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  postRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1RestoreRoute,
  postRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdRestoreRoute,
  postRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesRoute,
  postRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsRoute,
  postRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdCancelRoute,
  postRoleManagementEntitlementManagementRoleEligibilitySchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleManagementRbacApplicationHandler = app
  .openapi(getRoleManagementDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoleManagementDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementDirectoryDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoleManagementDirectoryDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryDeletedItemsRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryDeletedItemsRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1RestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementDirectoryDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryDeletedItemsRoleDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryResourceNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryResourceNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryResourceNamespacesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdPrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleAssignmentScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleAssignmentScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleAssignmentScheduleInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleInstancesFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleAssignmentScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleAssignmentScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdUpdateRequestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdTargetScheduleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleAssignmentScheduleRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleAssignmentScheduleRequestsFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleAssignmentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleAssignmentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleAssignmentSchedulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleAssignmentSchedulesFilterByCurrentUserOnOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1RestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleEligibilityScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleEligibilityScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleEligibilityScheduleInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleInstancesFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleEligibilityScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleEligibilityScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdTargetScheduleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleEligibilityScheduleRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleEligibilityScheduleRequestsFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleEligibilitySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleEligibilitySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleEligibilitySchedulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleEligibilitySchedulesFilterByCurrentUserOnOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementEntitlementManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoleManagementEntitlementManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementEntitlementManagementDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoleManagementEntitlementManagementDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1RestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsUnifiedRoleDefinitionIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementDeletedItemsRoleDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementResourceNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementResourceNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsUnifiedRbacResourceActionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementResourceNamespacesUnifiedRbacResourceNamespaceIdResourceActionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementResourceNamespacesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdUpdateRequestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdTargetScheduleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleAssignmentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentSchedulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleAssignmentSchedulesFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1RestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdTargetScheduleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleEligibilitySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleEligibilitySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdDirectoryScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleEligibilitySchedulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleEligibilitySchedulesFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
