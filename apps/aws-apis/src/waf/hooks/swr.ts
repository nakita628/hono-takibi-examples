import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSWAF_20150824CreateByteMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateGeoMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateIPSet'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateRateBasedRuleKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateRegexMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateRuleKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateRule'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateSizeConstraintSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateSqlInjectionMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateWebACL'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateWebACLMigrationStackKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack'] as const
}

export function getXAmzTargetAWSWAF_20150824CreateXssMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteByteMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteGeoMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteLoggingConfigurationKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration'] as const
}

export function getXAmzTargetAWSWAF_20150824DeletePermissionPolicyKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteRateBasedRuleKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteRegexMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteRuleKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteRule'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteSizeConstraintSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteSqlInjectionMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL'] as const
}

export function getXAmzTargetAWSWAF_20150824DeleteXssMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824GetByteMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824GetChangeTokenKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetChangeToken'] as const
}

export function getXAmzTargetAWSWAF_20150824GetChangeTokenStatusKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus'] as const
}

export function getXAmzTargetAWSWAF_20150824GetGeoMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824GetIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetIPSet'] as const
}

export function getXAmzTargetAWSWAF_20150824GetLoggingConfigurationKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration'] as const
}

export function getXAmzTargetAWSWAF_20150824GetPermissionPolicyKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy'] as const
}

export function getXAmzTargetAWSWAF_20150824GetRateBasedRuleKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule'] as const
}

export function getXAmzTargetAWSWAF_20150824GetRateBasedRuleManagedKeysKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys'] as const
}

export function getXAmzTargetAWSWAF_20150824GetRegexMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824GetRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAF_20150824GetRuleKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetRule'] as const
}

export function getXAmzTargetAWSWAF_20150824GetRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup'] as const
}

export function getXAmzTargetAWSWAF_20150824GetSampledRequestsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests'] as const
}

export function getXAmzTargetAWSWAF_20150824GetSizeConstraintSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet'] as const
}

export function getXAmzTargetAWSWAF_20150824GetSqlInjectionMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824GetWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetWebACL'] as const
}

export function getXAmzTargetAWSWAF_20150824GetXssMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824ListActivatedRulesInRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup'] as const
}

export function getXAmzTargetAWSWAF_20150824ListByteMatchSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets'] as const
}

export function getXAmzTargetAWSWAF_20150824ListGeoMatchSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets'] as const
}

export function getXAmzTargetAWSWAF_20150824ListIPSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListIPSets'] as const
}

export function getXAmzTargetAWSWAF_20150824ListLoggingConfigurationsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations'] as const
}

export function getXAmzTargetAWSWAF_20150824ListRateBasedRulesKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules'] as const
}

export function getXAmzTargetAWSWAF_20150824ListRegexMatchSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets'] as const
}

export function getXAmzTargetAWSWAF_20150824ListRegexPatternSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets'] as const
}

export function getXAmzTargetAWSWAF_20150824ListRuleGroupsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups'] as const
}

export function getXAmzTargetAWSWAF_20150824ListRulesKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListRules'] as const
}

export function getXAmzTargetAWSWAF_20150824ListSizeConstraintSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets'] as const
}

export function getXAmzTargetAWSWAF_20150824ListSqlInjectionMatchSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets'] as const
}

export function getXAmzTargetAWSWAF_20150824ListSubscribedRuleGroupsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups'] as const
}

export function getXAmzTargetAWSWAF_20150824ListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource'] as const
}

export function getXAmzTargetAWSWAF_20150824ListWebACLsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListWebACLs'] as const
}

export function getXAmzTargetAWSWAF_20150824ListXssMatchSetsKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets'] as const
}

export function getXAmzTargetAWSWAF_20150824PutLoggingConfigurationKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration'] as const
}

export function getXAmzTargetAWSWAF_20150824PutPermissionPolicyKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy'] as const
}

export function getXAmzTargetAWSWAF_20150824TagResourceKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.TagResource'] as const
}

export function getXAmzTargetAWSWAF_20150824UntagResourceKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UntagResource'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateByteMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateGeoMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateRateBasedRuleKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateRegexMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateRuleKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateRule'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateSizeConstraintSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateSqlInjectionMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL'] as const
}

export function getXAmzTargetAWSWAF_20150824UpdateXssMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet'] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateByteMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateByteMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateByteMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateGeoMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateGeoMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateGeoMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateIPSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateIPSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateIPSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateIPSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateIPSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateRateBasedRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule',
    '/#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateRateBasedRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateRateBasedRuleKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateRegexMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateRegexMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateRegexMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateRegexPatternSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateRegexPatternSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateRule',
    '/#X-Amz-Target=AWSWAF_20150824.CreateRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateRuleKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRule']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSWAF_20150824.CreateRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup',
    '/#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateSizeConstraintSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateSizeConstraintSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateSizeConstraintSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateWebACL',
    '/#X-Amz-Target=AWSWAF_20150824.CreateWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACL']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateWebACLKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateWebACLMigrationStackKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack',
    '/#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateWebACLMigrationStack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateWebACLMigrationStackKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824CreateXssMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824CreateXssMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824CreateXssMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteByteMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteByteMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteByteMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteGeoMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteGeoMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteGeoMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteIPSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteIPSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteLoggingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteLoggingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeletePermissionPolicyKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeletePermissionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeletePermissionPolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteRateBasedRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteRateBasedRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteRateBasedRuleKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteRegexMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteRegexMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteRegexMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteRegexPatternSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteRegexPatternSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteRule',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteRuleKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRule']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSWAF_20150824.DeleteRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteSizeConstraintSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteSizeConstraintSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteSizeConstraintSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteWebACL',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteWebACLKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824DeleteXssMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824DeleteXssMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824DeleteXssMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetByteMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetByteMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetByteMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetChangeTokenKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetChangeToken',
    '/#X-Amz-Target=AWSWAF_20150824.GetChangeToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetChangeToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeToken']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetChangeTokenKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetChangeToken'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetChangeTokenStatusKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus',
    '/#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetChangeTokenStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetChangeTokenStatusKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetGeoMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetGeoMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetGeoMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetIPSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetIPSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetIPSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetIPSet']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSWAF_20150824.GetIPSet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetLoggingConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetLoggingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetPermissionPolicyKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetPermissionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetPermissionPolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetRateBasedRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule',
    '/#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetRateBasedRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetRateBasedRuleKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeysKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys',
    '/#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeys<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeysKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetRegexMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetRegexMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetRegexMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetRegexPatternSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetRegexPatternSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRule',
    '/#X-Amz-Target=AWSWAF_20150824.GetRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRule']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AWSWAF_20150824.GetRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRuleGroup',
    '/#X-Amz-Target=AWSWAF_20150824.GetRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetSampledRequestsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetSampledRequests',
    '/#X-Amz-Target=AWSWAF_20150824.GetSampledRequests',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetSampledRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetSampledRequestsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetSizeConstraintSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetSizeConstraintSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetSizeConstraintSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetSqlInjectionMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetSqlInjectionMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetSqlInjectionMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetWebACL',
    '/#X-Amz-Target=AWSWAF_20150824.GetWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetWebACL']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetWebACLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetWebACL']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSWAF_20150824.GetWebACL'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824GetXssMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824GetXssMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824GetXssMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup',
    '/#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListByteMatchSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListByteMatchSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListByteMatchSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListGeoMatchSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListGeoMatchSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListGeoMatchSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListIPSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListIPSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListIPSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListIPSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListIPSets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListIPSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListIPSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListIPSets']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSWAF_20150824.ListIPSets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListLoggingConfigurationsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations',
    '/#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListLoggingConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListLoggingConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListRateBasedRulesKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules',
    '/#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListRateBasedRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListRateBasedRulesKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListRegexMatchSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListRegexMatchSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListRegexMatchSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListRegexPatternSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListRegexPatternSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListRegexPatternSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListRuleGroupsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListRuleGroups',
    '/#X-Amz-Target=AWSWAF_20150824.ListRuleGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListRuleGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListRuleGroupsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListRulesKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListRules',
    '/#X-Amz-Target=AWSWAF_20150824.ListRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRules']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSWAF_20150824.ListRules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListSizeConstraintSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListSizeConstraintSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListSizeConstraintSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListSqlInjectionMatchSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListSubscribedRuleGroupsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups',
    '/#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListSubscribedRuleGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListSubscribedRuleGroupsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListTagsForResource',
    '/#X-Amz-Target=AWSWAF_20150824.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListWebACLsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListWebACLs',
    '/#X-Amz-Target=AWSWAF_20150824.ListWebACLs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListWebACLs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListWebACLs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListWebACLs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListWebACLsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListWebACLs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListWebACLs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824ListXssMatchSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824ListXssMatchSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824ListXssMatchSetsKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824PutLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824PutLoggingConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824PutLoggingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824PutPermissionPolicyKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824PutPermissionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824PutPermissionPolicyKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824TagResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.TagResource',
    '/#X-Amz-Target=AWSWAF_20150824.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824TagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UntagResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UntagResource',
    '/#X-Amz-Target=AWSWAF_20150824.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateByteMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateByteMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateByteMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateGeoMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateGeoMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateGeoMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateIPSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateIPSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateRateBasedRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateRateBasedRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateRateBasedRuleKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateRegexMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateRegexMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateRegexMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateRegexPatternSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateRegexPatternSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateRule',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateRuleKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRule']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSWAF_20150824.UpdateRule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateRuleGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateSizeConstraintSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateSizeConstraintSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateSizeConstraintSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateWebACL',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateWebACLKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAF20150824UpdateXssMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAF20150824UpdateXssMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAF20150824UpdateXssMatchSetKey()
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
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
