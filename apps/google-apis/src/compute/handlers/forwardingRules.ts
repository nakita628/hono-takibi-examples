import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionForwardingRulesForwardingRuleRoute,
  getProjectsProjectAggregatedForwardingRulesRoute,
  getProjectsProjectRegionsRegionForwardingRulesForwardingRuleRoute,
  getProjectsProjectRegionsRegionForwardingRulesRoute,
  patchProjectsProjectRegionsRegionForwardingRulesForwardingRuleRoute,
  postProjectsProjectRegionsRegionForwardingRulesForwardingRuleSetTargetRoute,
  postProjectsProjectRegionsRegionForwardingRulesResourceSetLabelsRoute,
  postProjectsProjectRegionsRegionForwardingRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const forwardingRulesHandler = app
  .openapi(getProjectsProjectAggregatedForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionForwardingRulesForwardingRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionForwardingRulesForwardingRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionForwardingRulesForwardingRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionForwardingRulesForwardingRuleSetTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionForwardingRulesResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
