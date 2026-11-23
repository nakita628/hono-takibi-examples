import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet'
    ].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceCreateAccountAssignment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.CreateAccountAssignment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.CreateAccountAssignment'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceCreatePermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.CreatePermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.CreatePermissionSet'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceDeleteAccountAssignment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceDeletePermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.DeletePermissionSet'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceDescribePermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.DescribePermissionSet'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet'
    ].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceListAccountAssignments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ListAccountAssignments'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet'
    ].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceListInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ListInstances'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceListPermissionSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ListPermissionSets'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceProvisionPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSWBExternalServiceTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SWBExternalService.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetSWBExternalServiceUpdatePermissionSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SWBExternalService.UpdatePermissionSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SWBExternalService.UpdatePermissionSet'].$post(args, options),
  )
}
