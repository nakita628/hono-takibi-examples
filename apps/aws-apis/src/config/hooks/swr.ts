import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceBatchGetResourceConfigKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceBatchGetResourceConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceBatchGetResourceConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization',
    '/#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteAggregationAuthorization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConfigRuleKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteConfigRule',
    '/#X-Amz-Target=StarlingDoveService.DeleteConfigRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteConfigRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteConfigRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteConfigRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator',
    '/#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteConfigurationAggregator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder',
    '/#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteConfigurationRecorder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteConformancePackKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteConformancePack',
    '/#X-Amz-Target=StarlingDoveService.DeleteConformancePack',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteConformancePack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConformancePack']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteConformancePackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteConformancePack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteConformancePack'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteDeliveryChannelKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel',
    '/#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteDeliveryChannel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteDeliveryChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteEvaluationResultsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults',
    '/#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteEvaluationResults<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteEvaluationResultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule',
    '/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack',
    '/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest',
    '/#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeletePendingAggregationRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteRemediationConfigurationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration',
    '/#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteRemediationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteRemediationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions',
    '/#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteRemediationExceptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteResourceConfigKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.DeleteResourceConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteResourceConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteResourceConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteResourceConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteResourceConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteResourceConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteRetentionConfigurationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration',
    '/#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteRetentionConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteRetentionConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeleteStoredQueryKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeleteStoredQuery',
    '/#X-Amz-Target=StarlingDoveService.DeleteStoredQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeleteStoredQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteStoredQuery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeleteStoredQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeleteStoredQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeleteStoredQuery'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDeliverConfigSnapshotKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot',
    '/#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDeliverConfigSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDeliverConfigSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules',
    '/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks',
    '/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations',
    '/#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule',
    '/#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeComplianceByResourceKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource',
    '/#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeComplianceByResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeComplianceByResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigRulesKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigRules',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeConfigRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeConfigRules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregators<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders',
    '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConfigurationRecorders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance',
    '/#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConformancePackCompliance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConformancePackStatusKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConformancePackStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeConformancePackStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeConformancePacksKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeConformancePacks',
    '/#X-Amz-Target=StarlingDoveService.DescribeConformancePacks',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeConformancePacks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePacks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeConformancePacksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeConformancePacks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeConformancePacks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels',
    '/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeDeliveryChannels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeDeliveryChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses',
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatuses<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules',
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses',
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatuses<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks',
    '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests',
    '/#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribePendingAggregationRequests<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations',
    '/#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeRemediationConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRemediationExceptionsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions',
    '/#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeRemediationExceptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeRemediationExceptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus',
    '/#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations',
    '/#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceDescribeRetentionConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule',
    '/#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary',
    '/#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary',
    '/#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts',
    '/#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCounts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetAggregateResourceConfigKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetAggregateResourceConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceGetAggregateResourceConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule',
    '/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource',
    '/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetComplianceDetailsByResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule',
    '/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType',
    '/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails',
    '/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary',
    '/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetCustomRulePolicyKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy',
    '/#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetCustomRulePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceGetCustomRulePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts',
    '/#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetDiscoveredResourceCounts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus',
    '/#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus',
    '/#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy',
    '/#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetResourceConfigHistoryKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory',
    '/#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetResourceConfigHistory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceGetResourceConfigHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary',
    '/#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetResourceEvaluationSummary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceGetStoredQueryKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.GetStoredQuery',
    '/#X-Amz-Target=StarlingDoveService.GetStoredQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceGetStoredQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.GetStoredQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceGetStoredQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.GetStoredQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.GetStoredQuery'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources',
    '/#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceListAggregateDiscoveredResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceListConformancePackComplianceScoresKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores',
    '/#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceListConformancePackComplianceScores<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServiceListConformancePackComplianceScoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceListDiscoveredResourcesKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListDiscoveredResources',
    '/#X-Amz-Target=StarlingDoveService.ListDiscoveredResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceListDiscoveredResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListDiscoveredResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceListDiscoveredResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListDiscoveredResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.ListDiscoveredResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceListResourceEvaluationsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListResourceEvaluations',
    '/#X-Amz-Target=StarlingDoveService.ListResourceEvaluations',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceListResourceEvaluations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListResourceEvaluations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceListResourceEvaluationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListResourceEvaluations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.ListResourceEvaluations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceListStoredQueriesKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListStoredQueries',
    '/#X-Amz-Target=StarlingDoveService.ListStoredQueries',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceListStoredQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListStoredQueries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceListStoredQueriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListStoredQueries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.ListStoredQueries'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.ListTagsForResource',
    '/#X-Amz-Target=StarlingDoveService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutAggregationAuthorizationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization',
    '/#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutAggregationAuthorization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutAggregationAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutConfigRuleKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutConfigRule',
    '/#X-Amz-Target=StarlingDoveService.PutConfigRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutConfigRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutConfigRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutConfigRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutConfigurationAggregatorKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator',
    '/#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutConfigurationAggregator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutConfigurationAggregatorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutConfigurationRecorderKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder',
    '/#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutConfigurationRecorder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutConfigurationRecorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutConformancePackKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutConformancePack',
    '/#X-Amz-Target=StarlingDoveService.PutConformancePack',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutConformancePack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutConformancePack']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutConformancePackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutConformancePack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutConformancePack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutDeliveryChannelKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutDeliveryChannel',
    '/#X-Amz-Target=StarlingDoveService.PutDeliveryChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutDeliveryChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutDeliveryChannel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutDeliveryChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutDeliveryChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutDeliveryChannel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutEvaluationsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutEvaluations',
    '/#X-Amz-Target=StarlingDoveService.PutEvaluations',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutEvaluations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.PutEvaluations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutEvaluationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutEvaluations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutEvaluations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutExternalEvaluationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutExternalEvaluation',
    '/#X-Amz-Target=StarlingDoveService.PutExternalEvaluation',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutExternalEvaluation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutExternalEvaluation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutExternalEvaluationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutExternalEvaluation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutExternalEvaluation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutOrganizationConfigRuleKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule',
    '/#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutOrganizationConfigRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutOrganizationConfigRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutOrganizationConformancePackKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack',
    '/#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutOrganizationConformancePack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStarlingDoveServicePutOrganizationConformancePackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutRemediationConfigurationsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations',
    '/#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutRemediationConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutRemediationConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutRemediationExceptionsKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutRemediationExceptions',
    '/#X-Amz-Target=StarlingDoveService.PutRemediationExceptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutRemediationExceptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationExceptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutRemediationExceptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutRemediationExceptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutRemediationExceptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutResourceConfigKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.PutResourceConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutResourceConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutResourceConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutResourceConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutResourceConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutResourceConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutRetentionConfigurationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration',
    '/#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutRetentionConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutRetentionConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServicePutStoredQueryKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.PutStoredQuery',
    '/#X-Amz-Target=StarlingDoveService.PutStoredQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServicePutStoredQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.PutStoredQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServicePutStoredQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.PutStoredQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.PutStoredQuery'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceSelectAggregateResourceConfigKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceSelectAggregateResourceConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceSelectAggregateResourceConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceSelectResourceConfigKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.SelectResourceConfig',
    '/#X-Amz-Target=StarlingDoveService.SelectResourceConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceSelectResourceConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.SelectResourceConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceSelectResourceConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.SelectResourceConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.SelectResourceConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceStartConfigRulesEvaluationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation',
    '/#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceStartConfigRulesEvaluation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceStartConfigRulesEvaluationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceStartConfigurationRecorderKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder',
    '/#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceStartConfigurationRecorder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceStartConfigurationRecorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceStartRemediationExecutionKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.StartRemediationExecution',
    '/#X-Amz-Target=StarlingDoveService.StartRemediationExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceStartRemediationExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.StartRemediationExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceStartRemediationExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.StartRemediationExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.StartRemediationExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceStartResourceEvaluationKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.StartResourceEvaluation',
    '/#X-Amz-Target=StarlingDoveService.StartResourceEvaluation',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceStartResourceEvaluation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.StartResourceEvaluation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceStartResourceEvaluationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.StartResourceEvaluation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.StartResourceEvaluation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceStopConfigurationRecorderKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder',
    '/#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceStopConfigurationRecorder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceStopConfigurationRecorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceTagResourceKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.TagResource',
    '/#X-Amz-Target=StarlingDoveService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStarlingDoveServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=StarlingDoveService.UntagResource',
    '/#X-Amz-Target=StarlingDoveService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetStarlingDoveServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StarlingDoveService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStarlingDoveServiceUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StarlingDoveService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StarlingDoveService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
