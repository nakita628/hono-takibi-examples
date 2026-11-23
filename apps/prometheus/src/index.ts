import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlertmanagersRoute,
  getAlertsRoute,
  getFeaturesRoute,
  getFormatQueryRoute,
  getLabelNameValuesRoute,
  getLabelsRoute,
  getMetadataRoute,
  getNotificationsRoute,
  getParseQueryRoute,
  getQueryCostRoute,
  getQueryExemplarsRoute,
  getQueryRangeCostRoute,
  getQueryRangeRoute,
  getQueryRoute,
  getRulesRoute,
  getScrapePoolsConfigRoute,
  getScrapePoolsRoute,
  getSearchLabelNamesRoute,
  getSearchLabelValuesRoute,
  getSearchMetricNamesRoute,
  getSeriesRoute,
  getStatusBuildinfoRoute,
  getStatusConfigRoute,
  getStatusFlagsRoute,
  getStatusRuntimeinfoRoute,
  getStatusSelfMetricsRoute,
  getStatusTsdbBlocksRoute,
  getStatusTsdbRoute,
  getStatusWalreplayRoute,
  getTargetsMetadataRoute,
  getTargetsRelabelStepsRoute,
  getTargetsRoute,
  postAdminTsdbCleanTombstonesRoute,
  postAdminTsdbDeleteSeriesRoute,
  postAdminTsdbSnapshotRoute,
  postFormatQueryRoute,
  postLabelsRoute,
  postOtlpV1MetricsRoute,
  postParseQueryRoute,
  postQueryCostRoute,
  postQueryExemplarsRoute,
  postQueryRangeCostRoute,
  postQueryRangeRoute,
  postQueryRoute,
  postReadRoute,
  postSearchLabelNamesRoute,
  postSearchLabelValuesRoute,
  postSearchMetricNamesRoute,
  postSeriesRoute,
  postWriteRoute,
  putAdminTsdbCleanTombstonesRoute,
  putAdminTsdbDeleteSeriesRoute,
  putAdminTsdbSnapshotRoute,
} from './routes'
import {
  getAlertmanagersRouteHandler,
  getAlertsRouteHandler,
  getFeaturesRouteHandler,
  getFormatQueryRouteHandler,
  getLabelNameValuesRouteHandler,
  getLabelsRouteHandler,
  getMetadataRouteHandler,
  getNotificationsRouteHandler,
  getParseQueryRouteHandler,
  getQueryCostRouteHandler,
  getQueryExemplarsRouteHandler,
  getQueryRangeCostRouteHandler,
  getQueryRangeRouteHandler,
  getQueryRouteHandler,
  getRulesRouteHandler,
  getScrapePoolsConfigRouteHandler,
  getScrapePoolsRouteHandler,
  getSearchLabelNamesRouteHandler,
  getSearchLabelValuesRouteHandler,
  getSearchMetricNamesRouteHandler,
  getSeriesRouteHandler,
  getStatusBuildinfoRouteHandler,
  getStatusConfigRouteHandler,
  getStatusFlagsRouteHandler,
  getStatusRuntimeinfoRouteHandler,
  getStatusSelfMetricsRouteHandler,
  getStatusTsdbBlocksRouteHandler,
  getStatusTsdbRouteHandler,
  getStatusWalreplayRouteHandler,
  getTargetsMetadataRouteHandler,
  getTargetsRelabelStepsRouteHandler,
  getTargetsRouteHandler,
  postAdminTsdbCleanTombstonesRouteHandler,
  postAdminTsdbDeleteSeriesRouteHandler,
  postAdminTsdbSnapshotRouteHandler,
  postFormatQueryRouteHandler,
  postLabelsRouteHandler,
  postOtlpV1MetricsRouteHandler,
  postParseQueryRouteHandler,
  postQueryCostRouteHandler,
  postQueryExemplarsRouteHandler,
  postQueryRangeCostRouteHandler,
  postQueryRangeRouteHandler,
  postQueryRouteHandler,
  postReadRouteHandler,
  postSearchLabelNamesRouteHandler,
  postSearchLabelValuesRouteHandler,
  postSearchMetricNamesRouteHandler,
  postSeriesRouteHandler,
  postWriteRouteHandler,
  putAdminTsdbCleanTombstonesRouteHandler,
  putAdminTsdbDeleteSeriesRouteHandler,
  putAdminTsdbSnapshotRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getQueryRoute, getQueryRouteHandler)
  .openapi(postQueryRoute, postQueryRouteHandler)
  .openapi(getQueryRangeRoute, getQueryRangeRouteHandler)
  .openapi(postQueryRangeRoute, postQueryRangeRouteHandler)
  .openapi(getQueryCostRoute, getQueryCostRouteHandler)
  .openapi(postQueryCostRoute, postQueryCostRouteHandler)
  .openapi(getQueryRangeCostRoute, getQueryRangeCostRouteHandler)
  .openapi(postQueryRangeCostRoute, postQueryRangeCostRouteHandler)
  .openapi(getQueryExemplarsRoute, getQueryExemplarsRouteHandler)
  .openapi(postQueryExemplarsRoute, postQueryExemplarsRouteHandler)
  .openapi(getFormatQueryRoute, getFormatQueryRouteHandler)
  .openapi(postFormatQueryRoute, postFormatQueryRouteHandler)
  .openapi(getParseQueryRoute, getParseQueryRouteHandler)
  .openapi(postParseQueryRoute, postParseQueryRouteHandler)
  .openapi(getLabelsRoute, getLabelsRouteHandler)
  .openapi(postLabelsRoute, postLabelsRouteHandler)
  .openapi(getLabelNameValuesRoute, getLabelNameValuesRouteHandler)
  .openapi(getSearchMetricNamesRoute, getSearchMetricNamesRouteHandler)
  .openapi(postSearchMetricNamesRoute, postSearchMetricNamesRouteHandler)
  .openapi(getSearchLabelNamesRoute, getSearchLabelNamesRouteHandler)
  .openapi(postSearchLabelNamesRoute, postSearchLabelNamesRouteHandler)
  .openapi(getSearchLabelValuesRoute, getSearchLabelValuesRouteHandler)
  .openapi(postSearchLabelValuesRoute, postSearchLabelValuesRouteHandler)
  .openapi(getSeriesRoute, getSeriesRouteHandler)
  .openapi(postSeriesRoute, postSeriesRouteHandler)
  .openapi(getMetadataRoute, getMetadataRouteHandler)
  .openapi(getScrapePoolsRoute, getScrapePoolsRouteHandler)
  .openapi(getScrapePoolsConfigRoute, getScrapePoolsConfigRouteHandler)
  .openapi(getTargetsRoute, getTargetsRouteHandler)
  .openapi(getTargetsMetadataRoute, getTargetsMetadataRouteHandler)
  .openapi(getTargetsRelabelStepsRoute, getTargetsRelabelStepsRouteHandler)
  .openapi(getRulesRoute, getRulesRouteHandler)
  .openapi(getAlertsRoute, getAlertsRouteHandler)
  .openapi(getAlertmanagersRoute, getAlertmanagersRouteHandler)
  .openapi(getStatusConfigRoute, getStatusConfigRouteHandler)
  .openapi(getStatusRuntimeinfoRoute, getStatusRuntimeinfoRouteHandler)
  .openapi(getStatusBuildinfoRoute, getStatusBuildinfoRouteHandler)
  .openapi(getStatusFlagsRoute, getStatusFlagsRouteHandler)
  .openapi(getStatusTsdbRoute, getStatusTsdbRouteHandler)
  .openapi(getStatusTsdbBlocksRoute, getStatusTsdbBlocksRouteHandler)
  .openapi(getStatusWalreplayRoute, getStatusWalreplayRouteHandler)
  .openapi(getStatusSelfMetricsRoute, getStatusSelfMetricsRouteHandler)
  .openapi(putAdminTsdbDeleteSeriesRoute, putAdminTsdbDeleteSeriesRouteHandler)
  .openapi(postAdminTsdbDeleteSeriesRoute, postAdminTsdbDeleteSeriesRouteHandler)
  .openapi(putAdminTsdbCleanTombstonesRoute, putAdminTsdbCleanTombstonesRouteHandler)
  .openapi(postAdminTsdbCleanTombstonesRoute, postAdminTsdbCleanTombstonesRouteHandler)
  .openapi(putAdminTsdbSnapshotRoute, putAdminTsdbSnapshotRouteHandler)
  .openapi(postAdminTsdbSnapshotRoute, postAdminTsdbSnapshotRouteHandler)
  .openapi(postReadRoute, postReadRouteHandler)
  .openapi(postWriteRoute, postWriteRouteHandler)
  .openapi(postOtlpV1MetricsRoute, postOtlpV1MetricsRouteHandler)
  .openapi(getNotificationsRoute, getNotificationsRouteHandler)
  .openapi(getFeaturesRoute, getFeaturesRouteHandler)

export default app
