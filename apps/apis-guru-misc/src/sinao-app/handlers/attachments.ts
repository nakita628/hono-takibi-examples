import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdAttachmentsIdRoute,
  getAppsAppIdAttachmentsDownloadRoute,
  getAppsAppIdAttachmentsIdPdfRoute,
  getAppsAppIdAttachmentsIdRoute,
  getAppsAppIdAttachmentsRoute,
  getAppsAppIdAttachmentsSapDownloadRoute,
  postAppsAppIdAttachmentsRoute,
  putAppsAppIdAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(getAppsAppIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppsAppIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAttachmentsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAttachmentsSapDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAttachmentsIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
