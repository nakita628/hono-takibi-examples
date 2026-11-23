import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAmazonPersonalizeCreateBatchInferenceJobHandler,
  xAmzTargetAmazonPersonalizeCreateBatchSegmentJobHandler,
  xAmzTargetAmazonPersonalizeCreateCampaignHandler,
  xAmzTargetAmazonPersonalizeCreateDatasetExportJobHandler,
  xAmzTargetAmazonPersonalizeCreateDatasetGroupHandler,
  xAmzTargetAmazonPersonalizeCreateDatasetHandler,
  xAmzTargetAmazonPersonalizeCreateDatasetImportJobHandler,
  xAmzTargetAmazonPersonalizeCreateEventTrackerHandler,
  xAmzTargetAmazonPersonalizeCreateFilterHandler,
  xAmzTargetAmazonPersonalizeCreateMetricAttributionHandler,
  xAmzTargetAmazonPersonalizeCreateRecommenderHandler,
  xAmzTargetAmazonPersonalizeCreateSchemaHandler,
  xAmzTargetAmazonPersonalizeCreateSolutionHandler,
  xAmzTargetAmazonPersonalizeCreateSolutionVersionHandler,
  xAmzTargetAmazonPersonalizeDeleteCampaignHandler,
  xAmzTargetAmazonPersonalizeDeleteDatasetGroupHandler,
  xAmzTargetAmazonPersonalizeDeleteDatasetHandler,
  xAmzTargetAmazonPersonalizeDeleteEventTrackerHandler,
  xAmzTargetAmazonPersonalizeDeleteFilterHandler,
  xAmzTargetAmazonPersonalizeDeleteMetricAttributionHandler,
  xAmzTargetAmazonPersonalizeDeleteRecommenderHandler,
  xAmzTargetAmazonPersonalizeDeleteSchemaHandler,
  xAmzTargetAmazonPersonalizeDeleteSolutionHandler,
  xAmzTargetAmazonPersonalizeDescribeAlgorithmHandler,
  xAmzTargetAmazonPersonalizeDescribeBatchInferenceJobHandler,
  xAmzTargetAmazonPersonalizeDescribeBatchSegmentJobHandler,
  xAmzTargetAmazonPersonalizeDescribeCampaignHandler,
  xAmzTargetAmazonPersonalizeDescribeDatasetExportJobHandler,
  xAmzTargetAmazonPersonalizeDescribeDatasetGroupHandler,
  xAmzTargetAmazonPersonalizeDescribeDatasetHandler,
  xAmzTargetAmazonPersonalizeDescribeDatasetImportJobHandler,
  xAmzTargetAmazonPersonalizeDescribeEventTrackerHandler,
  xAmzTargetAmazonPersonalizeDescribeFeatureTransformationHandler,
  xAmzTargetAmazonPersonalizeDescribeFilterHandler,
  xAmzTargetAmazonPersonalizeDescribeMetricAttributionHandler,
  xAmzTargetAmazonPersonalizeDescribeRecipeHandler,
  xAmzTargetAmazonPersonalizeDescribeRecommenderHandler,
  xAmzTargetAmazonPersonalizeDescribeSchemaHandler,
  xAmzTargetAmazonPersonalizeDescribeSolutionHandler,
  xAmzTargetAmazonPersonalizeDescribeSolutionVersionHandler,
  xAmzTargetAmazonPersonalizeGetSolutionMetricsHandler,
  xAmzTargetAmazonPersonalizeListBatchInferenceJobsHandler,
  xAmzTargetAmazonPersonalizeListBatchSegmentJobsHandler,
  xAmzTargetAmazonPersonalizeListCampaignsHandler,
  xAmzTargetAmazonPersonalizeListDatasetExportJobsHandler,
  xAmzTargetAmazonPersonalizeListDatasetGroupsHandler,
  xAmzTargetAmazonPersonalizeListDatasetImportJobsHandler,
  xAmzTargetAmazonPersonalizeListDatasetsHandler,
  xAmzTargetAmazonPersonalizeListEventTrackersHandler,
  xAmzTargetAmazonPersonalizeListFiltersHandler,
  xAmzTargetAmazonPersonalizeListMetricAttributionMetricsHandler,
  xAmzTargetAmazonPersonalizeListMetricAttributionsHandler,
  xAmzTargetAmazonPersonalizeListRecipesHandler,
  xAmzTargetAmazonPersonalizeListRecommendersHandler,
  xAmzTargetAmazonPersonalizeListSchemasHandler,
  xAmzTargetAmazonPersonalizeListSolutionsHandler,
  xAmzTargetAmazonPersonalizeListSolutionVersionsHandler,
  xAmzTargetAmazonPersonalizeListTagsForResourceHandler,
  xAmzTargetAmazonPersonalizeStartRecommenderHandler,
  xAmzTargetAmazonPersonalizeStopRecommenderHandler,
  xAmzTargetAmazonPersonalizeStopSolutionVersionCreationHandler,
  xAmzTargetAmazonPersonalizeTagResourceHandler,
  xAmzTargetAmazonPersonalizeUntagResourceHandler,
  xAmzTargetAmazonPersonalizeUpdateCampaignHandler,
  xAmzTargetAmazonPersonalizeUpdateMetricAttributionHandler,
  xAmzTargetAmazonPersonalizeUpdateRecommenderHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAmazonPersonalizeCreateBatchInferenceJobHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateBatchSegmentJobHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateCampaignHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateDatasetHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateDatasetExportJobHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateDatasetGroupHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateDatasetImportJobHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateEventTrackerHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateFilterHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateMetricAttributionHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateRecommenderHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateSchemaHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateSolutionHandler)
  .route('/', xAmzTargetAmazonPersonalizeCreateSolutionVersionHandler)
  .route('/', xAmzTargetAmazonPersonalizeDeleteCampaignHandler)
  .route('/', xAmzTargetAmazonPersonalizeDeleteDatasetHandler)
  .route('/', xAmzTargetAmazonPersonalizeDeleteDatasetGroupHandler)
  .route('/', xAmzTargetAmazonPersonalizeDeleteEventTrackerHandler)
  .route('/', xAmzTargetAmazonPersonalizeDeleteFilterHandler)
  .route('/', xAmzTargetAmazonPersonalizeDeleteMetricAttributionHandler)
  .route('/', xAmzTargetAmazonPersonalizeDeleteRecommenderHandler)
  .route('/', xAmzTargetAmazonPersonalizeDeleteSchemaHandler)
  .route('/', xAmzTargetAmazonPersonalizeDeleteSolutionHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeAlgorithmHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeBatchInferenceJobHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeBatchSegmentJobHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeCampaignHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeDatasetHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeDatasetExportJobHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeDatasetGroupHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeDatasetImportJobHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeEventTrackerHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeFeatureTransformationHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeFilterHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeMetricAttributionHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeRecipeHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeRecommenderHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeSchemaHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeSolutionHandler)
  .route('/', xAmzTargetAmazonPersonalizeDescribeSolutionVersionHandler)
  .route('/', xAmzTargetAmazonPersonalizeGetSolutionMetricsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListBatchInferenceJobsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListBatchSegmentJobsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListCampaignsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListDatasetExportJobsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListDatasetGroupsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListDatasetImportJobsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListDatasetsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListEventTrackersHandler)
  .route('/', xAmzTargetAmazonPersonalizeListFiltersHandler)
  .route('/', xAmzTargetAmazonPersonalizeListMetricAttributionMetricsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListMetricAttributionsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListRecipesHandler)
  .route('/', xAmzTargetAmazonPersonalizeListRecommendersHandler)
  .route('/', xAmzTargetAmazonPersonalizeListSchemasHandler)
  .route('/', xAmzTargetAmazonPersonalizeListSolutionVersionsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListSolutionsHandler)
  .route('/', xAmzTargetAmazonPersonalizeListTagsForResourceHandler)
  .route('/', xAmzTargetAmazonPersonalizeStartRecommenderHandler)
  .route('/', xAmzTargetAmazonPersonalizeStopRecommenderHandler)
  .route('/', xAmzTargetAmazonPersonalizeStopSolutionVersionCreationHandler)
  .route('/', xAmzTargetAmazonPersonalizeTagResourceHandler)
  .route('/', xAmzTargetAmazonPersonalizeUntagResourceHandler)
  .route('/', xAmzTargetAmazonPersonalizeUpdateCampaignHandler)
  .route('/', xAmzTargetAmazonPersonalizeUpdateMetricAttributionHandler)
  .route('/', xAmzTargetAmazonPersonalizeUpdateRecommenderHandler)

export default app
