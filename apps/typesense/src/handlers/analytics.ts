import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnalyticsRulesRuleNameRoute,
  getAnalyticsEventsRoute,
  getAnalyticsRulesRoute,
  getAnalyticsRulesRuleNameRoute,
  getAnalyticsStatusRoute,
  postAnalyticsEventsRoute,
  postAnalyticsFlushRoute,
  postAnalyticsRulesRoute,
  putAnalyticsRulesRuleNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(postAnalyticsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnalyticsRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnalyticsRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
