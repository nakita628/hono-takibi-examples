import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonDMSv20160101AddTagsToResourceKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource'] as const
}

export function getXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction'] as const
}

export function getXAmzTargetAmazonDMSv20160101BatchStartRecommendationsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations'] as const
}

export function getXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun'] as const
}

export function getXAmzTargetAmazonDMSv20160101CreateEndpointKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint'] as const
}

export function getXAmzTargetAmazonDMSv20160101CreateEventSubscriptionKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription'] as const
}

export function getXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector'] as const
}

export function getXAmzTargetAmazonDMSv20160101CreateReplicationInstanceKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance'] as const
}

export function getXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup'] as const
}

export function getXAmzTargetAmazonDMSv20160101CreateReplicationTaskKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask'] as const
}

export function getXAmzTargetAmazonDMSv20160101DeleteCertificateKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate'] as const
}

export function getXAmzTargetAmazonDMSv20160101DeleteConnectionKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection'] as const
}

export function getXAmzTargetAmazonDMSv20160101DeleteEndpointKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint'] as const
}

export function getXAmzTargetAmazonDMSv20160101DeleteEventSubscriptionKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription'] as const
}

export function getXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector'] as const
}

export function getXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases'] as const
}

export function getXAmzTargetAmazonDMSv20160101DeleteReplicationInstanceKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance'] as const
}

export function getXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup'] as const
}

export function getXAmzTargetAmazonDMSv20160101DeleteReplicationTaskKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask'] as const
}

export function getXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeAccountAttributesKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeCertificatesKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeConnectionsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeEndpointSettingsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeEndpointTypesKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeEndpointsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeEventCategoriesKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeEventsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeRecommendationsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeReplicationInstancesKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeReplicationTasksKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeSchemasKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas'] as const
}

export function getXAmzTargetAmazonDMSv20160101DescribeTableStatisticsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics'] as const
}

export function getXAmzTargetAmazonDMSv20160101ImportCertificateKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate'] as const
}

export function getXAmzTargetAmazonDMSv20160101ListTagsForResourceKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource'] as const
}

export function getXAmzTargetAmazonDMSv20160101ModifyEndpointKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint'] as const
}

export function getXAmzTargetAmazonDMSv20160101ModifyEventSubscriptionKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription'] as const
}

export function getXAmzTargetAmazonDMSv20160101ModifyReplicationInstanceKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance'] as const
}

export function getXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup'] as const
}

export function getXAmzTargetAmazonDMSv20160101ModifyReplicationTaskKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask'] as const
}

export function getXAmzTargetAmazonDMSv20160101MoveReplicationTaskKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask'] as const
}

export function getXAmzTargetAmazonDMSv20160101RebootReplicationInstanceKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance'] as const
}

export function getXAmzTargetAmazonDMSv20160101RefreshSchemasKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas'] as const
}

export function getXAmzTargetAmazonDMSv20160101ReloadTablesKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.ReloadTables'] as const
}

export function getXAmzTargetAmazonDMSv20160101RemoveTagsFromResourceKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource'] as const
}

export function getXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis'] as const
}

export function getXAmzTargetAmazonDMSv20160101StartRecommendationsKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations'] as const
}

export function getXAmzTargetAmazonDMSv20160101StartReplicationTaskKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask'] as const
}

export function getXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment'] as const
}

export function getXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun'] as const
}

export function getXAmzTargetAmazonDMSv20160101StopReplicationTaskKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask'] as const
}

export function getXAmzTargetAmazonDMSv20160101TestConnectionKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.TestConnection'] as const
}

export function getXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeKey() {
  return ['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge'] as const
}

export function getPostXAmzTargetAmazonDMSv20160101AddTagsToResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource',
    '/#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101AddTagsToResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101AddTagsToResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101AddTagsToResource<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101AddTagsToResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction',
    '/#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceAction<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101BatchStartRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations',
    '/#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101BatchStartRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101BatchStartRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101BatchStartRecommendations<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101BatchStartRecommendationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun',
    '/#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRun<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101CreateEndpointMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101CreateEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101CreateEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101CreateEndpoint<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101CreateEndpointMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101CreateEventSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101CreateEventSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101CreateEventSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101CreateEventSubscription<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101CreateEventSubscriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollector<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101CreateReplicationInstanceMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101CreateReplicationInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101CreateReplicationInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101CreateReplicationInstance<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101CreateReplicationInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroup<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101CreateReplicationTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101CreateReplicationTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101CreateReplicationTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101CreateReplicationTask<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101CreateReplicationTaskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteCertificateMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DeleteCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteCertificate<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101DeleteCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteConnectionMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteConnection',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DeleteConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteConnection<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101DeleteConnectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteEndpointMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DeleteEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteEndpoint<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101DeleteEndpointMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteEventSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteEventSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DeleteEventSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteEventSubscription<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DeleteEventSubscriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollector<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabases<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationInstanceMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DeleteReplicationInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteReplicationInstance<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DeleteReplicationInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroup<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteReplicationTask<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRun<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeAccountAttributesMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeAccountAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeAccountAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeAccountAttributes<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeAccountAttributesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessments<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeCertificatesMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeCertificates<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101DescribeCertificatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeConnectionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeConnections',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeConnections',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeConnections<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101DescribeConnectionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEndpointSettingsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEndpointSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeEndpointSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEndpointSettings<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeEndpointSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEndpointTypesMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEndpointTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeEndpointTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEndpointTypes<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101DescribeEndpointTypesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEndpointsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEndpoints<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101DescribeEndpointsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEventCategoriesMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEventCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeEventCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEventCategories<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeEventCategoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEventSubscriptions<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEventsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEvents',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEvents<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101DescribeEventsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectors<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabases<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysis<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummary<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemas<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstances<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActions<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitations<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeRecommendations<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatus<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogs<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstancesMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationInstances<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroups<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResults<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRuns<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessments<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTasksMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationTasks<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTasksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeSchemasMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeSchemas<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101DescribeSchemasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeTableStatisticsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeTableStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101DescribeTableStatisticsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeTableStatistics<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101DescribeTableStatisticsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101ImportCertificateMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ImportCertificate',
    '/#X-Amz-Target=AmazonDMSv20160101.ImportCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101ImportCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101ImportCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101ImportCertificate<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101ImportCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource',
    '/#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101ListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101ListTagsForResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyEndpointMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint',
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101ModifyEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101ModifyEndpoint<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101ModifyEndpointMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyEventSubscriptionMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription',
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyEventSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101ModifyEventSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101ModifyEventSubscription<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101ModifyEventSubscriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyReplicationInstanceMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance',
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyReplicationInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101ModifyReplicationInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101ModifyReplicationInstance<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101ModifyReplicationInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup',
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroup<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyReplicationTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyReplicationTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101ModifyReplicationTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101ModifyReplicationTask<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101ModifyReplicationTaskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101MoveReplicationTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101MoveReplicationTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101MoveReplicationTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101MoveReplicationTask<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101MoveReplicationTaskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101RebootReplicationInstanceMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance',
    '/#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101RebootReplicationInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101RebootReplicationInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101RebootReplicationInstance<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101RebootReplicationInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101RefreshSchemasMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas',
    '/#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101RefreshSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101RefreshSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101RefreshSchemas<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101RefreshSchemasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101ReloadTablesMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ReloadTables',
    '/#X-Amz-Target=AmazonDMSv20160101.ReloadTables',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101ReloadTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.ReloadTables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.ReloadTables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101ReloadTablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ReloadTables']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.ReloadTables'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101ReloadTables<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ReloadTables']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.ReloadTables']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101ReloadTablesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101RemoveTagsFromResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource',
    '/#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101RemoveTagsFromResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101RemoveTagsFromResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101RemoveTagsFromResource<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101RemoveTagsFromResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis',
    '/#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysis<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101StartRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.StartRecommendations',
    '/#X-Amz-Target=AmazonDMSv20160101.StartRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101StartRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101StartRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101StartRecommendations<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101StartRecommendationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101StartReplicationTask<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment',
    '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessment<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun',
    '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRun<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101StopReplicationTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101StopReplicationTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101StopReplicationTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101StopReplicationTask<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101StopReplicationTaskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101TestConnectionMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.TestConnection',
    '/#X-Amz-Target=AmazonDMSv20160101.TestConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101TestConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.TestConnection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.TestConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101TestConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.TestConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.TestConnection'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101TestConnection<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.TestConnection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.TestConnection']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonDMSv20160101TestConnectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeMutationKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge',
    '/#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridge<
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
                  (typeof client)['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge']['$post']
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
    getPostXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
