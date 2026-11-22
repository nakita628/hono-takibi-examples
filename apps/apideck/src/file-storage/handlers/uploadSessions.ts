import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFileStorageUploadSessionsIdRoute,
  getFileStorageUploadSessionsIdRoute,
  postFileStorageUploadSessionsIdFinishRoute,
  postFileStorageUploadSessionsRoute,
  putFileStorageUploadSessionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadSessionsHandler = app
  .openapi(postFileStorageUploadSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageUploadSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageUploadSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFileStorageUploadSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageUploadSessionsIdFinishRoute, (c) => {
    throw new Error('Not implemented')
  })
