import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorHandler,
  XAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionHandler,
  XAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionHandler,
  XAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorHandler,
  XAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionHandler,
  XAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionHandler,
  XAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionHandler,
  XAmzTargetAWSInsightsIndexServiceGetAnomaliesHandler,
  XAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsHandler,
  XAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsHandler,
  XAmzTargetAWSInsightsIndexServiceGetCostAndUsageHandler,
  XAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesHandler,
  XAmzTargetAWSInsightsIndexServiceGetCostCategoriesHandler,
  XAmzTargetAWSInsightsIndexServiceGetCostForecastHandler,
  XAmzTargetAWSInsightsIndexServiceGetDimensionValuesHandler,
  XAmzTargetAWSInsightsIndexServiceGetReservationCoverageHandler,
  XAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationHandler,
  XAmzTargetAWSInsightsIndexServiceGetReservationUtilizationHandler,
  XAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationHandler,
  XAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageHandler,
  XAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationHandler,
  XAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsHandler,
  XAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationHandler,
  XAmzTargetAWSInsightsIndexServiceGetTagsHandler,
  XAmzTargetAWSInsightsIndexServiceGetUsageForecastHandler,
  XAmzTargetAWSInsightsIndexServiceListCostAllocationTagsHandler,
  XAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsHandler,
  XAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationHandler,
  XAmzTargetAWSInsightsIndexServiceListTagsForResourceHandler,
  XAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackHandler,
  XAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationHandler,
  XAmzTargetAWSInsightsIndexServiceTagResourceHandler,
  XAmzTargetAWSInsightsIndexServiceUntagResourceHandler,
  XAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorHandler,
  XAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionHandler,
  XAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusHandler,
  XAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceCreateCostCategoryDefinitionHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceDeleteCostCategoryDefinitionHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceDescribeCostCategoryDefinitionHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetAnomaliesHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetCostAndUsageHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetCostCategoriesHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetCostForecastHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetDimensionValuesHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetReservationCoverageHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetReservationPurchaseRecommendationHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetReservationUtilizationHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetTagsHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceGetUsageForecastHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceListCostAllocationTagsHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceListCostCategoryDefinitionsHandler)
  .route(
    '/',
    XAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationHandler,
  )
  .route('/', XAmzTargetAWSInsightsIndexServiceListTagsForResourceHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackHandler)
  .route(
    '/',
    XAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationHandler,
  )
  .route('/', XAmzTargetAWSInsightsIndexServiceTagResourceHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceUntagResourceHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusHandler)
  .route('/', XAmzTargetAWSInsightsIndexServiceUpdateCostCategoryDefinitionHandler)

export default app
