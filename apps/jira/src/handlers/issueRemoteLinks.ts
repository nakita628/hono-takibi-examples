import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute,
  deleteRestApi3IssueIssueIdOrKeyRemotelinkRoute,
  getRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute,
  getRestApi3IssueIssueIdOrKeyRemotelinkRoute,
  postRestApi3IssueIssueIdOrKeyRemotelinkRoute,
  putRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueRemoteLinksHandler = app
  .openapi(deleteRestApi3IssueIssueIdOrKeyRemotelinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyRemotelinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyRemotelinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
