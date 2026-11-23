import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationRulesRuleIDLabelsLabelIDRoute,
  deleteNotificationRulesRuleIDRoute,
  getNotificationRulesRoute,
  getNotificationRulesRuleIDLabelsRoute,
  getNotificationRulesRuleIDQueryRoute,
  getNotificationRulesRuleIDRoute,
  patchNotificationRulesRuleIDRoute,
  postNotificationRulesRoute,
  postNotificationRulesRuleIDLabelsRoute,
  putNotificationRulesRuleIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationRulesHandler = app
  .openapi(getNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationRulesRuleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationRulesRuleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationRulesRuleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationRulesRuleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationRulesRuleIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationRulesRuleIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationRulesRuleIDLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationRulesRuleIDQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
