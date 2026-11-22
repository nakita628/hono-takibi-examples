import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSWAFRegional_20161128AssociateWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateByteMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateGeoMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateRateBasedRuleKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateRegexMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateRuleKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateSizeConstraintSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateSqlInjectionMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateWebACLMigrationStackKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128CreateXssMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteByteMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteGeoMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteLoggingConfigurationKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeletePermissionPolicyKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteRateBasedRuleKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteRegexMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteRuleKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteSizeConstraintSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteSqlInjectionMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DeleteXssMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128DisassociateWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetByteMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetChangeTokenKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetChangeTokenStatusKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetGeoMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetLoggingConfigurationKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetPermissionPolicyKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetRateBasedRuleKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetRateBasedRuleManagedKeysKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetRegexMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetRuleKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetSampledRequestsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetSizeConstraintSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetSqlInjectionMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetWebACLForResourceKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128GetXssMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListActivatedRulesInRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListByteMatchSetsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListGeoMatchSetsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListIPSetsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListLoggingConfigurationsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListRateBasedRulesKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListRegexMatchSetsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListRegexPatternSetsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListResourcesForWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListRuleGroupsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListRulesKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListSizeConstraintSetsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListSqlInjectionMatchSetsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListSubscribedRuleGroupsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListWebACLsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128ListXssMatchSetsKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128PutLoggingConfigurationKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128PutPermissionPolicyKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128TagResourceKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UntagResourceKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateByteMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateGeoMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateIPSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateRateBasedRuleKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateRegexMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateRegexPatternSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateRuleKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateRuleGroupKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateSizeConstraintSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateSqlInjectionMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateWebACLKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL'] as const
}

export function getXAmzTargetAWSWAFRegional_20161128UpdateXssMatchSetKey() {
  return ['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet'] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128AssociateWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128AssociateWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128AssociateWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128AssociateWebACL<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128AssociateWebACLMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateByteMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateByteMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateByteMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateByteMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128CreateByteMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateGeoMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateGeoMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateGeoMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateGeoMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128CreateGeoMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateIPSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128CreateIPSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRateBasedRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRateBasedRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateRateBasedRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateRateBasedRule<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128CreateRateBasedRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRegexMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRegexMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateRegexMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateRegexMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128CreateRegexMatchSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateRegexPatternSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128CreateRegexPatternSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateRule<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128CreateRuleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateRuleGroup<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128CreateRuleGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateWebACL<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128CreateWebACLMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStack<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateXssMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateXssMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128CreateXssMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateXssMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128CreateXssMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteByteMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteByteMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteByteMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteByteMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128DeleteByteMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteIPSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128DeleteIPSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteLoggingConfiguration<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeletePermissionPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeletePermissionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeletePermissionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeletePermissionPolicy<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128DeletePermissionPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteRateBasedRule<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteRule<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128DeleteRuleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteRuleGroup<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128DeleteRuleGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteWebACL<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128DeleteWebACLMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteXssMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteXssMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DeleteXssMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteXssMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128DeleteXssMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128DisassociateWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128DisassociateWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128DisassociateWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128DisassociateWebACL<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128DisassociateWebACLMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetByteMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetByteMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetByteMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetByteMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetByteMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetChangeToken<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetChangeTokenStatus<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetGeoMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetGeoMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetGeoMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetGeoMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetGeoMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetIPSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetIPSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetLoggingConfiguration<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128GetLoggingConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetPermissionPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetPermissionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetPermissionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetPermissionPolicy<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128GetPermissionPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRateBasedRule<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeys<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRegexMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRegexMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetRegexMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRegexMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetRegexMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRegexPatternSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetRegexPatternSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRule<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetRuleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRuleGroup<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetRuleGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetSampledRequestsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetSampledRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetSampledRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetSampledRequests<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetSampledRequestsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetSizeConstraintSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetSizeConstraintSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetSizeConstraintSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetSizeConstraintSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128GetSizeConstraintSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetWebACL<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetWebACLMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetWebACLForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetWebACLForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetWebACLForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetWebACLForResource<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128GetWebACLForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128GetXssMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128GetXssMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128GetXssMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128GetXssMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128GetXssMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroup<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListByteMatchSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListByteMatchSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListByteMatchSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListByteMatchSets<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128ListByteMatchSetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListGeoMatchSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListGeoMatchSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListGeoMatchSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListGeoMatchSets<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128ListGeoMatchSetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListIPSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListIPSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListIPSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListIPSets<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128ListIPSetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListLoggingConfigurations<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRateBasedRulesMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRateBasedRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListRateBasedRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListRateBasedRules<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128ListRateBasedRulesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRegexMatchSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRegexMatchSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListRegexMatchSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListRegexMatchSets<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128ListRegexMatchSetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRegexPatternSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRegexPatternSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListRegexPatternSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListRegexPatternSets<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128ListRegexPatternSetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListResourcesForWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListResourcesForWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListResourcesForWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListResourcesForWebACL<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128ListResourcesForWebACLMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRuleGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRuleGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListRuleGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListRuleGroups<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128ListRuleGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRulesMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListRules',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListRules<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128ListRulesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListSizeConstraintSets<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSets<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroups<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128ListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListWebACLsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListWebACLsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListWebACLsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListWebACLs<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128ListWebACLsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128ListXssMatchSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128ListXssMatchSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128ListXssMatchSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128ListXssMatchSets<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128ListXssMatchSetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128PutLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128PutLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128PutLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128PutLoggingConfiguration<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128PutLoggingConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128PutPermissionPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128PutPermissionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128PutPermissionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128PutPermissionPolicy<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128PutPermissionPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.TagResource',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128TagResource<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128TagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UntagResource<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128UntagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateByteMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateByteMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateByteMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateByteMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128UpdateByteMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateIPSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128UpdateIPSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateRateBasedRule<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateRule<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128UpdateRuleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateRuleGroup<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128UpdateRuleGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet']['$post']
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
    getPostXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateWebACL<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128UpdateWebACLMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateXssMatchSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateXssMatchSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAFRegional20161128UpdateXssMatchSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateXssMatchSet<
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
                  (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSWAFRegional20161128UpdateXssMatchSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
