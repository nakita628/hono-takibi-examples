import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssueIssueIdOrKeyWorklogIdRoute,
  deleteRestApi3IssueIssueIdOrKeyWorklogRoute,
  getRestApi3IssueIssueIdOrKeyWorklogIdRoute,
  getRestApi3IssueIssueIdOrKeyWorklogRoute,
  getRestApi3WorklogDeletedRoute,
  getRestApi3WorklogUpdatedRoute,
  postRestApi3IssueIssueIdOrKeyWorklogMoveRoute,
  postRestApi3IssueIssueIdOrKeyWorklogRoute,
  postRestApi3WorklogListRoute,
  putRestApi3IssueIssueIdOrKeyWorklogIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueWorklogsHandler = app
  .openapi(deleteRestApi3IssueIssueIdOrKeyWorklogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyWorklogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyWorklogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyWorklogMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyWorklogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyWorklogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyWorklogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorklogDeletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorklogListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorklogUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
