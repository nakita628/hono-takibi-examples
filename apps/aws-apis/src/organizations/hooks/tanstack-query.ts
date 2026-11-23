import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSOrganizationsV20161128AcceptHandshakeKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128AttachPolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128CancelHandshakeKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128CloseAccountKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128CreateAccountKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128CreateOrganizationKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128CreatePolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DeclineHandshakeKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DeleteOrganizationKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DeletePolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DescribeAccountKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DescribeHandshakeKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DescribeOrganizationKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DescribePolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DetachPolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128DisablePolicyTypeKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128EnableAllFeaturesKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128EnablePolicyTypeKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128LeaveOrganizationKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListAccountsKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListAccountsForParentKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListChildrenKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListParentsKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListParents'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListPoliciesKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListRootsKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128MoveAccountKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128PutResourcePolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128TagResourceKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.TagResource'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128UntagResourceKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit'] as const
}

export function getXAmzTargetAWSOrganizationsV20161128UpdatePolicyKey() {
  return ['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy'] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128AcceptHandshakeMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake',
    '/#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128AcceptHandshakeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128AcceptHandshakeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128AcceptHandshake<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128AcceptHandshakeMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128AttachPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128AttachPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128AttachPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128AttachPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128AttachPolicyMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128CancelHandshakeMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128CancelHandshakeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128CancelHandshakeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128CancelHandshake<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128CancelHandshakeMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128CloseAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128CloseAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128CloseAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128CloseAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128CloseAccountMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128CreateAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128CreateAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128CreateAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128CreateAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128CreateAccountMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128CreateOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128CreatePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128CreatePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128CreatePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128CreatePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128CreatePolicyMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DeclineHandshakeMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeclineHandshakeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DeclineHandshakeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeclineHandshake<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DeclineHandshakeMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeleteOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DeletePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeletePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DeletePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeletePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128DeletePolicyMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministrator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DescribeAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128DescribeAccountMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeHandshakeMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeHandshakeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DescribeHandshakeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeHandshake<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DescribeHandshakeMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DescribePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DescribePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128DescribePolicyMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DetachPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DetachPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DetachPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DetachPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128DetachPolicyMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128DisablePolicyTypeMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128DisablePolicyTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128DisablePolicyTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128DisablePolicyType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128DisablePolicyTypeMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess',
    '/#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128EnableAllFeaturesMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures',
    '/#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128EnableAllFeaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128EnableAllFeaturesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128EnableAllFeatures<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128EnableAllFeaturesMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128EnablePolicyTypeMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType',
    '/#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128EnablePolicyTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128EnablePolicyTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128EnablePolicyType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128EnablePolicyTypeMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128LeaveOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128LeaveOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128LeaveOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128LeaveOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128LeaveOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListAccountsMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128ListAccountsMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListAccountsForParentMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListAccountsForParentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListAccountsForParentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListAccountsForParent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListAccountsForParentMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListChildrenMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListChildren',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListChildren',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListChildrenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListChildrenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListChildren<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128ListChildrenMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministrators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListParentsMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListParents',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListParents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListParentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListParents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListParents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListParentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListParents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListParents'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListParents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListParents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListParents']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128ListParentsMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListPoliciesForTarget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListRootsMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListRoots',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListRoots',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListRootsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListRootsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListRoots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128ListRootsMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128MoveAccountMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128MoveAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128MoveAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128MoveAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128MoveAccountMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128PutResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128PutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128PutResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128PutResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128PutResourcePolicyMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator',
    '/#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministrator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.TagResource',
    '/#X-Amz-Target=AWSOrganizationsV20161128.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128TagResourceMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.UntagResource',
    '/#X-Amz-Target=AWSOrganizationsV20161128.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128UntagResourceMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit',
    '/#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitMutationOptions<
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

export function getPostXAmzTargetAWSOrganizationsV20161128UpdatePolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSOrganizationsV20161128UpdatePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSOrganizationsV20161128UpdatePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSOrganizationsV20161128UpdatePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSOrganizationsV20161128UpdatePolicyMutationOptions<
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
