import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3AttachmentIdRoute,
  getRestApi3AttachmentContentIdRoute,
  getRestApi3AttachmentIdExpandHumanRoute,
  getRestApi3AttachmentIdExpandRawRoute,
  getRestApi3AttachmentIdRoute,
  getRestApi3AttachmentMetaRoute,
  getRestApi3AttachmentThumbnailIdRoute,
  postRestApi3IssueIssueIdOrKeyAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueAttachmentsHandler = app
  .openapi(getRestApi3AttachmentContentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3AttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentIdExpandHumanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentIdExpandRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
