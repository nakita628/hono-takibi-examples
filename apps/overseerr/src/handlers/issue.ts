import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIssueCommentCommentIdRoute,
  deleteIssueIssueIdRoute,
  getIssueCommentCommentIdRoute,
  getIssueCountRoute,
  getIssueIssueIdRoute,
  getIssueRoute,
  postIssueIssueIdCommentRoute,
  postIssueIssueIdStatusRoute,
  postIssueRoute,
  putIssueCommentCommentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueHandler = app
  .openapi(getIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIssueIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssueIssueIdCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueCommentCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIssueCommentCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIssueCommentCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssueIssueIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
