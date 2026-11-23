import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetRoute53ResolverAssociateFirewallRuleGroupKey() {
  return [
    '#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup',
    '/#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverAssociateFirewallRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverAssociateFirewallRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressKey() {
  return [
    '#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress',
    '/#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverAssociateResolverQueryLogConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig',
    '/#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverAssociateResolverQueryLogConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverAssociateResolverQueryLogConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverAssociateResolverRuleKey() {
  return [
    '#X-Amz-Target=Route53Resolver.AssociateResolverRule',
    '/#X-Amz-Target=Route53Resolver.AssociateResolverRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverAssociateResolverRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverAssociateResolverRuleKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.AssociateResolverRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverCreateFirewallDomainListKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateFirewallDomainList',
    '/#X-Amz-Target=Route53Resolver.CreateFirewallDomainList',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverCreateFirewallDomainList<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverCreateFirewallDomainListKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverCreateFirewallRuleKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateFirewallRule',
    '/#X-Amz-Target=Route53Resolver.CreateFirewallRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverCreateFirewallRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverCreateFirewallRuleKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.CreateFirewallRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverCreateFirewallRuleGroupKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup',
    '/#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverCreateFirewallRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverCreateFirewallRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverCreateResolverEndpointKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateResolverEndpoint',
    '/#X-Amz-Target=Route53Resolver.CreateResolverEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverCreateResolverEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverCreateResolverEndpointKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverCreateResolverQueryLogConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig',
    '/#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverCreateResolverQueryLogConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverCreateResolverQueryLogConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverCreateResolverRuleKey() {
  return [
    '#X-Amz-Target=Route53Resolver.CreateResolverRule',
    '/#X-Amz-Target=Route53Resolver.CreateResolverRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverCreateResolverRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverCreateResolverRuleKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.CreateResolverRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverDeleteFirewallDomainListKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList',
    '/#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverDeleteFirewallDomainList<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverDeleteFirewallDomainListKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverDeleteFirewallRuleKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteFirewallRule',
    '/#X-Amz-Target=Route53Resolver.DeleteFirewallRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverDeleteFirewallRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverDeleteFirewallRuleKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.DeleteFirewallRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverDeleteFirewallRuleGroupKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup',
    '/#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverDeleteFirewallRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverDeleteFirewallRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverDeleteResolverEndpointKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint',
    '/#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverDeleteResolverEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverDeleteResolverEndpointKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverDeleteResolverQueryLogConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig',
    '/#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverDeleteResolverQueryLogConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverDeleteResolverQueryLogConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverDeleteResolverRuleKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DeleteResolverRule',
    '/#X-Amz-Target=Route53Resolver.DeleteResolverRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverDeleteResolverRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverDeleteResolverRuleKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.DeleteResolverRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverDisassociateFirewallRuleGroupKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup',
    '/#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverDisassociateFirewallRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverDisassociateFirewallRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress',
    '/#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig',
    '/#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverDisassociateResolverRuleKey() {
  return [
    '#X-Amz-Target=Route53Resolver.DisassociateResolverRule',
    '/#X-Amz-Target=Route53Resolver.DisassociateResolverRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverDisassociateResolverRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverDisassociateResolverRuleKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.DisassociateResolverRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetFirewallConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetFirewallConfig',
    '/#X-Amz-Target=Route53Resolver.GetFirewallConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetFirewallConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetFirewallConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetFirewallConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetFirewallDomainListKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetFirewallDomainList',
    '/#X-Amz-Target=Route53Resolver.GetFirewallDomainList',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetFirewallDomainList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallDomainList']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetFirewallDomainListKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallDomainList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetFirewallDomainList'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup',
    '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetFirewallRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation',
    '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy',
    '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetResolverConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverConfig',
    '/#X-Amz-Target=Route53Resolver.GetResolverConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetResolverConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetResolverConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetResolverConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetResolverConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetResolverDnssecConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig',
    '/#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetResolverDnssecConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetResolverDnssecConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetResolverEndpointKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverEndpoint',
    '/#X-Amz-Target=Route53Resolver.GetResolverEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetResolverEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetResolverEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetResolverEndpointKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetResolverEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig',
    '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetResolverQueryLogConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation',
    '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy',
    '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetResolverRuleKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverRule',
    '/#X-Amz-Target=Route53Resolver.GetResolverRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetResolverRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetResolverRuleKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetResolverRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetResolverRuleAssociationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation',
    '/#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetResolverRuleAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetResolverRuleAssociationKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverGetResolverRulePolicyKey() {
  return [
    '#X-Amz-Target=Route53Resolver.GetResolverRulePolicy',
    '/#X-Amz-Target=Route53Resolver.GetResolverRulePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverGetResolverRulePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverGetResolverRulePolicyKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverImportFirewallDomainsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ImportFirewallDomains',
    '/#X-Amz-Target=Route53Resolver.ImportFirewallDomains',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverImportFirewallDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ImportFirewallDomains']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverImportFirewallDomainsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ImportFirewallDomains']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ImportFirewallDomains'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListFirewallConfigsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallConfigs',
    '/#X-Amz-Target=Route53Resolver.ListFirewallConfigs',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListFirewallConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallConfigs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListFirewallConfigsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListFirewallConfigs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListFirewallDomainListsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallDomainLists',
    '/#X-Amz-Target=Route53Resolver.ListFirewallDomainLists',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListFirewallDomainLists<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListFirewallDomainListsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListFirewallDomainsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallDomains',
    '/#X-Amz-Target=Route53Resolver.ListFirewallDomains',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListFirewallDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListFirewallDomainsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomains']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListFirewallDomains'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations',
    '/#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListFirewallRuleGroupAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListFirewallRuleGroupsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups',
    '/#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListFirewallRuleGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListFirewallRuleGroupsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListFirewallRulesKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListFirewallRules',
    '/#X-Amz-Target=Route53Resolver.ListFirewallRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListFirewallRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListFirewallRulesKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListFirewallRules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListResolverConfigsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverConfigs',
    '/#X-Amz-Target=Route53Resolver.ListResolverConfigs',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListResolverConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListResolverConfigs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListResolverConfigsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListResolverConfigs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListResolverDnssecConfigsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs',
    '/#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListResolverDnssecConfigs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListResolverDnssecConfigsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListResolverEndpointIpAddressesKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses',
    '/#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListResolverEndpointIpAddresses<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListResolverEndpointIpAddressesKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListResolverEndpointsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverEndpoints',
    '/#X-Amz-Target=Route53Resolver.ListResolverEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListResolverEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListResolverEndpointsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListResolverEndpoints'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations',
    '/#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs',
    '/#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListResolverQueryLogConfigs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListResolverQueryLogConfigsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListResolverRuleAssociationsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations',
    '/#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListResolverRuleAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListResolverRuleAssociationsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListResolverRulesKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListResolverRules',
    '/#X-Amz-Target=Route53Resolver.ListResolverRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListResolverRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListResolverRulesKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListResolverRules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverListTagsForResourceKey() {
  return [
    '#X-Amz-Target=Route53Resolver.ListTagsForResource',
    '/#X-Amz-Target=Route53Resolver.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyKey() {
  return [
    '#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy',
    '/#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyKey() {
  return [
    '#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy',
    '/#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverPutResolverRulePolicyKey() {
  return [
    '#X-Amz-Target=Route53Resolver.PutResolverRulePolicy',
    '/#X-Amz-Target=Route53Resolver.PutResolverRulePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverPutResolverRulePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverPutResolverRulePolicyKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverTagResourceKey() {
  return [
    '#X-Amz-Target=Route53Resolver.TagResource',
    '/#X-Amz-Target=Route53Resolver.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Route53Resolver.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverTagResourceKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverUntagResourceKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UntagResource',
    '/#X-Amz-Target=Route53Resolver.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverUpdateFirewallConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateFirewallConfig',
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverUpdateFirewallConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverUpdateFirewallConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverUpdateFirewallDomainsKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateFirewallDomains',
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallDomains',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverUpdateFirewallDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverUpdateFirewallDomainsKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverUpdateFirewallRuleKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateFirewallRule',
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverUpdateFirewallRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverUpdateFirewallRuleKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.UpdateFirewallRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation',
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverUpdateResolverConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateResolverConfig',
    '/#X-Amz-Target=Route53Resolver.UpdateResolverConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverUpdateResolverConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverConfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverUpdateResolverConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.UpdateResolverConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverUpdateResolverDnssecConfigKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig',
    '/#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverUpdateResolverDnssecConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverUpdateResolverDnssecConfigKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverUpdateResolverEndpointKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint',
    '/#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverUpdateResolverEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverUpdateResolverEndpointKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53ResolverUpdateResolverRuleKey() {
  return [
    '#X-Amz-Target=Route53Resolver.UpdateResolverRule',
    '/#X-Amz-Target=Route53Resolver.UpdateResolverRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53ResolverUpdateResolverRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53ResolverUpdateResolverRuleKey()
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
            (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Resolver.UpdateResolverRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
