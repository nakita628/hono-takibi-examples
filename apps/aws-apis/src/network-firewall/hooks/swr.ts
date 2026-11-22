import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetNetworkFirewall_20201112AssociateFirewallPolicyKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy'] as const
}

export function getXAmzTargetNetworkFirewall_20201112AssociateSubnetsKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets'] as const
}

export function getXAmzTargetNetworkFirewall_20201112CreateFirewallKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall'] as const
}

export function getXAmzTargetNetworkFirewall_20201112CreateFirewallPolicyKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy'] as const
}

export function getXAmzTargetNetworkFirewall_20201112CreateRuleGroupKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup'] as const
}

export function getXAmzTargetNetworkFirewall_20201112CreateTLSInspectionConfigurationKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DeleteFirewallKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DeleteFirewallPolicyKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DeleteResourcePolicyKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DeleteRuleGroupKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DeleteTLSInspectionConfigurationKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DescribeFirewallKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DescribeFirewallPolicyKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DescribeLoggingConfigurationKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DescribeResourcePolicyKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DescribeRuleGroupKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DescribeRuleGroupMetadataKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DescribeTLSInspectionConfigurationKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration'] as const
}

export function getXAmzTargetNetworkFirewall_20201112DisassociateSubnetsKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets'] as const
}

export function getXAmzTargetNetworkFirewall_20201112ListFirewallPoliciesKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies'] as const
}

export function getXAmzTargetNetworkFirewall_20201112ListFirewallsKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls'] as const
}

export function getXAmzTargetNetworkFirewall_20201112ListRuleGroupsKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups'] as const
}

export function getXAmzTargetNetworkFirewall_20201112ListTLSInspectionConfigurationsKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations'] as const
}

export function getXAmzTargetNetworkFirewall_20201112ListTagsForResourceKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource'] as const
}

export function getXAmzTargetNetworkFirewall_20201112PutResourcePolicyKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy'] as const
}

export function getXAmzTargetNetworkFirewall_20201112TagResourceKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.TagResource'] as const
}

export function getXAmzTargetNetworkFirewall_20201112UntagResourceKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.UntagResource'] as const
}

export function getXAmzTargetNetworkFirewall_20201112UpdateFirewallDeleteProtectionKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection'] as const
}

export function getXAmzTargetNetworkFirewall_20201112UpdateFirewallDescriptionKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription'] as const
}

export function getXAmzTargetNetworkFirewall_20201112UpdateFirewallEncryptionConfigurationKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration'] as const
}

export function getXAmzTargetNetworkFirewall_20201112UpdateFirewallPolicyKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy'] as const
}

export function getXAmzTargetNetworkFirewall_20201112UpdateFirewallPolicyChangeProtectionKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection'] as const
}

export function getXAmzTargetNetworkFirewall_20201112UpdateLoggingConfigurationKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration'] as const
}

export function getXAmzTargetNetworkFirewall_20201112UpdateRuleGroupKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup'] as const
}

export function getXAmzTargetNetworkFirewall_20201112UpdateSubnetChangeProtectionKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection'] as const
}

export function getXAmzTargetNetworkFirewall_20201112UpdateTLSInspectionConfigurationKey() {
  return ['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration'] as const
}

export function getPostXAmzTargetNetworkFirewall20201112AssociateFirewallPolicyKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112AssociateFirewallPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112AssociateFirewallPolicyKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112AssociateSubnetsKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets',
    '/#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112AssociateSubnets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112AssociateSubnetsKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112CreateFirewallKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall',
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112CreateFirewall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112CreateFirewallKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112CreateFirewallPolicyKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112CreateFirewallPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112CreateFirewallPolicyKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112CreateRuleGroupKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup',
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112CreateRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112CreateRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DeleteFirewallKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall',
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DeleteFirewall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112DeleteFirewallKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DeleteFirewallPolicyKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DeleteFirewallPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112DeleteFirewallPolicyKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DeleteResourcePolicyKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DeleteResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112DeleteResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DeleteRuleGroupKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup',
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DeleteRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112DeleteRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeFirewallKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeFirewall<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112DescribeFirewallKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeFirewallPolicyKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeFirewallPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112DescribeFirewallPolicyKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeLoggingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeResourcePolicyKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112DescribeResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112DisassociateSubnetsKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets',
    '/#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112DisassociateSubnets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112DisassociateSubnetsKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112ListFirewallPoliciesKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies',
    '/#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112ListFirewallPolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112ListFirewallPoliciesKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112ListFirewallsKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls',
    '/#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112ListFirewalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112ListFirewallsKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112ListRuleGroupsKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups',
    '/#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112ListRuleGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112ListRuleGroupsKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations',
    '/#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource',
    '/#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112PutResourcePolicyKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112PutResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112PutResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112TagResourceKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.TagResource',
    '/#X-Amz-Target=NetworkFirewall_20201112.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=NetworkFirewall_20201112.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112TagResourceKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112UntagResourceKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UntagResource',
    '/#X-Amz-Target=NetworkFirewall_20201112.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateFirewallDescription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateLoggingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateRuleGroupKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetNetworkFirewall20201112UpdateRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationKey()
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
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
