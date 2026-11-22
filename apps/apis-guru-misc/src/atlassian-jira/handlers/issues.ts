import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssueIssueIdOrKeyRoute,
  getRestApi3EventsRoute,
  getRestApi3IssueCreatemetaRoute,
  getRestApi3IssueIssueIdOrKeyChangelogRoute,
  getRestApi3IssueIssueIdOrKeyEditmetaRoute,
  getRestApi3IssueIssueIdOrKeyRoute,
  getRestApi3IssueIssueIdOrKeyTransitionsRoute,
  postRestApi3IssueBulkRoute,
  postRestApi3IssueIssueIdOrKeyChangelogListRoute,
  postRestApi3IssueIssueIdOrKeyNotifyRoute,
  postRestApi3IssueIssueIdOrKeyTransitionsRoute,
  postRestApi3IssueRoute,
  putRestApi3IssueIssueIdOrKeyAssigneeRoute,
  putRestApi3IssueIssueIdOrKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issuesHandler = app
  .openapi(getRestApi3EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueCreatemetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyChangelogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyChangelogListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyEditmetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
