import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFileStorageDriveGroupsIdRoute,
  getFileStorageDriveGroupsIdRoute,
  getFileStorageDriveGroupsRoute,
  patchFileStorageDriveGroupsIdRoute,
  postFileStorageDriveGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const driveGroupsHandler = app
  .openapi(getFileStorageDriveGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageDriveGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageDriveGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageDriveGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileStorageDriveGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
