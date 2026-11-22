import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesUploadSessionsUploadSessionIdRoute,
  getFilesUploadSessionsUploadSessionIdPartsRoute,
  getFilesUploadSessionsUploadSessionIdRoute,
  postFilesFileIdUploadSessionsRoute,
  postFilesUploadSessionsRoute,
  postFilesUploadSessionsUploadSessionIdCommitRoute,
  putFilesUploadSessionsUploadSessionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadsChunkedHandler = app
  .openapi(postFilesUploadSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesUploadSessionsUploadSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesUploadSessionsUploadSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesUploadSessionsUploadSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesUploadSessionsUploadSessionIdCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesUploadSessionsUploadSessionIdPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdUploadSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
