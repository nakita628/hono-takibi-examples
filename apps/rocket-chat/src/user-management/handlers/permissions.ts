import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PermissionsListAllRoute,
  postApiV1PermissionsAddRoleRoute,
  postApiV1PermissionsRemoveRoleRoute,
  postApiV1PermissionsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getApiV1PermissionsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PermissionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PermissionsAddRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PermissionsRemoveRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
