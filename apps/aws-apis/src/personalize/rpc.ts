import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAmazonPersonalizeCreateBatchInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateBatchSegmentJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateCampaign(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateCampaign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateCampaign'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateDataset(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDataset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateDataset'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateDatasetExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateDatasetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateDatasetImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateEventTracker(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateEventTracker']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateEventTracker'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateFilter(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateFilter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateFilter'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateMetricAttribution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateRecommender(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateRecommender']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateRecommender'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateSchema(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSchema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateSchema'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateSolution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateSolution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeCreateSolutionVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDeleteCampaign(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteCampaign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DeleteCampaign'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDeleteDataset(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDataset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DeleteDataset'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDeleteDatasetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDeleteEventTracker(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DeleteEventTracker'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDeleteFilter(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteFilter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DeleteFilter'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDeleteMetricAttribution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDeleteRecommender(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteRecommender']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DeleteRecommender'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDeleteSchema(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSchema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DeleteSchema'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDeleteSolution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DeleteSolution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DeleteSolution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeAlgorithm(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeBatchInferenceJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeBatchSegmentJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeCampaign(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeCampaign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeCampaign'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeDataset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDataset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeDataset'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeDatasetExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeDatasetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeDatasetImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeEventTracker(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeEventTracker'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeFeatureTransformation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeFilter(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeFilter'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeMetricAttribution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeRecipe(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecipe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeRecipe'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeRecommender(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeRecommender']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeRecommender'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeSchema(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSchema']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeSchema'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeSolution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeSolution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeDescribeSolutionVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeGetSolutionMetrics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListBatchInferenceJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListBatchSegmentJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListCampaigns(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListCampaigns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListCampaigns'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListDatasetExportJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListDatasetGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListDatasetGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListDatasetImportJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListDatasets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListDatasets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListDatasets'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListEventTrackers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListEventTrackers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListEventTrackers'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListFilters(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListFilters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListFilters'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListMetricAttributionMetrics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListMetricAttributions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListMetricAttributions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListRecipes(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecipes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListRecipes'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListRecommenders(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListRecommenders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListRecommenders'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListSchemas(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSchemas']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListSchemas'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListSolutionVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListSolutionVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListSolutions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.ListSolutions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListSolutions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeStartRecommender(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.StartRecommender']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.StartRecommender'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeStopRecommender(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.StopRecommender']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.StopRecommender'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeStopSolutionVersionCreation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonPersonalize.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeUpdateCampaign(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateCampaign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.UpdateCampaign'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeUpdateMetricAttribution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonPersonalizeUpdateRecommender(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonPersonalize.UpdateRecommender']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonPersonalize.UpdateRecommender'].$post(args, options),
  )
}
