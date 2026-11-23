import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet',
  ] as const
}

export function getXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceCreateAccountAssignmentKey() {
  return ['#X-Amz-Target=SWBExternalService.CreateAccountAssignment'] as const
}

export function getXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration',
  ] as const
}

export function getXAmzTargetSWBExternalServiceCreatePermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.CreatePermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceDeleteAccountAssignmentKey() {
  return ['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment'] as const
}

export function getXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration',
  ] as const
}

export function getXAmzTargetSWBExternalServiceDeletePermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.DeletePermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusKey() {
  return ['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus'] as const
}

export function getXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusKey() {
  return ['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus'] as const
}

export function getXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration',
  ] as const
}

export function getXAmzTargetSWBExternalServiceDescribePermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.DescribePermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusKey() {
  return ['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus'] as const
}

export function getXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet',
  ] as const
}

export function getXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusKey() {
  return ['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus'] as const
}

export function getXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusKey() {
  return ['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus'] as const
}

export function getXAmzTargetSWBExternalServiceListAccountAssignmentsKey() {
  return ['#X-Amz-Target=SWBExternalService.ListAccountAssignments'] as const
}

export function getXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet',
  ] as const
}

export function getXAmzTargetSWBExternalServiceListInstancesKey() {
  return ['#X-Amz-Target=SWBExternalService.ListInstances'] as const
}

export function getXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusKey() {
  return ['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus'] as const
}

export function getXAmzTargetSWBExternalServiceListPermissionSetsKey() {
  return ['#X-Amz-Target=SWBExternalService.ListPermissionSets'] as const
}

export function getXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountKey() {
  return ['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount'] as const
}

export function getXAmzTargetSWBExternalServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=SWBExternalService.ListTagsForResource'] as const
}

export function getXAmzTargetSWBExternalServiceProvisionPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet'] as const
}

export function getXAmzTargetSWBExternalServiceTagResourceKey() {
  return ['#X-Amz-Target=SWBExternalService.TagResource'] as const
}

export function getXAmzTargetSWBExternalServiceUntagResourceKey() {
  return ['#X-Amz-Target=SWBExternalService.UntagResource'] as const
}

export function getXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration',
  ] as const
}

export function getXAmzTargetSWBExternalServiceUpdatePermissionSetKey() {
  return ['#X-Amz-Target=SWBExternalService.UpdatePermissionSet'] as const
}

export function getPostXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet',
    '/#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet',
    '/#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceCreateAccountAssignmentKey() {
  return [
    '#X-Amz-Target=SWBExternalService.CreateAccountAssignment',
    '/#X-Amz-Target=SWBExternalService.CreateAccountAssignment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceCreateAccountAssignment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.CreateAccountAssignment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.CreateAccountAssignment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceCreateAccountAssignmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.CreateAccountAssignment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.CreateAccountAssignment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration',
    '/#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceCreatePermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.CreatePermissionSet',
    '/#X-Amz-Target=SWBExternalService.CreatePermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceCreatePermissionSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.CreatePermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.CreatePermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceCreatePermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.CreatePermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.CreatePermissionSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDeleteAccountAssignmentKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeleteAccountAssignment',
    '/#X-Amz-Target=SWBExternalService.DeleteAccountAssignment',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDeleteAccountAssignment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceDeleteAccountAssignmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet',
    '/#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration',
    '/#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDeletePermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeletePermissionSet',
    '/#X-Amz-Target=SWBExternalService.DeletePermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDeletePermissionSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceDeletePermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.DeletePermissionSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet',
    '/#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus',
    '/#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus',
    '/#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration',
    '/#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDescribePermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribePermissionSet',
    '/#X-Amz-Target=SWBExternalService.DescribePermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDescribePermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceDescribePermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.DescribePermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus',
    '/#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet',
    '/#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet',
    '/#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet',
    '/#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet',
    '/#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus',
    '/#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus',
    '/#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListAccountAssignmentsKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListAccountAssignments',
    '/#X-Amz-Target=SWBExternalService.ListAccountAssignments',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListAccountAssignments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceListAccountAssignmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ListAccountAssignments'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet',
    '/#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet',
    '/#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListInstancesKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListInstances',
    '/#X-Amz-Target=SWBExternalService.ListInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SWBExternalService.ListInstances']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SWBExternalService.ListInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceListInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ListInstances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet',
    '/#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus',
    '/#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListPermissionSetsKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListPermissionSets',
    '/#X-Amz-Target=SWBExternalService.ListPermissionSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListPermissionSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceListPermissionSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ListPermissionSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount',
    '/#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListTagsForResource',
    '/#X-Amz-Target=SWBExternalService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceProvisionPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ProvisionPermissionSet',
    '/#X-Amz-Target=SWBExternalService.ProvisionPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceProvisionPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceProvisionPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet',
    '/#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet',
    '/#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceTagResourceKey() {
  return [
    '#X-Amz-Target=SWBExternalService.TagResource',
    '/#X-Amz-Target=SWBExternalService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SWBExternalService.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SWBExternalService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=SWBExternalService.UntagResource',
    '/#X-Amz-Target=SWBExternalService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SWBExternalService.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SWBExternalService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration',
    '/#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSWBExternalServiceUpdatePermissionSetKey() {
  return [
    '#X-Amz-Target=SWBExternalService.UpdatePermissionSet',
    '/#X-Amz-Target=SWBExternalService.UpdatePermissionSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetSWBExternalServiceUpdatePermissionSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SWBExternalService.UpdatePermissionSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.UpdatePermissionSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSWBExternalServiceUpdatePermissionSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.UpdatePermissionSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SWBExternalService.UpdatePermissionSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
