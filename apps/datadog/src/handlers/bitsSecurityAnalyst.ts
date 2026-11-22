import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2SecurityMonitoringSecurityAgentInvestigationsCountRoute,
  getApiV2SecurityMonitoringSecurityAgentInvestigationsInvestigationIdRoute,
  getApiV2SecurityMonitoringSecurityAgentInvestigationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bitsSecurityAnalystHandler = app
  .openapi(getApiV2SecurityMonitoringSecurityAgentInvestigationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringSecurityAgentInvestigationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringSecurityAgentInvestigationsInvestigationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
