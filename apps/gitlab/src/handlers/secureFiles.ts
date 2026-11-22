import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdSecureFilesSecureFileIdRoute,
  getApiV4ProjectsIdSecureFilesRoute,
  getApiV4ProjectsIdSecureFilesSecureFileIdDownloadRoute,
  getApiV4ProjectsIdSecureFilesSecureFileIdRoute,
  postApiV4ProjectsIdSecureFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secureFilesHandler = app
  .openapi(getApiV4ProjectsIdSecureFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdSecureFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSecureFilesSecureFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdSecureFilesSecureFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSecureFilesSecureFileIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
