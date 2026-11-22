import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3BulkIssuesFieldsRoute,
  getRestApi3BulkIssuesTransitionRoute,
  getRestApi3BulkQueueTaskIdRoute,
  postRestApi3BulkIssuesDeleteRoute,
  postRestApi3BulkIssuesFieldsRoute,
  postRestApi3BulkIssuesMoveRoute,
  postRestApi3BulkIssuesTransitionRoute,
  postRestApi3BulkIssuesUnwatchRoute,
  postRestApi3BulkIssuesWatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueBulkOperationsHandler = app
  .openapi(postRestApi3BulkIssuesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3BulkIssuesFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3BulkIssuesFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3BulkIssuesMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3BulkIssuesTransitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3BulkIssuesTransitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3BulkIssuesUnwatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3BulkIssuesWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3BulkQueueTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
