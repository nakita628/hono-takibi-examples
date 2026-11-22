import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityRulesDetectionRulesDetectionRuleIdRoute,
  deleteSecurityRulesRoute,
  getSecurityRulesDetectionRulesCountRoute,
  getSecurityRulesDetectionRulesDetectionRuleIdRoute,
  getSecurityRulesDetectionRulesRoute,
  getSecurityRulesRoute,
  patchSecurityRulesDetectionRulesDetectionRuleIdRoute,
  patchSecurityRulesRoute,
  postSecurityRulesDetectionRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityRulesRootHandler = app
  .openapi(getSecurityRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityRulesDetectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityRulesDetectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityRulesDetectionRulesDetectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityRulesDetectionRulesDetectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityRulesDetectionRulesDetectionRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityRulesDetectionRulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
