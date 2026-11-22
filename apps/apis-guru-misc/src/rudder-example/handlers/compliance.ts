import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getComplianceNodesNodeIdRoute,
  getComplianceNodesRoute,
  getComplianceRoute,
  getComplianceRulesRoute,
  getComplianceRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const complianceHandler = app
  .openapi(getComplianceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComplianceNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComplianceNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComplianceRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComplianceRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
