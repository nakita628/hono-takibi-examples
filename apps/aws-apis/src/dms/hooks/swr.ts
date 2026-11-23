import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAmazonDMSv20160101AddTagsToResourceKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource',
    '/#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101AddTagsToResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101AddTagsToResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction',
    '/#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101BatchStartRecommendationsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations',
    '/#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101BatchStartRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101BatchStartRecommendationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun',
    '/#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101CreateEndpointKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101CreateEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101CreateEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101CreateEventSubscriptionKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101CreateEventSubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101CreateEventSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollector<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101CreateReplicationInstanceKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101CreateReplicationInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101CreateReplicationInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101CreateReplicationTaskKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101CreateReplicationTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101CreateReplicationTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteCertificateKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DeleteCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteConnectionKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteConnection',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DeleteConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteEndpointKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DeleteEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteEventSubscriptionKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteEventSubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DeleteEventSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollector<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationInstanceKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteReplicationInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DeleteReplicationInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteReplicationTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun',
    '/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeAccountAttributesKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeAccountAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeAccountAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeCertificatesKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeCertificates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeConnectionsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeConnections',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeConnections',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEndpointSettingsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEndpointSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeEndpointSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEndpointTypesKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEndpointTypes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeEndpointTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEndpointsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEventCategoriesKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEventCategories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeEventCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEventSubscriptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeEventSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeEventsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeEvents',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysis<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemas<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeRecommendationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstancesKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeReplicationInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResults<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRuns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTasksKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeReplicationTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeReplicationTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeSchemasKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeSchemasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101DescribeTableStatisticsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics',
    '/#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101DescribeTableStatistics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101DescribeTableStatisticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101ImportCertificateKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ImportCertificate',
    '/#X-Amz-Target=AmazonDMSv20160101.ImportCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101ImportCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101ImportCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource',
    '/#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101ListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyEndpointKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint',
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101ModifyEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101ModifyEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyEventSubscriptionKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription',
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101ModifyEventSubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101ModifyEventSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyReplicationInstanceKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance',
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101ModifyReplicationInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101ModifyReplicationInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup',
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101ModifyReplicationTaskKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101ModifyReplicationTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101ModifyReplicationTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101MoveReplicationTaskKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101MoveReplicationTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101MoveReplicationTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101RebootReplicationInstanceKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance',
    '/#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101RebootReplicationInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101RebootReplicationInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101RefreshSchemasKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas',
    '/#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101RefreshSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101RefreshSchemasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101ReloadTablesKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.ReloadTables',
    '/#X-Amz-Target=AmazonDMSv20160101.ReloadTables',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101ReloadTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.ReloadTables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101ReloadTablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ReloadTables']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.ReloadTables'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101RemoveTagsFromResourceKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource',
    '/#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101RemoveTagsFromResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101RemoveTagsFromResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis',
    '/#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysis<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101StartRecommendationsKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.StartRecommendations',
    '/#X-Amz-Target=AmazonDMSv20160101.StartRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101StartRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101StartRecommendationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101StartReplicationTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment',
    '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun',
    '/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101StopReplicationTaskKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask',
    '/#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101StopReplicationTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101StopReplicationTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101TestConnectionKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.TestConnection',
    '/#X-Amz-Target=AmazonDMSv20160101.TestConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101TestConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.TestConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDMSv20160101TestConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.TestConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.TestConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeKey() {
  return [
    '#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge',
    '/#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridge<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
