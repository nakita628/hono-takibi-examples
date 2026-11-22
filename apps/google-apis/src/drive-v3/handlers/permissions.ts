import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdPermissionsPermissionIdRoute,
  getFilesFileIdPermissionsPermissionIdRoute,
  getFilesFileIdPermissionsRoute,
  patchFilesFileIdPermissionsPermissionIdRoute,
  postFilesFileIdPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getFilesFileIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
