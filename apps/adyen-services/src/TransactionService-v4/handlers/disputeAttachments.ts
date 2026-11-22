import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDisputesDisputeIdAttachmentsAttachmentIdRoute,
  getDisputesDisputeIdAttachmentsAttachmentIdRoute,
  getDisputesDisputeIdAttachmentsRoute,
  postDisputesDisputeIdAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disputeAttachmentsHandler = app
  .openapi(getDisputesDisputeIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisputesDisputeIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDisputesDisputeIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesDisputeIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
