import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceListModelsHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerHandler,
  XAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceListModelsHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerHandler)
  .route('/', XAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupHandler)

export default app
