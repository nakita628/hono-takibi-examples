import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCreateGroupRoute,
  postCreateSamplingRuleRoute,
  postDeleteGroupRoute,
  postDeleteResourcePolicyRoute,
  postDeleteSamplingRuleRoute,
  postEncryptionConfigRoute,
  postGetGroupRoute,
  postGetSamplingRulesRoute,
  postGroupsRoute,
  postInsightEventsRoute,
  postInsightImpactGraphRoute,
  postInsightRoute,
  postInsightSummariesRoute,
  postListResourcePoliciesRoute,
  postListTagsForResourceRoute,
  postPutEncryptionConfigRoute,
  postPutResourcePolicyRoute,
  postSamplingStatisticSummariesRoute,
  postSamplingTargetsRoute,
  postServiceGraphRoute,
  postTagResourceRoute,
  postTelemetryRecordsRoute,
  postTimeSeriesServiceStatisticsRoute,
  postTraceGraphRoute,
  postTraceSegmentsRoute,
  postTracesRoute,
  postTraceSummariesRoute,
  postUntagResourceRoute,
  postUpdateGroupRoute,
  postUpdateSamplingRuleRoute,
} from './routes'
import {
  postCreateGroupRouteHandler,
  postCreateSamplingRuleRouteHandler,
  postDeleteGroupRouteHandler,
  postDeleteResourcePolicyRouteHandler,
  postDeleteSamplingRuleRouteHandler,
  postEncryptionConfigRouteHandler,
  postGetGroupRouteHandler,
  postGetSamplingRulesRouteHandler,
  postGroupsRouteHandler,
  postInsightEventsRouteHandler,
  postInsightImpactGraphRouteHandler,
  postInsightRouteHandler,
  postInsightSummariesRouteHandler,
  postListResourcePoliciesRouteHandler,
  postListTagsForResourceRouteHandler,
  postPutEncryptionConfigRouteHandler,
  postPutResourcePolicyRouteHandler,
  postSamplingStatisticSummariesRouteHandler,
  postSamplingTargetsRouteHandler,
  postServiceGraphRouteHandler,
  postTagResourceRouteHandler,
  postTelemetryRecordsRouteHandler,
  postTimeSeriesServiceStatisticsRouteHandler,
  postTraceGraphRouteHandler,
  postTraceSegmentsRouteHandler,
  postTracesRouteHandler,
  postTraceSummariesRouteHandler,
  postUntagResourceRouteHandler,
  postUpdateGroupRouteHandler,
  postUpdateSamplingRuleRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postTracesRoute, postTracesRouteHandler)
  .openapi(postCreateGroupRoute, postCreateGroupRouteHandler)
  .openapi(postCreateSamplingRuleRoute, postCreateSamplingRuleRouteHandler)
  .openapi(postDeleteGroupRoute, postDeleteGroupRouteHandler)
  .openapi(postDeleteResourcePolicyRoute, postDeleteResourcePolicyRouteHandler)
  .openapi(postDeleteSamplingRuleRoute, postDeleteSamplingRuleRouteHandler)
  .openapi(postEncryptionConfigRoute, postEncryptionConfigRouteHandler)
  .openapi(postGetGroupRoute, postGetGroupRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(postInsightRoute, postInsightRouteHandler)
  .openapi(postInsightEventsRoute, postInsightEventsRouteHandler)
  .openapi(postInsightImpactGraphRoute, postInsightImpactGraphRouteHandler)
  .openapi(postInsightSummariesRoute, postInsightSummariesRouteHandler)
  .openapi(postGetSamplingRulesRoute, postGetSamplingRulesRouteHandler)
  .openapi(postSamplingStatisticSummariesRoute, postSamplingStatisticSummariesRouteHandler)
  .openapi(postSamplingTargetsRoute, postSamplingTargetsRouteHandler)
  .openapi(postServiceGraphRoute, postServiceGraphRouteHandler)
  .openapi(postTimeSeriesServiceStatisticsRoute, postTimeSeriesServiceStatisticsRouteHandler)
  .openapi(postTraceGraphRoute, postTraceGraphRouteHandler)
  .openapi(postTraceSummariesRoute, postTraceSummariesRouteHandler)
  .openapi(postListResourcePoliciesRoute, postListResourcePoliciesRouteHandler)
  .openapi(postListTagsForResourceRoute, postListTagsForResourceRouteHandler)
  .openapi(postPutEncryptionConfigRoute, postPutEncryptionConfigRouteHandler)
  .openapi(postPutResourcePolicyRoute, postPutResourcePolicyRouteHandler)
  .openapi(postTelemetryRecordsRoute, postTelemetryRecordsRouteHandler)
  .openapi(postTraceSegmentsRoute, postTraceSegmentsRouteHandler)
  .openapi(postTagResourceRoute, postTagResourceRouteHandler)
  .openapi(postUntagResourceRoute, postUntagResourceRouteHandler)
  .openapi(postUpdateGroupRoute, postUpdateGroupRouteHandler)
  .openapi(postUpdateSamplingRuleRoute, postUpdateSamplingRuleRouteHandler)

export default app
