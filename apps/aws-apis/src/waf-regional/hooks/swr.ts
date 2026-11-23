import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSWAFRegional20161128AssociateWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128AssociateWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128AssociateWebACLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateByteMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateByteMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateByteMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateGeoMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateGeoMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateGeoMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateIPSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRateBasedRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateRateBasedRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateRateBasedRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRegexMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateRegexMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateRegexMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateRegexPatternSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateRegexPatternSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateRuleGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateWebACLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128CreateXssMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128CreateXssMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128CreateXssMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteByteMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteByteMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteByteMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteIPSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteLoggingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeletePermissionPolicyKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeletePermissionPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeletePermissionPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteRateBasedRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteRuleGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteWebACLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DeleteXssMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DeleteXssMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DeleteXssMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128DisassociateWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128DisassociateWebACL<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128DisassociateWebACLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetByteMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetByteMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetByteMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetChangeToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenStatusKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetChangeTokenStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetChangeTokenStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetGeoMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetGeoMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetGeoMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetIPSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetLoggingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetLoggingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetPermissionPolicyKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetPermissionPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetPermissionPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRateBasedRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeys<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRegexMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRegexMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetRegexMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRegexPatternSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetRegexPatternSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetRuleGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetSampledRequestsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetSampledRequests<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetSampledRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetSizeConstraintSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetSizeConstraintSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetSizeConstraintSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetWebACLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetWebACLForResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetWebACLForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetWebACLForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128GetXssMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128GetXssMatchSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128GetXssMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListByteMatchSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListByteMatchSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListByteMatchSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListGeoMatchSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListGeoMatchSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListGeoMatchSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListIPSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListIPSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListIPSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListLoggingConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRateBasedRulesKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListRateBasedRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListRateBasedRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRegexMatchSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListRegexMatchSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListRegexMatchSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRegexPatternSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListRegexPatternSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListRegexPatternSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListResourcesForWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListResourcesForWebACL<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListResourcesForWebACLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRuleGroupsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListRuleGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListRuleGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListRulesKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListRules',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListSizeConstraintSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListWebACLsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListWebACLs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListWebACLsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128ListXssMatchSetsKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128ListXssMatchSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128ListXssMatchSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128PutLoggingConfigurationKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128PutLoggingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128PutLoggingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128PutPermissionPolicyKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128PutPermissionPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128PutPermissionPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128TagResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.TagResource',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128TagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UntagResourceKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateByteMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateByteMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateByteMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateIPSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateIPSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateIPSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateRateBasedRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRuleKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateRuleGroupKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateRuleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateRuleGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateWebACLKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateWebACL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateWebACLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSWAFRegional20161128UpdateXssMatchSetKey() {
  return [
    '#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet',
    '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSWAFRegional20161128UpdateXssMatchSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSWAFRegional20161128UpdateXssMatchSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
