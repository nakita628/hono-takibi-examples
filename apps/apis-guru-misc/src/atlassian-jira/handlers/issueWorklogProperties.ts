import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute,
  getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute,
  getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesRoute,
  putRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueWorklogPropertiesHandler = app
  .openapi(getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
