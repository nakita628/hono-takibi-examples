import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePermissionPermissionIdRoute,
  deletePermissionPermissionIdTagTagIdRoute,
  getPermissionPermissionIdRoute,
  getPermissionPermissionIdTagsRoute,
  getPermissionPermissionIdTagTagIdRoute,
  patchPermissionPermissionIdRoute,
  putPermissionPermissionIdRoute,
  putPermissionPermissionIdTagTagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionHandler = app
  .openapi(deletePermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePermissionPermissionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionPermissionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPermissionPermissionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionPermissionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
