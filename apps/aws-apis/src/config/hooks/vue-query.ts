import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigKey() {
  return ['#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig'] as const
}

export function getXAmzTargetStarlingDoveServiceBatchGetResourceConfigKey() {
  return ['#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteConfigRuleKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteConfigRule'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteConformancePackKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteConformancePack'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteDeliveryChannelKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteEvaluationResultsKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack'] as const
}

export function getXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteRemediationConfigurationKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteResourceConfigKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteResourceConfig'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteRetentionConfigurationKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration'] as const
}

export function getXAmzTargetStarlingDoveServiceDeleteStoredQueryKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeleteStoredQuery'] as const
}

export function getXAmzTargetStarlingDoveServiceDeliverConfigSnapshotKey() {
  return ['#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks',
  ] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeComplianceByResourceKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeConfigRulesKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeConfigRules'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeConformancePackStatusKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeConformancePacksKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeConformancePacks'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeDeliveryChannelsKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeRemediationExceptionsKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus'] as const
}

export function getXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsKey() {
  return ['#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations'] as const
}

export function getXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule'] as const
}

export function getXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary'] as const
}

export function getXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary'] as const
}

export function getXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts'] as const
}

export function getXAmzTargetStarlingDoveServiceGetAggregateResourceConfigKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig'] as const
}

export function getXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule'] as const
}

export function getXAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource'] as const
}

export function getXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule'] as const
}

export function getXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType'] as const
}

export function getXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails'] as const
}

export function getXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary'] as const
}

export function getXAmzTargetStarlingDoveServiceGetCustomRulePolicyKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy'] as const
}

export function getXAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts'] as const
}

export function getXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus'] as const
}

export function getXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus'] as const
}

export function getXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy'] as const
}

export function getXAmzTargetStarlingDoveServiceGetResourceConfigHistoryKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory'] as const
}

export function getXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary'] as const
}

export function getXAmzTargetStarlingDoveServiceGetStoredQueryKey() {
  return ['#X-Amz-Target=StarlingDoveService.GetStoredQuery'] as const
}

export function getXAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesKey() {
  return ['#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources'] as const
}

export function getXAmzTargetStarlingDoveServiceListConformancePackComplianceScoresKey() {
  return ['#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores'] as const
}

export function getXAmzTargetStarlingDoveServiceListDiscoveredResourcesKey() {
  return ['#X-Amz-Target=StarlingDoveService.ListDiscoveredResources'] as const
}

export function getXAmzTargetStarlingDoveServiceListResourceEvaluationsKey() {
  return ['#X-Amz-Target=StarlingDoveService.ListResourceEvaluations'] as const
}

export function getXAmzTargetStarlingDoveServiceListStoredQueriesKey() {
  return ['#X-Amz-Target=StarlingDoveService.ListStoredQueries'] as const
}

export function getXAmzTargetStarlingDoveServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=StarlingDoveService.ListTagsForResource'] as const
}

export function getXAmzTargetStarlingDoveServicePutAggregationAuthorizationKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization'] as const
}

export function getXAmzTargetStarlingDoveServicePutConfigRuleKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutConfigRule'] as const
}

export function getXAmzTargetStarlingDoveServicePutConfigurationAggregatorKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator'] as const
}

export function getXAmzTargetStarlingDoveServicePutConfigurationRecorderKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder'] as const
}

export function getXAmzTargetStarlingDoveServicePutConformancePackKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutConformancePack'] as const
}

export function getXAmzTargetStarlingDoveServicePutDeliveryChannelKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutDeliveryChannel'] as const
}

export function getXAmzTargetStarlingDoveServicePutEvaluationsKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutEvaluations'] as const
}

export function getXAmzTargetStarlingDoveServicePutExternalEvaluationKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutExternalEvaluation'] as const
}

export function getXAmzTargetStarlingDoveServicePutOrganizationConfigRuleKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule'] as const
}

export function getXAmzTargetStarlingDoveServicePutOrganizationConformancePackKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack'] as const
}

export function getXAmzTargetStarlingDoveServicePutRemediationConfigurationsKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations'] as const
}

export function getXAmzTargetStarlingDoveServicePutRemediationExceptionsKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutRemediationExceptions'] as const
}

export function getXAmzTargetStarlingDoveServicePutResourceConfigKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutResourceConfig'] as const
}

export function getXAmzTargetStarlingDoveServicePutRetentionConfigurationKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration'] as const
}

export function getXAmzTargetStarlingDoveServicePutStoredQueryKey() {
  return ['#X-Amz-Target=StarlingDoveService.PutStoredQuery'] as const
}

export function getXAmzTargetStarlingDoveServiceSelectAggregateResourceConfigKey() {
  return ['#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig'] as const
}

export function getXAmzTargetStarlingDoveServiceSelectResourceConfigKey() {
  return ['#X-Amz-Target=StarlingDoveService.SelectResourceConfig'] as const
}

export function getXAmzTargetStarlingDoveServiceStartConfigRulesEvaluationKey() {
  return ['#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation'] as const
}

export function getXAmzTargetStarlingDoveServiceStartConfigurationRecorderKey() {
  return ['#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder'] as const
}

export function getXAmzTargetStarlingDoveServiceStartRemediationExecutionKey() {
  return ['#X-Amz-Target=StarlingDoveService.StartRemediationExecution'] as const
}

export function getXAmzTargetStarlingDoveServiceStartResourceEvaluationKey() {
  return ['#X-Amz-Target=StarlingDoveService.StartResourceEvaluation'] as const
}

export function getXAmzTargetStarlingDoveServiceStopConfigurationRecorderKey() {
  return ['#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder'] as const
}

export function getXAmzTargetStarlingDoveServiceTagResourceKey() {
  return ['#X-Amz-Target=StarlingDoveService.TagResource'] as const
}

export function getXAmzTargetStarlingDoveServiceUntagResourceKey() {
  return ['#X-Amz-Target=StarlingDoveService.UntagResource'] as const
}

export function getPostXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfig<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig']['$post']
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
    getPostXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceBatchGetResourceConfigMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceBatchGetResourceConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceBatchGetResourceConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceBatchGetResourceConfig<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig']['$post']
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
    getPostXAmzTargetStarlingDoveServiceBatchGetResourceConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization',
    '/#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteAggregationAuthorization<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConfigRuleMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteConfigRule',
    '/#X-Amz-Target=StarlingDoveService.DeleteConfigRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConfigRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteConfigRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteConfigRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteConfigRule<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceDeleteConfigRuleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator',
    '/#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteConfigurationAggregator<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder',
    '/#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteConfigurationRecorder<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConformancePackMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteConformancePack',
    '/#X-Amz-Target=StarlingDoveService.DeleteConformancePack',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConformancePackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConformancePack']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConformancePack']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteConformancePackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConformancePack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteConformancePack'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteConformancePack<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConformancePack']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConformancePack']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceDeleteConformancePackMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteDeliveryChannelMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel',
    '/#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteDeliveryChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteDeliveryChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteDeliveryChannel<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceDeleteDeliveryChannelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteEvaluationResultsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults',
    '/#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteEvaluationResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteEvaluationResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteEvaluationResults<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDeleteEvaluationResultsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule',
    '/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRule<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack',
    '/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePack<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest',
    '/#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeletePendingAggregationRequest<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteRemediationConfigurationMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration',
    '/#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteRemediationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteRemediationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteRemediationConfiguration<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDeleteRemediationConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions',
    '/#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteRemediationExceptions<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteResourceConfigMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.DeleteResourceConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteResourceConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteResourceConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteResourceConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteResourceConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteResourceConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteResourceConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteResourceConfig<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteResourceConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteResourceConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceDeleteResourceConfigMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteRetentionConfigurationMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration',
    '/#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteRetentionConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteRetentionConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteRetentionConfiguration<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDeleteRetentionConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeleteStoredQueryMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteStoredQuery',
    '/#X-Amz-Target=StarlingDoveService.DeleteStoredQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeleteStoredQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteStoredQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteStoredQuery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeleteStoredQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteStoredQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeleteStoredQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeleteStoredQuery<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteStoredQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteStoredQuery']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceDeleteStoredQueryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDeliverConfigSnapshotMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot',
    '/#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDeliverConfigSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDeliverConfigSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDeliverConfigSnapshot<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceDeliverConfigSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules',
    '/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRules<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks',
    '/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacks<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations',
    '/#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizations<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule',
    '/#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRule<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeComplianceByResourceMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource',
    '/#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeComplianceByResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeComplianceByResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeComplianceByResource<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeComplianceByResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatus<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigRulesMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigRules',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeConfigRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeConfigRules'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigRules<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRules']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceDescribeConfigRulesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatus<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregators<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatus<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigurationRecorders<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance',
    '/#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConformancePackCompliance<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConformancePackStatusMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConformancePackStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeConformancePackStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConformancePackStatus<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeConformancePackStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConformancePacksMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConformancePacks',
    '/#X-Amz-Target=StarlingDoveService.DescribeConformancePacks',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConformancePacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePacks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePacks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeConformancePacksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePacks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeConformancePacks'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConformancePacks<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePacks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePacks']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeConformancePacksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatus<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels',
    '/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeDeliveryChannels<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses',
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatuses<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules',
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRules<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses',
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatuses<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks',
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacks<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests',
    '/#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribePendingAggregationRequests<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations',
    '/#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeRemediationConfigurations<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRemediationExceptionsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions',
    '/#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRemediationExceptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeRemediationExceptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeRemediationExceptions<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeRemediationExceptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatus<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations',
    '/#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceDescribeRetentionConfigurations<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations']['$post']
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
    getPostXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule',
    '/#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRule<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary',
    '/#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummary<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary',
    '/#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummary<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts',
    '/#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCounts<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateResourceConfigMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateResourceConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceGetAggregateResourceConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetAggregateResourceConfig<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetAggregateResourceConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule',
    '/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRule<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource',
    '/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetComplianceDetailsByResource<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule',
    '/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRule<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType',
    '/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceType<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails',
    '/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetails<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary',
    '/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummary<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetCustomRulePolicyMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy',
    '/#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetCustomRulePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceGetCustomRulePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetCustomRulePolicy<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceGetCustomRulePolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts',
    '/#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetDiscoveredResourceCounts<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus',
    '/#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatus<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus',
    '/#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatus<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy',
    '/#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicy<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetResourceConfigHistoryMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory',
    '/#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetResourceConfigHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceGetResourceConfigHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetResourceConfigHistory<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetResourceConfigHistoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary',
    '/#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetResourceEvaluationSummary<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary']['$post']
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
    getPostXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceGetStoredQueryMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetStoredQuery',
    '/#X-Amz-Target=StarlingDoveService.GetStoredQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceGetStoredQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StarlingDoveService.GetStoredQuery']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.GetStoredQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceGetStoredQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.GetStoredQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.GetStoredQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceGetStoredQuery<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.GetStoredQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetStoredQuery']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceGetStoredQueryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources',
    '/#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceListAggregateDiscoveredResources<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources']['$post']
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
    getPostXAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceListConformancePackComplianceScoresMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores',
    '/#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceListConformancePackComplianceScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStarlingDoveServiceListConformancePackComplianceScoresMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceListConformancePackComplianceScores<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores']['$post']
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
    getPostXAmzTargetStarlingDoveServiceListConformancePackComplianceScoresMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceListDiscoveredResourcesMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListDiscoveredResources',
    '/#X-Amz-Target=StarlingDoveService.ListDiscoveredResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceListDiscoveredResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.ListDiscoveredResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListDiscoveredResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceListDiscoveredResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.ListDiscoveredResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.ListDiscoveredResources'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceListDiscoveredResources<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.ListDiscoveredResources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListDiscoveredResources']['$post']
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
    getPostXAmzTargetStarlingDoveServiceListDiscoveredResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceListResourceEvaluationsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListResourceEvaluations',
    '/#X-Amz-Target=StarlingDoveService.ListResourceEvaluations',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceListResourceEvaluationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.ListResourceEvaluations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListResourceEvaluations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceListResourceEvaluationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.ListResourceEvaluations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.ListResourceEvaluations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceListResourceEvaluations<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.ListResourceEvaluations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListResourceEvaluations']['$post']
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
    getPostXAmzTargetStarlingDoveServiceListResourceEvaluationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceListStoredQueriesMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListStoredQueries',
    '/#X-Amz-Target=StarlingDoveService.ListStoredQueries',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceListStoredQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.ListStoredQueries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListStoredQueries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceListStoredQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.ListStoredQueries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.ListStoredQueries'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceListStoredQueries<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.ListStoredQueries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListStoredQueries']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceListStoredQueriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListTagsForResource',
    '/#X-Amz-Target=StarlingDoveService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListTagsForResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceListTagsForResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutAggregationAuthorizationMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization',
    '/#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutAggregationAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutAggregationAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutAggregationAuthorization<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization']['$post']
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
    getPostXAmzTargetStarlingDoveServicePutAggregationAuthorizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutConfigRuleMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutConfigRule',
    '/#X-Amz-Target=StarlingDoveService.PutConfigRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutConfigRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigRule']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigRule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutConfigRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutConfigRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutConfigRule<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServicePutConfigRuleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutConfigurationAggregatorMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator',
    '/#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutConfigurationAggregatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutConfigurationAggregatorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutConfigurationAggregator<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator']['$post']
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
    getPostXAmzTargetStarlingDoveServicePutConfigurationAggregatorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutConfigurationRecorderMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder',
    '/#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutConfigurationRecorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutConfigurationRecorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutConfigurationRecorder<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder']['$post']
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
    getPostXAmzTargetStarlingDoveServicePutConfigurationRecorderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutConformancePackMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutConformancePack',
    '/#X-Amz-Target=StarlingDoveService.PutConformancePack',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutConformancePackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutConformancePack']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutConformancePack']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutConformancePackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutConformancePack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutConformancePack'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutConformancePack<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutConformancePack']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutConformancePack']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServicePutConformancePackMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutDeliveryChannelMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutDeliveryChannel',
    '/#X-Amz-Target=StarlingDoveService.PutDeliveryChannel',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutDeliveryChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutDeliveryChannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutDeliveryChannel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutDeliveryChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutDeliveryChannel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutDeliveryChannel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutDeliveryChannel<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutDeliveryChannel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutDeliveryChannel']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServicePutDeliveryChannelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutEvaluationsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutEvaluations',
    '/#X-Amz-Target=StarlingDoveService.PutEvaluations',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutEvaluationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StarlingDoveService.PutEvaluations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.PutEvaluations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutEvaluationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutEvaluations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutEvaluations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutEvaluations<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutEvaluations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutEvaluations']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServicePutEvaluationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutExternalEvaluationMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutExternalEvaluation',
    '/#X-Amz-Target=StarlingDoveService.PutExternalEvaluation',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutExternalEvaluationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutExternalEvaluation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutExternalEvaluation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutExternalEvaluationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutExternalEvaluation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutExternalEvaluation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutExternalEvaluation<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutExternalEvaluation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutExternalEvaluation']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServicePutExternalEvaluationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutOrganizationConfigRuleMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule',
    '/#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutOrganizationConfigRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutOrganizationConfigRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutOrganizationConfigRule<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule']['$post']
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
    getPostXAmzTargetStarlingDoveServicePutOrganizationConfigRuleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutOrganizationConformancePackMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack',
    '/#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutOrganizationConformancePackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutOrganizationConformancePackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutOrganizationConformancePack<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack']['$post']
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
    getPostXAmzTargetStarlingDoveServicePutOrganizationConformancePackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutRemediationConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations',
    '/#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutRemediationConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutRemediationConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutRemediationConfigurations<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations']['$post']
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
    getPostXAmzTargetStarlingDoveServicePutRemediationConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutRemediationExceptionsMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutRemediationExceptions',
    '/#X-Amz-Target=StarlingDoveService.PutRemediationExceptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutRemediationExceptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationExceptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationExceptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutRemediationExceptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationExceptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutRemediationExceptions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutRemediationExceptions<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationExceptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationExceptions']['$post']
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
    getPostXAmzTargetStarlingDoveServicePutRemediationExceptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutResourceConfigMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.PutResourceConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutResourceConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutResourceConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutResourceConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutResourceConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutResourceConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutResourceConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutResourceConfig<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutResourceConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutResourceConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServicePutResourceConfigMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutRetentionConfigurationMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration',
    '/#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutRetentionConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutRetentionConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutRetentionConfiguration<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration']['$post']
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
    getPostXAmzTargetStarlingDoveServicePutRetentionConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServicePutStoredQueryMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutStoredQuery',
    '/#X-Amz-Target=StarlingDoveService.PutStoredQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServicePutStoredQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StarlingDoveService.PutStoredQuery']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.PutStoredQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServicePutStoredQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.PutStoredQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.PutStoredQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServicePutStoredQuery<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.PutStoredQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutStoredQuery']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServicePutStoredQueryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceSelectAggregateResourceConfigMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceSelectAggregateResourceConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceSelectAggregateResourceConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceSelectAggregateResourceConfig<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig']['$post']
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
    getPostXAmzTargetStarlingDoveServiceSelectAggregateResourceConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceSelectResourceConfigMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.SelectResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.SelectResourceConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceSelectResourceConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.SelectResourceConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.SelectResourceConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceSelectResourceConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.SelectResourceConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.SelectResourceConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceSelectResourceConfig<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.SelectResourceConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.SelectResourceConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceSelectResourceConfigMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceStartConfigRulesEvaluationMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation',
    '/#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceStartConfigRulesEvaluationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceStartConfigRulesEvaluationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceStartConfigRulesEvaluation<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation']['$post']
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
    getPostXAmzTargetStarlingDoveServiceStartConfigRulesEvaluationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceStartConfigurationRecorderMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder',
    '/#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceStartConfigurationRecorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceStartConfigurationRecorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceStartConfigurationRecorder<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder']['$post']
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
    getPostXAmzTargetStarlingDoveServiceStartConfigurationRecorderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceStartRemediationExecutionMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.StartRemediationExecution',
    '/#X-Amz-Target=StarlingDoveService.StartRemediationExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceStartRemediationExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.StartRemediationExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.StartRemediationExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceStartRemediationExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.StartRemediationExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.StartRemediationExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceStartRemediationExecution<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.StartRemediationExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.StartRemediationExecution']['$post']
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
    getPostXAmzTargetStarlingDoveServiceStartRemediationExecutionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceStartResourceEvaluationMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.StartResourceEvaluation',
    '/#X-Amz-Target=StarlingDoveService.StartResourceEvaluation',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceStartResourceEvaluationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.StartResourceEvaluation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.StartResourceEvaluation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceStartResourceEvaluationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.StartResourceEvaluation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.StartResourceEvaluation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceStartResourceEvaluation<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.StartResourceEvaluation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.StartResourceEvaluation']['$post']
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
    getPostXAmzTargetStarlingDoveServiceStartResourceEvaluationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceStopConfigurationRecorderMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder',
    '/#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceStopConfigurationRecorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceStopConfigurationRecorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceStopConfigurationRecorder<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder']['$post']
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
    getPostXAmzTargetStarlingDoveServiceStopConfigurationRecorderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.TagResource',
    '/#X-Amz-Target=StarlingDoveService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StarlingDoveService.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceTagResource<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.TagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceTagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetStarlingDoveServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.UntagResource',
    '/#X-Amz-Target=StarlingDoveService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetStarlingDoveServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StarlingDoveService.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStarlingDoveServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StarlingDoveService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StarlingDoveService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetStarlingDoveServiceUntagResource<
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
                    (typeof client)['#X-Amz-Target=StarlingDoveService.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.UntagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetStarlingDoveServiceUntagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
