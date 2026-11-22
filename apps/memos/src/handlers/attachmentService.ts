import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAttachmentsAttachmentRoute,
  getApiAttachmentsAttachmentRoute,
  getApiAttachmentsRoute,
  patchApiAttachmentsAttachmentRoute,
  postApiAttachmentsBatchDeleteRoute,
  postApiAttachmentsRoute,
  postApiAttachmentsUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentServiceHandler = app
  .openapi(getApiAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAttachmentsAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAttachmentsAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAttachmentsAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAttachmentsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAttachmentsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
