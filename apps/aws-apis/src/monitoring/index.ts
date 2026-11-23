import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionDeleteAlarmsHandler,
  actionDeleteAnomalyDetectorHandler,
  actionDeleteDashboardsHandler,
  actionDeleteInsightRulesHandler,
  actionDeleteMetricStreamHandler,
  actionDescribeAlarmHistoryHandler,
  actionDescribeAlarmsForMetricHandler,
  actionDescribeAlarmsHandler,
  actionDescribeAnomalyDetectorsHandler,
  actionDescribeInsightRulesHandler,
  actionDisableAlarmActionsHandler,
  actionDisableInsightRulesHandler,
  actionEnableAlarmActionsHandler,
  actionEnableInsightRulesHandler,
  actionGetDashboardHandler,
  actionGetInsightRuleReportHandler,
  actionGetMetricDataHandler,
  actionGetMetricStatisticsHandler,
  actionGetMetricStreamHandler,
  actionGetMetricWidgetImageHandler,
  actionListDashboardsHandler,
  actionListManagedInsightRulesHandler,
  actionListMetricsHandler,
  actionListMetricStreamsHandler,
  actionListTagsForResourceHandler,
  actionPutAnomalyDetectorHandler,
  actionPutCompositeAlarmHandler,
  actionPutDashboardHandler,
  actionPutInsightRuleHandler,
  actionPutManagedInsightRulesHandler,
  actionPutMetricAlarmHandler,
  actionPutMetricDataHandler,
  actionPutMetricStreamHandler,
  actionSetAlarmStateHandler,
  actionStartMetricStreamsHandler,
  actionStopMetricStreamsHandler,
  actionTagResourceHandler,
  actionUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionDeleteAlarmsHandler)
  .route('/', actionDeleteAnomalyDetectorHandler)
  .route('/', actionDeleteDashboardsHandler)
  .route('/', actionDeleteInsightRulesHandler)
  .route('/', actionDeleteMetricStreamHandler)
  .route('/', actionDescribeAlarmHistoryHandler)
  .route('/', actionDescribeAlarmsHandler)
  .route('/', actionDescribeAlarmsForMetricHandler)
  .route('/', actionDescribeAnomalyDetectorsHandler)
  .route('/', actionDescribeInsightRulesHandler)
  .route('/', actionDisableAlarmActionsHandler)
  .route('/', actionDisableInsightRulesHandler)
  .route('/', actionEnableAlarmActionsHandler)
  .route('/', actionEnableInsightRulesHandler)
  .route('/', actionGetDashboardHandler)
  .route('/', actionGetInsightRuleReportHandler)
  .route('/', actionGetMetricDataHandler)
  .route('/', actionGetMetricStatisticsHandler)
  .route('/', actionGetMetricStreamHandler)
  .route('/', actionGetMetricWidgetImageHandler)
  .route('/', actionListDashboardsHandler)
  .route('/', actionListManagedInsightRulesHandler)
  .route('/', actionListMetricStreamsHandler)
  .route('/', actionListMetricsHandler)
  .route('/', actionListTagsForResourceHandler)
  .route('/', actionPutAnomalyDetectorHandler)
  .route('/', actionPutCompositeAlarmHandler)
  .route('/', actionPutDashboardHandler)
  .route('/', actionPutInsightRuleHandler)
  .route('/', actionPutManagedInsightRulesHandler)
  .route('/', actionPutMetricAlarmHandler)
  .route('/', actionPutMetricDataHandler)
  .route('/', actionPutMetricStreamHandler)
  .route('/', actionSetAlarmStateHandler)
  .route('/', actionStartMetricStreamsHandler)
  .route('/', actionStopMetricStreamsHandler)
  .route('/', actionTagResourceHandler)
  .route('/', actionUntagResourceHandler)

export default app
