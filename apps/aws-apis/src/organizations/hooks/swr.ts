import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSOrganizationsV20161128AcceptHandshakeKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake',
    '/#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128AcceptHandshake<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128AcceptHandshakeKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128AttachPolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128AttachPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128AttachPolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128CancelHandshakeKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128CancelHandshake<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128CancelHandshakeKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128CloseAccountKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128CloseAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128CloseAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128CreateAccountKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128CreateAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128CreateAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128CreateOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128CreatePolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128CreatePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128CreatePolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeclineHandshakeKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeclineHandshake<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DeclineHandshakeKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeleteOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeletePolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeletePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DeletePolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministrator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeAccountKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DescribeAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeHandshakeKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeHandshake<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DescribeHandshakeKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribePolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DescribePolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DetachPolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DetachPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DetachPolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128DisablePolicyTypeKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType',
    '/#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128DisablePolicyType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128DisablePolicyTypeKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess',
    '/#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128EnableAllFeaturesKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures',
    '/#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128EnableAllFeatures<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128EnableAllFeaturesKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128EnablePolicyTypeKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType',
    '/#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128EnablePolicyType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128EnablePolicyTypeKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128LeaveOrganizationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128LeaveOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128LeaveOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListAccountsKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListAccountsKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListAccountsForParentKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListAccountsForParent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListAccountsForParentKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListChildrenKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListChildren',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListChildren',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListChildren<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListChildrenKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministrators<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListParentsKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListParents',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListParents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListParents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListParents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListParentsKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListParents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListParents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListPoliciesForTarget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListRootsKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListRoots',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListRoots',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListRoots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListRootsKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128MoveAccountKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount',
    '/#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128MoveAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128MoveAccountKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128PutResourcePolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128PutResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128PutResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator',
    '/#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministrator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization',
    '/#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128TagResourceKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.TagResource',
    '/#X-Amz-Target=AWSOrganizationsV20161128.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128TagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128UntagResourceKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.UntagResource',
    '/#X-Amz-Target=AWSOrganizationsV20161128.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128UntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit',
    '/#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSOrganizationsV20161128UpdatePolicyKey() {
  return [
    '#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy',
    '/#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSOrganizationsV20161128UpdatePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSOrganizationsV20161128UpdatePolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
