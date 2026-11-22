import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostXAmzTargetNetworkFirewall20201112AssociateFirewallPolicyMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112AssociateFirewallPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112AssociateFirewallPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112AssociateFirewallPolicy<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112AssociateFirewallPolicyMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112AssociateSubnetsMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets',
    '/#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112AssociateSubnetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112AssociateSubnetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112AssociateSubnets<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112AssociateSubnetsMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112CreateFirewallMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall',
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112CreateFirewallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112CreateFirewallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112CreateFirewall<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112CreateFirewallMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112CreateFirewallPolicyMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112CreateFirewallPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112CreateFirewallPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112CreateFirewallPolicy<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112CreateFirewallPolicyMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112CreateRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup',
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112CreateRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112CreateRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112CreateRuleGroup<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112CreateRuleGroupMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfiguration<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DeleteFirewallMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall',
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DeleteFirewallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DeleteFirewallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DeleteFirewall<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112DeleteFirewallMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DeleteFirewallPolicyMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DeleteFirewallPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DeleteFirewallPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DeleteFirewallPolicy<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112DeleteFirewallPolicyMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DeleteResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DeleteResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DeleteResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DeleteResourcePolicy<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112DeleteResourcePolicyMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DeleteRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup',
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DeleteRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DeleteRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DeleteRuleGroup<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112DeleteRuleGroupMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfiguration<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DescribeFirewallMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeFirewallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DescribeFirewallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeFirewall<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112DescribeFirewallMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DescribeFirewallPolicyMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeFirewallPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DescribeFirewallPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeFirewallPolicy<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112DescribeFirewallPolicyMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeLoggingConfiguration<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DescribeResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DescribeResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeResourcePolicy<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112DescribeResourcePolicyMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeRuleGroup<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadata<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfiguration<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112DisassociateSubnetsMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets',
    '/#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112DisassociateSubnetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112DisassociateSubnetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112DisassociateSubnets<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112DisassociateSubnetsMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112ListFirewallPoliciesMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies',
    '/#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112ListFirewallPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112ListFirewallPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112ListFirewallPolicies<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112ListFirewallPoliciesMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112ListFirewallsMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls',
    '/#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112ListFirewallsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112ListFirewallsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112ListFirewalls<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112ListFirewallsMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112ListRuleGroupsMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups',
    '/#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112ListRuleGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112ListRuleGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112ListRuleGroups<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112ListRuleGroupsMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations',
    '/#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurations<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource',
    '/#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112ListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112PutResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112PutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112PutResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112PutResourcePolicy<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112PutResourcePolicyMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112TagResourceMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.TagResource',
    '/#X-Amz-Target=NetworkFirewall_20201112.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112TagResource<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.TagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112TagResourceMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UntagResource',
    '/#X-Amz-Target=NetworkFirewall_20201112.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112UntagResource<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UntagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112UntagResourceMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtection<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateFirewallDescription<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfiguration<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicy<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtection<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateLoggingConfiguration<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112UpdateRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112UpdateRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateRuleGroup<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetNetworkFirewall20201112UpdateRuleGroupMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtection<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionMutationOptions<
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

export function getPostXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationMutationKey() {
  return [
    '#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration',
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfiguration<
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
                    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration']['$post']
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
    getPostXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationMutationOptions<
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
