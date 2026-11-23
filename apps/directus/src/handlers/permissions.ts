import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePermissionsIdRoute,
  deletePermissionsRoute,
  getPermissionsIdRoute,
  getPermissionsMeRoute,
  getPermissionsRoute,
  patchPermissionsIdRoute,
  patchPermissionsRoute,
  postPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
