import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsLookoutEquipmentFrontendServiceCreateDatasetHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceCreateInferenceSchedulerHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceCreateLabelGroupHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceCreateLabelHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceCreateModelHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteDatasetHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteInferenceSchedulerHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteLabelGroupHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteLabelHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteModelHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeDataIngestionJobHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeDatasetHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeInferenceSchedulerHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeLabelGroupHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeLabelHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeModelHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceListDataIngestionJobsHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceListDatasetsHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceListInferenceEventsHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceListInferenceExecutionsHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceListInferenceSchedulersHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceListLabelGroupsHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceListLabelsHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceListModelsHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceListSensorStatisticsHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceListTagsForResourceHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceStartDataIngestionJobHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceStartInferenceSchedulerHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceStopInferenceSchedulerHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceTagResourceHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceUntagResourceHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceUpdateInferenceSchedulerHandler,
  xAmzTargetAwsLookoutEquipmentFrontendServiceUpdateLabelGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceCreateDatasetHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceCreateInferenceSchedulerHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceCreateLabelHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceCreateLabelGroupHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceCreateModelHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteDatasetHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteInferenceSchedulerHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteLabelHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteLabelGroupHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteModelHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeDataIngestionJobHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeDatasetHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeInferenceSchedulerHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeLabelHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeLabelGroupHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeModelHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceListDataIngestionJobsHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceListDatasetsHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceListInferenceEventsHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceListInferenceExecutionsHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceListInferenceSchedulersHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceListLabelGroupsHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceListLabelsHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceListModelsHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceListSensorStatisticsHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceListTagsForResourceHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceStartDataIngestionJobHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceStartInferenceSchedulerHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceStopInferenceSchedulerHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceTagResourceHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceUntagResourceHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceUpdateInferenceSchedulerHandler)
  .route('/', xAmzTargetAwsLookoutEquipmentFrontendServiceUpdateLabelGroupHandler)

export default app
