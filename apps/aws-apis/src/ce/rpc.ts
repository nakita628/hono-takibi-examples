import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetAnomalies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetAnomalies'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetCostAndUsage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetCostCategories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetCostCategories'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetCostForecast(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetCostForecast'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetDimensionValues(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetReservationCoverage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetReservationUtilization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetTags'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceGetUsageForecast(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceListCostAllocationTags(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGeneration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedback(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGeneration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription'].$post(args, options),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition'].$post(
      args,
      options,
    ),
  )
}
