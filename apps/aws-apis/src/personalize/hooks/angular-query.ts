import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostXAmzTargetAmazonPersonalizeCreateBatchInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob',
    '/#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateBatchInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateBatchInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateBatchInferenceJob<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeCreateBatchInferenceJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateBatchSegmentJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob',
    '/#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateBatchSegmentJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateBatchSegmentJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateBatchSegmentJob<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeCreateBatchSegmentJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateCampaignMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateCampaign',
    '/#X-Amz-Target=AmazonPersonalize.CreateCampaign',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateCampaignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateCampaign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateCampaignMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateCampaign']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateCampaign'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateCampaign<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateCampaign']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateCampaign']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeCreateCampaignMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateDataset',
    '/#X-Amz-Target=AmazonPersonalize.CreateDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateDataset'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateDataset<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDataset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDataset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeCreateDatasetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetExportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob',
    '/#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateDatasetExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateDatasetExportJob<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeCreateDatasetExportJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup',
    '/#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateDatasetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateDatasetGroup<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeCreateDatasetGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetImportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob',
    '/#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateDatasetImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateDatasetImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateDatasetImportJob<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeCreateDatasetImportJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateEventTrackerMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateEventTracker',
    '/#X-Amz-Target=AmazonPersonalize.CreateEventTracker',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateEventTrackerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateEventTracker']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateEventTrackerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateEventTracker']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateEventTracker'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateEventTracker<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateEventTracker']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateEventTracker']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeCreateEventTrackerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateFilterMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateFilter',
    '/#X-Amz-Target=AmazonPersonalize.CreateFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateFilter'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateFilter<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateFilter']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateFilter']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeCreateFilterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateMetricAttributionMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution',
    '/#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateMetricAttributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateMetricAttributionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateMetricAttribution<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeCreateMetricAttributionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateRecommenderMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateRecommender',
    '/#X-Amz-Target=AmazonPersonalize.CreateRecommender',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateRecommenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateRecommender']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateRecommenderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateRecommender']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateRecommender'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateRecommender<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateRecommender']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateRecommender']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeCreateRecommenderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateSchemaMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateSchema',
    '/#X-Amz-Target=AmazonPersonalize.CreateSchema',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSchema']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSchema']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateSchema'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateSchema<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSchema']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSchema']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeCreateSchemaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateSolutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateSolution',
    '/#X-Amz-Target=AmazonPersonalize.CreateSolution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateSolutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateSolutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateSolution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateSolution<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeCreateSolutionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeCreateSolutionVersionMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion',
    '/#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeCreateSolutionVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeCreateSolutionVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeCreateSolutionVersion<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeCreateSolutionVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDeleteCampaignMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteCampaign',
    '/#X-Amz-Target=AmazonPersonalize.DeleteCampaign',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDeleteCampaignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteCampaign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDeleteCampaignMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteCampaign']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DeleteCampaign'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDeleteCampaign<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteCampaign']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteCampaign']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDeleteCampaignMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDeleteDatasetMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteDataset',
    '/#X-Amz-Target=AmazonPersonalize.DeleteDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDeleteDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDeleteDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DeleteDataset'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDeleteDataset<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDataset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDataset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDeleteDatasetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDeleteDatasetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup',
    '/#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDeleteDatasetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDeleteDatasetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDeleteDatasetGroup<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDeleteDatasetGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDeleteEventTrackerMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteEventTracker',
    '/#X-Amz-Target=AmazonPersonalize.DeleteEventTracker',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDeleteEventTrackerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDeleteEventTrackerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDeleteEventTracker<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDeleteEventTrackerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDeleteFilterMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteFilter',
    '/#X-Amz-Target=AmazonPersonalize.DeleteFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDeleteFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDeleteFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DeleteFilter'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDeleteFilter<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteFilter']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteFilter']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDeleteFilterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDeleteMetricAttributionMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution',
    '/#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDeleteMetricAttributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDeleteMetricAttributionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDeleteMetricAttribution<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeDeleteMetricAttributionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDeleteRecommenderMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteRecommender',
    '/#X-Amz-Target=AmazonPersonalize.DeleteRecommender',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDeleteRecommenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteRecommender']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDeleteRecommenderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteRecommender']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DeleteRecommender'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDeleteRecommender<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteRecommender']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteRecommender']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDeleteRecommenderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDeleteSchemaMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteSchema',
    '/#X-Amz-Target=AmazonPersonalize.DeleteSchema',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDeleteSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSchema']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDeleteSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSchema']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DeleteSchema'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDeleteSchema<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSchema']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSchema']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDeleteSchemaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDeleteSolutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DeleteSolution',
    '/#X-Amz-Target=AmazonPersonalize.DeleteSolution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDeleteSolutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSolution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDeleteSolutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSolution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DeleteSolution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDeleteSolution<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSolution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSolution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDeleteSolutionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeAlgorithmMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm',
    '/#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeAlgorithmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeAlgorithmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeAlgorithm<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDescribeAlgorithmMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeBatchInferenceJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob',
    '/#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeBatchInferenceJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeBatchInferenceJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeBatchInferenceJob<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeDescribeBatchInferenceJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob',
    '/#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeBatchSegmentJob<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeCampaignMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeCampaign',
    '/#X-Amz-Target=AmazonPersonalize.DescribeCampaign',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeCampaignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeCampaign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeCampaignMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeCampaign']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeCampaign'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeCampaign<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeCampaign']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeCampaign']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDescribeCampaignMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeDataset',
    '/#X-Amz-Target=AmazonPersonalize.DescribeDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeDataset'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeDataset<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDataset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDataset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDescribeDatasetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetExportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob',
    '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeDatasetExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeDatasetExportJob<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeDescribeDatasetExportJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup',
    '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeDatasetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeDatasetGroup<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDescribeDatasetGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetImportJobMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob',
    '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeDatasetImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeDatasetImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeDatasetImportJob<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeDescribeDatasetImportJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeEventTrackerMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeEventTracker',
    '/#X-Amz-Target=AmazonPersonalize.DescribeEventTracker',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeEventTrackerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeEventTrackerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeEventTracker<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDescribeEventTrackerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeFeatureTransformationMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation',
    '/#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeFeatureTransformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeFeatureTransformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeFeatureTransformation<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeDescribeFeatureTransformationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeFilterMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeFilter',
    '/#X-Amz-Target=AmazonPersonalize.DescribeFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeFilter'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeFilter<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFilter']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFilter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDescribeFilterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeMetricAttributionMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution',
    '/#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeMetricAttributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeMetricAttributionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeMetricAttribution<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeDescribeMetricAttributionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeRecipeMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeRecipe',
    '/#X-Amz-Target=AmazonPersonalize.DescribeRecipe',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeRecipeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecipe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeRecipeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecipe']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeRecipe'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeRecipe<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecipe']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecipe']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDescribeRecipeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeRecommenderMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeRecommender',
    '/#X-Amz-Target=AmazonPersonalize.DescribeRecommender',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeRecommenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecommender']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeRecommenderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecommender']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeRecommender'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeRecommender<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecommender']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecommender']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDescribeRecommenderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeSchemaMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeSchema',
    '/#X-Amz-Target=AmazonPersonalize.DescribeSchema',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSchema']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSchema']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeSchema'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeSchema<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSchema']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSchema']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDescribeSchemaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeSolutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeSolution',
    '/#X-Amz-Target=AmazonPersonalize.DescribeSolution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeSolutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeSolutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeSolution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeSolution<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeDescribeSolutionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeDescribeSolutionVersionMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion',
    '/#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeDescribeSolutionVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeDescribeSolutionVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeDescribeSolutionVersion<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeDescribeSolutionVersionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeGetSolutionMetricsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics',
    '/#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeGetSolutionMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeGetSolutionMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeGetSolutionMetrics<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeGetSolutionMetricsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListBatchInferenceJobsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs',
    '/#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListBatchInferenceJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListBatchInferenceJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListBatchInferenceJobs<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeListBatchInferenceJobsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListBatchSegmentJobsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs',
    '/#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListBatchSegmentJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListBatchSegmentJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListBatchSegmentJobs<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListBatchSegmentJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListCampaignsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListCampaigns',
    '/#X-Amz-Target=AmazonPersonalize.ListCampaigns',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListCampaigns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListCampaignsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListCampaigns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListCampaigns'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListCampaigns<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListCampaigns']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListCampaigns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListCampaignsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetExportJobsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs',
    '/#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetExportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListDatasetExportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListDatasetExportJobs<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListDatasetExportJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetGroupsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListDatasetGroups',
    '/#X-Amz-Target=AmazonPersonalize.ListDatasetGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListDatasetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListDatasetGroups<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListDatasetGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetImportJobsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs',
    '/#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetImportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListDatasetImportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListDatasetImportJobs<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListDatasetImportJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListDatasets',
    '/#X-Amz-Target=AmazonPersonalize.ListDatasets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListDatasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListDatasets'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListDatasets<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListDatasetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListEventTrackersMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListEventTrackers',
    '/#X-Amz-Target=AmazonPersonalize.ListEventTrackers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListEventTrackersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListEventTrackers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListEventTrackersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListEventTrackers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListEventTrackers'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListEventTrackers<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListEventTrackers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListEventTrackers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListEventTrackersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListFiltersMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListFilters',
    '/#X-Amz-Target=AmazonPersonalize.ListFilters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListFilters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListFilters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListFilters'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListFilters<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListFilters']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListFilters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListFiltersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListMetricAttributionMetricsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics',
    '/#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListMetricAttributionMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListMetricAttributionMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListMetricAttributionMetrics<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeListMetricAttributionMetricsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListMetricAttributionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListMetricAttributions',
    '/#X-Amz-Target=AmazonPersonalize.ListMetricAttributions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListMetricAttributionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListMetricAttributionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListMetricAttributions<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeListMetricAttributionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListRecipesMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListRecipes',
    '/#X-Amz-Target=AmazonPersonalize.ListRecipes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListRecipesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecipes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListRecipesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecipes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListRecipes'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListRecipes<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecipes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecipes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListRecipesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListRecommendersMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListRecommenders',
    '/#X-Amz-Target=AmazonPersonalize.ListRecommenders',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListRecommendersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecommenders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListRecommendersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecommenders']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListRecommenders'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListRecommenders<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecommenders']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecommenders']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListRecommendersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListSchemasMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListSchemas',
    '/#X-Amz-Target=AmazonPersonalize.ListSchemas',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSchemas']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSchemas']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListSchemas'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListSchemas<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSchemas']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSchemas']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListSchemasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListSolutionVersionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListSolutionVersions',
    '/#X-Amz-Target=AmazonPersonalize.ListSolutionVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListSolutionVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListSolutionVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListSolutionVersions<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListSolutionVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListSolutionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListSolutions',
    '/#X-Amz-Target=AmazonPersonalize.ListSolutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListSolutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListSolutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListSolutions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListSolutions<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListSolutionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.ListTagsForResource',
    '/#X-Amz-Target=AmazonPersonalize.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeStartRecommenderMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.StartRecommender',
    '/#X-Amz-Target=AmazonPersonalize.StartRecommender',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeStartRecommenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.StartRecommender']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeStartRecommenderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.StartRecommender']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.StartRecommender'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeStartRecommender<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.StartRecommender']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.StartRecommender']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeStartRecommenderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeStopRecommenderMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.StopRecommender',
    '/#X-Amz-Target=AmazonPersonalize.StopRecommender',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeStopRecommenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.StopRecommender']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeStopRecommenderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.StopRecommender']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.StopRecommender'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeStopRecommender<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.StopRecommender']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.StopRecommender']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeStopRecommenderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeStopSolutionVersionCreationMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation',
    '/#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeStopSolutionVersionCreationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeStopSolutionVersionCreationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeStopSolutionVersionCreation<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeStopSolutionVersionCreationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.TagResource',
    '/#X-Amz-Target=AmazonPersonalize.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.TagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeTagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonPersonalize.TagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.UntagResource',
    '/#X-Amz-Target=AmazonPersonalize.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.UntagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeUntagResource<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeUpdateCampaignMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.UpdateCampaign',
    '/#X-Amz-Target=AmazonPersonalize.UpdateCampaign',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeUpdateCampaignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateCampaign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeUpdateCampaignMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateCampaign']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.UpdateCampaign'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeUpdateCampaign<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateCampaign']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateCampaign']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeUpdateCampaignMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeUpdateMetricAttributionMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution',
    '/#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeUpdateMetricAttributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeUpdateMetricAttributionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeUpdateMetricAttribution<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonPersonalizeUpdateMetricAttributionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonPersonalizeUpdateRecommenderMutationKey() {
  return [
    '#X-Amz-Target=AmazonPersonalize.UpdateRecommender',
    '/#X-Amz-Target=AmazonPersonalize.UpdateRecommender',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonPersonalizeUpdateRecommenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateRecommender']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonPersonalizeUpdateRecommenderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateRecommender']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonPersonalize.UpdateRecommender'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonPersonalizeUpdateRecommender<
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
                  (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateRecommender']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateRecommender']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonPersonalizeUpdateRecommenderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
