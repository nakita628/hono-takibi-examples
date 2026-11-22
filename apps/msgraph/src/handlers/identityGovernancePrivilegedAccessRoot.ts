import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityGovernancePrivilegedAccessCustomExtensionsRoleManagementCustomCalloutExtensionIdRoute,
  deleteIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdRoute,
  deleteIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
  deleteIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdRoute,
  deleteIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdRoute,
  deleteIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdRoute,
  deleteIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdRoute,
  deleteIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdRoute,
  deleteIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdRoute,
  deleteIdentityGovernancePrivilegedAccessGroupResourcesGroupResourceIdRoute,
  deleteIdentityGovernancePrivilegedAccessGroupRoute,
  deleteIdentityGovernancePrivilegedAccessRoute,
  getIdentityGovernancePrivilegedAccessCustomExtensionsCountRoute,
  getIdentityGovernancePrivilegedAccessCustomExtensionsRoleManagementCustomCalloutExtensionIdRoute,
  getIdentityGovernancePrivilegedAccessCustomExtensionsRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesCountRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsCountRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsFilterByCurrentUserOnOnRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesCountRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesFilterByCurrentUserOnOnRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdActivatedUsingRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdGroupRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdGroupServiceProvisioningErrorsCountRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdGroupServiceProvisioningErrorsRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdPrincipalRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsCountRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsFilterByCurrentUserOnOnRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdActivatedUsingRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdGroupRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdGroupServiceProvisioningErrorsCountRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdGroupServiceProvisioningErrorsRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdPrincipalRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdTargetScheduleRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesCountRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesFilterByCurrentUserOnOnRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdActivatedUsingRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdGroupRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdGroupServiceProvisioningErrorsCountRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdGroupServiceProvisioningErrorsRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdPrincipalRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdRoute,
  getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesCountRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesFilterByCurrentUserOnOnRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdGroupRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdGroupServiceProvisioningErrorsCountRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdGroupServiceProvisioningErrorsRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdPrincipalRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsCountRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsFilterByCurrentUserOnOnRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdGroupRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdGroupServiceProvisioningErrorsCountRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdGroupServiceProvisioningErrorsRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdPrincipalRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdTargetScheduleRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesCountRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesFilterByCurrentUserOnOnRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdGroupRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdGroupServiceProvisioningErrorsCountRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdGroupServiceProvisioningErrorsRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdPrincipalRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdRoute,
  getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesRoute,
  getIdentityGovernancePrivilegedAccessGroupResourcesCountRoute,
  getIdentityGovernancePrivilegedAccessGroupResourcesGroupResourceIdRoute,
  getIdentityGovernancePrivilegedAccessGroupResourcesRoute,
  getIdentityGovernancePrivilegedAccessGroupRoute,
  getIdentityGovernancePrivilegedAccessRoute,
  patchIdentityGovernancePrivilegedAccessCustomExtensionsRoleManagementCustomCalloutExtensionIdRoute,
  patchIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdRoute,
  patchIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
  patchIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdRoute,
  patchIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdRoute,
  patchIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdRoute,
  patchIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdRoute,
  patchIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdRoute,
  patchIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdRoute,
  patchIdentityGovernancePrivilegedAccessGroupResourcesGroupResourceIdRoute,
  patchIdentityGovernancePrivilegedAccessGroupRoute,
  patchIdentityGovernancePrivilegedAccessRoute,
  postIdentityGovernancePrivilegedAccessCustomExtensionsRoute,
  postIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesRoute,
  postIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsRoute,
  postIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesRoute,
  postIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdCancelRoute,
  postIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdUpdateRequestRoute,
  postIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsRoute,
  postIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesRoute,
  postIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesRoute,
  postIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdCancelRoute,
  postIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsRoute,
  postIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesRoute,
  postIdentityGovernancePrivilegedAccessGroupResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityGovernancePrivilegedAccessRootHandler = app
  .openapi(getIdentityGovernancePrivilegedAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernancePrivilegedAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityGovernancePrivilegedAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernancePrivilegedAccessCustomExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernancePrivilegedAccessCustomExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessCustomExtensionsRoleManagementCustomCalloutExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernancePrivilegedAccessCustomExtensionsRoleManagementCustomCalloutExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernancePrivilegedAccessCustomExtensionsRoleManagementCustomCalloutExtensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessCustomExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernancePrivilegedAccessGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernancePrivilegedAccessGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityGovernancePrivilegedAccessGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesApprovalStageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsApprovalIdStagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentApprovalsFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdGroupServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdGroupServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesPrivilegedAccessGroupAssignmentScheduleInstanceIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleInstancesFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdGroupServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdGroupServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdUpdateRequestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsPrivilegedAccessGroupAssignmentScheduleRequestIdTargetScheduleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentScheduleRequestsFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdActivatedUsingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdGroupServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdGroupServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesPrivilegedAccessGroupAssignmentScheduleIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupAssignmentSchedulesFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdGroupServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdGroupServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesPrivilegedAccessGroupEligibilityScheduleInstanceIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleInstancesFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdGroupServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdGroupServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsPrivilegedAccessGroupEligibilityScheduleRequestIdTargetScheduleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilityScheduleRequestsFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdGroupServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdGroupServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesPrivilegedAccessGroupEligibilityScheduleIdPrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityGovernancePrivilegedAccessGroupEligibilitySchedulesFilterByCurrentUserOnOnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernancePrivilegedAccessGroupResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernancePrivilegedAccessGroupResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernancePrivilegedAccessGroupResourcesGroupResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernancePrivilegedAccessGroupResourcesGroupResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityGovernancePrivilegedAccessGroupResourcesGroupResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernancePrivilegedAccessGroupResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
