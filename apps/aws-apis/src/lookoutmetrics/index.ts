import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activateAnomalyDetectorHandler,
  backTestAnomalyDetectorHandler,
  createAlertHandler,
  createAnomalyDetectorHandler,
  createMetricSetHandler,
  deactivateAnomalyDetectorHandler,
  deleteAlertHandler,
  deleteAnomalyDetectorHandler,
  describeAlertHandler,
  describeAnomalyDetectionExecutionsHandler,
  describeAnomalyDetectorHandler,
  describeMetricSetHandler,
  detectMetricSetConfigHandler,
  getAnomalyGroupHandler,
  getDataQualityMetricsHandler,
  getFeedbackHandler,
  getSampleDataHandler,
  listAlertsHandler,
  listAnomalyDetectorsHandler,
  listAnomalyGroupRelatedMetricsHandler,
  listAnomalyGroupSummariesHandler,
  listAnomalyGroupTimeSeriesHandler,
  listMetricSetsHandler,
  putFeedbackHandler,
  tagsHandler,
  updateAlertHandler,
  updateAnomalyDetectorHandler,
  updateMetricSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', activateAnomalyDetectorHandler)
  .route('/', backTestAnomalyDetectorHandler)
  .route('/', createAlertHandler)
  .route('/', createAnomalyDetectorHandler)
  .route('/', createMetricSetHandler)
  .route('/', deactivateAnomalyDetectorHandler)
  .route('/', deleteAlertHandler)
  .route('/', deleteAnomalyDetectorHandler)
  .route('/', describeAlertHandler)
  .route('/', describeAnomalyDetectionExecutionsHandler)
  .route('/', describeAnomalyDetectorHandler)
  .route('/', describeMetricSetHandler)
  .route('/', detectMetricSetConfigHandler)
  .route('/', getAnomalyGroupHandler)
  .route('/', getDataQualityMetricsHandler)
  .route('/', getFeedbackHandler)
  .route('/', getSampleDataHandler)
  .route('/', listAlertsHandler)
  .route('/', listAnomalyDetectorsHandler)
  .route('/', listAnomalyGroupRelatedMetricsHandler)
  .route('/', listAnomalyGroupSummariesHandler)
  .route('/', listAnomalyGroupTimeSeriesHandler)
  .route('/', listMetricSetsHandler)
  .route('/', tagsHandler)
  .route('/', putFeedbackHandler)
  .route('/', updateAlertHandler)
  .route('/', updateAnomalyDetectorHandler)
  .route('/', updateMetricSetHandler)

export default app
