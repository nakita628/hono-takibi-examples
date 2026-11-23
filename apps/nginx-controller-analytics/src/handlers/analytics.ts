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
} from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(getAnalyticsAlertsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsAlertsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsAlertsRulesAlertRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnalyticsAlertsRulesAlertRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnalyticsAlertsRulesAlertRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsAlertsRulesAlertRuleNameAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsCatalogsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsCatalogsMetricsMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsCatalogsDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsCatalogsDimensionsDimensionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsForwardersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsForwardersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsForwardersForwarderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnalyticsForwardersForwarderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnalyticsForwardersForwarderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
