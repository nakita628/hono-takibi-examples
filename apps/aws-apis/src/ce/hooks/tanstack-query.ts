import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor',
    '/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitor<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription',
    '/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscription<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition',
    '/#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinition<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor',
    '/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitor<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription',
    '/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscription<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition',
    '/#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinition<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition',
    '/#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinition<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetAnomaliesMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetAnomalies',
    '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalies',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetAnomaliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetAnomaliesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetAnomalies<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSInsightsIndexServiceGetAnomaliesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors',
    '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitors<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions',
    '/#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptions<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage',
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetCostAndUsage<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources',
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResources<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostCategoriesMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetCostCategories',
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostCategories',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetCostCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetCostCategories<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSInsightsIndexServiceGetCostCategoriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostForecastMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetCostForecast',
    '/#X-Amz-Target=AWSInsightsIndexService.GetCostForecast',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetCostForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetCostForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetCostForecast<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSInsightsIndexServiceGetCostForecastMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetDimensionValuesMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues',
    '/#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetDimensionValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetDimensionValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetDimensionValues<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetDimensionValuesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetReservationCoverageMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage',
    '/#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetReservationCoverageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetReservationCoverageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetReservationCoverage<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetReservationCoverageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation',
    '/#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendation<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetReservationUtilizationMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization',
    '/#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetReservationUtilizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetReservationUtilizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetReservationUtilization<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetReservationUtilizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation',
    '/#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendation<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage',
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverage<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation',
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendation<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization',
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilization<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails',
    '/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetails<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetTagsMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetTags',
    '/#X-Amz-Target=AWSInsightsIndexService.GetTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetTags'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetTags<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetTags']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSInsightsIndexServiceGetTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetUsageForecastMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast',
    '/#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceGetUsageForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceGetUsageForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceGetUsageForecast<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSInsightsIndexServiceGetUsageForecastMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags',
    '/#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceListCostAllocationTags<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions',
    '/#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitions<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration',
    '/#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGeneration<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource',
    '/#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback',
    '/#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedback<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration',
    '/#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGeneration<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.TagResource',
    '/#X-Amz-Target=AWSInsightsIndexService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSInsightsIndexService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceTagResource<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.TagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSInsightsIndexServiceTagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.UntagResource',
    '/#X-Amz-Target=AWSInsightsIndexService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceUntagResource<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UntagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSInsightsIndexServiceUntagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor',
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitor<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription',
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscription<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus',
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatus<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition',
    '/#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinition<
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
                  (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition']['$post']
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
    getPostXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
