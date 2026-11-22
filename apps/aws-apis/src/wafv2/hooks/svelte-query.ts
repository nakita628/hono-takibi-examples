import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getPostXAmzTargetAWSWAF20190729AssociateWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.AssociateWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.AssociateWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729AssociateWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729AssociateWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729AssociateWebACL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729AssociateWebACLMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729CheckCapacityMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CheckCapacity',
    '/#X-Amz-Target=AWSWAF_20190729.CheckCapacity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729CheckCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CheckCapacity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729CheckCapacityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.CheckCapacity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.CheckCapacity'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729CheckCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CheckCapacity']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729CheckCapacityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729CreateAPIKeyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CreateAPIKey',
    '/#X-Amz-Target=AWSWAF_20190729.CreateAPIKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729CreateAPIKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729CreateAPIKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729CreateAPIKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729CreateAPIKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729CreateIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CreateIPSet',
    '/#X-Amz-Target=AWSWAF_20190729.CreateIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729CreateIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateIPSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateIPSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729CreateIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateIPSet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20190729.CreateIPSet'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729CreateIPSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateIPSet']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateIPSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729CreateIPSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729CreateRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729CreateRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729CreateRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729CreateRegexPatternSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729CreateRegexPatternSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729CreateRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup',
    '/#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729CreateRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729CreateRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729CreateRuleGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729CreateRuleGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729CreateWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.CreateWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.CreateWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729CreateWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729CreateWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.CreateWebACL'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729CreateWebACL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateWebACL']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729CreateWebACLMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729DeleteIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteIPSet',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729DeleteIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729DeleteIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729DeleteIPSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729DeleteIPSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729DeleteLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729DeleteLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729DeleteLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729DeleteLoggingConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSWAF20190729DeleteLoggingConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729DeletePermissionPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729DeletePermissionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729DeletePermissionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729DeletePermissionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729DeletePermissionPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729DeleteRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729DeleteRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729DeleteRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729DeleteRegexPatternSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729DeleteRegexPatternSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729DeleteRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729DeleteRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729DeleteRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729DeleteRuleGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729DeleteRuleGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729DeleteWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DeleteWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.DeleteWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729DeleteWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729DeleteWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729DeleteWebACL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729DeleteWebACLMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729DescribeManagedRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup',
    '/#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729DescribeManagedRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729DescribeManagedRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729DescribeManagedRuleGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729DescribeManagedRuleGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729DisassociateWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729DisassociateWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729DisassociateWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729DisassociateWebACL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729DisassociateWebACLMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl',
    '/#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetDecryptedAPIKeyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey',
    '/#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetDecryptedAPIKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetDecryptedAPIKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetDecryptedAPIKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetDecryptedAPIKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetIPSet',
    '/#X-Amz-Target=AWSWAF_20190729.GetIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetIPSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetIPSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetIPSet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20190729.GetIPSet'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetIPSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetIPSet']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetIPSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetIPSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetLoggingConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetLoggingConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetManagedRuleSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet',
    '/#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetManagedRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetManagedRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetManagedRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetManagedRuleSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetMobileSdkReleaseMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease',
    '/#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetMobileSdkReleaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetMobileSdkReleaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetMobileSdkRelease<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetMobileSdkReleaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetPermissionPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetPermissionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetPermissionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetPermissionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetPermissionPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys',
    '/#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetRegexPatternSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetRegexPatternSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetRuleGroup',
    '/#X-Amz-Target=AWSWAF_20190729.GetRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetRuleGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetRuleGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetSampledRequestsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetSampledRequests',
    '/#X-Amz-Target=AWSWAF_20190729.GetSampledRequests',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetSampledRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetSampledRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetSampledRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetSampledRequestsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.GetWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACL']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACL']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20190729.GetWebACL'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetWebACL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACL']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACL']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetWebACLMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729GetWebACLForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource',
    '/#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729GetWebACLForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729GetWebACLForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729GetWebACLForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729GetWebACLForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListAPIKeysMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListAPIKeys',
    '/#X-Amz-Target=AWSWAF_20190729.ListAPIKeys',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListAPIKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListAPIKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListAPIKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729ListAPIKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions',
    '/#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups',
    '/#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListIPSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListIPSets',
    '/#X-Amz-Target=AWSWAF_20190729.ListIPSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListIPSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListIPSets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListIPSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListIPSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListIPSets']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20190729.ListIPSets'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListIPSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListIPSets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListIPSets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729ListIPSetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListLoggingConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations',
    '/#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListLoggingConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListLoggingConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListLoggingConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSWAF20190729ListLoggingConfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListManagedRuleSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets',
    '/#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListManagedRuleSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListManagedRuleSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListManagedRuleSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729ListManagedRuleSetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListMobileSdkReleasesMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases',
    '/#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListMobileSdkReleasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListMobileSdkReleasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListMobileSdkReleases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729ListMobileSdkReleasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListRegexPatternSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets',
    '/#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListRegexPatternSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListRegexPatternSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListRegexPatternSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729ListRegexPatternSetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListResourcesForWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListResourcesForWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListResourcesForWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListResourcesForWebACL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729ListResourcesForWebACLMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListRuleGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListRuleGroups',
    '/#X-Amz-Target=AWSWAF_20190729.ListRuleGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListRuleGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListRuleGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListRuleGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729ListRuleGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListTagsForResource',
    '/#X-Amz-Target=AWSWAF_20190729.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729ListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729ListWebACLsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.ListWebACLs',
    '/#X-Amz-Target=AWSWAF_20190729.ListWebACLs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729ListWebACLsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListWebACLs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListWebACLs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729ListWebACLsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListWebACLs']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20190729.ListWebACLs'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729ListWebACLs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListWebACLs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListWebACLs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729ListWebACLsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729PutLoggingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration',
    '/#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729PutLoggingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729PutLoggingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729PutLoggingConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729PutLoggingConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729PutManagedRuleSetVersionsMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions',
    '/#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729PutManagedRuleSetVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729PutManagedRuleSetVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729PutManagedRuleSetVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSWAF20190729PutManagedRuleSetVersionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729PutPermissionPolicyMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy',
    '/#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729PutPermissionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729PutPermissionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729PutPermissionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729PutPermissionPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.TagResource',
    '/#X-Amz-Target=AWSWAF_20190729.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20190729.TagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.TagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729TagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UntagResource',
    '/#X-Amz-Target=AWSWAF_20190729.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729UntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729UpdateIPSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UpdateIPSet',
    '/#X-Amz-Target=AWSWAF_20190729.UpdateIPSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729UpdateIPSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729UpdateIPSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729UpdateIPSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729UpdateIPSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate',
    '/#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729UpdateRegexPatternSetMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet',
    '/#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729UpdateRegexPatternSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729UpdateRegexPatternSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729UpdateRegexPatternSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729UpdateRegexPatternSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729UpdateRuleGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup',
    '/#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729UpdateRuleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729UpdateRuleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729UpdateRuleGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729UpdateRuleGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSWAF20190729UpdateWebACLMutationKey() {
  return [
    '#X-Amz-Target=AWSWAF_20190729.UpdateWebACL',
    '/#X-Amz-Target=AWSWAF_20190729.UpdateWebACL',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSWAF20190729UpdateWebACLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSWAF20190729UpdateWebACLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSWAF20190729UpdateWebACL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSWAF20190729UpdateWebACLMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
