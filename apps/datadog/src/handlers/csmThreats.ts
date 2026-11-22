import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RemoteConfigProductsCwsAgentRulesAgentRuleIdRoute,
  deleteApiV2RemoteConfigProductsCwsPolicyPolicyIdRoute,
  getApiV2RemoteConfigProductsCwsAgentRulesAgentRuleIdRoute,
  getApiV2RemoteConfigProductsCwsAgentRulesRoute,
  getApiV2RemoteConfigProductsCwsPolicyDownloadRoute,
  getApiV2RemoteConfigProductsCwsPolicyPolicyIdRoute,
  getApiV2RemoteConfigProductsCwsPolicyRoute,
  getApiV2SecurityMonitoringCloudWorkloadSecurityAgentRulesAgentRuleIdRoute,
  getApiV2SecurityMonitoringCloudWorkloadSecurityAgentRulesRoute,
  patchApiV2RemoteConfigProductsCwsAgentRulesAgentRuleIdRoute,
  patchApiV2RemoteConfigProductsCwsPolicyPolicyIdRoute,
  postApiV2RemoteConfigProductsCwsAgentRulesRoute,
  postApiV2RemoteConfigProductsCwsPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const csmThreatsHandler = app
  .openapi(getApiV2RemoteConfigProductsCwsAgentRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RemoteConfigProductsCwsAgentRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RemoteConfigProductsCwsAgentRulesAgentRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RemoteConfigProductsCwsAgentRulesAgentRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RemoteConfigProductsCwsAgentRulesAgentRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RemoteConfigProductsCwsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RemoteConfigProductsCwsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RemoteConfigProductsCwsPolicyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RemoteConfigProductsCwsPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RemoteConfigProductsCwsPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RemoteConfigProductsCwsPolicyPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringCloudWorkloadSecurityAgentRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringCloudWorkloadSecurityAgentRulesAgentRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
