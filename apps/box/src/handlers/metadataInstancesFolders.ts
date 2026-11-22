import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFoldersFolderIdMetadataScopeTemplateKeyRoute,
  getFoldersFolderIdMetadataRoute,
  getFoldersFolderIdMetadataScopeTemplateKeyRoute,
  postFoldersFolderIdMetadataScopeTemplateKeyRoute,
  putFoldersFolderIdMetadataScopeTemplateKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataInstancesFoldersHandler = app
  .openapi(getFoldersFolderIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderIdMetadataScopeTemplateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersFolderIdMetadataScopeTemplateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersFolderIdMetadataScopeTemplateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersFolderIdMetadataScopeTemplateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
