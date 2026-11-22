import { OpenAPIHono } from '@hono/zod-openapi'
import {
  CreateGroupHandler,
  CreateSamplingRuleHandler,
  DeleteGroupHandler,
  DeleteResourcePolicyHandler,
  DeleteSamplingRuleHandler,
  EncryptionConfigHandler,
  GetGroupHandler,
  GetSamplingRulesHandler,
  GroupsHandler,
  InsightEventsHandler,
  InsightHandler,
  InsightImpactGraphHandler,
  InsightSummariesHandler,
  ListResourcePoliciesHandler,
  ListTagsForResourceHandler,
  PutEncryptionConfigHandler,
  PutResourcePolicyHandler,
  SamplingStatisticSummariesHandler,
  SamplingTargetsHandler,
  ServiceGraphHandler,
  TagResourceHandler,
  TelemetryRecordsHandler,
  TimeSeriesServiceStatisticsHandler,
  TraceGraphHandler,
  TraceSegmentsHandler,
  TracesHandler,
  TraceSummariesHandler,
  UntagResourceHandler,
  UpdateGroupHandler,
  UpdateSamplingRuleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', TracesHandler)
  .route('/', CreateGroupHandler)
  .route('/', CreateSamplingRuleHandler)
  .route('/', DeleteGroupHandler)
  .route('/', DeleteResourcePolicyHandler)
  .route('/', DeleteSamplingRuleHandler)
  .route('/', EncryptionConfigHandler)
  .route('/', GetGroupHandler)
  .route('/', GroupsHandler)
  .route('/', InsightHandler)
  .route('/', InsightEventsHandler)
  .route('/', InsightImpactGraphHandler)
  .route('/', InsightSummariesHandler)
  .route('/', GetSamplingRulesHandler)
  .route('/', SamplingStatisticSummariesHandler)
  .route('/', SamplingTargetsHandler)
  .route('/', ServiceGraphHandler)
  .route('/', TimeSeriesServiceStatisticsHandler)
  .route('/', TraceGraphHandler)
  .route('/', TraceSummariesHandler)
  .route('/', ListResourcePoliciesHandler)
  .route('/', ListTagsForResourceHandler)
  .route('/', PutEncryptionConfigHandler)
  .route('/', PutResourcePolicyHandler)
  .route('/', TelemetryRecordsHandler)
  .route('/', TraceSegmentsHandler)
  .route('/', TagResourceHandler)
  .route('/', UntagResourceHandler)
  .route('/', UpdateGroupHandler)
  .route('/', UpdateSamplingRuleHandler)

export default app
