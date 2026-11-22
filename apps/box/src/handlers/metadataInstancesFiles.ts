import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdMetadataScopeTemplateKeyRoute,
  getFilesFileIdMetadataRoute,
  getFilesFileIdMetadataScopeTemplateKeyRoute,
  postFilesFileIdMetadataScopeTemplateKeyRoute,
  putFilesFileIdMetadataScopeTemplateKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataInstancesFilesHandler = app
  .openapi(getFilesFileIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdMetadataScopeTemplateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdMetadataScopeTemplateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesFileIdMetadataScopeTemplateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdMetadataScopeTemplateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
