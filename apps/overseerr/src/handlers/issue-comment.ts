import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIssueCommentCommentIdRoute,
  getIssueCommentCommentIdRoute,
  putIssueCommentCommentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueCommentHandler = app
  .openapi(getIssueCommentCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIssueCommentCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIssueCommentCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
