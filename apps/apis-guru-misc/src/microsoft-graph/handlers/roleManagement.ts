import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesCountRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsCountRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesCountRoute,
  getRoleManagementDirectoryRoleAssignmentsCountRoute,
  getRoleManagementDirectoryRoleDefinitionsCountRoute,
  getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesCountRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsCountRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesCountRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesCountRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsCountRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesCountRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsCountRoute,
  getRoleManagementEntitlementManagementRoleDefinitionsCountRoute,
  getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesCountRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsCountRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleManagementHandler = app
  .openapi(getRoleManagementDirectoryRoleAssignmentScheduleInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleAssignmentScheduleRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleAssignmentSchedulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleEligibilityScheduleInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleEligibilityScheduleRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleEligibilitySchedulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentSchedulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoleDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromCountRoute,
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
  .openapi(getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoleEligibilitySchedulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
