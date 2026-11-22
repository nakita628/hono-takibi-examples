import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetRoute53ResolverAssociateFirewallRuleGroupKey() {
  return ['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup'] as const
}

export function getXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressKey() {
  return ['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress'] as const
}

export function getXAmzTargetRoute53ResolverAssociateResolverQueryLogConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig'] as const
}

export function getXAmzTargetRoute53ResolverAssociateResolverRuleKey() {
  return ['#X-Amz-Target=Route53Resolver.AssociateResolverRule'] as const
}

export function getXAmzTargetRoute53ResolverCreateFirewallDomainListKey() {
  return ['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList'] as const
}

export function getXAmzTargetRoute53ResolverCreateFirewallRuleKey() {
  return ['#X-Amz-Target=Route53Resolver.CreateFirewallRule'] as const
}

export function getXAmzTargetRoute53ResolverCreateFirewallRuleGroupKey() {
  return ['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup'] as const
}

export function getXAmzTargetRoute53ResolverCreateResolverEndpointKey() {
  return ['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint'] as const
}

export function getXAmzTargetRoute53ResolverCreateResolverQueryLogConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig'] as const
}

export function getXAmzTargetRoute53ResolverCreateResolverRuleKey() {
  return ['#X-Amz-Target=Route53Resolver.CreateResolverRule'] as const
}

export function getXAmzTargetRoute53ResolverDeleteFirewallDomainListKey() {
  return ['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList'] as const
}

export function getXAmzTargetRoute53ResolverDeleteFirewallRuleKey() {
  return ['#X-Amz-Target=Route53Resolver.DeleteFirewallRule'] as const
}

export function getXAmzTargetRoute53ResolverDeleteFirewallRuleGroupKey() {
  return ['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup'] as const
}

export function getXAmzTargetRoute53ResolverDeleteResolverEndpointKey() {
  return ['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint'] as const
}

export function getXAmzTargetRoute53ResolverDeleteResolverQueryLogConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig'] as const
}

export function getXAmzTargetRoute53ResolverDeleteResolverRuleKey() {
  return ['#X-Amz-Target=Route53Resolver.DeleteResolverRule'] as const
}

export function getXAmzTargetRoute53ResolverDisassociateFirewallRuleGroupKey() {
  return ['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup'] as const
}

export function getXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressKey() {
  return ['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress'] as const
}

export function getXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig'] as const
}

export function getXAmzTargetRoute53ResolverDisassociateResolverRuleKey() {
  return ['#X-Amz-Target=Route53Resolver.DisassociateResolverRule'] as const
}

export function getXAmzTargetRoute53ResolverGetFirewallConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.GetFirewallConfig'] as const
}

export function getXAmzTargetRoute53ResolverGetFirewallDomainListKey() {
  return ['#X-Amz-Target=Route53Resolver.GetFirewallDomainList'] as const
}

export function getXAmzTargetRoute53ResolverGetFirewallRuleGroupKey() {
  return ['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup'] as const
}

export function getXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationKey() {
  return ['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation'] as const
}

export function getXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyKey() {
  return ['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy'] as const
}

export function getXAmzTargetRoute53ResolverGetResolverConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.GetResolverConfig'] as const
}

export function getXAmzTargetRoute53ResolverGetResolverDnssecConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig'] as const
}

export function getXAmzTargetRoute53ResolverGetResolverEndpointKey() {
  return ['#X-Amz-Target=Route53Resolver.GetResolverEndpoint'] as const
}

export function getXAmzTargetRoute53ResolverGetResolverQueryLogConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig'] as const
}

export function getXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationKey() {
  return ['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation'] as const
}

export function getXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyKey() {
  return ['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy'] as const
}

export function getXAmzTargetRoute53ResolverGetResolverRuleKey() {
  return ['#X-Amz-Target=Route53Resolver.GetResolverRule'] as const
}

export function getXAmzTargetRoute53ResolverGetResolverRuleAssociationKey() {
  return ['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation'] as const
}

export function getXAmzTargetRoute53ResolverGetResolverRulePolicyKey() {
  return ['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy'] as const
}

export function getXAmzTargetRoute53ResolverImportFirewallDomainsKey() {
  return ['#X-Amz-Target=Route53Resolver.ImportFirewallDomains'] as const
}

export function getXAmzTargetRoute53ResolverListFirewallConfigsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListFirewallConfigs'] as const
}

export function getXAmzTargetRoute53ResolverListFirewallDomainListsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists'] as const
}

export function getXAmzTargetRoute53ResolverListFirewallDomainsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListFirewallDomains'] as const
}

export function getXAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations'] as const
}

export function getXAmzTargetRoute53ResolverListFirewallRuleGroupsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups'] as const
}

export function getXAmzTargetRoute53ResolverListFirewallRulesKey() {
  return ['#X-Amz-Target=Route53Resolver.ListFirewallRules'] as const
}

export function getXAmzTargetRoute53ResolverListResolverConfigsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListResolverConfigs'] as const
}

export function getXAmzTargetRoute53ResolverListResolverDnssecConfigsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs'] as const
}

export function getXAmzTargetRoute53ResolverListResolverEndpointIpAddressesKey() {
  return ['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses'] as const
}

export function getXAmzTargetRoute53ResolverListResolverEndpointsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListResolverEndpoints'] as const
}

export function getXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations'] as const
}

export function getXAmzTargetRoute53ResolverListResolverQueryLogConfigsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs'] as const
}

export function getXAmzTargetRoute53ResolverListResolverRuleAssociationsKey() {
  return ['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations'] as const
}

export function getXAmzTargetRoute53ResolverListResolverRulesKey() {
  return ['#X-Amz-Target=Route53Resolver.ListResolverRules'] as const
}

export function getXAmzTargetRoute53ResolverListTagsForResourceKey() {
  return ['#X-Amz-Target=Route53Resolver.ListTagsForResource'] as const
}

export function getXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyKey() {
  return ['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy'] as const
}

export function getXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyKey() {
  return ['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy'] as const
}

export function getXAmzTargetRoute53ResolverPutResolverRulePolicyKey() {
  return ['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy'] as const
}

export function getXAmzTargetRoute53ResolverTagResourceKey() {
  return ['#X-Amz-Target=Route53Resolver.TagResource'] as const
}

export function getXAmzTargetRoute53ResolverUntagResourceKey() {
  return ['#X-Amz-Target=Route53Resolver.UntagResource'] as const
}

export function getXAmzTargetRoute53ResolverUpdateFirewallConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig'] as const
}

export function getXAmzTargetRoute53ResolverUpdateFirewallDomainsKey() {
  return ['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains'] as const
}

export function getXAmzTargetRoute53ResolverUpdateFirewallRuleKey() {
  return ['#X-Amz-Target=Route53Resolver.UpdateFirewallRule'] as const
}

export function getXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationKey() {
  return ['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation'] as const
}

export function getXAmzTargetRoute53ResolverUpdateResolverConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.UpdateResolverConfig'] as const
}

export function getXAmzTargetRoute53ResolverUpdateResolverDnssecConfigKey() {
  return ['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig'] as const
}

export function getXAmzTargetRoute53ResolverUpdateResolverEndpointKey() {
  return ['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint'] as const
}

export function getXAmzTargetRoute53ResolverUpdateResolverRuleKey() {
  return ['#X-Amz-Target=Route53Resolver.UpdateResolverRule'] as const
}

export function getPostXAmzTargetRoute53ResolverAssociateFirewallRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup',
    '/#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverAssociateFirewallRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverAssociateFirewallRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverAssociateFirewallRuleGroup<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup']['$post']
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
    getPostXAmzTargetRoute53ResolverAssociateFirewallRuleGroupMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress',
    '/#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddress<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress']['$post']
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
    getPostXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverAssociateResolverQueryLogConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig',
    '/#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverAssociateResolverQueryLogConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverAssociateResolverQueryLogConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverAssociateResolverQueryLogConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig']['$post']
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
    getPostXAmzTargetRoute53ResolverAssociateResolverQueryLogConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverAssociateResolverRuleMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.AssociateResolverRule',
    '/#X-Amz-Target=Route53Resolver.AssociateResolverRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverAssociateResolverRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverAssociateResolverRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.AssociateResolverRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverAssociateResolverRule<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverAssociateResolverRuleMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverCreateFirewallDomainListMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateFirewallDomainList',
    '/#X-Amz-Target=Route53Resolver.CreateFirewallDomainList',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverCreateFirewallDomainListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverCreateFirewallDomainListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverCreateFirewallDomainList<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverCreateFirewallDomainListMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverCreateFirewallRuleMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateFirewallRule',
    '/#X-Amz-Target=Route53Resolver.CreateFirewallRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverCreateFirewallRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverCreateFirewallRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.CreateFirewallRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverCreateFirewallRule<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverCreateFirewallRuleMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverCreateFirewallRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup',
    '/#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverCreateFirewallRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverCreateFirewallRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverCreateFirewallRuleGroup<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverCreateFirewallRuleGroupMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverCreateResolverEndpointMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateResolverEndpoint',
    '/#X-Amz-Target=Route53Resolver.CreateResolverEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverCreateResolverEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverCreateResolverEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverCreateResolverEndpoint<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverCreateResolverEndpointMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverCreateResolverQueryLogConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig',
    '/#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverCreateResolverQueryLogConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverCreateResolverQueryLogConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverCreateResolverQueryLogConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig']['$post']
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
    getPostXAmzTargetRoute53ResolverCreateResolverQueryLogConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverCreateResolverRuleMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateResolverRule',
    '/#X-Amz-Target=Route53Resolver.CreateResolverRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverCreateResolverRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverRule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverCreateResolverRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.CreateResolverRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverCreateResolverRule<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverCreateResolverRuleMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverDeleteFirewallDomainListMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList',
    '/#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverDeleteFirewallDomainListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverDeleteFirewallDomainListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverDeleteFirewallDomainList<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverDeleteFirewallDomainListMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverDeleteFirewallRuleMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteFirewallRule',
    '/#X-Amz-Target=Route53Resolver.DeleteFirewallRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverDeleteFirewallRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverDeleteFirewallRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.DeleteFirewallRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverDeleteFirewallRule<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverDeleteFirewallRuleMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverDeleteFirewallRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup',
    '/#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverDeleteFirewallRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverDeleteFirewallRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverDeleteFirewallRuleGroup<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverDeleteFirewallRuleGroupMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverDeleteResolverEndpointMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint',
    '/#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverDeleteResolverEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverDeleteResolverEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverDeleteResolverEndpoint<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverDeleteResolverEndpointMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverDeleteResolverQueryLogConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig',
    '/#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverDeleteResolverQueryLogConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverDeleteResolverQueryLogConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverDeleteResolverQueryLogConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig']['$post']
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
    getPostXAmzTargetRoute53ResolverDeleteResolverQueryLogConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverDeleteResolverRuleMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteResolverRule',
    '/#X-Amz-Target=Route53Resolver.DeleteResolverRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverDeleteResolverRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverRule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverDeleteResolverRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.DeleteResolverRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverDeleteResolverRule<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverDeleteResolverRuleMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverDisassociateFirewallRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup',
    '/#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverDisassociateFirewallRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverDisassociateFirewallRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverDisassociateFirewallRuleGroup<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup']['$post']
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
    getPostXAmzTargetRoute53ResolverDisassociateFirewallRuleGroupMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress',
    '/#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddress<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress']['$post']
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
    getPostXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig',
    '/#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig']['$post']
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
    getPostXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverDisassociateResolverRuleMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DisassociateResolverRule',
    '/#X-Amz-Target=Route53Resolver.DisassociateResolverRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverDisassociateResolverRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverDisassociateResolverRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.DisassociateResolverRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverDisassociateResolverRule<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverDisassociateResolverRuleMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetFirewallConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetFirewallConfig',
    '/#X-Amz-Target=Route53Resolver.GetFirewallConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetFirewallConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallConfig']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetFirewallConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetFirewallConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetFirewallConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverGetFirewallConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetFirewallDomainListMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetFirewallDomainList',
    '/#X-Amz-Target=Route53Resolver.GetFirewallDomainList',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetFirewallDomainListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallDomainList']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallDomainList']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetFirewallDomainListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallDomainList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetFirewallDomainList'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetFirewallDomainList<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallDomainList']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallDomainList']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverGetFirewallDomainListMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup',
    '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetFirewallRuleGroup<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation',
    '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociation<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation']['$post']
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
    getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy',
    '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicy<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy']['$post']
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
    getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetResolverConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverConfig',
    '/#X-Amz-Target=Route53Resolver.GetResolverConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetResolverConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.GetResolverConfig']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetResolverConfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetResolverConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetResolverConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetResolverConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverGetResolverConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetResolverDnssecConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig',
    '/#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetResolverDnssecConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetResolverDnssecConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetResolverDnssecConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverGetResolverDnssecConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetResolverEndpointMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverEndpoint',
    '/#X-Amz-Target=Route53Resolver.GetResolverEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetResolverEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetResolverEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetResolverEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetResolverEndpoint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetResolverEndpoint<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverEndpoint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverEndpoint']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverGetResolverEndpointMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig',
    '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetResolverQueryLogConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation',
    '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociation<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation']['$post']
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
    getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy',
    '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicy<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy']['$post']
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
    getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetResolverRuleMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverRule',
    '/#X-Amz-Target=Route53Resolver.GetResolverRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetResolverRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetResolverRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetResolverRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetResolverRule<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRoute53ResolverGetResolverRuleMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetResolverRuleAssociationMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation',
    '/#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetResolverRuleAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetResolverRuleAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetResolverRuleAssociation<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation']['$post']
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
    getPostXAmzTargetRoute53ResolverGetResolverRuleAssociationMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverGetResolverRulePolicyMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverRulePolicy',
    '/#X-Amz-Target=Route53Resolver.GetResolverRulePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverGetResolverRulePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverGetResolverRulePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverGetResolverRulePolicy<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverGetResolverRulePolicyMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverImportFirewallDomainsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ImportFirewallDomains',
    '/#X-Amz-Target=Route53Resolver.ImportFirewallDomains',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverImportFirewallDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ImportFirewallDomains']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ImportFirewallDomains']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverImportFirewallDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ImportFirewallDomains']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ImportFirewallDomains'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverImportFirewallDomains<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ImportFirewallDomains']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ImportFirewallDomains']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverImportFirewallDomainsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListFirewallConfigsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallConfigs',
    '/#X-Amz-Target=Route53Resolver.ListFirewallConfigs',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListFirewallConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallConfigs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListFirewallConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListFirewallConfigs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListFirewallConfigs<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallConfigs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallConfigs']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverListFirewallConfigsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListFirewallDomainListsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallDomainLists',
    '/#X-Amz-Target=Route53Resolver.ListFirewallDomainLists',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListFirewallDomainListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListFirewallDomainListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListFirewallDomainLists<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverListFirewallDomainListsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListFirewallDomainsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallDomains',
    '/#X-Amz-Target=Route53Resolver.ListFirewallDomains',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListFirewallDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomains']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListFirewallDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomains']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListFirewallDomains'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListFirewallDomains<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomains']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomains']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverListFirewallDomainsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations',
    '/#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListFirewallRuleGroupAssociations<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations']['$post']
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
    getPostXAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListFirewallRuleGroupsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups',
    '/#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListFirewallRuleGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListFirewallRuleGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListFirewallRuleGroups<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverListFirewallRuleGroupsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListFirewallRulesMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallRules',
    '/#X-Amz-Target=Route53Resolver.ListFirewallRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListFirewallRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListFirewallRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListFirewallRules'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListFirewallRules<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRules']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRules']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverListFirewallRulesMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListResolverConfigsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverConfigs',
    '/#X-Amz-Target=Route53Resolver.ListResolverConfigs',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListResolverConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverConfigs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListResolverConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListResolverConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListResolverConfigs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListResolverConfigs<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverConfigs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverConfigs']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverListResolverConfigsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListResolverDnssecConfigsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs',
    '/#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListResolverDnssecConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListResolverDnssecConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListResolverDnssecConfigs<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverListResolverDnssecConfigsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListResolverEndpointIpAddressesMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses',
    '/#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListResolverEndpointIpAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListResolverEndpointIpAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListResolverEndpointIpAddresses<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses']['$post']
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
    getPostXAmzTargetRoute53ResolverListResolverEndpointIpAddressesMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListResolverEndpointsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverEndpoints',
    '/#X-Amz-Target=Route53Resolver.ListResolverEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListResolverEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListResolverEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListResolverEndpoints'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListResolverEndpoints<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpoints']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpoints']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverListResolverEndpointsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations',
    '/#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociations<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations']['$post']
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
    getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs',
    '/#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListResolverQueryLogConfigs<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs']['$post']
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
    getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListResolverRuleAssociationsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations',
    '/#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListResolverRuleAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListResolverRuleAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListResolverRuleAssociations<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations']['$post']
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
    getPostXAmzTargetRoute53ResolverListResolverRuleAssociationsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListResolverRulesMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverRules',
    '/#X-Amz-Target=Route53Resolver.ListResolverRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListResolverRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListResolverRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListResolverRules'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListResolverRules<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRules']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRules']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverListResolverRulesMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListTagsForResource',
    '/#X-Amz-Target=Route53Resolver.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.ListTagsForResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy',
    '/#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicy<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy']['$post']
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
    getPostXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy',
    '/#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicy<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy']['$post']
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
    getPostXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverPutResolverRulePolicyMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.PutResolverRulePolicy',
    '/#X-Amz-Target=Route53Resolver.PutResolverRulePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverPutResolverRulePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverPutResolverRulePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverPutResolverRulePolicy<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverPutResolverRulePolicyMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverTagResourceMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.TagResource',
    '/#X-Amz-Target=Route53Resolver.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Route53Resolver.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetRoute53ResolverTagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.TagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRoute53ResolverTagResourceMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UntagResource',
    '/#X-Amz-Target=Route53Resolver.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverUntagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.UntagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRoute53ResolverUntagResourceMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverUpdateFirewallConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateFirewallConfig',
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverUpdateFirewallConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverUpdateFirewallConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverUpdateFirewallConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverUpdateFirewallConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverUpdateFirewallDomainsMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateFirewallDomains',
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallDomains',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverUpdateFirewallDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverUpdateFirewallDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverUpdateFirewallDomains<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverUpdateFirewallDomainsMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverUpdateFirewallRuleMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateFirewallRule',
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverUpdateFirewallRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverUpdateFirewallRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.UpdateFirewallRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverUpdateFirewallRule<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverUpdateFirewallRuleMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation',
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociation<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation']['$post']
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
    getPostXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverUpdateResolverConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateResolverConfig',
    '/#X-Amz-Target=Route53Resolver.UpdateResolverConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverUpdateResolverConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverUpdateResolverConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.UpdateResolverConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverUpdateResolverConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverUpdateResolverConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverUpdateResolverDnssecConfigMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig',
    '/#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverUpdateResolverDnssecConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverUpdateResolverDnssecConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverUpdateResolverDnssecConfig<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig']['$post']
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
    getPostXAmzTargetRoute53ResolverUpdateResolverDnssecConfigMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverUpdateResolverEndpointMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint',
    '/#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverUpdateResolverEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverUpdateResolverEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverUpdateResolverEndpoint<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverUpdateResolverEndpointMutationOptions<
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

export function getPostXAmzTargetRoute53ResolverUpdateResolverRuleMutationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateResolverRule',
    '/#X-Amz-Target=Route53Resolver.UpdateResolverRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53ResolverUpdateResolverRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverRule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53ResolverUpdateResolverRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Resolver.UpdateResolverRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRoute53ResolverUpdateResolverRule<
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
                  (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetRoute53ResolverUpdateResolverRuleMutationOptions<
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
