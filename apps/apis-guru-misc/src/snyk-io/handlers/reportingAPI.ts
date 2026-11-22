import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postReportingCountsIssuesLatestRoute,
  postReportingCountsIssuesRoute,
  postReportingCountsProjectsLatestRoute,
  postReportingCountsProjectsRoute,
  postReportingCountsTestsRoute,
  postReportingIssuesIndexRoute,
  postReportingIssuesLatestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportingAPIHandler = app
  .openapi(postReportingCountsIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportingCountsIssuesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportingCountsProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportingCountsProjectsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportingCountsTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportingIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportingIssuesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
