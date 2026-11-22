import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet',
    '/#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet',
    '/#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceCreateAccountAssignmentMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.CreateAccountAssignment',
    '/#X-Amz-Target=SWBExternalService.CreateAccountAssignment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceCreateAccountAssignmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.CreateAccountAssignment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceCreateAccountAssignmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.CreateAccountAssignment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.CreateAccountAssignment'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceCreateAccountAssignment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.CreateAccountAssignment']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceCreateAccountAssignmentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration',
    '/#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceCreatePermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.CreatePermissionSet',
    '/#X-Amz-Target=SWBExternalService.CreatePermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceCreatePermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.CreatePermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceCreatePermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.CreatePermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.CreatePermissionSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceCreatePermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.CreatePermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceCreatePermissionSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDeleteAccountAssignmentMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeleteAccountAssignment',
    '/#X-Amz-Target=SWBExternalService.DeleteAccountAssignment',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDeleteAccountAssignmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceDeleteAccountAssignmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDeleteAccountAssignment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DeleteAccountAssignment']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceDeleteAccountAssignmentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet',
    '/#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration',
    '/#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDeletePermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeletePermissionSet',
    '/#X-Amz-Target=SWBExternalService.DeletePermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDeletePermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceDeletePermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.DeletePermissionSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDeletePermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceDeletePermissionSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet',
    '/#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus',
    '/#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus',
    '/#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration',
    '/#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDescribePermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribePermissionSet',
    '/#X-Amz-Target=SWBExternalService.DescribePermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDescribePermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceDescribePermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.DescribePermissionSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDescribePermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceDescribePermissionSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus',
    '/#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet',
    '/#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet',
    '/#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet',
    '/#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet',
    '/#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus',
    '/#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus',
    '/#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListAccountAssignmentsMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListAccountAssignments',
    '/#X-Amz-Target=SWBExternalService.ListAccountAssignments',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListAccountAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceListAccountAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ListAccountAssignments'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListAccountAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountAssignments']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceListAccountAssignmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet',
    '/#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet',
    '/#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListInstancesMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListInstances',
    '/#X-Amz-Target=SWBExternalService.ListInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=SWBExternalService.ListInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceListInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ListInstances'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=SWBExternalService.ListInstances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListInstances']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceListInstancesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet',
    '/#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus',
    '/#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListPermissionSetsMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListPermissionSets',
    '/#X-Amz-Target=SWBExternalService.ListPermissionSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListPermissionSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceListPermissionSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ListPermissionSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListPermissionSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSets']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceListPermissionSetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount',
    '/#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ListTagsForResource',
    '/#X-Amz-Target=SWBExternalService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceListTagsForResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceProvisionPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.ProvisionPermissionSet',
    '/#X-Amz-Target=SWBExternalService.ProvisionPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceProvisionPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceProvisionPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceProvisionPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.ProvisionPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceProvisionPermissionSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet',
    '/#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet',
    '/#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.TagResource',
    '/#X-Amz-Target=SWBExternalService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=SWBExternalService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=SWBExternalService.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.TagResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceTagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.UntagResource',
    '/#X-Amz-Target=SWBExternalService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=SWBExternalService.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=SWBExternalService.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.UntagResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceUntagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration',
    '/#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSWBExternalServiceUpdatePermissionSetMutationKey() {
  return [
    '#X-Amz-Target=SWBExternalService.UpdatePermissionSet',
    '/#X-Amz-Target=SWBExternalService.UpdatePermissionSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetSWBExternalServiceUpdatePermissionSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SWBExternalService.UpdatePermissionSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSWBExternalServiceUpdatePermissionSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SWBExternalService.UpdatePermissionSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SWBExternalService.UpdatePermissionSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSWBExternalServiceUpdatePermissionSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=SWBExternalService.UpdatePermissionSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSWBExternalServiceUpdatePermissionSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
