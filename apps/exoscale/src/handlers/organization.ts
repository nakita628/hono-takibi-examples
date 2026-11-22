import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEnvImpactPeriodRoute,
  getLiveBalanceRoute,
  getOrganizationRoute,
  getUsageReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(getUsageReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvImpactPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
