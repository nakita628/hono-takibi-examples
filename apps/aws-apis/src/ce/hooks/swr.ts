import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetAnomaliesKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetCostAndUsageKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetCostCategoriesKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetCostForecastKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetDimensionValuesKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetReservationCoverageKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetReservationUtilizationKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetTagsKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetTags'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceGetUsageForecastKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration',
  ] as const
}

export function getXAmzTargetAWSInsightsIndexServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration',
  ] as const
}

export function getXAmzTargetAWSInsightsIndexServiceTagResourceKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.TagResource'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceUntagResourceKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.UntagResource'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus'] as const
}

export function getXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionKey() {
  return ['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition'] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor',
    '/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitor<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription',
    '/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition',
    '/#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor',
    '/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitor<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription',
    '/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition',
    '/#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition',
    '/#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetAnomaliesKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetAnomalies',
    '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalies',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetAnomalies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetAnomaliesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors',
    '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions',
    '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage',
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetCostAndUsage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources',
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostCategoriesKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetCostCategories',
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostCategories',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetCostCategories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetCostCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostForecastKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetCostForecast',
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostForecast',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetCostForecast<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetCostForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetDimensionValuesKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues',
    '/#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetDimensionValues<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetDimensionValuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetReservationCoverageKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage',
    '/#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetReservationCoverage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetReservationCoverageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation',
    '/#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetReservationUtilizationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization',
    '/#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetReservationUtilization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetReservationUtilizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation',
    '/#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage',
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation',
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization',
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails',
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetTagsKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetTags',
    '/#X-Amz-Target=AWSInsightsIndexService.GetTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetTags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetTags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetUsageForecastKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast',
    '/#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetUsageForecast<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceGetUsageForecastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags',
    '/#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceListCostAllocationTags<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions',
    '/#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration',
    '/#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGeneration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource',
    '/#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback',
    '/#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration',
    '/#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGeneration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceTagResourceKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.TagResource',
    '/#X-Amz-Target=AWSInsightsIndexService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSInsightsIndexService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.UntagResource',
    '/#X-Amz-Target=AWSInsightsIndexService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor',
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitor<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription',
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus',
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition',
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
