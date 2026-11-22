import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2MonitorNotificationRuleRuleIdRoute,
  deleteApiV2MonitorPolicyPolicyIdRoute,
  deleteApiV2MonitorTemplateTemplateIdRoute,
  getApiV2MonitorNotificationRuleRoute,
  getApiV2MonitorNotificationRuleRuleIdRoute,
  getApiV2MonitorPolicyPolicyIdRoute,
  getApiV2MonitorPolicyRoute,
  getApiV2MonitorTemplateRoute,
  getApiV2MonitorTemplateTemplateIdRoute,
  patchApiV2MonitorNotificationRuleRuleIdRoute,
  patchApiV2MonitorPolicyPolicyIdRoute,
  postApiV2MonitorNotificationRuleRoute,
  postApiV2MonitorPolicyRoute,
  postApiV2MonitorTemplateRoute,
  postApiV2MonitorTemplateTemplateIdValidateRoute,
  postApiV2MonitorTemplateValidateRoute,
  putApiV2MonitorTemplateTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monitorsHandler = app
  .openapi(getApiV2MonitorNotificationRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MonitorNotificationRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MonitorNotificationRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MonitorNotificationRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2MonitorNotificationRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MonitorPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MonitorPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MonitorPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MonitorPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2MonitorPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MonitorTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MonitorTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MonitorTemplateValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MonitorTemplateTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MonitorTemplateTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2MonitorTemplateTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MonitorTemplateTemplateIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
