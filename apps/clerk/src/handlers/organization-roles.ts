import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute,
  deleteOrganizationRolesOrganizationRoleIdRoute,
  getOrganizationRolesOrganizationRoleIdRoute,
  getOrganizationRolesRoute,
  patchOrganizationRolesOrganizationRoleIdRoute,
  postOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute,
  postOrganizationRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationRolesHandler = app
  .openapi(getOrganizationRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationRolesOrganizationRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationRolesOrganizationRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationRolesOrganizationRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
