import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ErrorTrackingIssuesIssueIdAssigneeRoute,
  getApiV2ErrorTrackingIssuesIssueIdImpactRoute,
  getApiV2ErrorTrackingIssuesIssueIdRoute,
  postApiV2ErrorTrackingIssuesIssueIdSnoozeRoute,
  postApiV2ErrorTrackingIssuesSearchRoute,
  putApiV2ErrorTrackingIssuesIssueIdAssigneeRoute,
  putApiV2ErrorTrackingIssuesIssueIdStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const errorTrackingHandler = app
  .openapi(postApiV2ErrorTrackingIssuesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ErrorTrackingIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ErrorTrackingIssuesIssueIdAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ErrorTrackingIssuesIssueIdAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ErrorTrackingIssuesIssueIdImpactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ErrorTrackingIssuesIssueIdSnoozeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ErrorTrackingIssuesIssueIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
