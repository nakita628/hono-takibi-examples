import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFileStorageFilesIdRoute,
  getFileStorageFilesIdDownloadRoute,
  getFileStorageFilesIdRoute,
  getFileStorageFilesRoute,
  patchFileStorageFilesIdRoute,
  postFileStorageFilesRoute,
  postFileStorageFilesSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getFileStorageFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageFilesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileStorageFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageFilesIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
