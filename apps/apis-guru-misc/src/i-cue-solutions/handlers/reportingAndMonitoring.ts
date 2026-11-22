import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportPerformancePlanningLevelIdRoute,
  getReportPerformanceSkuRationalizationPlanningLevelIdRoute,
  getReportPlanningLevelOrganizationRoute,
  getReportPlanningLevelUserRoute,
  getReportUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportingAndMonitoringHandler = app
  .openapi(getReportPerformanceSkuRationalizationPlanningLevelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPerformancePlanningLevelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPlanningLevelOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPlanningLevelUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportUserRoute, (c) => {
    throw new Error('Not implemented')
  })
