import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute,
  deleteRestApi3IssuePropertiesPropertyKeyRoute,
  getRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute,
  getRestApi3IssueIssueIdOrKeyPropertiesRoute,
  postRestApi3IssuePropertiesMultiRoute,
  postRestApi3IssuePropertiesRoute,
  putRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute,
  putRestApi3IssuePropertiesPropertyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issuePropertiesHandler = app
  .openapi(postRestApi3IssuePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuePropertiesMultiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuePropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuePropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
