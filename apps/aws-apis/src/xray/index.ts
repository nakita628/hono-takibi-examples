import { OpenAPIHono } from '@hono/zod-openapi'
import {
  createGroupHandler,
  createSamplingRuleHandler,
  deleteGroupHandler,
  deleteResourcePolicyHandler,
  deleteSamplingRuleHandler,
  encryptionConfigHandler,
  getGroupHandler,
  getSamplingRulesHandler,
  groupsHandler,
  insightEventsHandler,
  insightHandler,
  insightImpactGraphHandler,
  insightSummariesHandler,
  listResourcePoliciesHandler,
  listTagsForResourceHandler,
  putEncryptionConfigHandler,
  putResourcePolicyHandler,
  samplingStatisticSummariesHandler,
  samplingTargetsHandler,
  serviceGraphHandler,
  tagResourceHandler,
  telemetryRecordsHandler,
  timeSeriesServiceStatisticsHandler,
  traceGraphHandler,
  traceSegmentsHandler,
  tracesHandler,
  traceSummariesHandler,
  untagResourceHandler,
  updateGroupHandler,
  updateSamplingRuleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', tracesHandler)
  .route('/', createGroupHandler)
  .route('/', createSamplingRuleHandler)
  .route('/', deleteGroupHandler)
  .route('/', deleteResourcePolicyHandler)
  .route('/', deleteSamplingRuleHandler)
  .route('/', encryptionConfigHandler)
  .route('/', getGroupHandler)
  .route('/', groupsHandler)
  .route('/', insightHandler)
  .route('/', insightEventsHandler)
  .route('/', insightImpactGraphHandler)
  .route('/', insightSummariesHandler)
  .route('/', getSamplingRulesHandler)
  .route('/', samplingStatisticSummariesHandler)
  .route('/', samplingTargetsHandler)
  .route('/', serviceGraphHandler)
  .route('/', timeSeriesServiceStatisticsHandler)
  .route('/', traceGraphHandler)
  .route('/', traceSummariesHandler)
  .route('/', listResourcePoliciesHandler)
  .route('/', listTagsForResourceHandler)
  .route('/', putEncryptionConfigHandler)
  .route('/', putResourcePolicyHandler)
  .route('/', telemetryRecordsHandler)
  .route('/', traceSegmentsHandler)
  .route('/', tagResourceHandler)
  .route('/', untagResourceHandler)
  .route('/', updateGroupHandler)
  .route('/', updateSamplingRuleHandler)

export default app
