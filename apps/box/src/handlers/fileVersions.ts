import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdVersionsFileVersionIdRoute,
  getFilesFileIdVersionsFileVersionIdRoute,
  getFilesFileIdVersionsRoute,
  postFilesFileIdVersionsCurrentRoute,
  putFilesFileIdVersionsFileVersionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileVersionsHandler = app
  .openapi(getFilesFileIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdVersionsFileVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdVersionsFileVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesFileIdVersionsFileVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdVersionsCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
