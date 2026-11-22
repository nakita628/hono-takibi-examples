import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostXAmzTargetAWSWAF20150824CreateByteMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateByteMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateByteMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateByteMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateByteMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateGeoMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateGeoMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateGeoMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateGeoMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateGeoMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateIPSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateIPSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateIPSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateIPSet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.CreateIPSet'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateIPSet<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateIPSet']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateIPSet']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateIPSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateRateBasedRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule',
    '/#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateRateBasedRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateRateBasedRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateRateBasedRule<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateRateBasedRuleMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateRegexMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateRegexMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateRegexMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateRegexMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateRegexMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateRegexPatternSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateRegexPatternSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateRule',
    '/#X-Amz-Target=AWSWAF_20150824.CreateRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.CreateRule'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateRule<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRule']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRule']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateRuleMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup',
    '/#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateRuleGroup<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateRuleGroupMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateSizeConstraintSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateSizeConstraintSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateSizeConstraintSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateSizeConstraintSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateSizeConstraintSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateWebACL',
    '/#X-Amz-Target=AWSWAF_20150824.CreateWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateWebACL'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateWebACL<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACL']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACL']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateWebACLMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateWebACLMigrationStackMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack',
    '/#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateWebACLMigrationStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateWebACLMigrationStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateWebACLMigrationStack<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateWebACLMigrationStackMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824CreateXssMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824CreateXssMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824CreateXssMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824CreateXssMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824CreateXssMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteByteMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteByteMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteByteMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteByteMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteByteMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteGeoMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteGeoMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteGeoMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteGeoMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteGeoMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteIPSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteIPSet<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteIPSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteLoggingConfiguration<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteLoggingConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeletePermissionPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeletePermissionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeletePermissionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeletePermissionPolicy<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeletePermissionPolicyMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteRateBasedRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteRateBasedRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteRateBasedRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteRateBasedRule<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteRateBasedRuleMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteRegexMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteRegexMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteRegexMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteRegexMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteRegexMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteRegexPatternSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteRegexPatternSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteRule',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.DeleteRule'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteRule<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRule']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRule']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteRuleMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteRuleGroup<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteRuleGroupMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteSizeConstraintSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteSizeConstraintSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteSizeConstraintSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteSizeConstraintSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteSizeConstraintSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteWebACL',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteWebACL<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteWebACLMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824DeleteXssMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824DeleteXssMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824DeleteXssMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824DeleteXssMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824DeleteXssMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetByteMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetByteMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetByteMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetByteMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetByteMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetChangeTokenMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetChangeToken',
    '/#X-Amz-Target=AWSWAF_20150824.GetChangeToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetChangeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetChangeTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetChangeToken'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetChangeToken<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeToken']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetChangeTokenMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetChangeTokenStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus',
    '/#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetChangeTokenStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetChangeTokenStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetChangeTokenStatus<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetChangeTokenStatusMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetGeoMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetGeoMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetGeoMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetGeoMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetGeoMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetIPSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetIPSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetIPSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetIPSet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.GetIPSet'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetIPSet<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetIPSet']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetIPSet']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetIPSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetLoggingConfiguration<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetLoggingConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetPermissionPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetPermissionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetPermissionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetPermissionPolicy<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetPermissionPolicyMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetRateBasedRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule',
    '/#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetRateBasedRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetRateBasedRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetRateBasedRule<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetRateBasedRuleMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeysMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys',
    '/#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeys<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys']['$post']
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
    getPostXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeysMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetRegexMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetRegexMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetRegexMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetRegexMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetRegexMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetRegexPatternSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetRegexPatternSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRule',
    '/#X-Amz-Target=AWSWAF_20150824.GetRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.GetRule'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetRule<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRule']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRule']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetRuleMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetRuleGroup',
    '/#X-Amz-Target=AWSWAF_20150824.GetRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetRuleGroup<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetRuleGroupMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetSampledRequestsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetSampledRequests',
    '/#X-Amz-Target=AWSWAF_20150824.GetSampledRequests',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetSampledRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetSampledRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetSampledRequests<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetSampledRequestsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetSizeConstraintSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetSizeConstraintSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetSizeConstraintSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetSizeConstraintSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetSizeConstraintSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetSqlInjectionMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetSqlInjectionMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetSqlInjectionMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetSqlInjectionMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetSqlInjectionMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetWebACL',
    '/#X-Amz-Target=AWSWAF_20150824.GetWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetWebACL']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetWebACL']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.GetWebACL'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetWebACL<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetWebACL']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetWebACL']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetWebACLMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824GetXssMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824GetXssMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824GetXssMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824GetXssMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824GetXssMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup',
    '/#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroup<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup']['$post']
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
    getPostXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListByteMatchSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListByteMatchSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListByteMatchSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListByteMatchSets<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListByteMatchSetsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListGeoMatchSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListGeoMatchSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListGeoMatchSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListGeoMatchSets<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListGeoMatchSetsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListIPSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListIPSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListIPSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListIPSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListIPSets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListIPSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListIPSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListIPSets']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.ListIPSets'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListIPSets<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListIPSets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListIPSets']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListIPSetsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListLoggingConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations',
    '/#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListLoggingConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListLoggingConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListLoggingConfigurations<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListLoggingConfigurationsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListRateBasedRulesMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules',
    '/#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListRateBasedRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListRateBasedRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListRateBasedRules<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListRateBasedRulesMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListRegexMatchSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListRegexMatchSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListRegexMatchSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListRegexMatchSets<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListRegexMatchSetsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListRegexPatternSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListRegexPatternSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListRegexPatternSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListRegexPatternSets<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListRegexPatternSetsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListRuleGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListRuleGroups',
    '/#X-Amz-Target=AWSWAF_20150824.ListRuleGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListRuleGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListRuleGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListRuleGroups<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListRuleGroupsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListRulesMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListRules',
    '/#X-Amz-Target=AWSWAF_20150824.ListRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRules']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.ListRules'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListRules<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRules']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRules']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListRulesMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListSizeConstraintSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListSizeConstraintSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListSizeConstraintSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListSizeConstraintSets<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListSizeConstraintSetsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListSqlInjectionMatchSets<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListSubscribedRuleGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups',
    '/#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListSubscribedRuleGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListSubscribedRuleGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListSubscribedRuleGroups<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListSubscribedRuleGroupsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListTagsForResource',
    '/#X-Amz-Target=AWSWAF_20150824.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListWebACLsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListWebACLs',
    '/#X-Amz-Target=AWSWAF_20150824.ListWebACLs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListWebACLsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListWebACLs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListWebACLs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListWebACLsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListWebACLs']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.ListWebACLs'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListWebACLs<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListWebACLs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListWebACLs']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListWebACLsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824ListXssMatchSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets',
    '/#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824ListXssMatchSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824ListXssMatchSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824ListXssMatchSets<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824ListXssMatchSetsMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824PutLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824PutLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824PutLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824PutLoggingConfiguration<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824PutLoggingConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824PutPermissionPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824PutPermissionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824PutPermissionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824PutPermissionPolicy<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824PutPermissionPolicyMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.TagResource',
    '/#X-Amz-Target=AWSWAF_20150824.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824TagResource<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.TagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.TagResource']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824TagResourceMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UntagResource',
    '/#X-Amz-Target=AWSWAF_20150824.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UntagResource<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UntagResource']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UntagResourceMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateByteMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateByteMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateByteMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateByteMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateByteMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateGeoMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateGeoMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateGeoMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateGeoMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateGeoMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateIPSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateIPSet<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateIPSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateRateBasedRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateRateBasedRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateRateBasedRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateRateBasedRule<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateRateBasedRuleMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateRegexMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateRegexMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateRegexMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateRegexMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateRegexMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateRegexPatternSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateRegexPatternSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateRule',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRule']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20150824.UpdateRule'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateRule<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRule']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRule']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateRuleMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateRuleGroup<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateRuleGroupMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateSizeConstraintSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateSizeConstraintSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateSizeConstraintSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateSizeConstraintSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateSizeConstraintSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSetMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateWebACL',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateWebACL<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateWebACLMutationOptions<
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

export function getPostXAmzTargetAWSWAF20150824UpdateXssMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet',
    '/#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20150824UpdateXssMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20150824UpdateXssMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAF20150824UpdateXssMatchSet<
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
                    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAF20150824UpdateXssMatchSetMutationOptions<
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
