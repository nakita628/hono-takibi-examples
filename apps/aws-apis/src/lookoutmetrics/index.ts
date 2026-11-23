import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getTagsResourceArnRoute,
  postActivateAnomalyDetectorRoute,
  postBackTestAnomalyDetectorRoute,
  postCreateAlertRoute,
  postCreateAnomalyDetectorRoute,
  postCreateMetricSetRoute,
  postDeactivateAnomalyDetectorRoute,
  postDeleteAlertRoute,
  postDeleteAnomalyDetectorRoute,
  postDescribeAlertRoute,
  postDescribeAnomalyDetectionExecutionsRoute,
  postDescribeAnomalyDetectorRoute,
  postDescribeMetricSetRoute,
  postDetectMetricSetConfigRoute,
  postGetAnomalyGroupRoute,
  postGetDataQualityMetricsRoute,
  postGetFeedbackRoute,
  postGetSampleDataRoute,
  postListAlertsRoute,
  postListAnomalyDetectorsRoute,
  postListAnomalyGroupRelatedMetricsRoute,
  postListAnomalyGroupSummariesRoute,
  postListAnomalyGroupTimeSeriesRoute,
  postListMetricSetsRoute,
  postPutFeedbackRoute,
  postTagsResourceArnRoute,
  postUpdateAlertRoute,
  postUpdateAnomalyDetectorRoute,
  postUpdateMetricSetRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getTagsResourceArnRouteHandler,
  postActivateAnomalyDetectorRouteHandler,
  postBackTestAnomalyDetectorRouteHandler,
  postCreateAlertRouteHandler,
  postCreateAnomalyDetectorRouteHandler,
  postCreateMetricSetRouteHandler,
  postDeactivateAnomalyDetectorRouteHandler,
  postDeleteAlertRouteHandler,
  postDeleteAnomalyDetectorRouteHandler,
  postDescribeAlertRouteHandler,
  postDescribeAnomalyDetectionExecutionsRouteHandler,
  postDescribeAnomalyDetectorRouteHandler,
  postDescribeMetricSetRouteHandler,
  postDetectMetricSetConfigRouteHandler,
  postGetAnomalyGroupRouteHandler,
  postGetDataQualityMetricsRouteHandler,
  postGetFeedbackRouteHandler,
  postGetSampleDataRouteHandler,
  postListAlertsRouteHandler,
  postListAnomalyDetectorsRouteHandler,
  postListAnomalyGroupRelatedMetricsRouteHandler,
  postListAnomalyGroupSummariesRouteHandler,
  postListAnomalyGroupTimeSeriesRouteHandler,
  postListMetricSetsRouteHandler,
  postPutFeedbackRouteHandler,
  postTagsResourceArnRouteHandler,
  postUpdateAlertRouteHandler,
  postUpdateAnomalyDetectorRouteHandler,
  postUpdateMetricSetRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postActivateAnomalyDetectorRoute, postActivateAnomalyDetectorRouteHandler)
  .openapi(postBackTestAnomalyDetectorRoute, postBackTestAnomalyDetectorRouteHandler)
  .openapi(postCreateAlertRoute, postCreateAlertRouteHandler)
  .openapi(postCreateAnomalyDetectorRoute, postCreateAnomalyDetectorRouteHandler)
  .openapi(postCreateMetricSetRoute, postCreateMetricSetRouteHandler)
  .openapi(postDeactivateAnomalyDetectorRoute, postDeactivateAnomalyDetectorRouteHandler)
  .openapi(postDeleteAlertRoute, postDeleteAlertRouteHandler)
  .openapi(postDeleteAnomalyDetectorRoute, postDeleteAnomalyDetectorRouteHandler)
  .openapi(postDescribeAlertRoute, postDescribeAlertRouteHandler)
  .openapi(
    postDescribeAnomalyDetectionExecutionsRoute,
    postDescribeAnomalyDetectionExecutionsRouteHandler,
  )
  .openapi(postDescribeAnomalyDetectorRoute, postDescribeAnomalyDetectorRouteHandler)
  .openapi(postDescribeMetricSetRoute, postDescribeMetricSetRouteHandler)
  .openapi(postDetectMetricSetConfigRoute, postDetectMetricSetConfigRouteHandler)
  .openapi(postGetAnomalyGroupRoute, postGetAnomalyGroupRouteHandler)
  .openapi(postGetDataQualityMetricsRoute, postGetDataQualityMetricsRouteHandler)
  .openapi(postGetFeedbackRoute, postGetFeedbackRouteHandler)
  .openapi(postGetSampleDataRoute, postGetSampleDataRouteHandler)
  .openapi(postListAlertsRoute, postListAlertsRouteHandler)
  .openapi(postListAnomalyDetectorsRoute, postListAnomalyDetectorsRouteHandler)
  .openapi(postListAnomalyGroupRelatedMetricsRoute, postListAnomalyGroupRelatedMetricsRouteHandler)
  .openapi(postListAnomalyGroupSummariesRoute, postListAnomalyGroupSummariesRouteHandler)
  .openapi(postListAnomalyGroupTimeSeriesRoute, postListAnomalyGroupTimeSeriesRouteHandler)
  .openapi(postListMetricSetsRoute, postListMetricSetsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postPutFeedbackRoute, postPutFeedbackRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postUpdateAlertRoute, postUpdateAlertRouteHandler)
  .openapi(postUpdateAnomalyDetectorRoute, postUpdateAnomalyDetectorRouteHandler)
  .openapi(postUpdateMetricSetRoute, postUpdateMetricSetRouteHandler)

export default app
