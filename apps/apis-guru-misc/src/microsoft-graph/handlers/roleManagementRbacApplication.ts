import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdActivatedUsingRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdActivatedUsingRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdAppScopeRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdDirectoryScopeRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdPrincipalRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoleDefinitionRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
  getRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdTargetScheduleRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdActivatedUsingRoute,
  getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
  getRoleManagementDirectoryRoleAssignmentsRoute,
  getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
  getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdDirectoryScopeRoute,
  getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdPrincipalRoute,
  getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoleDefinitionRoute,
  getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoute,
  getRoleManagementDirectoryRoleDefinitionsRoute,
  getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdAppScopeRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdDirectoryScopeRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdPrincipalRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoleDefinitionRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
  getRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdTargetScheduleRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesRoute,
  getRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
  getRoleManagementDirectoryRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdActivatedUsingRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdActivatedUsingRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdAppScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdDirectoryScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdPrincipalRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoleDefinitionRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
  getRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdTargetScheduleRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdActivatedUsingRoute,
  getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdDirectoryScopeRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdPrincipalRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoleDefinitionRoute,
  getRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoute,
  getRoleManagementEntitlementManagementRoleDefinitionsRoute,
  getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
  getRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdAppScopeRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdDirectoryScopeRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdPrincipalRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoleDefinitionRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
  getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdTargetScheduleRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesRoute,
  getRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
  getRoleManagementEntitlementManagementRoute,
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
  postRoleManagementDirectoryRoleAssignmentScheduleInstancesRoute,
  postRoleManagementDirectoryRoleAssignmentScheduleRequestsRoute,
  postRoleManagementDirectoryRoleAssignmentSchedulesRoute,
  postRoleManagementDirectoryRoleAssignmentsRoute,
  postRoleManagementDirectoryRoleDefinitionsRoute,
  postRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  postRoleManagementDirectoryRoleEligibilityScheduleInstancesRoute,
  postRoleManagementDirectoryRoleEligibilityScheduleRequestsRoute,
  postRoleManagementDirectoryRoleEligibilitySchedulesRoute,
  postRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesRoute,
  postRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsRoute,
  postRoleManagementEntitlementManagementRoleAssignmentSchedulesRoute,
  postRoleManagementEntitlementManagementRoleAssignmentsRoute,
  postRoleManagementEntitlementManagementRoleDefinitionsRoute,
  postRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromRoute,
  postRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesRoute,
  postRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsRoute,
  postRoleManagementEntitlementManagementRoleEligibilitySchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleManagementRbacApplicationHandler = app
  .openapi(deleteRoleManagementDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleAssignmentScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleAssignmentScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    getRoleManagementDirectoryRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdActivatedUsingRoute,
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
    deleteRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getRoleManagementDirectoryRoleAssignmentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleAssignmentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    getRoleManagementDirectoryRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementDirectoryRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getRoleManagementDirectoryRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdRoute, (c) => {
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
    deleteRoleManagementDirectoryRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
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
  .openapi(getRoleManagementDirectoryRoleEligibilityScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleEligibilityScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementDirectoryRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getRoleManagementDirectoryRoleEligibilityScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleEligibilityScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getRoleManagementDirectoryRoleEligibilitySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementDirectoryRoleEligibilitySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementDirectoryRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(deleteRoleManagementEntitlementManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementEntitlementManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    getRoleManagementEntitlementManagementRoleAssignmentScheduleInstancesUnifiedRoleAssignmentScheduleInstanceIdActivatedUsingRoute,
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
    deleteRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleAssignmentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    getRoleManagementEntitlementManagementRoleAssignmentSchedulesUnifiedRoleAssignmentScheduleIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRoleManagementEntitlementManagementRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    deleteRoleManagementEntitlementManagementRoleAssignmentsUnifiedRoleAssignmentIdAppScopeRoute,
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
  .openapi(getRoleManagementEntitlementManagementRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    deleteRoleManagementEntitlementManagementRoleDefinitionsUnifiedRoleDefinitionIdInheritsPermissionsFromUnifiedRoleDefinitionId1Route,
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
  .openapi(getRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementEntitlementManagementRoleEligibilityScheduleInstancesUnifiedRoleEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getRoleManagementEntitlementManagementRoleEligibilitySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleManagementEntitlementManagementRoleEligibilitySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRoleManagementEntitlementManagementRoleEligibilitySchedulesUnifiedRoleEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
