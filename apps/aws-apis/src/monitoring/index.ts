import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteAlarmsRoute,
  getActionDeleteAnomalyDetectorRoute,
  getActionDeleteDashboardsRoute,
  getActionDeleteInsightRulesRoute,
  getActionDeleteMetricStreamRoute,
  getActionDescribeAlarmHistoryRoute,
  getActionDescribeAlarmsForMetricRoute,
  getActionDescribeAlarmsRoute,
  getActionDescribeAnomalyDetectorsRoute,
  getActionDescribeInsightRulesRoute,
  getActionDisableAlarmActionsRoute,
  getActionDisableInsightRulesRoute,
  getActionEnableAlarmActionsRoute,
  getActionEnableInsightRulesRoute,
  getActionGetDashboardRoute,
  getActionGetInsightRuleReportRoute,
  getActionGetMetricDataRoute,
  getActionGetMetricStatisticsRoute,
  getActionGetMetricStreamRoute,
  getActionGetMetricWidgetImageRoute,
  getActionListDashboardsRoute,
  getActionListManagedInsightRulesRoute,
  getActionListMetricsRoute,
  getActionListMetricStreamsRoute,
  getActionListTagsForResourceRoute,
  getActionPutAnomalyDetectorRoute,
  getActionPutCompositeAlarmRoute,
  getActionPutDashboardRoute,
  getActionPutInsightRuleRoute,
  getActionPutManagedInsightRulesRoute,
  getActionPutMetricAlarmRoute,
  getActionPutMetricDataRoute,
  getActionPutMetricStreamRoute,
  getActionSetAlarmStateRoute,
  getActionStartMetricStreamsRoute,
  getActionStopMetricStreamsRoute,
  getActionTagResourceRoute,
  getActionUntagResourceRoute,
  postActionDeleteAlarmsRoute,
  postActionDeleteAnomalyDetectorRoute,
  postActionDeleteDashboardsRoute,
  postActionDeleteInsightRulesRoute,
  postActionDeleteMetricStreamRoute,
  postActionDescribeAlarmHistoryRoute,
  postActionDescribeAlarmsForMetricRoute,
  postActionDescribeAlarmsRoute,
  postActionDescribeAnomalyDetectorsRoute,
  postActionDescribeInsightRulesRoute,
  postActionDisableAlarmActionsRoute,
  postActionDisableInsightRulesRoute,
  postActionEnableAlarmActionsRoute,
  postActionEnableInsightRulesRoute,
  postActionGetDashboardRoute,
  postActionGetInsightRuleReportRoute,
  postActionGetMetricDataRoute,
  postActionGetMetricStatisticsRoute,
  postActionGetMetricStreamRoute,
  postActionGetMetricWidgetImageRoute,
  postActionListDashboardsRoute,
  postActionListManagedInsightRulesRoute,
  postActionListMetricsRoute,
  postActionListMetricStreamsRoute,
  postActionListTagsForResourceRoute,
  postActionPutAnomalyDetectorRoute,
  postActionPutCompositeAlarmRoute,
  postActionPutDashboardRoute,
  postActionPutInsightRuleRoute,
  postActionPutManagedInsightRulesRoute,
  postActionPutMetricAlarmRoute,
  postActionPutMetricDataRoute,
  postActionPutMetricStreamRoute,
  postActionSetAlarmStateRoute,
  postActionStartMetricStreamsRoute,
  postActionStopMetricStreamsRoute,
  postActionTagResourceRoute,
  postActionUntagResourceRoute,
} from './routes'
import {
  getActionDeleteAlarmsRouteHandler,
  getActionDeleteAnomalyDetectorRouteHandler,
  getActionDeleteDashboardsRouteHandler,
  getActionDeleteInsightRulesRouteHandler,
  getActionDeleteMetricStreamRouteHandler,
  getActionDescribeAlarmHistoryRouteHandler,
  getActionDescribeAlarmsForMetricRouteHandler,
  getActionDescribeAlarmsRouteHandler,
  getActionDescribeAnomalyDetectorsRouteHandler,
  getActionDescribeInsightRulesRouteHandler,
  getActionDisableAlarmActionsRouteHandler,
  getActionDisableInsightRulesRouteHandler,
  getActionEnableAlarmActionsRouteHandler,
  getActionEnableInsightRulesRouteHandler,
  getActionGetDashboardRouteHandler,
  getActionGetInsightRuleReportRouteHandler,
  getActionGetMetricDataRouteHandler,
  getActionGetMetricStatisticsRouteHandler,
  getActionGetMetricStreamRouteHandler,
  getActionGetMetricWidgetImageRouteHandler,
  getActionListDashboardsRouteHandler,
  getActionListManagedInsightRulesRouteHandler,
  getActionListMetricsRouteHandler,
  getActionListMetricStreamsRouteHandler,
  getActionListTagsForResourceRouteHandler,
  getActionPutAnomalyDetectorRouteHandler,
  getActionPutCompositeAlarmRouteHandler,
  getActionPutDashboardRouteHandler,
  getActionPutInsightRuleRouteHandler,
  getActionPutManagedInsightRulesRouteHandler,
  getActionPutMetricAlarmRouteHandler,
  getActionPutMetricDataRouteHandler,
  getActionPutMetricStreamRouteHandler,
  getActionSetAlarmStateRouteHandler,
  getActionStartMetricStreamsRouteHandler,
  getActionStopMetricStreamsRouteHandler,
  getActionTagResourceRouteHandler,
  getActionUntagResourceRouteHandler,
  postActionDeleteAlarmsRouteHandler,
  postActionDeleteAnomalyDetectorRouteHandler,
  postActionDeleteDashboardsRouteHandler,
  postActionDeleteInsightRulesRouteHandler,
  postActionDeleteMetricStreamRouteHandler,
  postActionDescribeAlarmHistoryRouteHandler,
  postActionDescribeAlarmsForMetricRouteHandler,
  postActionDescribeAlarmsRouteHandler,
  postActionDescribeAnomalyDetectorsRouteHandler,
  postActionDescribeInsightRulesRouteHandler,
  postActionDisableAlarmActionsRouteHandler,
  postActionDisableInsightRulesRouteHandler,
  postActionEnableAlarmActionsRouteHandler,
  postActionEnableInsightRulesRouteHandler,
  postActionGetDashboardRouteHandler,
  postActionGetInsightRuleReportRouteHandler,
  postActionGetMetricDataRouteHandler,
  postActionGetMetricStatisticsRouteHandler,
  postActionGetMetricStreamRouteHandler,
  postActionGetMetricWidgetImageRouteHandler,
  postActionListDashboardsRouteHandler,
  postActionListManagedInsightRulesRouteHandler,
  postActionListMetricsRouteHandler,
  postActionListMetricStreamsRouteHandler,
  postActionListTagsForResourceRouteHandler,
  postActionPutAnomalyDetectorRouteHandler,
  postActionPutCompositeAlarmRouteHandler,
  postActionPutDashboardRouteHandler,
  postActionPutInsightRuleRouteHandler,
  postActionPutManagedInsightRulesRouteHandler,
  postActionPutMetricAlarmRouteHandler,
  postActionPutMetricDataRouteHandler,
  postActionPutMetricStreamRouteHandler,
  postActionSetAlarmStateRouteHandler,
  postActionStartMetricStreamsRouteHandler,
  postActionStopMetricStreamsRouteHandler,
  postActionTagResourceRouteHandler,
  postActionUntagResourceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionDeleteAlarmsRoute, getActionDeleteAlarmsRouteHandler)
  .openapi(postActionDeleteAlarmsRoute, postActionDeleteAlarmsRouteHandler)
  .openapi(getActionDeleteAnomalyDetectorRoute, getActionDeleteAnomalyDetectorRouteHandler)
  .openapi(postActionDeleteAnomalyDetectorRoute, postActionDeleteAnomalyDetectorRouteHandler)
  .openapi(getActionDeleteDashboardsRoute, getActionDeleteDashboardsRouteHandler)
  .openapi(postActionDeleteDashboardsRoute, postActionDeleteDashboardsRouteHandler)
  .openapi(getActionDeleteInsightRulesRoute, getActionDeleteInsightRulesRouteHandler)
  .openapi(postActionDeleteInsightRulesRoute, postActionDeleteInsightRulesRouteHandler)
  .openapi(getActionDeleteMetricStreamRoute, getActionDeleteMetricStreamRouteHandler)
  .openapi(postActionDeleteMetricStreamRoute, postActionDeleteMetricStreamRouteHandler)
  .openapi(getActionDescribeAlarmHistoryRoute, getActionDescribeAlarmHistoryRouteHandler)
  .openapi(postActionDescribeAlarmHistoryRoute, postActionDescribeAlarmHistoryRouteHandler)
  .openapi(getActionDescribeAlarmsRoute, getActionDescribeAlarmsRouteHandler)
  .openapi(postActionDescribeAlarmsRoute, postActionDescribeAlarmsRouteHandler)
  .openapi(getActionDescribeAlarmsForMetricRoute, getActionDescribeAlarmsForMetricRouteHandler)
  .openapi(postActionDescribeAlarmsForMetricRoute, postActionDescribeAlarmsForMetricRouteHandler)
  .openapi(getActionDescribeAnomalyDetectorsRoute, getActionDescribeAnomalyDetectorsRouteHandler)
  .openapi(postActionDescribeAnomalyDetectorsRoute, postActionDescribeAnomalyDetectorsRouteHandler)
  .openapi(getActionDescribeInsightRulesRoute, getActionDescribeInsightRulesRouteHandler)
  .openapi(postActionDescribeInsightRulesRoute, postActionDescribeInsightRulesRouteHandler)
  .openapi(getActionDisableAlarmActionsRoute, getActionDisableAlarmActionsRouteHandler)
  .openapi(postActionDisableAlarmActionsRoute, postActionDisableAlarmActionsRouteHandler)
  .openapi(getActionDisableInsightRulesRoute, getActionDisableInsightRulesRouteHandler)
  .openapi(postActionDisableInsightRulesRoute, postActionDisableInsightRulesRouteHandler)
  .openapi(getActionEnableAlarmActionsRoute, getActionEnableAlarmActionsRouteHandler)
  .openapi(postActionEnableAlarmActionsRoute, postActionEnableAlarmActionsRouteHandler)
  .openapi(getActionEnableInsightRulesRoute, getActionEnableInsightRulesRouteHandler)
  .openapi(postActionEnableInsightRulesRoute, postActionEnableInsightRulesRouteHandler)
  .openapi(getActionGetDashboardRoute, getActionGetDashboardRouteHandler)
  .openapi(postActionGetDashboardRoute, postActionGetDashboardRouteHandler)
  .openapi(getActionGetInsightRuleReportRoute, getActionGetInsightRuleReportRouteHandler)
  .openapi(postActionGetInsightRuleReportRoute, postActionGetInsightRuleReportRouteHandler)
  .openapi(getActionGetMetricDataRoute, getActionGetMetricDataRouteHandler)
  .openapi(postActionGetMetricDataRoute, postActionGetMetricDataRouteHandler)
  .openapi(getActionGetMetricStatisticsRoute, getActionGetMetricStatisticsRouteHandler)
  .openapi(postActionGetMetricStatisticsRoute, postActionGetMetricStatisticsRouteHandler)
  .openapi(getActionGetMetricStreamRoute, getActionGetMetricStreamRouteHandler)
  .openapi(postActionGetMetricStreamRoute, postActionGetMetricStreamRouteHandler)
  .openapi(getActionGetMetricWidgetImageRoute, getActionGetMetricWidgetImageRouteHandler)
  .openapi(postActionGetMetricWidgetImageRoute, postActionGetMetricWidgetImageRouteHandler)
  .openapi(getActionListDashboardsRoute, getActionListDashboardsRouteHandler)
  .openapi(postActionListDashboardsRoute, postActionListDashboardsRouteHandler)
  .openapi(getActionListManagedInsightRulesRoute, getActionListManagedInsightRulesRouteHandler)
  .openapi(postActionListManagedInsightRulesRoute, postActionListManagedInsightRulesRouteHandler)
  .openapi(getActionListMetricStreamsRoute, getActionListMetricStreamsRouteHandler)
  .openapi(postActionListMetricStreamsRoute, postActionListMetricStreamsRouteHandler)
  .openapi(getActionListMetricsRoute, getActionListMetricsRouteHandler)
  .openapi(postActionListMetricsRoute, postActionListMetricsRouteHandler)
  .openapi(getActionListTagsForResourceRoute, getActionListTagsForResourceRouteHandler)
  .openapi(postActionListTagsForResourceRoute, postActionListTagsForResourceRouteHandler)
  .openapi(getActionPutAnomalyDetectorRoute, getActionPutAnomalyDetectorRouteHandler)
  .openapi(postActionPutAnomalyDetectorRoute, postActionPutAnomalyDetectorRouteHandler)
  .openapi(getActionPutCompositeAlarmRoute, getActionPutCompositeAlarmRouteHandler)
  .openapi(postActionPutCompositeAlarmRoute, postActionPutCompositeAlarmRouteHandler)
  .openapi(getActionPutDashboardRoute, getActionPutDashboardRouteHandler)
  .openapi(postActionPutDashboardRoute, postActionPutDashboardRouteHandler)
  .openapi(getActionPutInsightRuleRoute, getActionPutInsightRuleRouteHandler)
  .openapi(postActionPutInsightRuleRoute, postActionPutInsightRuleRouteHandler)
  .openapi(getActionPutManagedInsightRulesRoute, getActionPutManagedInsightRulesRouteHandler)
  .openapi(postActionPutManagedInsightRulesRoute, postActionPutManagedInsightRulesRouteHandler)
  .openapi(getActionPutMetricAlarmRoute, getActionPutMetricAlarmRouteHandler)
  .openapi(postActionPutMetricAlarmRoute, postActionPutMetricAlarmRouteHandler)
  .openapi(getActionPutMetricDataRoute, getActionPutMetricDataRouteHandler)
  .openapi(postActionPutMetricDataRoute, postActionPutMetricDataRouteHandler)
  .openapi(getActionPutMetricStreamRoute, getActionPutMetricStreamRouteHandler)
  .openapi(postActionPutMetricStreamRoute, postActionPutMetricStreamRouteHandler)
  .openapi(getActionSetAlarmStateRoute, getActionSetAlarmStateRouteHandler)
  .openapi(postActionSetAlarmStateRoute, postActionSetAlarmStateRouteHandler)
  .openapi(getActionStartMetricStreamsRoute, getActionStartMetricStreamsRouteHandler)
  .openapi(postActionStartMetricStreamsRoute, postActionStartMetricStreamsRouteHandler)
  .openapi(getActionStopMetricStreamsRoute, getActionStopMetricStreamsRouteHandler)
  .openapi(postActionStopMetricStreamsRoute, postActionStopMetricStreamsRouteHandler)
  .openapi(getActionTagResourceRoute, getActionTagResourceRouteHandler)
  .openapi(postActionTagResourceRoute, postActionTagResourceRouteHandler)
  .openapi(getActionUntagResourceRoute, getActionUntagResourceRouteHandler)
  .openapi(postActionUntagResourceRoute, postActionUntagResourceRouteHandler)

export default app
