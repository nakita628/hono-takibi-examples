import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssueIssueIdOrKeyVotesRoute,
  getRestApi3IssueIssueIdOrKeyVotesRoute,
  postRestApi3IssueIssueIdOrKeyVotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueVotesHandler = app
  .openapi(deleteRestApi3IssueIssueIdOrKeyVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
