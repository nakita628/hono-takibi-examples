import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAmazonPersonalizeCreateBatchInferenceJobHandler,
  XAmzTargetAmazonPersonalizeCreateBatchSegmentJobHandler,
  XAmzTargetAmazonPersonalizeCreateCampaignHandler,
  XAmzTargetAmazonPersonalizeCreateDatasetExportJobHandler,
  XAmzTargetAmazonPersonalizeCreateDatasetGroupHandler,
  XAmzTargetAmazonPersonalizeCreateDatasetHandler,
  XAmzTargetAmazonPersonalizeCreateDatasetImportJobHandler,
  XAmzTargetAmazonPersonalizeCreateEventTrackerHandler,
  XAmzTargetAmazonPersonalizeCreateFilterHandler,
  XAmzTargetAmazonPersonalizeCreateMetricAttributionHandler,
  XAmzTargetAmazonPersonalizeCreateRecommenderHandler,
  XAmzTargetAmazonPersonalizeCreateSchemaHandler,
  XAmzTargetAmazonPersonalizeCreateSolutionHandler,
  XAmzTargetAmazonPersonalizeCreateSolutionVersionHandler,
  XAmzTargetAmazonPersonalizeDeleteCampaignHandler,
  XAmzTargetAmazonPersonalizeDeleteDatasetGroupHandler,
  XAmzTargetAmazonPersonalizeDeleteDatasetHandler,
  XAmzTargetAmazonPersonalizeDeleteEventTrackerHandler,
  XAmzTargetAmazonPersonalizeDeleteFilterHandler,
  XAmzTargetAmazonPersonalizeDeleteMetricAttributionHandler,
  XAmzTargetAmazonPersonalizeDeleteRecommenderHandler,
  XAmzTargetAmazonPersonalizeDeleteSchemaHandler,
  XAmzTargetAmazonPersonalizeDeleteSolutionHandler,
  XAmzTargetAmazonPersonalizeDescribeAlgorithmHandler,
  XAmzTargetAmazonPersonalizeDescribeBatchInferenceJobHandler,
  XAmzTargetAmazonPersonalizeDescribeBatchSegmentJobHandler,
  XAmzTargetAmazonPersonalizeDescribeCampaignHandler,
  XAmzTargetAmazonPersonalizeDescribeDatasetExportJobHandler,
  XAmzTargetAmazonPersonalizeDescribeDatasetGroupHandler,
  XAmzTargetAmazonPersonalizeDescribeDatasetHandler,
  XAmzTargetAmazonPersonalizeDescribeDatasetImportJobHandler,
  XAmzTargetAmazonPersonalizeDescribeEventTrackerHandler,
  XAmzTargetAmazonPersonalizeDescribeFeatureTransformationHandler,
  XAmzTargetAmazonPersonalizeDescribeFilterHandler,
  XAmzTargetAmazonPersonalizeDescribeMetricAttributionHandler,
  XAmzTargetAmazonPersonalizeDescribeRecipeHandler,
  XAmzTargetAmazonPersonalizeDescribeRecommenderHandler,
  XAmzTargetAmazonPersonalizeDescribeSchemaHandler,
  XAmzTargetAmazonPersonalizeDescribeSolutionHandler,
  XAmzTargetAmazonPersonalizeDescribeSolutionVersionHandler,
  XAmzTargetAmazonPersonalizeGetSolutionMetricsHandler,
  XAmzTargetAmazonPersonalizeListBatchInferenceJobsHandler,
  XAmzTargetAmazonPersonalizeListBatchSegmentJobsHandler,
  XAmzTargetAmazonPersonalizeListCampaignsHandler,
  XAmzTargetAmazonPersonalizeListDatasetExportJobsHandler,
  XAmzTargetAmazonPersonalizeListDatasetGroupsHandler,
  XAmzTargetAmazonPersonalizeListDatasetImportJobsHandler,
  XAmzTargetAmazonPersonalizeListDatasetsHandler,
  XAmzTargetAmazonPersonalizeListEventTrackersHandler,
  XAmzTargetAmazonPersonalizeListFiltersHandler,
  XAmzTargetAmazonPersonalizeListMetricAttributionMetricsHandler,
  XAmzTargetAmazonPersonalizeListMetricAttributionsHandler,
  XAmzTargetAmazonPersonalizeListRecipesHandler,
  XAmzTargetAmazonPersonalizeListRecommendersHandler,
  XAmzTargetAmazonPersonalizeListSchemasHandler,
  XAmzTargetAmazonPersonalizeListSolutionsHandler,
  XAmzTargetAmazonPersonalizeListSolutionVersionsHandler,
  XAmzTargetAmazonPersonalizeListTagsForResourceHandler,
  XAmzTargetAmazonPersonalizeStartRecommenderHandler,
  XAmzTargetAmazonPersonalizeStopRecommenderHandler,
  XAmzTargetAmazonPersonalizeStopSolutionVersionCreationHandler,
  XAmzTargetAmazonPersonalizeTagResourceHandler,
  XAmzTargetAmazonPersonalizeUntagResourceHandler,
  XAmzTargetAmazonPersonalizeUpdateCampaignHandler,
  XAmzTargetAmazonPersonalizeUpdateMetricAttributionHandler,
  XAmzTargetAmazonPersonalizeUpdateRecommenderHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAmazonPersonalizeCreateBatchInferenceJobHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateBatchSegmentJobHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateCampaignHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateDatasetHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateDatasetExportJobHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateDatasetGroupHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateDatasetImportJobHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateEventTrackerHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateFilterHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateMetricAttributionHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateRecommenderHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateSchemaHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateSolutionHandler)
  .route('/', XAmzTargetAmazonPersonalizeCreateSolutionVersionHandler)
  .route('/', XAmzTargetAmazonPersonalizeDeleteCampaignHandler)
  .route('/', XAmzTargetAmazonPersonalizeDeleteDatasetHandler)
  .route('/', XAmzTargetAmazonPersonalizeDeleteDatasetGroupHandler)
  .route('/', XAmzTargetAmazonPersonalizeDeleteEventTrackerHandler)
  .route('/', XAmzTargetAmazonPersonalizeDeleteFilterHandler)
  .route('/', XAmzTargetAmazonPersonalizeDeleteMetricAttributionHandler)
  .route('/', XAmzTargetAmazonPersonalizeDeleteRecommenderHandler)
  .route('/', XAmzTargetAmazonPersonalizeDeleteSchemaHandler)
  .route('/', XAmzTargetAmazonPersonalizeDeleteSolutionHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeAlgorithmHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeBatchInferenceJobHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeBatchSegmentJobHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeCampaignHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeDatasetHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeDatasetExportJobHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeDatasetGroupHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeDatasetImportJobHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeEventTrackerHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeFeatureTransformationHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeFilterHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeMetricAttributionHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeRecipeHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeRecommenderHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeSchemaHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeSolutionHandler)
  .route('/', XAmzTargetAmazonPersonalizeDescribeSolutionVersionHandler)
  .route('/', XAmzTargetAmazonPersonalizeGetSolutionMetricsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListBatchInferenceJobsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListBatchSegmentJobsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListCampaignsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListDatasetExportJobsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListDatasetGroupsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListDatasetImportJobsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListDatasetsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListEventTrackersHandler)
  .route('/', XAmzTargetAmazonPersonalizeListFiltersHandler)
  .route('/', XAmzTargetAmazonPersonalizeListMetricAttributionMetricsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListMetricAttributionsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListRecipesHandler)
  .route('/', XAmzTargetAmazonPersonalizeListRecommendersHandler)
  .route('/', XAmzTargetAmazonPersonalizeListSchemasHandler)
  .route('/', XAmzTargetAmazonPersonalizeListSolutionVersionsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListSolutionsHandler)
  .route('/', XAmzTargetAmazonPersonalizeListTagsForResourceHandler)
  .route('/', XAmzTargetAmazonPersonalizeStartRecommenderHandler)
  .route('/', XAmzTargetAmazonPersonalizeStopRecommenderHandler)
  .route('/', XAmzTargetAmazonPersonalizeStopSolutionVersionCreationHandler)
  .route('/', XAmzTargetAmazonPersonalizeTagResourceHandler)
  .route('/', XAmzTargetAmazonPersonalizeUntagResourceHandler)
  .route('/', XAmzTargetAmazonPersonalizeUpdateCampaignHandler)
  .route('/', XAmzTargetAmazonPersonalizeUpdateMetricAttributionHandler)
  .route('/', XAmzTargetAmazonPersonalizeUpdateRecommenderHandler)

export default app
