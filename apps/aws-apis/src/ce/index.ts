import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsInsightsIndexServiceCreateAnomalyMonitorHandler,
  xAmzTargetAwsInsightsIndexServiceCreateAnomalySubscriptionHandler,
  xAmzTargetAwsInsightsIndexServiceCreateCostCategoryDefinitionHandler,
  xAmzTargetAwsInsightsIndexServiceDeleteAnomalyMonitorHandler,
  xAmzTargetAwsInsightsIndexServiceDeleteAnomalySubscriptionHandler,
  xAmzTargetAwsInsightsIndexServiceDeleteCostCategoryDefinitionHandler,
  xAmzTargetAwsInsightsIndexServiceDescribeCostCategoryDefinitionHandler,
  xAmzTargetAwsInsightsIndexServiceGetAnomaliesHandler,
  xAmzTargetAwsInsightsIndexServiceGetAnomalyMonitorsHandler,
  xAmzTargetAwsInsightsIndexServiceGetAnomalySubscriptionsHandler,
  xAmzTargetAwsInsightsIndexServiceGetCostAndUsageHandler,
  xAmzTargetAwsInsightsIndexServiceGetCostAndUsageWithResourcesHandler,
  xAmzTargetAwsInsightsIndexServiceGetCostCategoriesHandler,
  xAmzTargetAwsInsightsIndexServiceGetCostForecastHandler,
  xAmzTargetAwsInsightsIndexServiceGetDimensionValuesHandler,
  xAmzTargetAwsInsightsIndexServiceGetReservationCoverageHandler,
  xAmzTargetAwsInsightsIndexServiceGetReservationPurchaseRecommendationHandler,
  xAmzTargetAwsInsightsIndexServiceGetReservationUtilizationHandler,
  xAmzTargetAwsInsightsIndexServiceGetRightsizingRecommendationHandler,
  xAmzTargetAwsInsightsIndexServiceGetSavingsPlansCoverageHandler,
  xAmzTargetAwsInsightsIndexServiceGetSavingsPlansPurchaseRecommendationHandler,
  xAmzTargetAwsInsightsIndexServiceGetSavingsPlansUtilizationDetailsHandler,
  xAmzTargetAwsInsightsIndexServiceGetSavingsPlansUtilizationHandler,
  xAmzTargetAwsInsightsIndexServiceGetTagsHandler,
  xAmzTargetAwsInsightsIndexServiceGetUsageForecastHandler,
  xAmzTargetAwsInsightsIndexServiceListCostAllocationTagsHandler,
  xAmzTargetAwsInsightsIndexServiceListCostCategoryDefinitionsHandler,
  xAmzTargetAwsInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationHandler,
  xAmzTargetAwsInsightsIndexServiceListTagsForResourceHandler,
  xAmzTargetAwsInsightsIndexServiceProvideAnomalyFeedbackHandler,
  xAmzTargetAwsInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationHandler,
  xAmzTargetAwsInsightsIndexServiceTagResourceHandler,
  xAmzTargetAwsInsightsIndexServiceUntagResourceHandler,
  xAmzTargetAwsInsightsIndexServiceUpdateAnomalyMonitorHandler,
  xAmzTargetAwsInsightsIndexServiceUpdateAnomalySubscriptionHandler,
  xAmzTargetAwsInsightsIndexServiceUpdateCostAllocationTagsStatusHandler,
  xAmzTargetAwsInsightsIndexServiceUpdateCostCategoryDefinitionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsInsightsIndexServiceCreateAnomalyMonitorHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceCreateAnomalySubscriptionHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceCreateCostCategoryDefinitionHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceDeleteAnomalyMonitorHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceDeleteAnomalySubscriptionHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceDeleteCostCategoryDefinitionHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceDescribeCostCategoryDefinitionHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetAnomaliesHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetAnomalyMonitorsHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetAnomalySubscriptionsHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetCostAndUsageHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetCostAndUsageWithResourcesHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetCostCategoriesHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetCostForecastHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetDimensionValuesHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetReservationCoverageHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetReservationPurchaseRecommendationHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetReservationUtilizationHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetRightsizingRecommendationHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetSavingsPlansCoverageHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetSavingsPlansPurchaseRecommendationHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetSavingsPlansUtilizationHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetSavingsPlansUtilizationDetailsHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetTagsHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceGetUsageForecastHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceListCostAllocationTagsHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceListCostCategoryDefinitionsHandler)
  .route(
    '/',
    xAmzTargetAwsInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationHandler,
  )
  .route('/', xAmzTargetAwsInsightsIndexServiceListTagsForResourceHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceProvideAnomalyFeedbackHandler)
  .route(
    '/',
    xAmzTargetAwsInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationHandler,
  )
  .route('/', xAmzTargetAwsInsightsIndexServiceTagResourceHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceUntagResourceHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceUpdateAnomalyMonitorHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceUpdateAnomalySubscriptionHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceUpdateCostAllocationTagsStatusHandler)
  .route('/', xAmzTargetAwsInsightsIndexServiceUpdateCostCategoryDefinitionHandler)

export default app
