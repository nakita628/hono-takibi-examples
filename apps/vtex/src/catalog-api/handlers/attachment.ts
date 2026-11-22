import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtAttachmentAttachmentidRoute,
  getApiCatalogPvtAttachmentAttachmentidRoute,
  getApiCatalogPvtAttachmentsRoute,
  postApiCatalogPvtAttachmentRoute,
  putApiCatalogPvtAttachmentAttachmentidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentHandler = app
  .openapi(postApiCatalogPvtAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtAttachmentAttachmentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtAttachmentAttachmentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtAttachmentAttachmentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
