import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActivateAnomalyDetectorHandler,
  BackTestAnomalyDetectorHandler,
  CreateAlertHandler,
  CreateAnomalyDetectorHandler,
  CreateMetricSetHandler,
  DeactivateAnomalyDetectorHandler,
  DeleteAlertHandler,
  DeleteAnomalyDetectorHandler,
  DescribeAlertHandler,
  DescribeAnomalyDetectionExecutionsHandler,
  DescribeAnomalyDetectorHandler,
  DescribeMetricSetHandler,
  DetectMetricSetConfigHandler,
  GetAnomalyGroupHandler,
  GetDataQualityMetricsHandler,
  GetFeedbackHandler,
  GetSampleDataHandler,
  ListAlertsHandler,
  ListAnomalyDetectorsHandler,
  ListAnomalyGroupRelatedMetricsHandler,
  ListAnomalyGroupSummariesHandler,
  ListAnomalyGroupTimeSeriesHandler,
  ListMetricSetsHandler,
  PutFeedbackHandler,
  tagsHandler,
  UpdateAlertHandler,
  UpdateAnomalyDetectorHandler,
  UpdateMetricSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActivateAnomalyDetectorHandler)
  .route('/', BackTestAnomalyDetectorHandler)
  .route('/', CreateAlertHandler)
  .route('/', CreateAnomalyDetectorHandler)
  .route('/', CreateMetricSetHandler)
  .route('/', DeactivateAnomalyDetectorHandler)
  .route('/', DeleteAlertHandler)
  .route('/', DeleteAnomalyDetectorHandler)
  .route('/', DescribeAlertHandler)
  .route('/', DescribeAnomalyDetectionExecutionsHandler)
  .route('/', DescribeAnomalyDetectorHandler)
  .route('/', DescribeMetricSetHandler)
  .route('/', DetectMetricSetConfigHandler)
  .route('/', GetAnomalyGroupHandler)
  .route('/', GetDataQualityMetricsHandler)
  .route('/', GetFeedbackHandler)
  .route('/', GetSampleDataHandler)
  .route('/', ListAlertsHandler)
  .route('/', ListAnomalyDetectorsHandler)
  .route('/', ListAnomalyGroupRelatedMetricsHandler)
  .route('/', ListAnomalyGroupSummariesHandler)
  .route('/', ListAnomalyGroupTimeSeriesHandler)
  .route('/', ListMetricSetsHandler)
  .route('/', tagsHandler)
  .route('/', PutFeedbackHandler)
  .route('/', UpdateAlertHandler)
  .route('/', UpdateAnomalyDetectorHandler)
  .route('/', UpdateMetricSetHandler)

export default app
