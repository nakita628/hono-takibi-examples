import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute,
  deleteRestApi3PermissionschemeSchemeIdRoute,
  getRestApi3PermissionschemeRoute,
  getRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute,
  getRestApi3PermissionschemeSchemeIdPermissionRoute,
  getRestApi3PermissionschemeSchemeIdRoute,
  postRestApi3PermissionschemeRoute,
  postRestApi3PermissionschemeSchemeIdPermissionRoute,
  putRestApi3PermissionschemeSchemeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionSchemesHandler = app
  .openapi(getRestApi3PermissionschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PermissionschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3PermissionschemeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PermissionschemeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PermissionschemeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PermissionschemeSchemeIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PermissionschemeSchemeIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
