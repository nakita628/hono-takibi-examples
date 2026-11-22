import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getPermissionGrantsRoute,
  patchPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  postPermissionGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionGrantsResourceSpecificPermissionGrantHandler = app
  .openapi(getPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
