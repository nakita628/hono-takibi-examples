import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdRoute,
  getFilesFileIdDownloadRoute,
  getFilesFileIdRoute,
  getFilesRoute,
  postFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
