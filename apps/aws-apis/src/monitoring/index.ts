import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionDeleteAlarmsHandler,
  ActionDeleteAnomalyDetectorHandler,
  ActionDeleteDashboardsHandler,
  ActionDeleteInsightRulesHandler,
  ActionDeleteMetricStreamHandler,
  ActionDescribeAlarmHistoryHandler,
  ActionDescribeAlarmsForMetricHandler,
  ActionDescribeAlarmsHandler,
  ActionDescribeAnomalyDetectorsHandler,
  ActionDescribeInsightRulesHandler,
  ActionDisableAlarmActionsHandler,
  ActionDisableInsightRulesHandler,
  ActionEnableAlarmActionsHandler,
  ActionEnableInsightRulesHandler,
  ActionGetDashboardHandler,
  ActionGetInsightRuleReportHandler,
  ActionGetMetricDataHandler,
  ActionGetMetricStatisticsHandler,
  ActionGetMetricStreamHandler,
  ActionGetMetricWidgetImageHandler,
  ActionListDashboardsHandler,
  ActionListManagedInsightRulesHandler,
  ActionListMetricsHandler,
  ActionListMetricStreamsHandler,
  ActionListTagsForResourceHandler,
  ActionPutAnomalyDetectorHandler,
  ActionPutCompositeAlarmHandler,
  ActionPutDashboardHandler,
  ActionPutInsightRuleHandler,
  ActionPutManagedInsightRulesHandler,
  ActionPutMetricAlarmHandler,
  ActionPutMetricDataHandler,
  ActionPutMetricStreamHandler,
  ActionSetAlarmStateHandler,
  ActionStartMetricStreamsHandler,
  ActionStopMetricStreamsHandler,
  ActionTagResourceHandler,
  ActionUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionDeleteAlarmsHandler)
  .route('/', ActionDeleteAnomalyDetectorHandler)
  .route('/', ActionDeleteDashboardsHandler)
  .route('/', ActionDeleteInsightRulesHandler)
  .route('/', ActionDeleteMetricStreamHandler)
  .route('/', ActionDescribeAlarmHistoryHandler)
  .route('/', ActionDescribeAlarmsHandler)
  .route('/', ActionDescribeAlarmsForMetricHandler)
  .route('/', ActionDescribeAnomalyDetectorsHandler)
  .route('/', ActionDescribeInsightRulesHandler)
  .route('/', ActionDisableAlarmActionsHandler)
  .route('/', ActionDisableInsightRulesHandler)
  .route('/', ActionEnableAlarmActionsHandler)
  .route('/', ActionEnableInsightRulesHandler)
  .route('/', ActionGetDashboardHandler)
  .route('/', ActionGetInsightRuleReportHandler)
  .route('/', ActionGetMetricDataHandler)
  .route('/', ActionGetMetricStatisticsHandler)
  .route('/', ActionGetMetricStreamHandler)
  .route('/', ActionGetMetricWidgetImageHandler)
  .route('/', ActionListDashboardsHandler)
  .route('/', ActionListManagedInsightRulesHandler)
  .route('/', ActionListMetricStreamsHandler)
  .route('/', ActionListMetricsHandler)
  .route('/', ActionListTagsForResourceHandler)
  .route('/', ActionPutAnomalyDetectorHandler)
  .route('/', ActionPutCompositeAlarmHandler)
  .route('/', ActionPutDashboardHandler)
  .route('/', ActionPutInsightRuleHandler)
  .route('/', ActionPutManagedInsightRulesHandler)
  .route('/', ActionPutMetricAlarmHandler)
  .route('/', ActionPutMetricDataHandler)
  .route('/', ActionPutMetricStreamHandler)
  .route('/', ActionSetAlarmStateHandler)
  .route('/', ActionStartMetricStreamsHandler)
  .route('/', ActionStopMetricStreamsHandler)
  .route('/', ActionTagResourceHandler)
  .route('/', ActionUntagResourceHandler)

export default app
