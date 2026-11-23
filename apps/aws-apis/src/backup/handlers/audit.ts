import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuditFrameworksFrameworkNameRoute,
  deleteAuditReportPlansReportPlanNameRoute,
  getAuditFrameworksFrameworkNameRoute,
  getAuditFrameworksRoute,
  getAuditReportJobsReportJobIdRoute,
  getAuditReportJobsRoute,
  getAuditReportPlansReportPlanNameRoute,
  getAuditReportPlansRoute,
  postAuditFrameworksRoute,
  postAuditReportJobsReportPlanNameRoute,
  postAuditReportPlansRoute,
  putAuditFrameworksFrameworkNameRoute,
  putAuditReportPlansReportPlanNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditHandler = app
  .openapi(postAuditFrameworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditFrameworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditReportPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditReportPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuditFrameworksFrameworkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditFrameworksFrameworkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuditFrameworksFrameworkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuditReportPlansReportPlanNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditReportPlansReportPlanNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuditReportPlansReportPlanNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditReportJobsReportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditReportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditReportJobsReportPlanNameRoute, (c) => {
    throw new Error('Not implemented')
  })
