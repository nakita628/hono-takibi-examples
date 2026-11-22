import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1PermissionsCheckMultipleWorkspacesRoute,
  postV1PermissionsCheckRoute,
  postV1PermissionsCreateRoute,
  postV1PermissionsDeleteRoute,
  postV1PermissionsDeleteUserFromWorkspaceRoute,
  postV1PermissionsGetRoute,
  postV1PermissionsListByUserRoute,
  postV1PermissionsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionHandler = app
  .openapi(postV1PermissionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsCheckMultipleWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsDeleteUserFromWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PermissionsListByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
