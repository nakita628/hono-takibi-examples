import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalForwardingRulesForwardingRuleRoute,
  getProjectsProjectGlobalForwardingRulesForwardingRuleRoute,
  getProjectsProjectGlobalForwardingRulesRoute,
  patchProjectsProjectGlobalForwardingRulesForwardingRuleRoute,
  postProjectsProjectGlobalForwardingRulesForwardingRuleSetTargetRoute,
  postProjectsProjectGlobalForwardingRulesResourceSetLabelsRoute,
  postProjectsProjectGlobalForwardingRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalForwardingRulesHandler = app
  .openapi(getProjectsProjectGlobalForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalForwardingRulesForwardingRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalForwardingRulesForwardingRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalForwardingRulesForwardingRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalForwardingRulesForwardingRuleSetTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalForwardingRulesResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
