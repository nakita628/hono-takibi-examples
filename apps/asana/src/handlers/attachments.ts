import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttachmentsAttachmentGidRoute,
  getAttachmentsAttachmentGidRoute,
  getAttachmentsRoute,
  postAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(getAttachmentsAttachmentGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttachmentsAttachmentGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
