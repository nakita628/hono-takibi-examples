import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateAttachmentDownloadRoute,
  getV1PrivateAttachmentListRoute,
  postV1PrivateAttachmentDeleteRoute,
  postV1PrivateAttachmentUploadCompleteRoute,
  postV1PrivateAttachmentUploadStartRoute,
  putV1PrivateAttachmentUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(getV1PrivateAttachmentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAttachmentUploadCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAttachmentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAttachmentDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAttachmentUploadStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAttachmentUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
