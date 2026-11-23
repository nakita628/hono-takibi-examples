import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonPersonalizeCreateBatchInferenceJobKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateBatchSegmentJobKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateCampaignKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateCampaign'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateDatasetKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateDataset'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateDatasetExportJobKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateDatasetGroupKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateDatasetImportJobKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateEventTrackerKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateEventTracker'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateFilterKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateFilter'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateMetricAttributionKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateRecommenderKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateRecommender'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateSchemaKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateSchema'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateSolutionKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateSolution'] as const
}

export function getXAmzTargetAmazonPersonalizeCreateSolutionVersionKey() {
  return ['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion'] as const
}

export function getXAmzTargetAmazonPersonalizeDeleteCampaignKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DeleteCampaign'] as const
}

export function getXAmzTargetAmazonPersonalizeDeleteDatasetKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DeleteDataset'] as const
}

export function getXAmzTargetAmazonPersonalizeDeleteDatasetGroupKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup'] as const
}

export function getXAmzTargetAmazonPersonalizeDeleteEventTrackerKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker'] as const
}

export function getXAmzTargetAmazonPersonalizeDeleteFilterKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DeleteFilter'] as const
}

export function getXAmzTargetAmazonPersonalizeDeleteMetricAttributionKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution'] as const
}

export function getXAmzTargetAmazonPersonalizeDeleteRecommenderKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DeleteRecommender'] as const
}

export function getXAmzTargetAmazonPersonalizeDeleteSchemaKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DeleteSchema'] as const
}

export function getXAmzTargetAmazonPersonalizeDeleteSolutionKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DeleteSolution'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeAlgorithmKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeBatchInferenceJobKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeCampaignKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeCampaign'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeDatasetKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeDataset'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeDatasetExportJobKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeDatasetGroupKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeDatasetImportJobKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeEventTrackerKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeFeatureTransformationKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeFilterKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeFilter'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeMetricAttributionKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeRecipeKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeRecipe'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeRecommenderKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeRecommender'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeSchemaKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeSchema'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeSolutionKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeSolution'] as const
}

export function getXAmzTargetAmazonPersonalizeDescribeSolutionVersionKey() {
  return ['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion'] as const
}

export function getXAmzTargetAmazonPersonalizeGetSolutionMetricsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics'] as const
}

export function getXAmzTargetAmazonPersonalizeListBatchInferenceJobsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs'] as const
}

export function getXAmzTargetAmazonPersonalizeListBatchSegmentJobsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs'] as const
}

export function getXAmzTargetAmazonPersonalizeListCampaignsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListCampaigns'] as const
}

export function getXAmzTargetAmazonPersonalizeListDatasetExportJobsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs'] as const
}

export function getXAmzTargetAmazonPersonalizeListDatasetGroupsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups'] as const
}

export function getXAmzTargetAmazonPersonalizeListDatasetImportJobsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs'] as const
}

export function getXAmzTargetAmazonPersonalizeListDatasetsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListDatasets'] as const
}

export function getXAmzTargetAmazonPersonalizeListEventTrackersKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListEventTrackers'] as const
}

export function getXAmzTargetAmazonPersonalizeListFiltersKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListFilters'] as const
}

export function getXAmzTargetAmazonPersonalizeListMetricAttributionMetricsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics'] as const
}

export function getXAmzTargetAmazonPersonalizeListMetricAttributionsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions'] as const
}

export function getXAmzTargetAmazonPersonalizeListRecipesKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListRecipes'] as const
}

export function getXAmzTargetAmazonPersonalizeListRecommendersKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListRecommenders'] as const
}

export function getXAmzTargetAmazonPersonalizeListSchemasKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListSchemas'] as const
}

export function getXAmzTargetAmazonPersonalizeListSolutionVersionsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions'] as const
}

export function getXAmzTargetAmazonPersonalizeListSolutionsKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListSolutions'] as const
}

export function getXAmzTargetAmazonPersonalizeListTagsForResourceKey() {
  return ['#X-Amz-Target=AmazonPersonalize.ListTagsForResource'] as const
}

export function getXAmzTargetAmazonPersonalizeStartRecommenderKey() {
  return ['#X-Amz-Target=AmazonPersonalize.StartRecommender'] as const
}

export function getXAmzTargetAmazonPersonalizeStopRecommenderKey() {
  return ['#X-Amz-Target=AmazonPersonalize.StopRecommender'] as const
}

export function getXAmzTargetAmazonPersonalizeStopSolutionVersionCreationKey() {
  return ['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation'] as const
}

export function getXAmzTargetAmazonPersonalizeTagResourceKey() {
  return ['#X-Amz-Target=AmazonPersonalize.TagResource'] as const
}

export function getXAmzTargetAmazonPersonalizeUntagResourceKey() {
  return ['#X-Amz-Target=AmazonPersonalize.UntagResource'] as const
}

export function getXAmzTargetAmazonPersonalizeUpdateCampaignKey() {
  return ['#X-Amz-Target=AmazonPersonalize.UpdateCampaign'] as const
}

export function getXAmzTargetAmazonPersonalizeUpdateMetricAttributionKey() {
  return ['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution'] as const
}

export function getXAmzTargetAmazonPersonalizeUpdateRecommenderKey() {
  return ['#X-Amz-Target=AmazonPersonalize.UpdateRecommender'] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateBatchInferenceJobKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob',
    '/#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateBatchInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateBatchInferenceJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateBatchSegmentJobKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob',
    '/#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateBatchSegmentJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateBatchSegmentJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateCampaignKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateCampaign',
    '/#X-Amz-Target=AmazonPersonalize.CreateCampaign',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateCampaign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateCampaign']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateCampaign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateCampaignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateCampaign']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateCampaign'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateDataset',
    '/#X-Amz-Target=AmazonPersonalize.CreateDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDataset']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateDatasetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetExportJobKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob',
    '/#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateDatasetExportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateDatasetExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetGroupKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup',
    '/#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateDatasetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateDatasetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetImportJobKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob',
    '/#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateDatasetImportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateDatasetImportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateEventTrackerKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateEventTracker',
    '/#X-Amz-Target=AmazonPersonalize.CreateEventTracker',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateEventTracker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateEventTracker']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateEventTracker']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateEventTrackerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateEventTracker']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateEventTracker'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateFilterKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateFilter',
    '/#X-Amz-Target=AmazonPersonalize.CreateFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateFilter']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateMetricAttributionKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution',
    '/#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateMetricAttribution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateMetricAttributionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateRecommenderKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateRecommender',
    '/#X-Amz-Target=AmazonPersonalize.CreateRecommender',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateRecommender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateRecommender']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateRecommender']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateRecommenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateRecommender']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateRecommender'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateSchemaKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateSchema',
    '/#X-Amz-Target=AmazonPersonalize.CreateSchema',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSchema']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSchema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSchema']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateSchema'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateSolutionKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateSolution',
    '/#X-Amz-Target=AmazonPersonalize.CreateSolution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateSolution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolution']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateSolutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateSolution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeCreateSolutionVersionKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion',
    '/#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeCreateSolutionVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeCreateSolutionVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDeleteCampaignKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteCampaign',
    '/#X-Amz-Target=AmazonPersonalize.DeleteCampaign',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDeleteCampaign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteCampaign']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteCampaign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDeleteCampaignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteCampaign']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DeleteCampaign'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDeleteDatasetKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteDataset',
    '/#X-Amz-Target=AmazonPersonalize.DeleteDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDeleteDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDataset']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDeleteDatasetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DeleteDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDeleteDatasetGroupKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup',
    '/#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDeleteDatasetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDeleteDatasetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDeleteEventTrackerKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteEventTracker',
    '/#X-Amz-Target=AmazonPersonalize.DeleteEventTracker',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDeleteEventTracker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDeleteEventTrackerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDeleteFilterKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteFilter',
    '/#X-Amz-Target=AmazonPersonalize.DeleteFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDeleteFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteFilter']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDeleteFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DeleteFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDeleteMetricAttributionKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution',
    '/#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDeleteMetricAttribution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDeleteMetricAttributionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDeleteRecommenderKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteRecommender',
    '/#X-Amz-Target=AmazonPersonalize.DeleteRecommender',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDeleteRecommender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteRecommender']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteRecommender']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDeleteRecommenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteRecommender']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DeleteRecommender'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDeleteSchemaKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteSchema',
    '/#X-Amz-Target=AmazonPersonalize.DeleteSchema',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDeleteSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSchema']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSchema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDeleteSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSchema']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DeleteSchema'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDeleteSolutionKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteSolution',
    '/#X-Amz-Target=AmazonPersonalize.DeleteSolution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDeleteSolution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSolution']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSolution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDeleteSolutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSolution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DeleteSolution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeAlgorithmKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm',
    '/#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeAlgorithm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeAlgorithmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeBatchInferenceJobKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob',
    '/#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeBatchInferenceJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeBatchInferenceJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob',
    '/#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeBatchSegmentJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeCampaignKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeCampaign',
    '/#X-Amz-Target=AmazonPersonalize.DescribeCampaign',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeCampaign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeCampaign']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeCampaign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeCampaignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeCampaign']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeCampaign'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeDataset',
    '/#X-Amz-Target=AmazonPersonalize.DescribeDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDataset']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeDatasetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetExportJobKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob',
    '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeDatasetExportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeDatasetExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetGroupKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup',
    '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeDatasetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeDatasetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetImportJobKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob',
    '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeDatasetImportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeDatasetImportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeEventTrackerKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeEventTracker',
    '/#X-Amz-Target=AmazonPersonalize.DescribeEventTracker',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeEventTracker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeEventTrackerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeFeatureTransformationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation',
    '/#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeFeatureTransformation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeFeatureTransformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeFilterKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeFilter',
    '/#X-Amz-Target=AmazonPersonalize.DescribeFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFilter']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeMetricAttributionKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution',
    '/#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeMetricAttribution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeMetricAttributionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeRecipeKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeRecipe',
    '/#X-Amz-Target=AmazonPersonalize.DescribeRecipe',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeRecipe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecipe']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecipe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeRecipeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecipe']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeRecipe'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeRecommenderKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeRecommender',
    '/#X-Amz-Target=AmazonPersonalize.DescribeRecommender',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeRecommender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecommender']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecommender']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeRecommenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecommender']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeRecommender'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeSchemaKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeSchema',
    '/#X-Amz-Target=AmazonPersonalize.DescribeSchema',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSchema']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSchema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSchema']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeSchema'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeSolutionKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeSolution',
    '/#X-Amz-Target=AmazonPersonalize.DescribeSolution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeSolution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolution']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeSolutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeSolution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeDescribeSolutionVersionKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion',
    '/#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeDescribeSolutionVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeDescribeSolutionVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeGetSolutionMetricsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics',
    '/#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeGetSolutionMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeGetSolutionMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListBatchInferenceJobsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs',
    '/#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListBatchInferenceJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListBatchInferenceJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListBatchSegmentJobsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs',
    '/#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListBatchSegmentJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListBatchSegmentJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListCampaignsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListCampaigns',
    '/#X-Amz-Target=AmazonPersonalize.ListCampaigns',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListCampaigns']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListCampaigns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListCampaigns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListCampaigns'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetExportJobsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs',
    '/#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListDatasetExportJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListDatasetExportJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetGroupsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListDatasetGroups',
    '/#X-Amz-Target=AmazonPersonalize.ListDatasetGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListDatasetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListDatasetGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetImportJobsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs',
    '/#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListDatasetImportJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListDatasetImportJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListDatasets',
    '/#X-Amz-Target=AmazonPersonalize.ListDatasets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListDatasets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListEventTrackersKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListEventTrackers',
    '/#X-Amz-Target=AmazonPersonalize.ListEventTrackers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListEventTrackers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.ListEventTrackers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListEventTrackers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListEventTrackersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListEventTrackers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListEventTrackers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListFiltersKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListFilters',
    '/#X-Amz-Target=AmazonPersonalize.ListFilters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListFilters']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListFilters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListFiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListFilters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListFilters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListMetricAttributionMetricsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics',
    '/#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListMetricAttributionMetrics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListMetricAttributionMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListMetricAttributionsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListMetricAttributions',
    '/#X-Amz-Target=AmazonPersonalize.ListMetricAttributions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListMetricAttributions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListMetricAttributionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListRecipesKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListRecipes',
    '/#X-Amz-Target=AmazonPersonalize.ListRecipes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListRecipes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecipes']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecipes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListRecipesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecipes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListRecipes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListRecommendersKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListRecommenders',
    '/#X-Amz-Target=AmazonPersonalize.ListRecommenders',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListRecommenders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecommenders']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecommenders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListRecommendersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecommenders']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListRecommenders'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListSchemasKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListSchemas',
    '/#X-Amz-Target=AmazonPersonalize.ListSchemas',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSchemas']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSchemas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListSchemasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSchemas']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListSchemas'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListSolutionVersionsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListSolutionVersions',
    '/#X-Amz-Target=AmazonPersonalize.ListSolutionVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListSolutionVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListSolutionVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListSolutionsKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListSolutions',
    '/#X-Amz-Target=AmazonPersonalize.ListSolutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListSolutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListSolutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListSolutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListTagsForResource',
    '/#X-Amz-Target=AmazonPersonalize.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeStartRecommenderKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.StartRecommender',
    '/#X-Amz-Target=AmazonPersonalize.StartRecommender',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeStartRecommender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.StartRecommender']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.StartRecommender']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeStartRecommenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.StartRecommender']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.StartRecommender'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeStopRecommenderKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.StopRecommender',
    '/#X-Amz-Target=AmazonPersonalize.StopRecommender',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeStopRecommender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.StopRecommender']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.StopRecommender']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeStopRecommenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.StopRecommender']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.StopRecommender'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeStopSolutionVersionCreationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation',
    '/#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeStopSolutionVersionCreation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeStopSolutionVersionCreationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeTagResourceKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.TagResource',
    '/#X-Amz-Target=AmazonPersonalize.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeUntagResourceKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.UntagResource',
    '/#X-Amz-Target=AmazonPersonalize.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeUpdateCampaignKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.UpdateCampaign',
    '/#X-Amz-Target=AmazonPersonalize.UpdateCampaign',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeUpdateCampaign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateCampaign']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateCampaign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeUpdateCampaignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateCampaign']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.UpdateCampaign'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeUpdateMetricAttributionKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution',
    '/#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeUpdateMetricAttribution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeUpdateMetricAttributionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonPersonalizeUpdateRecommenderKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.UpdateRecommender',
    '/#X-Amz-Target=AmazonPersonalize.UpdateRecommender',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonPersonalizeUpdateRecommender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateRecommender']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateRecommender']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonPersonalizeUpdateRecommenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateRecommender']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonPersonalize.UpdateRecommender'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
