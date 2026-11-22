import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnalyticsAlertsRulesAlertRuleNameRoute,
  getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdRoute,
  getAnalyticsAlertsRulesAlertRuleNameAlertsRoute,
  getAnalyticsAlertsRulesAlertRuleNameRoute,
  getAnalyticsAlertsRulesRoute,
  postAnalyticsAlertsRulesRoute,
  putAnalyticsAlertsRulesAlertRuleNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
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
