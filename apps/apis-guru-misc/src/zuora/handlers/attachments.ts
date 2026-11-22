import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AttachmentsAttachmentIdRoute,
  getV1AttachmentsAttachmentIdRoute,
  getV1AttachmentsObjectTypeObjectKeyRoute,
  postV1AttachmentsRoute,
  putV1AttachmentsAttachmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(postV1AttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttachmentsObjectTypeObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
