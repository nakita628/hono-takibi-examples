import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssueIssueIdOrKeyCommentIdRoute,
  getRestApi3IssueIssueIdOrKeyCommentIdRoute,
  getRestApi3IssueIssueIdOrKeyCommentRoute,
  postRestApi3CommentListRoute,
  postRestApi3IssueIssueIdOrKeyCommentRoute,
  putRestApi3IssueIssueIdOrKeyCommentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueCommentsHandler = app
  .openapi(postRestApi3CommentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
