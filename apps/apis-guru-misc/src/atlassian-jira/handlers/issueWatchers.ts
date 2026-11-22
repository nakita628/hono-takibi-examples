import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssueIssueIdOrKeyWatchersRoute,
  getRestApi3IssueIssueIdOrKeyWatchersRoute,
  postRestApi3IssueIssueIdOrKeyWatchersRoute,
  postRestApi3IssueWatchingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueWatchersHandler = app
  .openapi(postRestApi3IssueWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
