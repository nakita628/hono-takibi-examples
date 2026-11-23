import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnalyticsAlertsRulesAlertRuleNameRoute,
  deleteAnalyticsForwardersForwarderNameRoute,
  getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdRoute,
  getAnalyticsAlertsRulesAlertRuleNameAlertsRoute,
  getAnalyticsAlertsRulesAlertRuleNameRoute,
  getAnalyticsAlertsRulesRoute,
  getAnalyticsCatalogsDimensionsDimensionNameRoute,
  getAnalyticsCatalogsDimensionsRoute,
  getAnalyticsCatalogsMetricsMetricNameRoute,
  getAnalyticsCatalogsMetricsRoute,
  getAnalyticsEventsIdRoute,
  getAnalyticsEventsRoute,
  getAnalyticsForwardersForwarderNameRoute,
  getAnalyticsForwardersRoute,
  getAnalyticsMetricsRoute,
  postAnalyticsAlertsRulesRoute,
  postAnalyticsForwardersRoute,
  putAnalyticsAlertsRulesAlertRuleNameRoute,
  putAnalyticsForwardersForwarderNameRoute,
} from './routes'
import {
  deleteAnalyticsAlertsRulesAlertRuleNameRouteHandler,
  deleteAnalyticsForwardersForwarderNameRouteHandler,
  getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdRouteHandler,
  getAnalyticsAlertsRulesAlertRuleNameAlertsRouteHandler,
  getAnalyticsAlertsRulesAlertRuleNameRouteHandler,
  getAnalyticsAlertsRulesRouteHandler,
  getAnalyticsCatalogsDimensionsDimensionNameRouteHandler,
  getAnalyticsCatalogsDimensionsRouteHandler,
  getAnalyticsCatalogsMetricsMetricNameRouteHandler,
  getAnalyticsCatalogsMetricsRouteHandler,
  getAnalyticsEventsIdRouteHandler,
  getAnalyticsEventsRouteHandler,
  getAnalyticsForwardersForwarderNameRouteHandler,
  getAnalyticsForwardersRouteHandler,
  getAnalyticsMetricsRouteHandler,
  postAnalyticsAlertsRulesRouteHandler,
  postAnalyticsForwardersRouteHandler,
  putAnalyticsAlertsRulesAlertRuleNameRouteHandler,
  putAnalyticsForwardersForwarderNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAnalyticsAlertsRulesRoute, getAnalyticsAlertsRulesRouteHandler)
  .openapi(postAnalyticsAlertsRulesRoute, postAnalyticsAlertsRulesRouteHandler)
  .openapi(
    getAnalyticsAlertsRulesAlertRuleNameRoute,
    getAnalyticsAlertsRulesAlertRuleNameRouteHandler,
  )
  .openapi(
    putAnalyticsAlertsRulesAlertRuleNameRoute,
    putAnalyticsAlertsRulesAlertRuleNameRouteHandler,
  )
  .openapi(
    deleteAnalyticsAlertsRulesAlertRuleNameRoute,
    deleteAnalyticsAlertsRulesAlertRuleNameRouteHandler,
  )
  .openapi(
    getAnalyticsAlertsRulesAlertRuleNameAlertsRoute,
    getAnalyticsAlertsRulesAlertRuleNameAlertsRouteHandler,
  )
  .openapi(
    getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdRoute,
    getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdRouteHandler,
  )
  .openapi(getAnalyticsCatalogsMetricsRoute, getAnalyticsCatalogsMetricsRouteHandler)
  .openapi(
    getAnalyticsCatalogsMetricsMetricNameRoute,
    getAnalyticsCatalogsMetricsMetricNameRouteHandler,
  )
  .openapi(getAnalyticsCatalogsDimensionsRoute, getAnalyticsCatalogsDimensionsRouteHandler)
  .openapi(
    getAnalyticsCatalogsDimensionsDimensionNameRoute,
    getAnalyticsCatalogsDimensionsDimensionNameRouteHandler,
  )
  .openapi(getAnalyticsEventsRoute, getAnalyticsEventsRouteHandler)
  .openapi(getAnalyticsEventsIdRoute, getAnalyticsEventsIdRouteHandler)
  .openapi(postAnalyticsForwardersRoute, postAnalyticsForwardersRouteHandler)
  .openapi(getAnalyticsForwardersRoute, getAnalyticsForwardersRouteHandler)
  .openapi(
    getAnalyticsForwardersForwarderNameRoute,
    getAnalyticsForwardersForwarderNameRouteHandler,
  )
  .openapi(
    putAnalyticsForwardersForwarderNameRoute,
    putAnalyticsForwardersForwarderNameRouteHandler,
  )
  .openapi(
    deleteAnalyticsForwardersForwarderNameRoute,
    deleteAnalyticsForwardersForwarderNameRouteHandler,
  )
  .openapi(getAnalyticsMetricsRoute, getAnalyticsMetricsRouteHandler)

export default app
