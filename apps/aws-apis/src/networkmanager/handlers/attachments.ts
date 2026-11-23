import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttachmentsAttachmentIdRoute,
  getAttachmentsRoute,
  postAttachmentsAttachmentIdAcceptRoute,
  postAttachmentsAttachmentIdRejectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(postAttachmentsAttachmentIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttachmentsAttachmentIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
