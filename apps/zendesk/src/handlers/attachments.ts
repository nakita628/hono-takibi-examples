import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AttachmentsAttachmentIdRoute,
  deleteApiV2UploadsTokenRoute,
  getApiV2AttachmentsAttachmentIdRoute,
  postApiV2UploadsRoute,
  putApiV2AttachmentsAttachmentIdRoute,
  putApiV2TicketsTicketIdCommentsCommentIdAttachmentsAttachmentIdRedactRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(getApiV2AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdCommentsCommentIdAttachmentsAttachmentIdRedactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UploadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
