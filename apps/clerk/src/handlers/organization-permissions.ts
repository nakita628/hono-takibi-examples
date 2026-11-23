import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationPermissionsPermissionIdRoute,
  getOrganizationPermissionsPermissionIdRoute,
  getOrganizationPermissionsRoute,
  patchOrganizationPermissionsPermissionIdRoute,
  postOrganizationPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationPermissionsHandler = app
  .openapi(getOrganizationPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
