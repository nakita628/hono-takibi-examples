import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFileStorageDrivesIdRoute,
  getFileStorageDrivesIdRoute,
  getFileStorageDrivesRoute,
  patchFileStorageDrivesIdRoute,
  postFileStorageDrivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drivesHandler = app
  .openapi(getFileStorageDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageDrivesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageDrivesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileStorageDrivesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
