import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSharesSharedDriveItemIdPermissionRoute,
  getSharesSharedDriveItemIdPermissionRoute,
  patchSharesSharedDriveItemIdPermissionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesPermissionHandler = app
  .openapi(deleteSharesSharedDriveItemIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
