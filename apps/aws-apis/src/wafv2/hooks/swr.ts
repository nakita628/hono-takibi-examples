import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSWAF_20190729AssociateWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL'] as const
}

export function getXAmzTargetAWSWAF_20190729CheckCapacityKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.CheckCapacity'] as const
}

export function getXAmzTargetAWSWAF_20190729CreateAPIKeyKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey'] as const
}

export function getXAmzTargetAWSWAF_20190729CreateIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.CreateIPSet'] as const
}

export function getXAmzTargetAWSWAF_20190729CreateRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAF_20190729CreateRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup'] as const
}

export function getXAmzTargetAWSWAF_20190729CreateWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.CreateWebACL'] as const
}

export function getXAmzTargetAWSWAF_20190729DeleteFirewallManagerRuleGroupsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups'] as const
}

export function getXAmzTargetAWSWAF_20190729DeleteIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet'] as const
}

export function getXAmzTargetAWSWAF_20190729DeleteLoggingConfigurationKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration'] as const
}

export function getXAmzTargetAWSWAF_20190729DeletePermissionPolicyKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy'] as const
}

export function getXAmzTargetAWSWAF_20190729DeleteRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAF_20190729DeleteRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup'] as const
}

export function getXAmzTargetAWSWAF_20190729DeleteWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL'] as const
}

export function getXAmzTargetAWSWAF_20190729DescribeManagedRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup'] as const
}

export function getXAmzTargetAWSWAF_20190729DisassociateWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL'] as const
}

export function getXAmzTargetAWSWAF_20190729GenerateMobileSdkReleaseUrlKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl'] as const
}

export function getXAmzTargetAWSWAF_20190729GetDecryptedAPIKeyKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey'] as const
}

export function getXAmzTargetAWSWAF_20190729GetIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetIPSet'] as const
}

export function getXAmzTargetAWSWAF_20190729GetLoggingConfigurationKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration'] as const
}

export function getXAmzTargetAWSWAF_20190729GetManagedRuleSetKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet'] as const
}

export function getXAmzTargetAWSWAF_20190729GetMobileSdkReleaseKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease'] as const
}

export function getXAmzTargetAWSWAF_20190729GetPermissionPolicyKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy'] as const
}

export function getXAmzTargetAWSWAF_20190729GetRateBasedStatementManagedKeysKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys'] as const
}

export function getXAmzTargetAWSWAF_20190729GetRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAF_20190729GetRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup'] as const
}

export function getXAmzTargetAWSWAF_20190729GetSampledRequestsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests'] as const
}

export function getXAmzTargetAWSWAF_20190729GetWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetWebACL'] as const
}

export function getXAmzTargetAWSWAF_20190729GetWebACLForResourceKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource'] as const
}

export function getXAmzTargetAWSWAF_20190729ListAPIKeysKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys'] as const
}

export function getXAmzTargetAWSWAF_20190729ListAvailableManagedRuleGroupVersionsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions'] as const
}

export function getXAmzTargetAWSWAF_20190729ListAvailableManagedRuleGroupsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups'] as const
}

export function getXAmzTargetAWSWAF_20190729ListIPSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListIPSets'] as const
}

export function getXAmzTargetAWSWAF_20190729ListLoggingConfigurationsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations'] as const
}

export function getXAmzTargetAWSWAF_20190729ListManagedRuleSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets'] as const
}

export function getXAmzTargetAWSWAF_20190729ListMobileSdkReleasesKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases'] as const
}

export function getXAmzTargetAWSWAF_20190729ListRegexPatternSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets'] as const
}

export function getXAmzTargetAWSWAF_20190729ListResourcesForWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL'] as const
}

export function getXAmzTargetAWSWAF_20190729ListRuleGroupsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups'] as const
}

export function getXAmzTargetAWSWAF_20190729ListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource'] as const
}

export function getXAmzTargetAWSWAF_20190729ListWebACLsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.ListWebACLs'] as const
}

export function getXAmzTargetAWSWAF_20190729PutLoggingConfigurationKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration'] as const
}

export function getXAmzTargetAWSWAF_20190729PutManagedRuleSetVersionsKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions'] as const
}

export function getXAmzTargetAWSWAF_20190729PutPermissionPolicyKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy'] as const
}

export function getXAmzTargetAWSWAF_20190729TagResourceKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.TagResource'] as const
}

export function getXAmzTargetAWSWAF_20190729UntagResourceKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.UntagResource'] as const
}

export function getXAmzTargetAWSWAF_20190729UpdateIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet'] as const
}

export function getXAmzTargetAWSWAF_20190729UpdateManagedRuleSetVersionExpiryDateKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate'] as const
}

export function getXAmzTargetAWSWAF_20190729UpdateRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAF_20190729UpdateRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup'] as const
}

export function getXAmzTargetAWSWAF_20190729UpdateWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL'] as const
}

export function getPostXAmzTargetAWSWAF20190729AssociateWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.AssociateWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.AssociateWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729AssociateWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729AssociateWebACLKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729CheckCapacityKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CheckCapacity',
    '/#X-Amz-Target=AWSWAF_20190729.CheckCapacity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729CheckCapacity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CheckCapacity']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CheckCapacity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729CheckCapacityKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.CheckCapacity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.CheckCapacity'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729CreateAPIKeyKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CreateAPIKey',
    '/#X-Amz-Target=AWSWAF_20190729.CreateAPIKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729CreateAPIKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729CreateAPIKeyKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729CreateIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CreateIPSet',
    '/#X-Amz-Target=AWSWAF_20190729.CreateIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729CreateIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateIPSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729CreateIPSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateIPSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.CreateIPSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729CreateRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729CreateRegexPatternSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729CreateRegexPatternSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729CreateRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup',
    '/#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729CreateRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729CreateRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729CreateWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CreateWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.CreateWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729CreateWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateWebACL']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729CreateWebACLKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.CreateWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729DeleteIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteIPSet',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729DeleteIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729DeleteIPSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729DeleteLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729DeleteLoggingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729DeleteLoggingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729DeletePermissionPolicyKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729DeletePermissionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729DeletePermissionPolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729DeleteRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729DeleteRegexPatternSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729DeleteRegexPatternSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729DeleteRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729DeleteRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729DeleteRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729DeleteWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729DeleteWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729DeleteWebACLKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729DescribeManagedRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup',
    '/#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729DescribeManagedRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729DescribeManagedRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729DisassociateWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729DisassociateWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729DisassociateWebACLKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl',
    '/#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetDecryptedAPIKeyKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey',
    '/#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetDecryptedAPIKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetDecryptedAPIKeyKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetIPSet',
    '/#X-Amz-Target=AWSWAF_20190729.GetIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetIPSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetIPSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetIPSet']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSWAF_20190729.GetIPSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetLoggingConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetLoggingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetManagedRuleSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet',
    '/#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetManagedRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetManagedRuleSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetMobileSdkReleaseKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease',
    '/#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetMobileSdkRelease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetMobileSdkReleaseKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetPermissionPolicyKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetPermissionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetPermissionPolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys',
    '/#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeys<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetRegexPatternSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetRegexPatternSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetRuleGroup',
    '/#X-Amz-Target=AWSWAF_20190729.GetRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetSampledRequestsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetSampledRequests',
    '/#X-Amz-Target=AWSWAF_20190729.GetSampledRequests',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetSampledRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetSampledRequestsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.GetWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACL']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetWebACLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACL']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSWAF_20190729.GetWebACL'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729GetWebACLForResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource',
    '/#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729GetWebACLForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729GetWebACLForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListAPIKeysKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListAPIKeys',
    '/#X-Amz-Target=AWSWAF_20190729.ListAPIKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListAPIKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListAPIKeysKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions',
    '/#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups',
    '/#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListIPSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListIPSets',
    '/#X-Amz-Target=AWSWAF_20190729.ListIPSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListIPSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListIPSets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListIPSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListIPSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListIPSets']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSWAF_20190729.ListIPSets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListLoggingConfigurationsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations',
    '/#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListLoggingConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListLoggingConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListManagedRuleSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets',
    '/#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListManagedRuleSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListManagedRuleSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListMobileSdkReleasesKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases',
    '/#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListMobileSdkReleases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListMobileSdkReleasesKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListRegexPatternSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets',
    '/#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListRegexPatternSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListRegexPatternSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListResourcesForWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListResourcesForWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListResourcesForWebACLKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListRuleGroupsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListRuleGroups',
    '/#X-Amz-Target=AWSWAF_20190729.ListRuleGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListRuleGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListRuleGroupsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListTagsForResource',
    '/#X-Amz-Target=AWSWAF_20190729.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729ListWebACLsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListWebACLs',
    '/#X-Amz-Target=AWSWAF_20190729.ListWebACLs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729ListWebACLs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListWebACLs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListWebACLs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729ListWebACLsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListWebACLs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.ListWebACLs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729PutLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729PutLoggingConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729PutLoggingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729PutManagedRuleSetVersionsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions',
    '/#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729PutManagedRuleSetVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729PutManagedRuleSetVersionsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729PutPermissionPolicyKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729PutPermissionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729PutPermissionPolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729TagResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.TagResource',
    '/#X-Amz-Target=AWSWAF_20190729.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729TagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729UntagResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UntagResource',
    '/#X-Amz-Target=AWSWAF_20190729.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729UpdateIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UpdateIPSet',
    '/#X-Amz-Target=AWSWAF_20190729.UpdateIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729UpdateIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729UpdateIPSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate',
    '/#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729UpdateRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729UpdateRegexPatternSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729UpdateRegexPatternSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729UpdateRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup',
    '/#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729UpdateRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729UpdateRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20190729UpdateWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UpdateWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.UpdateWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20190729UpdateWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20190729UpdateWebACLKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
