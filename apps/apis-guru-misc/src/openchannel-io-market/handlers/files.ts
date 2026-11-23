import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFilesByIdOrUrlRoute,
  getFilesDownloadRoute,
  getFilesRoute,
  postFilesRoute,
  postFilesUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesByIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
