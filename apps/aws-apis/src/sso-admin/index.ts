import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetSwbExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetHandler,
  xAmzTargetSwbExternalServiceAttachManagedPolicyToPermissionSetHandler,
  xAmzTargetSwbExternalServiceCreateAccountAssignmentHandler,
  xAmzTargetSwbExternalServiceCreateInstanceAccessControlAttributeConfigurationHandler,
  xAmzTargetSwbExternalServiceCreatePermissionSetHandler,
  xAmzTargetSwbExternalServiceDeleteAccountAssignmentHandler,
  xAmzTargetSwbExternalServiceDeleteInlinePolicyFromPermissionSetHandler,
  xAmzTargetSwbExternalServiceDeleteInstanceAccessControlAttributeConfigurationHandler,
  xAmzTargetSwbExternalServiceDeletePermissionsBoundaryFromPermissionSetHandler,
  xAmzTargetSwbExternalServiceDeletePermissionSetHandler,
  xAmzTargetSwbExternalServiceDescribeAccountAssignmentCreationStatusHandler,
  xAmzTargetSwbExternalServiceDescribeAccountAssignmentDeletionStatusHandler,
  xAmzTargetSwbExternalServiceDescribeInstanceAccessControlAttributeConfigurationHandler,
  xAmzTargetSwbExternalServiceDescribePermissionSetHandler,
  xAmzTargetSwbExternalServiceDescribePermissionSetProvisioningStatusHandler,
  xAmzTargetSwbExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetHandler,
  xAmzTargetSwbExternalServiceDetachManagedPolicyFromPermissionSetHandler,
  xAmzTargetSwbExternalServiceGetInlinePolicyForPermissionSetHandler,
  xAmzTargetSwbExternalServiceGetPermissionsBoundaryForPermissionSetHandler,
  xAmzTargetSwbExternalServiceListAccountAssignmentCreationStatusHandler,
  xAmzTargetSwbExternalServiceListAccountAssignmentDeletionStatusHandler,
  xAmzTargetSwbExternalServiceListAccountAssignmentsHandler,
  xAmzTargetSwbExternalServiceListAccountsForProvisionedPermissionSetHandler,
  xAmzTargetSwbExternalServiceListCustomerManagedPolicyReferencesInPermissionSetHandler,
  xAmzTargetSwbExternalServiceListInstancesHandler,
  xAmzTargetSwbExternalServiceListManagedPoliciesInPermissionSetHandler,
  xAmzTargetSwbExternalServiceListPermissionSetProvisioningStatusHandler,
  xAmzTargetSwbExternalServiceListPermissionSetsHandler,
  xAmzTargetSwbExternalServiceListPermissionSetsProvisionedToAccountHandler,
  xAmzTargetSwbExternalServiceListTagsForResourceHandler,
  xAmzTargetSwbExternalServiceProvisionPermissionSetHandler,
  xAmzTargetSwbExternalServicePutInlinePolicyToPermissionSetHandler,
  xAmzTargetSwbExternalServicePutPermissionsBoundaryToPermissionSetHandler,
  xAmzTargetSwbExternalServiceTagResourceHandler,
  xAmzTargetSwbExternalServiceUntagResourceHandler,
  xAmzTargetSwbExternalServiceUpdateInstanceAccessControlAttributeConfigurationHandler,
  xAmzTargetSwbExternalServiceUpdatePermissionSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route(
    '/',
    xAmzTargetSwbExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetHandler,
  )
  .route('/', xAmzTargetSwbExternalServiceAttachManagedPolicyToPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceCreateAccountAssignmentHandler)
  .route('/', xAmzTargetSwbExternalServiceCreateInstanceAccessControlAttributeConfigurationHandler)
  .route('/', xAmzTargetSwbExternalServiceCreatePermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceDeleteAccountAssignmentHandler)
  .route('/', xAmzTargetSwbExternalServiceDeleteInlinePolicyFromPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceDeleteInstanceAccessControlAttributeConfigurationHandler)
  .route('/', xAmzTargetSwbExternalServiceDeletePermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceDeletePermissionsBoundaryFromPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceDescribeAccountAssignmentCreationStatusHandler)
  .route('/', xAmzTargetSwbExternalServiceDescribeAccountAssignmentDeletionStatusHandler)
  .route(
    '/',
    xAmzTargetSwbExternalServiceDescribeInstanceAccessControlAttributeConfigurationHandler,
  )
  .route('/', xAmzTargetSwbExternalServiceDescribePermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceDescribePermissionSetProvisioningStatusHandler)
  .route(
    '/',
    xAmzTargetSwbExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetHandler,
  )
  .route('/', xAmzTargetSwbExternalServiceDetachManagedPolicyFromPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceGetInlinePolicyForPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceGetPermissionsBoundaryForPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceListAccountAssignmentCreationStatusHandler)
  .route('/', xAmzTargetSwbExternalServiceListAccountAssignmentDeletionStatusHandler)
  .route('/', xAmzTargetSwbExternalServiceListAccountAssignmentsHandler)
  .route('/', xAmzTargetSwbExternalServiceListAccountsForProvisionedPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceListCustomerManagedPolicyReferencesInPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceListInstancesHandler)
  .route('/', xAmzTargetSwbExternalServiceListManagedPoliciesInPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceListPermissionSetProvisioningStatusHandler)
  .route('/', xAmzTargetSwbExternalServiceListPermissionSetsHandler)
  .route('/', xAmzTargetSwbExternalServiceListPermissionSetsProvisionedToAccountHandler)
  .route('/', xAmzTargetSwbExternalServiceListTagsForResourceHandler)
  .route('/', xAmzTargetSwbExternalServiceProvisionPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServicePutInlinePolicyToPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServicePutPermissionsBoundaryToPermissionSetHandler)
  .route('/', xAmzTargetSwbExternalServiceTagResourceHandler)
  .route('/', xAmzTargetSwbExternalServiceUntagResourceHandler)
  .route('/', xAmzTargetSwbExternalServiceUpdateInstanceAccessControlAttributeConfigurationHandler)
  .route('/', xAmzTargetSwbExternalServiceUpdatePermissionSetHandler)

export default app
