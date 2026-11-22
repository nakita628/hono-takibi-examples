import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSharesSharedDriveItemIdPermissionRoute,
  getSharesSharedDriveItemIdPermissionRoute,
  patchSharesSharedDriveItemIdPermissionRoute,
  postSharesSharedDriveItemIdPermissionGrantRoute,
  postSharesSharedDriveItemIdPermissionRevokeGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesPermissionHandler = app
  .openapi(getSharesSharedDriveItemIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdPermissionGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdPermissionRevokeGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
