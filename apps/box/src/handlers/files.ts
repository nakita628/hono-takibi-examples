import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdRoute,
  getFilesFileIdRoute,
  getFilesFileIdThumbnailExtensionRoute,
  optionsFilesContentRoute,
  postFilesFileIdCopyRoute,
  putFilesFileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsFilesContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdThumbnailExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
