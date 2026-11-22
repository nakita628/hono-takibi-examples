import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdIssuesIssueIidLinksIssueLinkIdRoute,
  getApiV4IssuesIdRoute,
  getApiV4IssuesRoute,
  getApiV4IssuesStatisticsRoute,
  getApiV4ProjectsIdIssuesIssueIidLinksIssueLinkIdRoute,
  getApiV4ProjectsIdIssuesIssueIidLinksRoute,
  getApiV4ProjectsIdIssuesIssueIidParticipantsRoute,
  getApiV4ProjectsIdIssuesIssueIidRelatedMergeRequestsRoute,
  getApiV4ProjectsIdIssuesIssueIidTimeStatsRoute,
  getApiV4ProjectsIdIssuesIssueIidUserAgentDetailRoute,
  postApiV4ProjectsIdIssuesIssueIidAddSpentTimeRoute,
  postApiV4ProjectsIdIssuesIssueIidLinksRoute,
  postApiV4ProjectsIdIssuesIssueIidResetSpentTimeRoute,
  postApiV4ProjectsIdIssuesIssueIidResetTimeEstimateRoute,
  postApiV4ProjectsIdIssuesIssueIidTimeEstimateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issuesHandler = app
  .openapi(getApiV4IssuesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4IssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4IssuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidTimeEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidResetTimeEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidAddSpentTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidResetSpentTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidTimeStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidRelatedMergeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidUserAgentDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesIssueIidLinksIssueLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdIssuesIssueIidLinksIssueLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
