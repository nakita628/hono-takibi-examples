import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetHandler,
  XAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetHandler,
  XAmzTargetSWBExternalServiceCreateAccountAssignmentHandler,
  XAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationHandler,
  XAmzTargetSWBExternalServiceCreatePermissionSetHandler,
  XAmzTargetSWBExternalServiceDeleteAccountAssignmentHandler,
  XAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetHandler,
  XAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationHandler,
  XAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetHandler,
  XAmzTargetSWBExternalServiceDeletePermissionSetHandler,
  XAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusHandler,
  XAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusHandler,
  XAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationHandler,
  XAmzTargetSWBExternalServiceDescribePermissionSetHandler,
  XAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusHandler,
  XAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetHandler,
  XAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetHandler,
  XAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetHandler,
  XAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetHandler,
  XAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusHandler,
  XAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusHandler,
  XAmzTargetSWBExternalServiceListAccountAssignmentsHandler,
  XAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetHandler,
  XAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetHandler,
  XAmzTargetSWBExternalServiceListInstancesHandler,
  XAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetHandler,
  XAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusHandler,
  XAmzTargetSWBExternalServiceListPermissionSetsHandler,
  XAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountHandler,
  XAmzTargetSWBExternalServiceListTagsForResourceHandler,
  XAmzTargetSWBExternalServiceProvisionPermissionSetHandler,
  XAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetHandler,
  XAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetHandler,
  XAmzTargetSWBExternalServiceTagResourceHandler,
  XAmzTargetSWBExternalServiceUntagResourceHandler,
  XAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationHandler,
  XAmzTargetSWBExternalServiceUpdatePermissionSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route(
    '/',
    XAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetHandler,
  )
  .route('/', XAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceCreateAccountAssignmentHandler)
  .route('/', XAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationHandler)
  .route('/', XAmzTargetSWBExternalServiceCreatePermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceDeleteAccountAssignmentHandler)
  .route('/', XAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationHandler)
  .route('/', XAmzTargetSWBExternalServiceDeletePermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusHandler)
  .route('/', XAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusHandler)
  .route(
    '/',
    XAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationHandler,
  )
  .route('/', XAmzTargetSWBExternalServiceDescribePermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusHandler)
  .route(
    '/',
    XAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetHandler,
  )
  .route('/', XAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusHandler)
  .route('/', XAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusHandler)
  .route('/', XAmzTargetSWBExternalServiceListAccountAssignmentsHandler)
  .route('/', XAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceListInstancesHandler)
  .route('/', XAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusHandler)
  .route('/', XAmzTargetSWBExternalServiceListPermissionSetsHandler)
  .route('/', XAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountHandler)
  .route('/', XAmzTargetSWBExternalServiceListTagsForResourceHandler)
  .route('/', XAmzTargetSWBExternalServiceProvisionPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetHandler)
  .route('/', XAmzTargetSWBExternalServiceTagResourceHandler)
  .route('/', XAmzTargetSWBExternalServiceUntagResourceHandler)
  .route('/', XAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationHandler)
  .route('/', XAmzTargetSWBExternalServiceUpdatePermissionSetHandler)

export default app
