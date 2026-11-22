import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2FilesIDRoute,
  getApiV2FilesIDFileContentsRoute,
  getApiV2FilesIDRoute,
  getApiV2FilesRoute,
  postApiV2FilesRoute,
  putApiV2FilesIDFileContentsRoute,
  putApiV2FilesIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getApiV2FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FilesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FilesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2FilesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FilesIDFileContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2FilesIDFileContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
